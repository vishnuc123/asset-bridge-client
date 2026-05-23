import * as X from "zod"
export const user = X.object({
    email: X.string().email("enter a valid email").trim().min(6),
    password: X.string().min(6, "minimum 6 character").max(10, "maximum 10 character allowed").trim()
        .regex(/[A-Z]/, "Must include at least one uppercase letter")
        .regex(/[a-z]/, "Must include at least one lowercase letter")
        .regex(/[0-9]/, "Must include at least one number"),
})

export type LoginData = X.infer<typeof user>