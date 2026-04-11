'use client';

import Link from 'next/link';

const variants = {
  primary: 'bg-accent text-navy-950 font-semibold hover:bg-accent-hover',
  secondary: 'bg-white text-navy-950 font-semibold hover:bg-gray-100',
  outline: 'border border-white/20 text-white font-medium hover:bg-white/5',
  ghost: 'text-gray-400 hover:text-white font-medium',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-lg',
  lg: 'px-8 py-3.5 text-base rounded-lg',
};

export default function Button({ variant = 'primary', size = 'md', href, children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 transition-colors duration-150 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
