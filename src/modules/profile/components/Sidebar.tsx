import React from "react";
import type { IUser } from "../../auth/interface/IUser";
import { useNavigate } from "react-router";
import type { TRole } from "../../../shared/types/commonTypes";

interface SidebarProps {
    data: IUser | null,

}

const Sidebar = ({ data }: SidebarProps) => {

    console.log("user", data);
    const activeRole = data?.activeRole
    console.log(activeRole);

    const navigate = useNavigate()


    if (!data) return null;
    const canAccessKyc =
        activeRole === "investor" || activeRole === "vendor";

    const handleKyvRedirect = () => {
        console.log("clicked");

        if (!canAccessKyc) {
            console.log("KYC is not available for this role");
            return;
        }

        navigate(`/${activeRole}/profile/kycVerification`);

    }
    return (
        <div className="hidden md:block md:w-64 min-h-screen bg-yellow-400 p-4">
            <h2 className="text-xl font-bold mb-6">My Account</h2>

            <div className="flex flex-col gap-3">
                <button className="text-left p-3 hover:bg-gray-200 rounded">
                    My Profile
                </button>

                {(data.activeRole === "investor" || data.activeRole === "vendor") && (
                    <button onClick={() => handleKyvRedirect()} className="text-left p-3 hover:bg-gray-200 rounded">
                        KYC Verification
                    </button>
                )}

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
    );
};

export default Sidebar;