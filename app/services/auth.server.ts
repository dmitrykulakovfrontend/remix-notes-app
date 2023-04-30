// app/services/auth.server.ts
import type { User } from "@prisma/client";
import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";
import { emailSchema, passwordSchema } from "~/validation/auth";
import bcrypt from "bcrypt";
import { db } from "~/utils/db.server";
// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<User | Error | null>(
  sessionStorage,
  {
    sessionKey: "sessionKey", // keep in sync
    sessionErrorKey: "sessionErrorKey", // keep in sync
  }
);

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString(); // or email... etc
    const password = form.get("password")?.toString();
    if (!email || !password) {
      throw new AuthorizationError("Email and password are required");
    }

    const isValidEmail = emailSchema.safeParse(email);
    const isValidPassword = passwordSchema.safeParse(password);
    if (!isValidEmail.success) {
      throw new AuthorizationError(isValidEmail.error.message);
    }
    if (!isValidPassword.success) {
      throw new AuthorizationError(isValidPassword.error.message);
    }
    const user = await db.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new AuthorizationError("User not found");
    }
    const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw new AuthorizationError("Incorrect password");
    } else {
      return user;
    }
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);
