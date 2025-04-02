import React from 'react'
import { Gamepad } from "lucide-react";

const GamingPerks = () => {
  return (
    <section className="py-16 bg-gray-800">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-red-500 transition-colors">
          <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 text-red-400">
            <Gamepad size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Pro-Grade Equipment</h3>
          <p className="text-gray-400">
            Tournament-level gear used by esports champions worldwide
          </p>
        </div>

        <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-red-500 transition-colors">
          <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 text-red-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Ultra-Low Latency</h3>
          <p className="text-gray-400">
            1ms response time technology for competitive advantage
          </p>
        </div>

        <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-red-500 transition-colors">
          <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 text-red-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Secure Checkout</h3>
          <p className="text-gray-400">
            Military-grade 256-bit encryption for all transactions
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GamingPerks