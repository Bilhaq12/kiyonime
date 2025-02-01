import { Hero } from "@/components/hero"
import { AnimeList } from "@/components/anime-list"
import { FeaturedCollection } from "@/components/featured-collection"
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
      <div className="container py-8 space-y-16">
        <AnimeList initialAnimeList={animeList} />
        <FeaturedCollection />
      </div>
    </div>
  )
}

