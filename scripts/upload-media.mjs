import { createReadStream } from 'node:fs'
import { readFile, writeFile, rename, stat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { basename, resolve } from 'node:path'
import { Readable } from 'node:stream'
import { BlobNotFoundError, head, put } from '@vercel/blob'
import { projects } from '../src/data/projects.ts'

const destination = resolve('src/data/hosted-videos.json')
const sources = [...new Set(projects.flatMap(project => project.videos.map(video => video.src)))]
const manifest = JSON.parse(await readFile(destination, 'utf8'))
const save = async () => {
  await writeFile(destination + '.tmp', JSON.stringify(manifest, null, 2) + '\n')
  await rename(destination + '.tmp', destination)
}
const fingerprint = async file => {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(file)) hash.update(chunk)
  return hash.digest('hex')
}

async function upload() {
  let total = 0
  for (const source of sources) total += (await stat(resolve('public', source.slice(1)))).size
  console.log(`${sources.length} published films, ${(total / 1024 ** 2).toFixed(1)} MiB. Images remain in Git.`)
  if (process.argv.includes('--dry-run')) return
  if (!process.env.BLOB_READ_WRITE_TOKEN && !(process.env.BLOB_STORE_ID && process.env.VERCEL_OIDC_TOKEN)) {
    const instructions = process.env.VERCEL_OIDC_TOKEN
      ? 'Vercel login succeeded, but BLOB_STORE_ID is missing. In the Public Blob store’s Projects tab, connect this project with Development enabled (or update its existing connection). Then run npx vercel env pull .env.local --environment=development and retry. Linking the Git project alone does not connect Blob storage.'
      : 'Create/connect a Public Blob store for Development, run npx vercel link, then npx vercel env pull .env.local --environment=development.'
    throw new Error(`Missing Blob credentials.\n${instructions}\nNever put Blob credentials in a VITE_ variable or paste them into chat.`)
  }
  for (const [index, source] of sources.entries()) {
    const file = resolve('public', source.slice(1))
    const size = (await stat(file)).size
    const sha256 = await fingerprint(file)
    // Content-addressed paths are immutable. Changed files get new URLs; reruns resume safely.
    const pathname = `videos/${sha256}/${basename(file)}`
    let blob
    try {
      blob = await head(pathname)
      if (blob.size !== size) throw new Error('A remote file has the wrong size.')
    } catch (error) {
      if (!(error instanceof BlobNotFoundError)) throw error
      blob = await put(pathname, Readable.toWeb(createReadStream(file)), {
        access: 'public', addRandomSuffix: false, allowOverwrite: false,
        contentType: 'video/mp4', multipart: true,
      })
    }
    const url = new URL(blob.url)
    if (url.protocol !== 'https:' || !url.hostname.endsWith('.public.blob.vercel-storage.com')) throw new Error('Expected a Public Blob URL.')
    manifest.files[source] = { url: url.href, size, sha256 }
    await save()
    console.log(`[${index + 1}/${sources.length}] ${basename(file)} ready`)
  }
  // A completed manifest contains only current catalogue films.
  manifest.files = Object.fromEntries(sources.map(source => [source, manifest.files[source]]))
  await save()
  console.log('Upload complete. Public URLs saved in src/data/hosted-videos.json. Run npm run media:verify next.')
}
try {
  await upload()
} catch (error) {
  // Avoid echoing SDK errors containing credentials or request headers.
  console.error(error.message?.startsWith('Missing Blob credentials.') ? error.message : `Upload stopped (${error.name}). Check the Public Blob store, Development credentials and network connection. Previously uploaded films are preserved; rerun the command to resume.`)
  process.exitCode = 1
}
