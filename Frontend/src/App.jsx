import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import ResponsiveMenu from './Components/Navbar/ResponsiveMenu'
// import Carousel from './Components/CustomCarousel/CustomCarousel'
import './App.css'
// import { Carousel as BootstrapCarousel } from 'bootstrap'
import CustomCarousel from './Components/CustomCarousel/CustomCarousel'

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
