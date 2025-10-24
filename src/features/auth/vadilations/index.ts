import { z } from "zod"

export const loginSchema = z.object({
    email:
        z.email("Invalid Email.")
            .lowercase("All characters must be lowercase."),
    password:
        z.string("Password is required.").min(6, "Password must be 6 characters long.")
})

export type loginType = z.infer<typeof loginSchema>