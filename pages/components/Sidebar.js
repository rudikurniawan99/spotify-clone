import { 
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  PlusCircleIcon,
  RssIcon
} from '@heroicons/react/outline'

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
          <div className="flex items-center mb-2">
            <button className="text-gray-300 w-5 h-5 mr-3">
              {item.icon}
            </button>
            <p className="text-gray-300">{item.title}</p>
          </div>
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
