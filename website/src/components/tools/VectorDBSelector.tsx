import { useState } from 'react';
import { vectorDBs } from '../../lib/resources-data';

interface QuizState {
  step: number;
  hosting: string | null;
  scale: string | null;
  tech: string | null;
}

function getRecommendation(state: QuizState): string | null {
  const { hosting, scale, tech } = state;
  if (!hosting || !scale || !tech) return null;

  if (hosting === 'managed') {
    if (scale === 'enterprise') return 'Pinecone';
    if (scale === 'medium') return 'Pinecone';
    return 'Pinecone';
  }

  // Self-hosted
  if (tech === 'postgresql') return 'pgvector';
  if (scale === 'prototype') return 'ChromaDB';
  if (scale === 'enterprise') return 'Milvus';
  if (tech === 'cloud-native') return 'Qdrant';
  return 'Weaviate';
}

export function VectorDBSelector() {
  const [quiz, setQuiz] = useState<QuizState>({ step: 0, hosting: null, scale: null, tech: null });
  const [showQuiz, setShowQuiz] = useState(false);

  const recommendation = getRecommendation(quiz);

  const resetQuiz = () => {
    setQuiz({ step: 0, hosting: null, scale: null, tech: null });
  };

  return (
    <div className="space-y-8">
      {/* Comparison Table */}
      <section>
        <h3 className="text-lg font-bold mb-4">Comparison Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Database</th>
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Best For</th>
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Hosting</th>
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Cost</th>
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Ease of Use</th>
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Performance</th>
                <th className="text-left p-3 text-[var(--color-text-muted)] font-medium">Scalability</th>
              </tr>
            </thead>
            <tbody>
              {vectorDBs.map((db) => (
                <tr
                  key={db.name}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                    recommendation === db.name ? 'bg-[var(--color-accent-start)]/10 border-[var(--color-accent-start)]/30' : ''
                  }`}
                >
                  <td className="p-3 font-medium text-white">{db.name}</td>
                  <td className="p-3 text-[var(--color-text-secondary)]">{db.bestFor}</td>
                  <td className="p-3 text-[var(--color-text-muted)]">{db.hosting}</td>
                  <td className="p-3 text-[var(--color-text-muted)]">{db.cost}</td>
                  <td className="p-3">{db.easeOfUse}</td>
                  <td className="p-3">{db.performance}</td>
                  <td className="p-3">{db.scalability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Find Your Match</h3>
          <button
            onClick={() => { setShowQuiz(!showQuiz); resetQuiz(); }}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white hover:opacity-90 transition-opacity"
          >
            {showQuiz ? 'Hide Quiz' : 'Take the Quiz'}
          </button>
        </div>

        {showQuiz && (
          <div className="rounded-xl p-6 bg-[var(--color-bg-secondary)] border border-white/10 space-y-6">
            {/* Question 1 */}
            <div className={quiz.step >= 0 ? '' : 'opacity-50 pointer-events-none'}>
              <p className="font-medium text-white mb-3">Q1: Self-hosted or managed?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setQuiz({ ...quiz, hosting: 'self-hosted', step: 1 })}
                  className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                    quiz.hosting === 'self-hosted'
                      ? 'bg-[var(--color-accent-start)]/20 border-[var(--color-accent-start)]/50 text-white'
                      : 'bg-[var(--color-bg-tertiary)] border-white/10 text-[var(--color-text-muted)] hover:border-white/20'
                  }`}
                >
                  Self-hosted
                </button>
                <button
                  onClick={() => setQuiz({ ...quiz, hosting: 'managed', step: 1 })}
                  className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                    quiz.hosting === 'managed'
                      ? 'bg-[var(--color-accent-start)]/20 border-[var(--color-accent-start)]/50 text-white'
                      : 'bg-[var(--color-bg-tertiary)] border-white/10 text-[var(--color-text-muted)] hover:border-white/20'
                  }`}
                >
                  Managed
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className={quiz.step >= 1 ? '' : 'opacity-50 pointer-events-none'}>
              <p className="font-medium text-white mb-3">Q2: What scale?</p>
              <div className="flex gap-3 flex-wrap">
                {['prototype', 'medium', 'enterprise'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setQuiz({ ...quiz, scale: opt, step: 2 })}
                    className={`px-4 py-2 rounded-lg text-sm border transition-all capitalize ${
                      quiz.scale === opt
                        ? 'bg-[var(--color-accent-start)]/20 border-[var(--color-accent-start)]/50 text-white'
                        : 'bg-[var(--color-bg-tertiary)] border-white/10 text-[var(--color-text-muted)] hover:border-white/20'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className={quiz.step >= 2 ? '' : 'opacity-50 pointer-events-none'}>
              <p className="font-medium text-white mb-3">Q3: Existing tech?</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { value: 'postgresql', label: 'PostgreSQL' },
                  { value: 'standalone', label: 'Standalone' },
                  { value: 'cloud-native', label: 'Cloud-native' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setQuiz({ ...quiz, tech: opt.value, step: 3 })}
                    className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                      quiz.tech === opt.value
                        ? 'bg-[var(--color-accent-start)]/20 border-[var(--color-accent-start)]/50 text-white'
                        : 'bg-[var(--color-bg-tertiary)] border-white/10 text-[var(--color-text-muted)] hover:border-white/20'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendation */}
            {recommendation && (
              <div className="rounded-lg p-4 bg-[var(--color-accent-start)]/10 border border-[var(--color-accent-start)]/30">
                <p className="text-sm text-[var(--color-text-muted)] mb-1">Recommended:</p>
                <p className="text-xl font-bold text-white">{recommendation}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                  {vectorDBs.find((db) => db.name === recommendation)?.bestFor}
                </p>
              </div>
            )}

            {/* Reset */}
            {quiz.step > 0 && (
              <button
                onClick={resetQuiz}
                className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors underline"
              >
                Start Over
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
