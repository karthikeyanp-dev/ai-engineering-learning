import type { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'beginner' | 'intermediate' | 'advanced' | 'phase';
  children: ReactNode;
}

export function Badge({ variant = 'beginner', children }: BadgeProps) {
  const variantStyles = {
    beginner:
      'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20',
    intermediate:
      'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20',
    advanced:
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
    phase:
      'bg-[var(--color-accent-start)]/10 text-[var(--color-accent-start)] border-[var(--color-accent-start)]/20',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
