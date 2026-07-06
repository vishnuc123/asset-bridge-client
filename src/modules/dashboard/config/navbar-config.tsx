import type { TRole } from "../../../shared/types/commonTypes"

type TNavbarLink = {
  label: string,
  path: string,

}

export const navbarLinks: Record<Exclude<TRole, "admin">, TNavbarLink[]> = {
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
  ]
}