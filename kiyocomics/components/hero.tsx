import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://sjc.microlink.io/ik9AWtGiod1D1w4rJBr2lX60y2Ile7hnBNym8PnSBevC77wJ3gaku6-RQmQazFQfZXuxUDqCzHGOwh5NomOD2A.jpeg')`,
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20" />
      </div>
      <div className="relative container h-full flex flex-col justify-center">
        <div className="flex items-center text-sm text-purple-500 mb-2">
          <span className="mr-2">1</span>
          <span>on Trend</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-2xl">Dr. STONE SCIENCE FUTURE</h1>
        <p className="text-muted-foreground max-w-2xl mb-8 text-sm sm:text-base">
          The first cour of the fourth season of Dr.STONE. Senkuu and the Kingdom of Science revive Tsukasa and build a
          spaceship to reach 'Why Man' on the Moon! (Source: Crunchyroll News, edited)
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
          <Play className="mr-2 h-4 w-4" />
          Play Now
        </Button>
      </div>
    </div>
  )
}

