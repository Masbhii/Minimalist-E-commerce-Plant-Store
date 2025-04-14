import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, ShoppingCartIcon, UserIcon, SearchIcon, XIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();
  const {
    itemCount
  } = useCart();
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/');
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif text-green-800">Bloom & Grow</h1>
          </Link>
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Plants
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Flowers
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Accessories
            </Link>
          </nav>
          {/* Right side icons */}
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-green-700 focus:outline-none">
              <SearchIcon size={20} />
            </button>
            {isAuthenticated ? <Link to="/account" className="p-2 rounded-full text-gray-500 hover:text-green-700">
                <UserIcon size={20} />
              </Link> : <Link to="/login" className="p-2 rounded-full text-gray-500 hover:text-green-700">
                <UserIcon size={20} />
              </Link>}
            <Link to="/cart" className="p-2 rounded-full text-gray-500 hover:text-green-700 relative">
              <ShoppingCartIcon size={20} />
              {itemCount > 0 && <span className="absolute top-0 right-0 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>}
            </Link>
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full text-gray-500 hover:text-green-700 focus:outline-none">
              {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
              Home
            </Link>
            <Link to="/products" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
              Plants
            </Link>
            <Link to="/products" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
              Flowers
            </Link>
            <Link to="/products" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
              Accessories
            </Link>
            {isAuthenticated ? <>
                <Link to="/account" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
                  My Account
                </Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-700">
                  Log Out
                </button>
              </> : <>
                <Link to="/login" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
                  Log In
                </Link>
                <Link to="/signup" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-green-700">
                  Sign Up
                </Link>
              </>}
          </div>
        </div>}
    </header>;
};