
import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router'
import { navbarLinks } from '../../../modules/dashboard/config/navbar-config'
import type { RootState } from '../../../app/store/store'

const NavbarALinks = () => {
    const activeRole = useSelector((s: RootState) => s?.auth?.user?.activeRole)
    // console.log("activeRole", activeRole)

    const links = navbarLinks[activeRole]
    return (
        <nav className='flex items-center gap-6'>
            {links.map((link:string) => (
                <Link key={link.path} to={link.path}
                    className='text-white font-medium hover:text-black transition-colors duration-200'>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavbarALinks