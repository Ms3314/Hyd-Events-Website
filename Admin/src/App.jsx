import { useState , useEffect } from 'react'
import Login from './Login-Register/Login/Login'
import Register from './Login-Register/Register/Register'
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
import axios from 'axios';



function App() {
  const token = localStorage.getItem("token");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(true); // Initialize loading to true
  
  const isTokenValid = async () => {
    if (!token) return false;
  
    // console.log("Checking token:", token);
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/admin/checkToken",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      // console.log("Token validation response:", response.data); // Debugging log
      return response.data?.isValid ?? false; // Ensure a boolean response
    } catch (error) {
      // console.error("Error verifying token:", error.response?.data || error.message);
      return false;
    }
  };
  

  useEffect(() => {
    async function checkToken() {
      setLoading(true); // Ensure loading is true before making API call
      const isValid = await isTokenValid();
      setValid(isValid);
      setLoading(false); // Set loading to false after checking
    }
    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Prevents flashing errors while checking token
  }

  return (
    <BrowserRouter>
      <Routes>
        {valid ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepg />} />
            <Route path="/events" element={<AddEvents />} />
            <Route path="/editevent" element={<EditEvent />} />
            <Route path="/settings" element={<Settingpg />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App
