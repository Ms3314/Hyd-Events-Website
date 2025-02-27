import React from 'react'
import hydEventsLogo from '../../assets/hydEventsLogo.png'

const Footer = () => {
  return (
        <div className='flex items-center justify-center bg-black  w-full'>
        <div className='flex p-3'><img src={hydEventsLogo}></img>  </div>
          <div className='text-white'>Made with love by csi</div>

        </div>
  )
}

export default Footer