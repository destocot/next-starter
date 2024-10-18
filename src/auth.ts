import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { encode as defaultEncode } from "next-auth/jwt";
import { safeParse } from "valibot";
import { v4 as uuidv4 } from "uuid";
import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { SigninSchema } from "@/validators/auth";
import { findOneUserByEmail } from "@/queries/users";
import { verifyPassword } from "@/lib/argon2";
import { db } from "@/lib/db";

const MAX_AGE = 15 * 60;
const adapter = PrismaAdapter(db);

const nextAuthConfig: NextAuthConfig = {
  adapter,
  session: { strategy: "database", maxAge: MAX_AGE },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/auth/signin" },
  callbacks: {
    jwt: ({ token, account }) => {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }

      return token;
    },
    session({ session, user }) {
      return {
        expires: session.expires,
        user: {
          id: user.id,
          email: user.email,
          image: user.image,
          name: user.name,
        },
      };
    },
  },
  jwt: {
    encode: async (params) => {
      if (params.token?.credentials) {
        const sessionToken = uuidv4();

        if (!params.token.sub) {
          throw new Error("User ID not found in JWT token");
        }

        if (typeof adapter.createSession !== "function") {
          throw new Error("createSession is not implemented");
        }

        const newSession = await adapter.createSession({
          sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + MAX_AGE * 1000),
        });

        if (!newSession) {
          throw new Error("Failed to create session");
        }

        return newSession.sessionToken;
      }
      return defaultEncode(params);
    },
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const parsedCredentials = safeParse(SigninSchema, credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.output;

          const user = await findOneUserByEmail(email, { withPassword: true });
          if (!user?.id) return null;
          if (!user.password) return null;
          const passwordsMatch = await verifyPassword(password, user.password);

          if (passwordsMatch) {
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
        }

        return null;
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthConfig);
