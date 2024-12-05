import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  

  return (
    <div className='flex justify-between p-2 bg-white shadow-md'>
      <div className='px-6'>
        <img className='w-16 h-16 cursor-pointer ' src="https://cdn.vectorstock.com/i/1000v/98/50/store-icon-logo-vector-27309850.jpg" alt="logo" />

      </div>
      <div className='flex py-4'>
        <span className='flex border h-12 border-black  bg-gray-200 rounded-lg'>
          <img className='h-6 w-6 m-3' src="https://icons.veryicon.com/png/o/miscellaneous/monochrome-icon-1/search-521.png" alt="" />
        <input 
          className='w-96 rounded-lg  border  bg-gray-200 focus:outline-none'
          placeholder='Search "milk"'
         type="text" />
        </span>
        <button className=' mx-3 px-2 bg-red-600 font-bold text-white rounded-xl'>Search</button>
      </div>
      <div className='flex p-4 cursor-pointer'>
        <Link to={"/"}><h3 className='mx-6 font-bold text-lg'>Home</h3></Link>
        <Link to={"/cart"}><h3 className='mx-6 font-bold text-lg'>Cart</h3></Link>
        <Link to={"/login"}><h3 className='mx-6 font-bold text-lg'>Login</h3></Link>
      </div>
    </div>
  )
}

export default Header