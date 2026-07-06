import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserRoutes from './app/routes/routes/user-routes'
import { ToastContainer } from 'react-toastify';
import useAuthInit from './modules/auth/hooks/useAuthInit';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const { isLoading } = useAuthInit();
  if (isLoading) {
    return <div>loading...</div>
  }
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
        <Router>
          <ToastContainer position='top-center' />
          <Routes>
            <Route path='/*' element={<UserRoutes />} />
           
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
