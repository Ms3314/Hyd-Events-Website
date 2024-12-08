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
            Events:'Today',
            Link:'/'
        },
        {
            id:20,
            Events:'Tommorow',
            Link:'/'
        },  
        {
            id:21,
            Events:'This Weekend',
            Link:'/'
        },
        {
            id:22,
            Events:'Free',
            Link:'/'
        },
    ]
  return (
    <div>
        <h2 className='flex text-black text-2xl font-bold uppercase pt-2 mt-2 pl-6'>Events at Mjcet</h2>
        <div>
              <ul className='flex gap-6 text-slate-800 p-4 m-4'>
                {ListItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.Link}
                    className='inline-block py-1 px-1 border-2 rounded-2xl shadow-2xl
                    hover:text-primary font-semibold'
                    >{item.Events}</a>
                  </li>
                )
              )}
              </ul>
        </div>
    </div>
  )
}

export default Header