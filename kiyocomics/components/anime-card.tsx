import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import type { AnimeItem } from "@/types/anime"

export function AnimeCard({ title, thumbnail, upload_time, param }: AnimeItem) {
  return (
    <Link href={`/anime/${param}`} className="group">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-4">
          <div className="flex items-center text-xs text-white">
            <Clock className="mr-1 h-3 w-3" />
            {upload_time}
          </div>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium line-clamp-2">{title}</h3>
    </Link>
  )
}

