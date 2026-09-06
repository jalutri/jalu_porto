import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Custom Cursor Component with Dynamic Interaction States
 * Features:
 * - Smooth spring follower dot & ring
 * - Dynamic text / badge label when hovering interactable elements (data-cursor="...")
 * - Hides automatically on non-fine pointer devices (touchscreens)
 */
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default' | 'hover' | 'text'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop mouse/fine pointers
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea, [role="button"]');
      if (target) {
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
          setCursorVariant('text');
        } else {
          setCursorText('');
          setCursorVariant('hover');
        }
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#1E3A8A] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: cursorVariant === 'hover' ? 1.5 : cursorVariant === 'text' ? 0 : 1,
          opacity: cursorVariant === 'text' ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Outer Follower Ring / Label Badge */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 flex items-center justify-center font-heading text-xs font-bold transition-colors ${
          cursorVariant === 'text'
            ? 'bg-[#1E3A8A] text-white px-3.5 py-1.5 shadow-xl border border-[#60A5FA]'
            : cursorVariant === 'hover'
            ? 'border-2 border-[#1E3A8A] bg-[#EFF6FF]/40 backdrop-blur-[2px]'
            : 'border border-gray-400/60 bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (cursorVariant === 'text' ? 40 : cursorVariant === 'hover' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'text' ? 16 : cursorVariant === 'hover' ? 24 : 16),
          width: cursorVariant === 'text' ? 'auto' : cursorVariant === 'hover' ? 48 : 32,
          height: cursorVariant === 'text' ? 'auto' : cursorVariant === 'hover' ? 48 : 32,
          scale: 1
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {cursorVariant === 'text' && cursorText && (
            <motion.span
              key={cursorText}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="whitespace-nowrap px-1"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
