import React from 'react'
import Navbar from '../../shared/components/navbar/navbar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
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

export default AdminLayout
