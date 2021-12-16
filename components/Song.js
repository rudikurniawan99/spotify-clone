import React from 'react'

const Song = ({track}) => {
  return (
    <div className="flex items-center text-gray-300 hover:opacity-75 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
      <img src={track.album.images[0].url} className="w-10 h-10 object-cover" alt="" />
      <div className="flex-grow ml-4">
        <p className="text-lg">{track.name}</p> 
        <p className="text-sm text-gray-500">{track.artists[0].name}</p>
      </div>
      <div className="">
        <p>{track.album.name}</p>
      </div>
    </div>
  )
}

export default Song
