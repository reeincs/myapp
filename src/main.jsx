import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import MainLayout from './layouts/MainLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/app' element={<App />} />

          <Route index element={<Home />} />

          <Route path='/sobre' element={<Sobre />} />

          <Route path='/contato' element={<Contato />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login/>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='register' element={<Register/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
