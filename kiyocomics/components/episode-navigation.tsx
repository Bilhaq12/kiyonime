import Link from "next/link"
import type { EpisodeNavigation } from "@/types/anime"
import { Button } from "@/components/ui/button"

interface EpisodeNavigationProps {
  episodes: EpisodeNavigation[]
  currentEpisode: string
}

export function EpisodeNavigation({ episodes, currentEpisode }: EpisodeNavigationProps) {
  // const currentIndex = episodes.findIndex((ep) => ep.nav_name === currentEpisode)

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {episodes.map((episode, index) => {
        const episodeNumber = episodes.length - index
        const isActive = episode.nav_name === currentEpisode
        return (
          <Link key={episode.nav_link} href={`/anime/${episode.nav_link.split("/").pop()}`}>
            <Button variant={isActive ? "default" : "outline"} size="sm">
              Ep {episodeNumber}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
