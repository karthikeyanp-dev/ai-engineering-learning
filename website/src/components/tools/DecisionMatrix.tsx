import { useState } from 'react';

interface Step {
  question: string;
  options: { label: string; value: string }[];
}

const steps: Step[] = [
  {
    question: 'Is the knowledge static or frequently changing?',
    options: [
      { label: 'Static / rarely changes', value: 'static' },
      { label: 'Frequently updated', value: 'dynamic' },
    ],
  },
  {
    question: 'Do you need to change the model\'s behavior or style?',
    options: [
      { label: 'Yes, change tone/format/domain expertise', value: 'behavior' },
      { label: 'No, just need access to specific info', value: 'info' },
    ],
  },
  {
    question: 'How much training data do you have?',
    options: [
      { label: 'None / very little', value: 'none' },
      { label: 'Some examples (100-1000)', value: 'some' },
      { label: 'Large dataset (1000+)', value: 'large' },
    ],
  },
  {
    question: 'What\'s your compute budget?',
    options: [
      { label: 'Minimal (API calls only)', value: 'minimal' },
      { label: 'Moderate (can run inference)', value: 'moderate' },
      { label: 'High (GPU training available)', value: 'high' },
    ],
  },
];

interface Recommendation {
  title: string;
  description: string;
  approach: string;
  color: string;
}

function getRecommendation(answers: string[]): Recommendation {
  const [knowledge, behavior, data, budget] = answers;

  // Fine-tuning path
  if (behavior === 'behavior' && data !== 'none' && budget === 'high') {
    return {
      title: 'Fine-Tuning',
      approach: 'fine-tuning',
      description: 'You want to change model behavior, have training data, and compute budget. Fine-tuning will embed domain expertise directly into model weights.',
      color: 'var(--color-accent-end)',
    };
  }

  // RAG path
  if (knowledge === 'dynamic' || (behavior === 'info' && data !== 'large')) {
    return {
      title: 'RAG (Retrieval-Augmented Generation)',
      approach: 'rag',
      description: 'Your knowledge changes frequently or you need the model to access specific information without retraining. RAG provides up-to-date context at query time.',
      color: 'var(--color-info)',
    };
  }

  // Prompt Engineering path
  if (budget === 'minimal' || data === 'none') {
    return {
      title: 'Prompt Engineering',
      approach: 'prompting',
      description: 'With minimal compute budget or no training data, well-crafted prompts with few-shot examples are your best starting point. Often underrated in effectiveness!',
      color: 'var(--color-success)',
    };
  }

  // Combined approach
  if (behavior === 'behavior' && knowledge === 'dynamic') {
    return {
      title: 'RAG + Fine-Tuning (Combined)',
      approach: 'combined',
      description: 'You need both custom behavior AND dynamic knowledge. Fine-tune for style/expertise, then use RAG for up-to-date information retrieval.',
      color: 'var(--color-warning)',
    };
  }

  // Default: RAG
  return {
    title: 'RAG (Retrieval-Augmented Generation)',
    approach: 'rag',
    description: 'Based on your requirements, RAG provides the best balance of flexibility and capability without the overhead of fine-tuning.',
    color: 'var(--color-info)',
  };
}

export function DecisionMatrix() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const startOver = () => {
    setCurrentStep(0);
    setAnswers([]);
    setCompleted(false);
  };

  const recommendation = completed ? getRecommendation(answers) : null;

  return (
    <div className="space-y-6">
      <p className="text-sm text-[var(--color-text-muted)]">
        Answer a few questions to find the best approach for your use case.
      </p>

      {/* Progress */}
      <div className="flex gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i < currentStep || completed
                ? 'bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)]'
                : i === currentStep && !completed
                ? 'bg-[var(--color-accent-start)]/50'
                : 'bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Current Question */}
      {!completed && (
        <div className="rounded-xl p-6 bg-[var(--color-bg-secondary)] border border-white/10">
          <p className="text-xs text-[var(--color-text-muted)] mb-2">
            Question {currentStep + 1} of {steps.length}
          </p>
          <h3 className="text-lg font-semibold text-white mb-6">
            {steps[currentStep].question}
          </h3>
          <div className="space-y-3">
            {steps[currentStep].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full text-left px-5 py-3.5 rounded-lg border border-white/10 bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-start)]/50 hover:bg-[var(--color-accent-start)]/5 transition-all duration-200"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Recommendation */}
      {completed && recommendation && (
        <div className="rounded-xl p-6 bg-[var(--color-bg-secondary)] border border-white/10 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: recommendation.color }}
            />
            <p className="text-xs text-[var(--color-text-muted)]">Recommendation</p>
          </div>
          <h3 className="text-2xl font-bold text-white">{recommendation.title}</h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {recommendation.description}
          </p>

          {/* Quick guide */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-sm font-medium text-white mb-2">Quick Guide:</h4>
            {recommendation.approach === 'prompting' && (
              <ul className="space-y-1 text-sm text-[var(--color-text-muted)]">
                <li>&#8226; Start with zero-shot, then add few-shot examples</li>
                <li>&#8226; Use chain-of-thought for complex reasoning</li>
                <li>&#8226; Structure outputs with system prompts</li>
                <li>&#8226; Iterate with evaluation metrics</li>
              </ul>
            )}
            {recommendation.approach === 'rag' && (
              <ul className="space-y-1 text-sm text-[var(--color-text-muted)]">
                <li>&#8226; Chunk documents appropriately (512-1024 tokens)</li>
                <li>&#8226; Choose embedding model matched to your domain</li>
                <li>&#8226; Implement hybrid search (semantic + keyword)</li>
                <li>&#8226; Add reranking for better precision</li>
              </ul>
            )}
            {recommendation.approach === 'fine-tuning' && (
              <ul className="space-y-1 text-sm text-[var(--color-text-muted)]">
                <li>&#8226; Start with LoRA/QLoRA for efficiency</li>
                <li>&#8226; Prepare high-quality training data</li>
                <li>&#8226; Use evaluation sets to prevent overfitting</li>
                <li>&#8226; Consider RLHF for alignment</li>
              </ul>
            )}
            {recommendation.approach === 'combined' && (
              <ul className="space-y-1 text-sm text-[var(--color-text-muted)]">
                <li>&#8226; Fine-tune base model for domain style first</li>
                <li>&#8226; Add RAG layer for dynamic knowledge</li>
                <li>&#8226; Use evaluation to balance both components</li>
                <li>&#8226; Monitor for knowledge conflicts</li>
              </ul>
            )}
          </div>

          <button
            onClick={startOver}
            className="mt-4 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white hover:opacity-90 transition-opacity"
          >
            Start Over
          </button>
        </div>
      )}

      {/* Previous answers */}
      {answers.length > 0 && !completed && (
        <div className="space-y-2">
          <p className="text-xs text-[var(--color-text-muted)]">Your answers:</p>
          {answers.map((ans, i) => (
            <p key={i} className="text-xs text-[var(--color-text-secondary)]">
              {steps[i].question} &rarr; <span className="text-white">{steps[i].options.find(o => o.value === ans)?.label}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
