'use client'

import { useState } from 'react'
import { FaFilter, FaSort } from 'react-icons/fa'
import * as XLSX from 'xlsx'
import roomCategoryData from '@/app/data/roomCategory'

export default function RoomCategoryCard({ activeTab }) {
  const [data, setData] = useState(roomCategoryData)
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Room Categories')
    XLSX.writeFile(workbook, 'room_categories.xlsx')
  }

  const filteredData = data
    .filter(item =>
      (activeTab === 'All' || item.status === activeTab) &&
      item.title?.toLowerCase().includes(search.toLowerCase())
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
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 ml-6">
        <div className="flex items-center gap-2">
          <button className="p-2 border-1 border-gray-100 rounded-lg bg-white">
            <FaFilter />
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1 bg-white"
          />
        </div>
        <button
          onClick={handleExport}
          className="bg-sky-800 text-white px-4 py-1 rounded hover:bg-sky-900"
        >
          Export to Excel
        </button>
      </div>

      <div className="overflow-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="px-2 py-2 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-0 py-0 cursor-pointer" onClick={() => setSortAsc(!sortAsc)}>
                # <FaSort className="inline" />
              </th>
              <th className="px-2 py-2 text-left cursor-pointer" onClick={() => setSortAsc(!sortAsc)}>
                HOTEL NAME <FaSort className="inline ml-2" />
              </th>
              <th className="px-2 py-2 text-left">ROOM CATEGORY</th>
              <th className="px-2 py-2 text-left">ROOM TYPE</th>
              <th className="px-2 py-2 text-left">STATUS</th>
              <th className="px-2 py-2 text-left">Action</th>
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
                <td className="px-2 py-2 whitespace-pre-wrap">{item.title}</td>
                <td className="px-2 py-2">{item.roomCategory}</td>
                <td className="px-2 py-2">{item.roomOccupancy}</td>
                <td className="px-2 py-2">{item.status}</td>
                <td className="px-2 py-2">
                  <button
                    onClick={() => setEditItem(item)}
                    className="text-sky-800 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
          >
            <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750588710/AIG_Event_Software/icons/Button_pgb6by.png" alt="prev-button" />
          </button>
          <span className="text-sm text-gray-600">{currentPage}/{totalPages}</span>
          <button
            className="px-2"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750588709/AIG_Event_Software/icons/Button_1_zpiuxy.png" alt="next-button" />
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Edit Room Category</h2>
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.title}
              onChange={(e) =>
                setEditItem({ ...editItem, title: e.target.value })
              }
              placeholder="Hotel Name"
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.roomCategory}
              onChange={(e) =>
                setEditItem({ ...editItem, roomCategory: e.target.value })
              }
              placeholder="Room Category"
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              value={editItem.roomOccupancy}
              onChange={(e) =>
                setEditItem({ ...editItem, roomOccupancy: e.target.value })
              }
              placeholder="Room Type"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-1 bg-gray-300 rounded"
                onClick={() => setEditItem(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 bg-sky-800 text-white rounded"
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






























// 'use client'

// import { useState } from 'react'
// import { FaFilter, FaSort } from 'react-icons/fa'
// import * as XLSX from 'xlsx'
// import roomCategoryData from '@/app/data/roomCategory'


// export default function RoomCategoryCard({ activeTab }) {

//   const [data, setData] = useState(roomCategoryData)
//   const [search, setSearch] = useState('')
//   const [editItem, setEditItem] = useState(null)
//   const [rowsPerPage, setRowsPerPage] = useState(10)
//   const [sortAsc, setSortAsc] = useState(true)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [selectedRows, setSelectedRows] = useState([])
//   const [selectAll, setSelectAll] = useState(false)

//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(data)
//     const workbook = XLSX.utils.book_new()
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Organizers')
//     XLSX.writeFile(workbook, 'organizers.xlsx')
//   }

//   const filteredData = data
//   .filter(item =>
//     (activeTab === 'All' || item.status === activeTab) &&
//     item.title?.toLowerCase().includes(search.toLowerCase())
//   )
//   .sort((a, b) => (sortAsc ? a.id - b.id : b.id - a.id))


//   const totalPages = Math.ceil(filteredData.length / rowsPerPage)
//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   )

//   const handleSelectAll = (e) => {
//     setSelectAll(e.target.checked)
//     if (e.target.checked) {
//       setSelectedRows(paginatedData.map(item => item.id))
//     } else {
//       setSelectedRows([])
//     }
//   }

//   const handleRowSelect = (id) => {
//     if (selectedRows.includes(id)) {
//       setSelectedRows(selectedRows.filter(item => item !== id))
//     } else {
//       setSelectedRows([...selectedRows, id])
//     }
//   }

//   return (
//     <>
//     <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-4 ml-6">
//         <div className="flex items-center gap-2">
//           <button className="p-2 border-1 border-gray-100 rounded-lg bg-white">
//             <FaFilter />
//           </button>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             width={365}
//             height={36}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-200 rounded-lg  px-3 py-1 bg-white"
//           />
//         </div>
//         <button
//           onClick={handleExport}
//           className="bg-sky-800 text-white px-4 py-1 rounded hover:bg-sky-900"
//         >
//           Export to Excel
//         </button>
//       </div>

//       <div className="overflow-auto border border-gray-200 rounded-lg">
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-100 text black">
//             <tr>
//               <th className="px-2 py-2 text-left">
//                 <input
//                   type="checkbox"
//                   checked={selectAll}
//                   onChange={handleSelectAll}
//                 />
//               </th>
//               <th className="px-0 py-0 cursor-pointer " onClick={() => setSortAsc(!sortAsc)}>
//                 # <FaSort className="inline" />
//               </th>
//               <th className="px-2 py-2 text-left"  onClick={() => setSortAsc(!sortAsc)}>HOTEL NAME <FaSort className="inline ml-2" /></th>
//               <th className="px-2 py-2 text-left">CATEGORY</th>
//               <th className="px-2 py-2 text-left">ROOM TYPE</th>
//               <th className="px-2 py-2 text-left">STATUS</th>
//               <th className="px-2 py-2 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((item, index) => (
//               <tr
//                 key={item.id}
//                 className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
//               >
//                 <td className="px-2 py-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedRows.includes(item.id)}
//                     onChange={() => handleRowSelect(item.id)}
//                   />
//                 </td>
//                 <td className="px-2 py-2">{item.id}</td>
//                 <td className="px-2 py-2 whitespace-pre-wrap">{item.title}</td>
//                 <td className="px-2 py-2">{item.roomCategory}</td>
//                 <td className="px-2 py-2">{item.roomOccupancy}</td>
//                 <td className="px-2 py-2">{item.status}</td>
//                 <td className="px-2 py-2">
//                   <button
//                     onClick={() => setEditItem(item)}
//                     className="text-sky-800 hover:underline font-semibold"
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination and rows-per-page */}
//       <div className="flex justify-between items-center mt-3">
//         <p className="text-sm text-gray-600">{`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, filteredData.length)} of ${filteredData.length}`}</p>
//         <div className="flex items-center gap-2">
//           <p className="text-sm text-gray-600">Rows per page:</p>
//           <select
//             className="border rounded px-2 py-1 text-sm"
//             value={rowsPerPage}
//             onChange={(e) => {
//               setRowsPerPage(Number(e.target.value))
//               setCurrentPage(1)
//             }}
//           >
//             {[5, 10, 20, 50].map(n => (
//               <option key={n} value={n}>{n}</option>
//             ))}
//           </select>
//           <button
//             className="px-2"
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750588710/AIG_Event_Software/icons/Button_pgb6by.png" alt="prev-button" />
//           </button>
//           <span className="text-sm text-gray-600">{currentPage}/{totalPages}</span>
//           <button
//             className="px-2"
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//           >
//             <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750588709/AIG_Event_Software/icons/Button_1_zpiuxy.png" alt="next-button" />
//           </button>
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {editItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-md w-96">
//             <h2 className="text-lg font-bold mb-4">Edit Department</h2>
//             <input
//               className="w-full mb-2 p-2 border rounded"
//               value={editItem.name}
//               onChange={(e) =>
//                 setEditItem({ ...editItem, name: e.target.value })
//               }
//             />
//             <input
//               className="w-full mb-2 p-2 border rounded"
//               value={editItem.contact}
//               onChange={(e) =>
//                 setEditItem({ ...editItem, contact: e.target.value })
//               }
//             />
//             <input
//               className="w-full mb-2 p-2 border rounded"
//               value={editItem.phone}
//               onChange={(e) =>
//                 setEditItem({ ...editItem, phone: e.target.value })
//               }
//             />
//             <input
//               className="w-full mb-2 p-2 border rounded"
//               value={editItem.email}
//               onChange={(e) =>
//                 setEditItem({ ...editItem, email: e.target.value })
//               }
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 className="px-4 py-1 bg-gray-300 rounded"
//                 onClick={() => setEditItem(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-1 bg-sky-800 text-white rounded"
//                 onClick={() => {
//                   setData(data.map(d => d.id === editItem.id ? editItem : d))
//                   setEditItem(null)
//                 }}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   )
// }