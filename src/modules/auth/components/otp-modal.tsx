import React, { useState } from "react";
import type { TOtpModalProps } from "../../../shared/types/commonTypes";
import { toast } from "react-toastify";

const OtpModal: React.FC<TOtpModalProps> = ({ onSubmit, onOtpChange, loading }) => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])

    const handleChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleVerify = () => {
        const joinedOtp = otp.join("")
        console.log("joined otp", joinedOtp)

        if (joinedOtp.length !== 6) {
            console.log("please fill all otp")
            toast.error("please fill all otp fields")
            return
        }
        

        onSubmit(joinedOtp)
        onOtpChange(joinedOtp)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-xl w-[350px] p-6 text-center">

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">Verify OTP</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Enter the 6-digit code sent to your email
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-between gap-2 mb-6">
                    {[...Array(6)].map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            onChange={(e) => handleChange(e.target.value, i)}
                            className="w-10 h-12 border rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ))}
                </div>

                {/* Timer + Resend */}
                <div className="flex justify-between items-center text-sm mb-6">
                    <span className="text-gray-500">
                        Resend in <span className="font-medium text-black">00:30</span>
                    </span>

                    <button
                        className="text-blue-600 font-medium hover:underline disabled:text-gray-400"
                        disabled
                    >
                        Resend OTP
                    </button>
                </div>

                {/* Verify Button */}
                <button
                    onClick={handleVerify}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Verify
                </button>

            </div>
        </div>
    );
};

// valitdation have to done

export default OtpModal;