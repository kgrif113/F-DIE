import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser} = UserAuth()

  const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        // const user = await createUserWithEmailAndPassword(auth, email, password)
        //   console.log(user)
        try {
          await createUser(email, password)
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
    <div>
      <h1 className='text-2xl font-bold py-2 text-center'>Create an account</h1>
    </div>
    <form onSubmit={handleSubmit} className='text-center'>
      <div className='flex flex-col py-2'>
        <label className='py=2 font-medium'>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} className='border p-3 maxwidth: 20px' type="email" />
      </div>
    <div className='flex flex-col py-2'>
        <label className='py=2 font-medium'>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className='border p-3 ' type="password" />
      </div>
      <button type="submit" className='border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</button>
    </form>
    <p className='py-2 text-center'>
        Already have an account? <Link className=' underline text-purple-700' to='/'>Sign in.</Link>
      </p>
  </div>
)
}

export default Signup
