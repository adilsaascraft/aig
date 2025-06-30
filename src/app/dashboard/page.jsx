'use client'
import { use } from 'react'
import { useState } from 'react'
import sections from '../../data/sections'

import EventCard from '@/app/components/EventCard'
import VenueCard from '@/app/components/VenueCard'
import HotelCard from '@/app/components/HotelCard'
import RoomCategoryCard from '../components/RoomCategoryCard'

import OrganizerTable from '@/app/components/OrganizerTable'
import DepartmentTable from '@/app/components/DepartmentTable'
import SupplierTable from '@/app/components/SupplierTable'
import TeamTable from '@/app/components/TeamTable'

import AddHotelForm from '@/app/components/AddHotelForm'
import AddEventForm from '@/app/components/AddEventForm'
import AddVenueForm from '@/app/components/AddVenueForm'
import AddDepartmentForm from '@/app/components/AddDepartmentForm'
import AddSupplierForm from '@/app/components/AddSupplierForm'
import AddTeamForm from '@/app/components/AddTeamForm'
import AddOrganizerForm from '@/app/components/AddOrganizerForm'

export default function SectionPage({ params }) {
  const { section } = use(params)
  const config = sections[section] || {}
  const [activeTab, setActiveTab] = useState(config.tabs?.[0] || 'All')
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const items = config.data || []
  const filteredItems = items.filter(
    (item) =>
      (activeTab === 'All' || item.status === activeTab) &&
      item.title?.toLowerCase().includes(search.toLowerCase())
  )
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const showSearch = ['event', 'venues', 'hotel', 'category'].includes(section)
  const showTabs = Array.isArray(config.tabs)

  // 🔁 Modal Form
  const renderModalContent = () => {
    switch (section) {
      case 'event': return <AddEventForm onClose={() => setModalOpen(false)} />
      case 'venues': return <AddVenueForm onClose={() => setModalOpen(false)} />
      case 'hotel': return <AddHotelForm onClose={() => setModalOpen(false)} />
      case 'teams': return <AddTeamForm onClose={() => setModalOpen(false)} />
      case 'departments': return <AddDepartmentForm onClose={() => setModalOpen(false)} />
      case 'suppliers': return <AddSupplierForm onClose={() => setModalOpen(false)} />
      case 'organizers': return <AddOrganizerForm onClose={() => setModalOpen(false)} />
      default: return null
    }
  }

  // 🔁 Dynamic Card Renderer
  const renderCard = (item) => {
    switch (section) {
      case 'event':
        return <EventCard key={item.id} event={item} />
      case 'venues':
        return <VenueCard key={item.id} venues={item} />
      case 'hotel':
        return <HotelCard key={item.id} hotel={item} />
        case 'category':
        return <RoomCategoryCard key={item.id} cat={item} />
      default:
        return null
    }
  }

  // 🔁 Table Components
  const renderSectionTable = () => {
    switch (section) {
      case 'organizers':
        return <OrganizerTable activeTab={activeTab} />
      case 'departments':
        return <DepartmentTable activeTab={activeTab} />
      case 'suppliers':
        return <SupplierTable activeTab={activeTab} />
      case 'teams':
        return <TeamTable activeTab={activeTab} />
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{config.title}</h1>
        {config.button && (
          <button
            className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-md shadow"
            onClick={() => setModalOpen(true)}
          >
            {config.button}
          </button>
        )}
      </div>

      {/* Tabs */}
      {showTabs && (
        <div className="flex gap-6 mb-6 border-b border-gray-200">
          {config.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setCurrentPage(1)
              }}
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
      )}

      {/* Search */}
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            placeholder={`Search ${section}...`}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
          />
        </div>
      )}

      {/* Content */}
      {['organizers', 'departments', 'suppliers', 'teams'].includes(section) ? (
        renderSectionTable()
      ) : paginatedItems.length > 0 ? (
        paginatedItems.map(renderCard)
      ) : (
        <p className="text-gray-500">No {section} found.</p>
      )}

      {/* Pagination */}
      {filteredItems.length > itemsPerPage && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {renderModalContent()}
        </div>
      )}
    </div>
  )
}



































