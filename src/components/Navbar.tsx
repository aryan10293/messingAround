import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="inline-block w-9 h-9 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md" />
              <span className="text-lg font-semibold text-gray-800">NutriFlow</span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/feature" className="text-gray-600 hover:text-gray-900 transition">Features</Link>
            <Link to="#plans" className="text-gray-600 hover:text-gray-900 transition">Plans</Link>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            <a
              href="/signup"
              className="ml-4 inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md shadow-sm transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-max-height duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white">
          <Link
            to="/features"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md"
          >
            Features
          </Link>
          <a
            href="#plans"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md"
          >
            Plans
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md"
          >
            Contact
          </a>
          <a
            href="/signup"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
