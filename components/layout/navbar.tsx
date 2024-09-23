"use client";
import { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('About');

  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="navbar">
      <ul className="navbar-list flex space-x-6">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button
              className={`navbar-link px-4 py-2 rounded-lg ${
                activeLink === item ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => setActiveLink(item)}
              data-nav-link
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
