import z, { TimePrecision } from "zod";

export const PersonalDetailsSchema = z.object({
    firstName: z.string().trim().min(3, "must contain minimum 3 letters").max(15, "max 15 letters"),
    lastName: z.string().trim().min(1, "Last name is required").max(15, "cannot exceed 15 letters"),
    phone: z.string()
        .trim()
        .regex(
            /^\+[1-9]\d{7,14}$/,
            "Enter a valid phone number with country code"
        ),

    gender: z.enum(["male", "female", "other"]),

    dob: z.iso.date()
        .refine(
            (date) => date <= new Date().toISOString().slice(0, 10),
            "Date of birth cannot be in the future"),

    nationality: z.enum(["indian", "american", "australian", "canadian", "french", "russian", "others"], { error: "please select a valid nationality" }),

    address: z.string()
        .trim()
        .min(10, "Address must contain at least 5 characters")
        .max(200, "Address cannot exceed 300 characters"),
})

export type personalDetailsFormData = z.infer<typeof PersonalDetailsSchema>