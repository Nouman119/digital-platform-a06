import React from 'react'

export default function Newsletter() {
  return (
    
    <section className="w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-20 px-6">
      
      <div className="max-w-[1200px] mx-auto text-center text-white">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          
          <button className="btn w-full sm:w-auto bg-white hover:bg-gray-100 text-[#4f39f6] border-none rounded-full px-10 h-[56px] text-lg font-bold normal-case">
            Explore Products
          </button>

          <button className="btn btn-outline w-full sm:w-auto border-white hover:bg-white hover:text-[#4f39f6] text-white rounded-full px-10 h-[56px] text-lg font-bold normal-case">
            View Pricing
          </button>
        </div>

        <p className="text-white/70 text-sm font-medium">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
    

  )
}
