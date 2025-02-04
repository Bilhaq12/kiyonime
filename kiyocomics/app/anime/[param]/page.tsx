import { Suspense } from "react"
import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import Loading from "./loading"

// Define the correct type for Next.js App Router page props
type Props = {
  params: { param: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function EpisodeDetailPage({ params }: Props) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return (
    <Suspense fallback={<Loading />}>
      <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
    </Suspense>
  )
}

// Optionally, you can generate metadata for the page
export async function generateMetadata({ params }: Props) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return {
    title: episodeDetail.title,
    description: episodeDetail.synopsis,
  }
}
