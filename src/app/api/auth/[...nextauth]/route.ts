import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "621164984800-olqpq8gp9lb7l3a0odujvlpgu3msd6mq.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
