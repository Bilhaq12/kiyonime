import Image from "next/image"
import Link from "next/link"
import { getEpisodeDetail } from "@/lib/api"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"

export default async function EpisodeDetail({ params }: { params: { param: string } }) {
  const episodeDetail = await getEpisodeDetail(params.param)

  return (
    <div className="container py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{episodeDetail.name}</h1>
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <VideoPlayer
            embedLinks={episodeDetail.video_embed_links}
            mirrors={episodeDetail.video_mirrors}
            directLinks={episodeDetail.video_direct_links}
          />
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Synopsis</h2>
            <p className="text-muted-foreground text-sm sm:text-base">{episodeDetail.synopsis}</p>
          </div>
        </div>
        <div>
          <Image
            src={episodeDetail.thumbnail || "/placeholder.svg"}
            alt={episodeDetail.name}
            width={300}
            height={450}
            className="rounded-lg object-cover w-full"
          />
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Episodes</h2>
            <div className="space-y-2">
              {episodeDetail.episode_navigation.map((episode, index) => (
                <Link key={index} href={`/anime/${episode.nav_link.split("/").pop()}`}>
                  <Button
                    variant={episode.nav_name === episodeDetail.name ? "default" : "outline"}
                    className="w-full justify-start text-sm sm:text-base"
                  >
                    {episode.nav_name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

