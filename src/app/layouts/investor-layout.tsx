import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/components/navbar/navbar'

const InvestorLayout = () => {
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

export default InvestorLayout
