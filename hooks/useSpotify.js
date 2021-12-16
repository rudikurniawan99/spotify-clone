import React, { useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import spotifyApi from '../lib/spotify'

const useSpotify = () => {
  const { data: session } = useSession()
  useEffect(() => {
    if(session){
      if(session.error === 'RefreshAccessTokenError'){
        signIn()
      }
      
      spotifyApi.setAccessToken(session.user.accessToken)
    }
  },[session])

  return null
}

export default useSpotify
