export interface Anime {
  title: string;
  param: string;
  thumbnail: string;
  upload_time: string;
  detail_url: string;
}

export interface AnimeDetail {
  name: string;
  synopsis: string;
  thumbnail: string;
  episode_navigation: {
    nav_name: string;
    nav_link: string;
  }[];
  video_embed_links: {
    resolution: string;
    link: string;
  }[];
  video_mirrors: {
    resolution: string;
    link: string;
  }[];
  video_direct_links: {
    resolution: string;
    link: string;
    headers: {
      Referer: string;
    };
  }[];
}

export interface EpisodeDetail {
  url: string;
}