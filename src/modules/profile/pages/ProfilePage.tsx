import React from 'react'
import ProfileForm from '../../../shared/components/profile/Profile'
import ProfileHeader from '../components/ProfileHeader'
import PersonalDetailsCard from '../components/PersonalDetailsCard'
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store/store';
import Sidebar from '../components/sideBar';

const ProfilePage = () => {
  const user = useSelector((s: RootState) => s.auth.user)
  console.log("profilepage user",user);
  
  return (
    <div className="flex">
      <Sidebar data={user}/>

      <div className="flex-1">
        <ProfileHeader userDetails={user}/>

        <div className="p-8 mt-80">
          <PersonalDetailsCard data={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;