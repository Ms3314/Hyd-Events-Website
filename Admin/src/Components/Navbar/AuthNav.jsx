import React from 'react'
import hydEventsLogo from '../../assets/hydEventsLogo.png'

function AuthNav() {
    return (
        <div className='flex items-center justify-center bg-black w-full'>
            <div className='p-3'>
                <img src={hydEventsLogo}></img> 
            </div>
        </div>
  )
}

export default AuthNav
