import { useMutation, useQuery } from "@tanstack/react-query"
import { GetUsers } from "../services/UserServices"
import type { IFilterState } from "../../../shared/interface/CommonInterfaces/IFilterState"

export const useGetUser = (pageNumber: number, limit: number, filters: IFilterState, enabled: boolean) => {
    return useQuery({
        queryKey: ["AllUsers", pageNumber, limit, filters],
        queryFn: () => GetUsers(pageNumber, limit, filters),
        // enabled:enabled
    })
}
