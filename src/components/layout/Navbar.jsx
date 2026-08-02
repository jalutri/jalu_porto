import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

/**
 * Tujuan Component:
 * Header navigasi sticky yang responsif dengan logo gambar personal brand "JL",
 * efek glassmorphism, indikator link aktif, dan drawer menu mobile.
 *
 * Struktur Component:
 * - `<header>` sticky top-0 z-50 glassmorphism wrapper.
 * - Flexbox container: Logo "JL" (Image mark), Desktop Links List, CTA Button, Mobile Toggle.
 * - Mobile Menu Overlay & Drawer (Framer Motion AnimatePresence).
 *
 * Props:
 * @param {string} activeSection - Current active section ID
 * @param {boolean} isScrolled - Boolean for header scrolled shadow & opacity background
 * @param {Array} navLinks - List of navigation links ({ name, href })
 * @param {string} logo - Image URL path for the custom JL logo
 *
 * State:
 * @state {boolean} isMobileMenuOpen - Controls mobile menu drawer open/closed state
 */
export const Navbar = ({
  activeSection = '',
  isScrolled = false,
  navLinks = [],
  logo = '/assets/images/logo.png'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 left-0 w-full h-[72px] z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-white/85 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Brand Logo Image */}
        <a
          href="#"
          className="flex items-center gap-2 select-none group"
          aria-label="Jalu Tri Atmaja Home"
        >
          <img
            src={logo}
            alt="JL Personal Logo"
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              // Fallback to text logo if image fails
              e.target.style.display = 'none';
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span className="hidden font-heading font-extrabold text-2xl tracking-tight text-[#1F2937] items-center">
            JL<span className="text-[#1E3A8A] text-3xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative py-1 text-sm font-heading transition-colors ${
                      isActive
                        ? 'text-[#1E3A8A] font-semibold'
                        : 'text-[#4B5563] hover:text-[#1E3A8A] font-medium'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1E3A8A] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#1F2937] hover:text-[#1E3A8A] cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 list-none m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-2 text-base font-heading font-medium text-[#1F2937] hover:text-[#1E3A8A]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
