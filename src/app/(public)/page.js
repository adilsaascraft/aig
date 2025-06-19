'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function HomeHero() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState([])

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
  )
}
