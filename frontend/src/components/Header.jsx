import React, { useState } from 'react';
import { Gamepad, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full left-0 top-0 z-50 bg-gray-800/95 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="lg:hidden mr-4 text-red-400 hover:text-red-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to='/'
              className="flex items-center text-red-500 font-bold text-xl"
            >
              <Gamepad size={28} className="mr-2" />
              GADGETTEHUB
            </Link>
          </div>

          {/* Navigation (Responsive) */}
          <nav
            className={`lg:flex lg:items-center ${
              isMenuOpen ? 'absolute top-16 left-0 right-0 bg-gray-800 py-4 w-full' : 'hidden'
            }`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <Link to='/'
                  className="text-red-500 font-semibold hover:text-red-400 py-2 lg:py-0"
                >
                  Home
                </Link>
                <Link to='/products' className="text-gray-300 hover:text-red-400 py-2 lg:py-0">
                  Shop
                </Link>
                <a href="#" className="text-gray-300 hover:text-red-400 py-2 lg:py-0">
                  New Arrivals
                </a>
                <Link to='/about' className="text-gray-300 hover:text-red-400 py-2 lg:py-0">
                  About
                </Link>
                <a href="#" className="text-gray-300 hover:text-red-400 py-2 lg:py-0">
                  Blogs
                </a>
              </div>
            </div>
          </nav>

          {/* Right controls */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="text-gray-300 hover:text-red-400">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-red-400 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <Link to='/login' className="hidden lg:flex items-center text-gray-300 hover:text-red-400">
              <User size={20} className="mr-2" />
              Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;