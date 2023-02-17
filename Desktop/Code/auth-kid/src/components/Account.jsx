import React from 'react'

const Account = () => {
  return (
    <div className='text-center max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-3xl font-bold py-4'>Welcome back Kenny</h1>
      <h3 className='text-2xl font-bold py-4'>Macros</h3>
      <p>Calories: </p>
      <p>Protein: </p>
      <p>Carbs: </p>
      <p>Fat: </p>


      <button className=' text-center border-red-500 bg-red-600 hover:bg-red-500 border px-6 py-2 my-4'>Logout</button>
    </div>
  )
}

export default Account
