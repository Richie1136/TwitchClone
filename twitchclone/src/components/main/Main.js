import React from 'react'
import './Main.css'
import Profile from '../profile/Profile'
const Main = () => {
  return (
    <div className='main'>
      <div className='main-left'>
        <Profile />
      </div>
      <div className='main-right_placeholder'></div>
    </div>
  )
}

export default Main
