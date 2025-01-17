import React from 'react'
import { Link } from 'react-router-dom'
// import Login from '../Login/Login'
const Register = () => {
  return (
    <div>
        <div className='
        flex flex-col bg-gray-300 justify-center items-center w-full max-w-md mx-auto my-16 shadow-lg rounded-lg'>
            <div className='flex justify-center items-center m-2 w-48 max-w-sm h-10 bg-white rounded-lg mt-12'>
                <input className='outline-none rounded-lg p-1' type='text' placeholder='Organization Name'/>
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='email' placeholder='Org email'/>
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='password' placeholder='Org Password'/>
            </div>
            <div className='flex justify-center items-center m-2 w-48 h-10 bg-white rounded-lg'>
                <input className='outline-none rounded-lg p-1' type='text' placeholder='Affilated College'/>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-black text-white m-2 p-1 w-48 h-8 rounded-xl' onClick={() => {}}>
                    Register
                </button>
            </div>
            <div className='flex justify-center items-center p-2 m-2'>
                Already have an Account ?
                <Link className='text-red-600 p-1' to='/Login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register