import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-screen p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">RBAC</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-black text-xl hover:text-gray-400 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="text-black text-xl hover:text-gray-400 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
          >
            Users
          </Link>
          <Link
            to="/roles"
            className="text-black text-xl hover:text-gray-400 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
          >
            Roles
          </Link>
          <Link
            to="/permissions"
            className="text-black text-xl hover:text-gray-400 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
          >
            Permissions
          </Link>
          <Link
            to="/login"
            className="text-black text-xl hover:text-gray-400 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <Link
            to="/"
            className="block text-black text-xl hover:text-gray-400 py-2 "
          >
            Home
          </Link>
          <Link
            to="/users"
            className="block text-black text-xl hover:text-gray-400 py-2 "
          >
            Users
          </Link>
          <Link
            to="/roles"
            className="block text-black text-xl hover:text-gray-400 py-2 "
          >
            Roles
          </Link>
          <Link
            to="/permissions"
            className="block text-black text-xl hover:text-gray-400 py-2 "
          >
            Permissions
          </Link>
          <Link
            to="/login"
            className="block text-black text-xl hover:text-gray-400 py-2"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
