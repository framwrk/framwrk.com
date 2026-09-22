import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Features from './pages/Features.tsx'
import Pricing from './pages/Pricing.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'features', Component: Features },
      { path: 'pricing', Component: Pricing },
      { path: 'about', Component: About },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
