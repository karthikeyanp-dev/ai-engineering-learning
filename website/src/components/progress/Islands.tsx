// Wrapper components that combine ProgressProvider with progress-dependent components
// These ensure the React context is shared within a single island

import { ProgressProvider } from '../progress/ProgressProvider';
import { ProgressStats } from '../progress/ProgressStats';
import { MilestoneChecklist } from '../progress/MilestoneChecklist';
import { LessonCompleteButton } from '../progress/LessonCompleteButton';

interface ProgressStatsIslandProps {
  phaseId?: string;
}

export function ProgressStatsIsland({ phaseId }: ProgressStatsIslandProps) {
  return (
    <ProgressProvider>
      <ProgressStats phaseId={phaseId} />
    </ProgressProvider>
  );
}

interface MilestoneChecklistIslandProps {
  lessonId: string;
  phaseId: string;
  milestones: { id: string; label: string }[];
}

export function MilestoneChecklistIsland({ lessonId, phaseId, milestones }: MilestoneChecklistIslandProps) {
  return (
    <ProgressProvider>
      <MilestoneChecklist lessonId={lessonId} phaseId={phaseId} milestones={milestones} />
    </ProgressProvider>
  );
}

interface LessonCompleteButtonIslandProps {
  lessonId: string;
  phaseId: string;
}

export function LessonCompleteButtonIsland({ lessonId, phaseId }: LessonCompleteButtonIslandProps) {
  return (
    <ProgressProvider>
      <LessonCompleteButton lessonId={lessonId} phaseId={phaseId} />
    </ProgressProvider>
  );
}
