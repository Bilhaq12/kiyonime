import { Suspense } from "react"
import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import Loading from "./loading"

interface PageProps {
  params: {
    param: string
  }
}

export default async function EpisodeDetailPage({ params }: PageProps) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return (
    <Suspense fallback={<Loading />}>
      <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
    </Suspense>
  )
}
