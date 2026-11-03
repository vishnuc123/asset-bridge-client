import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import { FiltersAndSearch } from '../components/FiltersAndSearch'
import { type IFilterState } from '../../../shared/interface/CommonInterfaces/IFilterState'

const UserListingPage = () => {
    const [filter, setFilter] = useState<IFilterState>({
        search: "",
        status: "",
        category: "",
        sortBy: ""
    })
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    const handleSearch = () => {
        setIsSearchClicked(true)
    }
    console.log("filters Value", filter)
    return (
        <div className='w-full mt-10 pt-10'>
            <FiltersAndSearch filters={filter} setFilters={setFilter} onSearch={handleSearch} />
            <UserTable filters={filter} isSearchClicked={isSearchClicked} />
        </div>
    )
}

export default UserListingPage
