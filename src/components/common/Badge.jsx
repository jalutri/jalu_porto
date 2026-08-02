import React from 'react';

/**
 * Tujuan Component:
 * Reusable Badge / Pill component untuk menampilkan tech stack tags, status badges, dan section labels.
 *
 * Struktur Component:
 * - `<span>` wrapper dengan varian warna dan bentuk rounded-full / rounded-md.
 *
 * Props:
 * @param {React.ReactNode} children - Text atau ikon di dalam badge
 * @param {'navy' | 'green' | 'gray' | 'mono'} variant - Varian warna badge
 * @param {string} className - Additional CSS classes
 *
 * State: None (Stateless Presentational Component)
 */
export const Badge = ({ children, variant = 'navy', className = '' }) => {
  const variants = {
    navy: "bg-[#EFF6FF] text-[#1E3A8A] border border-[#BFDBFE]",
    green: "bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]",
    gray: "bg-[#F9FAFB] text-[#4B5563] border border-[#E5E7EB]",
    mono: "bg-[#F9FAFB] text-[#1F2937] border border-[#E5E7EB] font-mono text-xs"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${variants[variant] || variants.navy} ${className}`}>
      {children}
    </span>
  );
};
