// Navigation helper utilities for lesson/phase routing
import { CURRICULUM, type Phase } from './curriculum';

interface LessonLink {
  slug: string;
  title: string;
}

// Flattened ordered list of all lessons across phases
function getAllLessonsOrdered(): { id: string; title: string; phaseId: string }[] {
  const lessons: { id: string; title: string; phaseId: string }[] = [];
  for (const phase of CURRICULUM) {
    for (const lesson of phase.lessons) {
      lessons.push({ id: lesson.id, title: lesson.title, phaseId: phase.id });
    }
  }
  return lessons;
}

export function getNextLesson(currentSlug: string): LessonLink | null {
  const allLessons = getAllLessonsOrdered();
  const currentIndex = allLessons.findIndex((l) => l.id === currentSlug);
  if (currentIndex === -1 || currentIndex === allLessons.length - 1) return null;
  const next = allLessons[currentIndex + 1];
  return { slug: next.id, title: next.title };
}

export function getPrevLesson(currentSlug: string): LessonLink | null {
  const allLessons = getAllLessonsOrdered();
  const currentIndex = allLessons.findIndex((l) => l.id === currentSlug);
  if (currentIndex <= 0) return null;
  const prev = allLessons[currentIndex - 1];
  return { slug: prev.id, title: prev.title };
}

export function getPhaseForLesson(slug: string): Phase | null {
  for (const phase of CURRICULUM) {
    const found = phase.lessons.find((l) => l.id === slug);
    if (found) return phase;
  }
  return null;
}

export function getLessonUrl(slug: string): string {
  return `/lessons/${slug}`;
}

export function getPhaseUrl(phaseId: string): string {
  return `/phases/${phaseId}`;
}
