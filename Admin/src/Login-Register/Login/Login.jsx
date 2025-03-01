import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import hydEventsLogo from '../../assets/hydEventsLogo.png'

const Login = () => {
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
  
    const submitLoginForm = async () => {
      if (loginData.email === "" || loginData.password === "") return;
  
      try {
        const payload = await axios.post("http://localhost:3000/api/v1/admin/signin", loginData);
        if (payload.status === 200) {
          localStorage.setItem("token", payload.data.token);
          window.location.reload();
        } else {
          alert("No data available");
        }
      } catch (error) {
        alert("Login failed!");
      }
    };
  
    return (
      <div className="flex h-screen flex-col lg:flex-row  w-full bg-gray-400">
        {/* Left Side - Login Form */}
        <div className=" flex flex-col lg:w-[50%] justify-center h-full items-center bg-gray-100 p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Email Id"
                value={loginData.email}
                onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Password"
                onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <button
              className="w-full bg-gray-900 pl-4 text-white py-2 rounded-lg hover:bg-gray-800"
              onClick={submitLoginForm}
            >
              Login
            </button>
            <div className="text-center mt-4">
              New Organization? <Link className="text-red-600" to="/Register">Register</Link>
            </div>
          </div>
        </div>
  
        {/* Right Side - Logo */}
        <div className="hidden  lg:flex lg:w-[50%] justify-center items-center bg-gray-900">
            <img src={hydEventsLogo} className='w-40' alt="" />
        </div>
      </div>
    );
  };
  

export default Login