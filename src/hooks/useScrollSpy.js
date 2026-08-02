import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section based on scroll position
 * @param {Array<string>} sectionIds - List of section HTML element IDs
 * @param {number} offset - Offset in pixels for header height
 * @returns {string} activeSectionId
 */
export function useScrollSpy(sectionIds = [], offset = 100) {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Toggle Header Scrolled State
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial trigger

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return { activeSection, isScrolled };
}
