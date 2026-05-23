import { useMutation } from "@tanstack/react-query"
import { logout } from "../services/dashboard-services"
import { clearUser } from "../../auth/store/auth-slice"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../../app/store/store"

export const useLogout = () => {
    const dispatch = useDispatch<AppDispatch>()
    return useMutation({
        mutationFn:() => logout(),
        onSuccess:(res) => {
            console.log("res from logout",res)
            if(res.success){
                dispatch(clearUser())
            }
        },
        onError:(err) => {
            console.log("err from logout",err)
        }
    })
}