import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from './routes/Cadastro.jsx'
import Home from './routes/Home.jsx'
import Contato from './routes/Contato.jsx'
import App from './App.jsx'

import './index.css'
import { DataContextProvider } from './context/DataContextProvider.jsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/contato",
        element: <Contato />,
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(


<StrictMode>
 
 <DataContextProvider>
  <RouterProvider router={router} />
 </DataContextProvider>
  
</StrictMode>,
);
