// HotelCard.js (Basic Sample)
'use client'
import Image from 'next/image'

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4">
      <Image src={hotel.image} alt={hotel.name} width={100} height={100} className="rounded" />
      <div>
        <h2 className="text-lg font-semibold text-blue-800">{hotel.name}</h2>
        <p className="text-sm text-gray-600">{hotel.location}</p>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
          {hotel.status}
        </span>
      </div>
    </div>
  )
}