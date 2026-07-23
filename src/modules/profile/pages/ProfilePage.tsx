import React from 'react'
import ProfileForm from '../../../shared/components/profile/Profile'
import ProfileHeader from '../components/ProfileHeader'

const ProfilePage = () => {
  return (
    // <div className='flex'>
    //   <ProfileHeader />
    //   <ProfileForm />
    // </div>
    <div className="flex">
      <div className="hidden md:block md:w-64 min-h-screen bg-yellow-400"></div>

      <div className="flex-1 justify-center">
        <ProfileHeader />

        <div className="p-8">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
