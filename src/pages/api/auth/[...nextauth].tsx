import type { NextAuthOptions, Session } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      // FIXME: This is a hack to get around env variables typings. Need to fix this.
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, profile, account }) {
      // TODO: Maybe we will add more providers in the future. For now, we only have github. This logic could be mapped to a switch etc. statement.
      if (profile && account?.provider === "github") {
        token["profile"] = {
          // @ts-ignore
          username: profile?.login,
        };
      }
      return token;
    },
    async session({ session, token }) {
      let userData = token.profile as Session["profile"];
      session.profile = userData;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
