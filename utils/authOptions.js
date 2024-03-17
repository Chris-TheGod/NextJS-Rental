import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to db
      // 2. Check if user exists
      // 3. If not, then add user to db
      // 4. Return true to allow sign in
    },
    // Modify the session object
    async session({ session }) {
      // 1. Get user from db
      // 2. Assign user id to session
      // 3. Return session
    },
  },
};
