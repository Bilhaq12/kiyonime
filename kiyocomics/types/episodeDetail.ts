export interface AnimeResponse {
    max_page: number
    next_page: string | null
    prev_page: string | null
    data: AnimeItem[]
  }
  
  export interface AnimeItem {
    title: string
    param: string
    thumbnail: string
    upload_time: string
    detail_url: string
  }
  
  export interface AnimeDetail {
    name: string
    synopsis: string
    thumbnail: string
    episode_navigation: EpisodeNavigation[]
  }
  
  export interface EpisodeNavigation {
    nav_name: string
    nav_link: string
  }
  
  export interface EpisodeDetail {
    name: string
    synopsis: string
    thumbnail: string
    episode_navigation: EpisodeNavigation[]
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
  
  