import React from 'react'
import { Route, Routes } from 'react-router'
import Signup from '../../../modules/auth/components/signup'

const UserRoutes = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default UserRoutes
