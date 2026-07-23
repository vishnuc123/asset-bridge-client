import React from 'react'
import type { TRole } from '../../../shared/types/commonTypes'
type TCommonProfileLinks = {
    label: string,
    type: string,
}

const CommonProfileFields: TCommonProfileLinks[] = [
    {
        label: "fullName",
        type: "text"
    },
    {
        label: "email",
        type: "email"
    },
    {
        label: "phone number",
        type: "text"
    },
    {
        label: "date-of-birth",
        type: "date"
    },
    {
        label: "address",
        type: "text"
    },
]

export const ProfileLinks: Record<Exclude<TRole,"admin">, TCommonProfileLinks[]> = {
    user: [...CommonProfileFields],
    investor: [...CommonProfileFields],
    vendor: [...CommonProfileFields],
}