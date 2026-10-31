import React, { useEffect, useState } from 'react'
import { useGetUser } from '../hooks/useGetUser'

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
  // {
  //   key: "isBlocked",
  //   label: "isblocked"
  // },

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
    <div >
      user table
      <div className='flex justify-start pt-10 mt-10 ml-5'>
        <table className='w-full h-screen'>
          <thead className='bg-gray-50'>
            <tr>
              {Headers.map((head, index) => (
                <th key={index} className='p-3 font-semibold text-xl tracking-wide'>
                  <span>{head.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.userDetails.map((row, index) => (
              <tr key={index}>
                {Headers.map((header, index) => {
                  return <td key={index}>{row[header.key]}</td>

                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center p-3 text-2xl text-center gap-5'>
        <button className='bg-gray-200 hover:bg-red-300'>prev</button>
        {result.pageDetails.totalDocuments > 10 ? Array.from({ length: Math.ceil(result.pageDetails.totalDocuments / LIMIT) }, (_, i) => <button onClick={() => setCurrentPage(i + 1)} className='bg-gray-200 hover:bg-green-300' key={i}>{i + 1}</button>) : null}
        <button className='bg-gray-200 hover:bg-green-300'>next</button>
      </div>
    </div>
  )
}

export default UserTable
