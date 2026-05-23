import { motion } from "framer-motion"
import { useForm } from "react-hook-form";
import { user, type userSignupData } from "../validations/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "../hooks/useSignup";
import type { TSignupFormProps } from "../../../shared/types/commonTypes";

const Signup:React.FC<TSignupFormProps> = ({onSubmit,loading}) => {
    // const {mutate:signUpUser,isPending:signUpLoading} = useSignup()
    const { register, handleSubmit, formState: { errors } } = useForm<userSignupData>({
        resolver: zodResolver(user)
    })

    // const onSubmit = (data: userSignupData) => {
    //     // console.log("signup data", data)
    //     signUpUser(data)
    // }
    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center ">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, scaleX: 0.9 }}
                animate={{ opacity: 1, scale: 1, scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="grid md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-7xl">

                {/* LEFT IMAGE */}
                <div className="hidden md:block">
                    <img
                        src="/signup.png"
                        alt="signup"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT FORM */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex justify-center pb-5"><h1 className="text-4xl"><strong>Asset Bridge</strong></h1></div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                        Create Account
                    </h1>

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* first name */}
                        <div>
                            <label className="text-sm text-gray-600">First Name</label>
                            <input
                                {...register("firstName")}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <p className="text-red-500">{errors.firstName?.message}</p>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Last Name</label>
                            <input
                                {...register("lastName")}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <p className="text-red-500">{errors.lastName?.message}</p>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <p className="text-red-500">{errors.email?.message}</p>
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Enter password"
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <p className="text-red-500">{errors.password?.message}</p>
                        </div>

                        {/* TERMS */}
                        <div className="flex items-center gap-2">
                            <input
                                {...register("acceptTerms")}
                                type="checkbox" />
                            <p className="text-sm text-gray-600">
                                I agree to Terms & Conditions
                            </p>
                            <p className="text-red-500">{errors.acceptTerms?.message}</p>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                        >
                            Sign Up
                        </button>

                        {/* LOGIN LINK */}
                        <p className="text-sm text-center text-gray-600">
                            Already have an account?{" "}
                            <span className="text-purple-600 cursor-pointer hover:underline">
                                Login
                            </span>
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;