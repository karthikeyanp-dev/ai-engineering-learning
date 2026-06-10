import { useState, type ReactNode } from 'react';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children: ReactNode;
}

export function CodeBlock({ language, title, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeElement = document.querySelector('[data-code-content]');
    const text = codeElement?.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: ignore
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0d14]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          {/* Dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          {title && (
            <span className="text-xs text-[var(--color-text-muted)] ml-2">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[var(--color-text-muted)]">
              {language}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-[var(--color-text-muted)] hover:text-white"
            aria-label="Copy code"
          >
            {copied ? (
              <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto" data-code-content>
        <pre className="text-sm leading-relaxed">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
