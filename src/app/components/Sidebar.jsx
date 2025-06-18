export default function Sidebar({ onSectionChange }) {
  const sections = ['event', 'venues', 'hotel']

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded mb-2 capitalize"
        >
          {section}
        </button>
      ))}
    </div>
  )
}






















// 'use client'
// import { useState } from 'react'
// import { FaCalendarAlt,FaMapMarkerAlt, FaUniversity, FaUser, FaHotel, FaUsers, FaTruck } from 'react-icons/fa'

// const navItems = [
//   { label: 'Events', icon: <FaCalendarAlt /> },
//   { label: 'Venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', icon: <FaUser /> },
//   { label: 'Departments', icon: <FaUniversity /> },
//   { label: 'Hotels', icon: <FaHotel /> },
//   { label: 'Teams', icon: <FaUsers /> },
//   { label: 'Suppliers', icon: <FaTruck /> }
// ]

// export default function Sidebar() {
//   const [active, setActive] = useState('Events')

//   return (
//     <div className="w-60 h-screen bg-blue-100 p-4 space-y-1">
//       {navItems.map(item => (
//         <div
//           key={item.label}
//           className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
//             active === item.label ? 'bg-white shadow-md font-semibold' : ''
//           }`}
//           onClick={() => setActive(item.label)}
//         >
//           {item.icon}
//           <span>{item.label}</span>
//         </div>
//       ))}
//     </div>
//   )
// }
