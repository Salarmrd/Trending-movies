import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 sm:px-6 lg:px-8 py-4 shadow">
      <div className="max-w-[1250px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-xl font-bold text-white"> <a href="https://www.salarmrd.com" target="_blank">Salarmrd.</a></h2>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-10 text-white font-medium text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li> <a href="https://www.salarmrd.com" target='_blank' >Home</a></li>
          <li><a href="https://www.salarmrd.com/#about" target='_blank'>About me</a></li>
          <li>
            <button className="border border-white py-1 px-4 rounded">Contact me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
