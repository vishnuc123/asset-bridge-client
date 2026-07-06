
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../app/store/store'
import { navbarLinks } from '../config/navbar-config'
import { Link } from 'react-router'

const NavbarALinks = () => {
    const activeRole = useSelector((s: RootState) => s?.auth?.user?.activeRole)
    // console.log("activeRole", activeRole)

    const links = navbarLinks[activeRole]
    return (
        <nav className='flex items-center gap-6'>
            {links.map((link) => (
                <Link key={link.path} to={link.path}
                    className='text-white font-medium hover:text-black transition-colors duration-200'>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavbarALinks