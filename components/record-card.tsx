import Image from "next/image"

interface RecordCardProps {
  title: string
  description: string
  holder: string
  value: string
  image: string
}

export default function RecordCard({ title, description, holder, value, image }: RecordCardProps) {
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-yellow-400">Poseedor</p>
            <p className="text-yellow-100 font-semibold">{holder}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-yellow-400">Valor</p>
            <p className="text-yellow-100 font-semibold">{value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

