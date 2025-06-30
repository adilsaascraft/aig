'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, MoreVertical, Link as LinkIcon } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { FaChevronDown } from 'react-icons/fa'

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

  const handleManage = () => {
    toast.success('Manage/Edit modal triggered')
  }

  return (
    <div className="bg-[#FDFBFB] rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
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

      {/* Manage + Dropdown */}
      <div className="flex flex-col items-end gap-2 absolute top-[30px] right-[30px] z-10">
        <div className="relative" ref={dropdownRef}>
          {/* Combined Button Group */}
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden divide-x bg-white">
            <button
              onClick={handleManage}
              className="px-3 py-1 text-black border-gray-300 hover:bg-gray-100 text-sm"
            >
              Manage
            </button>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-2 hover:bg-gray-100 text-gray-300"
            >
              <FaChevronDown size={14} />
            </button>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-32 z-20">
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
          Registration Link
        </a>
      </div>
    </div>
  )
}






























//Old Code no need more 
// 'use client'
// import { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { Calendar, MapPin, MoreVertical, Link as LinkIcon } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import {FaChevronDown} from 'react-icons/fa'

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
//     <div className="bg-[#FDFBFB] rounded-xl border-1 border-gray-100 p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
//       <Toaster position="top-right" />
      

//       {/* Event Image */}
//       <div className="min-w-[120px] h-[160px] relative">
//         <Image
//           src={event.image}
//           alt={event.title}
//           width={120}
//           height={160}
//           className="rounded-md object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1 w-full">
//         <h2 className="text-xl font-bold text-blue-800">{event.title}</h2>

//         <div className="mt-1">
//           <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
//             {event.status}
//           </span>
//         </div>

//         <div className="mt-3 flex flex-col gap-2 text-sm text-gray-800">
//           <div className="flex items-center gap-2">
//             <Calendar size={16} />
//             <span>{event.dates}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin size={16} />
//             <span>{event.location}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src={event.lastModifiedBy.avatar}
//               alt="Avatar"
//               width={20}
//               height={20}
//               className="rounded-full"
//             />
//             <span className="text-gray-600 text-sm">
//               Last modified {event.lastModifiedBy.timeAgo}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Manage + Options */}
//       <div className="flex flex-col items-end gap-2 absolute top-[30px] right-[30px]  z-10">
//         <div className="flex items-center gap-2 relative" ref={dropdownRef}>
//           <button className="border border-blue-700 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-50">
//             Manage
//           </button>

//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
//           >
//             <FaChevronDown size={18} />
//           </button>

//           {showDropdown && (
//             <div className="absolute right-0 top-10 bg-white border rounded-md shadow z-10 w-32">
//               <button
//                 onClick={() => handleAction('Edit')}
//                 className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleAction('Delete')}
//                 className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Registration Link */}
//         <a
//           href={event.registrationLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-1 text-[#1F5C9E] mr-5 text-sm hover:underline"
//         >
//           <LinkIcon size={14} />
//           Registration Link
//         </a>
//       </div>
//     </div>
//   )
// }