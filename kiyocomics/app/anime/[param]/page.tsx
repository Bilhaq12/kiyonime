import { Suspense } from "react"
import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import Loading from "./loading"
import type { Metadata } from "next"

export default async function EpisodeDetailPage({
  params,
}: {
  params: { param: string }
}) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return (
    <Suspense fallback={<Loading />}>
      <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
    </Suspense>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { param: string }
}): Promise<Metadata> {
  const episodeDetail = await getEpisodeDetail(params.param)

  return {
    title: episodeDetail.title,
    description: episodeDetail.synopsis,
  }
}

export const dynamicParams = true
