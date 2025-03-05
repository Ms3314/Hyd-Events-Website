import React from 'react'
import hydEventsLogo from '../../assets/hydEventsLogo.png'

const Footer = () => {
  return (
        <div className='flex items-center justify-center bg-black mt-4 w-full'>
        <div className='flex p-3'><img src={hydEventsLogo}></img>  </div>
        <div className='text-white font-semibold'>One Stop College Events Platform </div>
        </div>
  )
}

export default Footer