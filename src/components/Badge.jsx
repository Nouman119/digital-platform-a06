import React from 'react'

export default function Badge() {
  return (
    <section className="w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-10 px-4">
      
      
      <div className="max-w-300 mx-auto">
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-8 md:gap-0">
          
          <div className="flex flex-col items-center text-center w-full md:border-r border-white/20">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</h3>
            <p className="text-white/80 text-sm md:text-base font-medium">Active Users</p>
          </div>

          <div className="flex flex-col items-center text-center w-full md:border-r border-white/20">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">200+</h3>
            <p className="text-white/80 text-sm md:text-base font-medium">Premium Tools</p>
          </div>

          <div className="flex flex-col items-center text-center w-full">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</h3>
            <p className="text-white/80 text-sm md:text-base font-medium">Rating</p>
          </div>

        </div>
      </div>
    </section>
  )
}
