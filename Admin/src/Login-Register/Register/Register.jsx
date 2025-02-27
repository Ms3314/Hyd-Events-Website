import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import Footer from '../../Components/Footer/Footer'
import AuthNav from '../../Components/Navbar/AuthNav'
// import Login from '../Login/Login'
const Register = () => {
    const [registerData , setRegisterData] = useState({
        'name' : "",
        'email' : "",
        'password' : '',
        'college' : '',
    })
    const navigate = useNavigate();
    const submitRegisterForm = async () => {
        if (registerData.email == "") {
            return ;
        }
        if (registerData.password == '') {
            return ;
        }
        console.log("The form has been submitted")
        const payload = await axios.post("http://localhost:3000/api/v1/admin/signup" , registerData);
        console.log(payload , "what is the payload")
        if (payload.status == 200) {
            toast.success("Account has been created successfully ")
            toast.success("Please Login to continue")
            console.log("the data has been set")
            setTimeout(()=>{   
                navigate("/");
            },300)
        } else {
            alert("No data available")
            console.log(payload.data.message)
        }
    }
  return (
    <div>
        <AuthNav/>

        <Toaster
            position="bottom-right"
            reverseOrder={false}
        />
        <div className='
        flex flex-col bg-gray-300 justify-center items-center w-full max-w-md mx-auto my-16 shadow-lg rounded-lg'>
            <div className='flex mt-10 justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='text' value={registerData.name} 
                        onChange={(e)=>
                            setRegisterData((prev)=>({ ...prev , name : e.target.value})
                        )} 
                        placeholder='Name'
                        />     
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='text' value={registerData.email} 
                        onChange={(e)=>
                            setRegisterData((prev)=>({ ...prev , email : e.target.value})
                        )} 
                        placeholder='Email'
                        />     
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='text' value={registerData.college} 
                        onChange={(e)=>
                            setRegisterData((prev)=>({ ...prev , college : e.target.value})
                        )} 
                        placeholder='College'
                        />     
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='password' value={registerData.password} 
                    onChange={(e)=>
                        setRegisterData((prev)=>({ ...prev , password : e.target.value})
                    )} 
                    placeholder='Password'
                    />                 
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-black text-center text-white m-2 p-1 w-48 h-8 rounded-xl' onClick={() => {submitRegisterForm()}}>
                    Register
                </button>
            </div>
            <div className='flex justify-center items-center p-2 m-2'>
                Already have an Account ?
                <Link className='text-red-600 p-1' to='/'>Login</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Register