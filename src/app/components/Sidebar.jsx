'use client'
import { useState } from 'react'
import { FaCalendarAlt, FaHotel, FaUsers, FaTruck } from 'react-icons/fa'

const navItems = [
  { label: 'Events', icon: <FaCalendarAlt /> },
  { label: 'Hotels', icon: <FaHotel /> },
  { label: 'Teams', icon: <FaUsers /> },
  { label: 'Suppliers', icon: <FaTruck /> }
]

export default function Sidebar() {
  const [active, setActive] = useState('Events')

  return (
    <div className="w-60 h-screen bg-blue-100 p-4 space-y-1">
      {navItems.map(item => (
        <div
          key={item.label}
          className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
            active === item.label ? 'bg-white shadow-md font-semibold' : ''
          }`}
          onClick={() => setActive(item.label)}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
