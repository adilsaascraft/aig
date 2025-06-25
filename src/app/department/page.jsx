// app/department/page.jsx
'use client'
import '../globals.css';
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const departments = ['Orthopedics', 'Nephrology', 'Cardiology', 'Gynaecology']
const sortOptions = ['Date', 'Title']


export default function DepartmentPage() {
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

  return (
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
              <button className="mt-2 w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-900">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => router.push('/department/all')}
          className="text-blue-600 font-semibold hover:underline"
        >
          View All
        </button>
      </div>
    </div>
  )
}