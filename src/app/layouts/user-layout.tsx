import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../modules/dashboard/components/navbar'

const UserLayout = () => {
  return (
    <div className='layout-wrapper'>
      {/* navbar */}
      <Navbar />
      <div className='layout-body'>
        {/* sidebar */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default UserLayout