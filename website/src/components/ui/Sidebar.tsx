import { useState } from 'react';
import { CURRICULUM, type Phase } from '../../lib/curriculum';

interface Lesson {
  title: string;
  path: string;
}

interface SidebarPhase {
  id: string;
  title: string;
  icon: string;
  progress: number;
  lessons: Lesson[];
}

const PHASE_ICONS: Record<string, string> = {
  'phase-0': '🏗️',
  'phase-1': '🧠',
  'phase-2': '🔍',
  'phase-3': '🤖',
  'phase-4': '🛠️',
  'phase-5': '🎯',
  'phase-6': '🚀',
  'phase-7': '📊',
  'phase-8': '🏛️',
  'phase-9': '💼',
  'career': '🎓',
};

// Build sidebar data from curriculum, matching actual MDX slug routes
const phases: SidebarPhase[] = CURRICULUM.map((phase) => ({
  id: phase.id,
  title: phase.title,
  icon: PHASE_ICONS[phase.id] || '📚',
  progress: 0,
  lessons: phase.lessons.map((lesson) => ({
    title: lesson.title,
    path: `/lessons/${lesson.id}`,
  })),
}));

interface SidebarProps {
  currentPath: string;
}

export function Sidebar({ currentPath }: SidebarProps) {
  const [expandedPhases, setExpandedPhases] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const togglePhase = (id: string) => {
    setExpandedPhases((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const isActive = (path: string) => currentPath === path || currentPath === path + '/';

  const sidebarContent = (
    <nav className="flex flex-col h-full">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
          Curriculum
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto py-2 px-2 space-y-1">
        {phases.map((phase) => {
          const isExpanded = expandedPhases.includes(phase.id);
          const hasActiveLesson = phase.lessons.some((l) => isActive(l.path));

          return (
            <div key={phase.id} className="rounded-lg">
              <button
                onClick={() => togglePhase(phase.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group hover:bg-white/5 ${
                  hasActiveLesson ? 'bg-white/5' : ''
                }`}
              >
                <span className="text-base flex-shrink-0">{phase.icon}</span>
                <span className="flex-1 text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-white truncate">
                  {phase.title}
                </span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Progress circle */}
                  <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 -rotate-90" viewBox="0 0 20 20">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-white/10"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        stroke="url(#progress-gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${phase.progress * 50.27 / 100} 50.27`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--color-accent-start)" />
                          <stop offset="100%" stopColor="var(--color-accent-end)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Chevron */}
                  <svg
                    className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-200 ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="ml-4 pl-4 border-l border-white/10 mt-1 mb-2 space-y-0.5 animate-fade-in">
                  {phase.lessons.map((lesson) => (
                    <a
                      key={lesson.path}
                      href={lesson.path}
                      className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                        isActive(lesson.path)
                          ? 'bg-gradient-to-r from-[var(--color-accent-start)]/10 to-[var(--color-accent-end)]/10 text-white border-l-2 border-[var(--color-accent-start)] -ml-[1px]'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-white/5'
                      }`}
                    >
                      {lesson.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-4 left-4 z-50 lg:hidden p-3 rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white shadow-lg glow"
        aria-label="Open navigation"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-white/10 bg-[var(--color-bg-secondary)]">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[var(--color-bg-secondary)] shadow-2xl animate-slide-in-left">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-sm font-semibold gradient-text">Navigation</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close navigation"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
