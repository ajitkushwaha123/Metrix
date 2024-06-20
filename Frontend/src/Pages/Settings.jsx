import React from 'react'
import Navbar from '../components/Navbar'
import BreadCrum from '../components/BreadCrum'

const Settings = () => {
  return (
    <div>
      <Navbar title={"Settings"} />
      <BreadCrum title={"Settings"} back={"/"}/>
    </div>
  )
}

export default Settings
