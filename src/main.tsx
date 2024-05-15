import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import NewPage from './pages/NewPage';
import Detail from './pages/Detail';
import Update from './pages/Update';
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
  },
  {
    path: "/update/:productId",
    element: <Update></Update>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
