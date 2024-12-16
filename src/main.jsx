import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './routes/Root.jsx';

import Products from './components/Products.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import Logout from './components/Logout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children:[
      {path:'/',element:< Home/>},
      {path:'/products',element:<Products/>},
      {path:'/login',element:<Login/>},
      {path:'/logout',element:<Logout/>}
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
