export interface AnimeItem {
  id: string
  title: string
  synopsis: string
  thumbnail: string
  status: "ongoing" | "completed"
  created_at: string
}

export interface AnimeDetail extends AnimeItem {
  episodes: EpisodeItem[]
}

export interface EpisodeItem {
  id: string
  anime_id: string
  title: string
  episode_number: number
  thumbnail: string
  video_embed_links: VideoLink[]
  video_mirrors: VideoLink[]
  video_direct_links: VideoDirectLink[]
  created_at: string
}

export interface EpisodeDetail extends EpisodeItem {
  anime: AnimeItem
}

export interface VideoLink {
  resolution: string
  link: string
}

export interface VideoDirectLink extends VideoLink {
  headers: {
    Referer: string
  }
}

