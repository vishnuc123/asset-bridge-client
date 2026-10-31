import type { TRole } from "../../../shared/types/commonTypes"

type TNavbarLink = {
  label: string,
  path: string,

}

export const navbarLinks: Record<TRole, TNavbarLink[]> = {
  user: [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Bookings",
      path: "/bookings"
    }
  ],

  vendor: [
    {
      label: "Home",
      path: "/vendor"
    },
    {
      label: "My Hotels",
      path: "/vendor/hotels"
    }
  ],

  investor: [
    {
      label: "Home",
      path: "/investor"
    },
    {
      label: "Investments",
      path: "/investor/investments"
    }
  ],
  admin: [
    { label: "Dashboard", path: "/admin" },
    { label: "Users", path: "/admin/users" },
    { label: "KYC Verification", path: "/admin/kyc" },
  ],
}