import { useEffect, useState } from "react"
import type { IFilterAndSearchProps, IFilterState } from "../../../shared/interface/CommonInterfaces/IFilterState"
import { useDebounce } from "../../../shared/Hooks/useDebounce"

export const FiltersAndSearch = ({ filters, setFilters, onSearch }: IFilterAndSearchProps) => {
    const [searchTerm, setSearchTerm] = useState(filters.search ?? "")
    const debouncedValue = useDebounce(searchTerm, 500)
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            search: debouncedValue
        }));
    }, [debouncedValue, setFilters])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        if (name === 'search') {
            setSearchTerm(value);
        } else {
            setFilters((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }
    return (
        <div className='w-full bg-amber-500 flex gap-4 p-4'>

            <input
                type='text'
                name="search"
                className='border rounded-full px-3 py-3 flex-1 bg-white'
                value={searchTerm}
                onChange={handleChange}
                onClick={onSearch}
                placeholder='Search'
            />
            <button className="rounded-full p-4 bg-gray-300 hover:bg-gray-500">search</button>

            <select name="status" value={filters.status ?? ""} onChange={handleChange} className="border rounded-full px-3 py-2 bg-white">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="blocked">Blocked</option>
            </select>

            <select name="category" value={filters.category ?? ""} onChange={handleChange} className="border rounded-full px-3 py-2 bg-white">
                <option value="">All Categories</option>
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
                <option value="investor">Investor</option>
            </select>

            <select name="sortBy" value={filters.sortBy ?? ""} onChange={handleChange} className="border rounded-full px-3 bg-white">
                <option value="">Sort By</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
            </select>
        </div>
    )
}