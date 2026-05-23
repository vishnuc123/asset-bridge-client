import axios, { AxiosError } from "axios";
import type { ICustomError } from "../shared/interface/ICustomError";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})
axiosInstance.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
        const requestUrl = err.config?.url
        if (err.response?.status === 401
            && !requestUrl?.includes('/me')
        ) {
      window.location.href = "/login"
    }
        return Promise.reject(err)
    }
)
export default axiosInstance