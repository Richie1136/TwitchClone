import React from 'react'
import './Stream.css'

const Stream = () => {
  return (
    <div className='stream'>
      <div className='stream-container'>
        <div className='stream-status'>
          <div className='stream-status_container'>
            <div className='stream-statusContainer_top'>
              <div className='stream-status_indicator'>OFFLINE</div>
              <h2>Check out the streams from Richie1136</h2>
            </div>
            <div className='stream-status_info'>
              <i className='fas fa-bell'></i>
              <p>You will be notified when Richie1136 is live</p>
            </div>
          </div>
        </div>
        <div className='stream-video_embed'>
          <iframe
            width='500'
            height='295'
            src='https://www.youtube.com/embed/xi0HRVUsaOw'
            frameBorder='0'
            allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Stream
