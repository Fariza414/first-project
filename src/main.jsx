import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage from './pages/mainPage.jsx'
import GenerationPage from './pages/generationPage.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/generation',
    element: <GenerationPage />
  },
  {
    path: '/about',
    element: <About />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
