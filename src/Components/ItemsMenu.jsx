import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useItemsMenu from "../Hooks/useItemsMenu";

const ItemsMenu = () => {
  const { ItemsId } = useParams(); // Access the dynamic route parameter
  const ItemInfo = useItemsMenu(ItemsId); // Fetch menu data
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Ensure that ItemInfo is valid and extract items from `ItemsMenu`
    if (ItemInfo && ItemInfo.ItemsMenu && Array.isArray(ItemInfo.ItemsMenu)) {
      setFilteredItems(ItemInfo.ItemsMenu);
    }
  }, [ItemInfo]);

  return (
    <div>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.id} className="p-4 border-b">
            <h3 className="font-bold text-lg">{item.name}</h3>
            {/* <p className="text-gray-600">{item.cuisines}</p> */}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No items found or loading...</p>
      )}
    </div>
  );
};

export default ItemsMenu;
