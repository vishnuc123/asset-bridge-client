import React from 'react'
import ForgetPasswordComp from '../components/forget-password'
import { useForgetPassword } from '../hooks/useForgetPassword'
import { email } from 'zod'

const ForgetPasswordPage = () => {
  const { mutate: forgetPassword, isPending: forgetPasswordLoading } = useForgetPassword()
  const handleSubmit = (data: string) => {
    forgetPassword(data)
  }
  return (
    <div>
      <ForgetPasswordComp sendData={handleSubmit} />
    </div>
  )
}

export default ForgetPasswordPage
