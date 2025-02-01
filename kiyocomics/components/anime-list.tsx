"use client"

import { useState, useRef } from "react"
import { AnimeCard } from "@/components/anime-card"
import { Button } from "@/components/ui/button"
import type { AnimeResponse } from "@/types/anime"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface AnimeListProps {
  initialAnimeList: AnimeResponse
}

export function AnimeList({ initialAnimeList }: AnimeListProps) {
  const [animeList, setAnimeList] = useState(initialAnimeList.data)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(!!initialAnimeList.next_page)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const loadMore = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    const nextPage = page + 1

    try {
      const response = await fetch(`/api/anime?page=${nextPage}`)
      const newAnimeList: AnimeResponse = await response.json()

      setAnimeList([...animeList, ...newAnimeList.data])
      setPage(nextPage)
      setHasMore(!!newAnimeList.next_page)
    } catch (error) {
      console.error("Failed to load more anime:", error)
    } finally {
      setLoading(false)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8
      const newScrollLeft =
        direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Releases</h2>
      </div>
      <div className="group relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 -mx-4 px-4 scrollbar-hide"
        >
          {animeList.map((anime) => (
            <AnimeCard key={`${anime.param}-${anime.upload_time}`} {...anime} />
          ))}
          {hasMore && (
            <button
              onClick={loadMore}
              disabled={loading}
              className="flex-none w-[200px] h-[300px] flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-800 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="text-sm font-medium text-muted-foreground">{loading ? "Loading..." : "Load More"}</span>
            </button>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
          onClick={() => scroll("left")}
          disabled={!scrollContainerRef.current || scrollContainerRef.current.scrollLeft === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
          onClick={() => scroll("right")}
          disabled={
            !scrollContainerRef.current ||
            scrollContainerRef.current.scrollLeft >=
              scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
          }
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

