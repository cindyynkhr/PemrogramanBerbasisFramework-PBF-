import { signIn } from "@/utils/db/servicefirebase";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        fullName: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
          const user:any = await signIn(credentials.email);

          if (user) {
            const isPasswordValid = await bcrypt.compare(
              credentials.password, 
              user.password,
            );
            if (isPasswordValid) {
              return {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
              };
            }
          }
          return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullName = user.fullName;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
        if (!session.user) {
            session.user = {};
        }

        session.user.email = token.email;
        session.user.fullName = token.fullName;
        session.user.role = token.role;

        return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  }
};

export default NextAuth(authOptions);