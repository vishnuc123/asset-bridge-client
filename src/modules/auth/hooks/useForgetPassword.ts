import { useMutation } from "@tanstack/react-query"
import { forgetPassword } from "../services/auth-services"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import { toast } from "react-toastify"

export const useForgetPassword = () => {
    return useMutation({
        mutationFn:(email:string) => forgetPassword(email),
        onSuccess:(res) => {
            console.log("res from forgetPassword",res)
            toast.success(res.message)
        },
        onError:(err:ICustomError) => {
            toast.error(err.response.data.message || "something went wrong")
            console.log("error while getting forgetPassword",err)
        }
    })
}