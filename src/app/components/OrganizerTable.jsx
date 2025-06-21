'use client'

import { useState } from 'react'
import { FaFilter, FaSort } from 'react-icons/fa'
import * as XLSX from 'xlsx'


export default function OrganizerTable() {
  const [data, setData] = useState(dummyData)
  const [search, setSearch] = useState('')
  const [editItem, setEditItem] = useState(null)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortAsc, setSortAsc] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Organizers')
    XLSX.writeFile(workbook, 'organizers.xlsx')
  }

  const filteredData = data
    .filter(item =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortAsc ? a.id - b.id : b.id - a.id))

  const totalPages = Math.ceil(filteredData.length / rowsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked)
    if (e.target.checked) {
      setSelectedRows(paginatedData.map(item => item.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(item => item !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  return (
    <>
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button className="p-2 border rounded">
            <FaFilter />
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
        <button
          onClick={handleExport}
          className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800"
        >
          Export to Excel
        </button>
      </div>

      <div className="overflow-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-green-700 text black">
            <tr>
              <th className="px-2 py-2 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-2 py-2 cursor-pointer" onClick={() => setSortAsc(!sortAsc)}>
                # <FaSort className="inline ml-1" />
              </th>
              <th className="px-2 py-2 text-left">ORGANIZER NAME</th>
              <th className="px-2 py-2 text-left">CONTACT PERSON</th>
              <th className="px-2 py-2 text-left">MOBILE NO</th>
              <th className="px-2 py-2 text-left">EMAIL ID</th>
              <th className="px-2 py-2 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              >
                <td className="px-2 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />
                </td>
                <td className="px-2 py-2">{item.id}</td>
                <td className="px-2 py-2 whitespace-pre-wrap">{item.organizer}</td>
                <td className="px-2 py-2">{item.contact}</td>
                <td className="px-2 py-2">{item.mobile}</td>
                <td className="px-2 py-2">{item.email}</td>
                <td className="px-2 py-2">
                  <button
                    onClick={() => setEditItem(item)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and rows-per-page */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-sm text-gray-600">{`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, filteredData.length)} of ${filteredData.length}`}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">Rows per page:</p>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value))
              setCurrentPage(1)
            }}
          >
            {[5, 10, 20, 50].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <button
            className="px-2"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >◀</button>
          <span className="text-sm text-gray-600">{currentPage}/{totalPages}</span>
          <button
            className="px-2"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >▶</button>
        </div>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Edit Organizer</h2>
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.organizer}
              onChange={(e) =>
                setEditItem({ ...editItem, organizer: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.contact}
              onChange={(e) =>
                setEditItem({ ...editItem, contact: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.mobile}
              onChange={(e) =>
                setEditItem({ ...editItem, mobile: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.email}
              onChange={(e) =>
                setEditItem({ ...editItem, email: e.target.value })
              }
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-1 bg-gray-300 rounded"
                onClick={() => setEditItem(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 bg-blue-700 text-white rounded"
                onClick={() => {
                  setData(data.map(d => d.id === editItem.id ? editItem : d))
                  setEditItem(null)
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}
