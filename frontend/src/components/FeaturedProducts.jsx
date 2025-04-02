import React from 'react'
import { ShoppingCart, Star } from "lucide-react";

const FeaturedProducts = () => {
      // Sample data with gaming-focused products
  const featuredProducts = [
    {
      id: 1,
      name: "Pro Gaming Mouse",
      price: 129.99,
      rating: 4.9,
      image:
        "https://m.media-amazon.com/images/I/810nnJNQ40L._SY355_.jpg",
      category: "Gaming Gear",
      isNew: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 199.99,
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/61cOWihbRbL._SY355_.jpg",
      category: "Peripherals",
      isFeatured: true,
    },
    {
      id: 3,
      name: "RGB Gaming Chair",
      price: 499.99,
      rating: 4.7,
      image: "https://xrockergaming.com/cdn/shop/files/5139601_1.jpg",
      category: "Furniture",
    },
    {
      id: 4,
      name: "Wireless Headset",
      price: 299.99,
      rating: 4.9,
      image:
        "https://m.media-amazon.com/images/I/71pFeJFdJQL._SY355_.jpg",
      category: "Audio",
    },
  ];
  return (
    <section className="py-20 bg-gray-800">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 relative inline-block">
          Featured Gaming Gear
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 rounded-full"></span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-6">
          High-performance equipment trusted by professional gamers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  New
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <div className="flex items-center text-yellow-400 bg-gray-800 px-2 py-1 rounded-full">
                  <Star size={16} className="fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    {product.rating}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                {product.category}
              </p>

              <div className="pt-4 border-t border-gray-600 flex items-center justify-between">
                <span className="text-red-500 font-bold text-xl">
                  ${product.price}
                </span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart size={18} className="mr-2" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-bold tracking-wider transition-colors duration-300 uppercase">
          View All Gaming Gear
        </button>
      </div>
    </div>
  </section>
  )
}

export default FeaturedProducts