'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Me', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Hire Me', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#212033] backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Rimsha Asif ~ Portfolio
          </Link>
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 text-white focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          <ul className="hidden sm:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.path
                      ? 'text-blue-600 '
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {menuOpen && (
          <ul className="sm:hidden flex flex-col space-y-2 mt-4 bg-[#212033] rounded shadow-lg p-4 animate-fade-in">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block text-base font-medium transition-colors py-2 px-2 rounded hover:bg-blue-600 hover:text-white ${
                    pathname === item.path
                      ? 'text-blue-600 bg-white'
                      : 'text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header; 