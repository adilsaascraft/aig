'use client'
import { use } from 'react'
import { useState } from 'react'
import sectionMap from '@/app/data/sectionMap'
import EventCard from '@/app/components/EventCard'
import OrganizerTable from '@/app/components/OrganizerTable'

// Import modal form components
import AddEventForm from '@/app/components/AddEventForm'
import AddVenueForm from '@/app/components/AddVenueForm'
import AddDepartmentForm from '@/app/components/AddDepartmentForm'
import AddSupplierForm from '@/app/components/AddSupplierForm'
import AddTeamForm from '@/app/components/AddTeamForm'
// import AddHotelForm from '@/app/components/AddHotelForm'
import AddOrganizerForm from '@/app/components/AddOrganizerForm'

export default function SectionPage({ params }) {
  const { section } = use(params)
  const config = sectionMap[section] || {}
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

  const showSearch = ['event', 'venues', 'hotel'].includes(section)
  const showTabs = Array.isArray(config.tabs)

  // Choose correct modal form based on section
  const renderModalContent = () => {
    switch (section) {
      case 'event':
        return <AddEventForm onClose={() => setModalOpen(false)} />
      case 'venues':
        return <AddVenueForm onClose={() => setModalOpen(false)} />
      case 'hotel':
        return <AddHotelForm onClose={() => setModalOpen(false)} />
        case 'teams':
        return <AddTeamForm onClose={() => setModalOpen(false)} />
        case 'departments':
        return <AddDepartmentForm onClose={() => setModalOpen(false)} />
        case 'suppliers':
        return <AddSupplierForm onClose={() => setModalOpen(false)} />
        case 'organizers':
        return <AddOrganizerForm onClose={() => setModalOpen(false)} />
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

      {/* Section Content */}
      {['organizers', 'departments', 'suppliers', 'teams'].includes(section) ? (
        <OrganizerTable activeTab={activeTab} />
      ) : paginatedItems.length > 0 ? (
        paginatedItems.map((item) => <EventCard key={item.id} event={item} />)
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
