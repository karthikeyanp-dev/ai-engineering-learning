// ============================================================
// Resource Data for AI Engineering Learning Platform
// ============================================================

// --- GitHub Repositories ---

export interface GithubRepo {
  name: string;
  fullName: string;
  description: string;
  stars: string;
  category: string;
  url: string;
  isEssential: boolean;
}

export const githubCategories = [
  'All',
  'Learning',
  'Frameworks',
  'RAG & Vector DBs',
  'Tools',
  'Prompt Engineering',
  'Fine-Tuning',
  'Awesome Lists',
] as const;

export type GithubCategory = (typeof githubCategories)[number];

export const githubRepos: GithubRepo[] = [
  // Essential repos
  { name: 'langchain', fullName: 'langchain-ai/langchain', description: 'Foundation for LLM-powered apps', stars: '100k+', category: 'Frameworks', url: 'https://github.com/langchain-ai/langchain', isEssential: true },
  { name: 'transformers', fullName: 'huggingface/transformers', description: 'Backbone of modern NLP/ML', stars: '140k+', category: 'Frameworks', url: 'https://github.com/huggingface/transformers', isEssential: true },
  { name: 'ollama', fullName: 'ollama/ollama', description: 'Run LLMs locally', stars: '110k+', category: 'Tools', url: 'https://github.com/ollama/ollama', isEssential: true },
  { name: 'llm-course', fullName: 'mlabonne/llm-course', description: 'Best structured learning path', stars: '40k+', category: 'Learning', url: 'https://github.com/mlabonne/llm-course', isEssential: true },
  { name: 'vllm', fullName: 'vllm-project/vllm', description: 'Production inference standard', stars: '40k+', category: 'Tools', url: 'https://github.com/vllm-project/vllm', isEssential: true },
  { name: 'llama_index', fullName: 'run-llama/llama_index', description: 'RAG pipeline essential', stars: '37k+', category: 'RAG & Vector DBs', url: 'https://github.com/run-llama/llama_index', isEssential: true },
  { name: 'langgraph', fullName: 'langchain-ai/langgraph', description: 'Agent orchestration', stars: '10k+', category: 'Frameworks', url: 'https://github.com/langchain-ai/langgraph', isEssential: true },
  { name: 'nn-zero-to-hero', fullName: 'karpathy/nn-zero-to-hero', description: 'Deep fundamentals', stars: '12k+', category: 'Learning', url: 'https://github.com/karpathy/nn-zero-to-hero', isEssential: true },
  { name: 'LLMs-from-scratch', fullName: 'rasbt/LLMs-from-scratch', description: 'Build intuition from zero', stars: '35k+', category: 'Learning', url: 'https://github.com/rasbt/LLMs-from-scratch', isEssential: true },
  { name: 'Prompt-Engineering-Guide', fullName: 'dair-ai/Prompt-Engineering-Guide', description: 'Master prompting', stars: '52k+', category: 'Prompt Engineering', url: 'https://github.com/dair-ai/Prompt-Engineering-Guide', isEssential: true },
  // Other repos
  { name: 'crewAI', fullName: 'crewAIInc/crewAI', description: 'Multi-agent orchestration', stars: '25k+', category: 'Frameworks', url: 'https://github.com/crewAIInc/crewAI', isEssential: false },
  { name: 'autogen', fullName: 'microsoft/autogen', description: 'Multi-agent conversations', stars: '38k+', category: 'Frameworks', url: 'https://github.com/microsoft/autogen', isEssential: false },
  { name: 'peft', fullName: 'huggingface/peft', description: 'Parameter-efficient fine-tuning', stars: '17k+', category: 'Fine-Tuning', url: 'https://github.com/huggingface/peft', isEssential: false },
  { name: 'RAG_Techniques', fullName: 'NirDiamant/RAG_Techniques', description: 'Advanced RAG implementations', stars: '12k+', category: 'RAG & Vector DBs', url: 'https://github.com/NirDiamant/RAG_Techniques', isEssential: false },
  { name: 'chroma', fullName: 'chroma-core/chroma', description: 'Vector DB', stars: '16k+', category: 'RAG & Vector DBs', url: 'https://github.com/chroma-core/chroma', isEssential: false },
  { name: 'qdrant', fullName: 'qdrant/qdrant', description: 'High-performance vector search', stars: '21k+', category: 'RAG & Vector DBs', url: 'https://github.com/qdrant/qdrant', isEssential: false },
  { name: 'weaviate', fullName: 'weaviate/weaviate', description: 'Feature-rich vector DB', stars: '12k+', category: 'RAG & Vector DBs', url: 'https://github.com/weaviate/weaviate', isEssential: false },
  { name: 'ragas', fullName: 'explodinggradients/ragas', description: 'RAG evaluation', stars: '7k+', category: 'RAG & Vector DBs', url: 'https://github.com/explodinggradients/ragas', isEssential: false },
  { name: 'graphrag', fullName: 'microsoft/graphrag', description: 'Graph RAG', stars: '20k+', category: 'RAG & Vector DBs', url: 'https://github.com/microsoft/graphrag', isEssential: false },
  { name: 'llama.cpp', fullName: 'ggerganov/llama.cpp', description: 'Efficient LLM inference', stars: '75k+', category: 'Tools', url: 'https://github.com/ggerganov/llama.cpp', isEssential: false },
  { name: 'litellm', fullName: 'BerriAI/litellm', description: 'Unified API', stars: '15k+', category: 'Tools', url: 'https://github.com/BerriAI/litellm', isEssential: false },
  { name: 'langfuse', fullName: 'langfuse/langfuse', description: 'LLM observability', stars: '7k+', category: 'Tools', url: 'https://github.com/langfuse/langfuse', isEssential: false },
  { name: 'openai-cookbook', fullName: 'openai/openai-cookbook', description: 'Official OpenAI examples', stars: '60k+', category: 'Learning', url: 'https://github.com/openai/openai-cookbook', isEssential: false },
  { name: 'dspy', fullName: 'stanfordnlp/dspy', description: 'Programmatic LLM optimization', stars: '20k+', category: 'Frameworks', url: 'https://github.com/stanfordnlp/dspy', isEssential: false },
  { name: 'unsloth', fullName: 'unslothai/unsloth', description: 'Fast fine-tuning', stars: '20k+', category: 'Fine-Tuning', url: 'https://github.com/unslothai/unsloth', isEssential: false },
  { name: 'axolotl', fullName: 'axolotl-ai-cloud/axolotl', description: 'Streamlined fine-tuning', stars: '8k+', category: 'Fine-Tuning', url: 'https://github.com/axolotl-ai-cloud/axolotl', isEssential: false },
  { name: 'trl', fullName: 'huggingface/trl', description: 'RLHF training', stars: '10k+', category: 'Fine-Tuning', url: 'https://github.com/huggingface/trl', isEssential: false },
  { name: 'llm-zoomcamp', fullName: 'DataTalksClub/llm-zoomcamp', description: 'Free LLM course', stars: '5k+', category: 'Learning', url: 'https://github.com/DataTalksClub/llm-zoomcamp', isEssential: false },
  { name: 'mlops-zoomcamp', fullName: 'DataTalksClub/mlops-zoomcamp', description: 'Free MLOps course', stars: '5k+', category: 'Learning', url: 'https://github.com/DataTalksClub/mlops-zoomcamp', isEssential: false },
  { name: 'd2l-en', fullName: 'd2l-ai/d2l-en', description: 'Dive into Deep Learning', stars: '23k+', category: 'Learning', url: 'https://github.com/d2l-ai/d2l-en', isEssential: false },
  { name: 'Awesome-LLM', fullName: 'Hannibal046/Awesome-LLM', description: 'Curated list of LLM resources', stars: '18k+', category: 'Awesome Lists', url: 'https://github.com/Hannibal046/Awesome-LLM', isEssential: false },
  { name: 'awesome-ai-agents', fullName: 'e2b-dev/awesome-ai-agents', description: 'List of AI autonomous agents', stars: '11k+', category: 'Awesome Lists', url: 'https://github.com/e2b-dev/awesome-ai-agents', isEssential: false },
  { name: 'BentoML', fullName: 'bentoml/BentoML', description: 'Model serving', stars: '7k+', category: 'Tools', url: 'https://github.com/bentoml/BentoML', isEssential: false },
];

