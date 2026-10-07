import { readFile, stat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { projects } from '../src/data/projects.ts'

const manifest = JSON.parse(await readFile('src/data/hosted-videos.json', 'utf8'))
const sources = [...new Set(projects.flatMap(project => project.videos.map(video => video.src)))]
const errors = []
let cursor = 0
async function verify(source) {
  const entry = manifest.files[source]
  if (!entry) throw new Error('no uploaded URL')
  const url = new URL(entry.url)
  if (url.protocol !== 'https:' || url.username || url.password || url.search) throw new Error('invalid public URL')
  const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`public request returned HTTP ${response.status}`)
  if (Number(response.headers.get('content-length')) !== entry.size) throw new Error('remote size differs from upload record')
  if (!response.headers.get('content-type')?.includes('video/mp4')) throw new Error('wrong content type')
  const local = resolve('public', source.slice(1))
  let localStat
  try { localStat = await stat(local) } catch (error) { if (error.code !== 'ENOENT') throw error }
  if (localStat) {
    const hash = createHash('sha256')
    for await (const chunk of createReadStream(local)) hash.update(chunk)
    if (localStat.size !== entry.size || hash.digest('hex') !== entry.sha256) throw new Error('local film changed since upload')
  }
}
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < sources.length) {
    const source = sources[cursor++]
    try { await verify(source) } catch (error) { errors.push(`${source}: ${error.message}`) }
  }
}))
if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else console.log(`Verified all ${sources.length} public films and available local originals. Ready to build and commit.`)
