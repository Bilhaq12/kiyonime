export interface AnimeItem {
  id: string
  title: string
  thumbnail: string
  param: string
  upload_time: string
  detail_url: string
}

export interface AnimeDetail extends AnimeItem {
  synopsis: string
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

