// components/EventSection.jsx
import EventCard from './EventCard'
import eventData from '@/app/data/event'

export default function EventSection() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Your Events</h1>
      <div className="space-y-4">
        {eventData.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}
