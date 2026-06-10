import { useState } from 'react';
import { useProgress } from './useProgress';

interface MilestoneItem {
  id: string;
  label: string;
}

interface MilestoneChecklistProps {
  lessonId: string;
  phaseId: string;
  milestones: MilestoneItem[];
}

export function MilestoneChecklist({ lessonId, phaseId, milestones }: MilestoneChecklistProps) {
  const { toggleMilestone, getLessonProgress, markLessonComplete } = useProgress();
  const [showSuggestion, setShowSuggestion] = useState(false);

  const lessonProgress = getLessonProgress(lessonId, phaseId);
  const completedMilestones = lessonProgress?.milestones || [];
  const completedCount = completedMilestones.length;
  const totalCount = milestones.length;
  const allCompleted = completedCount === totalCount && totalCount > 0;
  const isLessonComplete = lessonProgress?.completed || false;

  const handleToggle = (milestoneId: string) => {
    toggleMilestone(lessonId, phaseId, milestoneId);

    // Check if all milestones will be completed after this toggle
    const willBeCompleted = !completedMilestones.includes(milestoneId);
    const newCount = willBeCompleted ? completedCount + 1 : completedCount - 1;
    if (newCount === totalCount && !isLessonComplete) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  };

  const handleMarkComplete = () => {
    markLessonComplete(lessonId, phaseId);
    setShowSuggestion(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-zinc-300">Milestones</h4>
        <span className="text-xs font-medium text-zinc-500">
          {completedCount}/{totalCount} completed
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 ease-out"
          style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
        />
      </div>

      {/* Milestone list */}
      <ul className="space-y-2">
        {milestones.map((milestone) => {
          const isChecked = completedMilestones.includes(milestone.id);
          return (
            <li key={milestone.id}>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggle(milestone.id)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                      isChecked
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'border-zinc-600 group-hover:border-zinc-400'
                    }`}
                  >
                    {isChecked && (
                      <svg
                        className="w-3 h-3 text-white animate-[scale-in_0.15s_ease-out]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  className={`text-sm leading-tight transition-colors duration-200 ${
                    isChecked ? 'text-zinc-500 line-through' : 'text-zinc-300 group-hover:text-zinc-100'
                  }`}
                >
                  {milestone.label}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* Suggestion to mark lesson complete */}
      {(showSuggestion || (allCompleted && !isLessonComplete)) && (
        <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-sm text-emerald-400 mb-2">
            All milestones completed! Ready to mark this lesson as done?
          </p>
          <button
            onClick={handleMarkComplete}
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-emerald-500 text-white hover:bg-emerald-400 transition-colors"
          >
            Mark Lesson Complete
          </button>
        </div>
      )}
    </div>
  );
}
