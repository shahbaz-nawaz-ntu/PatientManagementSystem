import { Link, Route, Routes } from "react-router-dom"
import SearchPatientCom from "../components/SearchPatientCom"

function PatientList() {

  return (
    <div className=" flex flex-col gap-4">

      <div className="bg-white rounded-lg p-6 shadow-xl flex items-center justify-between">
        <div className="w-[49%] border-1 border-black p-4 rounded-lg flex items-center  justify-center">
          Total Patient Registered
        </div>
        <Link to="/addpatient" className="w-[49%] bg-acent hover:bg-highlight p-4 rounded-lg flex items-center  justify-center text-primary">+ ADD Patient</Link>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-xl flex items-center justify-between">
        <div className="w-[32%] border-1 border-black border-b-6 border-b-green-800 p-4 rounded-lg flex items-center  justify-center">
          OPD
        </div>
        <div className="w-[32%] border-1 border-black border-b-6 border-b-green-800 p-4 rounded-lg flex items-center  justify-center">
          Diagnostic
        </div>
        <div className="w-[32%] border-1 border-black border-b-6 border-b-green-800 p-4 rounded-lg flex items-center  justify-center">
          Procedure
        </div>
      </div>
    
      {/* <Routes>
        <Route path="/addpatient" element={<AddNewPatient/>} />
      </Routes> */}
     <SearchPatientCom />
     {/* <AddNewPatient/> */}

    </div>
  )
}

export default PatientList