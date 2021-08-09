import React from 'react'
import Profile from '../profile/Profile'
import Stream from '../stream/Stream'
import './Body.css'
const Body = () => {
  return (
    <div className='body'>
      <div className='body-left'>
        <Stream />
        <Profile />
      </div>
      <div className='body-right_placeholder'></div>
    </div>
  )
}

export default Body
