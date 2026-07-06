import React, { useState } from 'react'
import Signup from '../components/signup'
import { useSignup } from '../hooks/useSignup'
import OtpModal from '../components/otp-modal'
import { useVerifyOtp } from '../hooks/useVerifyOtp'

const SignupPage = () => {
    const [isOtpModalOpen, setOtpModalOpen] = useState<boolean>(false)
    const [userId, setUserId] = useState<string>("")
    const [otp, setOtp] = useState<string>("")

    const { mutate: signUpUser, isPending: signUpLoading } = useSignup({
        afterSuccess: (userId: string) => {
            setUserId(userId)
            setOtpModalOpen(true)
        }
    })
    const { mutate: verifyOtp, isPending: isOtpLoading } = useVerifyOtp()
    const handleVerifyOtp = (otpValues:string) => {
        verifyOtp({
            userId,
            otp:otpValues
        })
    }

    const handleOtp = (data: string) => {
        console.log(otp)
        setOtp(data)
    }

    return (
        <div>
            <Signup onSubmit={signUpUser} loading={signUpLoading} />
            {isOtpModalOpen ? <OtpModal onOtpChange={handleOtp} onSubmit={handleVerifyOtp} loading={isOtpLoading} /> : <></>}

        </div>
    )
}


export default SignupPage