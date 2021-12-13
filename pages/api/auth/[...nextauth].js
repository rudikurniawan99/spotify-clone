import NextAuth from "next-auth/next";
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async jwt({ token, user, account }){
      if(account && user){
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000
        }
      }
      if(Date.now() < account.accessTokenExpires){
        return token
      }

      return await refreshAccessToken(token)
    }
  }

})

const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.setRefreshToken(token.refreshToken)

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken

  } catch (e) {
    console.log(e) 
    return {
      ...token,
      error: 'Refresh Token Error'
    }
  }
}