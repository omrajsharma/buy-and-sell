import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>

        <nav>
          <Link to="/" className='brand'>
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png" alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productdetails/:productId' element={<ProductDetails />} />
        </Routes>
        
        <footer>
          Made with ❤️ by Omraj 
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
