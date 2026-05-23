import React from 'react'
import ResetPasswordComp from '../components/reset-password'
import { useParams } from 'react-router'
import { useResetPassword } from '../hooks/useResetPassword'
import type { TResetData } from '../../../shared/types/commonTypes'

const ResetPasswordPage = () => {

    const { token } = useParams()

    const {mutate: ResetPassword,isPending: ResetPasswordLoading } = useResetPassword()

    const handleReset = (data: TResetData) => {

        const finalData = { ...data,token}

        console.log(finalData)

        ResetPassword(finalData)
    }

    return (
        <div>
            <ResetPasswordComp sendData={handleReset} />
        </div>
    )
}

export default ResetPasswordPage