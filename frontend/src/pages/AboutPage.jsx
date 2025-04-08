import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Founder Section */}
      <section className="pt-28 pb-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6">Meet The <span className="text-red-500">Founder</span></h3>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-red-400">Dhruv Verma</span>, a lifelong gamer and tech enthusiast, founded Gadgette Hub with a simple goal: to create a platform where gamers could find the best peripherals without the hassle of sorting through countless options.
              </p>
              <p className="text-gray-300 mb-4">
                Having experienced firsthand the impact that quality peripherals can have on gaming performance, Dhruv set out to build a business that prioritizes quality, affordability, and customer satisfaction.
              </p>
              <p className="text-gray-300">
                "I believe that every gamer deserves access to tools that enhance their experience and performance. That's the driving force behind Gadgette Hub." - Dhruv Verma
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-60 h-60 bg-gray-700 rounded-full flex items-center justify-center  overflow-hidden">
                <img src="/profile.png" alt="dhruv" className='w-full h-full object-top object-cover' />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Offer */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">What We <span className="text-red-500">Offer</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Premium Selection</h4>
              <p className="text-gray-300">
                We handpick every product in our inventory, ensuring each item meets our strict standards for quality, performance, and durability.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Expert Guidance</h4>
              <p className="text-gray-300">
                Our team of gaming enthusiasts is always available to help you find the perfect peripheral to elevate your gaming setup.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Competitive Pricing</h4>
              <p className="text-gray-300">
                We believe that quality gaming gear should be accessible to all. That's why we strive to offer competitive prices without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Our <span className="text-red-500">Values</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">Q</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Quality First</h4>
                <p className="text-gray-300">
                  We never compromise on quality. Every product in our inventory goes through a rigorous selection process to ensure it meets our high standards.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">C</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Community Focus</h4>
                <p className="text-gray-300">
                  We're not just a store; we're part of the gaming community. We actively engage with our customers and value their feedback.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">I</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className="text-gray-300">
                  We stay ahead of the curve by constantly searching for the latest and most innovative gaming peripherals in the market.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">S</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Service Excellence</h4>
                <p className="text-gray-300">
                  Customer satisfaction is at the heart of everything we do. From pre-purchase consultation to after-sales support, we're here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Join Our Gaming Community</h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Discover the difference that premium gaming peripherals can make. Browse our collection today and take your gaming experience to the next level.
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;