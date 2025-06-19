'use client'

import { useEffect, useState } from 'react'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import organizersData from '../data/organizer' // Assuming you have a JSON file with organizer data


export default function OrganizerTable() {
  const [organizers, setOrganizers] = useState([])
  const [search, setSearch] = useState('')
  const [editModal, setEditModal] = useState(null)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 2

  useEffect(() => {
    setOrganizers(organizersData)
  }, [])

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    setSortConfig({ key, direction })
  }

  const sortedOrganizers = [...organizers].sort((a, b) => {
    if (!sortConfig.key) return 0
    const aVal = a[sortConfig.key].toLowerCase()
    const bVal = b[sortConfig.key].toLowerCase()
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  const filtered = sortedOrganizers.filter((org) =>
    org.name.toLowerCase().includes(search.toLowerCase())
  )

  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const totalPages = Math.ceil(filtered.length / pageSize)

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(organizers)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Organizers')
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' })
    saveAs(file, 'organizers.xlsx')
  }

  const handleEditSave = (updatedOrg) => {
    setOrganizers((prev) =>
      prev.map((org) => (org.id === updatedOrg.id ? updatedOrg : org))
    )
    setEditModal(null)
  }

  return (
    <div className="p-6 rounded-md border bg-white shadow">
      <div className="flex items-center mb-4 gap-2">
        <button className="border px-3 py-1 rounded text-gray-600 hover:bg-gray-100">
          ☰
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-2 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleExport}
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded"
        >
          Export to Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('name')}>
                Organizer Name
              </th>
              <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('contactPerson')}>
                Contact Person
              </th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2 text-left">Email ID</th>
              <th className="px-4 py-2 text-center">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated.map((org, idx) => (
              <tr key={org.id} className="hover:bg-gray-50">
                <td className="text-center px-4 py-2">
                  {(currentPage - 1) * pageSize + idx + 1}
                </td>
                <td className="px-4 py-2">{org.name}</td>
                <td className="px-4 py-2">{org.contactPerson}</td>
                <td className="text-center px-4 py-2">{org.mobile}</td>
                <td className="px-4 py-2">{org.email}</td>
                <td className="text-blue-600 font-medium text-center px-4 py-2 cursor-pointer hover:underline" onClick={() => setEditModal(org)}>
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>
            {filtered.length === 0
              ? '0'
              : `${(currentPage - 1) * pageSize + 1}–${Math.min(
                  currentPage * pageSize,
                  filtered.length
                )} of ${filtered.length}`}
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="px-2 py-1 border rounded disabled:opacity-50"
            >
              ‹
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              className="px-2 py-1 border rounded disabled:opacity-50"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {editModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-96 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Edit Organizer</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const updatedOrg = {
                  ...editModal,
                  name: e.target.name.value,
                  contactPerson: e.target.contactPerson.value,
                  mobile: e.target.mobile.value,
                  email: e.target.email.value,
                }
                handleEditSave(updatedOrg)
              }}
              className="space-y-3"
            >
              <input
                name="name"
                defaultValue={editModal.name}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="contactPerson"
                defaultValue={editModal.contactPerson}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="mobile"
                defaultValue={editModal.mobile}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="email"
                type="email"
                defaultValue={editModal.email}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditModal(null)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
