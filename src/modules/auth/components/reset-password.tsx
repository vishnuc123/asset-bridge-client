import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPass, type resetData } from '../validations/reset-schema'
import type { TResetData } from '../../../shared/types/commonTypes'

type TresetPasswordProps = {
    sendData: (data: TResetData) => void
}

const ResetPasswordComp = ({ sendData }: TresetPasswordProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<resetData>({
        resolver: zodResolver(resetPass)
    })

    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-5'>

            <div className='w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl'>

                <h1 className='text-4xl font-bold text-white mb-3 text-center'>
                    Reset Password
                </h1>

                <p className='text-zinc-400 text-center mb-10'>
                    Enter your new password below.
                </p>

                <form
                    onSubmit={handleSubmit(sendData)}
                    className='flex flex-col gap-6'
                >

                    <div>
                        <label className='text-zinc-300 mb-2 block'>
                            New Password
                        </label>

                        <input
                            {...register("newPassword")}
                            type="password"
                            placeholder='Enter new password'
                            className='w-full h-14 rounded-2xl bg-zinc-800 border border-zinc-700 text-white px-5 outline-none focus:border-indigo-500'
                        />

                        <p className="text-red-500">
                            {errors.newPassword?.message}
                        </p>
                    </div>

                    <div>
                        <label className='text-zinc-300 mb-2 block'>
                            Confirm Password
                        </label>

                        <input
                            {...register("confirmPassword")}
                            type="password"
                            placeholder='Confirm password'
                            className='w-full h-14 rounded-2xl bg-zinc-800 border border-zinc-700 text-white px-5 outline-none focus:border-indigo-500'
                        />

                        <p className="text-red-500">
                            {errors.confirmPassword?.message}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className='h-14 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition-all text-white font-semibold text-lg'
                    >
                        Reset Password
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ResetPasswordComp