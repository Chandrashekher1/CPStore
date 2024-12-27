import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Login from './Components/Login';
import Cart from './Components/Cart';
import ItemsMenu from './Components/ItemsMenu';
import Items from "./Components/Items";

const AppLayout = () => (
  
  <div className="overflow-x-hidden font-sans">
    <Header />
    <Body/>
    <Outlet />
    {/* <Footer/> */}
  </div>
);


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Items />,
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


const App = () => (
  <RouterProvider router={appRouter} />
);

export default App;
