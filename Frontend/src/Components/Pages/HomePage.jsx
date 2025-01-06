import React from 'react'
import Navbar from '../Navbar/Navbar'
import ResponsiveMenu from '../Navbar/ResponsiveMenu'
import CustomCarousel from '../CustomCarousel/CustomCarousel'
import Cards from '../Cards/Cards'
import Header from '../Cards/Header'
import Button from '../Cards/Button'

const HomePage = () => {
  return (
    <>
    <CustomCarousel/>
    <Header/>
    <Cards/>
    <Button/>
    {/* <Headers/> */}
    {/* previous events ku nikal dinge */}
    {/* <PreEventsCards/> */}
    </>
  )
}

export default HomePage