import React, { useEffect, useState } from 'react'
import { useGetUser } from '../hooks/useGetUser'
import { FiEdit, FiEdit2 } from 'react-icons/fi'
import { FiltersAndSearch } from './FiltersAndSearch'

const Headers = [
  {
    key: "firstName",
    label: "firstname"
  },
  {
    key: "lastName",
    label: "lastname"
  },
  {
    key: "email",
    label: "email"
  },
  {
    key: "kycStatus",
    label: "kycstatus"
  },
  {
    key: "status",
    label: "userstatus"
  },
  {
    key: "roles",
    label: "roles"
  },
  {
    key: "activeRole",
    label: "activerole"
  },
  {
    key: "isBlocked",
    label: "isblocked"
  },
  {
    key: "actions",
    label: "actions"
  }

]

// const TableData = [
//   {}
// ]

const UserTable = () => {
  const PAGE = 1
  const LIMIT = 10
  const [currentPage, setCurrentPage] = useState(1)
  const { isLoading, isError, isPending, data } = useGetUser(currentPage, LIMIT)
  if (isLoading) return <>loading userss...</>
  if (isError) return <>failed to fetch users</>
  // const usersData = data.data || []
  const result = data.data
  console.log("data", result)


  // console.log("all users data from the backend", data)
  console.log("currentpage number", currentPage)


  return (
    <div className='bg-gray-10'>
      <div className='w-full'>
        <br></br>
        <table className='w-full'>
          <thead className='bg-gray-50 text-center'>
            <tr>
              {Headers.map((head, index) => (
                <th key={head.key} className='p-3 font-semibold text-xl tracking-wide'>
                  <span>{head.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.userDetails.map((row, index) => (
              <tr key={index} className='bg-slate-100 hover:bg-slate-300'>
                {Headers.map((header, index) => {
                  const renderValue = row[header.key]
                  if (typeof renderValue === "boolean") {
                    return <td key={header.key} className='text-center border-b-1 p-3'>{renderValue ? <span className=' bg-rose-100 text-red-500'>Blocked</span> : <span className='bg-emerald-100 text-green-500'>unblocked</span>}</td>
                  } else if (header.key === "actions") {
                    return (

                      <td key={header.key} className='text-center border-b-1 p-3'> <button className='text-black-500 hover:text-white hover:bg-black hover:scale-120 p-1 transition-colors'>
                        <FiEdit className='w-5 h-5' />View And Edit
                      </button></td>


                    )
                  } else {
                    return <td key={header.key} className='text-center border-b-1 p-3'>{renderValue}</td>
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center p-3 text-2xl text-center gap-5'>
        <button className='bg-gray-200 hover:bg-red-300'>prev</button>
        {result.pageDetails.totalDocuments > 10 ? Array.from({ length: Math.ceil(result.pageDetails.totalDocuments / LIMIT) }, (_, i) => <button onClick={() => setCurrentPage(i + 1)} className='bg-gray-200 hover:bg-green-300 w-10 rounded-lg' key={i}>{i + 1}</button>) : null}
        <button className='bg-gray-200 hover:bg-green-300'>next</button>
      </div>
    </div>
  )
}

export default UserTable
