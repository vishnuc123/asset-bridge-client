import React, { useDebugValue, useRef, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"; // Added for mobile menu icon toggle
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import NavbarALinks from './NavLinks';
import { useNavigate } from 'react-router';
import { useLogout } from '../../../modules/dashboard/hooks/uselogout';
import type { RootState } from '../../../app/store/store';
import RoleDropDown from '../../../modules/dashboard/components/RoleDropDown';

const Navbar = () => {
    const [settingIsOpen, setSettingIsOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { mutate: logout, isPending: logoutPending } = useLogout()
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()
    const user = useSelector((s: RootState) => s.auth)
    // console.log("redux state", user)

    // const { scrollY } = useScroll()
    // useMotionValueEvent(scrollY, "change", () => {

    //     setScrolled(true)
    //     if (timeoutRef.current !== null) {
    //         clearTimeout(timeoutRef.current)
    //     }

    //     timeoutRef.current = setTimeout(() => {
    //         setScrolled(false)
    //     }, 200);
    // })


    function handleProfileRedirect() {
        navigate(`/${user.user?.activeRole}/profile`)
        console.log("user in profile", user);

    }
    return (
        <div className=' h-16 md:h-20  fixed top-5 left-1/2 -translate-x-1/2
w-[95%] md:w-[90%] lg:w-[80%] flex justify-center items-center backdrop-blur-xl rounded-full shadow-md z-999'>
            <motion.nav
                initial={{ y: -100, opacity: 0, scale: 1.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`
                    fixed top-0 left-0 w-full z-50
                    flex items-center justify-between
                    px-10 py-5

                    duration-500

                    ${scrolled
                        ? "bg-transparent text-white backdrop-blur-3xl"
                        : "bg-white/50 text-black backdrop-blur-md rounded-full"}
                `}

            >
                <div className='text-xl md:text-2xl flex items-center gap-1'>
                    <img src="/logo1.png" className='w-10 md:w-16 object-cover mix-blend-plus-darker' alt="logo" />
                    <h1 className='font-bold tracking-tight text-[0px]'>ASSET BRIDGE</h1>
                </div>

                {/* <ul className='hidden md:flex gap-8 font-medium'>
                    <li><a href="#" className="font-medium tracking-tight">Home</a></li>
                    <li><a href="#" className="font-medium tracking-tight">Things To Do</a></li>
                    <li><a href="#" className="font-medium tracking-tight">Events</a></li>
                </ul> */}
                <NavbarALinks />

                <div className="flex gap-2 justify-center items-center">

                    <RoleDropDown />

                    <button className="p-2 bg-gray-100 rounded-full text-sm md:text-base hidden xs:block">👤</button>

                    <div className="relative inline-block text-left">
                        <button
                            onClick={() => setSettingIsOpen(!settingIsOpen)}
                            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition text-sm md:text-base"
                        >
                            ⚙️
                        </button>

                        {settingIsOpen && (
                            <div className="absolute right-0a mt-2 w-40 md:w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-[1000]">
                                <button className='w-full text-left px-4 py-3 hover:bg-gray-100 transition text-sm md:text-base'
                                    onClick={() => handleProfileRedirect()}
                                >
                                    Profile
                                </button>
                                <button
                                    onClick={() => logout()}
                                    disabled={logoutPending}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 transition text-sm md:text-base">
                                    {logoutPending ? 'Logging out...' : 'Logout'}
                                </button>

                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                        className="p-2 text-2xl md:hidden text-blue-950 focus:outline-none"
                    >
                        {menuIsOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </motion.nav>

            {menuIsOpen && (
                <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-[998]">
                    <a href="#" onClick={() => setMenuIsOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-950">home</a>
                    <a href="#" onClick={() => setMenuIsOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-950">home</a>
                    <a href="#" onClick={() => setMenuIsOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-950">home</a>
                    <button className="px-4 py-1.5 bg-gray-100 rounded-full text-sm xs:hidden flex items-center gap-2">👤 Profile</button>
                </div>
            )}
        </div>
    )
}

export default Navbar
