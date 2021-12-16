import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Center = () => {

  const { data: session } = useSession()
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <div className={`h-64 bg-gradient-to-b from-green-700 to-gray-900 relative p-5`}>
        <div className="absolute right-5 top-5">
          <button 
            className="px-3 py-3 rounded-full bg-black bg-opacity-40 hover:bg-opacity-80 flex items-center cursor-pointer space-x-2 text-white"
            onClick={() => signOut()}
          >
            <img src={session?.user?.image} alt="" className="w-8 h-8 object-cover rounded-full" />
            <span>
              {session?.user?.name}
            </span>
            <ChevronDownIcon className="w-5 h-5"/>
          </button>
        </div>
        <div className="absolute bottom-5 flex">
          <img src="" alt="" className="w-48 h-48 bg-blue-500 rounded-md" />
          <div className="self-end ml-2 mb-2 text-white">
            <p className="mb-1">PLAYLIST</p>
            <h1 className="text-5xl">Playlist Title goes here</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Center
