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
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user, account }){
      // initial signIn
      if(account && user){
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        }
      }

      // return previous token if the access token not yet expires
      if(Date.now() < token.accessTokenExpires){
        return token
      }

      // if access token expired, to refresh it
      return await refreshAccessToken(token)
    },
    async session({ session, token }){
      session.user.accessToken = token.accessToken,
      session.user.refreshToken = token.refreshToken,
      session.user.username = token.username
      session.user.image = token.picture

      return session
    }
  }

})

const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.setRefreshToken(token.refreshToken)

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken()
    console.log('refreshToken: ',refreshedToken)

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshedToken: refreshedToken.refresh_token ?? token.refreshToken
    }

  } catch (e) {
    console.error(e)
    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}