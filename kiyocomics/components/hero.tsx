import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
      <div className="relative container h-full flex items-center">
        <div className="flex gap-6">
          <div className="hidden sm:block relative w-[180px] h-[270px]">
            <Image
              src="https://sjc.microlink.io/ik9AWtGiod1D1w4rJBr2lX60y2Ile7hnBNym8PnSBevC77wJ3gaku6-RQmQazFQfZXuxUDqCzHGOwh5NomOD2A.jpeg"
              alt="Featured Anime"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center text-xs text-purple-500 mb-2">
              <span className="mr-2">1</span>
              <span>on Trend</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 max-w-2xl">Dr. STONE SCIENCE FUTURE</h1>
            <p className="text-muted-foreground max-w-2xl mb-4 text-sm line-clamp-2 sm:line-clamp-3">
              The first cour of the fourth season of Dr.STONE. Senkuu and the Kingdom of Science revive Tsukasa and
              build a spaceship to reach &apos;Why Man&apos; on the Moon!
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Play className="mr-2 h-4 w-4" />
              Watch Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
