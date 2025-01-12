import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center font-bold text-xl">
              E
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white/90">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/events" className="hover:text-white transition-colors">
            Events
          </a>
          <a href="/collaborations" className="hover:text-white transition-colors">
            Collaborations
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/members" className="hover:text-white transition-colors">
            Members
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/events" className="text-white hover:text-gray-300 transition-colors">
              Events
            </a>
            <a href="/collaborations" className="text-white hover:text-gray-300 transition-colors">
              Collaborations
            </a>
            <a href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="/members" className="text-white hover:text-gray-300 transition-colors">
              Members
            </a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

