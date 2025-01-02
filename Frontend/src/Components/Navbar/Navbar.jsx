import React from 'react'
import ResponsiveMenu from './ResponsiveMenu'; 
import hydEventsLogo from '../../assets/hydEventsLogo.png'; 
import HomePage from '../Pages/HomePage';
import EventPage from '../Pages/EventPage';
import About from '../Pages/About';
import { NavLink } from 'react-router-dom';

const NavbarMenu = [
    {
      id:1,
      title:"Home",
      link:"/",
    },
    {
      id:2,
      title:"Events",
      link:"/events",
    },
    {
      id:3,
      title:"About",
      link:"/about",
    },
    {
      id:4,
      title:"Registered",
      link:"#",
    },
    {
      id:5,
      title:"Contact",
      link:"#",
    },
  ];
const Navbar = () => {
    const [open ,setOpen] = React.useState(false)
  return (
    <>
    <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
            {/*logo secction*/}
            <div className="w-24 flex items-center gap-2 font-bold">
                {/* <p className='text-primary'>Hyd</p>
                <p className="text-secondary">Events</p> */}
                <img src={hydEventsLogo}/>
            </div>
            {/*menu section*/}
            <div className='hidden md:block'>
              <ul className='flex items-center justify-center gap-6 text-slate-800'>
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <NavLink to={menu.link}
                    className='inline-block py-1 pt-3 
                    hover:text-primary hover:shadow-[0_3px_0_-1px_#0284c7] font-semibold'
                    >{menu.title}</NavLink>
                  </li>
                )
              )}
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full pt-2 duration-200'>
              {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
              
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
              
             
              </button>
              </ul>
            </div>

            {/* mobile menu section*/}
            <div className='md:hidden border-2 rounded-2xl shadow-lg inline-flex gap-2 m-4 sm:m-1' onClick={() =>
            setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" color="#0f172a" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
            
        </div>
    </nav>
    <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;