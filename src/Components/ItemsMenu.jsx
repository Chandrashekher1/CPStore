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
    <div className="p-6">
      {itemsMenu.length > 0 ? (
        itemsMenu.map((item) => (
          <div key={item.id} className="p-4 border-b">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-600">{item.cuisines || "No cuisines available"}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No items found or loading...</p>
      )}
    </div>
  );
};

export default ItemsMenu;
