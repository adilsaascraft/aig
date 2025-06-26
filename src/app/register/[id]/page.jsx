'use client'
import { useParams } from 'next/navigation'
import events from '@/app/data/events'
import MultiStepForm from '@/app/components/MultiStepForm'

export default function RegisterPage() {
  const { id } = useParams()
  const event = events.find(e => e.id.toString() === id)

  if (!event) return <p>Event not found</p>

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="flex items-center gap-4 bg-[#1F5C9E] text-white p-4 rounded shadow mb-6">
        <img src={event.image} alt={event.title} className="w-20 h-28 object-cover rounded" />
        <div>
          <h2 className="text-xl font-bold text-white">{event.title}</h2>
          <p className="text-white">{event.date}</p>
          <p className="text-white">{event.location}</p>
        </div>
      </div>

      <MultiStepForm event={event} />
    </div>
  )
}
