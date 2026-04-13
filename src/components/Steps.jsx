import React from 'react'

import userAccount from '../assets/user.png'
import stepsProduct from '../assets/package.png'
import stepsCreating from '../assets/rocket.png'

export default function Steps() {
  return (

    <section className="py-16 md:py-24 bg-white">
      
      <div>        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b]">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Create Account */}
          <div className="relative group">
            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#7e22ce] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
              01
            </div>
            
            <div className="h-full border border-gray-100 rounded-3xl py-[88px] px-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px] bg-white">
              {/* Icon Container */}
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                <img src={userAccount} alt="Create Account" />                
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Create Account</h3>
              <p className="text-gray-500 leading-relaxed">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          {/* Choose Products */}
          <div className="relative group">
            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#7e22ce] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
              02
            </div>

            <div className="h-full border border-gray-100 rounded-3xl py-[88px] px-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px] bg-white">
              {/* Icon Container */}
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                <img src={stepsProduct} alt="Choose Products" />  
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Choose Products</h3>
              <p className="text-gray-500 leading-relaxed">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          {/* Start Creating */}
          <div className="relative group">
            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#7e22ce] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
              03
            </div>

            <div className="h-full border border-gray-100 rounded-3xl py-[88px] px-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px] bg-white">
              {/* Icon Container */}
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                <img src={stepsCreating} alt="Start Creating" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Start Creating</h3>
              <p className="text-gray-500 leading-relaxed">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}