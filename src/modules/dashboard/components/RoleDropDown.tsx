import { useState } from "react";
import { useSelector } from "react-redux";
import { PiUserSwitchBold } from "react-icons/pi";

import type { RootState } from "../../../app/store/store";
import { useSwitchRole } from "../hooks/useSwitchRole";

const RoleDropDown = () => {
  // Is the dropdown open?
  const [open, setOpen] = useState(false);

  // Get user from Redux
  const user = useSelector((state: RootState) => state.auth.user);

  // Function to switch roles
  const { mutate: switchRole } = useSwitchRole();

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded bg-blue-900 text-white"
      >
        <PiUserSwitchBold />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow">
          {user?.roles
            .filter((role) => role !== user.activeRole)
            .map((role) => (
              <button
                key={role}
                onClick={() => {
                  switchRole(role); // Call backend
                  setOpen(false);   // Close dropdown
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 capitalize"
              >
                Switch to {role}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default RoleDropDown;