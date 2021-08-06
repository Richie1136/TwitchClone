import React from 'react'
import './Sidebar.css'
import Channel from '../channel/Channel'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <h5>FOLLOWED CHANNELS</h5>
        <Channel avatar='https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png'
          name='Richie1136'
          viewers='1'
        />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-70x70.jpeg'
          name='xQcOW'
          viewers='75,360' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/14d8f9eb-73bc-4a00-9730-aa45b5522c4d-profile_image-70x70.png'
          name='Hiko'
          viewers='14,242' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/1d41de3c-731d-41ae-b0e7-615ad74db8f3-profile_image-70x70.png'
          name='Symfuhny'
          viewers='12,000' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/nadeshot-profile_image-117d4d07e78d767a-70x70.png'
          name='Nadeshot'
          viewers='10,320' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/a6af42bf-64db-42f6-9db6-88d3e85e4c34-profile_image-70x70.png'
          name='DrLupo'
          viewers='5,985' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/98a82fa3-3ca8-40cd-999d-400eaa71d506-profile_image-70x70.png'
          name='TeePee'
          viewers='5,962' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/atl770er-profile_image-795b40d6847f7972-150x150.jpeg'
          name='ATL770ER'
          viewers='2,540' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/a20ce6cb-c765-4346-9fc8-c25e2b3844b4-profile_image-70x70.jpg'
          name='Merk'
          viewers='2,169' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/2d226b58-f27a-49df-9076-89f051b8b4ed-profile_image-150x150.png'
          name='Mobuckets'
          viewers='1,532' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/ef28480d-09dc-4240-adfe-b2b7a5a6131d-profile_image-70x70.png'
          name='Maven'
          viewers='384' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/89c02931-d4ea-4812-bbf3-99c49af91e06-profile_image-70x70.png'
          name='JayCanada10'
          viewers='105' />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/e4d9bf96-311d-487a-b5eb-9f9a94e0f795-profile_image-70x70.png'
          name='Nmplol'
          viewers='18,243' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/163da8b8-1370-4d0a-b57c-4d63ebb180c4-profile_image-70x70.png'
          name='sashagrey'
          viewers='5,041' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/03ed0dc1-683a-4db0-ac12-16f0573b6be2-profile_image-70x70.png'
          name='melina'
          viewers='4,494' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/6a571012-8dc4-41c2-a850-244a33e3b900-profile_image-70x70.png'
          name='Taylor_Jevaux'
          viewers='1,508' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/13b39d1b-ca78-4a36-9edb-bdaf46739983-profile_image-70x70.png'
          name='BLOU'
          viewers='1,463' />
        <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/4015eddb-f598-4d5c-b853-2e3198eebe07-profile_image-70x70.png'
          name='Kandyland'
          viewers='981' />
        <p className='sidebar-top_showmore'>Show More</p>
      </div>
      <div className='sidebar-bottom'>
        <div className='sidebar-bottom_container'>
          <i className="fas fa-search"></i>
          <input type='text' placeholder='Search to Add Friends' />
        </div>
      </div>
    </div >
  )
}

export default Sidebar
