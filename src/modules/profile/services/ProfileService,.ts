import axiosInstance from "../../../infrastructure/axios-instance"
import { env } from "../../../shared/constants/env"

export const updateProfile = async (data: string) => {
    const res = await axiosInstance.patch(`${env.SERVER_URL}api/v1/user/account/updateProfile`, data)
    return res.data
}