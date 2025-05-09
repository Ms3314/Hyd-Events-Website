import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const ListItems = [
        {
            id:18,
            Events:'All',
            Link:'/'
        },
        {
            id:19,
            Events:'TECHNICAL',
            Link:'/'
        },
        {
            id:20,
            Events:'FUN EVENTS',
            Link:'/'
        },  
        {
            id:21,
            Events:'IOT',
            Link:'/'
        },
        {
            id:22,
            Events:'WEBINAR',
            Link:'/'
        },
        {
          id:23,
          Events:'Hackathon',
          Link:'/'
      },
    ]
  return (
    <div>
        <h2 className='flex text-black text-2xl font-bold uppercase pt-2 mt-2 pl-6'>Latest Events</h2>
        {/* <div>
              <ul className='flex md:gap-6 sm:gap-2 text-slate-800 p-4 m-4'>
                {ListItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.Link}
                    className='inline-block  py-1 px-2 border-2 rounded-2xl shadow-2xl
                    hover:text-primary font-semibold'
                    >{item.Events}</a>
                  </li>
                )
              )}
              </ul>
        </div> */}
    </div>
  )
}

export default Header