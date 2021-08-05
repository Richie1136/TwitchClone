import React from 'react'
import './Channel.css'
const Channel = ({ avatar, name, viewers }) => {
  return (
    <div className='channel'>
      <div classname='channel-detail'>
        <img src={avatar} alt='avatar' />
        <p>{name}</p>
      </div>
      <p>🔴{viewers}</p>
    </div>
  )
}

export default Channel
