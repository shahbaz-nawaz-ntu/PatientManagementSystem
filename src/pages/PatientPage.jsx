import SearchComEmbend from '../components/SearchComEmbend'
import SimpleSearch from '../components/SimpleSearch'
import PatientTable from '../components/PatientTable'
import { Link } from 'react-router-dom'

function PatientPage() {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='flex items-center justify-between p-4 bg-gradient-to-r from-primary to-highlight '>
                    <div className='flex items-start gap-4 text-white'>
                        <div className='w-[100px] border-2'>
                            <img src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?uid=R137875917&ga=GA1.1.2032350152.1743826403&semt=ais_items_boosted&w=740" alt="Patient Management System" className='object-cover' />
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <h2>Viky viky (75 years, 11 months, Male)</h2>
                                <div className='text-green-400'>+923006578779</div>
                            </div>

                            <div>
                                <p>House No 123, Street No 456, City, Country</p>
                            </div>

                            <div>here some discription</div>
                        </div>
                    </div>

                <div className='flex items-center gap-4'>
                    <button className='border-1 border-primary px-4 py-2 rounded-sm text-primary'>
                        Edit Profile
                    </button>

                    <Link to='addnewvisit' className='px-4 py-2 rounded-sm text-white'>
                        ADD new Visit
                    </Link>
                </div>
            </div>


            <div className='flex items-center justify-evenly p-4 shadow-xl'>
                <button className='bg-blue-500 text-white py-2 px-4 rounded-[5px]'>Profile</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Visits</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Diagnostic</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Procedure</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>History</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Family Members</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Appointments</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Unknown</button>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-[5px]'>Unknown</button>
            </div>

            <SearchComEmbend /> 

            <SimpleSearch />

            <PatientTable />

        </div>
    )
}

export default PatientPage