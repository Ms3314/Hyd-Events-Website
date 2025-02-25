import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Register from '../Register/Register'
import axios from 'axios'
const Login = () => {
    const [loginData , setLoginData] = useState({
        'email' : "",
        'password' : '',
    })

    const submitLoginForm = async () => {
        if (loginData.email == "") {
            return ;
        }
        if (loginData.password == '') {
            return ;
        }
        console.log("The form has been submitted")
        const payload = await axios.post("http://localhost:3000/api/v1/admin/signin" , loginData);
        console.log(payload , "what is the payload")
        if (payload.status == 200) {
            const token = payload.data.token;
            localStorage.setItem("token",token);
            console.log("the data has been set")
        } else {
            alert("No data available")
            console.log(payload.data.message)
        }
    }
  return (
    <div >
        <div className='flex flex-col bg-gray-300 justify-center items-center w-full max-w-md mx-auto my-16 shadow-lg rounded-lg'>
        {/* <div className='flex flex-col bg-gray-300 justify-center items-center w-75 mx-96 my-32 shadow-lg rounded-lg'> */}
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg mt-12'>
                <input className='outline-none rounded-lg p-1' type='email' value={loginData.email} 
                onChange={(e)=>
                    setLoginData((prev)=>({ ...prev , email : e.target.value})
                )} 
                placeholder='Email Id'
                />
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className=' outline-none rounded-lg p-1' type='password' placeholder='Password'
                    onChange={(e)=>
                        setLoginData((prev)=>({ ...prev , password : e.target.value})
                    )} 
                />
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-black text-white m-2 p-1 text-center  w-48 h-8 rounded-xl' onClick={() => {submitLoginForm()}}>
                    Login
                </button>
            </div>
            <div className='flex justify-center items-center p-2 m-2'>
                New Organization ?
                <Link className='text-red-600 p-1' to="/Register">Register</Link>
            </div>
        </div>

    </div>
  )
}

export default Login