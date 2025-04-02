import React from 'react'
import { Mouse, Keyboard, Headphones, Gamepad } from "lucide-react";

const GamingCategories = () => {
  const gamingCategories = [
    { id: 1, name: "Gaming Mice", icon: <Mouse size={24} />, count: 45 },
    { id: 2, name: "Keyboards", icon: <Keyboard size={24} />, count: 32 },
    { id: 3, name: "Headsets", icon: <Headphones size={24} />, count: 28 },
    { id: 4, name: "Controllers", icon: <Gamepad size={24} />, count: 19 },
    { id: 5, name: "Gaming Chairs", icon: "🪑", count: 15 },
    { id: 6, name: "Streaming Gear", icon: "🎥", count: 27 },
  ];
  return (
    <section className="py-16 bg-gray-900">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Gaming Categories
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore our specialized gaming equipment categories
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {gamingCategories.map((category) => (
          <a
            key={category.id}
            href="#"
            className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors group"
          >
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-red-400">
              {category.icon}
            </div>
            <h3 className="font-semibold mb-1">{category.name}</h3>
            <p className="text-sm text-gray-400">
              {category.count}+ Products
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}

export default GamingCategories