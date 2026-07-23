import React from 'react'
import type { RootState } from '../../../app/store/store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import { ProfileLinks } from '../../../modules/profile/config/profile-config'

const ProfileALinks = () => {
    const activeRole = useSelector((s:RootState) => s.auth.user?.activeRole)
    const links = ProfileLinks[activeRole]
    // console.log("links of profile",links);
    
  return (
    <div>
        {links.map((link:string)=>(
          <input type={link.type} />
        ))}
        <h1>profile</h1>
    </div>
  )
}

export default ProfileALinks
