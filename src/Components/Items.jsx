import React, { useEffect, useState } from 'react'
import ItemsCard from './ItemsCard'
import Shimmer from './Shimmer'


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


  return Items.length===0 ? <Shimmer/> : (
    <div className='flex flex-wrap mx-64'>
        {Items.map((item) => (
          <ItemsCard key={item?.info?.id} data={item}/>
        ))}
    </div>
  )
}

export default Items