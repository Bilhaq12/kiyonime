"use client"

import { useState } from "react"
import type { VideoLink, VideoDirectLink } from "@/types/anime"

interface VideoPlayerProps {
  embedLinks: VideoLink[]
  mirrors: VideoLink[]
  directLinks: VideoDirectLink[]
}

export function VideoPlayer({ embedLinks, mirrors, directLinks }: VideoPlayerProps) {
  const [selectedSource, setSelectedSource] = useState<VideoLink | VideoDirectLink | null>(
    embedLinks[0] || mirrors[0] || directLinks[0] || null,
  )

  const handleSourceChange = (source: VideoLink | VideoDirectLink) => {
    setSelectedSource(source)
  }

  if (!selectedSource) {
    return <div className="text-center p-4">No video sources available</div>
  }

  return (
    <div className="space-y-4">
      <div className="aspect-w-16 aspect-h-9">
        {"headers" in selectedSource ? (
          <video controls className="w-full h-full">
            <source src={selectedSource.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe src={selectedSource.link} allowFullScreen className="w-full h-full"></iframe>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {[...embedLinks, ...mirrors, ...directLinks].map((source, index) => (
          <button
            key={index}
            onClick={() => handleSourceChange(source)}
            className={`px-3 py-1 rounded ${
              selectedSource === source
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {source.resolution}
          </button>
        ))}
      </div>
    </div>
  )
}

