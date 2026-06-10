import { useState, useMemo } from 'react';
import { courses, courseProviders, courseDifficulties, courseTopics } from '../../lib/resources-data';

export function CoursesDirectory() {
  const [selectedProvider, setSelectedProvider] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchProvider = selectedProvider === 'All' || course.provider === selectedProvider;
      const matchDiff = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
      const matchTopic = selectedTopic === 'All' || course.topic === selectedTopic;
      return matchProvider && matchDiff && matchTopic;
    });
  }, [selectedProvider, selectedDifficulty, selectedTopic]);

  const difficultyColors: Record<string, string> = {
    Beginner: 'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20',
    Intermediate: 'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20',
    Advanced: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Provider</label>
          <div className="flex flex-wrap gap-2">
            {courseProviders.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedProvider(p)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  selectedProvider === p
                    ? 'bg-[var(--color-accent-start)]/20 text-[var(--color-accent-start)] border-[var(--color-accent-start)]/40'
                    : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border-white/10 hover:border-white/20'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Difficulty</label>
          <div className="flex flex-wrap gap-2">
            {courseDifficulties.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  selectedDifficulty === d
                    ? 'bg-[var(--color-accent-start)]/20 text-[var(--color-accent-start)] border-[var(--color-accent-start)]/40'
                    : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border-white/10 hover:border-white/20'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Topic</label>
          <div className="flex flex-wrap gap-2">
            {courseTopics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  selectedTopic === t
                    ? 'bg-[var(--color-accent-start)]/20 text-[var(--color-accent-start)] border-[var(--color-accent-start)]/40'
                    : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border-white/10 hover:border-white/20'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="text-sm text-[var(--color-text-muted)]">Showing {filtered.length} courses</p>

      <div className="space-y-3">
        {filtered.map((course) => (
          <a
            key={course.title}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl p-5 bg-[var(--color-bg-secondary)] border border-white/10 hover:border-[var(--color-accent-start)]/50 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-semibold text-white">{course.title}</h3>
              <div className="flex items-center gap-2">
                {course.isFree ? (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20">
                    Free
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-warning)]/10 text-[var(--color-warning)] border border-[var(--color-warning)]/20">
                    Paid
                  </span>
                )}
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[course.difficulty]}`}>
                  {course.difficulty}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)]">
              <span>{course.provider}</span>
              <span>&#8226;</span>
              <span>{course.duration}</span>
              <span>&#8226;</span>
              <span>{course.topic}</span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[var(--color-text-muted)]">
          <p className="text-lg">No courses found</p>
          <p className="text-sm mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
