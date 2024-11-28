import React, { useEffect } from 'react'

const ItemsCard = ({name,cuisines}) => {

  return (
    <div className=''>
        <div className='w-56 mx-4 my-6 border rounded-xl shadow-sm cursor-pointer hover:scale-90 '>
        <img 
          className='w-full object-cover  h-24 rounded-lg bg-none'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/90e56c9a689a6ec9b8a6136cbe058834" alt="" />
        <p className='font-bold text-lg text-gray-800 my-1 -ml-32'>{name}</p>
        <p className='font-semibold text-lg -ml-16 text-gray-500'>{cuisines}</p>
    </div>
    </div>
    
  )
}

export default ItemsCard