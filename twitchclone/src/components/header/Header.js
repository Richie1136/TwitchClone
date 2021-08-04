import React from 'react'
import './Header.css'

// https://pngimg.com/uploads/twitch/twitch_PNG6.png
const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='header-leftlogo' src='https://pngimg.com/uploads/twitch/twitch_PNG6.png'
          alt='twitch logo' />
        <h2>Following</h2>
        <h2>Browse</h2>
        <h2>Esports</h2>
        <h2>Music</h2>
        <div className='header-vertical_line'></div>
      </div>
      <div className='header-center'></div>
      <div className='header-right'></div>

    </div>
  )
}

export default Header


{/* <a href="https://www.freepnglogos.com/pics/twitch-logo-png">Twitch Logo from freepnglogos.com</a> */ }