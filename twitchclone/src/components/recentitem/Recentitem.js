import React from 'react'
import './Recentitem.css'

const Recentitem = ({ url, title }) => {
  return (
    <div className='item'>
      <iframe
        width='400'
        height='235'
        src={url}
        frameBorder='0'
        allow='accelerometer;autoplay;clipboard-write;encrypted-media;pyroscope;picture-in-picture'
        allowFullScreen></iframe>
      <div className='item-detail'>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-285x380.jpg' />
        <div className='item-detail_text'>
          <h4>{title}</h4>
          <p>Richie1136</p>
          <p>Just Chatting</p>
        </div>
      </div>
    </div>
  )
}

export default Recentitem
