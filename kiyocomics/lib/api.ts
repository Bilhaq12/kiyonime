import type { AnimeResponse, AnimeDetail, EpisodeDetail } from "@/types/anime"

export async function getAnimeList(page = 1): Promise<AnimeResponse> {
  const response = await fetch(`https://api.lopyubibil.site/api/anoboy?page=${page}`, { cache: "no-store" })

  if (!response.ok) {
    throw new Error("Failed to fetch anime list")
  }

  return response.json()
}

export async function getAnimeDetail(param: string): Promise<AnimeDetail> {
  const response = await fetch(`https://api.lopyubibil.site/api/anoboy/${param}`, { cache: "no-store" })

  if (!response.ok) {
    throw new Error("Failed to fetch anime detail")
  }

  const data = await response.json()
  return data.data
}

export async function getEpisodeDetail(param: string): Promise<EpisodeDetail> {
  const response = await fetch(`https://api.lopyubibil.site/api/anoboy/${param}`, { cache: "no-store" })

  if (!response.ok) {
    throw new Error("Failed to fetch episode detail")
  }

  const data = await response.json()
  return data.data
}

