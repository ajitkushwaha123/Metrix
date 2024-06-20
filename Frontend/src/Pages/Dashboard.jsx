import React from 'react'
import Navbar from '../components/Navbar'
import BreadCrum from '../components/BreadCrum'

const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar title="Dashboard"/>
      <BreadCrum />
    </div>
  )
}

export default Dashboard
