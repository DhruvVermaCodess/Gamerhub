import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'
import GamingCategories from '../components/GamingCategories'
import GamingPerks from '../components/GamingPerks'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    document.title = "Gadgettehub - Premium Gaming Gear";
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 w-full overflow-hidden">
        {/* Glowing background effects */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>
          <HeroSection />
          <FeaturedProducts />
          <GamingCategories />
          <GamingPerks />
      </div>
    </>
  )
}

export default HomePage