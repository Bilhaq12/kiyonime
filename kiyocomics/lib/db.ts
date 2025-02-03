import { createClient } from "@supabase/supabase-js"
import type { AnimeItem, AnimeDetail, EpisodeItem } from "@/types/anime"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getAnimeList(page = 1, limit = 20): Promise<AnimeItem[]> {
  const start = (page - 1) * limit
  const end = start + limit - 1

  console.log("Fetching anime list...")
  const { data, error } = await supabase
    .from("anime")
    .select("*")
    .range(start, end)
    .order("upload_time", { ascending: false })

  if (error) {
    console.error("Error fetching anime list:", error)
    throw new Error("Failed to fetch anime list")
  }

  console.log("Fetched anime data:", data)
  return data
}

export async function searchAnime(query: string): Promise<AnimeItem[]> {
  console.log("Searching for:", query)
  const { data, error } = await supabase.from("anime").select("*").ilike("title", `%${query}%`).order("title")

  if (error) {
    console.error("Error searching anime:", error)
    throw new Error("Failed to search anime")
  }

  console.log("Search results:", data)
  return data
}

export async function getAnimeDetail(param: string): Promise<AnimeDetail> {
  const { data, error } = await supabase.from("anime").select("*, episodes(*)").eq("param", param).single()

  if (error) {
    console.error("Error fetching anime detail:", error)
    throw new Error("Failed to fetch anime detail")
  }

  return data
}

export async function getEpisodeDetail(id: string): Promise<EpisodeItem> {
  const { data, error } = await supabase.from("episodes").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching episode detail:", error)
    throw new Error("Failed to fetch episode detail")
  }

  return data
}

