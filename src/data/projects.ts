export type PortfolioView = 'costume-designer' | 'wardrobe-stylist'

export interface ViewOption {
  id: PortfolioView
  label: string
}

export interface ProjectFact {
  label: string
  value: string
}

export interface ProjectTextSection {
  heading?: string
  body: string
}

export interface Project {
  id: string
  slug: string
  role: PortfolioView
  title: string
  thumbnail: string
  images: string[]
  video?: string
  cardMeta?: string[]
  intro?: string
  facts?: ProjectFact[]
  textSections?: ProjectTextSection[]
}

export const viewOptions: ViewOption[] = [
  {
    id: 'costume-designer',
    label: 'Costume designer',
  },
  {
    id: 'wardrobe-stylist',
    label: 'Wardrobe stylist',
  },
]

export const defaultView: PortfolioView = 'costume-designer'

export const projects: Project[] = [
  {
    id: 'velvet-dusk',
    slug: 'velvet-dusk',
    role: 'costume-designer',
    title: 'Velvet Dusk',
    thumbnail: '/images/projects/velvet-dusk/thumb.svg',
    images: [
      '/images/projects/velvet-dusk/1.svg',
      '/images/projects/velvet-dusk/2.svg',
      '/images/projects/velvet-dusk/3.svg',
      '/images/projects/velvet-dusk/4.svg',
      '/images/projects/velvet-dusk/5.svg',
    ],
    video: '/images/projects/velvet-dusk/video.mp4',
    cardMeta: ['Individual costume study', 'Textile layering and silhouette work'],
    intro: 'A character-led costume study built around contrast between weight, softness, and restrained movement.',
    facts: [
      { label: 'Focus', value: 'Silhouette, textile layering, tonal contrast' },
      { label: 'Materials', value: 'Velvet, structured cotton, softened tailoring' },
    ],
    textSections: [
      {
        heading: 'Design approach',
        body: 'The costume was developed from the idea of a formal shape that feels slightly worn-in. The outer volume stays sculptural, while the surface and finish keep it human and intimate.',
      },
      {
        heading: 'Construction notes',
        body: 'Layering was used to create depth without making the figure feel heavy. The palette stays narrow so the attention can move toward texture, cut, and the way the garment reacts in motion.',
      },
    ],
  },
  {
    id: 'nocturnal-echoes',
    slug: 'nocturnal-echoes',
    role: 'costume-designer',
    title: 'Nocturnal Echoes',
    thumbnail: '/images/projects/nocturnal-echoes/thumb.svg',
    images: [
      '/images/projects/nocturnal-echoes/1.svg',
      '/images/projects/nocturnal-echoes/2.svg',
      '/images/projects/nocturnal-echoes/3.svg',
      '/images/projects/nocturnal-echoes/4.svg',
    ],
    video: '/images/projects/nocturnal-echoes/video.mp4',
    cardMeta: ['Character costume', 'Night palette and reflective detailing'],
    intro: 'A costume concept designed to hold its shape in low light while still reading clearly through small reflective accents.',
    facts: [
      { label: 'Focus', value: 'Character identity, light response, visual rhythm' },
      { label: 'Palette', value: 'Deep neutrals with reflective highlights' },
    ],
    textSections: [
      {
        heading: 'Design approach',
        body: 'This piece was shaped around the way edges appear after dark. The cut stays graphic and clean, while reflective details introduce definition only when the light hits at the right angle.',
      },
    ],
  },
  {
    id: 'urban-tapestry',
    slug: 'urban-tapestry',
    role: 'wardrobe-stylist',
    title: 'Urban Tapestry',
    thumbnail: '/images/projects/urban-tapestry/thumb.svg',
    images: [
      '/images/projects/urban-tapestry/1.svg',
      '/images/projects/urban-tapestry/2.svg',
      '/images/projects/urban-tapestry/3.svg',
    ],
    video: '/images/projects/urban-tapestry/video.mp4',
    cardMeta: ['Commercial campaign', 'KFC', 'Director: Marie Svobodova'],
    intro: 'Wardrobe styling for a commercial campaign with a bright, graphic, street-facing tone.',
    facts: [
      { label: 'Client', value: 'KFC' },
      { label: 'Director', value: 'Marie Svobodova' },
    ],
  },
]

export function isPortfolioView(value: unknown): value is PortfolioView {
  return value === 'costume-designer' || value === 'wardrobe-stylist'
}

export function getProjectsByView(view: PortfolioView): Project[] {
  return projects.filter((project) => project.role === view)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(
  currentSlug: string,
  view: PortfolioView,
): { prev: Project | null; next: Project | null } {
  const scopedProjects = getProjectsByView(view)
  const currentIndex = scopedProjects.findIndex((project) => project.slug === currentSlug)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: currentIndex > 0 ? scopedProjects[currentIndex - 1] : null,
    next: currentIndex < scopedProjects.length - 1 ? scopedProjects[currentIndex + 1] : null,
  }
}
