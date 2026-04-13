import React from 'react'
import banner from '../assets/banner.png'

export default function Banner() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-300 mx-auto px-6 lg:px-4 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">
        
        <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
          
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-1 rounded-full border border-purple-100">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
            <span className="text-purple-600 text-xs sm:text-sm font-semibold">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-[1.2] lg:leading-tight">
            Supercharge Your <br className="hidden sm:block" /> 
            <span className="text-gray-800">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button className="btn w-full sm:w-auto bg-[#7e22ce] hover:bg-[#6b1eb0] border-none text-white px-8 h-14 rounded-full normal-case text-lg font-medium">
              Explore Products
            </button>

            <button className="btn btn-outline w-full sm:w-auto border-purple-200 hover:bg-purple-50 hover:border-purple-300 rounded-full px-8 h-14 text-[#7e22ce] normal-case text-lg font-medium flex items-center justify-center gap-2">
              <span className="w-6 h-6 border-2 border-[#7e22ce] rounded-full flex items-center justify-center">
                <span className="ml-1 border-l-[6px] border-l-[#7e22ce] border-y-4 border-y-transparent"></span>
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 w-full order-1 md:order-2">
          <div className="relative z-10 w-full max-w-100 md:max-w-137.5 mx-auto">
            <img 
              src={banner} 
              alt="Digital Workflow Visualization" 
              className="rounded-2xl w-full h-auto object-cover animate-pulse"
            />
          </div>
        </div>

      </div>
    </section>
  )
}