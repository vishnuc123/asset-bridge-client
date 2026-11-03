import React from 'react'

const AdminSideBar = () => {
    return (
        <aside className='flex items-center h-screen p-5 bg-gray-100 rounded-r-full'>
            <nav className=''>
                <ul className=' space-y-10'>
                    <li><a className='bg-blue-200 text-xl font-semibold p-2 rounded-2xl hover:bg-blue-500' href="#">Dashboard</a></li>
                    <li><a className='bg-blue-200 text-xl font-semibold p-2 rounded-2xl hover:bg-blue-500' href="#">Analytics</a></li>
                    <li><a className='bg-blue-200 text-xl font-semibold p-2 rounded-2xl hover:bg-blue-500' href="#">Customers</a></li>
                    <li><a className='bg-blue-200 text-xl font-semibold p-2 rounded-2xl hover:bg-blue-500' href="#">Settings</a></li>
                </ul>
            </nav>
        </aside>

    )
}

export default AdminSideBar
