import React from 'react';
import { Link } from 'react-router';
const doctors = ['Dr Ahmad…', 'Dr X…'];
const services = ['OPD', 'Emergency'];
const sources = ['Self', 'Referral'];
const bdms = ['BDM One', 'BDM Two'];
function AppointmentPage() {
  return (
    <div className="p-4 space-y-6">
      
      
    {/* Header */}
   <div className="bg-gradient-to-r from-[#403F66] to-[#E69579] text-white rounded-lg p-2 fflexlex flex-col md:flex-row justify-between items-start md:items-center w-full shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/avatar.png" alt="avatar" className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">Test (39 years, 11 months Male)</h2>
          <p className="text-sm">Mr#:026507-0625-JEC | Created 0 minutes ago by: Self</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm">S/o Test</p>
        <p className="text-sm">Address: Cheik Nub Sahiwal</p>
        <p className="text-2xl font-bold">Ledger Balance: <span className="text-white">0.0</span></p>
      </div>
    </div>
    <h2  className="block text-sm font-medium">Patient Assigned to Panel:</h2>
    <h2 className="block  font-medium text-primary">Private Jamil Eye Care Sahiwal</h2>
    {/* Main Form */}
    <div className="bg-white rounded-lg p-4 shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium">Please select doctor</label>
          <select className="mt-1 w-full border rounded p-2">
            {doctors.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Please select Service Type</label>
          <select className="mt-1 w-full border rounded p-2">
            {services.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <Link to="/discounttypes" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Continue (alt + A)</Link>
      </div>
        <div className='w-full flex items-center justify-center'>
            <h1>====== Optional Datails ======</h1>
        </div>
      {/* Optional Detail */}
      <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Select Appointments Source</label>
          <select className="mt-1 w-full border rounded p-2">
            {sources.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Select a BDM</label>
          <select className="mt-1 w-full border rounded p-2">
            {bdms.map(b => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Ref By</label>
          <input className="mt-1 w-full border rounded p-2" placeholder="Ref By" />
        </div>
        <div className="md:col-span-3">
          <label className="block text-sm font-medium">Remarks</label>
          <input className="mt-1 w-full border rounded p-2" placeholder="Remarks" />
        </div>
      </div>
    </div>

    {/* Change Panel Section */}
    <div className="bg-white rounded-lg p-4 shadow space-y-4">
      <p className="text-center text-blue-500 font-medium">----- Change Patient Panel for this reservation only -----</p>
      <input type="text" placeholder="Search" className="border rounded p-2 w-full md:w-1/3 mx-auto" />
      <table className="w-full text-sm border-t mt-2">
        <thead className="text-left text-gray-600">
          <tr><th className="py-2">Sr#</th><th>Panel</th><th>Address</th><th>Action</th></tr>
        </thead>
        <tbody>
          {/* Render rows dynamically */}
          <tr className="border-t"><td className="py-2">1</td><td>Panel A</td><td>Address A</td><td><button className="text-blue-500">Action</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AppointmentPage;