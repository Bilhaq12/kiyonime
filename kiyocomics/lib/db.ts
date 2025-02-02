import { supabase } from "./supabase"
import type { AnimeItem, AnimeDetail, EpisodeDetail } from "@/types/anime"

export async function getAnimeList(page = 1, limit = 20) {
  const start = (page - 1) * limit
  const end = start + limit - 1

  try {
    const { data, error } = await supabase
      .from("anime")
      .select("*")
      .range(start, end)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      throw new Error("Failed to fetch anime list")
    }

    if (!data || data.length === 0) {
      console.log("No anime data found")
    }

    return data as AnimeItem[]
  } catch (error) {
    console.error("Error in getAnimeList:", error)
    throw error
  }
}

export async function getAnimeDetail(id: string) {
  const { data, error } = await supabase.from("anime").select("*, episodes(*)").eq("id", id).single()

  if (error) {
    console.error("Error fetching anime detail:", error)
    throw new Error("Failed to fetch anime detail")
  }
  return data as AnimeDetail
}

export async function getEpisodeDetail(id: string) {
  const { data, error } = await supabase.from("episodes").select("*, anime(*)").eq("id", id).single()

  if (error) {
    console.error("Error fetching episode detail:", error)
    throw new Error("Failed to fetch episode detail")
  }
  return data as EpisodeDetail
}

export async function rateAnime(userId: string, animeId: string, rating: number) {
  const { data, error } = await supabase
    .from("user_ratings")
    .upsert({ user_id: userId, anime_id: animeId, rating })
    .select()

  if (error) {
    console.error("Error rating anime:", error)
    throw new Error("Failed to rate anime")
  }
  return data
}

export async function searchAnime(query: string) {
  const { data, error } = await supabase.from("anime").select("*").ilike("title", `%${query}%`).order("title")

  if (error) {
    console.error("Error searching anime:", error)
    throw new Error("Failed to search anime")
  }
  return data as AnimeItem[]
}

export async function getPopularAnime(limit = 10) {
  const { data, error } = await supabase
    .from("anime")
    .select("*, user_ratings(*)")
    .order("user_ratings(rating)", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching popular anime:", error)
    throw new Error("Failed to fetch popular anime")
  }
  return data as AnimeItem[]
}

export async function getAnimeByStatus(status: "ongoing" | "completed", limit = 20) {
  const { data, error } = await supabase.from("anime").select("*").eq("status", status).limit(limit)

  if (error) {
    console.error("Error fetching anime by status:", error)
    throw new Error("Failed to fetch anime by status")
  }
  return data as AnimeItem[]
}

