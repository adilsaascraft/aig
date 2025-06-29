'use client'

export default function BasicDetails({
  formData,
  setFormData,
  nextStep,
  errors = {},
  onEdit
}) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="relative">
      {/* Edit Button */}
      {onEdit && (
        <button
          onClick={onEdit}
          className="absolute top-0 right-0 text-sm text-blue-600 underline"
        >
          Edit
        </button>
      )}

      {/* Form Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Prefix', name: 'prefix' },
          { label: 'Full Name', name: 'fullName' },
          { label: 'Mobile No.', name: 'mobile' },
          { label: 'Email', name: 'email' },
          { label: 'Affiliation', name: 'affiliation' },
          { label: 'Designation', name: 'designation' },
          { label: 'Medical Council Registration', name: 'regNo' },
          { label: 'Medical Council State', name: 'regState' },
          { label: 'Primary Address', name: 'address' },
          { label: 'Country', name: 'country' },
          { label: 'State', name: 'state' },
          { label: 'City', name: 'city' },
          { label: 'Pincode', name: 'pincode' },
          { label: 'Meal Preference', name: 'meal' },
          { label: 'Gender', name: 'gender' },
          { label: 'Registration Category', name: 'category' }
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            {errors?.[name] && (
              <p className="text-red-500 text-sm">{errors[name]}</p>
            )}
          </div>
        ))}
      </div>

      {/* NEXT BUTTON */}
      <div className="mt-6 text-center">
        <button
          onClick={nextStep}
          className="bg-sky-800 hover:bg-sky-900 border-1 border-[#0F2E4F] text-white px-6 py-2 rounded-lg"
        >
          Save & Continue
        </button>
      </div>
    </div>
  )
}



// Add below just below in form and edit this code according to need 


// 'use client'

// import { useState } from 'react'

// const categories = [
//   { label: 'Member', amount: 15170, total: 0 },
//   { label: 'Trade Delegates', amount: 14000, total: 14000 },
//   { label: 'Technologists/ Students', amount: 20000, total: 20000 },
//   { label: 'Non-Member', amount: 28563, total: 28563 },
// ]

// export default function RegistrationCategory({ formData, setFormData, nextStep }) {
//   const [selected, setSelected] = useState(formData.category || '')

//   const handleSelect = (label, amount, total) => {
//     setSelected(label)
//     setFormData({
//       ...formData,
//       category: label,
//       categoryAmount: amount,
//       categoryTotal: total,
//     })
//   }

//   const handleContinue = () => {
//     if (!selected) {
//       alert('Please select a category.')
//       return
//     }
//     nextStep()
//   }

//   return (
//     <div className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto">
//       <h2 className="text-lg font-semibold mb-4">Select Registration Category</h2>

//       <div className="space-y-4">
//         {categories.map(({ label, amount, total }) => (
//           <div key={label} className="flex items-center justify-between border-b pb-2">
//             <label className="flex items-center gap-2 flex-1">
//               <input
//                 type="radio"
//                 name="category"
//                 checked={selected === label}
//                 onChange={() => handleSelect(label, amount, total)}
//                 className="form-radio text-blue-600"
//               />
//               <span>{label}</span>
//             </label>

//             <div className="w-36 text-right">₹ {amount.toLocaleString()}</div>
//             <div className="w-36 text-right">₹ {total.toLocaleString()}</div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex justify-center">
//         <button
//           onClick={handleContinue}
//           className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded"
//         >
//           Save & Continue
//         </button>
//       </div>
//     </div>
//   )
// }

