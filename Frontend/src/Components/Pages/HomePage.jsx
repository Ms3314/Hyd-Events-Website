
import Cards from '../Cards/Cards'
import Header from '../Cards/Header'
import Button from '../Cards/Button'
import ClubDisplay from './ClubDisplay'

const HomePage = () => {
  return (
    <div className='h-[900px] '>
    {/* <CustomCarousel/> */}
    <ClubDisplay/>
    <Header/>
    <Cards/>
    {/* <Headers/> */}
    {/* previous events ku nikal dinge */}
    {/* <PreEventsCards/> */}
    </div>
  )
}

export default HomePage