// RxForm.jsx
import React, { useState } from 'react';

const medicines = ['Please Select Medicine', 'Paracetamol', 'Ibuprofen'];
const dosages = ['Please Select Dosage', '250 mg', '500 mg'];
const fors = ['Please Select For', 'Pain', 'Fever'];
const durations = ['Please Select Duration', '5 days', '7 days'];

export default function PrescriptionPage() {
  const [selected, setSelected] = useState({
    medicine: medicines[0],
    dosage: dosages[0],
    for_: fors[0],
    duration: durations[0],
  });

  const handleChange = (field) => (e) => {
    setSelected(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      {/* Form Row */}
      <div className="flex flex-col flex-wrap gap-2">
        <select
          className="flex-1 border border-gray-300 rounded p-2"
          value={selected.medicine}
          onChange={handleChange('medicine')}
        >
          {medicines.map((m, i) => (
            <option key={i} value={m}>{m}</option>
          ))}
        </select>
          <div className='w-full flex gap-2'>
        <select
          className="flex-1 border border-gray-300 rounded p-2"
          value={selected.dosage}
          onChange={handleChange('dosage')}
        >
          {dosages.map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>

        <select
          className="flex-1 border border-gray-300 rounded p-2"
          value={selected.for_}
          onChange={handleChange('for_')}
        >
          {fors.map((f, i) => (
            <option key={i} value={f}>{f}</option>
          ))}
        </select>

        <select
          className="flex-1 border border-gray-300 rounded p-2"
          value={selected.duration}
          onChange={handleChange('duration')}
        >
          {durations.map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="flex-1 bg-blue-500 text-white font-medium rounded p-3 hover:bg-blue-600"
        >
          Add to Rx (alt + A)
        </button>
        <button
          type="button"
          className="flex-1 border border-gray-400 text-gray-700 rounded p-3 hover:bg-gray-100"
        >
          Add to Rx as free provided
        </button>
      </div>

      {/* Summary / Remarks */}
      <div className="mt-4 flex  gap-2">
        <button type="button" className="w-[40%] border border-blue-400 text-blue-500 rounded px-4 py-2 hover:bg-blue-50">
          Summary
        </button>
        <input type="text" placeholder="Rx Header remarks Prior to Rx" className="w-[50%] border border-gray-300 rounded p-2 w-full" />
      </div>
    </div>
  );
}