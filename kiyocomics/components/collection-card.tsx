import Link from "next/link"
import Image from "next/image"

interface CollectionCardProps {
  title: string
  images: string[]
  href: string
}

export function CollectionCard({ title, images, href }: CollectionCardProps) {
  return (
    <Link href={href} className="block rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors overflow-hidden">
      <h3 className="text-xl font-semibold text-center py-4 px-4">{title}</h3>
      <div className="relative h-[260px] perspective-1000 bg-[#141414] flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-[160px] h-[220px] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:z-10"
            style={{
              transform: `rotateY(${-20 + index * 20}deg) translateX(${-60 + index * 60}px)`,
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Collection image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </Link>
  )
}

