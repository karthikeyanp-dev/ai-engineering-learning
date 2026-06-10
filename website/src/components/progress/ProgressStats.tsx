import { useProgress } from './useProgress';
import { CURRICULUM } from '../../lib/curriculum';

interface ProgressStatsProps {
  phaseId?: string;
}

export function ProgressStats({ phaseId }: ProgressStatsProps) {
  const { getOverallProgress, getTotalCompleted, getTotalLessons, getPhaseProgress, progress } = useProgress();

  // Calculate total milestones achieved
  const getTotalMilestones = (): number => {
    let count = 0;
    for (const phase of CURRICULUM) {
      const phaseData = progress.phases[phase.id];
      if (!phaseData) continue;
      for (const lesson of phase.lessons) {
        const lessonData = phaseData.lessons[lesson.id];
        if (lessonData) {
          count += lessonData.milestones.length;
        }
      }
    }
    return count;
  };

  const getTotalMilestoneCount = (): number => {
    return CURRICULUM.reduce(
      (sum, phase) => sum + phase.lessons.reduce((lSum, lesson) => lSum + lesson.milestones.length, 0),
      0
    );
  };

  // Phase-specific stats
  if (phaseId) {
    const phase = CURRICULUM.find((p) => p.id === phaseId);
    if (!phase) return null;

    const phaseProgress = getPhaseProgress(phaseId);
    const phaseData = progress.phases[phaseId];
    const phaseLessonsCompleted = phase.lessons.filter(
      (l) => phaseData?.lessons[l.id]?.completed
    ).length;
    const phaseMilestones = phase.lessons.reduce((sum, l) => {
      const lessonData = phaseData?.lessons[l.id];
      return sum + (lessonData?.milestones.length || 0);
    }, 0);
    const phaseTotalMilestones = phase.lessons.reduce((sum, l) => sum + l.milestones.length, 0);

    return (
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={<ProgressIcon />}
          label="Phase Progress"
          value={`${phaseProgress}%`}
        />
        <StatCard
          icon={<LessonIcon />}
          label="Lessons Done"
          value={`${phaseLessonsCompleted}/${phase.lessons.length}`}
        />
        <StatCard
          icon={<MilestoneIcon />}
          label="Milestones"
          value={`${phaseMilestones}/${phaseTotalMilestones}`}
        />
      </div>
    );
  }

  // Overall stats
  const overallProgress = getOverallProgress();
  const totalCompleted = getTotalCompleted();
  const totalLessons = getTotalLessons();
  const totalMilestones = getTotalMilestones();
  const totalMilestoneCount = getTotalMilestoneCount();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <StatCard
        icon={<ProgressIcon />}
        label="Overall Progress"
        value={`${overallProgress}%`}
      />
      <StatCard
        icon={<LessonIcon />}
        label="Lessons Completed"
        value={`${totalCompleted}/${totalLessons}`}
      />
      <StatCard
        icon={<MilestoneIcon />}
        label="Milestones Achieved"
        value={`${totalMilestones}/${totalMilestoneCount}`}
      />
      <StatCard
        icon={<PhaseIcon />}
        label="Phases Complete"
        value={`${CURRICULUM.filter((p) => getPhaseProgress(p.id) === 100).length}/${CURRICULUM.length}`}
      />
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-zinc-500">{icon}</span>
        <span className="text-xs text-zinc-500 font-medium">{label}</span>
      </div>
      <p className="text-lg font-bold text-zinc-100">{value}</p>
    </div>
  );
}

function ProgressIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function LessonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function MilestoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
  );
}

function PhaseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}
