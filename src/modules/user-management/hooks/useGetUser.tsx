import { useMutation, useQuery } from "@tanstack/react-query"
import { GetUsers } from "../services/UserServices"

export const useGetUser = (pageNumber:number,limit:number) => {
    return useQuery({
        queryKey: ["AllUsers",pageNumber,limit],
        queryFn: () => GetUsers(pageNumber,limit),
    })
}
