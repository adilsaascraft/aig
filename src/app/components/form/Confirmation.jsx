'use client'

export default function Confirmation({ formData, onSubmit, onEdit }) {
  const {
    prefix,
    fullName,
    mobile,
    email,
    affiliation,
    designation,
    regNo,
    regState,
    address,
    country,
    state,
    city,
    pincode,
    meal,
    gender,
    category,
    accompanying,
    preWorkshop,
    postWorkshop,
    preWorkshopAmount = 0,
    postWorkshopAmount = 0,
  } = formData

  const accompanyingTotal = accompanying.length * 10000
  const mainTotal = 8555
  const subtotal = mainTotal + preWorkshopAmount + postWorkshopAmount + accompanyingTotal
  const tax = 2000
  const total = subtotal + tax

  return (
    <div className="bg-white p-6 rounded shadow-md space-y-10">
      {/* Step 1: Basic Details */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Basic Details</h2>
          <button onClick={() => onEdit(1)} className="text-sm text-blue-600 underline">Edit</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Prefix', value: prefix, name: 'prefix' },
            { label: 'Full Name', value: fullName, name: 'fullName' },
            { label: 'Mobile No.', value: mobile, name: 'mobile' },
            { label: 'Email', value: email, name: 'email' },
            { label: 'Affiliation', value: affiliation, name: 'affiliation' },
            { label: 'Designation', value: designation, name: 'designation' },
            { label: 'Medical Council Reg. No.', value: regNo, name: 'regNo' },
            { label: 'Medical Council State', value: regState, name: 'regState' },
            { label: 'Address', value: address, name: 'address' },
            { label: 'Country', value: country, name: 'country' },
            { label: 'State', value: state, name: 'state' },
            { label: 'City', value: city, name: 'city' },
            { label: 'Pincode', value: pincode, name: 'pincode' },
            { label: 'Meal Preference', value: meal, name: 'meal' },
            { label: 'Gender', value: gender, name: 'gender' },
            { label: 'Category', value: category, name: 'category' },
          ].map(({ label, value, name }) => (
            <div key={name}>
              <label className="text-sm text-gray-500">{label}</label>
              <input
                type="text"
                name={name}
                value={value}
                readOnly
                className="w-full mt-1 border border-gray-300 rounded p-2 bg-gray-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Step 2: Accompanying Persons */}
      {accompanying.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Accompanying Persons</h2>
            <button onClick={() => onEdit(2)} className="text-sm text-blue-600 underline">Edit</button>
          </div>
          {accompanying.map((person, idx) => (
            <div key={idx} className=" rounded p-4 mb-4">
              <p className="font-semibold mb-2">Person {idx + 1}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Name', value: person.name, name: `name-${idx}` },
                  { label: 'Relation', value: person.relation, name: `relation-${idx}` },
                  { label: 'Age', value: person.age, name: `age-${idx}` },
                  { label: 'Gender', value: person.gender, name: `gender-${idx}` },
                  { label: 'Meal Preference', value: person.meal, name: `meal-${idx}` },
                ].map(({ label, value, name }) => (
                  <div key={name}>
                    <label className="text-sm text-gray-500">{label}</label>
                    <input
                      type="text"
                      value={value}
                      readOnly
                      className="w-full mt-1 border border-gray-300 rounded p-2 bg-gray-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Step 3: Workshop Selection */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Workshop</h2>
          <button onClick={() => onEdit(3)} className="text-sm text-blue-600 underline">Edit</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold mb-1">Pre - Conference Workshop</p>
            <p className="text-sm">{preWorkshop || 'Not Selected'}</p>
            <p className="text-sm text-gray-600">Amount: ₹ {preWorkshopAmount.toLocaleString()}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Post - Conference Workshop</p>
            <p className="text-sm">{postWorkshop || 'Not Selected'}</p>
            <p className="text-sm text-gray-600">Amount: ₹ {postWorkshopAmount.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Final Summary */}
      <div>
        <h2 className="text-lg font-bold mb-2">Order Summary</h2>
        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Gut, Liver & Lifelines</span>
            <span>₹ {mainTotal.toLocaleString()}</span>
          </div>
          {accompanying.length > 0 && (
            <div className="flex justify-between">
              <span>+ {accompanying.length} Accompanying Person</span>
              <span>₹ {accompanyingTotal.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Workshops Total</span>
            <span>₹ {(preWorkshopAmount + postWorkshopAmount).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹ {tax.toLocaleString()}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-base mt-2">
            <span>Total</span>
            <span>₹ {total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Confirm & Pay Button */}
      <div className="text-center mt-6">
        <button
          onClick={onSubmit}
          className="bg-sky-800 hover:bg-sky-900 text-white px-6 py-2 rounded-lg"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  )
}













































// 'use client'

// export default function Confirmation({ formData, onSubmit, onEdit }) {
//   const {
//     prefix,
//     fullName,
//     mobile,
//     email,
//     affiliation,
//     designation,
//     regNo,
//     regState,
//     address,
//     country,
//     state,
//     city,
//     pincode,
//     meal,
//     gender,
//     category,
//     accompanying,
//     preWorkshop,
//     postWorkshop,
//     preWorkshopAmount = 0,
//     postWorkshopAmount = 0,
//   } = formData

//   const accompanyingTotal = accompanying.length * 10000
//   const mainTotal = 8555 // Assume fixed for main person
//   const subtotal = mainTotal + preWorkshopAmount + postWorkshopAmount + accompanyingTotal
//   const tax = 2000 // Hardcoded tax
//   const total = subtotal + tax

//   return (
//     <div className="bg-white p-6 rounded shadow-md space-y-10">
//       {/* Step 1: Basic Details */}
//       <div>
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-lg font-bold">Basic Details</h2>
//           <button onClick={() => onEdit(1)} className="text-sm text-blue-600 underline">Edit</button>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {[
//             { label: 'Prefix', key: prefix },
//             { label: 'Full Name', key: fullName },
//             { label: 'Mobile No.', key: mobile },
//             { label: 'Email', key: email },
//             { label: 'Affiliation', key: affiliation },
//             { label: 'Designation', key: designation },
//             { label: 'Medical Council Reg. No.', key: regNo },
//             { label: 'Medical Council State', key: regState },
//             { label: 'Address', key: address },
//             { label: 'Country', key: country },
//             { label: 'State', key: state },
//             { label: 'City', key: city },
//             { label: 'Pincode', key: pincode },
//             { label: 'Meal Preference', key: meal },
//             { label: 'Gender', key: gender },
//             { label: 'Category', key: category },
//           ].map(({ label, key }) => (
//             <div key={key}>
//             <label className="text-sm text-gray-500">{label}</label>
//             <input
//                 type="text"
//                 value={formData[key]}
//                 readOnly
//                 className="mt-1 p-2 w-full border rounded bg-gray-100 text-gray-700"
//             />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Step 2: Accompanying Persons */}
//       {accompanying.length > 0 && (
//         <div>
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-lg font-bold">Accompanying Persons</h2>
//             <button onClick={() => onEdit(2)} className="text-sm text-blue-600 underline">Edit</button>
//           </div>
//           {accompanying.map((person, idx) => (
//             <div key={idx} className="border rounded p-4 mb-4">
//               <p className="font-semibold mb-2">Person {idx + 1}</p>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { label: 'Name', key: person.name },
//                   { label: 'Relation', key: person.relation },
//                   { label: 'Age', key: person.age },
//                   { label: 'Gender', key: person.gender },
//                   { label: 'Meal Preference', key: person.meal },
//                 ].map(({ label, key }) => (
//                   <div key={label}>
//                     <p className="text-sm text-gray-500">{label}</p>
//                     <p className="font-medium">{key}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Step 3: Workshop Selection */}
//       <div>
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-lg font-bold">Workshop</h2>
//           <button onClick={() => onEdit(3)} className="text-sm text-blue-600 underline">Edit</button>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <p className="font-semibold mb-1">Pre - Conference Workshop</p>
//             <p className="text-sm">{preWorkshop || 'Not Selected'}</p>
//             <p className="text-sm text-gray-600">Amount: ₹ {preWorkshopAmount.toLocaleString()}</p>
//           </div>
//           <div>
//             <p className="font-semibold mb-1">Post - Conference Workshop</p>
//             <p className="text-sm">{postWorkshop || 'Not Selected'}</p>
//             <p className="text-sm text-gray-600">Amount: ₹ {postWorkshopAmount.toLocaleString()}</p>
//           </div>
//         </div>
//       </div>

//       {/* Final Summary */}
//       <div>
//         <h2 className="text-lg font-bold mb-2">Order Summary</h2>
//         <div className="border-t pt-4 space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>Gut, Liver & Lifelines</span>
//             <span>₹ {mainTotal.toLocaleString()}</span>
//           </div>
//           {accompanying.length > 0 && (
//             <div className="flex justify-between">
//               <span>+ {accompanying.length} Accompanying Person</span>
//               <span>₹ {accompanyingTotal.toLocaleString()}</span>
//             </div>
//           )}
//           <div className="flex justify-between">
//             <span>Workshops Total</span>
//             <span>₹ {(preWorkshopAmount + postWorkshopAmount).toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Tax</span>
//             <span>₹ {tax.toLocaleString()}</span>
//           </div>
//           <hr />
//           <div className="flex justify-between font-bold text-base mt-2">
//             <span>Total</span>
//             <span>₹ {total.toLocaleString()}</span>
//           </div>
//         </div>
//       </div>

//       {/* Confirm & Pay Button */}
//       <div className="text-right mt-6">
//         <button
//           onClick={onSubmit}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//         >
//           Confirm & Pay
//         </button>
//       </div>
//     </div>
//   )
// }



































// 'use client'
// import BasicDetails from '@/app/components/form/BasicDetails'

// export default function Confirmation({ formData, onSubmit, onEdit }) {
//   return (
//     <div className="bg-white p-6 rounded shadow-md space-y-8">
//       {/* Basic Details */}
//       <div className="relative">
//         <h2 className="text-lg font-bold mb-4 border-b pb-2">Basic Details</h2>
//         <button
//           onClick={() => onEdit(1)}
//           className="absolute top-0 right-0 text-sm text-blue-600 underline"
          
//         >
//           Edit
//         </button>
//         <div className="grid grid-cols-2 gap-4">
//           {[
//             { label: 'Prefix', key: 'prefix' },
//             { label: 'Full Name', key: 'fullName' },
//             { label: 'Mobile No.', key: 'mobile' },
//             { label: 'Email', key: 'email' },
//             { label: 'Affiliation', key: 'affiliation' },
//             { label: 'Designation', key: 'designation' },
//             { label: 'Medical Council Reg. No.', key: 'regNo' },
//             { label: 'Medical Council State', key: 'regState' },
//             { label: 'Address', key: 'address' },
//             { label: 'Country', key: 'country' },
//             { label: 'State', key: 'state' },
//             { label: 'City', key: 'city' },
//             { label: 'Pincode', key: 'pincode' },
//             { label: 'Meal Preference', key: 'meal' },
//             { label: 'Gender', key: 'gender' },
//             { label: 'Category', key: 'category' },
//           ].map(({ label, key }) => (
            // <div key={key}>
            // <label className="text-sm text-gray-500">{label}</label>
            // <input
            //     type="text"
            //     value={formData[key]}
            //     readOnly
            //     className="mt-1 p-2 w-full border rounded bg-gray-100 text-gray-700"
            // />
            // </div>

//           ))}
//         </div>
//       </div>

//       {/* Accompanying Persons */}
//       {formData.accompanying.length > 0 && (
//         <div className="relative">
//           <h2 className="text-lg font-bold mb-4 border-b pb-2">Accompanying Persons</h2>
//           <button
//             onClick={() => onEdit(2)}
//             className="absolute top-0 right-0 text-sm text-blue-600 underline"
//           >
//             Edit
//           </button>
//           {formData.accompanying.map((person, idx) => (
//             <div key={idx} className="border rounded p-4 mb-4">
//               <p className="font-semibold mb-2">Person {idx + 1}</p>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { label: 'Name', key: 'name' },
//                   { label: 'Relation', key: 'relation' },
//                   { label: 'Age', key: 'age' },
//                   { label: 'Gender', key: 'gender' },
//                   { label: 'Meal Preference', key: 'meal' },
//                 ].map(({ label, key }) => (
//                   <div key={key}>
//                     <p className="text-sm text-gray-500">{label}</p>
//                     <input
//                     type="text"
//                     value={person[key]}
//                     readOnly
//                     className="mt-1 p-2 w-full border rounded bg-gray-100 text-gray-700"
//                     />

//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Workshop Selection */}
//       <div className="relative">
//         <h2 className="text-lg font-bold mb-4 border-b pb-2">Workshop Selection</h2>
//         <button
//           onClick={() => onEdit(3)}
//           className="absolute top-0 right-0 text-sm text-blue-600 underline"
//         >
//           Edit
//         </button>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-500">Pre-Conference Workshop</p>
//             <p className="font-medium">{formData.preWorkshop}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Post-Conference Workshop</p>
//             <p className="font-medium">{formData.postWorkshop}</p>
//           </div>
//         </div>
//       </div>

//       {/* Confirm & Pay Button */}
//       <div className="text-right">
//         <button
//           onClick={onSubmit}
//           className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-2 rounded shadow"
//         >
//           Confirm & Pay
//         </button>
//       </div>
//     </div>
//   )
// }
