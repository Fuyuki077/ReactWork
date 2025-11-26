import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './pages/Home/headerer/headerer.jsx'
import Resumo from './pages/Home/resumo.jsx'
import Introducao from './pages/Home/introducao.jsx'
import FundamentaçãoTeórica from './pages/Home/fundamentacaoTeorica.jsx'
import Objetivos from './pages/Home/objetivos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Resumo />
    <Introducao />
    <FundamentaçãoTeórica />
    <Objetivos />
  </StrictMode>,
)
