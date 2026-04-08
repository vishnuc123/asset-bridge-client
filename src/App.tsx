import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router'
import UserRoutes from './app/routes/user-routes/user-routes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<UserRoutes />}/>
        {/* <Route path='/admin' element={}/>
        <Route path='/investor' element={}/>
        <Route path='/vendor' element={}/> */}
      </Routes>
    </Router>
  )
}

export default App
