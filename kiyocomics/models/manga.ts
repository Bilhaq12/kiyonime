export interface Chapter {
  chapter: string;
  param: string;
  release: string;
  detail_url: string;
}

export interface Manga {
  title: string;
  description: string;
  latest_chapter: string;
  thumbnail: string;
  param: string;
  detail_url: string;
}

export interface MangaDetail {
  title: string;
  param: string;
  thumbnail: string;
  genre: string[];
  synopsis: string;
  chapters: Chapter[];
}

export interface ChapterDetail {
  data: string[];
}