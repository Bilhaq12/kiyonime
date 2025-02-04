import { Suspense } from "react";
import { getEpisodeDetail } from "@/lib/api";
import { EpisodeDetailClient } from "./episode-detail-client";
import Loading from "./loading";
import type { Metadata } from "next";

interface EpisodeDetail {
  title: string;
  synopsis: string;
  // Add other properties as needed
}

interface PageProps {
  params: { param: string };
}

export default async function EpisodeDetailPage({ params }: PageProps) {
  const episodeDetail: EpisodeDetail = await getEpisodeDetail(params.param);

  return (
    <Suspense fallback={<Loading />}>
      <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
    </Suspense>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { param: string };
}): Promise<Metadata> {
  const episodeDetail: EpisodeDetail = await getEpisodeDetail(params.param);

  return {
    title: episodeDetail.title,
    description: episodeDetail.synopsis,
  };
}

export const dynamic = "force-dynamic";
