import React from 'react'
import Song from './Song'

const Songs = ({tracks}) => {

  console.log(tracks)

  return (
    <div className="p-5 space-y-3">
      {tracks?.items.map((track, i) => (
        <div
          key={i} 
        >
          <Song
            track={track.track}
          />
        </div>
      ))}
    </div>
  )
}

export default Songs
