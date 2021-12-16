import { 
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  PlusCircleIcon,
  RssIcon
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'

const sidebarItems = [
  {
    title: 'Home',
    icon: <HomeIcon/>
  },
  {
    title: 'Search',
    icon: <SearchIcon/>
  },
  {
    title: 'Your Library',
    icon: <LibraryIcon/>
  },
  {
    title: 'Create Playlist',
    icon: <PlusCircleIcon/>
  },
  {
    title: 'Liked Song',
    icon: <HeartIcon/>
  },
  {
    title: 'Your Episode',
    icon: <RssIcon/>
  }
]

const Sidebar = () => {

  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [playlists, setplaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if(spotifyApi.getAccessToken()){
      spotifyApi.getUserPlaylists().then((data) => {
        setplaylists(data.body.items)
      })
    }
  },[session, spotifyApi])

  return (
    <div className="p-5 border-r h-screen border-gray-800 overflow-y-scroll scrollbar-hide">
      {sidebarItems.map((item, index) => (
        <div
          key={index} 
        >
          <button
            className="flex items-center mb-2 text-gray-300 hover:text-white" 
          >
            <span
              className="w-5 h-5 mr-3" 
            >
              {item.icon}
            </span>
            <p
            >{item.title}</p>
          </button>
          {index === 2 && (
            <hr className="text-gray-800 my-4" />
          )}
        </div>
      ))}
      <hr className="text-gray-800 my-4" />
      {playlists.map((playlist) => (
        <div 
          key={playlist.id}
          className="text-gray-300 hover:text-white mb-3"
        >
          <button
            onClick={() => {
              setPlaylistId(playlist.id)
            }} 
          >
            <p>{playlist.name}</p>
          </button>
        </div>
      ))}
      
    </div>
  )
}

export default Sidebar
