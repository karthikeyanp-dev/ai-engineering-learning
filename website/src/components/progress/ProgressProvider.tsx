import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import {
  type UserProgress,
  type LessonProgress,
  loadProgress,
  saveProgress,
  resetProgress as resetStoredProgress,
  exportProgress as exportStoredProgress,
  importProgress as importStoredProgress,
  DEFAULT_PROGRESS,
} from '../../lib/progress';
import { CURRICULUM, getTotalLessonCount } from '../../lib/curriculum';

export interface ProgressContextType {
  progress: UserProgress;
  // Lesson actions
  markLessonComplete: (lessonId: string, phaseId: string) => void;
  markLessonIncomplete: (lessonId: string, phaseId: string) => void;
  toggleMilestone: (lessonId: string, phaseId: string, milestoneId: string) => void;
  visitLesson: (lessonId: string) => void;
  // Computed values
  getPhaseProgress: (phaseId: string) => number;
  getLessonProgress: (lessonId: string, phaseId: string) => LessonProgress | null;
  getOverallProgress: () => number;
  getTotalCompleted: () => number;
  getTotalLessons: () => number;
  getRecentLessons: () => string[];
  // Data management
  resetProgress: () => void;
  exportProgress: () => string;
  importProgress: (json: string) => boolean;
}

export const ProgressContext = createContext<ProgressContextType | null>(null);

interface ProgressProviderProps {
  children: ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };
    return loadProgress();
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    saveProgress(progress);
  }, [progress]);

  const markLessonComplete = useCallback((lessonId: string, phaseId: string) => {
    setProgress((prev) => {
      const updated = { ...prev, lastActiveAt: new Date().toISOString() };
      if (!updated.phases[phaseId]) {
        updated.phases = { ...updated.phases, [phaseId]: { lessons: {} } };
      } else {
        updated.phases = { ...updated.phases, [phaseId]: { ...updated.phases[phaseId] } };
      }
      const existingLesson = updated.phases[phaseId].lessons[lessonId];
      updated.phases[phaseId] = {
        ...updated.phases[phaseId],
        lessons: {
          ...updated.phases[phaseId].lessons,
          [lessonId]: {
            completed: true,
            milestones: existingLesson?.milestones || [],
            lastAccessed: new Date().toISOString(),
            timeSpent: existingLesson?.timeSpent || 0,
          },
        },
      };
      return updated;
    });
  }, []);

  const markLessonIncomplete = useCallback((lessonId: string, phaseId: string) => {
    setProgress((prev) => {
      const updated = { ...prev, lastActiveAt: new Date().toISOString() };
      if (!updated.phases[phaseId]) return updated;
      updated.phases = { ...updated.phases, [phaseId]: { ...updated.phases[phaseId] } };
      const existingLesson = updated.phases[phaseId].lessons[lessonId];
      if (!existingLesson) return updated;
      updated.phases[phaseId] = {
        ...updated.phases[phaseId],
        lessons: {
          ...updated.phases[phaseId].lessons,
          [lessonId]: { ...existingLesson, completed: false },
        },
      };
      return updated;
    });
  }, []);

  const toggleMilestone = useCallback((lessonId: string, phaseId: string, milestoneId: string) => {
    setProgress((prev) => {
      const updated = { ...prev, lastActiveAt: new Date().toISOString() };
      if (!updated.phases[phaseId]) {
        updated.phases = { ...updated.phases, [phaseId]: { lessons: {} } };
      } else {
        updated.phases = { ...updated.phases, [phaseId]: { ...updated.phases[phaseId] } };
      }
      const existingLesson = updated.phases[phaseId].lessons[lessonId] || {
        completed: false,
        milestones: [],
        lastAccessed: new Date().toISOString(),
        timeSpent: 0,
      };
      const milestones = existingLesson.milestones.includes(milestoneId)
        ? existingLesson.milestones.filter((m) => m !== milestoneId)
        : [...existingLesson.milestones, milestoneId];
      updated.phases[phaseId] = {
        ...updated.phases[phaseId],
        lessons: {
          ...updated.phases[phaseId].lessons,
          [lessonId]: { ...existingLesson, milestones, lastAccessed: new Date().toISOString() },
        },
      };
      return updated;
    });
  }, []);

  const visitLesson = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const recentLessons = [lessonId, ...prev.recentLessons.filter((id) => id !== lessonId)].slice(0, 5);
      return { ...prev, lastActiveAt: new Date().toISOString(), recentLessons };
    });
  }, []);

  const getPhaseProgress = useCallback(
    (phaseId: string): number => {
      const phase = CURRICULUM.find((p) => p.id === phaseId);
      if (!phase || phase.lessons.length === 0) return 0;
      const phaseData = progress.phases[phaseId];
      if (!phaseData) return 0;
      const completedCount = phase.lessons.filter(
        (lesson) => phaseData.lessons[lesson.id]?.completed
      ).length;
      return Math.round((completedCount / phase.lessons.length) * 100);
    },
    [progress]
  );

  const getLessonProgress = useCallback(
    (lessonId: string, phaseId: string): LessonProgress | null => {
      const phaseData = progress.phases[phaseId];
      if (!phaseData) return null;
      return phaseData.lessons[lessonId] || null;
    },
    [progress]
  );

  const getOverallProgress = useCallback((): number => {
    const totalLessons = getTotalLessonCount();
    if (totalLessons === 0) return 0;
    let completedCount = 0;
    for (const phase of CURRICULUM) {
      const phaseData = progress.phases[phase.id];
      if (!phaseData) continue;
      for (const lesson of phase.lessons) {
        if (phaseData.lessons[lesson.id]?.completed) {
          completedCount++;
        }
      }
    }
    return Math.round((completedCount / totalLessons) * 100);
  }, [progress]);

  const getTotalCompleted = useCallback((): number => {
    let count = 0;
    for (const phase of CURRICULUM) {
      const phaseData = progress.phases[phase.id];
      if (!phaseData) continue;
      for (const lesson of phase.lessons) {
        if (phaseData.lessons[lesson.id]?.completed) count++;
      }
    }
    return count;
  }, [progress]);

  const getTotalLessonsCount = useCallback((): number => {
    return getTotalLessonCount();
  }, []);

  const getRecentLessons = useCallback((): string[] => {
    return progress.recentLessons;
  }, [progress]);

  const handleResetProgress = useCallback(() => {
    resetStoredProgress();
    setProgress({ ...DEFAULT_PROGRESS, startedAt: new Date().toISOString(), lastActiveAt: new Date().toISOString() });
  }, []);

  const handleExportProgress = useCallback((): string => {
    return exportStoredProgress();
  }, []);

  const handleImportProgress = useCallback((json: string): boolean => {
    const success = importStoredProgress(json);
    if (success) {
      setProgress(loadProgress());
    }
    return success;
  }, []);

  const contextValue: ProgressContextType = {
    progress,
    markLessonComplete,
    markLessonIncomplete,
    toggleMilestone,
    visitLesson,
    getPhaseProgress,
    getLessonProgress,
    getOverallProgress,
    getTotalCompleted,
    getTotalLessons: getTotalLessonsCount,
    getRecentLessons,
    resetProgress: handleResetProgress,
    exportProgress: handleExportProgress,
    importProgress: handleImportProgress,
  };

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}
