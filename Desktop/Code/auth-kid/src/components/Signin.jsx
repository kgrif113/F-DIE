import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
    <div>
      <h1 className='text-2xl font-bold py-2 text-center'>Log into your account</h1>
    </div>
    <form className='text-center'>
      <div className='flex flex-col py-2'>
        <label className='py=2 font-medium'>Email Address</label>
        <input className='border p-3 maxwidth: 20px' type="email" />
      </div>
    </form>
    <form className='text-center'>
    <div className='flex flex-col py-2'>
        <label className='py=2 font-medium'>Password</label>
        <input className='border p-3 ' type="password" />
      </div>
      <button className='border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign in</button>
    </form>
    <p className='py-2 text-center'>
        Don't have an account yet? <Link className='underline text-purple-700' to='/Signup'>Sign up.</Link>
      </p>
  </div>
  )
}

export default Signin
