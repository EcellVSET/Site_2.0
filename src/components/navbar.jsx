import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (link.href.startsWith('/#')) {
      const sectionId = link.href.split('#')[1];

      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        navigate('/', { replace: false });

        // Wait for homepage to load then scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100); // delay slightly for DOM to mount
      }
    } else {
      navigate(link.href);
    }
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Collaborations', href: '/#collaboration' },
    { name: 'About', href: '/#about' },
    { name: 'Members', href: '/members' },
    { name: 'Contact Us', href: '/#about' },
  ];

  return (
    <nav className="bg-transparent backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center font-bold text-xl">
            E
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white/90">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
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
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
