import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries'
import Documentation from './pages/Documentation';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/pokedex",
        element:<Pokedex/>,
      },
      {
        path:"/legendaries",
        element:<Legendaries/>,
      },
      {
        path:"/documentation",
        element:<Documentation/>,
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

