import React, { useEffect } from 'react'

const ItemsCard = (data) => {
  const {
    name,
    cuisines,
    cloudinaryImageId
  } = data?.data
  
  return (
    <div className='shadow-sm rounded-xl m-4 border'>
        <div className='w-40  cursor-pointer hover:scale-90 '>
        <img 
          className='w-36 h-36'
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142" alt="" />
        <p className='font-semibold text-base text-gray-800 my-1 text-wrap'>{name}</p>
        <p className='font-semibold text-md text-gray-500 text-wrap'>{cuisines}</p>
        
    </div>
    </div>
    
  )
}

export default ItemsCard