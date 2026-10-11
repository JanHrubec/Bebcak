export interface ImageDimensions { width: number; height: number; crop?: { width: number; height: number } }
export function imageDimensions(image: ImageDimensions): { width: number; height: number } {
  return image.crop ?? image
}
export interface GalleryRow { indexes: number[]; height: number; width: number }

// Fit complete photographs into balanced rows; never stretch a low-resolution original.
export function galleryRows(images: ImageDimensions[], availableWidth: number, gap = 16): GalleryRow[] {
  const width = Math.max(1, availableWidth)
  const maxItems = width < 600 ? 1 : width < 850 ? 3 : 4
  const target = Math.min(260, width / 3)
  const costs = Array(images.length + 1).fill(Infinity) as number[]
  const choices: GalleryRow[] = []
  costs[images.length] = 0
  for (let start = images.length - 1; start >= 0; start--) {
    let ratio = 0
    let intrinsicHeight = Infinity
    let narrowestRatio = Infinity
    for (let count = 1; count <= maxItems && start + count <= images.length; count++) {
      const photo = imageDimensions(images[start + count - 1]!)
      ratio += photo.width / photo.height
      narrowestRatio = Math.min(narrowestRatio, photo.width / photo.height)
      intrinsicHeight = Math.min(intrinsicHeight, photo.height)
      const height = Math.min((width - gap * (count - 1)) / ratio, intrinsicHeight, 640)
      // A portrait beside panoramas still needs enough width to show the costume.
      if (count > 1 && height * narrowestRatio < Math.min(180, width / 3)) continue
      const rowWidth = height * ratio + gap * (count - 1)
      // Penalize tall rows and avoid leaving a lone, tiny photograph at the end.
      const cost = ((height - target) / target) ** 2 * 3 + (1 - rowWidth / width) ** 2 * 2 + .35 + costs[start + count]!
      if (cost < costs[start]!) {
        costs[start] = cost
        choices[start] = { indexes: Array.from({ length: count }, (_, i) => start + i), height, width: rowWidth }
      }
    }
  }
  const rows: GalleryRow[] = []
  for (let index = 0; index < images.length;) {
    const row = choices[index]!
    rows.push(row)
    index += row.indexes.length
  }
  return rows
}
