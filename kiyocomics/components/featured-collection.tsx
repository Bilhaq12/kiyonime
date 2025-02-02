import { CollectionCard } from "@/components/collection-card"

export function FeaturedCollection() {
  const collections = [
    {
      title: "Most Favorite Anime",
      images: [
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
      ],
      href: "/collection/favorite",
    },
    {
      title: "Most Popular Anime",
      images: [
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
      ],
      href: "/collection/popular",
    },
    {
      title: "Latest Completed Anime",
      images: [
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
      ],
      href: "/collection/completed",
    },
  ]

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Featured Collection</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.title} {...collection} />
        ))}
      </div>
    </section>
  )
}

