'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-cup-fill text-2xl text-amber-200"></i>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                Coffee 
              </span>
            </div>
            <p className="text-amber-100 text-sm">
              Crafting exceptional coffee experiences since 2024. Every cup tells a story.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-facebook-fill text-xl text-amber-200 hover:text-white cursor-pointer transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-instagram-fill text-xl text-amber-200 hover:text-white cursor-pointer transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-twitter-fill text-xl text-amber-200 hover:text-white cursor-pointer transition-colors"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/menu" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Menu
              </Link>
              <Link href="/rewards" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Rewards
              </Link>
              <Link href="/locations" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Store Locator
              </Link>
              <Link href="/about" className="block text-amber-100 hover:text-white transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Customer Care</h3>
            <div className="space-y-2">
              <Link href="/contact" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/careers" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Careers
              </Link>
              <Link href="/privacy" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-amber-100 hover:text-white transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Stay Connected</h3>
            <p className="text-amber-100 text-sm">
              Get the latest updates on new blends and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-amber-800 text-white placeholder-amber-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              />
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-r-lg transition-colors whitespace-nowrap">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-send-plane-fill text-sm"></i>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © 2024 Coffee AI Coffee Cafe. All rights reserved. | Crafted with love and caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
}