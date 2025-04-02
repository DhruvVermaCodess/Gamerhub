import React from 'react'
import { Gamepad } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="text-red-500 font-bold text-xl flex items-center">
            <Gamepad size={28} className="mr-2" />
            GAMERHUB
          </div>
          <p className="text-gray-400">
            Premium gaming gear for champions. Elevate your gameplay with
            professional equipment.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                Shipping
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-400">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold">Newsletter</h4>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} GamerHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer