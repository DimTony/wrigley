import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    // username: string;
    user?: {
      id?: string;
      username?: string;
      role?: string;
      profilePic?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    username: string;
    role: string;
    profilePic: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    role: string;
    profilePic: string;
  }
}
