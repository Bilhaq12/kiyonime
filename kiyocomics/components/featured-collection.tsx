import { CollectionCard } from "@/components/collection-card"

export function FeaturedCollection() {
  const collections = [
    {
      title: "Most Favorite Anime",
      images: [
        "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
        "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
      ],
      href: "/collection/favorite",
    },
    {
      title: "Most Popular Anime",
      images: [
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
      ],
      href: "/collection/popular",
    },
    {
      title: "Latest Completed Anime",
      images: [
        "https://cdn.myanimelist.net/images/anime/1455/146229.jpg",
        "https://cdn.myanimelist.net/images/anime/1801/142390.jpg",
        "https://cdn.myanimelist.net/images/anime/9/20706.jpg",
      ],
      href: "/collection/completed",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Featured Collection</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.title} {...collection} />
        ))}
      </div>
    </section>
  )
}

