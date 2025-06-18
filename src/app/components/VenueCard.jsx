'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, MoreVertical, Link as LinkIcon } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

export default function EventCard({ event }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef()

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleAction = (type) => {
    setShowDropdown(false)
    toast.success(`${type} clicked`)
  }

  return (
    <div className="bg-[#FDFBFB] rounded-xl shadow-md p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
      <Toaster position="top-right" />
      

      {/* Event Image */}
      <div className="min-w-[120px] h-[160px] relative">
        <Image
          src={event.image}
          alt={event.title}
          width={120}
          height={160}
          className="rounded-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <h2 className="text-xl font-bold text-blue-800">{event.title}</h2>

        <div className="mt-1">
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
            {event.status}
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-2 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{event.dates}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={event.lastModifiedBy.avatar}
              alt="Avatar"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-gray-600 text-sm">
              Last modified {event.lastModifiedBy.timeAgo}
            </span>
          </div>
        </div>
      </div>

      {/* Manage + Options */}
      <div className="flex flex-col items-end gap-2 absolute top-[30px] right-[30px]  z-10">
        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <button className="border border-blue-700 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-50">
            Manage
          </button>

          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
          >
            <MoreVertical size={18} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-10 bg-white border rounded-md shadow z-10 w-32">
              <button
                onClick={() => handleAction('Edit')}
                className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
              >
                Edit
              </button>
              <button
                onClick={() => handleAction('Delete')}
                className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Registration Link */}
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#1F5C9E] mr-5 text-sm hover:underline"
        >
          <LinkIcon size={14} />
          Venue Website
        </a>
      </div>
    </div>
  )
}














// 'use client'
// import { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { Calendar, MapPin, MoreVertical, Link as LinkIcon } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'

// export default function EventCard({ event }) {
//   const [showDropdown, setShowDropdown] = useState(false)
//   const dropdownRef = useRef()

//   const handleClickOutside = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//       setShowDropdown(false)
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleAction = (type) => {
//     setShowDropdown(false)
//     toast.success(`${type} clicked`)
//   }

//   return (
//     <div className="bg-gray-50 rounded-xl shadow-md p-4 relative">
//       <Toaster position="top-right" />

//       {/* Top-right manage + dots */}
//       <div
//         className="absolute top-[30px] right-[30px] flex items-center gap-2 z-10"
//         ref={dropdownRef}
//       >
//         <button className="border border-blue-700 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-50">
//           Manage
//         </button>
//         <button
//           onClick={() => setShowDropdown(!showDropdown)}
//           className="border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-100"
//         >
//           <MoreVertical size={18} />
//         </button>

//         {showDropdown && (
//           <div className="absolute right-0 top-10 bg-white border rounded-md shadow z-20 w-32">
//             <button
//               onClick={() => handleAction('Edit')}
//               className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleAction('Delete')}
//               className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Card Content */}
//       <div className="flex flex-col md:flex-row gap-4 mt-6">
//         {/* Event Image */}
//         <div className="min-w-[120px] h-[160px] relative">
//           <Image
//             src={event.image}
//             alt={event.title}
//             width={120}
//             height={160}
//             className="rounded-md object-cover"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex-1 w-full">
//           <h2 className="text-xl font-bold text-blue-800">{event.title}</h2>

//           <div className="mt-1">
//             <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
//               {event.status}
//             </span>
//           </div>

//           <div className="mt-3 flex flex-col gap-2 text-sm text-gray-800">
//             <div className="flex items-center gap-2">
//               <Calendar size={16} />
//               <span>{event.date}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin size={16} />
//               <span>{event.location}</span>
//             </div>
//             {/* <div className="flex items-center gap-2">
//               <Image
//                 src={event.lastModifiedBy.avatar}
//                 alt="Avatar"
//                 width={20}
//                 height={20}
//                 className="rounded-full"
//               />
//               <span className="text-gray-600 text-sm">
//                 Last modified {event.lastModifiedBy.timeAgo}
//               </span>
//             </div> */}
//           </div>

//           {/* Registration Link */}
//           <div className="mt-4 flex items-center text-blue-700 text-sm hover:underline cursor-pointer">
//             <LinkIcon size={14} className="mr-1" />
//             <a
//               href={event.registrationLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Registration Link
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
























// import { useState } from 'react'
// import { MoreVertical, Link as LinkIcon } from 'lucide-react'

// export default function EventCard({ event }) {
//   const [showOptions, setShowOptions] = useState(false)

//   const toggleOptions = () => setShowOptions(!showOptions)

//   return (
//     <div className="bg-white rounded-lg shadow p-4 relative">
//       <div className="flex justify-between items-start">
//         {/* Event Info */}
//         <div>
//           <h2 className="text-xl font-semibold">{event.title}</h2>
//           <p className="text-sm text-gray-500">{event.date}</p>
//           <span className="text-xs mt-2 inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded">
//             {event.status}
//           </span>
//         </div>

//         {/* Manage + Options */}
//         <div className="relative text-right">
//           <button className="bg-blue-600 text-white px-3 py-1 rounded shadow">
//             Manage
//           </button>

//           {/* 3 dots */}
//           <button
//             onClick={toggleOptions}
//             className="ml-2 p-1 rounded-full hover:bg-gray-100"
//           >
//             <MoreVertical size={20} />
//           </button>

//           {/* Dropdown Options */}
//           {showOptions && (
//             <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow z-10">
//               <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
//                 Edit
//               </button>
//               <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Registration Link */}
//       <div className="mt-3 flex items-center text-blue-600 text-sm cursor-pointer hover:underline">
//         <LinkIcon size={16} className="mr-1" />
//         <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//           Registration Link
//         </a>
//       </div>
//     </div>
//   )
// }



// import { useState } from 'react'
// import { MoreVertical, Link as LinkIcon } from 'lucide-react'
// export default function EventCard({ event }) {

//     const [showOptions, setShowOptions] = useState(false)

//     const toggleOptions = () => setShowOptions(!showOptions)

//   return (
//     <div className="bg-white shadow rounded-lg flex p-6 gap-6 items-center">
//       <img src={event.image} alt={event.title} className="w-40 h-auto rounded" />
//       <div className="flex-1">
//         <h2 className="text-xl font-bold">{event.title}</h2>
//         <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mt-1">
//           LIVE
//         </span>
//         <div className="flex items-center gap-2 mt-2">
//           <span>📅</span>
//           <span>{event.dates}</span>
//         </div>
//         <div className="flex items-center gap-2 mt-1">
//           <span>📍</span>
//           <span>{event.location}</span>
//         </div>
//         <p className="text-sm mt-2 text-gray-500">Last modified {event.lastModified}</p>
//       </div>
//       <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md shadow">
//         Manage
//       </button>
//       {/* 3 dots */}
//     {           <button
//              onClick={toggleOptions}
//              className="ml-0 p-1 rounded-full hover:bg-gray-100"
//            >
//              <MoreVertical size={20} />
//            </button> }
//            {/* Dropdown Options */}
//           {showOptions && (
//             <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow z-10">
//               <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
//                 Edit
//               </button>
//               <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
//                 Delete
//               </button>
//             </div>
//           )}
//           {/* Registration Link */}
//       <div className="mt-3 flex items-center text-blue-600 text-sm cursor-pointer hover:underline">
//         <LinkIcon size={16} className="mr-1" />
//         <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//           Registration Link
//         </a>
//       </div>
//     </div>
//   )
// }
