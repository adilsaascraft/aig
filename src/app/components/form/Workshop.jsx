'use client'
import { useState } from 'react'

export default function Workshop({ formData, setFormData, nextStep, prevStep, onEdit }) {
  const preOptions = [
    { label: 'Lorem ipsum dolor sit amet consectetur.', amount: 8555 },
    { label: 'Workshop Not Required', amount: 0 }
  ]
  const postOptions = [
    { label: 'Lorem ipsum dolor sit amet consectetur.', amount: 8555 },
    { label: 'Workshop Not Required', amount: 0 }
  ]

  const handleChange = (type, value, amount) => {
    setFormData((prev) => ({
      ...prev,
      [`${type}Workshop`]: value,
      [`${type}WorkshopAmount`]: amount
    }))
  }

  const subTotal = 18555
  const tax = 2000
  const total = subTotal + tax

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 w-fit">Workshop</h2>
        {onEdit && (
        <button
          onClick={onEdit}
          className="absolute top-0 right-0 text-sm text-blue-600 underline"
        >
          Edit
        </button>
      )}
      </div>

      {/* Pre-Conference */}
      <div>
        <h3 className="font-semibold mb-2">Pre - Conference Workshop (31 May 2025)</h3>
        {preOptions.map((opt, idx) => (
          <div key={idx} className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="preWorkshop"
                checked={formData.preWorkshop === opt.label}
                onChange={() => handleChange('pre', opt.label, opt.amount)}
              />
              {opt.label}
            </label>
            <div className="text-right w-32">
              <p className="text-sm">₹ {opt.amount.toLocaleString()}</p>
              <p className="text-sm text-gray-500">₹ {opt.amount === 0 ? '0.00' : '0.00'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Post-Conference */}
      <div>
        <h3 className="font-semibold mb-2">Post - Conference Workshop (3 June 2025)</h3>
        {postOptions.map((opt, idx) => (
          <div key={idx} className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="postWorkshop"
                checked={formData.postWorkshop === opt.label}
                onChange={() => handleChange('post', opt.label, opt.amount)}
              />
              {opt.label}
            </label>
            <div className="text-right w-32">
              <p className="text-sm">₹ {opt.amount.toLocaleString()}</p>
              <p className="text-sm text-gray-500">₹ {opt.amount === 0 ? '0.00' : '0.00'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-bold border-b-2 border-blue-600 w-fit mb-4">Order Summary</h3>
        <div className="flex justify-between text-sm mb-1">
          <p>Gut, Liver & Lifelines<br />+ {formData.accompanying.length} Accompanying Person</p>
          <p>Sub Total ₹ {subTotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <p>Tax</p>
          <p>₹ {tax.toLocaleString()}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <p>Total</p>
          <p>₹ {total.toLocaleString()}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
        >
          Back
        </button>
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































// 'use client'

// export default function Workshop({
//   formData,
//   setFormData,
//   nextStep,
//   prevStep,
//   onEdit
// }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }

//   return (
//     <div className="bg-white p-4 rounded-md shadow-sm relative">
//       {/* Edit Button */}
//       {onEdit && (
//         <button
//           onClick={onEdit}
//           className="absolute top-0 right-0 text-sm text-blue-600 underline"
//         >
//           Edit
//         </button>
//       )}

//       {/* Pre-Conference Workshop */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold mb-2">Pre-Conference Workshop</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {['W1', 'W2', 'W3', 'Not Required'].map((option) => (
//             <label key={option} className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="preWorkshop"
//                 value={option}
//                 checked={formData.preWorkshop === option}
//                 onChange={handleChange}
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Post-Conference Workshop */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold mb-2">Post-Conference Workshop</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {['W1', 'W2', 'W3', 'Not Required'].map((option) => (
//             <label key={option} className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="postWorkshop"
//                 value={option}
//                 checked={formData.postWorkshop === option}
//                 onChange={handleChange}
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-8">
//         <button
//           onClick={prevStep}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded"
//         >
//           Back
//         </button>
//         <button
//           onClick={nextStep}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//         >
//           Save & Continue
//         </button>
//       </div>
//     </div>
//   )
// }
