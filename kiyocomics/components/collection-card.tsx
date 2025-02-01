import Image from "next/image"
import Link from "next/link"

interface CollectionCardProps {
  title: string
  images: string[]
  href: string
}

export function CollectionCard({ title, images, href }: CollectionCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
        <h3 className="text-lg font-semibold text-center py-3 px-4">{title}</h3>
        <div className="relative h-[180px] bg-[#141414] flex items-center justify-center overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[120px] h-[170px] transition-transform duration-300 hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateY(${-20 + index * 20}deg) translateZ(${-10 + index * 5}px)`,
                zIndex: images.length - index,
                left: `calc(50% - 60px + ${index * 40}px)`,
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Collection image ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

