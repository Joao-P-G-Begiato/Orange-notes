import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landpage } from './pages/Landpage.jsx'
import { Login } from './pages/Login.jsx'
import { Home } from './pages/Home.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import './reset.css'
import { Provider } from './context/Provider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Landpage/>} />
          <Route path='/login' element = {<Login />} />
          <Route path='/home' element = {<Home />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
