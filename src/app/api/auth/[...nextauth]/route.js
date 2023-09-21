import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLINT_ID,
            clientSecret: process.env.GOOGLE_CLINT_SECRET,
        }),
    ],
})

export { handler as GET, handler as POST };