import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Summary from './Components/Summary/Summary';
import Main from './Components/Main/Main';
import './main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/summary',
        element: <Summary></Summary>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='style'>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
  
)
