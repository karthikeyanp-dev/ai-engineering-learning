import type { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'important';
  title?: string;
  children: ReactNode;
}

const calloutConfig = {
  info: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    borderColor: 'border-l-[var(--color-info)]',
    bgColor: 'bg-[var(--color-info)]/5',
    textColor: 'text-[var(--color-info)]',
    defaultTitle: 'Info',
  },
  warning: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    borderColor: 'border-l-[var(--color-warning)]',
    bgColor: 'bg-[var(--color-warning)]/5',
    textColor: 'text-[var(--color-warning)]',
    defaultTitle: 'Warning',
  },
  tip: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    borderColor: 'border-l-[var(--color-success)]',
    bgColor: 'bg-[var(--color-success)]/5',
    textColor: 'text-[var(--color-success)]',
    defaultTitle: 'Tip',
  },
  important: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    borderColor: 'border-l-purple-500',
    bgColor: 'bg-purple-500/5',
    textColor: 'text-purple-400',
    defaultTitle: 'Important',
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const config = calloutConfig[type];

  return (
    <div
      className={`rounded-xl border-l-4 ${config.borderColor} ${config.bgColor} p-4 my-4`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 mt-0.5 ${config.textColor}`}>
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          {(title || config.defaultTitle) && (
            <p className={`font-semibold text-sm mb-1 ${config.textColor}`}>
              {title || config.defaultTitle}
            </p>
          )}
          <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
