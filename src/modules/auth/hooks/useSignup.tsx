import { useMutation } from "@tanstack/react-query"
import type { userSignupData } from "../validations/signup-schema"
import { signUp } from "../services/signupServices"

export const useSignup = () => {
    return useMutation({
        mutationFn: (values: userSignupData) => signUp(values),
        onSuccess:(res) => {
            
        }
    })
}