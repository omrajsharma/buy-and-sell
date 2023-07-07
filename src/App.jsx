import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import SellProduct from './pages/SellProduct'
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
          <Link to="/sell">Sell</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sell' element={<SellProduct />} />
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
