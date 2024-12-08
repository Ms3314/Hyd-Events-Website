import React from 'react'
import Navbar from '../Navbar/Navbar'
import ResponsiveMenu from '../Navbar/ResponsiveMenu'
import CustomCarousel from '../CustomCarousel/CustomCarousel'
import PreEventsCards from '../Cards/PreEventsCards'
import Cards from '../Cards/Cards'
import Header from '../Cards/Header'

const HomePage = () => {
  return (
    <>
    <CustomCarousel/>
    <Header/>
    <Cards/>
    {/* <Headers/> */}
    <PreEventsCards/>
    <div>HomePage</div>
    </>
  )
}

export default HomePage