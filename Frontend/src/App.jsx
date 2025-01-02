
import HomePage from './Components/Pages/HomePage'
import EventPage from './Components/Pages/EventPage'
import About from './Components/Pages/About'
import Layout from './Layout.jsx'
import EventsDetailpage from './Components/EventsDetailPage/EventsDetailpage.jsx'
import './index.css'
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { createContext, useContext, useState } from 'react'
import img1 from './assets/img1.png'
import hydEventsLogo from './assets/hydEventsLogo.png'
import SocietyPg from './Components/SocietyPg/SocietyPg.jsx'

const Data = 
  {
        id:11,
        imgSrc:img1,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Muffakham jah college of engineering and technology',
        Timings:'1:00-2:00',
        fee:'Free',
        Banner:'https://tse2.mm.bing.net/th?id=OIP.0M2UfAjrF3u49iD-xVE0zAHaEK&pid=Api&P=0&h=180',
        EventType:'hackathon',
        club:'csi',
        NoOfReg:'490',
        DeadLine:'4-jan-2023',
        Teamsize:'Individual',
        ClubLogo:hydEventsLogo,
        ClubName:"CSI-MJCET",
        NoofMem:'3400+',
        offSite:'official site',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis',
        

}
export const MyContext = createContext()

function App() {
const [data , setData] = useState(Data)

  return (
  <MyContext.Provider value={{data , setData}}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
          < Route index element={<HomePage />} />
          < Route path='/about' element={<About />} />
          < Route path='/events' element={<EventPage />} />
          < Route path='/evntdetails' element={<EventsDetailpage />} />
          < Route path='/societydetails' element={<SocietyPg />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </MyContext.Provider>
)
}

export default App
