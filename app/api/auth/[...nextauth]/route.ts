import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
      async authorize(credentials){
        if (!credentials) {
          return null;
        }
        // Add your own logic here to find the user from the credentials provided
        const user = { id: 1, name: "Test User", email: "test@example.com",password:"123" }; // Example user

       if(credentials && credentials.username===user.email && user.password===credentials.password ){
        return user

       }
      return null;
      },
      
    }),
  ],
};

const handler = (req: any, res: any) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
