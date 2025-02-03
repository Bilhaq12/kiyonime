import { supabase } from "../lib/supabase"
import { getAnimeList, getAnimeDetail } from "../lib/api"
import type { AnimeItem, EpisodeItem } from "@/types/anime"

async function populateDatabase() {
  try {
    console.log("Starting database population...")

    // Fetch anime list from API
    const animeList = await getAnimeList(1)

    // Insert anime into database
    for (const anime of animeList.data) {
      console.log(`Processing anime: ${anime.title}`)

      const { data, error } = await supabase
        .from("anime")
        .insert({
          title: anime.title,
          thumbnail: anime.thumbnail,
          param: anime.param,
          upload_time: anime.upload_time,
          detail_url: anime.detail_url,
        } as AnimeItem)
        .select()

      if (error) {
        console.error("Error inserting anime:", error)
        continue
      }

      console.log(`Inserted anime: ${anime.title}`)

      // Fetch anime detail and insert episodes
      const animeDetail = await getAnimeDetail(anime.param)
      for (const episode of animeDetail.episodes) {
        const { error: episodeError } = await supabase.from("episodes").insert({
          anime_id: data[0].id,
          title: episode.title,
          episode_number: episode.episode_number,
          thumbnail: episode.thumbnail,
          video_embed_links: episode.video_embed_links,
          video_mirrors: episode.video_mirrors,
          video_direct_links: episode.video_direct_links,
        } as EpisodeItem)

        if (episodeError) {
          console.error("Error inserting episode:", episodeError)
        }
      }
    }

    console.log("Database population complete")
  } catch (error) {
    console.error("Error populating database:", error)
  }
}

populateDatabase()

