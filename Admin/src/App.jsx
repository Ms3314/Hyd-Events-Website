import { useState ,createContext, useEffect } from 'react'
import Login from './Login-Register/Login/Login'
import Register from './Login-Register/Register/Register'
import img1 from './assets/img1.png'
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Homepg from './Components/Pages/Homepg';
import Layout from './Layout';
import AddEvents from './Components/AddEvents/AddEvents';
import EditEvent from './Components/Pages/EditEvent';
import Settingpg from './Components/Pages/Settingpg';


const Content = 
    {
        id:1,
        Venue:'MJCET hYderabad',
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Timings:'1:00-2:00',
        imgSrc:img1,
        EventName:"HAck rev"
    }
export const MyDetail = createContext()


function App() {
  const token = localStorage.getItem("token")
  const [content, setContent] = useState(Content)
  if (!token) {
    return (
    <BrowserRouter>
        <Routes>
          <Route path='/'>
              <Route path='/' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
  )
  }
  if (token) {
  return (
    <MyDetail.Provider value={{content,setContent}}>
     <BrowserRouter>
        { <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepg/>}/>
            <Route path='/events' element={<AddEvents/>}/>
            <Route path='/editevent' element={<EditEvent/>}/>
            <Route path='/settings' element={<Settingpg/>}/>
          </Route>
        </Routes>}
     </BrowserRouter>
    </MyDetail.Provider>
  )
}
}

export default App
