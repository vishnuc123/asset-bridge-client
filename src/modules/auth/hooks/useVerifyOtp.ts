import { useMutation } from "@tanstack/react-query"
import { VerifyOtp } from "../services/auth-services"
import { toast } from "react-toastify"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import type { TOtpData } from "../../../shared/types/commonTypes"
import { useNavigate } from "react-router"

export const useVerifyOtp = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (values: TOtpData) => VerifyOtp(values),
        onSuccess: (res) => {
            console.log("result from backend", res);
            navigate("/login")
            toast.success("user registered successfully")
        },
        onError: (err: ICustomError) => {
            toast.error(err?.response?.data?.message || "something went wrong")
            console.log(err.response)
        }
    })
}