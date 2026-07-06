// import { Route, Routes } from 'react-router-dom'
// import SignupPage from '../../../modules/auth/pages/signup-page'
// import LoginPage from '../../../modules/auth/pages/login-page'
// import DashboardLayout from '../../layouts/dashboard'
// import UserDashboard from '../../../modules/dashboard/pages/user-dashboard'
// import ProtectedUser from '../../guards/protected-user'
// import GuestRoute from '../../guards/protected-guest'
// import ForgetPasswordPage from '../../../modules/auth/pages/forget-password-page'
// import ResetPasswordPage from '../../../modules/auth/pages/reset-page'
// import UserDashboardLayout from '../../layouts/dashboard'

// const UserRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<GuestRoute />}>

//         <Route path='/signup' element={<SignupPage />} />
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/forgetPassword' element={<ForgetPasswordPage />} />
//         <Route path='/reset-password/:token' element={<ResetPasswordPage />} />

//       </Route>

//       <Route element={<ProtectedUser />}>
//         <Route element={<UserDashboardLayout />}>
//           <Route path='/dashboard' element={<UserDashboard />} />
//         </Route>
//       </Route>
//     </Routes>
//   )
// }

// export default UserRoutes

import { Route, Routes } from 'react-router-dom'

import SignupPage from '../../../modules/auth/pages/signup-page'
import LoginPage from '../../../modules/auth/pages/login-page'

import UserDashboard from '../../../modules/dashboard/pages/user-dashboard'
import VendorDashboard from '../../../modules/dashboard/pages/vendor-dashboard'
import InvestorDashboard from '../../../modules/dashboard/pages/investor-dashboard'

import ProtectedUser from '../../guards/protected-user'
import GuestRoute from '../../guards/protected-guest'

import ForgetPasswordPage from '../../../modules/auth/pages/forget-password-page'
import ResetPasswordPage from '../../../modules/auth/pages/reset-page'

import UserDashboardLayout from '../../layouts/user-layout'
import VendorDashboardLayout from '../../layouts/vendor-layout'
import InvestorDashboardLayout from '../../layouts/investor-layout'

const UserRoutes = () => {

  return (

    <Routes>

      {/* guest routes */}
      <Route element={<GuestRoute />}>

        <Route
          path='/signup'
          element={<SignupPage />}
        />

        <Route
          path='/login'
          element={<LoginPage />}
        />

        <Route
          path='/forgetPassword'
          element={<ForgetPasswordPage />}
        />

        <Route
          path='/reset-password/:token'
          element={<ResetPasswordPage />}
        />

      </Route>

      <Route element={<ProtectedUser allowedRole="user" />}>
        <Route element={<UserDashboardLayout />}>
          <Route
            path='/dashboard'
            element={<UserDashboard />}
          />
        </Route>
      </Route>

      <Route element={<ProtectedUser allowedRole='vendor' />}>
        <Route element={<VendorDashboardLayout />}>
          <Route
            path='/vendor'
            element={<VendorDashboard />}
          />
        </Route>
      </Route>

      <Route element={<ProtectedUser allowedRole='investor' />}>
        <Route element={<InvestorDashboardLayout />}>
          <Route
            path='/investor'
            element={<InvestorDashboard />}
          />
        </Route>
      </Route>


    </Routes>
  )
}

export default UserRoutes