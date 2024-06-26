import React from 'react'
import Navbar from '../components/Navbar'
import BreadCrum from '../components/BreadCrum'
import Stats from '../components/Stats'
import { LuUsers2 } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import Graph from '../components/Graph';
import DayChart from '../components/DayCharts';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Chart from '../components/Chart';
import ChartPie from '../components/ChartPie';
import { BsFolder2Open } from 'react-icons/bs';
import { BsCart3 } from "react-icons/bs";




const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar title="Dashboard"/>
      <BreadCrum />

      <div className='px-[40px] flex'>
        <div className='w-[30%] pr-[15px]'>
           <Stats 
            icon={<AiOutlinePieChart />}
            title1={"Sales"}
            title2={"Volume"}
            stat1={"$0.00"}
            stat1per={"0.00%"}
            stat2={"$0.00"}
            stat2per={"0.00%"}
           />
        </div>
        <div className='w-[30%] pl-[15px]'>
          <Stats 
            icon={<LuUsers2 />}
            title1={"Customers"}
            title2={"Active"}
            stat1={"$0.00"}
            stat1per={"0.00%"}
            stat2={"$0.00"}
            stat2per={"0.00%"}
          />
        </div>
        <div className='w-[40%] pl-[30px]'>
           <Stats 
             icon={<BsHandbag />}
             title1={"All Orders"}
             title2={"Pending"}
             title3={"Completed"}
             stat1={"$0.00"}
             stat1per={"0.00%"}
             stat2={"$0.00"}
             stat2per={"0.00%"}
             stat3={"$0.00"}
             stat3per={"0.00%"}
             present={"1"}
           />
        </div>
      </div>

      <div className='px-[40px] flex py-[20px]'>
        <div className='w-[29%] rounded-xl bg-white '>
          <Graph title={<ChartPie />} present2={"1"}/>
        </div>

        <div className='w-[30%] ml-[28px] pr-[15px]'>
          <div className='mt-[4px]'>
           <Stats 
             bgColor="primary"
             height='170px'
             icon={<BsFolder2Open />}
             title1={"All Products"}
             title2={"Active"}
             stat1={"45"}
             stat2={"32"}
             padY={"10"}
             txtColor={"white"}
           />
          </div>

          <div className='mt-[30px]'>
            <Stats  
             height="159px"
             icon={<BsCart3 />}
             title1={"Abandoned Cart"}
             title2={"Customers"}
             stat1={"20%"}
             stat2={"30"}
             padY={"9"}
           />
          </div>
        </div>
      </div>

      <div className='px-[40px] flex py-[20px]'>
         <div className='w-[60%] pr-[15px] '>
           <Graph title={<DayChart />} present={"1"}/>
         </div>
      </div>
    </div>
  )
}

export default Dashboard
