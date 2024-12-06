import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Login from './Components/Login';
import Cart from './Components/Cart';
import ItemsMenu from './Components/ItemsMenu';
import ItemsCard from './Components/ItemsCard';
import Footer from "./Components/Footer";

// App Layout Component
const AppLayout = () => (
  <div className="App">
    <Header />
    <Body/>
    <Outlet />
    <Footer/>
    
  </div>
);

// Component to display a list of cards (ItemList)
const ItemList = () => {
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
    <div className="flex flex-wrap justify-center p-4">
      {cards.map((card) => (
        <ItemsCard key={card.id} data={card} />
      ))}
    </div>
  );
};

// Define router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ItemList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/items/:ItemsId",
        element: <ItemsMenu />,
      },
    ],
  },
]);

// Main App Component
const App = () => (
  <RouterProvider router={appRouter} />
);

export default App;
