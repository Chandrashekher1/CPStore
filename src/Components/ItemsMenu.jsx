import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemsMenu = () => {
  const { ItemsId } = useParams(); // Access the dynamic route parameter
  const [itemsMenu, setItemsMenu] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/constantData.json");
      const json = await response.json();
      const menuData = json?.data?.cards || [];
      const selectedItem = menuData.find((item) => item.id === ItemsId);
      setItemsMenu(selectedItem?.ItemsMenu || []);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ItemsId]);

  return (
    <div className="flex flex-wrap mx-48 ">
      {itemsMenu.length > 0 ? (
        itemsMenu.map((item) => (
          <div key={item.id} className=" border p-2 m-4 cursor-pointer w-60 rounded-lg" >
            <img src={item.cloudinaryImageId} alt="Image_Product" className="w-48 p-2" />
            <h3 className="font-semibold ">{item.name}</h3>
            <h4 className="font-semibold my-2">₹{item.rate}</h4>
            <p className="text-gray-600">{item.weigth} - {item.cuisines || "No cuisines available"}</p>
            <button className="border border-green-500 rounded-lg font-semibold text-green-700 my-4 p-2 ">ADD ME</button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No items found or loading...</p>
      )}
    </div>
  );
};

export default ItemsMenu;
