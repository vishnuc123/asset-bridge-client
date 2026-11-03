import axiosInstance from "../../../infrastructure/axios-instance"
import { env } from "../../../shared/constants/env"
import type { IFilterState } from "../../../shared/interface/CommonInterfaces/IFilterState"

export const GetUsers = async (pageNumber: number, limit: number, filters: IFilterState) => {
    const res = await axiosInstance.get(`${env.SERVER_URL}api/v1/admin/getUsers?page=${pageNumber}&limit=${limit}&filter=${JSON.stringify(filters)}`)
    return res.data
}