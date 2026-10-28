import { useMutation } from "@tanstack/react-query"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import { toast } from "react-toastify"
import { updateProfile } from "../services/ProfileService,"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../../app/store/store"
import { setUser } from "../../auth/store/auth-slice"

export const useUpdateProfile = () => {
    const dispatch = useDispatch<AppDispatch>()
    return useMutation({
        mutationFn: (value:{label:string,field:string,value:string}) => updateProfile(value),
        onSuccess: (res) => {
            console.log("result from update",res)
            dispatch(setUser(res.data))        
            toast.success("user updated")

        },
         onError: (err: ICustomError) => {
            console.log(err.response.data.message || "something went wrong")
            toast.error(err.response.data.message || "error check server for info")
        }
    })
}