// --- YouTube Channels ---

export interface YoutubeChannel {
  name: string;
  focus: string;
  category: string;
  keyContent: string[];
  url: string;
}

export const youtubeCategories = ['All', 'Foundational', 'AI Engineering', 'General AI/ML'] as const;

export const youtubeChannels: YoutubeChannel[] = [
  { name: 'Andrej Karpathy', focus: 'Neural Networks, GPT internals', category: 'Foundational', keyContent: ['Neural Networks from scratch', 'GPT explanations', 'Tokenization deep dives'], url: 'https://www.youtube.com/@AndrejKarpathy' },
  { name: '3Blue1Brown', focus: 'Visual math & neural networks', category: 'Foundational', keyContent: ['Visual math explanations', 'Neural network intuition', 'Linear algebra series'], url: 'https://www.youtube.com/@3blue1brown' },
  { name: 'DeepLearning.AI', focus: 'Short courses & Andrew Ng', category: 'Foundational', keyContent: ['Short courses', 'Andrew Ng lectures', 'Industry interviews'], url: 'https://www.youtube.com/@Deeplearningai' },
  { name: 'StatQuest', focus: 'Statistics & ML fundamentals', category: 'Foundational', keyContent: ['Statistics fundamentals', 'ML algorithms explained', 'Clear visual teaching'], url: 'https://www.youtube.com/@statquest' },
  { name: 'AI Jason', focus: 'Practical AI agent tutorials', category: 'AI Engineering', keyContent: ['AI agent builds', 'Tool integration', 'Practical walkthroughs'], url: 'https://www.youtube.com/@AIJasonZ' },
  { name: 'Cole Medin', focus: 'AI agent development', category: 'AI Engineering', keyContent: ['Agent development', 'LangChain tutorials', 'Production patterns'], url: 'https://www.youtube.com/@ColeMedin' },
  { name: 'Matt Williams', focus: 'Local LLM setups, Ollama', category: 'AI Engineering', keyContent: ['Ollama guides', 'Local LLM setup', 'Self-hosted AI'], url: 'https://www.youtube.com/@technovangelist' },
  { name: 'Sam Witteveen', focus: 'LangChain, RAG, agents', category: 'AI Engineering', keyContent: ['LangChain tutorials', 'RAG implementations', 'Agent patterns'], url: 'https://www.youtube.com/@samwitteveenai' },
  { name: 'James Briggs', focus: 'Vector databases, RAG', category: 'AI Engineering', keyContent: ['Vector DB comparisons', 'RAG tutorials', 'Pinecone deep dives'], url: 'https://www.youtube.com/@jamesbriggs' },
  { name: 'Yannic Kilcher', focus: 'Paper explanations', category: 'General AI/ML', keyContent: ['Paper walkthroughs', 'Research analysis', 'Architecture breakdowns'], url: 'https://www.youtube.com/@YannicKilcher' },
  { name: 'Two Minute Papers', focus: 'Quick research updates', category: 'General AI/ML', keyContent: ['Research summaries', 'New paper highlights', 'Visual demos'], url: 'https://www.youtube.com/@TwoMinutePapers' },
  { name: 'Sentdex', focus: 'Python ML tutorials', category: 'General AI/ML', keyContent: ['Python ML tutorials', 'Deep learning series', 'Practical projects'], url: 'https://www.youtube.com/@sentdex' },
];

