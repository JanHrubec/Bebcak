import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectsByView,
  projects,
  viewOptions,
} from '../src/data/projects.ts'

const publicAssetExists = (assetPath) => {
  return assetPath.startsWith('/')
    && existsSync(resolve('public', assetPath.slice(1)))
}

test('project identifiers and routes are unique and URL-safe', () => {
  const ids = projects.map((project) => project.id)
  const slugs = projects.map((project) => project.slug)

  assert.equal(new Set(ids).size, ids.length, 'Project ids must be unique')
  assert.equal(new Set(slugs).size, slugs.length, 'Project slugs must be unique')

  for (const project of projects) {
    assert.match(project.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert.equal(project.title.trim().length > 0, true)
    assert.equal(getProjectBySlug(project.slug), project)
  }
})

test('every portfolio view and project relationship is valid', () => {
  const validViews = new Set(viewOptions.map((option) => option.id))

  for (const project of projects) {
    assert.equal(validViews.has(project.role), true, `Unknown role on ${project.slug}`)
  }

  for (const view of validViews) {
    const scopedProjects = getProjectsByView(view)

    for (const [index, project] of scopedProjects.entries()) {
      const adjacent = getAdjacentProjects(project.slug, view)
      assert.equal(adjacent.prev, scopedProjects[index - 1] ?? null)
      assert.equal(adjacent.next, scopedProjects[index + 1] ?? null)
    }
  }
})

test('all configured project media exists in public', () => {
  for (const project of projects) {
    assert.equal(
      publicAssetExists(project.thumbnail),
      true,
      `Missing thumbnail for ${project.slug}: ${project.thumbnail}`,
    )
    assert.equal(
      project.images.length > 0 || Boolean(project.video),
      true,
      `${project.slug} needs at least one gallery image or video`,
    )

    for (const image of project.images) {
      assert.equal(publicAssetExists(image), true, `Missing image for ${project.slug}: ${image}`)
    }

    if (project.video) {
      assert.equal(
        publicAssetExists(project.video),
        true,
        `Missing video for ${project.slug}: ${project.video}`,
      )
    }
  }
})
