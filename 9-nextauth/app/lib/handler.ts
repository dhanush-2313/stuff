import  CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";


export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: 'Email', type: 'text', placeholder: '' },
              password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
                const email = credentials.email;
                const password = credentials.password;
               
               
                return {
                    id: "user1", 
                    name: "User 1",
                      email: email,
                };
            },
          }),
          GoogleProvider({
            clientId :process.env.GOOGLE_ID || " ",
            clientSecret: process.env.GOOGLE_SECRET || " ",
          }),
          GithubProvider({
            clientId :process.env.GITHUB_CLIENT_ID || " ",
            clientSecret: process.env.GITHUB_SECRET || " ",
          })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
              session: ({ session, token, user }: any) => {
              if (session.user) {
                  session.user.id = token.uid
              }
              return session
          }
      },
      pages:{
        signIn:"/signin",
      }
}

