const { z } = require('zod')

const signupSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(5, { message: "Name must be atleast 5 character" })
        .max(255, { message: "Name must not be more than 12 character" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(5, { message: "email must be atleast 5 character" })
        .max(255, { message: "email must not be more than 12 character" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(3, { message: "phone must be atleast 10 character" })
        .max(10, { message: "phone must not be more than 10 character" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "password must be atleast 6 character" })
        .max(1024, { message: "password must not be more than 1024 character" }),
})

module.exports = signupSchema;