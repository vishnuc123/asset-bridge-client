import type { LoginData } from "../../modules/auth/validations/login-schema";
import type { userSignupData } from "../../modules/auth/validations/signup-schema";

export type TApiErrorResponse = {
    success: boolean,
    message: string,
    statusCode: number,
}
export type TSignupFormProps = {
  onSubmit: (data: userSignupData) => void;
  loading?: boolean;
};

export type TLoginFormProps = {
  onSubmit:(data:LoginData) => void;
  loading?:boolean;
}

export type TOtpData = {
  userId:string,
  otp:string,
  
}
export type TOtpModalProps = {
  onOtpChange:(otp:string) => void,
  onSubmit:(otp:string) => void,
  loading:boolean
}
export type TRole = "user"|"admin"|"vendor"|"investor"
export type TStatus = "banned"|"active"|"pending"
export type TKycstatus = "pending"|"rejected"|"verified"

export type TResetData = {
   newPassword: string
   confirmPassword: string
   token?: string
}