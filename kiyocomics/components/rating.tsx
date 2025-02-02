"use client"

import { useState } from "react"
import { Star } from "lucide-react"

type RatingProps = {
  initialRating?: number
  onRate: (rating: number) => void
}

export function Rating({ initialRating = 0, onRate }: RatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hover, setHover] = useState(0)

  const handleRate = (value: number) => {
    setRating(value)
    onRate(value)
  }

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer transition-colors ${
            star <= (hover || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleRate(star)}
        />
      ))}
    </div>
  )
}

