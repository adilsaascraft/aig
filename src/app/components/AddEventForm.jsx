'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AddEventForm({ onClose, onSave }) {
  const [formData, setFormData] = useState({
  fullName: '',
  shortName: '',
  eventCode: '',
  regNumber: '',
  uploadImage: '',
  organizer: '',
  department: '',
  startDate: '',
  endDate: '',
  timeZone: '',
  venue: '',
  city: '',
  state: '',
  country: '',
  eventType: 'In-Person',
  registrationType: 'Paid',
  currency: 'Indian Rupee',
  isAirplaneMode: false,
});


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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-lg overflow-y-auto max-h-screen relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <AiOutlineClose size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Add Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Event Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder='Enter event name'
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Event Short Name *</label>
            <input
              type="text"
              name="shortName"
              required
              value={formData.shortName}
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
              <label className="block font-medium">Event Code *</label>
              <input
                type="text"
                name="eventCode"
                required
                value={formData.eventCode}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
            
                  <div>
                    <label className="block font-medium">Registration Number Start from *</label>
        <div className="flex items-center border border-gray-300 rounded-md">
          <span className="px-1 text-gray-700">AIGIMA</span>
          <input
            type="text"
            name="regNumber"
            required
            value={formData.regNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 outline-none"
            placeholder="Enter registration number"
          />
        </div>

            </div>
            <div>
              <label className="block font-medium">Organizer</label>
              <select
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select organizer</option>
                <option value="Org A">Org A</option>
                <option value="Org B">Org B</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Department *</label>
              <select
                name="department"
                required
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Start Date *</label>
              <input
                type="date"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">End Date *</label>
              <input
                type="date"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block font-medium">Time Zone *</label>
              <select
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select time zone</option>
                <option value="IST">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
              </select>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block font-medium">Venue Name *</label>
              <select
                name="venue"
                required
                value={formData.venue}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select venue</option>
                <option value="HICC">HICC</option>
                <option value="Taj Krishna">Taj Krishna</option>
              </select>
            </div>

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
              <label className="block font-medium">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Event Type *</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>In-Person</option>
                <option>Virtual</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Registration Type *</label>
              <select
                name="registrationType"
                value={formData.registrationType}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>Paid</option>
                <option>Free</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Currency *</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>Indian Rupee</option>
                <option>USD</option>
              </select>
            </div>
          </div>

                    <div className="flex items-center justify-between pt-4">
            {/* Left side: Label and Switch */}
            <div className="flex items-center space-x-2">
              <Label htmlFor="airplane-mode">Event App</Label>
              <Switch
                id="airplane-mode"
                checked={formData.isAirplaneMode}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isAirplaneMode: checked }))
                }
              />
            </div>

            {/* Right side: Save and Cancel buttons */}
            <div className="flex gap-4">
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
          </div>

        </form>
      </div>
    </div>
    
  )
}