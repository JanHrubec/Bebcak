import hosted from './hosted-videos.json' with { type: 'json' }

export interface HostedVideo { url: string; size: number; sha256: string }
export const hostedVideos: Record<string, HostedVideo> = hosted.files

// Keep catalogue paths stable for provenance; hosting can change independently.
export function getVideoUrl(source: string): string {
  return hostedVideos[source]?.url ?? source
}
