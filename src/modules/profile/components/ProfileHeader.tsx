import React, { useDebugValue } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../app/store/store'
import type { IUser } from '../../auth/interface/IUser'

const ProfileHeader = ({ userDetails }: { userDetails: IUser | null }) => {
    // const user = useSelector((s: RootState) => s.auth.user)
    console.log("profileheader:", userDetails)
    if(!userDetails)return null
    const isProfileIncomplete =
        !userDetails.address?.trim() ||
        !userDetails.nationality?.trim() ||
        !userDetails.gender?.trim();
    !userDetails.dob?.trim();

    return (
        <>
            {/* <div className='bg-yellow-400 w-50 h-screen'></div>
            <div className='bg-red-500 w-full h-30 absolute'></div>
            <div className='bg-green-500 w-screen h-screen'></div> */}
            <div className="w-[80%] h-50 absolute top-30 left-1/2 -translate-x-1/2 flex flex-col items-center p-2">
                <div className='bg-orange-400 w-30 h-30 mt-2 rounded-full'>
                    <img src="/logo1.png" alt="profile-image" className='w-full h-full object-contain' />
                </div>
                <div className="mt-2 text-center">
                    {/* <h1 className="text-xl font-bold">{userDetails?.email}</h1> */}
                    <h1 className='text-xl font-bold'>Welcome! {userDetails?.firstName} {userDetails?.lastName}</h1>
                </div>
                {(userDetails.activeRole === "investor" || userDetails.activeRole === "vendor") && (userDetails.kycStatus === "pending" || userDetails.kycStatus === "rejected" ? (<p className="text-red-600">Your KYC verification is {userDetails.kycStatus}.</p>) : userDetails.kycStatus !== "verified" ? (<p className="text-yellow-400">Please verify your KYC.</p>) : null)}
                {isProfileIncomplete ? (<p className="text-yellow-600">Update Required: Please complete your profile.</p>) : (<p className="text-green-600">Profile Completed</p>)}
            </div>

        </>



    )
}

export default ProfileHeader
