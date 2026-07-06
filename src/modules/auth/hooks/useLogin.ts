import { useMutation } from "@tanstack/react-query"
import type { LoginData } from "../validations/login-schema"
import { login } from "../services/auth-services"
import { toast } from "react-toastify"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../../app/store/store"
import { setUser } from "../store/auth-slice"
import { useNavigate } from "react-router"

export const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (values: LoginData) => login(values),
        onSuccess: (res) => {
            console.log("result from the login", res)
            if (res.success) {

                dispatch(setUser(res.data))
                navigate('/user')
                toast.success("user loginned succesffulyy")
            }
        },
        onError: (err: ICustomError) => {
            console.log(err.response.data.message || "something went wrong")
            toast.error(err.response.data.message || "error check server for info")
        }
    })
}