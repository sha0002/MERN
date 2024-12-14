const { z } = require('zod')

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(5, { message: "email must be atleast 5 character" })
        .max(255, { message: "email must not be more than 12 character" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "password must be atleast 6 character" })
        .max(1024, { message: "password must not be more than 1024 character" }),
})

module.exports = loginSchema;