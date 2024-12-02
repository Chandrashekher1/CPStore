import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Login from './Components/Login';
import Cart from './Components/Cart';

function App() {
  
  const AppLayout = () => {
    return (
      <div className='App'>
          <Header/>
          <Outlet/>
      </div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (<AppLayout/>),
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/cart",
          element: <Cart/>
        }
      ]
    },
    
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
