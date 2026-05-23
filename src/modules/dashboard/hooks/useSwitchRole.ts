import { useMutation } from "@tanstack/react-query"
import { switchRole } from "../services/dashboard-services"

export const useSwtichRole = () => {
    return useMutation({
        mutationFn: (role:string) => switchRole(role),
        onSuccess: (res) => {
            console.log("res", res)
        },
        onError: (err) => {
            console.log("err", err)
        }
    })
}