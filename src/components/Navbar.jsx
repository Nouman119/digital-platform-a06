import React from 'react'
import cartImg from '../assets/cart.svg'
import logo from '../assets/logo.svg'

export default function Navbar({ cartCount }) {
  return (
    <div className="navbar container mx-auto h-20 items-center">
      
      <div className="navbar-start">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a> 
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="flex items-center gap-8 text-base font-medium text-[#101727]">
          <li><a className='hover:text-purple-800' href="#">Products</a></li>
          <li><a className='hover:text-purple-800' href="#">Features</a></li>
          <li><a className='hover:text-purple-800' href="#">Pricing</a></li>
          <li><a className='hover:text-purple-800' href="#">Testimonials</a></li>      
          <li><a className='hover:text-purple-800' href="#">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-5 flex items-center">
        <div className="indicator cursor-pointer">
          {cartCount > 0 && (
            <span className="indicator-item badge border-none bg-[#9514fa] text-white text-[10px] w-5 h-5 rounded-full p-0 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
          <img className='w-6 h-6' src={cartImg} alt="cart" />
        </div>

        <a className='text-base font-normal' href="#">Login</a>
        
        <button className="btn border-none min-h-0 h-auto bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white text-base font-normal py-2.5 px-6.25 my-6">
            Get Started
        </button>
      </div>
      
    </div>
  )
}