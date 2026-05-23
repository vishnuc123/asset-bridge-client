import { useMutation } from "@tanstack/react-query"
import { resetPassword } from "../services/auth-services"
import type { TResetData } from "../../../shared/types/commonTypes"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

export const useResetPassword = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn:(values:TResetData) => resetPassword(values),
        onSuccess:(res) => {
            toast.success("password reset successfullyy,Re login")
            console.log("Res from the reset password",res)
            navigate("/login")
        },
        onError:(err:ICustomError) => {
            toast.error(err.response.data.message || "something went wrong")
            console.log("error from teh reset password",err)
        }
    })
}