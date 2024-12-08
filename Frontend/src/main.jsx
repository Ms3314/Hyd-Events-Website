import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomePage from './Components/Pages/HomePage.jsx'
import './index.css'
import ResponsiveMenu from './Components/Navbar/ResponsiveMenu.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import EventPage from './Components/Pages/EventPage.jsx'
import About from './Components/Pages/About.jsx'
import Layout from './Layout.jsx'
import EventsDetailpage from './Components/EventsDetailPage/EventsDetailpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "",
        element:<HomePage/>,
      },
      {
        path: "EventPage",
        element:<EventPage/>,
      },
      {
        path: "About",
        element:<About/>,
      },
      {
        path: "EventsDetailpage",
        element:<EventsDetailpage/>,
        children:[
          {
            path:":id",
            element:<EventsDetailpage/>
          }
        ]
      },
      
    ]
  
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
