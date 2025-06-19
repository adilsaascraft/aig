'use client'
import { useState } from 'react'
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUniversity,
  FaUser,
  FaHotel,
  FaUsers,
  FaTruck,
} from 'react-icons/fa'

// Map display labels to internal keys
const sections = [
  { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
  { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
  { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
  { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
  { label: 'Hotels', key: 'hotel', icon: <FaHotel /> },
  { label: 'Teams', key: 'teams', icon: <FaUsers /> },
  { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
]

export default function Sidebar({ onSectionChange }) {
  const [active, setActive] = useState('event')

  const handleClick = (key) => {
    setActive(key)
    onSectionChange(key)
  }

  return (
    <div className="w-60 h-screen bg-blue-100 p-4 space-y-1">
      {sections.map((section) => (
        <div
          key={section.key}
          className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
            active === section.key ? 'bg-white shadow-md font-semibold' : ''
          }`}
          onClick={() => handleClick(section.key)}
        >
          {section.icon}
          <span>{section.label}</span>
        </div>
      ))}
    </div>
  )
}


















// 'use client'
// import { useState } from 'react'
// import { FaCalendarAlt,FaMapMarkerAlt, FaUniversity, FaUser, FaHotel, FaUsers, FaTruck } from 'react-icons/fa'

// const sections = [
//   { label: 'Events', icon: <FaCalendarAlt /> },
//   { label: 'Venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', icon: <FaUser /> },
//   { label: 'Departments', icon: <FaUniversity /> },
//   { label: 'Hotels', icon: <FaHotel /> },
//   { label: 'Teams', icon: <FaUsers /> },
//   { label: 'Suppliers', icon: <FaTruck /> }
// ]
// export default function Sidebar({ onSectionChange }) {
//   const [active, setActive] = useState('Events')
  

//   return (
//     <div className="w-60 h-screen bg-blue-100 p-4 space-y-1">
//       {sections.map(section => (
//         <div
//           key={section.label}
//           className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
//             active === section.label ? 'bg-white shadow-md font-semibold' : ''
//           }`}
//           // onClick={() => setActive(item.label)}
//           onClick={() => onSectionChange(section)}
//         >
//           {section.icon}
//           <span>{section.label}</span>
//         </div>
//       ))}
//     </div>
//     // <div className="w-60 h-screen bg-blue-100 p-4 space-y-1">
//     //   {sections.map((section) => (
//     //     <button
//     //       key={section}
//     //       onClick={() => onSectionChange(section)}
//     //       className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded mb-2 "
//     //     >
//     //       {section}
//     //     </button>
//     //   ))}
//     // </div>
//   )
// }

  // return (
  //   <div className="w-60 h-screen bg-blue-100 p-4 space-y-1">
  //     {navItems.map(item => (
  //       <div
  //         key={item.label}
  //         className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
  //           active === item.label ? 'bg-white shadow-md font-semibold' : ''
  //         }`}
  //         onClick={() => setActive(item.label)}
  //       >
  //         {item.icon}
  //         <span>{item.label}</span>
  //       </div>
  //     ))}
  //   </div>
  // )























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
