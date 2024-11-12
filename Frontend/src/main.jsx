import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomePage from './Components/Pages/HomePage.jsx'
import './index.css'
import ResponsiveMenu from './Components/Navbar/ResponsiveMenu.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EventPage from './Components/Pages/EventPage.jsx'
import About from './Components/Pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "HomePage",
    element:<HomePage/>,
  },
  {
    path: "EventPage",
    element:<EventPage/>,
  },
  {
    path: "About",
    element:<About/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
