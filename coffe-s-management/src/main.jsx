import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Usuario from './pages/Usuario'

const router = createBrowserRouter([
  {//routing de pag. 
    path: '/',
    element: <App />,
  },
  {path: '/Inicio',
  element: <Inicio/>},
  {
    path: '/Usuario',
    element: <Usuario/>
  }

])
  // pagina.array.forEach(pagina => {
  //   router.push({
  //     path: pagina,
  //     element: <div>{pagina.name}</div>
  //   })
  // });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
