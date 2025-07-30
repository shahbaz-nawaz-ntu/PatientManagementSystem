
import React from 'react';

function Examination() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        {/* Header */}
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">Examination Page</h2>
          <p className="text-gray-500">Doctor can record physical exam, vitals, and observations</p>
        </div>

        {/* Patient Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Patient Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Patient ID"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Vitals */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Vitals</h3>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <input type="text" placeholder="BP (e.g. 120/80)" className="p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Heart Rate (bpm)" className="p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Temperature (°F)" className="p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Weight (kg)" className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Symptoms & Notes */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Symptoms & Observations</h3>
        <textarea
          rows={4}
          placeholder="Write symptoms or notes here..."
          className="w-full p-2 border border-gray-300 rounded mb-6"
        ></textarea>

        {/* Diagnosis */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Diagnosis</h3>
        <textarea
          rows={4}
          placeholder="Diagnosis details..."
          className="w-full p-2 border border-gray-300 rounded mb-6"
        ></textarea>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Examination
          </button>
        </div>
      </div>
    </div>
  );
}

export default Examination;
