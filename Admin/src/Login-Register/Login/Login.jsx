import React from 'react'
import { Link } from 'react-router-dom'
import Register from '../Register/Register'
const Login = () => {
  return (
    <div >
        <div className='flex flex-col bg-gray-300 justify-center items-center w-full max-w-md mx-auto my-16 shadow-lg rounded-lg'>
        {/* <div className='flex flex-col bg-gray-300 justify-center items-center w-75 mx-96 my-32 shadow-lg rounded-lg'> */}
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg mt-12'>
                <input className='outline-none rounded-lg p-1' type='email' placeholder='Email Id'/>
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='password' placeholder='Password'/>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-black text-white m-2 p-1 w-48 h-8 rounded-xl' onClick={() => {}}>
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