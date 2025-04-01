"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TitleCardProps {
  year: string
  tournament: string
  result: string
  opponent?: string
  coach: string
  topScorer?: string
  goals?: string
  image: string
  details: string
}

export default function TitleCard({
  year,
  tournament,
  result,
  opponent,
  coach,
  topScorer,
  goals,
  image,
  details,
}: TitleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-blue-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={`${tournament} ${year}`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-yellow-400 p-4">
            {tournament} {year}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-yellow-400">Resultado</p>
            <p className="text-yellow-100 font-semibold">{result}</p>
          </div>
          {opponent && (
            <div>
              <p className="text-sm font-medium text-yellow-400">Rival</p>
              <p className="text-yellow-100">{opponent}</p>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-yellow-400">Director Técnico</p>
            <p className="text-yellow-100">{coach}</p>
          </div>
          {topScorer && (
            <div>
              <p className="text-sm font-medium text-yellow-400">Goleador</p>
              <p className="text-yellow-100">{topScorer}</p>
            </div>
          )}
          {goals && (
            <div>
              <p className="text-sm font-medium text-yellow-400">Goles</p>
              <p className="text-yellow-100">{goals}</p>
            </div>
          )}
        </div>

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

