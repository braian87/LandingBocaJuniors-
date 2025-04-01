"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface StreakCardProps {
  title: string
  description: string
  details: string
  image: string
}

export default function StreakCard({ title, description, details, image }: StreakCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-blue-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-yellow-400 p-4">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-yellow-100 mb-4">{description}</p>

        <button
          onClick={toggleExpand}
          className="flex items-center justify-between w-full px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg text-yellow-400 transition-colors"
        >
          <span>Detalles</span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-yellow-100 p-2">{details}</p>
        </div>
      </div>
    </div>
  )
}