// old file
// 'use client'
// import { useEffect, useState } from 'react'
// import Sidebar from '@/app/components/Sidebar'
// import EventCard from '@/app/components/EventCard'
// import VenueCard from '../components/VenueCard'
// import HotelCard from '@/app/components/HotelCard'
// import OrganizerTable from '@/app/components/OrganizerTable'
// import DepartmentTable from '@/app/components/DepartmentTable'
// import TeamTable from '@/app/components/TeamTable'
// import SupplierTable from '@/app/components/SupplierTable'
// import AddEventForm from '@/app/components/AddEventForm'
// import AddVenueForm from '@/app/components/AddVenueForm'
// import AddOrganizerForm from '@/app/components/AddOrganizerForm'
// import AddDepartmentForm from '@/app/components/AddDepartmentForm'
// import AddTeamForm from '@/app/components/AddTeamForm'
// import AddSupplierForm from '@/app/components/AddSupplierForm'
// import sections from '../data/sections'
// import VenueCard from '../components/VenueCard'

// export default function DashboardPage() {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [section, setSection] = useState('event')
//   const [activeTab, setActiveTab] = useState('Live')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 10

//   const sectionConfig = sections[section] || {
//     title: 'Unknown Section',
//     button: '',
//     tabs: [],
//     data: [],
//   }

//   const [items, setItems] = useState([])

//   useEffect(() => {
//     if (sections[section]) {
//       setItems(sections[section].data)
//       setActiveTab(sections[section].tabs[0])
//       setCurrentPage(1)
//     }
//   }, [section])

//   const filteredItems = items.filter(
//     (item) =>
//       (activeTab === 'All' || item.status === activeTab) &&
//       item.title?.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//     setCurrentPage(1)
//   }

//   const handleSectionChange = (newSectionKey) => {
//     if (sections[newSectionKey]) {
//       setSection(newSectionKey)
//     } else {
//       console.warn(`Unknown section: ${newSectionKey}`)
//     }
//   }

//   // Add model

//   const renderAddFormModal = () => {
//   if (!showAddForm) return null;

//   if (section === 'event') return <AddEventForm onClose={() => setShowAddForm(false)} />;
//   if (section === 'venues') return <AddVenueForm onClose={() => setShowAddForm(false)} />;
//   if (section === 'hotel') return <AddHotelForm onClose={() => setShowAddForm(false)} />;
//   if (section === 'organizers') return <AddOrganizerForm onClose={() => setShowAddForm(false)} />;
//   if (section === 'departments') return <AddDepartmentForm onClose={() => setShowAddForm(false)} />;
//   if (section === 'suppliers') return <AddSupplierForm onClose={() => setShowAddForm(false)} />;
//   if (section === 'teams') return <AddTeamForm onClose={() => setShowAddForm(false)} />;

//   return null;
// };

//   const renderSectionComponent = () => {
//   if (section === 'organizers') {
//     return <OrganizerTable activeTab={activeTab} />;
//   }

//   if (section === 'departments') {
//     return <DepartmentTable activeTab={activeTab} />;
//   }

//   if (section === 'suppliers') {
//     return <SupplierTable activeTab={activeTab} />;
//   }

//   if (section === 'teams') {
//     return <TeamTable activeTab={activeTab} />;
//   }
//   if (section === 'event') {
//     return <EventCard activeTab={activeTab} />;
//   }
//   if (section === 'venues') {
//     return <VenueCard activeTab={activeTab} />;
//   }

//   if (section === 'hotel') {
//     return <HotelCard activeTab={activeTab} />;
//   }
  

  


//     return (
//       <div className="space-y-6">
//         {paginatedItems.length > 0 ? (
//           paginatedItems.map((item) => <EventCard key={item.id} event={item} />)
//         ) : (
//           <p className="text-gray-500">No {section} found.</p>
//         )}
//       </div>
//     )
//   }

//   return (
//     <>
//     <div className="flex min-h-screen">
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">{sectionConfig.title}</h1>
//           <button
//            onClick={() => setShowAddForm(true)}
//            className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-md shadow">
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

//         {/* Search (only for event, venues, hotel) */}
//         {['event', 'venues', 'hotel'].includes(section) && (
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder={`Search ${section}...`}
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value)
//                 setCurrentPage(1)
//               }}
//               className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
//             />
//           </div>
//         )}

//         {renderSectionComponent()}
        
        


//         {/* Pagination for cards only */}
//         {['event', 'venues', 'hotel'].includes(section) && totalPages > 1 && (
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
//     {renderAddFormModal()}

//     </>
//   )
// }