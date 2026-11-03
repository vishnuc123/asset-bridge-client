import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import { FiltersAndSearch } from '../components/FiltersAndSearch'
import {type IFilterState } from '../../../shared/interface/CommonInterfaces/IFilterState'

const UserListingPage = () => {
    const [filter, setFilter] = useState<IFilterState>({
        search: "",
        status: "",
        category: "",
        sortBy: ""
    })

    console.log("filters Value", filter)
    return (
        <div className='w-full mt-10 pt-10'>
            <FiltersAndSearch filters={filter} setFilters={setFilter} />
            <UserTable />
        </div>
    )
}

export default UserListingPage
