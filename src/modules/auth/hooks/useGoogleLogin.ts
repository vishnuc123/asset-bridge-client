import { useMutation } from "@tanstack/react-query"
import type { TGoogleLoginValues } from "../types/authTypes"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import { googleLogin } from "../services/auth-services"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../app/store/store"
import { setUser } from "../store/auth-slice"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export const useGoogleLogin = () => {
    const user = useSelector((s:RootState) => s.auth)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (values: TGoogleLoginValues) => googleLogin(values),
        onSuccess: (res) => {
            if (res.success) {
                dispatch(setUser(res.data))
                navigate("/dashboard")
                toast.success("user loginned succesffulyy")
                
            }
            console.log("res from google data", res)
        },
        onError: (err: ICustomError) => {
            console.log(err.response.data.message || "something went wrong")
            toast.error(err.response.data.message || "error check server for info")
        }
    })
}