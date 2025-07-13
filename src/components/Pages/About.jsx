import React from 'react'
import { Outlet , Link } from 'react-router-dom'

export default function AboutUS() {
  return (
    <div className="flex flex-col text-xl text-center mt-20 gap-[40px] w-[90%] mx-auto">
      <p className="text-3xl">AboutUS</p>

      <div className="flex flex-row gap-[80px] mx-auto text-gray-600 select-none">
        <Link to="setting">Setting</Link>

        <Link to="Dashbord">Dashbord</Link>
      </div>
      <Outlet />
    </div>
  );}
