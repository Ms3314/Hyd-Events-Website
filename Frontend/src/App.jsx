import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import ResponsiveMenu from './Components/Navbar/ResponsiveMenu'
import './App.css'
import CustomCarousel from './Components/CustomCarousel/CustomCarousel'
import HomePage from './Components/Pages/HomePage'
import EventPage from './Components/Pages/EventPage'
import About from './Components/Pages/About'


function App() {

  return (
    <>
    <Navbar/>
    <ResponsiveMenu/>
      <hr/>
      <CustomCarousel/>
    
    
    </>
  )
}

export default App
