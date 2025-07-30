import React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function AppHome() {
  const appointmentTypes = [
    "Procedure",
    "Emergency",
    "Appointment",
    "Walk-in",
    "Follow-up",
    "Diagnostic",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header with Date */}
      <div className="text-blue-600 font-medium text-sm mb-2 cursor-pointer hover:underline">
        Patient's Reservation For June 25, 2025
      </div>

      {/* Search & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 ">
        <input
          type="text"
          placeholder="Search Token No"
          className="border border-gray-300 rounded-lg text-sm w-[25%] px-2 py-4"
        />
        <input
          type="text"
          placeholder="Search Patient Info"
          className="border border-gray-300 rounded-lg text-sm w-[25%] px-2 py-4"
        />
        <button className="border border-blue-500 text-blue-600 px-3 py-2 rounded-3xl text-sm hover:bg-blue-50 lg:w-[10%] w-auto">
          Refresh
        </button>
        <button className="border border-blue-500 text-blue-600 px-3 py-2 rounded-3xl text-sm hover:bg-blue-50 lg:w-[20%] w-auto">
          Show Pending Check-in
        </button>
       <button className="flex items-center gap-x-2 whitespace-nowrap border border-blue-500 text-blue-600 px-3 py-2 rounded-3xl text-sm hover:bg-blue-50 lg:w-[10%] w-auto">
  ☰ More Filter

        </button>
      </div>

      {/* Doctor Info */}
      <div className="bg-white border-l-4 border-green-500 shadow px-4 py-2 mb-4 rounded">
        <p className="text-sm font-semibold">Dr Ahmad Zeshan Jamil</p>
        <div className="flex gap-3 text-xs mt-1">
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">OPD: 10</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Token: 10</span>
          <span className="text-gray-500">Last Enter: 9:00 am</span>
        </div>
      </div>

      {/* Appointment Types */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-blue-700 text-sm font-semibold mb-3 flex items-center">
          Appointment Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {appointmentTypes.map((type) => (
            <div key={type} className="border border-gray-200 p-4 rounded shadow-sm">
              <h3 className="text-sm font-medium mb-2">{type}</h3>
              <Link to={`/${type.toLowerCase()}`}>
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded text-sm w-full hover:bg-blue-700">
                  <FaUserPlus className="text-white text-xs" />
                  Add Patient
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Advised Services */}
      <div className="text-sm text-gray-700 mb-2">
        <span className="text-blue-600 font-medium">Doctor Advised Services:</span>{" "}
        <span>
          Create <span className="text-blue-500 underline cursor-pointer">appointments</span> from
          recommended <span className="text-blue-500 underline cursor-pointer">diagnostics</span>{" "}
          and <span className="text-blue-500 underline cursor-pointer">procedures</span>
        </span>
      </div>

      {/* Create Entry Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded shadow text-sm hover:bg-blue-700">
        Create Entry
      </button>
    </div>
  );
}

export default AppHome;
