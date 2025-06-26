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
  const active = pathname.split('/')[2]

  return (
    <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
      {sections.map((section) => {
        const isActive = active === section.key
        return (
          <Link
            href={`/dashboard/${section.key}`}
            key={section.key}
            className={`group flex items-center gap-4 p-3 rounded-md cursor-pointer transition-colors
              ${isActive
                ? 'bg-white shadow-md font-semibold text-sky-800'
                : 'hover:bg-gray-300 text-gray-700'}
            `}
          >
            <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
              {section.icon}
            </span>
            <span>{section.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
