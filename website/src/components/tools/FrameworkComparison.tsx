import { useState } from 'react';
import { appFrameworks, agentFrameworks, type FrameworkInfo } from '../../lib/resources-data';

function ComparisonTable({ frameworks }: { frameworks: FrameworkInfo[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Framework</th>
            <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Ease of Use</th>
            <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Documentation</th>
            <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Community</th>
            <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Best For</th>
            <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Limitations</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map((fw) => (
            <tr key={fw.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-3 font-medium text-white whitespace-nowrap">{fw.name}</td>
              <td className="p-3">{fw.easeOfUse}</td>
              <td className="p-3">{fw.documentation}</td>
              <td className="p-3 text-[var(--color-text-secondary)]">{fw.community}</td>
              <td className="p-3 text-[var(--color-text-secondary)]">{fw.bestFor}</td>
              <td className="p-3 text-[var(--color-text-muted)]">{fw.limitations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FrameworkComparison() {
  const [view, setView] = useState<'app' | 'agent'>('app');

  return (
    <div className="space-y-6">
      {/* Toggle */}
      <div className="flex rounded-lg overflow-hidden border border-white/10 w-fit">
        <button
          onClick={() => setView('app')}
          className={`px-5 py-2.5 text-sm font-medium transition-all ${
            view === 'app'
              ? 'bg-[var(--color-accent-start)] text-white'
              : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] hover:text-white'
          }`}
        >
          App Frameworks
        </button>
        <button
          onClick={() => setView('agent')}
          className={`px-5 py-2.5 text-sm font-medium transition-all ${
            view === 'agent'
              ? 'bg-[var(--color-accent-start)] text-white'
              : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] hover:text-white'
          }`}
        >
          Agent Frameworks
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)]">
        {view === 'app'
          ? 'LLM application frameworks for building chains, RAG pipelines, and tool-augmented apps.'
          : 'Agent orchestration frameworks for building autonomous and multi-agent systems.'}
      </p>

      {/* Table */}
      <ComparisonTable frameworks={view === 'app' ? appFrameworks : agentFrameworks} />

      {/* Quick Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {(view === 'app' ? appFrameworks : agentFrameworks).map((fw) => (
          <div
            key={fw.name}
            className="rounded-xl p-4 bg-[var(--color-bg-secondary)] border border-white/10"
          >
            <h4 className="font-semibold text-white mb-2">{fw.name}</h4>
            <p className="text-xs text-[var(--color-text-muted)] mb-2">
              <span className="text-[var(--color-success)]">Best for:</span> {fw.bestFor}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--color-warning)]">Watch out:</span> {fw.limitations}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
