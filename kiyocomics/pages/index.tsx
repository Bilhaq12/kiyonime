import type { NextPage } from 'next'
import Head from 'next/head'
import MangaList from '../components/MangaList'
import AnimeList from '../components/AnimeList'

const Home: NextPage = () => {
  return (
    <div>
      {/* ... */}
      <main className="bg-gray-800">
        <div className="container mx-auto p-4">
          <h2 className="text-white text-2xl font-bold mb-4">Anime</h2>
          <AnimeList />
          <h2 className="text-white text-2xl font-bold mb-4">Manga</h2>
          <MangaList />
        </div>
      </main>
    </div>
  )
}

export default Home