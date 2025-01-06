import React from 'react'
import EventPage from '../Pages/EventPage'
import { NavLink, useNavigate } from 'react-router-dom'
const Button = () => {
    let navigate = useNavigate()
  return (
    <div className='mr-16 justify-items-end'>
    <button className="flex bottom-2 right-2 px-4 py-2 md:p-2 bg-blue-600 text-white rounded-lg text-sm 
                        hover:bg-blue-700 transition duration-200" onClick={() => {navigate('/events')}}>
                View All Events
    </button>
    </div>
  )
}

export default Button