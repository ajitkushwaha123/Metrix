import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Graph = () => {
  return (
    <div className='h-[423.67px] bg-white font-poppins'>
      <div className='flex justify-between p-5'>
        <p className='text-[18px] font-poppins text-medium'>Marketting</p>
        <p className='flex text-txtPrimary justify-center items-center'>This Week <MdOutlineKeyboardArrowDown className='text-[22px]'/> </p>
      </div>
    </div>
  )
}

export default Graph
