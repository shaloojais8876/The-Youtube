import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
       <Outlet />  {/* Children are getting render inside my Outlet*/}
    </div>
  )
}

export default Body;
