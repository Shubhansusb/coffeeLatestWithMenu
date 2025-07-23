'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-cup-fill text-2xl text-amber-700"></i>
            </div>
            <span className="text-xl font-bold text-amber-800" style={{ fontFamily: 'Pacifico, serif' }}>
              Coffee 
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-700 transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-amber-700 transition-colors whitespace-nowrap">
              Menu
            </Link>
            <Link href="/rewards" className="text-gray-700 hover:text-amber-700 transition-colors whitespace-nowrap">
              Rewards
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-amber-700 transition-colors whitespace-nowrap">
              Locations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-700 transition-colors whitespace-nowrap">
              About
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-amber-700 border border-amber-700 rounded-full hover:bg-amber-50 transition-colors whitespace-nowrap">
              Sign In
            </button>
            <button className="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors whitespace-nowrap">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-gray-700`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors">
              Menu
            </Link>
            <Link href="/rewards" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors">
              Rewards
            </Link>
            <Link href="/locations" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors">
              Locations
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors">
              About
            </Link>
            <div className="pt-4 pb-2 space-y-2">
              <button className="w-full py-2 text-amber-700 border border-amber-700 rounded-full hover:bg-amber-50 transition-colors whitespace-nowrap">
                Sign In
              </button>
              <button className="w-full py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors whitespace-nowrap">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}