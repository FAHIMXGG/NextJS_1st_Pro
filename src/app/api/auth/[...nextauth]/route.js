import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLINT_ID,
      clientSecret: process.env.GOOGLE_CLINT_SECRET,
    }),
  ],
})