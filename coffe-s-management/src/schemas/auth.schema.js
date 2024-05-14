import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username required',
    }),
    email: z.string({
        required_error: 'Email requerido',
    }).email({
        required_error: 'Email invalido',
    }),
    password: z.string({
        required_error: 'Password required',
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'email required',
    }).email({
        required_error: 'email invalido',
    }),
    password: z.string({
        required_error: 'password required',
    }),
});