'use client'

export default function Accompanying({
  formData,
  setFormData,
  nextStep,
  prevStep,
  onEdit
}) {
  const handleChange = (index, name, value) => {
    const updated = [...formData.accompanying]
    updated[index][name] = value
    setFormData({ ...formData, accompanying: updated })
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
    const updated = formData.accompanying.filter((_, i) => i !== index)
    setFormData({ ...formData, accompanying: updated })
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

      {/* Render Accompanying Person Fields */}
      {formData.accompanying.map((person, index) => (
        <div
          key={index}
          className="relative grid grid-cols-2 gap-4 mb-6 p-4 border border-gray-300 rounded bg-white"
        >
          {/* Delete button top-right */}
          <button
            onClick={() => deleteAccompanying(index)}
            className="absolute top-2 right-2 text-red-500 font-semibold"
          >
            ✕
          </button>

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
                onChange={(e) => handleChange(index, name, e.target.value)}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
          ))}
        </div>
      ))}

      {/* Add More Button */}
      <div className="mb-6">
        <button
          onClick={addAccompanying}
          className="bg-red-600 hover:bg-red-700 border-1 border-[#4F0F0F] text-white px-4 py-2 rounded"
        >
          + Add More
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
         <button
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg"
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
