import Image from "next/image"
import Link from "next/link"
import { Clock, Tv, Play } from "lucide-react"
import type { AnimeItem } from "@/types/anime"
import { Badge } from "@/components/ui/badge"

export function AnimeCard({ title, thumbnail, upload_time, param }: AnimeItem) {
  // Extract episode number from title
  const episodeMatch = title.match(/Episode (\d+)/)
  const episodeNumber = episodeMatch ? episodeMatch[1] : null

  return (
    <Link href={`/anime/${param}`} className="group flex-none">
      <div className="relative w-[200px] h-[300px] overflow-hidden rounded-lg">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Hover Overlay with Play Icon */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
          <Play
            className="w-12 h-12 text-white transform scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"
            strokeWidth={1.5}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {episodeNumber && (
            <Badge variant="secondary" className="bg-black/50 hover:bg-black/50">
              {episodeNumber}
            </Badge>
          )}
          <Badge variant="secondary" className="bg-black/50 hover:bg-black/50">
            <Tv className="mr-1 h-3 w-3" />
            TV
          </Badge>
        </div>
        {/* Title and Upload Time */}
        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-sm font-medium text-white line-clamp-2 transition-colors duration-300">{title}</h3>
          <div className="flex items-center mt-1 text-[10px] text-white/80">
            <Clock className="mr-1 h-3 w-3" />
            {upload_time}
          </div>
        </div>
      </div>
    </Link>
  )
}

