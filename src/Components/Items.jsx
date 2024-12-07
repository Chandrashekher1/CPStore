import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";

const Items = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/constantData.json");
        const json = await response.json();
        setCards(json?.data?.cards || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4 mx-64">
      {cards.map((card) => (
        <ItemsCard key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Items