import React from 'react'
import Recentitem from '../recentitem/Recentitem'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-topLeft'>
        <img src='https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png' />

        <div className='profile-topLeft_details'>
          <h1>Richie1136</h1>
          <h3>1 follower</h3>
        </div>
      </div>
      <div className='profile-topRight'>
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
        <div className='profile-recent_items'>
          <Recentitem
            url={"https://www.youtube.com/embed/_3BzrET-HfE"}
            title={"I challenged Instagram on NBA 2K21 for $5000"}
          />
          <Recentitem
            url={"https://www.youtube.com/embed/xi0HRVUsaOw"}
            title={"The 5 BEST Investments That Will Make You RICH"}
          />
          <Recentitem
            url={"https://www.youtube.com/embed/z4rQOuyV43s"}
            title={"The Stock Market Is FREE MONEY | DO THIS NOW"}
          />
          <Recentitem
            url={"https://www.youtube.com/embed/E5osl1fNsSo"}
            title={"Playing Roblox NBA 2K22! NEW MYCAREER MODE!"}
          />
        </div>
        <div className='profile-categories'>
          <h2>Richie1136's recently streamed Categories</h2>
          <img src='https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-285x380.jpg' />
          <h3>Just Chatting</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile