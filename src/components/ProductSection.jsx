import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductSection({ cart, handleAddToCart, removeFromCart, clearCart }) {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-300 mx-auto py-16 md:py-24 px-4">
      
      {/* Page Header */}
      <div className="text-center mb-16 md:mb-20">
        <h1 className="text-[#0f172a] text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Tab Toggle */}
      <div className="flex justify-center mb-16 md:mb-20">
        <div className="inline-flex items-center p-1.5 bg-white border border-gray-100 rounded-full shadow-sm">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'products' ? 'bg-[#7e22ce] text-white shadow-lg' : 'bg-transparent text-gray-500'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'cart' ? 'bg-[#7e22ce] text-white shadow-lg' : 'bg-transparent text-gray-500'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(item => (
            <ProductCard 
              key={item.id} 
              product={item} 
              handleAddToCart={handleAddToCart}
              isInCart={cart.find(p => p.id === item.id)} 
            />
          ))}
        </div>
      ) : (
        /* Cart Section */
        <div className="w-full max-w-4xl mx-auto">
          {cart.length > 0 ? (
            <div className="bg-white border border-gray-100 rounded-4xl p-6 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-8">Your Cart</h2>
              
              <div className="space-y-4 mb-10">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-50 hover:bg-gray-100 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 overflow-hidden">
                        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1e293b] text-base md:text-lg">{item.name}</h3>
                        <p className="text-gray-400 text-sm font-medium">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-ghost text-red-400 hover:text-red-600 capitalize font-medium text-sm border-none"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-8">
                <span className="text-gray-400 font-medium">Total:</span>
                <span className="text-3xl font-extrabold text-[#1e293b]">${totalPrice}</span>
              </div>

              {/* Proceed To Checkout Button */}
              <button 
                onClick={clearCart}
                className="btn w-full bg-[#8b2cf5] hover:bg-[#7a25d9] text-white border-none rounded-2xl h-15 text-lg font-bold shadow-lg shadow-purple-100 transition-all active:scale-[0.98]"
              >
                Proceed To Checkout
              </button>
            </div>
          ) : (
            <div className="text-center py-24 bg-gray-50 rounded-4xl border-2 border-dashed border-gray-200">
              <div className="text-6xl mb-6 opacity-30">🛒</div>
              <h2 className="text-2xl font-bold text-gray-400 mb-6">Your cart is empty</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}