export const keyPlaylists = [
  { title: 'Neural Networks: Zero to Hero', channel: 'Andrej Karpathy', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' },
  { title: 'Essence of Linear Algebra', channel: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
  { title: 'LangChain Tutorials', channel: 'Sam Witteveen', url: 'https://www.youtube.com/playlist?list=PL8motc6AQftk1Bs42EW45kwYbyJ4jOdiZ' },
  { title: 'RAG From Scratch', channel: 'LangChain', url: 'https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x' },
];

export const podcastRecommendations = [
  { title: 'Latent Space', description: 'AI Engineering podcast covering LLMs, agents, and production AI', url: 'https://www.latent.space/podcast' },
  { title: 'Practical AI', description: 'Making AI practical and accessible', url: 'https://changelog.com/practicalai' },
  { title: 'The TWIML AI Podcast', description: 'This Week in ML - interviews with researchers', url: 'https://twimlai.com/' },
];

// --- Courses ---

export interface Course {
  title: string;
  provider: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  url: string;
  isFree: boolean;
  topic: string;
}

export const courseProviders = ['All', 'DeepLearning.AI', 'Hugging Face', 'DataTalks.Club', 'Stanford', 'Fast.ai', 'Other'] as const;
export const courseDifficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;
export const courseTopics = ['All', 'LLM Fundamentals', 'RAG', 'Agents', 'Fine-Tuning', 'MLOps', 'NLP', 'General ML'] as const;

export const courses: Course[] = [
  { title: 'ChatGPT Prompt Engineering for Developers', provider: 'DeepLearning.AI', difficulty: 'Beginner', duration: '1 hour', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', isFree: true, topic: 'LLM Fundamentals' },
  { title: 'LangChain for LLM Application Development', provider: 'DeepLearning.AI', difficulty: 'Intermediate', duration: '1 hour', url: 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/', isFree: true, topic: 'LLM Fundamentals' },
  { title: 'Building Systems with ChatGPT API', provider: 'DeepLearning.AI', difficulty: 'Intermediate', duration: '1 hour', url: 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', isFree: true, topic: 'LLM Fundamentals' },
  { title: 'LangChain: Chat with Your Data', provider: 'DeepLearning.AI', difficulty: 'Intermediate', duration: '1 hour', url: 'https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/', isFree: true, topic: 'RAG' },
  { title: 'Building RAG Agents with LLMs', provider: 'DeepLearning.AI', difficulty: 'Intermediate', duration: '2 hours', url: 'https://www.deeplearning.ai/short-courses/', isFree: true, topic: 'RAG' },
  { title: 'AI Agents in LangGraph', provider: 'DeepLearning.AI', difficulty: 'Intermediate', duration: '1.5 hours', url: 'https://www.deeplearning.ai/short-courses/', isFree: true, topic: 'Agents' },
  { title: 'Multi AI Agent Systems with crewAI', provider: 'DeepLearning.AI', difficulty: 'Intermediate', duration: '1.5 hours', url: 'https://www.deeplearning.ai/short-courses/', isFree: true, topic: 'Agents' },
  { title: 'Fine-Tuning LLMs', provider: 'DeepLearning.AI', difficulty: 'Advanced', duration: '1 hour', url: 'https://www.deeplearning.ai/short-courses/', isFree: true, topic: 'Fine-Tuning' },
  { title: 'NLP Course', provider: 'Hugging Face', difficulty: 'Intermediate', duration: '20 hours', url: 'https://huggingface.co/learn/nlp-course', isFree: true, topic: 'NLP' },
  { title: 'Deep RL Course', provider: 'Hugging Face', difficulty: 'Advanced', duration: '30 hours', url: 'https://huggingface.co/learn/deep-rl-course', isFree: true, topic: 'General ML' },
  { title: 'Diffusion Models Course', provider: 'Hugging Face', difficulty: 'Advanced', duration: '10 hours', url: 'https://huggingface.co/learn/diffusion-course', isFree: true, topic: 'General ML' },
  { title: 'LLM Zoomcamp', provider: 'DataTalks.Club', difficulty: 'Intermediate', duration: '10 weeks', url: 'https://github.com/DataTalksClub/llm-zoomcamp', isFree: true, topic: 'LLM Fundamentals' },
  { title: 'MLOps Zoomcamp', provider: 'DataTalks.Club', difficulty: 'Intermediate', duration: '9 weeks', url: 'https://github.com/DataTalksClub/mlops-zoomcamp', isFree: true, topic: 'MLOps' },
  { title: 'CS224N: NLP with Deep Learning', provider: 'Stanford', difficulty: 'Advanced', duration: '10 weeks', url: 'https://web.stanford.edu/class/cs224n/', isFree: true, topic: 'NLP' },
  { title: 'CS229: Machine Learning', provider: 'Stanford', difficulty: 'Intermediate', duration: '11 weeks', url: 'https://cs229.stanford.edu/', isFree: true, topic: 'General ML' },
  { title: 'Practical Deep Learning', provider: 'Fast.ai', difficulty: 'Beginner', duration: '7 weeks', url: 'https://course.fast.ai/', isFree: true, topic: 'General ML' },
  { title: 'Full Stack LLM Bootcamp', provider: 'Other', difficulty: 'Intermediate', duration: '3 days', url: 'https://fullstackdeeplearning.com/llm-bootcamp/', isFree: true, topic: 'LLM Fundamentals' },
  { title: 'Made With ML', provider: 'Other', difficulty: 'Intermediate', duration: 'Self-paced', url: 'https://madewithml.com/', isFree: true, topic: 'MLOps' },
];

// --- Vector DB Comparison Data ---

export interface VectorDBInfo {
  name: string;
  bestFor: string;
  hosting: string;
  cost: string;
  easeOfUse: string;
  performance: string;
  scalability: string;
}

export const vectorDBs: VectorDBInfo[] = [
  { name: 'ChromaDB', bestFor: 'Prototyping & local dev', hosting: 'Self-hosted / Embedded', cost: 'Free (open source)', easeOfUse: '⭐⭐⭐⭐⭐', performance: '⭐⭐⭐', scalability: '⭐⭐' },
  { name: 'Pinecone', bestFor: 'Production managed service', hosting: 'Fully managed (cloud)', cost: 'Free tier + paid plans', easeOfUse: '⭐⭐⭐⭐⭐', performance: '⭐⭐⭐⭐⭐', scalability: '⭐⭐⭐⭐⭐' },
  { name: 'Weaviate', bestFor: 'Feature-rich hybrid search', hosting: 'Self-hosted / Cloud', cost: 'Free (OSS) + managed', easeOfUse: '⭐⭐⭐⭐', performance: '⭐⭐⭐⭐', scalability: '⭐⭐⭐⭐' },
  { name: 'Qdrant', bestFor: 'High-performance Rust-based', hosting: 'Self-hosted / Cloud', cost: 'Free (OSS) + managed', easeOfUse: '⭐⭐⭐⭐', performance: '⭐⭐⭐⭐⭐', scalability: '⭐⭐⭐⭐⭐' },
  { name: 'Milvus', bestFor: 'Enterprise large-scale', hosting: 'Self-hosted / Zilliz Cloud', cost: 'Free (OSS) + managed', easeOfUse: '⭐⭐⭐', performance: '⭐⭐⭐⭐⭐', scalability: '⭐⭐⭐⭐⭐' },
  { name: 'pgvector', bestFor: 'PostgreSQL integration', hosting: 'Self-hosted (PostgreSQL)', cost: 'Free (extension)', easeOfUse: '⭐⭐⭐⭐', performance: '⭐⭐⭐', scalability: '⭐⭐⭐' },
  { name: 'FAISS', bestFor: 'Research & benchmarking', hosting: 'Embedded (library)', cost: 'Free (Meta OSS)', easeOfUse: '⭐⭐⭐', performance: '⭐⭐⭐⭐⭐', scalability: '⭐⭐' },
];

// --- Framework Comparison Data ---

export interface FrameworkInfo {
  name: string;
  easeOfUse: string;
  documentation: string;
  community: string;
  bestFor: string;
  limitations: string;
}

export const appFrameworks: FrameworkInfo[] = [
  { name: 'LangChain', easeOfUse: '⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐⭐⭐ (100k+ stars)', bestFor: 'Complex chains, wide integrations, rapid prototyping', limitations: 'Abstraction overhead, frequent breaking changes, steep learning curve for advanced use' },
  { name: 'LlamaIndex', easeOfUse: '⭐⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐⭐ (37k+ stars)', bestFor: 'Data-intensive RAG, document processing, knowledge bases', limitations: 'Less flexible for non-RAG use cases, smaller ecosystem than LangChain' },
  { name: 'Haystack', easeOfUse: '⭐⭐⭐⭐', documentation: '⭐⭐⭐⭐⭐', community: '⭐⭐⭐ (18k+ stars)', bestFor: 'Production NLP pipelines, search-first applications', limitations: 'Smaller community, fewer integrations, pipeline-oriented only' },
  { name: 'Semantic Kernel', easeOfUse: '⭐⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐ (22k+ stars)', bestFor: 'Enterprise .NET/Java apps, Microsoft ecosystem', limitations: 'Less Python-native, smaller OSS community, enterprise-focused' },
];

export const agentFrameworks: FrameworkInfo[] = [
  { name: 'LangGraph', easeOfUse: '⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐⭐ (10k+ stars)', bestFor: 'Complex stateful agents, graph-based workflows, cycles', limitations: 'Requires LangChain knowledge, steeper learning curve' },
  { name: 'CrewAI', easeOfUse: '⭐⭐⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐⭐ (25k+ stars)', bestFor: 'Multi-agent role-based teams, quick setup', limitations: 'Less granular control, opinionated architecture' },
  { name: 'AutoGen', easeOfUse: '⭐⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐⭐⭐ (38k+ stars)', bestFor: 'Multi-agent conversations, code generation, research', limitations: 'Can be token-heavy, complex for simple tasks' },
  { name: 'Phidata', easeOfUse: '⭐⭐⭐⭐⭐', documentation: '⭐⭐⭐', community: '⭐⭐⭐ (15k+ stars)', bestFor: 'Quick agent prototyping, function calling, simple agents', limitations: 'Newer, less battle-tested, fewer advanced patterns' },
  { name: 'Smolagents', easeOfUse: '⭐⭐⭐⭐⭐', documentation: '⭐⭐⭐⭐', community: '⭐⭐⭐ (Hugging Face)', bestFor: 'Lightweight agents, code-based actions, HF ecosystem', limitations: 'Newer framework, limited community examples' },
];
