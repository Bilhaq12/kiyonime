import Image from "next/image"
import Link from "next/link"
import { Clock, Tv } from "lucide-react"
import type { AnimeItem } from "@/types/anime"
import { Badge } from "@/components/ui/badge"

export function AnimeCard({ title, thumbnail, upload_time, param }: AnimeItem) {
  return (
    <Link href={`/anime/${param}`} className="group">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-2 left-2 flex gap-1">
          <Badge variant="secondary" className="bg-black/50 hover:bg-black/50">
            <Tv className="mr-1 h-3 w-3" />
            New
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-sm font-medium text-white line-clamp-2">{title}</h3>
          <div className="flex items-center mt-1 text-[10px] text-white/80">
            <Clock className="mr-1 h-3 w-3" />
            {upload_time}
          </div>
        </div>
      </div>
    </Link>
  )
}

