
import HomePage from './Components/Pages/HomePage'
import EventPage from './Components/Pages/EventPage'
import About from './Components/Pages/About'
import Layout from './Layout.jsx'
import Eventsdatapage from './Components/EventsDetailPage/Eventsdatapage.jsx'
import './index.css'
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SocietyPg from './Components/SocietyPg/SocietyPg.jsx'



function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
          < Route index element={<HomePage />} />
          < Route path='/about' element={<About />} />
          < Route path='/events' element={<EventPage />} />
          < Route path='/evntdetails/:id' element={<Eventsdatapage />} />
          < Route path='/societydetails' element={<SocietyPg/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
}

export default App
