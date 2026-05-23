import React from 'react'
import Login from '../components/login'
import { useLogin } from '../hooks/useLogin'

const LoginPage = () => {
  const { mutate: LoginUser, isPending: LoginLoading } = useLogin()

  return (
    <div>
      <Login onSubmit={LoginUser} loading={LoginLoading} />
    </div>
  )
}

export default LoginPage
