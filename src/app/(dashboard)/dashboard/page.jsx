'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import EventCard from '../../components/EventCard'
import OrganizerTable from '../../components/OrganizerTable'
import eventData from '../../data/event'
import venueData from '../../data/venues'
import hotelData from '../../data/hotel'
import organizersData from '../../data/organizer'

const sectionMap = {
  event: {
    title: 'Your Events',
    button: '＋ Add Event',
    tabs: ['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All', 'Trash'],
    data: eventData,
  },
  venues: {
    title: 'Your Venues',
    button: '＋ Add Venue',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: venueData,
  },
  hotel: {
    title: 'Your Hotels',
    button: '＋ Add Hotel',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: hotelData,
  },
  organizer: {
    title: 'Your Organizer',
    button: '＋ Add Organizer',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: organizersData,
  },
}

export default function DashboardPage() {
  const [section, setSection] = useState('event')
  const [activeTab, setActiveTab] = useState('Live')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const sectionConfig = sectionMap[section] || {
    title: 'Unknown Section',
    button: '',
    tabs: [],
    data: [],
  }

  const [items, setItems] = useState([])

  useEffect(() => {
    if (sectionMap[section]) {
      setItems(sectionMap[section].data)
      setActiveTab(sectionMap[section].tabs[0])
      setCurrentPage(1)
    }
  }, [section])

  const filteredItems = items.filter(
    (item) =>
      (activeTab === 'All' || item.status === activeTab) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  const handleSectionChange = (newSectionKey) => {
    if (sectionMap[newSectionKey]) {
      setSection(newSectionKey)
    } else {
      console.warn(`Unknown section: ${newSectionKey}`)
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar onSectionChange={handleSectionChange} />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{sectionConfig.title}</h1>
          <button className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-md shadow">
            {sectionConfig.button}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-gray-200">
          {sectionConfig.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? 'border-b-2 border-sky-800 text-sky-800 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder={`Search ${section}...`}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((item) => (
              <EventCard key={item.id} event={item} />
            ))
          ) : (
            <p className="text-gray-500">No {section} found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}






























// 'use client'
// import { useEffect, useState } from 'react'
// import Sidebar from '../../components/Sidebar'
// import EventCard from '../../components/EventCard'
// import eventData from '../../data/event'
// import venueData from '../../data/venues'
// import hotelData from '../../data/hotel'

// const sectionMap = {
//   event: {
//     title: 'Your Events',
//     button: '＋ Add Event',
//     tabs: ['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All', 'Trash'],
//     data: eventData,
//   },
//   venues: {
//     title: 'Your Venues',
//     button: '＋ Add Venue',
//     tabs: ['Active', 'Inactive', 'All', 'Trash'],
//     data: venueData,
//   },
//   hotel: {
//     title: 'Your Hotels',
//     button: '＋ Add Hotel',
//     tabs: ['Active', 'Inactive', 'All', 'Trash'],
//     data: hotelData,
//   },
// }

// export default function DashboardPage() {
//   const [section, setSection] = useState('Events')
//   const [activeTab, setActiveTab] = useState('Live')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 3

//   const sectionConfig = sectionMap[section]
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     setItems(sectionConfig.data)
//     setActiveTab(sectionConfig.tabs[0])
//     setCurrentPage(1)
//   }, [section])

//   const filteredItems = items.filter(
//     (item) =>
//       (activeTab === 'All' || item.status === activeTab) &&
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//     setCurrentPage(1)
//   }

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar onSectionChange={setSection} />
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">{sectionConfig.title}</h1>
//           <button className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-md shadow">
//             {sectionConfig.button}
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-6 border-b border-gray-200">
//           {sectionConfig.tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabChange(tab)}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? 'border-b-2 border-sky-800 text-sky-800 font-semibold'
//                   : 'text-gray-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Search */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder={`Search ${section}...`}
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value)
//               setCurrentPage(1)
//             }}
//             className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Cards */}
//         <div className="space-y-6">
//           {paginatedItems.length > 0 ? (
//             paginatedItems.map((item) => (
//               <EventCard key={item.id} event={item} />
//             ))
//           ) : (
//             <p className="text-gray-500">No {section} found.</p>
//           )}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === index + 1
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-600 border-gray-300'
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }



































//Original dashboard code
// 'use client'
// import { useEffect, useState } from 'react'
// import Sidebar from '../../components/Sidebar'
// import EventCard from '../../components/EventCard'
// import eventData from '../../data/event'

// export default function DashboardPage() {
//   const [events, setEvents] = useState([])
//   const [activeTab, setActiveTab] = useState('Live')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 3

//   useEffect(() => {
//     setEvents(eventData)
//   }, [])

//   // Filtered events by tab and search query
//   const filteredEvents = events.filter(
//     (event) =>
//       (activeTab === 'All' || event.status === activeTab) &&
//       event.title.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)

//   // Paginated results
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage)

//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//     setCurrentPage(1) // reset page
//   }

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Your Events</h1>
//           <button className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-md shadow">
//             ＋ Add Event
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-6 border-b border-gray-200">
//           {['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All' , 'Trash'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabChange(tab)}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? 'border-b-2 border-sky-800 text-sky-800 font-semibold'
//                   : 'text-gray-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Search */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search events..."
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value)
//               setCurrentPage(1)
//             }}
//             className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Event Cards */}
//         <div className="space-y-6">
//           {paginatedEvents.length > 0 ? (
//             paginatedEvents.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))
//           ) : (
//             <p className="text-gray-500">No events found.</p>
//           )}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === index + 1
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-600 border-gray-300'
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }














//  add event open model
// 'use client';   

