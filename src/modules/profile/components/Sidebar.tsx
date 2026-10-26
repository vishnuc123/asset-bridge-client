import React from 'react'

const Sidebar = () => {
    return (
        <div className="hidden md:block md:w-64 min-h-screen bg-yellow-400 p-4 ">
            <h2 className="text-xl font-bold mb-6">My Account</h2>

            <div className="flex flex-col gap-3 ">
                <button className="text-left p-3 hover:bg-gray-200 rounded">
                    My Profile
                </button>

                <button className="text-left p-3 hover:bg-gray-200 rounded">
                    KYC Verification
                </button>

                <button className="text-left p-3 hover:bg-gray-200 rounded">
                    Switch Role
                </button>

                <button className="text-left p-3 hover:bg-gray-200 rounded">
                    Security
                </button>

                <button className="text-left p-3 hover:bg-gray-200 rounded">
                    Help & Support
                </button>
            </div>
        </div>
    )
}

export default Sidebar
