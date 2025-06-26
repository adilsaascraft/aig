'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import '../globals.css';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import events from '../data/events';
import eventsData from '../data/conference';


const departments = ['Orthopedics', 'Nephrology', 'Cardiology', 'Gynaecology']
const sortOptions = ['Date', 'Title']

export default function HomeHero() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState([])
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [sortBy, setSortBy] = useState('Date')
  const router = useRouter()

  const filtered = events
    .filter((e) =>
      selectedDepartment ? e.department === selectedDepartment : true
    )
    .sort((a, b) => {
      if (sortBy === 'Title') return a.title.localeCompare(b.title)
      return new Date(a.date.split(' - ')[0]) - new Date(b.date.split(' - ')[0])
    })

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) {
      setError('Please enter a search term')
      return
    }

    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Search failed')

      setResults(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <section className="relative h-[90vh] flex items-center justify-start px-8 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dr5kn8993/image/upload/v1750328771/AIG_Event_Software/home_images/Home.jpg')" }}>
      <div className="max-w-2xl z-10">
        <h1 className="text-5xl font-bold mb-4">AIG Hospitals</h1>
        <p className="text-lg mb-2">Lorem ipsum dolor sit amet consectetur. Accumsan sed volutpat placerat dignissim nisi lacus at in.</p>

        <form onSubmit={handleSearch} className="mt-6 flex items-center bg-white rounded-full px-4 py-3 shadow-md w-full max-w-xl">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Conferences, Workshops, CMEs..."
            className="flex-1 outline-none text-gray-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {error && <p className="text-red-300 mt-2">{error}</p>}
        {loading && <p className="text-blue-300 mt-2">Searching...</p>}
      </div>

      <div className="absolute inset-0 bg-black/60"></div>
    </section>

    <section>
      <div className="p-6 m-[50px]">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Browse By Department</h1>
              <div className="flex gap-4">
                <select
                  className="border px-3 py-2 rounded"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="">Select Department</option>
                  {departments.map((dep) => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
                <select
                  className="border px-3 py-2 rounded"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
      
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <div key={event.id} className="bg-white shadow-md rounded overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold leading-snug truncate">{event.title}</h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-600" /> {event.date}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-blue-600" /> {event.location}
                    </p>
              <Link href={`/register/${event.id}`}>
                <button className="bg-sky-800 text-white text-sm w-full py-2 rounded-md hover:bg-sky-900">
                Register
              </button>
            </Link>
                  </div>
                </div>
              ))}
            </div>
      
            <div className="mt-8 text-center">
              <button
                onClick={() => router.push('/comming-soon')}
                className="text-blue-600 font-semibold hover:underline"
              >
                View All
              </button>
            </div>
          </div>
    </section>

    <section>
<div className="p-6 m-[50px] bg-slate-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Conferences</h2>
        <button
          onClick={() => router.push('/comming-soon')}
          className="border px-4 py-1 rounded-md hover:bg-blue-100"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
            <Image src={event.image} alt={event.title} width={400} height={500} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" /> {event.date}
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> {event.location}
              </p>
              <button className="bg-sky-800 text-white text-sm w-full py-2 rounded-md hover:bg-sky-900">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>

<section>
  <div className="p-6 m-[50px] bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Workshops</h2>
        <button
          onClick={() => router.push('/comming-soon')}
          className="border px-4 py-1 rounded-md hover:bg-blue-100"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
            <Image src={event.image} alt={event.title} width={400} height={500} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" /> {event.date}
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> {event.location}
              </p>
              <button className="bg-sky-800 text-white text-sm w-full py-2 rounded-md hover:bg-blue-900">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>

<section>
  <div className="p-6 m-[50px] bg-slate-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming CMEs</h2>
        <button
          onClick={() => router.push('/comming-soon')}
          className="border px-4 py-1 rounded-md hover:bg-blue-100"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
            <Image src={event.image} alt={event.title} width={400} height={500} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" /> {event.date}
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> {event.location}
              </p>
              <button className="bg-sky-800 text-white text-sm w-full py-2 rounded-md hover:bg-blue-900">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>
    </>
  )
}
