import React from 'react';

const ProductCard = ({ product, handleAddToCart, isInCart }) => {
  return (
    <div className="relative bg-white border border-gray-100 rounded-4xl p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all">
      
      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
        <img src={product.icon} alt={product.name} className="w-10 h-10 object-contain" />
      </div>

      <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
      <p className="text-gray-500 mb-6 flex-grow">{product.description}</p>

      <div className="flex items-baseline mb-8">
        <span className="text-3xl font-bold">${product.price}</span>
        <span className="text-gray-400 ml-1">/{product.period}</span>
      </div>

      <button 
        disabled={isInCart} 
        onClick={() => handleAddToCart(product)} 
        className={`w-full h-14 rounded-full font-bold transition-all ${
          isInCart 
          ? 'bg-green-100 text-green-600 cursor-not-allowed' 
          : 'bg-[#8b2cf5] text-white hover:bg-[#7a25d9]' 
        }`}
      >
        {isInCart ? '✓ Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;