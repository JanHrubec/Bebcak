export interface Project {
  id: string
  slug: string
  title: string
  year: number
  client: string
  director?: string
  description: string
  thumbnail: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nocturnal-echoes',
    title: 'Nocturnal Echoes',
    year: 2025,
    client: 'Vogue Czechoslovakia',
    director: 'Jan Kovařík',
    description: 'A cinematic exploration of nocturnal fashion, blending ethereal silhouettes with dramatic lighting. This editorial series captures the essence of nighttime elegance through carefully curated costumes that merge contemporary design with timeless sophistication.',
    thumbnail: '/images/projects/nocturnal-echoes/thumb.svg',
    images: [
      '/images/projects/nocturnal-echoes/1.svg',
      '/images/projects/nocturnal-echoes/2.svg',
      '/images/projects/nocturnal-echoes/3.svg',
      '/images/projects/nocturnal-echoes/4.svg',
    ],
  },
  {
    id: '2',
    slug: 'urban-tapestry',
    title: 'Urban Tapestry',
    year: 2025,
    client: 'Harper\'s Bazaar',
    director: 'Marie Svobodová',
    description: 'Street-inspired couture meets high fashion in this vibrant editorial. The collection showcases how urban textures and architectural forms can translate into wearable art, featuring bold patterns and structured silhouettes.',
    thumbnail: '/images/projects/urban-tapestry/thumb.svg',
    images: [
      '/images/projects/urban-tapestry/1.svg',
      '/images/projects/urban-tapestry/2.svg',
      '/images/projects/urban-tapestry/3.svg',
    ],
  },
  {
    id: '3',
    slug: 'velvet-dusk',
    title: 'Velvet Dusk',
    year: 2024,
    client: 'Elle Magazine',
    director: 'Petr Novák',
    description: 'An intimate portrait series exploring the interplay of light and fabric. Rich velvets and flowing silks create a dreamlike atmosphere, evoking the golden hour\'s fleeting beauty.',
    thumbnail: '/images/projects/velvet-dusk/thumb.svg',
    images: [
      '/images/projects/velvet-dusk/1.svg',
      '/images/projects/velvet-dusk/2.svg',
      '/images/projects/velvet-dusk/3.svg',
      '/images/projects/velvet-dusk/4.svg',
      '/images/projects/velvet-dusk/5.svg',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAdjacentProjects(currentId: string): { prev: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex(p => p.id === currentId)
  if (currentIndex === -1) return { prev: null, next: null }
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  }
}

export function getProjectsByYear(): Map<number, Project[]> {
  const grouped = new Map<number, Project[]>()
  
  projects.forEach(project => {
    const year = project.year
    if (!grouped.has(year)) {
      grouped.set(year, [])
    }
    grouped.get(year)!.push(project)
  })
  
  return new Map([...grouped.entries()].sort((a, b) => b[0] - a[0]))
}
