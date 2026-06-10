import { useProgress } from '../progress/useProgress';
import { CURRICULUM } from '../../lib/curriculum';

export function ProgressDashboard() {
  const { getOverallProgress, getTotalCompleted, getTotalLessons, getRecentLessons } = useProgress();
  const overallProgress = getOverallProgress();
  const completedLessons = getTotalCompleted();
  const totalLessons = getTotalLessons();
  const recentLessons = getRecentLessons();
  const hasProgress = overallProgress > 0;

  // Count total milestones and completed milestones
  let totalMilestones = 0;
  let completedMilestones = 0;
  const { progress } = useProgress();

  for (const phase of CURRICULUM) {
    for (const lesson of phase.lessons) {
      totalMilestones += lesson.milestones.length;
      const lessonData = progress.phases[phase.id]?.lessons[lesson.id];
      if (lessonData) {
        completedMilestones += lessonData.milestones.length;
      }
    }
  }

  // Get current phase name
  const currentPhase = CURRICULUM.find((phase) => {
    const phaseProgress = progress.phases[phase.id];
    if (!phaseProgress) return false;
    const completedCount = phase.lessons.filter(
      (l) => phaseProgress.lessons[l.id]?.completed
    ).length;
    return completedCount > 0 && completedCount < phase.lessons.length;
  }) || CURRICULUM[0];

  // Get last accessed lesson
  const lastLessonId = recentLessons[0];

  // Circumference for the circular progress indicator
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallProgress / 100) * circumference;

  if (!hasProgress) {
    return (
      <section className="mb-12">
        <div className="glass rounded-xl p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-accent-start)]/20 to-[var(--color-accent-end)]/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
            Start Your Journey
          </h3>
          <p className="text-[var(--color-text-muted)] mb-6 max-w-md mx-auto">
            Begin your path to becoming a Full Stack AI Engineer. Track your progress across 26 lessons and over 100 milestones.
          </p>
          <a
            href={`/lessons/${CURRICULUM[0]?.lessons[0]?.id || ''}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Begin First Lesson
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
        Your Progress
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Circular progress */}
        <div className="glass rounded-xl p-6 flex flex-col items-center justify-center md:row-span-2">
          <div className="relative w-32 h-32 mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-accent-start)" />
                  <stop offset="100%" stopColor="var(--color-accent-end)" />
                </linearGradient>
              </defs>
            </svg>
            {/* Percentage text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[var(--color-text-primary)]">
                {overallProgress}%
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">Complete</span>
            </div>
          </div>
          <span className="text-sm text-[var(--color-text-muted)] text-center">
            Overall Progress
          </span>
        </div>

        {/* Lessons completed */}
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-info)]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--color-info)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                {completedLessons}/{totalLessons}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">Lessons Completed</p>
            </div>
          </div>
        </div>

        {/* Milestones achieved */}
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-success)]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                {completedMilestones}/{totalMilestones}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">Milestones Achieved</p>
            </div>
          </div>
        </div>

        {/* Current phase */}
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-start)]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--color-accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-text-primary)] leading-tight">
                {currentPhase?.title || 'Getting Started'}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">Current Phase</p>
            </div>
          </div>
        </div>

        {/* Continue link */}
        {lastLessonId && (
          <div className="glass rounded-xl p-5">
            <a
              href={`/lessons/${lastLessonId}`}
              className="flex items-center gap-3 group no-underline"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--color-warning)]/20 flex items-center justify-center group-hover:bg-[var(--color-warning)]/30 transition-colors">
                <svg className="w-5 h-5 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-start)] transition-colors">
                  Continue where you left off
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">Resume learning</p>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
