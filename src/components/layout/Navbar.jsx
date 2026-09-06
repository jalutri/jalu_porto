import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

export const Navbar = ({
  activeSection = '',
  isScrolled = false,
  navLinks = [],
  logo = '/assets/images/logo.png'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].nav;

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const translatedNavLinks = navLinks.map((link) => {
    const key = link.href.replace('#', '');
    return {
      ...link,
      displayName: t[key] || link.name
    };
  });

  return (
    <header
      className={`sticky top-0 left-0 w-full h-[72px] z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-gray-800 shadow-md'
          : 'bg-[#0F172A]/85 backdrop-blur-md border-b border-white/10'
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
            className="h-9 w-auto object-contain brightness-200 invert group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span className="hidden font-heading font-extrabold text-2xl tracking-tight text-white items-center">
            JL<span className="text-[#60A5FA] text-3xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {translatedNavLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative py-1 text-sm font-heading transition-colors ${
                      isActive
                        ? 'text-[#60A5FA] font-semibold'
                        : 'text-gray-300 hover:text-white font-medium'
                    }`}
                  >
                    {link.displayName}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60A5FA] rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section: Language Toggle & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-700 bg-gray-900/80 hover:bg-gray-800 text-xs font-bold font-heading text-white transition-all cursor-pointer shadow-sm"
            title="Ganti Bahasa / Switch Language"
          >
            <Globe size={14} className="text-[#60A5FA]" />
            <span className={lang === 'id' ? 'text-[#60A5FA]' : 'text-gray-400'}>ID</span>
            <span className="text-gray-600">|</span>
            <span className={lang === 'en' ? 'text-[#60A5FA]' : 'text-gray-400'}>EN</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-gray-200 hover:text-white cursor-pointer"
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
            className="md:hidden bg-[#0F172A] border-b border-gray-800 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 list-none m-0">
              {translatedNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-2 text-base font-heading font-medium text-gray-200 hover:text-[#60A5FA]"
                  >
                    {link.displayName}
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
