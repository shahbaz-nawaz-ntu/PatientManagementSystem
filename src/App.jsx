import { RouterProvider } from 'react-router-dom'
import Layout from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import PatientList from './pages/PatientList'
import DailyCashReport from './pages/DailyCashReport'
import PatientRecentOPD from './pages/PatientRecentOPD'
import OPD from './pages/OPD'
import Prefrences from './pages/Prefrences'
import TodaysReservation from './pages/TodaysReservation'
import AddNewPatient from './pages/AddNewPatient'
import PatientPage from './pages/PatientPage'
import PLayout from './pages/PatientHome'
import ADDNewVisit from './pages/ADDNewVisit'
import VisionandRefraction from './pages/VisionandRefraction'
import AppointmentPage from './pages/AppointmentPage'
import DiscountTypes from './pages/DiscountTypes'

function App() {

  const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {path:"/patientlist", element:<PatientList />},
      {path:"/dailycashreport", element:<DailyCashReport/>},
      {path:"/patientrecentopd", element:<PatientRecentOPD/>},
      {path:"/opd", element:<OPD/>},
      {path:"/prefrences", element:<Prefrences />},
      {path:"/todaysreservation", element:<TodaysReservation/>},
      {path:"/addpatient", element:<AddNewPatient />},
      {path:"/appointment", element:<AppointmentPage />},
      {path: "/discounttypes", element:<DiscountTypes/>}
    ]
  },
  {
    path: '/patient',
    element: <PatientPage />,
  },
  {
    path: '/patient/*',
    element: <PLayout />,
    children: [
      {path: 'addnewvisit', element: <ADDNewVisit />},
      {path: 'visionandrefraction', element: <VisionandRefraction />}
    ]
  }
])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App