import { useProgress } from '../progress/useProgress';
import { CURRICULUM } from '../../lib/curriculum';

interface PhaseNode {
  id: string;
  number: number;
  title: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'locked';
}

const PHASE_DURATIONS: Record<string, string> = {
  'phase-0': '2-3 weeks',
  'phase-1': '2-3 weeks',
  'phase-2': '3-4 weeks',
  'phase-3': '3-4 weeks',
  'phase-4': '2-3 weeks',
  'phase-5': '2-3 weeks',
  'phase-6': '3-4 weeks',
  'phase-7': '2 weeks',
  'phase-8': '2-3 weeks',
  'phase-9': '4-6 weeks',
  'career': 'Ongoing',
};

export function RoadmapTimeline() {
  const { getPhaseProgress } = useProgress();

  // Build phase nodes with status
  const phases: PhaseNode[] = CURRICULUM.map((phase) => {
    const progress = getPhaseProgress(phase.id);
    let status: PhaseNode['status'] = 'locked';

    if (progress === 100) {
      status = 'completed';
    } else if (progress > 0) {
      status = 'in-progress';
    } else {
      // Check if previous phase is completed or this is the first phase
      const phaseIndex = CURRICULUM.indexOf(phase);
      if (phaseIndex === 0) {
        status = 'in-progress';
      } else {
        const prevPhase = CURRICULUM[phaseIndex - 1];
        const prevProgress = getPhaseProgress(prevPhase.id);
        if (prevProgress === 100) {
          status = 'in-progress';
        }
      }
    }

    return {
      id: phase.id,
      number: phase.number,
      title: phase.title,
      duration: PHASE_DURATIONS[phase.id] || '',
      status,
    };
  });

  // Calculate how far the progress line should extend
  const lastCompletedIndex = phases.reduce(
    (acc, phase, idx) => (phase.status === 'completed' ? idx : acc),
    -1
  );
  const inProgressIndex = phases.findIndex((p) => p.status === 'in-progress');
  const progressPercent =
    phases.length > 1
      ? ((lastCompletedIndex + (inProgressIndex > lastCompletedIndex ? 0.5 : 0)) /
          (phases.length - 1)) *
        100
      : 0;

  return (
    <section id="roadmap" className="mb-12 scroll-mt-8">
      <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
        Learning Roadmap
      </h2>
      <p className="text-[var(--color-text-muted)] mb-8">
        Your journey from foundations to full-stack AI engineering
      </p>

      {/* Desktop horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative overflow-x-auto pb-4">
          <div className="min-w-[900px] px-4">
            {/* Track line */}
            <div className="relative h-1 bg-white/10 rounded-full mx-8 mt-6">
              {/* Progress fill */}
              <div
                className="absolute h-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.max(0, progressPercent)}%` }}
              />
            </div>

            {/* Nodes */}
            <div className="flex justify-between -mt-4 px-4">
              {phases.map((phase) => (
                <a
                  key={phase.id}
                  href={`/phases/${phase.id}`}
                  className="flex flex-col items-center group w-[80px] no-underline"
                >
                  {/* Node circle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      phase.status === 'completed'
                        ? 'bg-[var(--color-success)] border-[var(--color-success)] scale-110'
                        : phase.status === 'in-progress'
                          ? 'bg-[var(--color-accent-start)]/20 border-[var(--color-accent-start)] animate-pulse-glow'
                          : 'bg-[var(--color-bg-tertiary)] border-[var(--color-border-light)]'
                    } group-hover:scale-125`}
                  >
                    {phase.status === 'completed' ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : phase.status === 'in-progress' ? (
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-start)]" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[var(--color-border-light)]" />
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className={`mt-3 text-[10px] text-center leading-tight font-medium transition-colors ${
                      phase.status === 'completed'
                        ? 'text-[var(--color-success)]'
                        : phase.status === 'in-progress'
                          ? 'text-[var(--color-text-primary)]'
                          : 'text-[var(--color-text-muted)]'
                    } group-hover:text-[var(--color-text-primary)]`}
                  >
                    {phase.title.length > 18
                      ? phase.title.substring(0, 16) + '...'
                      : phase.title}
                  </span>

                  {/* Duration */}
                  <span className="mt-1 text-[9px] text-[var(--color-text-muted)]">
                    {phase.duration}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet vertical timeline */}
      <div className="lg:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10">
            <div
              className="w-full bg-gradient-to-b from-[var(--color-accent-start)] to-[var(--color-accent-end)] transition-all duration-1000 ease-out"
              style={{ height: `${Math.max(0, progressPercent)}%` }}
            />
          </div>

          {/* Nodes */}
          <div className="space-y-6">
            {phases.map((phase) => (
              <a
                key={phase.id}
                href={`/phases/${phase.id}`}
                className="flex items-center gap-4 group no-underline"
              >
                {/* Node circle */}
                <div
                  className={`relative z-10 w-8 h-8 -ml-8 rounded-full flex items-center justify-center border-2 shrink-0 transition-all ${
                    phase.status === 'completed'
                      ? 'bg-[var(--color-success)] border-[var(--color-success)]'
                      : phase.status === 'in-progress'
                        ? 'bg-[var(--color-accent-start)]/20 border-[var(--color-accent-start)] animate-pulse-glow'
                        : 'bg-[var(--color-bg-tertiary)] border-[var(--color-border-light)]'
                  } group-hover:scale-110`}
                >
                  {phase.status === 'completed' ? (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : phase.status === 'in-progress' ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-start)]" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-light)]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 py-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-medium text-sm ${
                        phase.status === 'completed'
                          ? 'text-[var(--color-success)]'
                          : phase.status === 'in-progress'
                            ? 'text-[var(--color-text-primary)]'
                            : 'text-[var(--color-text-muted)]'
                      } group-hover:text-[var(--color-text-primary)]`}
                    >
                      {phase.title}
                    </span>
                    {phase.status === 'completed' && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-success)]/20 text-[var(--color-success)]">
                        Done
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {phase.duration}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
