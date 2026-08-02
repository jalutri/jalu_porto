import React from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Tujuan Component:
 * Footer bagian bawah halaman dengan logo personal brand JL, tautan navigasi cermin,
 * hak cipta, dan tombol kembali ke atas halaman (Back to Top).
 *
 * Struktur Component:
 * - `<footer>` dengan warna latar belakang #1F2937 (Charcoal).
 * - Flexbox top row: Logo Image & Navigation links.
 * - Flexbox bottom row: Copyright text & Smooth back-to-top button.
 *
 * Props:
 * @param {Array} navLinks - List of navigation links
 * @param {string} logo - Image URL path for custom logo
 *
 * State: None
 */
export const Footer = ({ navLinks = [], logo = '/assets/images/logo.png' }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1F2937] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-gray-800">
          <a href="#" className="flex items-center gap-2 select-none" aria-label="Jalu Tri Atmaja Home">
            <img
              src={logo}
              alt="JL Personal Logo"
              className="h-9 w-auto object-contain brightness-200 invert"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="hidden font-heading font-extrabold text-2xl tracking-tight text-white items-center">
              JL<span className="text-[#60A5FA] text-3xl leading-none">.</span>
            </span>
          </a>

          <ul className="flex items-center gap-6 list-none m-0 p-0 flex-wrap justify-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-heading font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs sm:text-sm text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Jalu Tri Atmaja. All rights reserved. Built with React 19 & Tailwind CSS v4.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
