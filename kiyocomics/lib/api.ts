import type { AnimeResponse } from "@/types/anime"
import type { AnimeDetail } from "@/types/animeDetail"
import type { EpisodeDetail } from "@/types/episodeDetail"

export async function getAnimeList(page = 1): Promise<AnimeResponse> {
  const response = await fetch(`https://api.lopyubibil.site/api/anoboy?page=${page}`)

  if (!response.ok) {
    throw new Error("Failed to fetch anime list")
  }

  return response.json()
}

export async function getAnimeDetail(param: string): Promise<AnimeDetail> {
  const response = await fetch(`http://api.lopyubibil.site/api/anoboy/${param}`)

  if (!response.ok) {
    throw new Error("Failed to fetch anime detail")
  }

  const data = await response.json()
  return data.data
}

export async function getEpisodeDetail(param: string): Promise<EpisodeDetail> {
  const response = await fetch(`https://api.lopyubibil.site/api/anoboy/${param}`)

  if (!response.ok) {
    throw new Error("Failed to fetch episode detail")
  }

  const data = await response.json()
  return data.data
}

