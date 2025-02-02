"use client"

import { useState, useEffect } from "react"
import { AnimeCard } from "@/components/anime-card"
import { Button } from "@/components/ui/button"
import { Error } from "@/components/ui/error"
import { getAnimeList } from "@/lib/db"
import type { AnimeItem } from "@/types/anime"

export function AnimeList() {
  const [animeList, setAnimeList] = useState<AnimeItem[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadAnime()
  }, [])

  const loadAnime = async () => {
    if (loading && !hasMore) return

    setLoading(true)
    setError(null)
    try {
      const newAnimeList = await getAnimeList(page)
      setAnimeList((prev) => [...prev, ...newAnimeList])
      setPage((prev) => prev + 1)
      setHasMore(newAnimeList.length === 20)
    } catch (error) {
      console.error("Failed to load anime:", error)
      setError("Failed to load anime. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recent Releases</h2>
      {animeList.length === 0 && !loading ? (
        <div className="text-center py-8">
          <p className="text-lg mb-4">No anime found in the database.</p>
          <p className="text-sm text-muted-foreground">
            If you're an administrator, try running the database population script.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      )}
      {hasMore && (
        <div className="mt-8 text-center">
          <Button onClick={loadAnime} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </section>
  )
}

