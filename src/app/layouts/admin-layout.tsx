// import React from 'react'
// import Navbar from '../../shared/components/navbar/navbar'
// import { Outlet } from 'react-router'
// import AdminSideBar from '../../modules/dashboard/components/sidebar/AdminSideBar'

import { Outlet } from "react-router"
import AdminSideBar from "../../modules/dashboard/components/sidebar/AdminSideBar"
import Navbar from "../../shared/components/navbar/navbar"

// const AdminLayout = () => {
//     return (
//         <div className='layout-wrapper'>
//             {/* navbar */}
//             <Navbar />
//             <div className='layout-body flex flex-row flex-1' >
//                 {/* sidebar */}
//                 <aside className="w-64 shrink-0 h-full">
//                     <AdminSideBar />
//                 </aside>
//                 <main className='flex-1 p-6'>
//                     <Outlet />
//                 </main>
//             </div>
//         </div>
//     )
// }

// export default AdminLayout
const AdminLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>

            <Navbar />

            <div className='flex flex-1 min-h-0'>

                <aside className="w-64 shrink-0">
                    <AdminSideBar />
                </aside>

                <main className='flex-1 min-w-0 p-6'>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}
export default AdminLayout