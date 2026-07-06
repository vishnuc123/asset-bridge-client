import React from 'react'
import type { TLoginFormProps } from '../../../shared/types/commonTypes'
import { useForm } from 'react-hook-form'
import { user, type LoginData } from '../validations/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleLoginBtnComp from './google-btn'



const Login: React.FC<TLoginFormProps> = ({ onSubmit, loading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({ resolver: zodResolver(user) })

    return (
        <div className='w-screen h-screen bg-white'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src="../logo.png" alt="logo" className="mx-auto h-10 w-auto bg-blend-screen" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>

                            <label htmlFor="email" className="block text-sm/6 font-medium text-black">Email address</label>
                            <div className="mt-2">
                                <input
                                    {...register("email")}
                                    id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                <p className="text-red-500">{errors.email?.message}</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">Password</label>
                                <div className="text-sm">
                                    <a href="/forgetPassword" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password")}
                                    id="password" type="password" name="password" autoComplete="current-password" className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                <p className="text-red-500">{errors.password?.message}</p>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-black hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
                        </div>
                    </form>
                    <div className='google-btn p-4 flex justify-center'>
                        <GoogleLoginBtnComp />
                    </div>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        don't have a account?
                        <a href="/signup" className="font-semibold text-indigo-400 hover:text-indigo-300">Start you account here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
