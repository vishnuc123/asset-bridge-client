import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../app/store/store'
import { PiUserSwitchBold } from "react-icons/pi";
import { useSwitchRole } from '../hooks/useSwitchRole';

const RoleDropDown = () => {

    const user = useSelector((s: RootState) => s.auth.user)

    const {
        mutate: switchRole,
        isPending: switchRoleLoading,
        variables
    } = useSwitchRole()

    return (
        <div className="relative inline-block group">

            <button
                disabled={switchRoleLoading}
                className="px-4 py-2 bg-blue-950 text-white rounded-lg capitalize disabled:opacity-50"
            >
                <PiUserSwitchBold />
            </button>

            <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">

                {user?.roles?.filter((role) => role !== user?.activeRole)
                    .map((role) => {

                        const isCurrentLoadingRole =
                            switchRoleLoading && variables === role

                        return (
                            <button
                                key={role}
                                disabled={switchRoleLoading}
                                onClick={() => {
                                    console.log("Sending role to backend:", role)
                                    switchRole(role)
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-200 disabled:opacity-50"
                            >
                                {
                                    isCurrentLoadingRole
                                        ? `Switching to ${role}...`
                                        : `Switch to ${role}`
                                }
                            </button>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default RoleDropDown