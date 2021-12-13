import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read'
].join(',')

const param = {
  scope: scopes
}

const queryParamSring = new URLSearchParams(param)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamSring.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
})

export default spotifyApi

export { LOGIN_URL }