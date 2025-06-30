'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
  FaUser, FaHotel, FaUsers, FaTruck, FaChevronDown,
} from 'react-icons/fa'

const sections = [
  { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
  { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
  { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
  { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
  { label: 'Hotels', key: 'hotel', icon: <FaHotel />, hasSubMenu: true },
  { label: 'Teams', key: 'teams', icon: <FaUsers /> },
  { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
]

const hotelSubMenu = [
  { label: 'Hotel', path: '/dashboard/hotel' },
  { label: 'Room Category', path: '/dashboard/category' }
]

export default function Sidebar() {
  const pathname = usePathname()
  const currentMain = pathname.split('/')[2]
  const currentSub = pathname.split('/')[3]
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    if (pathname.startsWith('/dashboard/hotel/')) {
      setExpanded('hotel')
    } else {
      setExpanded(null)
    }
  }, [pathname])

  const toggleDropdown = (key) => {
    setExpanded(prev => (prev === key ? null : key))
  }

  return (
    <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
      {sections.map(section => {
        const isDropdownOpen = expanded === section.key
        const isActive = section.hasSubMenu
          ? pathname.startsWith('/dashboard/hotel/')
          : currentMain === section.key

        return (
          <div key={section.key}>
            {/* Main Tab */}
            <div
              onClick={() =>
                section.hasSubMenu
                  ? toggleDropdown(section.key)
                  : null
              }
              className={`group flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                isActive
                  ? 'bg-white shadow-md font-semibold text-sky-800'
                  : 'hover:bg-gray-300 text-gray-700'
              }`}
            >
              {/* Regular Link for non-dropdown sections */}
              {!section.hasSubMenu ? (
                <Link
                  href={`/dashboard/${section.key}`}
                  className="flex items-center gap-3 flex-grow"
                >
                  <span className={`transition-colors ${isActive ? 'bg-white' : 'group-hover:text-gray-900 text-gray-500'}`}>
                    {section.icon}
                  </span>
                  <span>{section.label}</span>
                </Link>
              ) : (
                // Just clickable label for dropdown section (Hotels)
                <div className="flex items-center gap-3 flex-grow">
                  <span className={`transition-colors ${isActive
                  ? 'bg-white shadow-md font-semibold text-sky-800'
                  : 'hover:bg-gray-300 text-gray-700'}`}>
                    {section.icon}
                  </span>
                  <span>{section.label}</span>
                </div>
              )}

              {/* Dropdown Icon */}
              {section.hasSubMenu && (
                <FaChevronDown
                  className={`transition-transform duration-200 ml-2 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              )}
            </div>

            {/* Submenu */}
            {section.hasSubMenu && isDropdownOpen && (
              <div className="ml-8 mt-1 space-y-1">
                {hotelSubMenu.map(sub => {
                  const isSubActive = pathname === sub.path
                  return (
                    <Link
                      key={sub.path}
                      href={sub.path}
                      className={`block px-3 py-2 rounded text-sm transition-colors ${
                  isSubActive
                  ? 'bg-white shadow-md font-semibold text-sky-800'
                  : 'hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}




























// Old File 
// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import {
//   FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
//   FaUser, FaHotel, FaUsers, FaTruck, FaChevronDown,
// } from 'react-icons/fa'

// const sections = [
//   { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
//   { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
//   { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
//   { label: 'Hotels', key: 'hotel', icon: <FaHotel />, hasSubMenu: true },
//   { label: 'Teams', key: 'teams', icon: <FaUsers /> },
//   { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
// ]

// const hotelSubMenu = [
//   { label: 'Hotel', path: '/dashboard/hotel' },
//   { label: 'Room Category', path: '/dashboard/hotel/category' }
// ]

// export default function Sidebar() {
//   const pathname = usePathname()
//   const [expanded, setExpanded] = useState(null)

//   // Extract the main section from the pathname
//   const mainSection = pathname.split('/')[2]
//   const isHotelSubPage = pathname.startsWith('/dashboard/hotel')

//   useEffect(() => {
//     if (isHotelSubPage) {
//       setExpanded('hotel')
//     } else {
//       setExpanded(null)
//     }
//   }, [pathname])

//   const toggleDropdown = (key) => {
//     setExpanded(prev => (prev === key ? null : key))
//   }

//   return (
//     <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
//       {sections.map(section => {
//         const isMainActive = isHotelSubPage
//           ? section.key === 'hotel'
//           : mainSection === section.key
//         const isDropdownOpen = expanded === section.key

//         return (
//           <div key={section.key}>
//             {/* Main tab */}
//             <div
//               onClick={() =>
//                 section.hasSubMenu ? toggleDropdown(section.key) : null
//               }
//               className={`group flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
//                 isMainActive
//                   ? 'bg-white shadow-md font-semibold text-sky-800'
//                   : 'hover:bg-gray-300 text-gray-700'
//               }`}
//             >
//               <Link
//                 href={`/dashboard/${section.key}`}
//                 className="flex items-center gap-3 flex-grow"
//               >
//                 <span className={`transition-colors ${
//                   isMainActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'
//                 }`}>
//                   {section.icon}
//                 </span>
//                 <span>{section.label}</span>
//               </Link>

//               {/* Dropdown icon if applicable */}
//               {section.hasSubMenu && (
//                 <FaChevronDown
//                   className={`transition-transform duration-200 ml-2 ${
//                     isDropdownOpen ? 'rotate-180' : ''
//                   }`}
//                 />
//               )}
//             </div>

//             {/* Submenu (for Hotels) */}
//             {section.hasSubMenu && isDropdownOpen && (
//               <div className="ml-8 mt-1 space-y-1">
//                 {hotelSubMenu.map(sub => {
//                   const isSubActive = pathname === sub.path
//                   return (
//                     <Link
//                       key={sub.path}
//                       href={sub.path}
//                       className={`block px-3 py-2 rounded text-sm transition-colors ${
//                         isSubActive
//                           ? 'bg-sky-200 text-sky-800 font-semibold'
//                           : 'hover:bg-gray-300 text-gray-700'
//                       }`}
//                     >
//                       {sub.label}
//                     </Link>
//                   )
//                 })}
//               </div>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   )
// }





























//old file
// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import {
//   FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
//   FaUser, FaHotel, FaUsers, FaTruck, FaChevronDown,
// } from 'react-icons/fa'

// const sections = [
//   { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
//   { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
//   { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
//   { label: 'Hotels', key: 'hotel', icon: <FaHotel />, hasSubMenu: true },
//   { label: 'Teams', key: 'teams', icon: <FaUsers /> },
//   { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
// ]

// const hotelSubMenu = [
//   { label: 'Hotel', path: '/dashboard/hotel/name' },
//   { label: 'Room Category', path: '/dashboard/hotel/category' }
// ]

// export default function Sidebar() {
//   const pathname = usePathname()
//   const currentMain = pathname.split('/')[2]
//   const currentSub = pathname.split('/')[3]
//   const [expanded, setExpanded] = useState(null)

//   useEffect(() => {
//     if (currentMain === 'hotel') {
//       setExpanded('hotel')
//     } else {
//       setExpanded(null)
//     }
//   }, [pathname])

//   const toggleDropdown = (key) => {
//     setExpanded(prev => (prev === key ? null : key))
//   }

//   return (
//     <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
//       {sections.map(section => {
//         const isActive = currentMain === section.key
//         const isDropdownOpen = expanded === section.key

//         return (
//           <div key={section.key}>
//             <div
//               onClick={() =>
//                 section.hasSubMenu
//                   ? toggleDropdown(section.key)
//                   : null
//               }
//               className={`group flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
//                 isActive
//                   ? 'bg-white shadow-md font-semibold text-sky-800'
//                   : 'hover:bg-gray-300 text-gray-700'
//               }`}
//             >
//               <Link
//                 href={`/dashboard/${section.key}`}
//                 className="flex items-center gap-3 flex-grow"
//               >
//                 <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//                   {section.icon}
//                 </span>
//                 <span>{section.label}</span>
//               </Link>

//               {/* Dropdown icon on the right for submenu */}
//               {section.hasSubMenu && (
//                 <FaChevronDown
//                   className={`transition-transform duration-200 ml-2 ${
//                     isDropdownOpen ? 'rotate-180' : ''
//                   }`}
//                 />
//               )}
//             </div>

//             {/* Submenu */}
//             {section.hasSubMenu && isDropdownOpen && (
//               <div className="ml-8 mt-1 space-y-1">
//                 {hotelSubMenu.map(sub => {
//                   const isSubActive = pathname === sub.path
//                   return (
//                     <Link
//                       key={sub.path}
//                       href={sub.path}
//                       className={`block px-3 py-2 rounded text-sm transition-colors ${
//                         isSubActive
//                           ? 'bg-sky-200 text-sky-800 font-semibold'
//                           : 'hover:bg-gray-300 text-gray-700'
//                       }`}
//                     >
//                       {sub.label}
//                     </Link>
//                   )
//                 })}
//               </div>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   )
// }



























// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import {
//   FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
//   FaUser, FaHotel, FaUsers, FaTruck, FaChevronDown,
// } from 'react-icons/fa'

// const sections = [
//   { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
//   { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
//   { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
//   { label: 'Hotels', key: 'hotel', icon: <FaHotel />, hasSubMenu: true },
//   { label: 'Teams', key: 'teams', icon: <FaUsers /> },
//   { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
// ]

// const hotelSubMenu = [
//   { label: 'Hotel Name', path: '/dashboard/hotel/name' },
//   { label: 'Hotel Category', path: '/dashboard/hotel/category' }
// ]

// export default function Sidebar() {
//   const pathname = usePathname()
//   const currentMain = pathname.split('/')[2]
//   const currentSub = pathname.split('/')[3]
//   const [expanded, setExpanded] = useState(null)

//   // Auto-expand the correct dropdown based on path
//   useEffect(() => {
//     if (currentMain === 'hotel') {
//       setExpanded('hotel')
//     } else {
//       setExpanded(null)
//     }
//   }, [pathname])

//   const toggleDropdown = (key) => {
//     setExpanded(prev => (prev === key ? null : key))
//   }

//   return (
//     <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
//       {sections.map(section => {
//         const isActive = currentMain === section.key
//         const isDropdownOpen = expanded === section.key

//         return (
//           <div key={section.key}>
//             <div
//               onClick={() =>
//                 section.hasSubMenu
//                   ? toggleDropdown(section.key)
//                   : null
//               }
//               className={`group flex items-center gap-4 p-3 rounded-md cursor-pointer transition-colors ${
//                 isActive
//                   ? 'bg-white shadow-md font-semibold text-sky-800'
//                   : 'hover:bg-gray-300 text-gray-700'
//               }`}
//             >
//               <Link
//                 href={`/dashboard/${section.key}`}
//                 className="flex items-center gap-3 flex-grow"
//               >
//                 <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//                   {section.icon}
//                 </span>
//                 <span>{section.label}</span>
//               </Link>
//             </div>

//             {/* Hotel Submenu */}
//             {section.hasSubMenu && isDropdownOpen && (
//               <div className="ml-8 mt-1 space-y-1">
//                 {hotelSubMenu.map(sub => {
//                   const isSubActive = pathname === sub.path
//                   return (
//                     <Link
//                       key={sub.path}
//                       href={sub.path}
//                       className={`block px-3 py-2 rounded text-sm transition-colors ${
//                         isSubActive
//                           ? 'bg-sky-200 text-sky-800 font-semibold'
//                           : 'hover:bg-gray-300 text-gray-700'
//                       }`}
//                     >
//                       {sub.label}
//                     </Link>
//                   )
//                 })}
//               </div>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   )
// }






























// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import {
//   FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
//   FaUser, FaHotel, FaUsers, FaTruck, FaChevronDown
// } from 'react-icons/fa'
// import { useState } from 'react'

// const sections = [
//   { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
//   { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
//   { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
//   { label: 'Hotels', key: 'hotel', icon: <FaHotel /> },
//   { label: 'Teams', key: 'teams', icon: <FaUsers /> },
//   { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
// ]


// export default function Sidebar() {
//   const pathname = usePathname()
//   const activeMain = pathname.startsWith('/dashboard/') ? pathname.split('/')[2] : ''


//   const [hotelExpanded, setHotelExpanded] = useState(false)

//   const handleSectionClick = (key) => {
//     if (key === 'hotel') {
//       setHotelExpanded(!hotelExpanded) // toggle dropdown
//     } else {
//       setHotelExpanded(false) // collapse hotel dropdown on other clicks
//     }
//   }

//   return (
//     <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
//       {sections.map((section) => {
//         const isActive = activeMain === section.key



//         if (section.key === 'hotel') {
//           return (
//             <div key="hotel">
//               <div
//                 className={`group flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors 
//                 ${isActive || hotelExpanded
//                   ? 'bg-white shadow-md font-semibold text-sky-800'
//                   : 'hover:bg-gray-300 text-gray-700'}
//                 `}
//                 onClick={() => handleSectionClick('hotel')}
//               >
//                 <div className="flex items-center gap-3">
//                   <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//                     <FaHotel />
//                   </span>
//                   <span>Hotels</span>
//                 </div>
//                 <FaChevronDown className={`transition-transform duration-200 ${hotelExpanded ? 'rotate-180' : ''}`} />
//               </div>

//               {hotelExpanded && (
//                 <div className="ml-4 mt-2 space-y-1 text-sm">
//                   <div className="text-gray-600 font-medium">Hotel Name</div>
//                   {hotelSubSections.map(sub => (
//                     <Link
//                       key={sub.key}
//                       href={`/dashboard/hotel/${sub.key}`}
//                       onClick={() => setHotelExpanded(false)}
//                       className="block p-2 pl-6 rounded hover:bg-gray-200 text-gray-700"
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}

//                   <div className="text-gray-600 font-medium mt-3">Category</div>
//                   {hotelCategories.map(cat => (
//                     <Link
//                       key={cat.key}
//                       href={`/dashboard/hotel/category/${cat.key}`}
//                       onClick={() => setHotelExpanded(false)}
//                       className="block p-2 pl-6 rounded hover:bg-gray-200 text-gray-700"
//                     >
//                       {cat.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )
//         }

//         return (
//           <Link
//             href={`/dashboard/${section.key}`}
//             key={section.key}
//             onClick={() => handleSectionClick(section.key)}
//             className={`group flex items-center gap-4 p-3 rounded-md cursor-pointer transition-colors
//               ${isActive
//                 ? 'bg-white shadow-md font-semibold text-sky-800'
//                 : 'hover:bg-gray-300 text-gray-700'}
//             `}
//           >
//             <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//               {section.icon}
//             </span>
//             <span>{section.label}</span>
//           </Link>
//         )
//       })}
//     </div>
//   )
// }




























// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import {
//   FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
//   FaUser, FaHotel, FaUsers, FaTruck, FaChevronDown
// } from 'react-icons/fa'
// import { useState } from 'react'

// const sections = [
//   { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
//   { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
//   { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
//   { label: 'Hotels', key: 'hotel', icon: <FaHotel /> },
//   { label: 'Teams', key: 'teams', icon: <FaUsers /> },
//   { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
// ]

// const hotelSubSections = [
//   { label: 'Hotel Name 1', key: 'hotel-name-1' },
//   { label: 'Hotel Name 2', key: 'hotel-name-2' },
//   { label: 'Hotel Name 3', key: 'hotel-name-3' },
// ]

// const hotelCategories = [
//   { label: 'Luxury', key: 'luxury' },
//   { label: 'Budget', key: 'budget' },
//   { label: 'Boutique', key: 'boutique' },
// ]

// export default function Sidebar() {
//   const pathname = usePathname()
//   const active = pathname.split('/')[2]
//   const [hotelExpanded, setHotelExpanded] = useState(false)

//   const toggleHotel = () => setHotelExpanded(!hotelExpanded)

//   return (
//     <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
//       {sections.map((section) => {
//         const isActive = active === section.key

//         if (section.key === 'hotel') {
//           return (
//             <div key="hotel">
//               <div
//                 className={`group flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors 
//                 ${isActive || hotelExpanded
//                     ? 'bg-white shadow-md font-semibold text-sky-800'
//                     : 'hover:bg-gray-300 text-gray-700'}
//                 `}
//                 onClick={toggleHotel}
//               >
//                 <div className="flex items-center gap-3">
//                   <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//                     <FaHotel />
//                   </span>
//                   <span>Hotels</span>
//                 </div>
//                 <FaChevronDown className={`transition-transform duration-200 ${hotelExpanded ? 'rotate-180' : ''}`} />
//               </div>

//               {hotelExpanded && (
//                 <div className="ml-4 mt-2 space-y-1 text-sm">
//                   <div className="text-gray-600 font-medium">Hotel Name</div>
//                   {hotelSubSections.map(sub => (
//                     <Link
//                       key={sub.key}
//                       href={`/dashboard/hotel/${sub.key}`}
//                       className="block p-2 pl-6 rounded hover:bg-gray-300 text-gray-700"
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}

//                   <div className="text-gray-600 font-medium mt-3">Category</div>
//                   {hotelCategories.map(cat => (
//                     <Link
//                       key={cat.key}
//                       href={`/dashboard/hotel/category/${cat.key}`}
//                       className="block p-2 pl-6 rounded hover:bg-gray-300 text-gray-700"
//                     >
//                       {cat.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )
//         }

//         return (
//           <Link
//             href={`/dashboard/${section.key}`}
//             key={section.key}
//             className={`group flex items-center gap-4 p-3 rounded-md cursor-pointer transition-colors
//               ${isActive
//                 ? 'bg-white shadow-md font-semibold text-sky-800'
//                 : 'hover:bg-gray-300 text-gray-700'}
//             `}
//           >
//             <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//               {section.icon}
//             </span>
//             <span>{section.label}</span>
//           </Link>
//         )
//       })}
//     </div>
//   )
// }



















// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import {
//   FaCalendarAlt, FaMapMarkerAlt, FaUniversity,
//   FaUser, FaHotel, FaUsers, FaTruck,
// } from 'react-icons/fa'

// const sections = [
//   { label: 'Events', key: 'event', icon: <FaCalendarAlt /> },
//   { label: 'Venues', key: 'venues', icon: <FaMapMarkerAlt /> },
//   { label: 'Organizers', key: 'organizers', icon: <FaUser /> },
//   { label: 'Departments', key: 'departments', icon: <FaUniversity /> },
//   { label: 'Hotels', key: 'hotel', icon: <FaHotel /> },
//   { label: 'Teams', key: 'teams', icon: <FaUsers /> },
//   { label: 'Suppliers', key: 'suppliers', icon: <FaTruck /> },
// ]

// export default function Sidebar() {
//   const pathname = usePathname()
//   const active = pathname.split('/')[2]

//   return (
//     <div className="w-60 bg-blue-100 p-4 space-y-1 min-h-screen">
//       {sections.map((section) => {
//         const isActive = active === section.key
//         return (
//           <Link
//             href={`/dashboard/${section.key}`}
//             key={section.key}
//             className={`group flex items-center gap-4 p-3 rounded-md cursor-pointer transition-colors
//               ${isActive
//                 ? 'bg-white shadow-md font-semibold text-sky-800'
//                 : 'hover:bg-gray-300 text-gray-700'}
//             `}
//           >
//             <span className={`transition-colors ${isActive ? 'text-sky-800' : 'group-hover:text-gray-900 text-gray-500'}`}>
//               {section.icon}
//             </span>
//             <span>{section.label}</span>
//           </Link>
//         )
//       })}
//     </div>
//   )
// }
