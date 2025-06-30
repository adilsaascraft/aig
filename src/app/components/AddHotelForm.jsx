'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function AddHotelForm({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    hotelName: '',
    address: '',
    uploadImage:'',
    city: '',
    state: '',
    category: '',
    website: '',
    googleMapLink: '',
    distanceFromAirport: '',
    distanceFromRailwayStation: '',
    nearestMetroStation: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSave({ ...formData, id: Date.now(), status: 'Live' })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-lg overflow-y-auto max-h-screen relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <AiOutlineClose size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Add Hotel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Hotel Name *</label>
            <input
              type="text"
              name="hotelName"
              required
              value={formData.hotelName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Address *</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Upload Image *</label>
             <input
              type="file"
              name="uploadImage"
              value={formData.uploadImage}
              onChange={handleChange}
              className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">City *</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">State *</label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>7 Stars</option>
                <option>5 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Website *</label>
              <input
                type="text"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">Google Map Link *</label>
            <input
              type="text"
              name="googleMapLink"
              required
              value={formData.googleMapLink}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Distance From Airport *</label>
            <input
              type="text"
              name="distanceFromAirport"
              required
              value={formData.distanceFromAirport}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Distance From Railway Station *</label>
            <input
              type="text"
              name="distanceFromRailwayStation"
              required
              value={formData.distanceFromRailwayStation}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Nearest Metro Station *</label>
            <input
              type="text"
              name="nearestMetroStation"
              required
              value={formData.nearestMetroStation}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              className="bg-sky-800 text-white px-6 py-2 rounded-md hover:bg-sky-900"
            >
              Save
            </button>
            <button
              type="button"
              className="border border-gray-400 px-6 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}