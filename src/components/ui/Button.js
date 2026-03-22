'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-accent text-navy-950 font-semibold hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/40',
  secondary: 'bg-white text-navy-950 font-semibold hover:bg-gray-100',
  outline: 'border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-navy-950',
  ghost: 'text-gray-400 hover:text-white font-medium',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export default function Button({ variant = 'primary', size = 'md', href, children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} {...props}>
      {children}
    </motion.button>
  );
}
