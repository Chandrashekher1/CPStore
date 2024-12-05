import React, { useEffect, useState } from 'react'

const useItemsMenu = (ItemId) => {
    const [Menu,setMenu] = useState(null)

    const fetchData = async () => {
        const data = await fetch('/constantData.json')
        const json = await data.json()
        setMenu(json?.data?.cards)
        // console.log(json?.data?.cards);
        
    } 
    useEffect(() => {
        fetchData()
    } ,[ItemId])

    return Menu
 
}

export default useItemsMenu