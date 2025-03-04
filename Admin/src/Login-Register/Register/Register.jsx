import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import hydEventsLogo from '../../assets/hydEventsLogo.png'
// import Login from '../Login/Login'
const Register = () => {
    const [registerData, setRegisterData] = useState({
      name: "",
      email: "",
      password: "",
      college: "",
    });
  
    const navigate = useNavigate();
    const checkCred = () => {
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
      const validateEmailRegex = /^\S+@\S+\.\S+$/;

      if (!passwordRegex.test(registerData.password)) {
        toast.error("Your Password should have atleast 8 charaters with atleast one digit and an upper and lower caseletter ")
        return false;
      }
      if (!validateEmailRegex.test(registerData.email)) {
        toast.error("Invalid Email Adress ")
        return false;
      }
      return true;
    }
    const submitRegisterForm = async () => {
      if (!registerData.email || !registerData.password) {
        toast.error("Please fill in all required fields!");
        return;
      }
      
      try {
        // console.log("helloooo")
        if (!checkCred()) {
          // console.log("Hello something wrong")
          return 0;
        }
        // console.log("what is the problem")
        const payload = await axios.post(
          "http://localhost:3000/api/v1/admin/signup",
          registerData
        );
        if (payload.status === 200) {
          toast.success("Account created successfully!");
          toast.success("Please Login to continue.");
          setTimeout(() => navigate("/"), 500);
        }
      } catch (error) {
        toast.error("Error creating account. Try again!");
      }
    };
  
    return (
      <div className="flex h-screen">
        {/* Left - Register Form */}
          <Toaster position="bottom-right" />
        <div className="w-full lg:w-1/2 flex flex-col  justify-center items-center bg-gray-100">
          <div className="bg-white w-[60%] p-8 shadow-lg rounded-lg ">
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <div className="mb-3">
              <input
                type="text"
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="College"
                value={registerData.college}
                onChange={(e) =>
                  setRegisterData((prev) => ({ ...prev, college: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded-lg"
              onClick={submitRegisterForm}
            >
              Register
            </button>
            <p className="text-center text-sm mt-3">
              Already have an account?{" "}
              <Link to="/" className="text-red-600">
                Login
              </Link>
            </p>
          </div>
        </div>
  
        {/* Right - Logo */}
        <div className="hidden lg:flex w-1/2 justify-center items-center bg-gray-900">
          <img src={hydEventsLogo} className="w-40" alt="Hyd Events Logo" />
        </div>
      </div>
    );
  };

export default Register