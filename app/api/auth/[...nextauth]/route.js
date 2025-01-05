import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }

          const isPasswordCorrect = await bcrypt.compare(password, user.password);

          if (!isPasswordCorrect) {
            return null;
          }

          // Return the user object but you can return specific fields like _id and email
          return { _id: user._id, email: user.email };  // Only return _id and email
        } catch (error) {
          console.error("Error in login API:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Include only _id and email in the JWT token
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;  // Store _id in the token
        token.email = user.email;  // Store email in the token
      }
      return token;
    },

    // Include only _id and email in the session
    async session({ session, token }) {
      session.user._id = token._id;  // Attach _id to the session
      session.user.email = token.email;  // Attach email to the session
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };