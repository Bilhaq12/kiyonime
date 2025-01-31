import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.myanimelist.net/images/anime/1015/138006.jpg')`,
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-2xl">Sousou no Frieren</h1>
        <p className="text-muted-foreground max-w-2xl mb-8 text-sm sm:text-base">
        During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.! (Source: Crunchyroll News, edited)
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
          <Play className="mr-2 h-4 w-4" />
          Play Now
        </Button>
      </div>
    </div>
  )
}

