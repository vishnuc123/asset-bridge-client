import axios from "axios"
import type { userSignupData } from "../validations/signup-schema"

export const signUp = async (data:userSignupData) => {
    const res = await axios.post("api/auth/v1/signup",data)
    return res.data
}