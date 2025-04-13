import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSignInAlt, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MiddleNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" px-4 sm:px-20 py-2 shadow-sm mt-4 mb-4 relative">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Desktop Menu */}
        <div
          className="hidden sm:flex justify-between items-center w-full"
          data-aos="fade-up"
        >
          {/* Map Icon */}
          <a
            href="#"
            className="text-black hover:text-primary transition duration-300 flex items-center"
          >
            <FaMapMarkerAlt className="mr-2 text-xl" />
            Map
          </a>

          {/* Center Links */}
          <div className="flex gap-8 justify-center flex-grow">
            <a href="#" className="text-black hover:text-primary transition duration-300">
              Home
            </a>
            <a href="#" className="text-black hover:text-primary transition duration-300">
              Real Estate Services
            </a>
            <a href="#" className="text-black hover:text-primary transition duration-300">
              Support Services
            </a>
            <a href="#" className="text-black hover:text-primary transition duration-300">
              Blog
            </a>
            <a href="#" className="text-black hover:text-primary transition duration-300">
              About Us
            </a>
            <a href="#" className="text-black hover:text-primary transition duration-300">
              Contact
            </a>
          </div>

          <button
            onClick={closeMenu}
            className=" text-black px-6 py-3  flex items-center text-lg font-semibold  transition"
          >
            <FaSignInAlt className="mr-4 text-xl" />
            Login
          </button>
        </div>

        {/* Mobile Nav - Map Left + Toggle Right */}
        <div className="sm:hidden flex justify-between items-center w-full">
          {/* Map Icon */}
          <a
            href="#"
            className="text-black hover:text-primary transition duration-300 flex items-center"
          >
            <FaMapMarkerAlt className="mr-2 text-xl" />
            Map
          </a>

          {/* Toggle Button */}
          <button onClick={toggleMenu} className="text-black text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div
          className="sm:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white space-y-6 transition-all duration-500"
          data-aos="fade-in"
        >
          <a href="#" onClick={closeMenu} className="text-lg hover:text-primary transition">
            Home
          </a>
          <a href="#" onClick={closeMenu} className="text-lg hover:text-primary transition">
            Real Estate Services
          </a>
          <a href="#" onClick={closeMenu} className="text-lg hover:text-primary transition">
            Support Services
          </a>
          <a href="#" onClick={closeMenu} className="text-lg hover:text-primary transition">
            Blog
          </a>
          <a href="#" onClick={closeMenu} className="text-lg hover:text-primary transition">
            About Us
          </a>
          <a href="#" onClick={closeMenu} className="text-lg hover:text-primary transition">
            Contact
          </a>

          <button
            onClick={closeMenu}
            className="bg-primary text-white px-6 py-3 mt-4 rounded-lg hover:bg-primary-dark flex items-center text-lg font-semibold shadow-md transition"
          >
            <FaSignInAlt className="mr-2 text-xl" />
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default MiddleNav;
