import { useProgress } from '../progress/useProgress';
import { CURRICULUM } from '../../lib/curriculum';

export function PhaseCards() {
  const { getPhaseProgress } = useProgress();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
        Curriculum Phases
      </h2>
      <p className="text-[var(--color-text-muted)] mb-6">
        Explore all phases of the learning path
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CURRICULUM.map((phase) => {
          const progress = getPhaseProgress(phase.id);
          const lessonCount = phase.lessons.length;
          const status =
            progress === 100
              ? 'completed'
              : progress > 0
                ? 'in-progress'
                : 'not-started';

          return (
            <a
              key={phase.id}
              href={`/phases/${phase.id}`}
              className="group glass rounded-xl p-5 no-underline hover:border-[var(--color-accent-start)]/50 hover:-translate-y-0.5 transition-all duration-300 border border-transparent"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      status === 'completed'
                        ? 'bg-[var(--color-success)]/20 text-[var(--color-success)]'
                        : status === 'in-progress'
                          ? 'bg-[var(--color-accent-start)]/20 text-[var(--color-accent-start)]'
                          : 'bg-white/10 text-[var(--color-text-muted)]'
                    }`}
                  >
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-start)] transition-colors text-sm leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                {/* Status badge */}
                <span
                  className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    status === 'completed'
                      ? 'bg-[var(--color-success)]/20 text-[var(--color-success)]'
                      : status === 'in-progress'
                        ? 'bg-[var(--color-accent-start)]/20 text-[var(--color-accent-start)]'
                        : 'bg-white/10 text-[var(--color-text-muted)]'
                  }`}
                >
                  {status === 'completed'
                    ? 'Completed'
                    : status === 'in-progress'
                      ? 'In Progress'
                      : 'Not Started'}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[var(--color-text-muted)] mb-3 line-clamp-2">
                {phase.description}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 mb-3 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {phase.estimatedHours}h
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full">
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      status === 'completed'
                        ? 'bg-[var(--color-success)]'
                        : 'bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)]'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {progress > 0 && (
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 inline-block">
                    {progress}% complete
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
