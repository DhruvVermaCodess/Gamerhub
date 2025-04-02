import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-30 bg-gradient-to-br from-gray-800 to-gray-900">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
            NEW COLLECTION
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Level Up Your <span className="text-red-500">Gaming Setup</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400">
            Premium gaming gear designed for performance and style. Dominate
            the competition with pro-grade equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="border border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 rounded-lg font-semibold transition-colors">
              Explore Gear
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/2f/88/36/2f88366394c65d64d812780e9417a79c.jpg"
            alt="Gaming Setup"
            className="rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
          />
          <div className="absolute -bottom-6 -right-6 bg-gray-800 p-4 rounded-xl shadow-lg">
            <div className="text-red-500 font-bold text-xl">Pro Series</div>
            <div className="text-gray-300 text-sm">Champion Edition</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection