import axiosInstance from "../../../infrastructure/axios-instance";
import { env } from "../../../shared/constants/env";
import type { TKycUploadValues } from "../types/kycTypes";


export const KycuploadFile = async (data: TKycUploadValues) => {
    const res = await axiosInstance.post(`${env.SERVER_URL}api/v1/user/account/verifyKyc`, data)
    return res.data
}
