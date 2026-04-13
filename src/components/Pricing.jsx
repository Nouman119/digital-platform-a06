import React from 'react'

export default function Pricing() {
  return (

    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-4">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold pb-4 text-[#1e293b]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Starter Plan */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1e293b]">Starter</h3>
              <p className="text-gray-500 text-sm mt-2">Perfect for getting started</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-bold text-[#1e293b]">$0</span>
                <span className="text-gray-400 ml-1">/Month</span>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-10 flex-grow">
              {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn w-full bg-[#7e22ce] hover:bg-[#6b1eb0] text-white border-none rounded-2xl h-[56px] text-lg font-normal">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-linear-to-b from-[#7e22ce] to-[#9514fa] rounded-3xl p-8 shadow-xl text-white transform md:scale-105 z-10 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fef3c7] text-[#92400e] px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              Most Popular
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-purple-100 text-sm mt-2">Best for professionals</p>
              <div className="mt-6 flex items-baseline text-white">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-purple-200 ml-1">/Month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-white">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn w-full bg-white hover:bg-gray-100 text-[#7e22ce] border-none rounded-2xl h-[56px] text-lg font-normal">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1e293b]">Enterprise</h3>
              <p className="text-gray-500 text-sm mt-2">For teams and businesses</p>
              <div className="mt-6 flex items-baseline text-[#1e293b]">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400 ml-1">/Month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn w-full bg-[#7e22ce] hover:bg-[#6b1eb0] text-white border-none rounded-2xl h-[56px] text-lg font-normal">
              Contact Sales
            </button>
          </div>

        </div>
      </div>

    </section>

    
  )
}
