import React, { useEffect, useState } from 'react'
import ItemsCard from './ItemsCard'

const Items = () => {
  const [Items,setItems] = useState([])


  const fetchData = async () => {
    const data = await fetch('constantData.json')
    const json = await data.json()
    setItems(json.data?.cards || [])
    // console.log(json?.data?.cards);
  } 
  useEffect(() => {
    fetchData()
  } ,[])


  return (
    <div className='flex flex-wrap mx-[15%]'>
        {Items.map((item) => (
          <ItemsCard key={item?.info?.id} data={item?.info}/>
        ))}
    </div>
  )
}

export default Items