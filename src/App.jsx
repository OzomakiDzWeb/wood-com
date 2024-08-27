import React from 'react'
import Navbar from './component/Navbar'
import { Route ,Routes } from 'react-router'
import Footer from './component/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Shop from './pages/Shop'
import CartShop from './component/CartShop'
import FavoritProduct from './component/FavoritProduct'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='my-1'>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Features />} path="/features" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<CartShop />} path="/cartshop" />
          <Route element={<FavoritProduct />} path="/favoritlist" />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App