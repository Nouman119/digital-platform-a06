import { useState } from 'react'
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Badge from './components/Badge.jsx'
import ProductSection from './components/ProductSection.jsx'
import Steps from './components/Steps.jsx'
import Pricing from './components/Pricing.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  const removeFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    if(itemToRemove) {
      toast.error(`${itemToRemove.name} removed from cart.`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  // Clear cart after successful checkout
  const clearCart = () => {
    setCart([]);
    toast.info("Purchase successful! Cart cleared.", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer />

      <Navbar cartCount={cart.length} />
      
      <Banner />
      <Badge />

      {/* Passing clearCart function as props */}
      <ProductSection 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <div className="max-w-300 mx-auto px-4">
        <Steps />
        <Pricing />
      </div>

      <Newsletter />
      <Footer />
    </>
  )
}

export default App;