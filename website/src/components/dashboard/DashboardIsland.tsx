import { ProgressProvider } from '../progress/ProgressProvider';
import { Hero } from './Hero';
import { RoadmapTimeline } from './RoadmapTimeline';
import { ProgressDashboard } from './ProgressDashboard';
import { PhaseCards } from './PhaseCards';
import { RecentLessons } from './RecentLessons';

export function DashboardIsland() {
  return (
    <ProgressProvider>
      <div className="animate-fade-in">
        <Hero />
        <RoadmapTimeline />
        <ProgressDashboard />
        <PhaseCards />
        <RecentLessons />
      </div>
    </ProgressProvider>
  );
}
