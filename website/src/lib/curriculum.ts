// Full curriculum structure for the AI Engineering learning path

export interface Milestone {
  id: string;
  label: string;
}

export interface Lesson {
  id: string;
  title: string;
  phase: number;
  week: number;
  milestones: Milestone[];
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  description: string;
  weeks: number[];
  estimatedHours: string;
  lessons: Lesson[];
}

export const CURRICULUM: Phase[] = [
  {
    id: 'phase-0',
    number: 0,
    title: 'Foundations',
    description: 'Python, ML basics, and development environment setup',
    weeks: [0],
    estimatedHours: '10-15',
    lessons: [
      {
        id: 'week-00-foundations',
        title: 'Python & ML Foundations',
        phase: 0,
        week: 0,
        milestones: [
          { id: 'f-python-env', label: 'Python environment configured with virtual env' },
          { id: 'f-git-setup', label: 'Git and GitHub account set up' },
          { id: 'f-ml-basics', label: 'Review ML fundamentals (supervised, unsupervised, evaluation)' },
          { id: 'f-api-keys', label: 'API keys obtained for OpenAI/Anthropic' },
        ],
      },
    ],
  },
  {
    id: 'phase-1',
    number: 1,
    title: 'LLM Fundamentals & Prompt Engineering',
    description: 'Understanding LLMs, tokenization, embeddings, and mastering prompt engineering',
    weeks: [1, 2, 3],
    estimatedHours: '42-63',
    lessons: [
      {
        id: 'week-01-understanding-llms',
        title: 'Understanding LLMs, Tokenization & Embeddings',
        phase: 1,
        week: 1,
        milestones: [
          { id: 'w1-explain-llm', label: 'Can explain how an LLM generates text (next-token prediction)' },
          { id: 'w1-token-costs', label: 'Can calculate token counts and estimate costs for a given prompt' },
          { id: 'w1-dev-env', label: 'Working dev environment with API keys configured' },
          { id: 'w1-embeddings', label: 'Experimented with embeddings and cosine similarity' },
        ],
      },
      {
        id: 'week-02-prompt-engineering',
        title: 'Mastering Prompt Engineering',
        phase: 1,
        week: 2,
        milestones: [
          { id: 'w2-course-done', label: 'Completed DeepLearning.AI Prompt Engineering course' },
          { id: 'w2-json-output', label: 'Can reliably get structured JSON output from LLMs' },
          { id: 'w2-prompt-library', label: 'Personal prompt library documented with examples' },
          { id: 'w2-chatbot', label: 'Simple chatbot with system prompts implemented' },
        ],
      },
      {
        id: 'week-03-advanced-prompting',
        title: 'Advanced Prompting & First LLM Application',
        phase: 1,
        week: 3,
        milestones: [
          { id: 'w3-function-calling', label: 'Can implement function calling with 3+ tools' },
          { id: 'w3-streaming', label: 'Working streaming application deployed locally' },
          { id: 'w3-cot', label: 'Understand when to use CoT vs. direct prompting' },
          { id: 'w3-cli-assistant', label: 'CLI assistant with external API integration built' },
        ],
      },
    ],
  },
  {
    id: 'phase-2',
    number: 2,
    title: 'RAG Systems & Vector Databases',
    description: 'Building retrieval-augmented generation systems from basic to production-grade',
    weeks: [4, 5, 6, 7],
    estimatedHours: '56-84',
    lessons: [
      {
        id: 'week-04-rag-fundamentals',
        title: 'RAG Architecture & Basic Implementation',
        phase: 2,
        week: 4,
        milestones: [
          { id: 'w4-working-rag', label: 'Working RAG system that answers questions about documents' },
          { id: 'w4-chunking', label: 'Can explain tradeoffs of different chunking strategies' },
          { id: 'w4-vector-search', label: 'Understand how vector similarity search works' },
          { id: 'w4-chromadb', label: 'ChromaDB set up and ingesting documents' },
        ],
      },
      {
        id: 'week-05-advanced-rag',
        title: 'Advanced RAG Techniques',
        phase: 2,
        week: 5,
        milestones: [
          { id: 'w5-reranking', label: 'RAG quality improved with re-ranking' },
          { id: 'w5-hybrid-search', label: 'Can explain when to use hybrid vs. pure semantic search' },
          { id: 'w5-query-transform', label: 'Implemented 2+ query transformation techniques' },
          { id: 'w5-bm25', label: 'Hybrid search combining BM25 + vector search working' },
        ],
      },
      {
        id: 'week-06-production-rag',
        title: 'Production RAG & Evaluation',
        phase: 2,
        week: 6,
        milestones: [
          { id: 'w6-eval-metrics', label: 'Quantitative evaluation metrics for RAG system' },
          { id: 'w6-semantic-chunk', label: 'Improvement demonstrated with advanced chunking' },
          { id: 'w6-eval-pipeline', label: 'Evaluation pipeline is automated and reproducible' },
          { id: 'w6-ragas', label: 'RAGAS evaluation framework set up' },
        ],
      },
      {
        id: 'week-07-multi-document-rag',
        title: 'Multi-Document RAG & Vector DB Comparison',
        phase: 2,
        week: 7,
        milestones: [
          { id: 'w7-multi-source', label: 'Multi-source RAG handling 3+ document types' },
          { id: 'w7-db-comparison', label: 'Written comparison of 2+ vector databases' },
          { id: 'w7-research-assistant', label: 'Personal research assistant built and usable' },
          { id: 'w7-llamaindex', label: 'Explored LlamaIndex data connectors' },
        ],
      },
    ],
  },
  {
    id: 'phase-3',
    number: 3,
    title: 'AI Agents & Multi-Agent Systems',
    description: 'Building intelligent agents that can reason, plan, and take actions',
    weeks: [8, 9, 10, 11],
    estimatedHours: '56-84',
    lessons: [
      {
        id: 'week-08-agent-fundamentals',
        title: 'Agent Fundamentals & ReAct Pattern',
        phase: 3,
        week: 8,
        milestones: [
          { id: 'w8-react-loop', label: 'Can explain ReAct loop and when agents should be used' },
          { id: 'w8-langgraph-agent', label: 'Working LangGraph agent with 3+ tools' },
          { id: 'w8-failure-modes', label: 'Understand agent failure modes and handling' },
          { id: 'w8-from-scratch', label: 'ReAct agent built from scratch without frameworks' },
        ],
      },
      {
        id: 'week-09-tool-calling',
        title: 'Tool Calling & Complex Agent Behaviors',
        phase: 3,
        week: 9,
        milestones: [
          { id: 'w9-error-handling', label: 'Agent handles tool failures gracefully' },
          { id: 'w9-tool-schemas', label: 'Can design tool schemas that minimize LLM errors' },
          { id: 'w9-code-assistant', label: 'Working code assistant that debugs its own output' },
          { id: 'w9-sql-agent', label: 'Agent querying SQL database and creating reports' },
        ],
      },
      {
        id: 'week-10-multi-agent-systems',
        title: 'Multi-Agent Systems',
        phase: 3,
        week: 10,
        milestones: [
          { id: 'w10-multi-agent', label: 'Working multi-agent system with 3+ specialized agents' },
          { id: 'w10-comparison', label: 'Can articulate when multi-agent is better than single-agent' },
          { id: 'w10-framework-comparison', label: 'Documented comparison of CrewAI vs. LangGraph' },
          { id: 'w10-pipeline', label: 'Multi-agent content creation pipeline built' },
        ],
      },
      {
        id: 'week-11-advanced-agents',
        title: 'Advanced Agent Patterns',
        phase: 3,
        week: 11,
        milestones: [
          { id: 'w11-memory', label: 'Agent maintains context across multiple sessions' },
          { id: 'w11-human-loop', label: 'Human-in-the-loop with approval/rejection flows' },
          { id: 'w11-planning', label: 'Complex multi-step project with dynamic planning' },
          { id: 'w11-personal-assistant', label: 'Personal assistant with persistent memory built' },
        ],
      },
    ],
  },
  {
    id: 'phase-4',
    number: 4,
    title: 'Frameworks & Tools',
    description: 'Deep dive into LangChain, LlamaIndex, Haystack, and local model serving',
    weeks: [12, 13, 14],
    estimatedHours: '42-63',
    lessons: [
      {
        id: 'week-12-langchain-langgraph',
        title: 'LangChain & LangGraph Mastery',
        phase: 4,
        week: 12,
        milestones: [
          { id: 'w12-complex-workflows', label: 'Complex LangGraph workflows with parallel nodes' },
          { id: 'w12-langsmith', label: 'LangSmith traces showing full request lifecycle' },
          { id: 'w12-portfolio-app', label: 'One polished application ready for portfolio' },
          { id: 'w12-rag-agent-hybrid', label: 'Production-grade RAG + Agent hybrid built' },
        ],
      },
      {
        id: 'week-13-alternative-frameworks',
        title: 'Alternative Frameworks & Comparison',
        phase: 4,
        week: 13,
        milestones: [
          { id: 'w13-multi-framework', label: 'Same application built in 2+ frameworks' },
          { id: 'w13-comparison-doc', label: 'Written comparison with clear recommendations' },
          { id: 'w13-right-framework', label: 'Can quickly choose the right framework for a problem' },
          { id: 'w13-haystack', label: 'Haystack pipeline for document search built' },
        ],
      },
      {
        id: 'week-14-local-models',
        title: 'Local Models & Model Serving',
        phase: 4,
        week: 14,
        milestones: [
          { id: 'w14-local-inference', label: 'Can run inference locally with acceptable performance' },
          { id: 'w14-quantization', label: 'Understand GGUF, AWQ, GPTQ quantization tradeoffs' },
          { id: 'w14-model-router', label: 'Working model router selecting optimal model per request' },
          { id: 'w14-vllm', label: 'Model deployed with vLLM and benchmarked' },
        ],
      },
    ],
  },
  {
    id: 'phase-5',
    number: 5,
    title: 'Fine-Tuning',
    description: 'Model customization with LoRA, QLoRA, evaluation, and deployment',
    weeks: [15, 16, 17],
    estimatedHours: '42-63',
    lessons: [
      {
        id: 'week-15-finetuning-theory',
        title: 'Fine-Tuning Theory & Setup',
        phase: 5,
        week: 15,
        milestones: [
          { id: 'w15-when-finetune', label: 'Can articulate when to fine-tune vs. RAG vs. prompting' },
          { id: 'w15-env-setup', label: 'Training environment fully configured and tested' },
          { id: 'w15-first-run', label: 'First successful fine-tuning run completed' },
          { id: 'w15-dataset', label: 'Fine-tuning dataset of 500+ examples prepared' },
        ],
      },
      {
        id: 'week-16-hands-on-finetuning',
        title: 'Hands-on Fine-Tuning',
        phase: 5,
        week: 16,
        milestones: [
          { id: 'w16-custom-model', label: 'Custom model outperforms base on specific task' },
          { id: 'w16-wandb', label: 'W&B dashboard showing multiple training runs' },
          { id: 'w16-hyperparams', label: 'Can select appropriate hyperparameters from training curves' },
          { id: 'w16-lora-experiments', label: 'Experimented with different LoRA ranks' },
        ],
      },
      {
        id: 'week-17-model-evaluation-deployment',
        title: 'Evaluation, Quantization & Deployment',
        phase: 5,
        week: 17,
        milestones: [
          { id: 'w17-eval-report', label: 'Evaluation report comparing base vs. fine-tuned vs. quantized' },
          { id: 'w17-deployed', label: 'Model deployed and serving requests via API' },
          { id: 'w17-quantization-rec', label: 'Can recommend right quantization level for use cases' },
          { id: 'w17-gguf', label: 'Model quantized to GGUF at different levels' },
        ],
      },
    ],
  },
  {
    id: 'phase-6',
    number: 6,
    title: 'MLOps & Deployment',
    description: 'Production deployment, monitoring, scaling, and cost optimization',
    weeks: [18, 19, 20, 21],
    estimatedHours: '56-84',
    lessons: [
      {
        id: 'week-18-containerization-apis',
        title: 'Containerization & API Development',
        phase: 6,
        week: 18,
        milestones: [
          { id: 'w18-docker', label: 'Application runs reliably in Docker containers' },
          { id: 'w18-concurrent', label: 'API handles concurrent requests with streaming' },
          { id: 'w18-fullstack', label: 'Full-stack app running in docker-compose' },
          { id: 'w18-fastapi', label: 'FastAPI service with rate limiting and auth built' },
        ],
      },
      {
        id: 'week-19-cloud-deployment',
        title: 'Cloud Deployment & CI/CD',
        phase: 6,
        week: 19,
        milestones: [
          { id: 'w19-public-url', label: 'Application accessible via public URL' },
          { id: 'w19-cicd', label: 'CI/CD pipeline automatically deploys on git push' },
          { id: 'w19-zero-downtime', label: 'Can do zero-downtime deployments' },
          { id: 'w19-github-actions', label: 'GitHub Actions workflow configured' },
        ],
      },
      {
        id: 'week-20-monitoring-safety',
        title: 'Monitoring, Observability & Safety',
        phase: 6,
        week: 20,
        milestones: [
          { id: 'w20-observability', label: 'Full observability into production LLM behavior' },
          { id: 'w20-alerts', label: 'Alerts for quality degradation and cost spikes' },
          { id: 'w20-guardrails', label: 'Guardrails preventing harmful/off-topic outputs' },
          { id: 'w20-langfuse', label: 'Langfuse tracing integrated' },
        ],
      },
      {
        id: 'week-21-cost-optimization',
        title: 'Cost Optimization & Scaling',
        phase: 6,
        week: 21,
        milestones: [
          { id: 'w21-cost-reduction', label: 'Demonstrated 50%+ cost reduction with caching/routing' },
          { id: 'w21-concurrent-users', label: 'System handles 100+ concurrent users' },
          { id: 'w21-fallback', label: 'Graceful fallback when primary model unavailable' },
          { id: 'w21-semantic-cache', label: 'Semantic caching implemented' },
        ],
      },
    ],
  },
  {
    id: 'phase-7',
    number: 7,
    title: 'Evaluation & Testing',
    description: 'Capstone project integrating RAG, Agents, Fine-tuning, and Deployment',
    weeks: [22],
    estimatedHours: '14-21',
    lessons: [
      {
        id: 'week-22-evaluation-testing',
        title: 'Capstone Project',
        phase: 7,
        week: 22,
        milestones: [
          { id: 'w22-deployed', label: 'Capstone project deployed and accessible' },
          { id: 'w22-clean-code', label: 'Clean code with documentation, tests, and CI/CD' },
          { id: 'w22-demo', label: 'Demo video or writeup explaining architecture decisions' },
          { id: 'w22-integrated', label: 'Multiple techniques integrated (RAG + Agents + Fine-tuning)' },
        ],
      },
    ],
  },
  {
    id: 'phase-8',
    number: 8,
    title: 'System Design',
    description: 'AI system design patterns and architecture for interviews and real-world systems',
    weeks: [23],
    estimatedHours: '14-21',
    lessons: [
      {
        id: 'week-23-system-design',
        title: 'System Design & Architecture',
        phase: 8,
        week: 23,
        milestones: [
          { id: 'w23-designs', label: '5 system designs documented with architecture diagrams' },
          { id: 'w23-tradeoffs', label: 'Can discuss tradeoffs fluently' },
          { id: 'w23-whiteboard', label: 'Comfortable whiteboarding AI system designs' },
          { id: 'w23-patterns', label: 'Understand RAG at scale, agent orchestration, model serving patterns' },
        ],
      },
    ],
  },
  {
    id: 'phase-9',
    number: 9,
    title: 'Portfolio & Projects',
    description: 'Polish portfolio, publish content, and prepare for job applications',
    weeks: [24],
    estimatedHours: '14-21',
    lessons: [
      {
        id: 'week-24-portfolio-projects',
        title: 'Portfolio Polish & Interview Preparation',
        phase: 9,
        week: 24,
        milestones: [
          { id: 'w24-github', label: 'GitHub showcases 3+ polished AI projects' },
          { id: 'w24-blog', label: 'Published at least 1 technical blog post' },
          { id: 'w24-mock-interviews', label: 'Completed mock interviews with positive feedback' },
          { id: 'w24-applying', label: 'Actively applying to AI engineering roles' },
          { id: 'w24-resume', label: 'Resume and LinkedIn updated for AI engineering' },
        ],
      },
    ],
  },
  {
    id: 'career',
    number: 10,
    title: 'Career Center',
    description: 'Resources and strategies for landing AI engineering roles',
    weeks: [],
    estimatedHours: 'Ongoing',
    lessons: [
      {
        id: 'career-center',
        title: 'Career & Interview Resources',
        phase: 10,
        week: 0,
        milestones: [
          { id: 'career-resume', label: 'AI-focused resume crafted' },
          { id: 'career-network', label: 'Joined AI engineering communities' },
          { id: 'career-portfolio-site', label: 'Portfolio website live' },
          { id: 'career-interview-prep', label: 'Technical interview preparation complete' },
        ],
      },
    ],
  },
];

// Helper to get total number of lessons
export function getTotalLessonCount(): number {
  return CURRICULUM.reduce((sum, phase) => sum + phase.lessons.length, 0);
}

// Helper to find a lesson by ID
export function findLesson(lessonId: string): Lesson | undefined {
  for (const phase of CURRICULUM) {
    const lesson = phase.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

// Helper to find a phase by ID
export function findPhase(phaseId: string): Phase | undefined {
  return CURRICULUM.find((p) => p.id === phaseId);
}

// Helper to get all milestone IDs for a lesson
export function getLessonMilestoneIds(lessonId: string): string[] {
  const lesson = findLesson(lessonId);
  if (!lesson) return [];
  return lesson.milestones.map((m) => m.id);
}
