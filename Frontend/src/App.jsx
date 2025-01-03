
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


const Data = 
  {
    id:10,
    imgSrc: 'hjhj',
    month:'oct',
    Date:'23',
    EventName:'Dev Expedation',
    Venue:'Hyderabad',
    Timings:'1:00-2:00',
    fee:49,
    // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
    

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
      </Route>
    </Routes>
  </BrowserRouter>
  </MyContext.Provider>
)
}

export default App
