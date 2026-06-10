import type { ReactNode } from 'react';

interface CardProps {
  variant?: 'default' | 'gradient' | 'interactive';
  className?: string;
  children: ReactNode;
  href?: string;
}

export function Card({ variant = 'default', className = '', children, href }: CardProps) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';

  const variantStyles = {
    default: 'bg-[var(--color-bg-secondary)] border border-white/10',
    gradient:
      'bg-[var(--color-bg-secondary)] border border-transparent relative before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-[var(--color-accent-start)] before:to-[var(--color-accent-end)] before:opacity-50 before:-z-10',
    interactive:
      'bg-[var(--color-bg-secondary)] border border-white/10 hover:border-[var(--color-accent-start)]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent-start)]/10 cursor-pointer',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={`block no-underline ${combinedStyles}`}>
        {children}
      </a>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
}
