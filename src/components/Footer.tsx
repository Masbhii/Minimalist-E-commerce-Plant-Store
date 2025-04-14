import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export const Footer: React.FC = () => {
  return <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-serif text-green-800 mb-4">
              Bloom & Grow
            </h2>
            <p className="text-gray-500 text-sm">
              Bringing nature's beauty to your doorstep with our curated
              selection of plants and flowers.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-700">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-700">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-700">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-500 hover:text-green-700 text-sm">
                  All Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-green-700 text-sm">
                  Flowers
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-green-700 text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-green-700 text-sm">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-green-700 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-500 hover:text-green-700 text-sm">
                  Plant Care
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-500 hover:text-green-700 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-500 hover:text-green-700 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe to our newsletter for care tips and new arrivals.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-r-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bloom & Grow. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/" className="text-gray-500 hover:text-green-700 text-sm mr-4">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-500 hover:text-green-700 text-sm mr-4">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-500 hover:text-green-700 text-sm">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};