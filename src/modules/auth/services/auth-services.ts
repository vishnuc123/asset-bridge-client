import axios from "axios"
import type { userSignupData } from "../validations/signup-schema"
import { env } from "../../../shared/constants/env"
import type { TOtpData, TResetData } from "../../../shared/types/commonTypes"
import { data } from "react-router"
import type { LoginData } from "../validations/login-schema"
import axiosInstance from "../../../infrastructure/axios-instance"
import type { TGoogleLoginValues } from "../types/authTypes"

// v1 remove

export const signUp = async (data:userSignupData) => {
    const res = await axios.post(`${env.SERVER_URL}api/v1/user/signup`,data)
    return res.data
}

export const VerifyOtp = async (data:TOtpData) => {
    const res = await axios.post(`${env.SERVER_URL}api/v1/user/verify-otp`,data)
    return res.data
}


export const login = async (data:LoginData) => {
    const res = await axiosInstance.post(`${env.SERVER_URL}api/v1/user/login`,data)
    return res.data
}

export const refreash = async () => {
    const res = await axiosInstance.get(`${env.SERVER_URL}api/v1/user/refresh`)
    console.log("res.data from refreash",res.data)
    return res.data
}

export const forgetPassword = async (data:string) => {
    const res = await axios.post(`${env.SERVER_URL}api/v1/user/forget-password`,{email:data})
    return res.data
}

export const resetPassword = async (data:TResetData) => {
    const res = await axios.post(`${env.SERVER_URL}api/v1/user/reset-password`,data)
    return res.data
}

export const googleLogin =  async (data:TGoogleLoginValues) => {
    const res = await axiosInstance.post(`${env.SERVER_URL}api/v1/user/google-login`,data)
    return res.data
}

export const ResendOtp = async (userid:string) => {
    const res = await axios.post(`${env.SERVER_URL}api/v1/user/resend-otp`,{userid})
    return res.data
}