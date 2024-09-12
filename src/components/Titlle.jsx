import React from 'react'

const Titlle = ({text1,text2}) => {
  return (
 <div className='inline-flex items-center gap-2 mb-3'>
 <p className='text-gray-500'>{text1} <span className='text-gray-700 font-bold'>{text2}</span></p>
 <p className='w-8 sm:w-12 h-[1px] sm:h[2px] p-[1px] rounded bg-gray-700'></p>

 </div>
  )
}

export default Titlle