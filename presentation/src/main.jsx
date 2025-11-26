import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Menu from './pages/Home/headerer/headerer.jsx'
// import CardNav from './pages/Home/headerer/CardNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    {/* <Home /> */}
  </StrictMode>,
)
