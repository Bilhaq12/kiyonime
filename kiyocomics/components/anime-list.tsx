"use client"

import { useState } from "react"
import { AnimeCard } from "@/components/anime-card"
import { Button } from "@/components/ui/button"
import { getAnimeList } from "@/lib/api"
import type { AnimeResponse, AnimeItem } from "@/types/anime"

interface AnimeListProps {
  initialAnimeList?: AnimeResponse
}

export function AnimeList({ initialAnimeList }: AnimeListProps) {
  const [animeList, setAnimeList] = useState<AnimeItem[]>(initialAnimeList?.data || [])
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadMore = async () => {
    if (loading) return

    setLoading(true)
    setError(null)
    try {
      const newAnimeList = await getAnimeList(page)
      setAnimeList((prev) => [...prev, ...newAnimeList.data])
      setPage((prev) => prev + 1)
    } catch (error) {
      console.error("Failed to load more anime:", error)
      setError("Failed to load more anime. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (animeList.length === 0 && !loading && !error) {
    return (
      <div className="text-center py-8">
        <p className="text-lg mb-4 text-white">No anime found.</p>
      </div>
    )
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">Recent Releases</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {animeList.map((anime) => (
          <AnimeCard key={anime.param} {...anime} />
        ))}
      </div>
      {error && (
        <div className="text-center py-4">
          <p className="text-red-500 mb-2">{error}</p>
          <Button onClick={() => loadMore()} variant="secondary">
            Retry
          </Button>
        </div>
      )}
      {!error && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </section>
  )
}

