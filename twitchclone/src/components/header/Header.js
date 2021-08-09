import React from 'react'
import './Header.css'
import Channel from '../channel/Channel'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='header-leftlogo' src='https://pngimg.com/uploads/twitch/twitch_PNG6.png'
          alt='twitch logo' />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className='header-vertical_line'></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className='header-center'>
        <input type='text' placeholder='Search' />
        <div className='header-centerlogo'>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className='header-right'>
        <div className='header-right_container'>
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comments"></i>
          <div className='header-right_bits'>
            <i className="far fa-gem"></i>
            <h4>Get Bits</h4>
          </div>
          <img className='rightlogo' src='https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-70x70.png' />
        </div>
      </div>
    </div>
  )
}

export default Header