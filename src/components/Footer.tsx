import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Gabin LA</h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media
            </p>
            <div className="flex space-x-4 pb-4">
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

          {/* Newsletter */}
          <div className="max-w-md mx-auto pb-4">
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
        <div className="text-center text-gray-400 pt-6 border-t border-gray-800">
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
