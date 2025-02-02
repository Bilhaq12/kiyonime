import { supabase } from "../lib/supabase"
import { getAnimeList, getAnimeDetail, getEpisodeDetail } from "../lib/api"

async function populateDatabase() {
  try {
    // Fetch anime list from API
    const animeList = await getAnimeList(1)

    // Insert anime into database
    for (const anime of animeList.data) {
      const { data: animeData, error: animeError } = await supabase
        .from("anime")
        .insert({
          title: anime.title,
          thumbnail: anime.thumbnail,
          status: "ongoing", // You might want to determine this based on the API data
          created_at: new Date(anime.upload_time).toISOString(),
        })
        .select()

      if (animeError) {
        console.error("Error inserting anime:", animeError)
        continue
      }

      // Fetch anime detail
      const animeDetail = await getAnimeDetail(anime.param)

      // Insert episodes
      for (const episode of animeDetail.episode_navigation) {
        const episodeDetail = await getEpisodeDetail(episode.nav_link.split("/").pop() || "")

        await supabase.from("episodes").insert({
          anime_id: animeData[0].id,
          title: episodeDetail.name,
          episode_number: Number.parseInt(episode.nav_name.split(" ")[1]),
          thumbnail: episodeDetail.thumbnail,
          video_embed_links: episodeDetail.video_embed_links,
          video_mirrors: episodeDetail.video_mirrors,
          video_direct_links: episodeDetail.video_direct_links,
        })
      }

      console.log(`Inserted anime: ${anime.title}`)
    }

    console.log("Database population complete")
  } catch (error) {
    console.error("Error populating database:", error)
  }
}

populateDatabase()

