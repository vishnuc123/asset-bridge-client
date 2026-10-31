import axiosInstance from "../../../infrastructure/axios-instance"
import { env } from "../../../shared/constants/env"

export const GetUsers = async  (pageNumber:number,limit:number) => {
    const res = await axiosInstance.get(`${env.SERVER_URL}api/v1/admin/getUsers?page=${pageNumber}&limit=${limit}`)
    return res.data
}