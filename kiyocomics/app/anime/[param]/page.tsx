import { Suspense } from "react"
import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import Loading from "./loading"
import type { Metadata } from "next"

// Use the correct type for Next.js 15 page props
type PageProps = {
  params: { param: string }
  searchParams: Record<string, string | string[] | undefined>
}

// Separate the data fetching logic
async function getEpisodeData(param: string) {
  return await getEpisodeDetail(param)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const episodeDetail = await getEpisodeData(params.param)

  return {
    title: episodeDetail.title,
    description: episodeDetail.synopsis,
  }
}

export default async function EpisodeDetailPage({ params }: PageProps) {
  const episodeDetail = await getEpisodeData(params.param)

  return (
    <Suspense fallback={<Loading />}>
      <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
    </Suspense>
  )
}

// Enable dynamic params for this route
export const dynamic = "force-dynamic"

