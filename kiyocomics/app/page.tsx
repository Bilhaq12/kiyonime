import { Hero } from "@/components/hero"
import { AnimeCard } from "@/components/anime-card"
import { Pagination } from "@/components/pagination"
import { getAnimeList } from "@/lib/api"

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams.page) || 1
  const animeList = await getAnimeList(page)

  return (
    <div>
      <Hero />
      <div className="container py-8 space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">LATEST ANIME</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {animeList.data.map((anime) => (
              <AnimeCard key={anime.param} {...anime} />
            ))}
          </div>

          <Pagination
            maxPage={animeList.max_page}
            hasNextPage={!!animeList.next_page}
            hasPrevPage={!!animeList.prev_page}
          />
        </section>
      </div>
    </div>
  )
}

