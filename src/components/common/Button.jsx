import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'glass', 'amber', 'outline'
  size = 'md',        // 'sm', 'md', 'lg'
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  target,
  rel
}) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-8 py-4 text-base font-bold rounded-xl gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/40',
    secondary: 'bg-slate-900/90 text-slate-100 hover:text-white border border-white/15 hover:border-cyan-400/40 hover:bg-slate-800 shadow-md',
    glass: 'glass-panel text-slate-100 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 shadow-lg shadow-black/30 backdrop-blur-md',
    amber: 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 border border-amber-300/50',
    outline: 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
  };

  const combinedClasses = `
    inline-flex items-center justify-center transition-all duration-300 relative overflow-hidden group select-none
    ${sizeStyles[size] || sizeStyles.md}
    ${variantStyles[variant] || variantStyles.primary}
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer active:scale-98'}
    ${className}
  `;

  const content = (
    <>
      {/* Subtle crystal shimmer highlight effect */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      
      <span>{children}</span>

      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}
