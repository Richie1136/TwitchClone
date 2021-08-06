import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-top_left'>
        <img src='https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png' />
        <div className='profile-topLeft_details'>
          <h1>Richie1136</h1>
          <h3>1 follower</h3>
        </div>
      </div>
      <div className='profile-top_right'>
        <i className='fas fa-heart graybg'></i>
        <i className='fas fa-bell graybg'></i>
        <i className='fas fa-ellipsis-v'></i>
      </div>
      <div className='profile-menu'>
        <h2 className='active'>Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2><i className='fas fa-arrow-up'></i></h2>
        <h2>Chat</h2>
      </div>
      <div className='profile-recent'>
        <h2>Recent broadcasts</h2>
      </div>
    </div>
  )
}

export default Profile