// import { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import EventCard from '../components/EventCard';
// import AddEventForm from '../components/AddEventForm';
// import eventData from '../data/event';

// export default function DashboardPage() {
//   const [events, setEvents] = useState([]);
//   const [activeTab, setActiveTab] = useState('Live');
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     setEvents(eventData)
//   }, [])

//   const handleAddEvent = (newEvent) => {
//     setEvents((prev) => [...prev, { ...newEvent, id: Date.now(), status: 'Live' }]);
//     setShowForm(false);
//     setActiveTab('Live');
//   };

//   const filteredEvents = events.filter(
//     (event) => activeTab === 'All' || event.status === activeTab
//   );

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar activeTab="Events" />
//       <div className="flex-1 p-8 bg-gray-50 relative">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Your Events</h1>
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md shadow"
//           >
//             ＋ Add Event
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-6 border-b border-gray-200">
//           {["Running", "Live", "Drafts", "Past", "Cancelled", "All", "Trash"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
//                   : 'text-gray-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Event Cards */}
//         <div className="space-y-6">
//           {filteredEvents.map((event) => (
//             <EventCard key={event.id} event={event} />
//           ))}
//         </div>

//         {/* Add Event Modal */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto">
//             <div className="bg-white rounded-md shadow-xl w-full max-w-2xl p-6 m-6 relative">
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//               <AddEventForm onSave={handleAddEvent} onCancel={() => setShowForm(false)} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



















// 'use client'
// import { useEffect, useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import EventCard from '../components/EventCard'
// import eventData from '../data/event'

// export default function DashboardPage() {
//   const [events, setEvents] = useState([])
//   const [activeTab, setActiveTab] = useState('Live')
//   const [searchQuery, setSearchQuery] = useState('')

//   useEffect(() => {
//     setEvents(eventData)
//   }, [])

//   const filteredEvents = events.filter(event =>
//     (activeTab === 'All' || event.status === activeTab) &&
//     event.title.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Your Events</h1>
//           <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md shadow">
//             ＋ Add Event
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-6 border-b border-gray-200">
//           {['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All'].map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
//                   : 'text-gray-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Search */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search events..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Event Cards */}
//         <div className="space-y-6">
//           {filteredEvents.length ? (
//             filteredEvents.map(event => (
//               <EventCard key={event.id} event={event} />
//             ))
//           ) : (
//             <p className="text-gray-500">No events found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }





// 'use client'
// import { useState, useEffect } from 'react'
// import Sidebar from '../components/Sidebar'
// import EventCard from '../components/EventCard'
// import eventsData from '../data/event' // Import dummy data

// export default function DashboardPage() {
//   const [events, setEvents] = useState([])
//   const [activeTab, setActiveTab] = useState('Live')

//   useEffect(() => {
//     // Directly use local data
//     setEvents(eventsData)
//   }, [])

//   const filteredEvents =
//     activeTab === 'All'
//       ? events
//       : events.filter(event => event.status === activeTab)

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Your Events</h1>
//           <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md shadow">
//             ＋ Add Event
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-6 border-b border-gray-200">
//           {['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All', 'Trash'].map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
//                   : 'text-gray-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Events */}
//         <div className="space-y-6">
//           {filteredEvents.length > 0 ? (
//             filteredEvents.map(event => (
//               <EventCard key={event.id} event={event} />
//             ))
//           ) : (
//             <p className="text-gray-500">No events found for "{activeTab}".</p>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }









// 'use client'
// import { useEffect, useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import EventCard from '../components/EventCard'

// export default function DashboardPage() {
//   const [events, setEvents] = useState([])
//   const [activeTab, setActiveTab] = useState('Live')
//   const token = 'YOUR_BEARER_TOKEN' // Replace with secure token

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch('/api/events', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         const data = await res.json()
//         setEvents(data)
//       } catch (err) {
//         console.error('Error fetching events:', err)
//       }
//     }

//     fetchEvents()
//   }, [])

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Your Events</h1>
//           <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md shadow">
//             ＋ Add Event
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-6 border-b border-gray-200">
//           {['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All', 'Trash'].map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 ${
//                 activeTab === tab
//                   ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
//                   : 'text-gray-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Events */}
//         <div className="space-y-6">
//           {events.map(event => (
//             <EventCard key={event.id} event={event} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }




// // 'use client';
// // import { useEffect, useState } from 'react';
// // import eventsData from '../data/event';

// // export default function Dashboard() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     // Simulate API call
// //     setTimeout(() => {
// //       setEvents(eventsData);
// //     }, 300);
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Your Events</h1>

// //       {events.length === 0 ? (
// //         <p className="text-gray-500">Loading events...</p>
// //       ) : (
// //         events.map((event) => (
// //           <div
// //             key={event.id}
// //             className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm mb-4"
// //           >
// //             <div className="flex gap-4 items-center">
// //               <img
// //                 src={event.image}
// //                 alt={event.title}
// //                 className="w-32 h-40 object-cover rounded"
// //               />
// //               <div>
// //                 <h2 className="text-xl font-semibold">{event.title}</h2>
// //                 <span className="inline-block text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded mt-1">
// //                   {event.status}
// //                 </span>
// //                 <p className="mt-2 flex items-center">
// //                   📅 {new Date(event.startDate).toLocaleDateString()} -{' '}
// //                   {new Date(event.endDate).toLocaleDateString()}
// //                 </p>
// //                 <p className="mt-1">📍 {event.location}</p>
// //                 <p className="text-sm text-gray-500 mt-1">
// //                   Last modified {event.updatedAt}
// //                 </p>
// //               </div>
// //             </div>
// //             <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 shadow">
// //               Manage
// //             </button>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }




















