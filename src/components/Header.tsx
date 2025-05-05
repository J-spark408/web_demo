import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-serif font-bold text-primary-300 hover:text-primary-600">
              Gabin LA
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary-600 ${
                  isActive
                    ? "text-primary-400"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary-600 ${
                  isActive
                    ? "text-primary-400"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary-600 ${
                  isActive
                    ? "text-primary-400"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary-600 ${
                  isActive
                    ? "text-primary-400"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden ${
              scrolled || mobileMenuOpen ? "text-gray-400" : "text-white"
            }`}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 font-medium text-lg ${
                  isActive ? "text-primary-400" : "text-gray-800"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `px-4 py-2 font-medium text-lg ${
                  isActive ? "text-primary-400" : "text-gray-800"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 font-medium text-lg ${
                  isActive ? "text-primary-400" : "text-gray-800"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 font-medium text-lg ${
                  isActive ? "text-primary-400" : "text-gray-800"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
