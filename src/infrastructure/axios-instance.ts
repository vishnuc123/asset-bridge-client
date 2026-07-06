// import axios, { AxiosError } from "axios";
// import type { ICustomError } from "../shared/interface/ICustomError";
// import { refreash } from "../modules/auth/services/auth-services";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:5000',
//     timeout: 10000,
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
// axiosInstance.interceptors.response.use(
//     (res) => res,
//     async (err: AxiosError<ICustomError>) => {
//         const STATUS_CODE = err.response?.status
//         const RESPONSE_MESSAGE = err.response?.data?.message
//         console.log("res after accessToken",STATUS_CODE,RESPONSE_MESSAGE);
        

//         let isRefreashRate:number = 0

//         if (STATUS_CODE === 401 && RESPONSE_MESSAGE === "Access token expired") {
//             console.log("redirect to refreash")
//             try {
//                 const res =await refreash()
                
//                 if(res.message === "Invalid Refresh Token"){
//                     console.log("res",res);
//                     return axiosInstance(err.config)
//                 }
                
//             } catch (error:any) {
//                 window.location.href = "/login"
//                 console.log("error while getting data from backend",err)
//             }
//             window.location.href = "/login"
//         }
//         return Promise.reject(err)
//     }
// )
// export default axiosInstance
import axios, { AxiosError } from "axios";
import type { ICustomError } from "../shared/interface/ICustomError";
import { refreash } from "../modules/auth/services/auth-services";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,

    async (err: AxiosError<ICustomError>) => {
        const status = err.response?.status;
        const message = err.response?.data?.message;

        console.log(status, message);

        const originalRequest = err.config;

        if (
            status === 401 &&
            message === "Access token expired" &&
            originalRequest
        ) {
            try {
                console.log("Refreshing token...");

                await refreash();

                console.log("Token refreshed successfully");

                // Retry the original request
                return axiosInstance(originalRequest);
            } catch (error) {
                console.log("Refresh failed");

                window.location.href = "/login";
                return Promise.reject(error);
            }
        }

        return Promise.reject(err);
    }
);

export default axiosInstance;