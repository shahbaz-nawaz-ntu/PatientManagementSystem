import InputComp from "../components/InputComp"

function ADDNewVisit() {
  return (
    <div className='w-full h-full flex flex-col'>
       
            <div className='w-full flex flex-col gap-4 p-4'>
                <h2 className="text-blue-700 text-[26px] font-bold">Systemic History</h2>
                <InputComp />
                <InputComp />
                <InputComp />
                <InputComp />
            </div>

            <div className='w-full flex flex-col gap-4 p-4'>
                <h2 className="text-blue-700 text-[26px] font-bold">Ocular History</h2>
                <InputComp />
                <InputComp />
                <InputComp />
                <InputComp />
            </div>

            <div className='w-full flex flex-col gap-4 p-4'>
                <h2 className="text-blue-700 text-[26px] font-bold">Presenting Complaints</h2>
                <InputComp />
                <InputComp />
                <InputComp />
                <InputComp />
            </div>

            <div className="w-full flex items-center justify-center text-blue-800 p-4 font-semibold">+ Add new disease History</div>
    </div>
  )
}

export default ADDNewVisit