import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"

export default async function EpisodeDetailPage({ params }: { params: { param: string } }) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
}