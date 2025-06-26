'use client'

import { useState } from 'react'

export default function RegistrationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    prefix: '',
    fullName: '',
    mobile: '',
    email: '',
    affiliation: '',
    designation: '',
    regNo: '',
    regState: '',
    address: '',
    country: 'India',
    state: '',
    city: '',
    pincode: '',
    meal: '',
    gender: '',
    category: '',
    accompanying: [],
    preWorkshop: '',
    postWorkshop: ''
  })

  const [errors, setErrors] = useState({})

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.prefix) newErrors.prefix = 'Required'
    if (!formData.fullName) newErrors.fullName = 'Required'
    if (!formData.mobile) newErrors.mobile = 'Required'
    if (!formData.email) newErrors.email = 'Required'
    if (!formData.category) newErrors.category = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return
    setStep(step + 1)
  }

  const handleBack = () => setStep(step - 1)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAccompanyingChange = (index, name, value) => {
    const newAccompanying = [...formData.accompanying]
    newAccompanying[index][name] = value
    setFormData({ ...formData, accompanying: newAccompanying })
  }

  const addAccompanying = () => {
    setFormData({
      ...formData,
      accompanying: [
        ...formData.accompanying,
        { name: '', relation: '', age: '', gender: '', meal: '' }
      ]
    })
  }

  const deleteAccompanying = (index) => {
    const newAccompanying = formData.accompanying.filter((_, i) => i !== index)
    setFormData({ ...formData, accompanying: newAccompanying })
  }

  const handleSubmit = () => {
    alert('Submitted!')
    console.log(formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-md shadow">
      {/* Stepper */}
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4].map((s, idx) => (
          <div key={s} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full text-white flex items-center justify-center mb-1 ${
                step === s ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            >
              {s}
            </div>
            <p className="text-sm text-center">
              {['Basic Details', 'Accompanying', 'Workshop', 'Confirm & Pay'][idx]}
            </p>
          </div>
        ))}
      </div>

      {/* Step 1: Basic Details */}
      {step === 1 && (
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
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded"
              />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Accompanying */}
      {step === 2 && (
        <div>
          {formData.accompanying.map((person, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4 border-b pb-4 relative">
              {[
                { label: 'Name', name: 'name' },
                { label: 'Relation', name: 'relation' },
                { label: 'Age', name: 'age' },
                { label: 'Gender', name: 'gender' },
                { label: 'Meal Preference', name: 'meal' }
              ].map(({ label, name }) => (
                <div key={name}>
                  <label className="block text-sm font-medium">{label}</label>
                  <input
                    value={person[name]}
                    onChange={(e) => handleAccompanyingChange(index, name, e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
              ))}
              <button
                onClick={() => deleteAccompanying(index)}
                className="absolute top-0 right-0 text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={addAccompanying}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            + Add More
          </button>
        </div>
      )}

      {/* Step 3: Workshop Selection */}
      {step === 3 && (
        <div>
          <h2 className="font-bold mb-2">Pre-Conference Workshop</h2>
          {['W1', 'W2', 'W3', 'Not Required'].map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                name="preWorkshop"
                value={option}
                checked={formData.preWorkshop === option}
                onChange={handleInputChange}
              />{' '}
              {option}
            </label>
          ))}
          <h2 className="font-bold mt-4 mb-2">Post-Conference Workshop</h2>
          {['W1', 'W2', 'W3', 'Not Required'].map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                name="postWorkshop"
                value={option}
                checked={formData.postWorkshop === option}
                onChange={handleInputChange}
              />{' '}
              {option}
            </label>
          ))}
        </div>
      )}

      {/* Step 4: Confirm & Pay */}
      {step === 4 && (
        <div className="text-sm space-y-4">
          <div>
            <h3 className="font-bold">Basic Details</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
          <div>
            <h3 className="font-bold">Accompanying Persons</h3>
            <pre>{JSON.stringify(formData.accompanying, null, 2)}</pre>
          </div>
          <div>
            <h3 className="font-bold">Workshops</h3>
            <p>Pre: {formData.preWorkshop}</p>
            <p>Post: {formData.postWorkshop}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-4 py-2 rounded ml-auto"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}









































// 'use client'
// import { useState } from 'react'

// export default function RegistrationForm() {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState({
//     prefix: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     affiliation: '',
//     designation: '',
//     regNo: '',
//     regState: '',
//     address: '',
//     country: 'India',
//     state: '',
//     city: '',
//     pincode: '',
//     meal: '',
//     gender: '',
//     category: '',
//     accompanyingPersons: [],
//     preWorkshop: '',
//     postWorkshop: '',
//   })

//   const [accompanyingInputs, setAccompanyingInputs] = useState([])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const validateStep1 = () => {
//     const requiredFields = ['prefix', 'fullName', 'mobile', 'email', 'category']
//     return requiredFields.every((field) => formData[field].trim() !== '')
//   }

//   const nextStep = () => {
//     if (step === 1 && !validateStep1()) {
//       alert('Please fill all required fields in Step 1.')
//       return
//     }
//     setStep((prev) => prev + 1)
//   }

//   const prevStep = () => setStep((prev) => prev - 1)

//   const handleAddPerson = () => {
//     setAccompanyingInputs((prev) => [
//       ...prev,
//       { name: '', relation: '', age: '', gender: '', meal: '' },
//     ])
//   }

//   const handleRemovePerson = (index) => {
//     const updated = [...accompanyingInputs]
//     updated.splice(index, 1)
//     setAccompanyingInputs(updated)
//     setFormData((prev) => ({
//       ...prev,
//       accompanyingPersons: updated,
//     }))
//   }

//   const handlePersonChange = (index, field, value) => {
//     const updated = [...accompanyingInputs]
//     updated[index][field] = value
//     setAccompanyingInputs(updated)
//     setFormData((prev) => ({ ...prev, accompanyingPersons: updated }))
//   }

//   const handleSubmit = () => {
//     console.log('Submitted form:', formData)
//     alert('Form submitted successfully!')
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-6">
//       {/* Stepper */}
//       <div className="flex justify-between mb-6">
//         {['Fill Basic Details', 'Add Accompanying Person', 'Select Workshop', 'Confirm & Pay'].map((label, i) => (
//           <div key={i} className="flex flex-col items-center">
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
//                 step === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'
//               }`}
//             >
//               {i + 1}
//             </div>
//             <p className={`text-sm mt-1 ${step === i + 1 ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
//               {label}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Step 1 */}
//       {step === 1 && (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input name="prefix" value={formData.prefix} onChange={handleChange} placeholder="Prefix" className="border p-2 rounded" />
//             <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="border p-2 rounded" />
//             <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No." className="border p-2 rounded" />
//             <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
//             <input name="affiliation" value={formData.affiliation} onChange={handleChange} placeholder="Affiliation" className="border p-2 rounded" />
//             <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="border p-2 rounded" />
//             <input name="regNo" value={formData.regNo} onChange={handleChange} placeholder="Medical Council Registration" className="border p-2 rounded" />
//             <input name="regState" value={formData.regState} onChange={handleChange} placeholder="Medical Council State" className="border p-2 rounded" />
//             <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
//             <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border p-2 rounded" />
//             <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border p-2 rounded" />
//             <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 rounded" />
//             <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="border p-2 rounded" />
//             <input name="meal" value={formData.meal} onChange={handleChange} placeholder="Meal Preference" className="border p-2 rounded" />
//             <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="border p-2 rounded" />
//             <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded">
//               <option value="">Select Category</option>
//               <option value="Member">Member</option>
//               <option value="Trade Delegates">Trade Delegates</option>
//               <option value="Technologists">Technologists</option>
//               <option value="Non-Member">Non-Member</option>
//             </select>
//           </div>
//           <div className="flex justify-end mt-4">
//             <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
//           </div>
//         </>
//       )}

//       {/* Step 2 */}
//       {step === 2 && (
//         <>
//           <h2 className="text-lg font-semibold mb-4">Accompanying Person(s)</h2>
//           {accompanyingInputs.map((input, index) => (
//             <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 border p-4 rounded relative">
//               <input placeholder="Name" value={input.name} onChange={(e) => handlePersonChange(index, 'name', e.target.value)} className="border p-2 rounded" />
//               <input placeholder="Relation" value={input.relation} onChange={(e) => handlePersonChange(index, 'relation', e.target.value)} className="border p-2 rounded" />
//               <input placeholder="Age" value={input.age} onChange={(e) => handlePersonChange(index, 'age', e.target.value)} className="border p-2 rounded" />
//               <input placeholder="Gender" value={input.gender} onChange={(e) => handlePersonChange(index, 'gender', e.target.value)} className="border p-2 rounded" />
//               <input placeholder="Meal Preference" value={input.meal} onChange={(e) => handlePersonChange(index, 'meal', e.target.value)} className="border p-2 rounded" />
//               <button onClick={() => handleRemovePerson(index)} className="absolute top-2 right-2 text-red-600 font-bold">X</button>
//             </div>
//           ))}
//           <button onClick={handleAddPerson} className="bg-red-500 text-white px-4 py-2 rounded">+ Add More</button>
//           <div className="flex justify-between mt-6">
//             <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
//             <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
//           </div>
//         </>
//       )}

//       {/* Step 3 */}
//       {step === 3 && (
//         <>
//           <h2 className="text-lg font-semibold mb-4">Select Workshop</h2>
//           <p className="font-semibold">Pre - Conference Workshop (31 May 2025)</p>
//           {['Workshop A', 'Workshop B', 'Workshop C', 'Workshop Not Required'].map((option) => (
//             <label key={option} className="block my-2">
//               <input
//                 type="radio"
//                 name="preWorkshop"
//                 value={option}
//                 checked={formData.preWorkshop === option}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}

//           <p className="font-semibold mt-6">Post - Conference Workshop (3 June 2025)</p>
//           {['Workshop A', 'Workshop B', 'Workshop C', 'Workshop Not Required'].map((option) => (
//             <label key={option} className="block my-2">
//               <input
//                 type="radio"
//                 name="postWorkshop"
//                 value={option}
//                 checked={formData.postWorkshop === option}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}

//           <div className="flex justify-between mt-6">
//             <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
//             <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
//           </div>
//         </>
//       )}

//       {/* Step 4 */}
//       {step === 4 && (
//         <>
//           <h2 className="text-lg font-semibold mb-4">Confirm & Pay</h2>
//           <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify(formData, null, 2)}</pre>
//           <div className="flex justify-between mt-4">
//             <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
//             <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Confirm & Pay</button>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }



































// 'use client'
// import { useState } from 'react'

// export default function MultiStepForm({ event }) {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState({
//     prefix: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     affiliation: '',
//     designation: '',
//     regNo: '',
//     regState: '',
//     address: '',
//     country: 'India',
//     state: '',
//     city: '',
//     pincode: '',
//     meal: '',
//     gender: '',
//     category: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleNext = () => {
//     console.log('Saved Data:', formData)
//     setStep(step + 1)
//   }

//   return (
//     <div className="bg-white border-2 border-gray-700 rounded-lg p-6 shadow-md">
//       <div className="flex justify-between mb-6">
//         {[1, 2, 3, 4].map((s) => (
//           <div key={s} className={`flex-1 text-center ${s <= step ? 'text-sky-800 font-bold' : 'text-gray-400'}`}>
//             <div className="w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center">{s}</div>
//             <p className="text-xs mt-1">
//               {s === 1 && 'Fill Basic Details'}
//               {s === 2 && 'Add Accompanying Person'}
//               {s === 3 && 'Select Workshop'}
//               {s === 4 && 'Confirm & Pay'}
//             </p>
//           </div>
//         ))}
//       </div>

//       {step === 1 && (
//         <form className="grid grid-cols-2 gap-4">
//           <input name="prefix" placeholder="Prefix" value={formData.prefix} onChange={handleChange} className="border p-2 rounded" />
//           <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="border p-2 rounded" />
//           <input name="mobile" placeholder="Mobile No." value={formData.mobile} onChange={handleChange} className="border p-2 rounded" />
//           <input name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
//           <input name="affiliation" placeholder="Affiliation" onChange={handleChange} className="border p-2 rounded" />
//           <input name="designation" placeholder="Designation" onChange={handleChange} className="border p-2 rounded" />
//           <input name="regNo" placeholder="Medical Council Registration" onChange={handleChange} className="border p-2 rounded" />
//           <input name="regState" placeholder="Medical Council State" onChange={handleChange} className="border p-2 rounded" />
//           <input name="address" placeholder="Primary Address" onChange={handleChange} className="border p-2 rounded col-span-2" />
//           <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="border p-2 rounded" />
//           <input name="state" placeholder="State" onChange={handleChange} className="border p-2 rounded" />
//           <input name="city" placeholder="City" onChange={handleChange} className="border p-2 rounded" />
//           <input name="pincode" placeholder="Pincode" onChange={handleChange} className="border p-2 rounded" />
//           <select name="meal" onChange={handleChange} className="border p-2 rounded">
//             <option value="">Meal Preference</option>
//             <option value="Veg">Veg</option>
//             <option value="Non-Veg">Non-Veg</option>
//           </select>
//           <select name="gender" onChange={handleChange} className="border p-2 rounded">
//             <option value="">Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>

//           <fieldset className="col-span-2 mt-4">
//             <legend className="font-semibold mb-2">Select Registration Category</legend>
//             {[
//               { label: 'Member', amount: 15170 },
//               { label: 'Trade Delegates', amount: 14000 },
//               { label: 'Technologists/ Students', amount: 20000 },
//               { label: 'Non-Member', amount: 28563 },
//             ].map(({ label, amount }) => (
//               <label key={label} className="block mb-1">
//                 <input
//                   type="radio"
//                   name="category"
//                   value={label}
//                   checked={formData.category === label}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 {label} – ₹{amount.toLocaleString()}
//               </label>
//             ))}
//           </fieldset>

//           <div className="col-span-2 flex justify-end mt-4">
//             <button type="button" onClick={handleNext} className="bg-sky-800 text-white px-6 py-2 rounded hover:bg-sky-900">
//               Save & Continue
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   )
// }


























// 'use client'

// import { useState, useEffect } from 'react'

// export default function MultiStepRegistrationForm() {
//   const handleRemovePerson = (indexToRemove) => {
//   const updated = formData.accompanying.filter((_, i) => i !== indexToRemove)
//   setFormData({ ...formData, accompanying: updated })
// }

//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState({
//     prefix: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     affiliation: '',
//     designation: '',
//     regNo: '',
//     regState: '',
//     address: '',
//     country: 'India',
//     state: '',
//     city: '',
//     pincode: '',
//     meal: '',
//     gender: '',
//     category: ''
//   })

//   const [companions, setCompanions] = useState([
//     { name: '', relation: '', age: '', gender: '', meal: '' }
//   ])

//   // Load from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem('registration')
//     if (saved) {
//       const parsed = JSON.parse(saved)
//       setFormData(parsed.formData || formData)
//       setCompanions(parsed.companions || companions)
//     }
//   }, [])

//   // Step 1 Validation
//   const validateStep1 = () => {
//     const required = [
//       'prefix', 'fullName', 'mobile', 'email', 'affiliation', 'designation',
//       'regNo', 'regState', 'address', 'country', 'state', 'city', 'pincode',
//       'meal', 'gender', 'category'
//     ]
//     for (let field of required) {
//       if (!formData[field]) return false
//     }
//     return true
//   }

//   const handleNextStep = () => {
//     if (step === 1 && !validateStep1()) {
//       alert('Please fill all fields in Step 1')
//       return
//     }

//     // Save current state to localStorage
//     localStorage.setItem(
//       'registration',
//       JSON.stringify({ formData, companions })
//     )

//     setStep((prev) => prev + 1)
//   }

//   const handleBack = () => {
//     setStep((prev) => prev - 1)
//   }

//   const updateCompanion = (index, field, value) => {
//     const updated = [...companions]
//     updated[index][field] = value
//     setCompanions(updated)
//   }

//   const addCompanion = () => {
//     setCompanions([...companions, { name: '', relation: '', age: '', gender: '', meal: '' }])
//   }

//   const validateStep2 = () => {
//     for (let c of companions) {
//       if (!c.name || !c.relation || !c.age || !c.gender || !c.meal) return false
//     }
//     return true
//   }

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
//       <div className="flex justify-center mb-6">
//         {[1, 2, 3, 4].map((s) => (
//           <div key={s} className="flex items-center">
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
//                 step === s ? 'bg-blue-600' : 'bg-gray-400'
//               }`}
//             >
//               {s}
//             </div>
//             {s < 4 && <div className="w-12 h-1 bg-gray-300 mx-2"></div>}
//           </div>
//         ))}
//       </div>

//       {step === 1 && (
//         <div className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               className="border p-2 rounded"
//               placeholder="Prefix"
//               value={formData.prefix}
//               onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Affiliation"
//               value={formData.affiliation}
//               onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Designation"
//               value={formData.designation}
//               onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Medical Council Registration"
//               value={formData.regNo}
//               onChange={(e) => setFormData({ ...formData, regNo: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Medical Council State"
//               value={formData.regState}
//               onChange={(e) => setFormData({ ...formData, regState: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Primary Address"
//               value={formData.address}
//               onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Country"
//               value={formData.country}
//               onChange={(e) => setFormData({ ...formData, country: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="State"
//               value={formData.state}
//               onChange={(e) => setFormData({ ...formData, state: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="City"
//               value={formData.city}
//               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Pincode"
//               value={formData.pincode}
//               onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Meal Preference"
//               value={formData.meal}
//               onChange={(e) => setFormData({ ...formData, meal: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded"
//               placeholder="Gender"
//               value={formData.gender}
//               onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//             />
//             <input
//               className="border p-2 rounded col-span-2"
//               placeholder="Registration Category"
//               value={formData.category}
//               onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//             />
//           </div>

//           <button
//             onClick={handleNextStep}
//             className="bg-blue-600 text-white px-6 py-2 rounded shadow mt-4"
//           >
//             Save & Continue
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="space-y-4">
//           {companions.map((c, index) => (
//             <div key={index} className="grid grid-cols-2 gap-4">
//               <input
//                 className="border p-2 rounded"
//                 placeholder="Name"
//                 value={c.name}
//                 onChange={(e) => updateCompanion(index, 'name', e.target.value)}
//               />
//               <input
//                 className="border p-2 rounded"
//                 placeholder="Relation"
//                 value={c.relation}
//                 onChange={(e) => updateCompanion(index, 'relation', e.target.value)}
//               />
//               <input
//                 className="border p-2 rounded"
//                 placeholder="Age"
//                 value={c.age}
//                 onChange={(e) => updateCompanion(index, 'age', e.target.value)}
//               />
//               <input
//                 className="border p-2 rounded"
//                 placeholder="Gender"
//                 value={c.gender}
//                 onChange={(e) => updateCompanion(index, 'gender', e.target.value)}
//               />
//               <input
//                 className="border p-2 rounded col-span-2"
//                 placeholder="Meal Preference"
//                 value={c.meal}
//                 onChange={(e) => updateCompanion(index, 'meal', e.target.value)}
//               />
//             </div>
//           ))}

//           <button
//             onClick={addCompanion}
//             className="bg-red-600 text-white px-4 py-1 rounded shadow"
//           >
//             + Add More
//           </button>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={handleBack}
//               className="bg-gray-500 text-white px-6 py-2 rounded"
//             >
//               Back
//             </button>
//             <button
//               onClick={() => {
//                 if (!validateStep2()) return alert('Fill all companion fields')
//                 setStep(3)
//               }}
//               className="bg-blue-600 text-white px-6 py-2 rounded"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }





















// 'use client'

// import { useState } from 'react'

// export default function MultiStepForm() {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState({
//     prefix: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     affiliation: '',
//     designation: '',
//     regNo: '',
//     regState: '',
//     address: '',
//     country: 'India',
//     state: '',
//     city: '',
//     pincode: '',
//     meal: '',
//     gender: '',
//     category: '',
//     accompanying: [],
//   })

//   const handleNext = () => {
//     if (step === 1 && !isStep1Valid()) {
//       alert('Please fill all required fields in Step 1')
//       return
//     }
//     setStep(step + 1)
//   }

//   const handleInputChange = (key, value) => {
//     setFormData({ ...formData, [key]: value })
//   }

//   const isStep1Valid = () => {
//     const requiredFields = [
//       'prefix', 'fullName', 'mobile', 'email', 'affiliation', 'designation',
//       'regNo', 'regState', 'address', 'country', 'state', 'city', 'pincode', 'meal', 'gender', 'category'
//     ]
//     return requiredFields.every(field => formData[field].trim() !== '')
//   }

//   const handleAddAccompanying = () => {
//     setFormData({
//       ...formData,
//       accompanying: [...formData.accompanying, {
//         name: '', relation: '', age: '', gender: '', meal: ''
//       }]
//     })
//   }

//   const handleAccompanyingChange = (index, key, value) => {
//     const updated = [...formData.accompanying]
//     updated[index][key] = value
//     setFormData({ ...formData, accompanying: updated })
//   }

//   const handleRemovePerson = (indexToRemove) => {
//     const updated = formData.accompanying.filter((_, i) => i !== indexToRemove)
//     setFormData({ ...formData, accompanying: updated })
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-6">Event Registration</h1>

//       {step === 1 && (
//         <div className="space-y-4">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             <input className="border px-3 py-2 rounded" placeholder="Prefix" value={formData.prefix} onChange={e => handleInputChange('prefix', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Full Name" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Mobile" value={formData.mobile} onChange={e => handleInputChange('mobile', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Affiliation" value={formData.affiliation} onChange={e => handleInputChange('affiliation', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Designation" value={formData.designation} onChange={e => handleInputChange('designation', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Registration Number" value={formData.regNo} onChange={e => handleInputChange('regNo', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Registration State" value={formData.regState} onChange={e => handleInputChange('regState', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Address" value={formData.address} onChange={e => handleInputChange('address', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Country" value={formData.country} onChange={e => handleInputChange('country', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="State" value={formData.state} onChange={e => handleInputChange('state', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="City" value={formData.city} onChange={e => handleInputChange('city', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Pincode" value={formData.pincode} onChange={e => handleInputChange('pincode', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Meal" value={formData.meal} onChange={e => handleInputChange('meal', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Gender" value={formData.gender} onChange={e => handleInputChange('gender', e.target.value)} />
//             <input className="border px-3 py-2 rounded" placeholder="Category" value={formData.category} onChange={e => handleInputChange('category', e.target.value)} />
//           </div>
//           <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">Save & Continue</button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Accompanying Persons</h2>
//             <button onClick={handleAddAccompanying} className="text-sm text-blue-600 hover:underline">+ Add More</button>
//           </div>

//           {formData.accompanying.map((person, index) => (
//             <div key={index} className="border rounded p-4 bg-white shadow relative">
//               <h3 className="font-semibold mb-2">Accompanying Person {index + 1}</h3>
//               <button
//                 onClick={() => handleRemovePerson(index)}
//                 className="absolute top-2 right-2 text-red-600 hover:text-red-800"
//               >✕</button>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//                 <input className="border px-3 py-2 rounded" placeholder="Name" value={person.name} onChange={(e) => handleAccompanyingChange(index, 'name', e.target.value)} />
//                 <select className="border px-3 py-2 rounded" value={person.relation} onChange={(e) => handleAccompanyingChange(index, 'relation', e.target.value)}>
//                   <option value="">Relation</option>
//                   <option value="Father">Father</option>
//                   <option value="Mother">Mother</option>
//                   <option value="Spouse">Spouse</option>
//                   <option value="Sibling">Sibling</option>
//                   <option value="Friend">Friend</option>
//                 </select>
//                 <input className="border px-3 py-2 rounded" placeholder="Age" value={person.age} onChange={(e) => handleAccompanyingChange(index, 'age', e.target.value)} />
//                 <select className="border px-3 py-2 rounded" value={person.gender} onChange={(e) => handleAccompanyingChange(index, 'gender', e.target.value)}>
//                   <option value="">Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 <select className="border px-3 py-2 rounded" value={person.meal} onChange={(e) => handleAccompanyingChange(index, 'meal', e.target.value)}>
//                   <option value="">Meal Preference</option>
//                   <option value="Veg">Veg</option>
//                   <option value="Non-Veg">Non-Veg</option>
//                   <option value="Jain">Jain</option>
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
