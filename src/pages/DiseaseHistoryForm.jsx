import React from 'react'

function DiseaseHistoryForm() {

    const HistoryRow = ({ placeholder }) => (
  <div className="flex gap-2 items-center mb-2">
    <input
      type="text"
      placeholder={placeholder}
      className="flex-1 border px-2 py-1 rounded text-sm"
    />
    <select className="border px-2 py-1 rounded text-sm text-gray-700">
      <option>For R/L/B</option>
    </select>
    <input
      type="text"
      placeholder="Duration"
      className="w-28 border px-2 py-1 rounded text-sm"
    />
    <label className="inline-flex items-center cursor-pointer ml-2">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-9 h-5 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500 transition-all"></div>
    </label>
  </div>
);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Form Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white">
        {/* Section: Systemic History */}
        <div>
          <h3 className="text-blue-600 text-sm font-semibold mb-2">Systemic History</h3>
          {[...Array(4)].map((_, i) => (
            <HistoryRow key={i} placeholder="Systemic History max-250 character" />
          ))}
        </div>

        {/* Section: Ocular History */}
        <div>
          <h3 className="text-blue-600 text-sm font-semibold mb-2">Ocular History</h3>
          {[...Array(4)].map((_, i) => (
            <HistoryRow key={i} placeholder="Ocular History max-250 character" />
          ))}
        </div>

        {/* Section: Presenting Complaints */}
        <div>
          <h3 className="text-blue-600 text-sm font-semibold mb-2">Presenting Complaints</h3>
          {[...Array(4)].map((_, i) => (
            <HistoryRow key={i} placeholder="Presenting Complaints max-250 char." />
          ))}
        </div>

        {/* Add New Disease History */}
        <div className="text-blue-600 text-sm mt-3 cursor-pointer hover:underline">
          + add new disease history
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-[280px] border-l bg-gray-50 flex flex-col overflow-y-auto">
        <div className="border-b px-4 py-2 text-blue-600 text-sm font-medium cursor-pointer hover:underline">
          💊 Templates, Notes & more..
        </div>

        {/* Tab Header */}
        <div className="flex justify-between px-4 py-2 border-b text-sm font-medium text-gray-700">
          <button className="bg-blue-600 text-white px-4 py-1 rounded shadow">
            View
          </button>
          <span>Visit: 1</span>
          <span className="cursor-pointer hover:underline">Procedure</span>
          <span className="cursor-pointer hover:underline">Diagnostic</span>
        </div>

        {/* Tab Content Placeholder */}
        <div className="flex-1 p-4 text-center text-gray-400 text-sm">
          No data selected.
        </div>
      </div>
    </div>
  )
}

export default DiseaseHistoryForm