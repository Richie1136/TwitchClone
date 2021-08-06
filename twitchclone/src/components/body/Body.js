import React from 'react'
import Profile from '../profile/Profile'
import './Body.css'
const Body = () => {
  return (
    <div className='Body'>
      <div className='Body-left'>
        <Profile />
      </div>
      <div className='Body-right_placeholder'></div>
    </div>
  )
}

export default Body
