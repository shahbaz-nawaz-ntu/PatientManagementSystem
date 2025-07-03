import React from 'react'

function InputComp() {
  return (
    <div className='w-full flex gap-4'>
        <input type='text' placeholder='History ' className='w-[33%] border-1 border-black p-2 rounded-[5px]' />
        <input type='text' placeholder='For R/L/B ' className='w-[33%] border-1 border-black p-2 rounded-[5px]' />
        <input type='text' placeholder='Duration ' className='w-[33%] border-1 border-black p-2 rounded-[5px]' />
    </div>
  )
}

export default InputComp