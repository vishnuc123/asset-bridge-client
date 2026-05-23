import React, { useState } from 'react'
import { useForgetPassword } from '../hooks/useForgetPassword'


type TforgetPassProps = {
    sendData:(email:string) => void
}
const ForgetPasswordComp = ({sendData} :TforgetPassProps) => {
    const [email, setEmail] = useState('')
    
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-zinc-800 flex items-center justify-center px-5'>

            <div className='w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10'>

                <div className='flex justify-center mb-6'>
                    <div className='bg-amber-400/20 p-5 rounded-full border border-amber-300/30'>
                    </div>
                </div>

                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white mb-4'>
                        Forgot Password?
                    </h1>

                    <p className='text-zinc-300 text-lg leading-relaxed'>
                        Enter your registered email address.
                        <br />
                        If your account exists, we’ll send you a secure password reset link.
                    </p>
                </div>

                {/* Input Section */}
                <div className='mt-10 flex flex-col gap-5'>

                    <div className='relative'>

                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            className='w-full h-14 rounded-2xl bg-white/5 border border-zinc-700 focus:border-indigo-500 outline-none text-white px-12 text-lg transition-all duration-300 placeholder:text-zinc-500'
                        />
                    </div>

                    <button
                        className='group h-14 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 text-black font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-amber-300/20'
                    onClick={() => sendData(email)}
                    >
                        Send Reset Link

                    </button>
                </div>

                <div className='mt-8 text-center'>
                    <p className='text-sm text-zinc-500'>
                        Make sure to check your spam folder if you don’t receive the email.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordComp