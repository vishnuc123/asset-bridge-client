import type { TKycstatus, TRole, TStatus } from "../../../shared/types/commonTypes";

export interface IUser {
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roles: TRole[],
    activeRole:TRole,
    phone: string,
    isBlocked: boolean,
    profileImage?: string,
    isVerified: boolean,
    status:TStatus,
    kycStatus:TKycstatus,
    emailVerified:boolean,
    phoneVerified:boolean
    verificationReason?: string,
}