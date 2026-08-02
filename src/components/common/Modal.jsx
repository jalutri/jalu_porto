import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Tujuan Component:
 * Reusable Accessible Modal Popup dialog untuk menampilkan studi kasus proyek secara mendalam.
 *
 * Struktur Component:
 * - `AnimatePresence` wrapper dari Framer Motion.
 * - Backdrop Overlay (`motion.div` dengan backdrop-blur).
 * - Container Modal Dialog (`motion.div` centered dengan tombol close X).
 *
 * Props:
 * @param {boolean} isOpen - Control modal visibility state
 * @param {function} onClose - Close callback handler
 * @param {string} title - Title text of modal
 * @param {React.ReactNode} children - Dynamic modal body content
 *
 * State: Managed via props (`isOpen`) and body scroll lock side effect.
 */
export const Modal = ({ isOpen, onClose, title, children }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#1F2937] hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Title */}
            {title && (
              <h3 className="text-xl md:text-2xl font-bold font-heading text-[#1F2937] mb-4 pr-8">
                {title}
              </h3>
            )}

            {/* Content Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
