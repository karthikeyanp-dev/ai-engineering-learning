import { useProgress } from '../progress/useProgress';
import { CURRICULUM, findLesson } from '../../lib/curriculum';

export function RecentLessons() {
  const { getRecentLessons, progress } = useProgress();
  const recentLessonIds = getRecentLessons();

  if (recentLessonIds.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
          Recent Lessons
        </h2>
        <div className="glass rounded-xl p-6 text-center">
          <p className="text-[var(--color-text-muted)] mb-4">
            No lessons visited yet
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Start with{' '}
            <a
              href={`/lessons/${CURRICULUM[0]?.lessons[0]?.id || ''}`}
              className="text-[var(--color-accent-start)] hover:underline"
            >
              {CURRICULUM[0]?.lessons[0]?.title || 'the first lesson'}
            </a>{' '}
            to begin tracking your progress.
          </p>
        </div>
      </section>
    );
  }

  // Build lesson info for recent lessons
  const recentLessonsData = recentLessonIds
    .map((lessonId) => {
      const lesson = findLesson(lessonId);
      if (!lesson) return null;

      const phase = CURRICULUM.find((p) => p.number === lesson.phase);
      const lessonProgress = phase
        ? progress.phases[phase.id]?.lessons[lessonId]
        : null;

      return {
        id: lessonId,
        title: lesson.title,
        phaseName: phase?.title || 'Unknown Phase',
        phaseId: phase?.id || '',
        completed: lessonProgress?.completed || false,
      };
    })
    .filter(Boolean) as {
    id: string;
    title: string;
    phaseName: string;
    phaseId: string;
    completed: boolean;
  }[];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
        Recent Lessons
      </h2>
      <p className="text-[var(--color-text-muted)] mb-6">
        Pick up where you left off
      </p>

      <div className="space-y-3">
        {recentLessonsData.map((lesson) => (
          <a
            key={lesson.id}
            href={`/lessons/${lesson.id}`}
            className="group flex items-center gap-4 glass rounded-lg p-4 no-underline hover:border-[var(--color-accent-start)]/30 border border-transparent transition-all"
          >
            {/* Status icon */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                lesson.completed
                  ? 'bg-[var(--color-success)]/20'
                  : 'bg-[var(--color-accent-start)]/20'
              }`}
            >
              {lesson.completed ? (
                <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-[var(--color-accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-start)] transition-colors truncate">
                {lesson.title}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {lesson.phaseName}
              </p>
            </div>

            {/* Action */}
            <span className="text-xs font-medium text-[var(--color-accent-start)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              {lesson.completed ? 'Review' : 'Resume'}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
