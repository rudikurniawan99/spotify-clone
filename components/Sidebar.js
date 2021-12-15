import { 
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  PlusCircleIcon,
  RssIcon
} from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'

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

  return (
    <div className="p-5 min-h-screen border-r border-gray-800">
      {session ?(
        <>
          <p>signed as {session.user.name} </p>
          <button 
            className="px-3 py-1 bg-red-500 mb-3"
            onClick={() => signOut()}
          >signOut</button>
        </>
      ):(
        <>
          <div className="text-white mb-3">
            Guest
          </div>
        </>
      )}
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
      <div className="text-gray-300 hover:text-white mb-3">
        <button>
          <p>Playlist Name..</p>
        </button>
      </div>
      <div className="text-gray-300 hover:text-white mb-3">
        <button>
          <p>Playlist Name..</p>
        </button>
      </div>
      <div className="text-gray-300 hover:text-white mb-3">
        <button>
          <p>Playlist Name..</p>
        </button>
      </div>
      <div className="text-gray-300 hover:text-white mb-3">
        <button>
          <p>Playlist Name..</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar