import React from "react";
import { NavLink } from "react-router-dom";
import { contactInfo } from "../data/restaurantInfo";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Gabin LA</h3>
            <p className="text-gray-300 mb-4">
              Elevating dining to an art form with fresh, seasonal ingredients
              and innovative culinary techniques.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  {contactInfo.address.street}
                  <br></br>
                  {contactInfo.address.city}, {contactInfo.address.state}{" "}
                  {contactInfo.address.zipCode}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">Monday - Thursday</p>
                  <p className="text-gray-400">11:30 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">Friday - Saturday</p>
                  <p className="text-gray-400">11:30 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-400">10:30 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 mb-8 border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-serif mb-4 text-center">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
              <button
                type="submit"
                className="bg-primary-600 px-6 py-2 text-white font-medium rounded-r-md hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
          <p>
            &copy; {new Date().getFullYear()} Gabin LA, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
