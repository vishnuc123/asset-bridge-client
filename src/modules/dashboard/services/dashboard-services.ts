import axios from "axios"
import axiosInstance from "../../../infrastructure/axios-instance"
import { env } from "../../../shared/constants/env"

export const logout = async () => {
    const res = await axiosInstance.post(`${env.SERVER_URL}api/v1/user/logout`)
    return res.data
}
export const switchRole = async (role:string) => {
    const res = await axiosInstance.post(`${env.SERVER_URL}api/v1/user/switch-role`,{role})
    return res.data
}