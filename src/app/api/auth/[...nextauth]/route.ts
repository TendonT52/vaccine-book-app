import NextAuth from 'next-auth';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import userLogIn from '../../../../libs/userLogIn'

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "User Email", type: "email", placeholder: "Please Enter Your Email" },
                password: { label: "User Password", type: "password", placeholder: "Please Enter Your Password" }
            },

            async authorize(credentials, req) {
                if (!credentials) return null
                const user = await userLogIn(credentials.email, credentials.password)

                // You need to provide your own logic here that takes the credentials
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },

        async session({session, token, user}) {
            session.user = token as any
            return session
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
