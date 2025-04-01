import Image from "next/image"

interface StadiumSectionProps {
  name: string
  nickname: string
  capacity: string
  inauguration: string
  address: string
  description: string
  curiosities: string[]
  image: string
}

export default function StadiumSection({
  name,
  nickname,
  capacity,
  inauguration,
  address,
  description,
  curiosities,
  image,
}: StadiumSectionProps) {
  return (
    <div className="bg-blue-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500">
      <div className="relative h-80 w-full">
        <Image src={image || "/placeholder.svg"} alt={nickname} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-3xl font-bold text-yellow-400">{nickname}</h3>
            <p className="text-yellow-100 text-xl">{name}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-sm font-medium text-yellow-400">Capacidad</p>
            <p className="text-yellow-100 text-lg">{capacity}</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-sm font-medium text-yellow-400">Inauguración</p>
            <p className="text-yellow-100 text-lg">{inauguration}</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-sm font-medium text-yellow-400">Dirección</p>
            <p className="text-yellow-100 text-lg">{address}</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-bold text-yellow-400 mb-4">Descripción</h4>
          <p className="text-yellow-100">{description}</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-yellow-400 mb-4">Curiosidades</h4>
          <ul className="space-y-2">
            {curiosities.map((curiosity, index) => (
              <li key={index} className="flex items-start gap-2 text-yellow-100">
                <span className="text-yellow-400 mt-1">•</span>
                <span>{curiosity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

