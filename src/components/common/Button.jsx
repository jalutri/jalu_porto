import React from 'react';

/**
 * Tujuan Component:
 * Reusable Button component yang fleksibel untuk tombol CTA utama, outline, maupun ikon.
 *
 * Struktur Component:
 * - `<button>` / `<a>` wrapper dengan styling dinamis Tailwind CSS.
 * - Icon left/right slot dengan flex alignment.
 *
 * Props:
 * @param {React.ReactNode} children - Content text/icon inside button
 * @param {'primary' | 'outline' | 'ghost'} variant - Button style variant (default: 'primary')
 * @param {'sm' | 'md' | 'lg'} size - Size scale (default: 'md')
 * @param {string} href - Optional link URL (renders <a> if present)
 * @param {function} onClick - Click handler
 * @param {string} className - Additional Tailwind utility classes
 * @param {boolean} disabled - Disabled state
 * @param {string} type - Button type ('button' | 'submit')
 *
 * State: None (Stateless Presentational Component)
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold font-heading rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-[#1E3A8A] hover:bg-[#1E40AF] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    outline: "bg-transparent text-[#1E3A8A] border border-gray-200 hover:border-[#1E3A8A] hover:bg-[#EFF6FF] hover:-translate-y-0.5",
    ghost: "bg-transparent text-[#4B5563] hover:text-[#1E3A8A] hover:bg-[#EFF6FF]"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-7 py-3 text-base font-bold"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
