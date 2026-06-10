import { useState, useEffect } from 'react';
import { useProgress } from './useProgress';

interface LessonCompleteButtonProps {
  lessonId: string;
  phaseId: string;
}

export function LessonCompleteButton({ lessonId, phaseId }: LessonCompleteButtonProps) {
  const { getLessonProgress, markLessonComplete, markLessonIncomplete } = useProgress();
  const [celebrating, setCelebrating] = useState(false);

  const lessonProgress = getLessonProgress(lessonId, phaseId);
  const isComplete = lessonProgress?.completed || false;

  useEffect(() => {
    if (celebrating) {
      const timer = setTimeout(() => setCelebrating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [celebrating]);

  const handleClick = () => {
    if (isComplete) {
      markLessonIncomplete(lessonId, phaseId);
    } else {
      markLessonComplete(lessonId, phaseId);
      setCelebrating(true);
    }
  };

  return (
    <div className="relative inline-flex">
      <button
        onClick={handleClick}
        className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
          isComplete
            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25'
            : 'bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-100'
        }`}
      >
        {isComplete ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Completed
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="9" />
            </svg>
            Mark Complete
          </>
        )}
      </button>

      {/* Celebration animation */}
      {celebrating && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full animate-[confetti_1s_ease-out_forwards]"
              style={{
                backgroundColor: ['#10b981', '#34d399', '#6ee7b7', '#fbbf24', '#f59e0b', '#8b5cf6'][i % 6],
                '--confetti-angle': `${(i * 30)}deg`,
                '--confetti-distance': `${40 + Math.random() * 30}px`,
                animationDelay: `${i * 50}ms`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}
    </div>
  );
}
