import React from 'react'
import { metrix } from '../assets'
import { MdDashboardCustomize } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { BsFolder2Open } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import Navbar from './Navbar';

const Sidebar = () => {
  return (
    <div className='hover:w-[296px] w-[88px] pb-[30px] h-screen font-poppins group bg-[#fff]'>
      <div className='w-[100%] flex justify-start group-hover:px-[30px] px-[15px] items-center h-[100px]'>
        <img className='w-[60px]' height={"40px"} src={metrix}/> 
        <h3 className='text-black ml-[10px] font-poppins font-bold text-[25px] hidden group-hover:block'>Metrix</h3>
      </div>

      <div>
        <div className='flex justify-between flex-col items-center'>
           <ul className='flex items-center flex-col font-poppins'>
              <li className='flex items-center h-[49px] bg-[#5570F1] rounded-lg group-hover:w-[233px] text-white text-[16px] px-[14px] group-hover:px-[30px]'><MdDashboardCustomize className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Dashboard</p></li>
              <li className='flex items-center h-[49px] hover:bg-[#5570F1] rounded-lg group-hover:w-[233px] hover:text-white text-[16px] px-[14px] group-hover:px-[30px] my-[3px]'><BsHandbag className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Orders</p></li>
              <li className='flex items-center h-[49px] hover:bg-[#5570F1] rounded-lg group-hover:w-[233px] hover:text-white text-[16px] px-[14px] group-hover:px-[30px] my-[3px]'><LuUsers className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Customers</p></li>
              <li className='flex items-center h-[49px] hover:bg-[#5570F1] rounded-lg group-hover:w-[233px] hover:text-white text-[16px] px-[14px] group-hover:px-[30px] my-[3px]'><BsFolder2Open className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Inventory</p></li>
              <li className='flex items-center h-[49px] hover:bg-[#5570F1] rounded-lg group-hover:w-[233px] hover:text-white text-[16px] px-[14px] group-hover:px-[30px] my-[3px]'><IoChatbubbleEllipsesOutline className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Conversations</p></li>
              <li className='flex items-center h-[49px] hover:bg-[#5570F1] rounded-lg group-hover:w-[233px] hover:text-white text-[16px] px-[14px] group-hover:px-[30px] my-[3px]'><IoSettingsOutline className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Settings</p></li>        
           </ul>

           <ul className=' font-poppins flex justifiy-center items-center flex-col absolute bottom-0'>
              <li className='flex items-center h-[53px] bg-[#eff0f0] rounded-lg group-hover:w-[233px] text-[#212227] text-[16px] px-[15px] group-hover:px-[30px]'><TfiHeadphoneAlt className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Contact Support</p></li>
              <li className='flex items-center h-[53px] rounded-lg group-hover:w-[233px] text-[16px] bg-[#fff5e9] group-hover:pl-[30px] px-[15px] mt-[10px]'><GoGift className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Free Gift Awaits You!</p></li> 
              <li className='flex items-center h-[53px] rounded-lg group-hover:w-[233px] text-[16px] text-[#db9292] px-[15px] group-hover:px-[30px] my-[3px]'><FiLogOut className='group-hover:mr-[10px] text-[20px]'/><p className='hidden group-hover:block'>Logout</p></li> 
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
