// components/HotelSection.jsx
import EventCard from './EventCard'
import eventData from '@/app/data/event'
import HotelCard from './HotelCard'
import hotelData from '../data/hotel'

export default function EventSection() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Your Events</h1>
      <div className="space-y-4">
        {hotelData.map(event => (
          <HotelCard key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}