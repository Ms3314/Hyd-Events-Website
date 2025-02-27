import { useState ,createContext, useEffect } from 'react'
import Login from './Login-Register/Login/Login'
import Register from './Login-Register/Register/Register'
import img1 from './assets/img1.png'
import {
  Route,
  Routes,
  BrowserRouter,
  Await,
} from "react-router-dom";
import Homepg from './Components/Pages/Homepg';
import Layout from './Layout';
import AddEvents from './Components/AddEvents/AddEvents';
import EditEvent from './Components/Pages/EditEvent';
import Settingpg from './Components/Pages/Settingpg';
import axios from 'axios';


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
  const [valid , setValid] = useState(false);
  const isTokenValid = async () => {
    if (!token) return false ;
    console.log("this is the toekn from frontend " , token)
    const payload = await axios.post("http://localhost:3000/api/v1/admin/checkToken" , {token} , {
      headers : {
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : "application/json"
      }
    } )
    return payload.data.isValid ;
  }
  useEffect( ()=>{
    async function checkToken() {
    const t = await isTokenValid()
    console.log("t" , 'what is it')
    setValid(t)
    }
    checkToken();
  },[])
  if (!valid) {
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
  if (valid) {
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
