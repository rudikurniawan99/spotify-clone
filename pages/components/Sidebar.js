import { 
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  PlusCircleIcon,
  RssIcon
} from '@heroicons/react/outline'
import Link from 'next/link'

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
  return (
    <div className="bg-gray-900 p-8 min-h-screen">
      {sidebarItems.map((item, index) => (
        <>
          <button
            className="flex items-center mb-2 text-gray-300 hover:text-white" 
          >
            <span
              className="w-5 h-5 mr-3" 
            >
              {item.icon}
            </span>
            <p
              className="font-medium" 
            >{item.title}</p>
          </button>
          {index === 2 && (
            <hr className="text-gray-800 my-4" />
          )}
        </>
      ))}
      <hr className="text-gray-800 my-4" />
    </div>
  )
}

export default Sidebar
