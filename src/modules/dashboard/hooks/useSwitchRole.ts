import { useMutation } from "@tanstack/react-query"
import { switchRole } from "../services/dashboard-services"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../../app/store/store"
import { setUser } from "../../auth/store/auth-slice"
import { useNavigate } from "react-router"
import { RoleRoute } from "../../../app/config/centralApp"

export const useSwitchRole = () => {

    const dispatch =
        useDispatch<AppDispatch>()
        const navigate = useNavigate()

    return useMutation({

        mutationFn: (role: string) =>
            switchRole(role),

        onSuccess: (res) => {

            console.log("res", res)

            const user = res.data

            if (user) {

                dispatch(setUser(user))
                navigate(RoleRoute[user.activeRole])

            }
        },

        onError: (err) => {
            console.log("err", err)
        }
    })
}