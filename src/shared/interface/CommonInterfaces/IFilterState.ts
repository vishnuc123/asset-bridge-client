export interface IFilterState {
    search: string,
    status: string,
    category: string,
    sortBy: string
}

export interface IFilterAndSearchProps {
    filters: IFilterState,
    setFilters: React.Dispatch<React.SetStateAction<IFilterState>>,
    onSearch : () => void
}

// export interface IUserTableProps{
//     filters:IFilterState,
//     isLoading:Boolean,
//     isError:Boolean,
//     data:
// }