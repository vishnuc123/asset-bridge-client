import z from "zod";

export const resetPass = z.object({
    newPassword: z.string().min(6, "minimum 6 character").max(10, "maximum 10 character allowed").trim()
        .regex(/[A-Z]/, "Must include at least one uppercase letter")
        .regex(/[a-z]/, "Must include at least one lowercase letter")
        .regex(/[0-9]/, "Must include at least one number"),
    confirmPassword: z.string().min(6, "minimum 6 characters").max(10, "maximum 10 character allowed").trim()
        .regex(/[A-Z]/, "Must include at least one uppercase letter")
        .regex(/[a-z]/, "Must include at least one lowercase letter")
        .regex(/[0-9]/, "Must include at least one number"),
})

export type resetData = z.infer<typeof resetPass>