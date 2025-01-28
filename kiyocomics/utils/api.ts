import { create } from 'zustand';
import { Manga, MangaDetail, ChapterDetail } from '../models/manga';
import { Anime, AnimeDetail, EpisodeDetail } from '../models/anime';

interface MangaState {
  mangas: Manga[];
  mangaDetail: MangaDetail | null;
  chapterDetail: ChapterDetail | null;
  fetchMangas: (page?: number, tag?: string) => Promise<void>;
  fetchMangaDetail: (param: string) => Promise<void>;
  fetchChapterDetail: (chapterUrl: string) => Promise<void>;
}

export const useMangaStore = create<MangaState>((set) => ({
  mangas: [],
  mangaDetail: null,
  chapterDetail: null,
  fetchMangas: async (page = 1, tag = 'hot') => {
    const response = await fetch(
      `https://api.lopyubibil.site/api/komiku?page=${page}&tag=${tag}`,
    );
    const data = await response.json();
    set({ mangas: data.data });
  },
  fetchMangaDetail: async (param: string) => {
    const response = await fetch(
      `https://api.lopyubibil.site/api/komiku/${param}`,
    );
    const data = await response.json();
    set({ mangaDetail: data.data });
  },
  fetchChapterDetail: async (chapterUrl: string) => {
    const response = await fetch(chapterUrl);
    const data = await response.json();
    set({ chapterDetail: { data: data.data } });
  },
}));

interface AnimeState {
  animes: Anime[];
  animeDetail: AnimeDetail | null;
  episodeDetail: EpisodeDetail | null;
  fetchAnimes: (page?: number) => Promise<void>;
  fetchAnimeDetail: (param: string) => Promise<void>;
  fetchEpisodeDetail: (episodeUrl: string) => Promise<void>;
}

export const useAnimeStore = create<AnimeState>((set) => ({
  animes: [],
  animeDetail: null,
  episodeDetail: null,
  fetchAnimes: async (page = 1) => {
    const response = await fetch(
      `https://api.lopyubibil.site/api/anoboy?page=${page}`,
    );
    const data = await response.json();
    set({ animes: data.data });
  },
  fetchAnimeDetail: async (param: string) => {
    const response = await fetch(
      `https://api.lopyubibil.site/api/anoboy/${param}`,
    );
    const data = await response.json();
    set({ animeDetail: data.data });
  },
  fetchEpisodeDetail: async (episodeUrl: string) => {
    const response = await fetch(episodeUrl);
    const data = await response.json();
    const { video_direct_links } = data.data; // Extract video links

    // Select the link with the highest resolution (assuming it's the last one)
    const selectedLink = video_direct_links[video_direct_links.length - 1].link;

    set({ episodeDetail: { url: selectedLink } });
  },
}));