import { useMutation } from "@tanstack/react-query"
import type { userSignupData } from "../validations/signup-schema"
import { signUp } from "../services/auth-services"
import { type ICustomError } from "../../../shared/interface/ICustomError"
import { toast } from "react-toastify"

export const useSignup = (options?:{afterSuccess:(userId:string) => void}) => {
    return useMutation({
        mutationFn: (values: userSignupData) => signUp(values),
        onSuccess: (res) => {
            console.log("result from backend", res);
            toast.success("data send")
            const userId = res.data
            options?.afterSuccess(userId);
        },
        onError: (err: ICustomError) => {
            toast.error(err?.response?.data?.message || "something went wrong")
            console.log(err?.response?.data?.message)
        }
    })
}