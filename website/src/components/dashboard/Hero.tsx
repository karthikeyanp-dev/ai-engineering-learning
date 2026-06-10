import { useProgress } from '../progress/useProgress';
import { CURRICULUM } from '../../lib/curriculum';

export function Hero() {
  const { getOverallProgress, getRecentLessons } = useProgress();
  const overallProgress = getOverallProgress();
  const recentLessons = getRecentLessons();
  const hasProgress = overallProgress > 0;

  // Find the first lesson or the most recent one
  const firstLessonId = CURRICULUM[0]?.lessons[0]?.id || '';
  const currentLessonId = recentLessons[0] || firstLessonId;

  return (
    <section className="relative overflow-hidden rounded-2xl mb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-start)]/20 via-[var(--color-bg-secondary)] to-[var(--color-accent-end)]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />

      {/* Animated particles (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full bg-[var(--color-accent-start)]/30 top-[20%] left-[10%] animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--color-accent-end)]/40 top-[60%] left-[80%] animate-pulse [animation-delay:0.5s]" />
        <div className="absolute w-1 h-1 rounded-full bg-[var(--color-accent-start)]/50 top-[80%] left-[30%] animate-pulse [animation-delay:1s]" />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--color-accent-end)]/20 top-[15%] left-[70%] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--color-accent-start)]/35 top-[45%] left-[50%] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] bg-clip-text text-transparent leading-tight">
          Become a Full Stack AI Engineer
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
          A comprehensive 24-week curriculum taking you from fundamentals to production-ready AI systems
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10 text-sm md:text-base text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-start)]" />
            24 Weeks
          </span>
          <span className="hidden md:inline text-[var(--color-border-light)]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-end)]" />
            9 Phases
          </span>
          <span className="hidden md:inline text-[var(--color-border-light)]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
            336-504 Hours
          </span>
          <span className="hidden md:inline text-[var(--color-border-light)]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-info)]" />
            26 Lessons
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`/lessons/${currentLessonId}`}
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[var(--color-accent-start)]/25"
          >
            {hasProgress ? 'Continue Learning' : 'Start Learning'}
          </a>
          <a
            href="#roadmap"
            className="px-8 py-3.5 rounded-lg border border-white/20 text-[var(--color-text-secondary)] font-medium hover:border-[var(--color-accent-start)]/50 hover:text-white transition-all"
          >
            View Roadmap
          </a>
        </div>

        {/* Progress indicator for returning users */}
        {hasProgress && (
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="text-sm text-[var(--color-text-muted)]">
              {overallProgress}% complete
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
