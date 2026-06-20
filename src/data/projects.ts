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
    client: 'Škoda',
    director: 'Jan Kovařík',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl enim, viverra id nisi eget, scelerisque pulvinar magna. Quisque ac augue leo. Suspendisse convallis, est vitae dignissim volutpat, erat purus pulvinar velit, non blandit sapien odio a mauris. Phasellus nulla libero, fermentum sit amet justo at, dapibus porttitor quam. Duis imperdiet libero nisi, quis finibus leo laoreet non. In quis convallis urna. Mauris porta posuere augue nec pretium.',
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
    client: 'KFC',
    director: 'Marie Svobodová',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl enim, viverra id nisi eget, scelerisque pulvinar magna. Quisque ac augue leo. Suspendisse convallis, est vitae dignissim volutpat, erat purus pulvinar velit, non blandit sapien odio a mauris. Phasellus nulla libero, fermentum sit amet justo at, dapibus porttitor quam. Duis imperdiet libero nisi, quis finibus leo laoreet non. In quis convallis urna. Mauris porta posuere augue nec pretium.',
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
    client: 'Božkov',
    director: 'Petr Novák',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl enim, viverra id nisi eget, scelerisque pulvinar magna. Quisque ac augue leo. Suspendisse convallis, est vitae dignissim volutpat, erat purus pulvinar velit, non blandit sapien odio a mauris. Phasellus nulla libero, fermentum sit amet justo at, dapibus porttitor quam. Duis imperdiet libero nisi, quis finibus leo laoreet non. In quis convallis urna. Mauris porta posuere augue nec pretium.',
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
