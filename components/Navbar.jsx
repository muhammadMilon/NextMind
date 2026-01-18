'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl shadow-lg border-b border-dark-200/50 dark:border-dark-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 md:h-24 grid grid-cols-2 md:grid-cols-12 items-center">
          
          {/* Mobile: Logo Left */}
          <div className="md:hidden flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold font-display text-gradient tracking-tight"
            >
              NextMind
            </Link>
          </div>

          {/* Desktop: Left Navigation (Cols 1-5) */}
          <div className="hidden md:flex items-center justify-start gap-8 col-span-5">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium uppercase tracking-widest text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium uppercase tracking-widest text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium uppercase tracking-widest text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              About
            </button>
          </div>

          {/* Desktop: Center Logo (Cols 6-7) */}
          <div className="hidden md:flex items-center justify-center col-span-2">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold font-display text-gradient tracking-tight hover:scale-105 transition-transform px-4 py-2"
            >
              NextMind
            </Link>
          </div>

          {/* Desktop: Right Navigation (Cols 8-12) */}
          <div className="hidden md:flex items-center justify-end gap-8 col-span-5">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium uppercase tracking-widest text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Services
            </button>
            <Link
              href="/courses"
              className="text-sm font-medium uppercase tracking-widest text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/login"
              className="text-sm font-bold uppercase tracking-widest px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Login
            </Link>
          </div>

          {/* Mobile: Hamburger Right */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-dark-600 dark:text-dark-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-dark-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-20 left-0 right-0 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700 shadow-xl transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="px-4 py-8 space-y-4">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            Services
          </button>
          <Link
            href="/courses"
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <div className="pt-6 border-t border-dark-100 dark:border-dark-700 mt-4">
            <Link
              href="/login"
              className="block w-full text-center px-4 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 hover:shadow-lg transition-all font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
