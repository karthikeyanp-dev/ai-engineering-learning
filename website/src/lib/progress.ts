// Progress tracking types and localStorage utilities

export interface LessonProgress {
  completed: boolean;
  milestones: string[]; // IDs of completed milestones
  lastAccessed?: string; // ISO date
  timeSpent?: number; // minutes
}

export interface PhaseProgress {
  lessons: Record<string, LessonProgress>;
}

export interface UserProgress {
  phases: Record<string, PhaseProgress>;
  startedAt: string; // ISO date
  lastActiveAt: string; // ISO date
  recentLessons: string[]; // last 5 lesson IDs visited
}

export const STORAGE_KEY = 'ai-eng-progress';

export const DEFAULT_PROGRESS: UserProgress = {
  phases: {},
  startedAt: new Date().toISOString(),
  lastActiveAt: new Date().toISOString(),
  recentLessons: [],
};

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { ...DEFAULT_PROGRESS, startedAt: new Date().toISOString(), lastActiveAt: new Date().toISOString() };
    const parsed = JSON.parse(stored) as UserProgress;
    return parsed;
  } catch {
    return { ...DEFAULT_PROGRESS, startedAt: new Date().toISOString(), lastActiveAt: new Date().toISOString() };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    console.warn('Failed to save progress to localStorage');
  }
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function exportProgress(): string {
  if (typeof window === 'undefined') return JSON.stringify(DEFAULT_PROGRESS);
  const progress = loadProgress();
  return JSON.stringify(progress, null, 2);
}

export function importProgress(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    // Basic validation
    if (!parsed || typeof parsed !== 'object') return false;
    if (!parsed.phases || typeof parsed.phases !== 'object') return false;
    if (!parsed.startedAt || !parsed.lastActiveAt) return false;
    saveProgress(parsed as UserProgress);
    return true;
  } catch {
    return false;
  }
}
