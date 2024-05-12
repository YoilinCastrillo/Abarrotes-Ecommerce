import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import NewPage from './pages/NewPage';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  
  {
    path: "/new",
    element: <NewPage></NewPage>
  },
  {
    path: "/productos/:productId",
    element: <Detail></Detail>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
