import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const ItemsMenu = () => {
  const { ItemsId } = useParams(); // Access the dynamic route parameter
  const [itemsMenu, setItemsMenu] = useState([]);
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const response = await fetch("/constantData.json");
      const json = await response.json();
      const menuData = json?.data?.cards || [];
      const selectedItem = menuData.find((item) => item.id === ItemsId);
      setItemsMenu(selectedItem?.ItemsMenu || []);
      console.log(selectedItem);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ItemsId]);

  if (!onlineStatus) {
    return <h1>Looks like you're offline! Please check your internet connection.</h1>;
  }

  if (itemsMenu.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap mx-4">
      {itemsMenu.map((item) => (
        <div key={item.id} className="border m-2 w-32 rounded-lg text-center">
          <img
            src={item.cloudinaryImageId}
            alt="Image_Product"
            className="w-28 p-2 mx-2"
          />
          <h3 className="font-semibold">{item.name}</h3>
          <h4 className="font-bold my-2">₹{item.rate}</h4>
          <p className="text-gray-600">
            {item.weigth} - {item.cuisines || ""}
          </p>
          <button className="border cursor-pointer border-green-500 rounded-lg font-semibold text-green-700 my-4 p-2">
            ADD ME
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsMenu;
