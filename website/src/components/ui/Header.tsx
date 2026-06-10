interface HeaderProps {
  progress?: number;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Resources', href: '/resources' },
  { label: 'Projects', href: '/projects' },
  { label: 'Career', href: '/lessons/career-center' },
];

export function Header({ progress = 0 }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-bg-primary)]/80 backdrop-blur-lg">
      {/* Global progress bar */}
      <div className="h-0.5 w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>

      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-[var(--color-accent-start)]/20 transition-shadow">
            AI
          </div>
          <span className="text-lg font-bold gradient-text hidden sm:inline">
            AI Engineering Academy
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Progress display */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <span>{progress}%</span>
            <div className="w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
