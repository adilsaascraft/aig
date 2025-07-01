'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import roomCategoryData from '../data/roomCategory'

export default function AddDepartmentForm({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    hotelName: '',
    roomCategory: '',
    roomType: '',
    status: '',
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

        <h2 className="text-xl font-semibold mb-4">Add Room</h2>
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
            <label className="block font-medium">Room Category *</label>
            <input
              type="text"
              name="roomCategory"
              required
              value={formData.roomCategory}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Room Type *</label>
            <input
              type="email"
              name="roomType"
              required
              value={formData.roomType}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Status *</label>
            <input
              type="dropdown"
              name="status"
              required
              value={formData.status}
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