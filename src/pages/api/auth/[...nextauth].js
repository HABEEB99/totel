import NextAuth from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import GoogleProvider from "next-auth/providers/google";
import client from "../../../utils/sanity";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // ...add more providers here

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: SanityAdapter(client),
});
