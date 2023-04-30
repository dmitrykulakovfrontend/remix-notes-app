import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(5, { message: "Password must be at least 5 characters long" })
  .max(50, { message: "Password cannot be longer than 50 characters" });
// .regex(/[a-z]/, {
//   message: "Password must contain at least one lowercase letter",
// })
// .regex(/[A-Z]/, {
//   message: "Password must contain at least one uppercase letter",
// })
// .regex(/[0-9]/, { message: "Password must contain at least one digit" })
// .regex(/[!@#$%^&*(),.?":{}|<>]/, {
//   message: "Password must contain at least one special character",
// });

export const emailSchema = z.string().email({ message: "Email is invalid" });

export type Email = z.infer<typeof emailSchema>;
export type Password = z.infer<typeof passwordSchema>;
