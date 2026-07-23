import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../app/store/store'

const ProfileHeader = () => {
    const user = useSelector((s: RootState) => s.auth.user)
    return (
        <>
            {/* <div className='bg-yellow-400 w-50 h-screen'></div>
            <div className='bg-red-500 w-full h-30 absolute'></div>
            <div className='bg-green-500 w-screen h-screen'></div> */}
            <div className="w-[80%] h-50 bg-blue-600 absolute top-30 left-1/2 -translate-x-1/2 flex flex-col items-center p-2">                <div className='bg-orange-400 w-30 h-30 mt-2 rounded-full'>
                <img src="/logo1.png" alt="profile-image" className='w-full h-full object-contain' />
            </div>
                <div className="mt-2 text-center">
                    <h1 className="text-xl font-bold">{user?.email}</h1>
                    <p>{user?.firstName} {user?.lastName}</p>
                </div>
            </div>

        </>



    )
}

export default ProfileHeader
