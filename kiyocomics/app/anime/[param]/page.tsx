import { Suspense } from "react"
import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import Loading from "./loading"
import type { Metadata } from "next"

interface PageParams {
  param: string
}

// Define proper static params generation
export async function generateStaticParams(): Promise<PageParams[]> {
  // This can be expanded to pre-render specific paths
  return []
}

// Define proper metadata generation
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const episodeDetail = await getEpisodeDetail(params.param)

  return {
    title: episodeDetail.title,
    description: episodeDetail.synopsis,
  }
}

// Main page component with correct typing
export default async function EpisodeDetailPage({ params }: { params: PageParams }) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return (
    <Suspense fallback={<Loading />}>
      <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
    </Suspense>
  )
}
