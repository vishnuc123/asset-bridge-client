import React from 'react'
import Navbar from '../../modules/dashboard/components/navbar'
import { Outlet } from 'react-router'

const VendorLayout = () => {
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

export default VendorLayout
