"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { getEpisodeDetail } from "@/lib/api"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Rating } from "@/components/rating"
import { useAuth } from "@/contexts/auth-context"
import { AuthModal } from "@/components/auth-modal"

export default function EpisodeDetail({ params }: { params: { param: string } }) {
  const [episodeDetail, setEpisodeDetail] = useState<any>(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const fetchEpisodeDetail = async () => {
      const detail = await getEpisodeDetail(params.param)
      setEpisodeDetail(detail)
    }
    fetchEpisodeDetail()
  }, [params.param])

  const handleRate = async (rating: number) => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    // TODO: Implement rating submission to backend
    console.log(`Rated ${rating} stars`)
  }

  if (!episodeDetail) {
    return <div>Loading...</div>
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4">{episodeDetail.name}</h1>
          <VideoPlayer
            embedLinks={episodeDetail.video_embed_links}
            mirrors={episodeDetail.video_mirrors}
            directLinks={episodeDetail.video_direct_links}
          />
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Rate this episode:</p>
            <Rating onRate={handleRate} />
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
            <p className="text-muted-foreground text-sm">{episodeDetail.synopsis}</p>
          </div>
        </div>
        <div>
          <div className="sticky top-20">
            <Image
              src={episodeDetail.thumbnail || "/placeholder.svg"}
              alt={episodeDetail.name}
              width={240}
              height={360}
              className="rounded-md object-cover w-full"
            />
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">Episodes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {episodeDetail.episode_navigation.map((episode: any, index: number) => (
                  <Link key={index} href={`/anime/${episode.nav_link.split("/").pop()}`}>
                    <Button
                      variant={episode.nav_name === episodeDetail.name ? "default" : "outline"}
                      className="w-full justify-center text-xs py-1 h-auto"
                    >
                      Ep {episodeDetail.episode_navigation.length - index}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}

