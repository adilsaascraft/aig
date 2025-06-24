'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
  FaUser, FaHotel, FaUsers, FaTruck,
} from 'react-icons/fa'

const sections = [
  { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
  { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
  { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
  { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
  { label: 'Hotels', key: 'hotel', icon: <FaHotel /> },
  { label: 'Teams', key: 'teams', icon: <FaUsers /> },
  { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
]

export default function Sidebar() {
  const pathname = usePathname()
  const active = pathname.split('/')[2] // Get section key from URL (e.g. "event")

  return (
    <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
      {sections.map((section) => (
        <Link
          href={`/dashboard/${section.key}`}
          key={section.key}
          className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
            active === section.key ? 'bg-white shadow-md font-semibold' : ''
          }`}
        >
          {section.icon}
          <span>{section.label}</span>
        </Link>
      ))}
    </div>
  )
}
