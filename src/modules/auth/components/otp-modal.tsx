import React, { useState } from "react";
import type { TOtpModalProps } from "../../../shared/types/commonTypes";
import { toast } from "react-toastify";

const OtpModal: React.FC<TOtpModalProps> = ({ onSubmit, onOtpChange,handleResend, loading }) => {
    const [otp, setOtp] = useState<string>("")

    const handleChange = (value: string,) => {
        if (!/^\d*$/.test(value)) return;

        if (value.length > 6) return;

        setOtp(value);
        onOtpChange(value);
    };

    const handleVerify = () => {

        if (otp.length !== 6) {
            toast.error("Please enter a 6-digit OTP");
            return;
        }

        onSubmit(otp)
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
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => handleChange(e.target.value)}
                        maxLength={6}
                        placeholder="Enter OTP"
                        className="w-full h-12 border rounded-lg text-center text-lg tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                    />

                </div>

                {/* Timer + Resend */}
                <div className="flex justify-between items-center text-sm mb-6">
                    <span className="text-gray-500">
                        Resend in <span className="font-medium text-black">00:30</span>
                    </span>

                    <button
                        className="text-blue-600 font-medium hover:underline disabled:text-gray-400"
                        onClick={handleResend}
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