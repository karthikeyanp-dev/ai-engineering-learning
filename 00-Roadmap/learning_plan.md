# AI Engineering Learning Plan - Week by Week

A structured 24-week (6-month) learning plan to become a proficient AI Engineer, covering LLMs, RAG, Agents, Fine-Tuning, and Production Deployment.

---

## Daily Time Commitment Guide

| Schedule | Hours/Day | Weekly Total | Notes |
|----------|-----------|--------------|-------|
| Part-time (recommended) | 2-3 hours | 14-21 hours | Sustainable for working professionals |
| Intensive | 4-5 hours | 28-35 hours | Faster progress, risk of burnout |
| Weekend-heavy | 1 hr weekdays + 4-5 hr weekends | 13-15 hours | Minimum viable pace |

**Suggested Daily Breakdown (2-3 hours):**
- 30 min: Watch/read educational content
- 60 min: Hands-on coding and experimentation
- 30-60 min: Review, notes, and community engagement

---

## Phase 1: LLM Fundamentals & Prompt Engineering (Weeks 1-3)

### Week 1: Understanding LLMs, Tokenization & Embeddings

**Learning Objectives:**
- Understand transformer architecture at a conceptual level (attention, self-attention, encoder-decoder)
- Learn how tokenization works (BPE, WordPiece) and why it matters for cost and context windows
- Understand embeddings and their role in semantic similarity

**Key Resources:**
- [Andrej Karpathy - "State of GPT" talk](https://www.youtube.com/watch?v=bZQun8Y4L2A)
- [Andrej Karpathy - "Let's build GPT from scratch"](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [Hugging Face NLP Course - Chapter 1-3](https://huggingface.co/learn/nlp-course)
- [3Blue1Brown - "But what is a GPT?"](https://www.youtube.com/watch?v=wjZofJX0v4M)

**Hands-on Project:**
- Set up Python environment with `openai`, `tiktoken`, `transformers` libraries
- Write a script to count tokens and estimate API costs for different models
- Experiment with OpenAI's embedding API: embed sentences and compute cosine similarity

**Milestone/Checkpoint:**
- [ ] Can explain how an LLM generates text (next-token prediction)
- [ ] Can calculate token counts and estimate costs for a given prompt
- [ ] Have a working dev environment with API keys configured

---

### Week 2: Mastering Prompt Engineering

**Learning Objectives:**
- Learn systematic prompt engineering techniques (zero-shot, few-shot, system prompts)
- Understand output formatting, temperature, and other generation parameters
- Build reliable prompts for classification, extraction, and generation tasks

**Key Resources:**
- [DeepLearning.AI - ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Brex's Prompt Engineering Guide (GitHub)](https://github.com/brexhq/prompt-engineering)

**Hands-on Project:**
- Build a structured data extractor: given unstructured text (job postings, product reviews), extract structured JSON
- Create a prompt library with 10+ tested prompts for different use cases
- Implement a simple chatbot with system prompts and conversation history management

**Milestone/Checkpoint:**
- [ ] Completed DeepLearning.AI Prompt Engineering course with all exercises
- [ ] Can reliably get structured JSON output from LLMs
- [ ] Have a personal prompt library documented with examples

---

### Week 3: Advanced Prompting & First LLM Application

**Learning Objectives:**
- Master Chain-of-Thought (CoT), Tree-of-Thought, and ReAct prompting patterns
- Understand function calling / tool use with OpenAI and Anthropic APIs
- Build a complete application with streaming responses

**Key Resources:**
- [OpenAI Function Calling Documentation](https://platform.openai.com/docs/guides/function-calling)
- [Anthropic Tool Use Documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
- [DeepLearning.AI - Building Systems with ChatGPT](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/)
- Paper: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (Wei et al.)

**Hands-on Project:**
- Build a CLI assistant that uses function calling to interact with external APIs (weather, calculator, web search)
- Implement streaming responses with a simple web UI (Streamlit or Gradio)
- Create a multi-step reasoning pipeline that uses CoT to solve complex problems

**Milestone/Checkpoint:**
- [ ] Can implement function calling with at least 3 different tools
- [ ] Have a working streaming application deployed locally
- [ ] Understand when to use CoT vs. direct prompting

---

## Phase 2: RAG Systems & Vector Databases (Weeks 4-7)

### Week 4: RAG Architecture & Basic Implementation

**Learning Objectives:**
- Understand the full RAG pipeline: ingest, chunk, embed, store, retrieve, generate
- Learn about vector databases and similarity search algorithms (HNSW, IVF)
- Build a basic RAG system from scratch

**Key Resources:**
- [DeepLearning.AI - LangChain: Chat with Your Data](https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/)
- [ChromaDB Getting Started Guide](https://docs.trychroma.com/getting-started)
- [LangChain RAG Tutorial](https://python.langchain.com/docs/tutorials/rag/)
- Blog: "Building RAG from Scratch" by LlamaIndex

**Hands-on Project:**
- Set up ChromaDB locally and ingest a collection of PDF documents
- Build a basic RAG chatbot over your personal documents using LangChain
- Experiment with different chunk sizes (256, 512, 1024 tokens) and observe quality differences

**Milestone/Checkpoint:**
- [ ] Have a working RAG system that answers questions about your documents
- [ ] Can explain the tradeoffs of different chunking strategies
- [ ] Understand how vector similarity search works conceptually

---

### Week 5: Advanced RAG Techniques

**Learning Objectives:**
- Learn re-ranking strategies (cross-encoder, Cohere rerank, ColBERT)
- Understand hybrid search (combining keyword/BM25 with semantic search)
- Implement query transformation techniques (HyDE, multi-query, step-back)

**Key Resources:**
- [DeepLearning.AI - Advanced Retrieval for AI with Chroma](https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/)
- [DeepLearning.AI - Building and Evaluating Advanced RAG](https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/)
- [Cohere Rerank Documentation](https://docs.cohere.com/docs/reranking)
- Blog: "12 RAG Pain Points and Proposed Solutions" by Wenqi Glantz

**Hands-on Project:**
- Implement hybrid search combining BM25 + vector search
- Add a re-ranking step using a cross-encoder model
- Build a query expansion pipeline that generates multiple search queries from one user question

**Milestone/Checkpoint:**
- [ ] RAG system quality measurably improved with re-ranking (compare retrieval precision)
- [ ] Can explain when to use hybrid search vs. pure semantic search
- [ ] Implemented at least 2 query transformation techniques

---

### Week 6: Production RAG & Evaluation

**Learning Objectives:**
- Learn RAG evaluation frameworks and metrics (faithfulness, relevancy, context precision)
- Implement robust chunking strategies (semantic chunking, parent-child, sliding window)
- Understand production patterns (caching, metadata filtering, access control)

**Key Resources:**
- [RAGAS Documentation](https://docs.ragas.io/)
- [DeepLearning.AI - Evaluating and Debugging Generative AI](https://www.deeplearning.ai/short-courses/)
- [Pinecone Learning Center - Chunking Strategies](https://www.pinecone.io/learn/chunking-strategies/)
- Blog: "A Guide to RAG Evaluation" by Weights & Biases

**Hands-on Project:**
- Set up RAGAS evaluation pipeline with a test dataset of 50+ question-answer pairs
- Implement semantic chunking and compare against fixed-size chunking using evaluation metrics
- Add metadata filtering (date range, document type, source) to your RAG system

**Milestone/Checkpoint:**
- [ ] Have quantitative evaluation metrics for your RAG system
- [ ] Can demonstrate improvement from baseline using advanced chunking
- [ ] Evaluation pipeline is automated and reproducible

---

### Week 7: Multi-Document RAG & Vector DB Comparison

**Learning Objectives:**
- Build multi-source RAG that handles different document types (PDF, web, code, databases)
- Compare vector database options: ChromaDB, Pinecone, Weaviate, Qdrant, pgvector
- Explore LlamaIndex's data connectors and indexing strategies

**Key Resources:**
- [LlamaIndex Documentation](https://docs.llamaindex.ai/)
- [Qdrant Tutorials](https://qdrant.tech/documentation/tutorials/)
- [Pinecone Documentation](https://docs.pinecone.io/)
- Blog: "Choosing a Vector Database" by Zilliz

**Hands-on Project:**
- Build a multi-document RAG system that ingests: PDFs, web pages, Notion exports, and code repositories
- Implement the same RAG pipeline with 2 different vector databases and compare performance/features
- Create a "research assistant" that can search across all your learning resources

**Milestone/Checkpoint:**
- [ ] Multi-source RAG system handling 3+ document types
- [ ] Written comparison of at least 2 vector databases (features, performance, cost)
- [ ] A useful personal research assistant you'll continue using

---

## Phase 3: AI Agents & Multi-Agent Systems (Weeks 8-11)

### Week 8: Agent Fundamentals & ReAct Pattern

**Learning Objectives:**
- Understand agent architectures: ReAct, Plan-and-Execute, Reflexion
- Learn LangGraph fundamentals: nodes, edges, state, conditional routing
- Build a basic agent that can reason, plan, and take actions

**Key Resources:**
- [DeepLearning.AI - AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- Paper: "ReAct: Synergizing Reasoning and Acting in Language Models" (Yao et al.)
- [LangChain Agents Tutorial](https://python.langchain.com/docs/tutorials/agents/)

**Hands-on Project:**
- Build a ReAct agent from scratch (without frameworks) to understand the loop
- Rebuild the same agent using LangGraph with proper state management
- Add tools: web search, calculator, file reader, code executor

**Milestone/Checkpoint:**
- [ ] Can explain the ReAct loop and when agents should vs. shouldn't be used
- [ ] Working LangGraph agent with 3+ tools
- [ ] Understand agent failure modes and how to handle them

---

### Week 9: Tool Calling & Complex Agent Behaviors

**Learning Objectives:**
- Master structured tool definitions and schema design
- Implement error handling, retries, and fallback strategies for agents
- Build agents that can interact with real APIs and databases

**Key Resources:**
- [OpenAI Assistants API Documentation](https://platform.openai.com/docs/assistants/overview)
- [LangGraph - How to guides](https://langchain-ai.github.io/langgraph/how-tos/)
- [Anthropic - Agentic Patterns](https://docs.anthropic.com/en/docs/build-with-claude/agentic)
- Blog: "Building Effective Agents" by Anthropic

**Hands-on Project:**
- Build an agent that can: query a SQL database, create visualizations, and write reports
- Implement robust error handling: tool failures, rate limits, invalid outputs
- Create a "code assistant" agent that can write, run, and debug Python code

**Milestone/Checkpoint:**
- [ ] Agent handles tool failures gracefully without crashing
- [ ] Can design tool schemas that minimize LLM errors
- [ ] Working code assistant that iteratively debugs its own output

---

### Week 10: Multi-Agent Systems

**Learning Objectives:**
- Understand multi-agent patterns: supervisor, hierarchical, collaborative, debate
- Learn CrewAI and/or AutoGen frameworks
- Design systems where specialized agents collaborate on complex tasks

**Key Resources:**
- [CrewAI Documentation](https://docs.crewai.com/)
- [AutoGen Documentation](https://microsoft.github.io/autogen/)
- [LangGraph Multi-Agent Tutorial](https://langchain-ai.github.io/langgraph/tutorials/multi_agent/)
- Paper: "Communicative Agents for Software Development" (ChatDev)

**Hands-on Project:**
- Build a multi-agent content creation pipeline: Researcher -> Writer -> Editor -> Fact-Checker
- Implement a software development team: PM -> Developer -> Tester (using CrewAI)
- Compare single-agent vs. multi-agent approaches on the same task

**Milestone/Checkpoint:**
- [ ] Working multi-agent system with 3+ specialized agents
- [ ] Can articulate when multi-agent is better than single-agent
- [ ] Documented comparison of CrewAI vs. LangGraph for multi-agent

---

### Week 11: Advanced Agent Patterns

**Learning Objectives:**
- Implement long-term memory for agents (conversation memory, episodic memory, semantic memory)
- Build planning capabilities (task decomposition, dynamic replanning)
- Add human-in-the-loop patterns (approval gates, clarification requests)

**Key Resources:**
- [LangGraph - Human in the Loop](https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/)
- [Mem0 (formerly MemGPT) Documentation](https://docs.mem0.ai/)
- Blog: "Building Long-Term Memory for AI Agents" by LangChain
- Paper: "Generative Agents: Interactive Simulacra of Human Behavior" (Park et al.)

**Hands-on Project:**
- Build a personal assistant agent with persistent memory across sessions
- Implement a complex workflow: research agent that requires human approval before taking actions
- Create an agent that can decompose complex goals into subtasks and execute them iteratively

**Milestone/Checkpoint:**
- [ ] Agent maintains context and memory across multiple sessions
- [ ] Human-in-the-loop working with approval/rejection flows
- [ ] Complex multi-step project completed by agent with dynamic planning

---

## Phase 4: Frameworks & Tools Deep Dive (Weeks 12-14)

### Week 12: LangChain & LangGraph Mastery

**Learning Objectives:**
- Deep dive into LangChain Expression Language (LCEL) and advanced chains
- Master LangGraph for complex stateful workflows (parallel execution, subgraphs)
- Build production-quality applications with proper error handling and observability

**Key Resources:**
- [LangChain Python Documentation (full)](https://python.langchain.com/docs/)
- [LangGraph Conceptual Guides](https://langchain-ai.github.io/langgraph/concepts/)
- [LangSmith Documentation](https://docs.smith.langchain.com/)
- [LangChain Templates (GitHub)](https://github.com/langchain-ai/langchain/tree/master/templates)

**Hands-on Project:**
- Build a production-grade RAG + Agent hybrid application using LangGraph
- Set up LangSmith for tracing, evaluation, and debugging
- Implement a complex workflow: document processing pipeline with branching logic and error recovery

**Milestone/Checkpoint:**
- [ ] Can build complex LangGraph workflows with parallel nodes and conditional edges
- [ ] LangSmith traces showing full request lifecycle
- [ ] One polished application ready for portfolio

---

### Week 13: Alternative Frameworks & Comparison

**Learning Objectives:**
- Learn LlamaIndex for data-centric AI applications (knowledge graphs, structured data)
- Explore Haystack for building search-focused AI pipelines
- Understand when to use which framework based on use case

**Key Resources:**
- [LlamaIndex Documentation](https://docs.llamaindex.ai/)
- [Haystack by deepset Documentation](https://docs.haystack.deepset.ai/)
- [Semantic Kernel by Microsoft](https://learn.microsoft.com/en-us/semantic-kernel/)
- Blog: "LangChain vs LlamaIndex vs Haystack" comparison articles

**Hands-on Project:**
- Rebuild your RAG system in LlamaIndex and compare code complexity and performance
- Build a Haystack pipeline for a document search application
- Create a comparison matrix: features, performance, ease of use, community

**Milestone/Checkpoint:**
- [ ] Same application built in 2+ frameworks
- [ ] Written comparison document with clear recommendations per use case
- [ ] Can quickly choose the right framework for a given problem

---

### Week 14: Local Models & Model Serving

**Learning Objectives:**
- Set up and run LLMs locally with Ollama (Llama, Mistral, Phi models)
- Understand model serving with vLLM for production inference
- Learn about quantization levels and their quality/speed tradeoffs

**Key Resources:**
- [Ollama Documentation](https://ollama.com/)
- [vLLM Documentation](https://docs.vllm.ai/)
- [HuggingFace Text Generation Inference](https://huggingface.co/docs/text-generation-inference/)
- [TheBloke's Quantized Models on HuggingFace](https://huggingface.co/TheBloke)

**Hands-on Project:**
- Set up Ollama and run 3+ different models locally, benchmark speed and quality
- Deploy a model with vLLM and test throughput under load
- Build an application that intelligently routes between local and cloud models based on task complexity

**Milestone/Checkpoint:**
- [ ] Can run inference locally with acceptable performance
- [ ] Understand GGUF, AWQ, GPTQ quantization and their tradeoffs
- [ ] Working model router that selects optimal model per request

---

## Phase 5: Fine-Tuning & Model Customization (Weeks 15-17)

### Week 15: Fine-Tuning Theory & Setup

**Learning Objectives:**
- Understand when fine-tuning is appropriate vs. prompting vs. RAG
- Learn LoRA, QLoRA theory and why parameter-efficient methods work
- Set up training environment (GPU requirements, datasets, tooling)

**Key Resources:**
- [DeepLearning.AI - Finetuning Large Language Models](https://www.deeplearning.ai/short-courses/finetuning-large-language-models/)
- [Hugging Face PEFT Documentation](https://huggingface.co/docs/peft)
- Paper: "LoRA: Low-Rank Adaptation of Large Language Models" (Hu et al.)
- [Sebastian Raschka - "Finetuning LLMs" guide](https://magazine.sebastianraschka.com/)

**Hands-on Project:**
- Prepare a fine-tuning dataset: curate 500+ examples in the correct format (instruction/input/output)
- Set up training environment: install Unsloth, PEFT, bitsandbytes
- Fine-tune a small model (Llama 3 8B or Mistral 7B) on a simple classification task as a warm-up

**Milestone/Checkpoint:**
- [ ] Can articulate when to fine-tune vs. use RAG vs. better prompting
- [ ] Training environment fully configured and tested
- [ ] First successful fine-tuning run completed (even if quality is basic)

---

### Week 16: Hands-on Fine-Tuning

**Learning Objectives:**
- Master the full fine-tuning pipeline: data prep, training, monitoring, evaluation
- Learn hyperparameter tuning for LoRA (rank, alpha, target modules)
- Understand training dynamics: learning rate, epochs, overfitting signs

**Key Resources:**
- [Unsloth Documentation](https://docs.unsloth.ai/)
- [Axolotl Training Framework (GitHub)](https://github.com/OpenAccess-AI-Collective/axolotl)
- [Weights & Biases - LLM Fine-tuning Guide](https://wandb.ai/site/articles/fine-tuning-llms)
- [HuggingFace TRL (Transformer Reinforcement Learning)](https://huggingface.co/docs/trl/)

**Hands-on Project:**
- Fine-tune a model for a specific domain (legal, medical, coding, or your work domain)
- Experiment with different LoRA ranks (8, 16, 32, 64) and compare results
- Use Weights & Biases to track experiments and compare training runs

**Milestone/Checkpoint:**
- [ ] Custom fine-tuned model that outperforms base model on your specific task
- [ ] W&B dashboard showing multiple training runs with metrics
- [ ] Can select appropriate hyperparameters based on training curves

---

### Week 17: Evaluation, Quantization & Deployment

**Learning Objectives:**
- Learn model evaluation: automated metrics (perplexity, BLEU, ROUGE) and human evaluation
- Understand post-training quantization (GGUF, AWQ, GPTQ) for efficient deployment
- Deploy your fine-tuned model for inference

**Key Resources:**
- [LM Evaluation Harness (GitHub)](https://github.com/EleutherAI/lm-evaluation-harness)
- [llama.cpp for GGUF conversion](https://github.com/ggerganov/llama.cpp)
- [AutoGPTQ Documentation](https://github.com/AutoGPTQ/AutoGPTQ)
- Blog: "A Guide to LLM Evaluation" by Hugging Face

**Hands-on Project:**
- Create an evaluation suite: automated metrics + human evaluation rubric
- Quantize your fine-tuned model to GGUF format at different levels (Q4, Q5, Q8)
- Deploy quantized model via Ollama and compare quality/speed vs. full model

**Milestone/Checkpoint:**
- [ ] Comprehensive evaluation report comparing base vs. fine-tuned vs. quantized
- [ ] Model deployed and serving requests via API
- [ ] Can recommend the right quantization level for different use cases

---

## Phase 6: MLOps, Deployment & Production (Weeks 18-21)

### Week 18: Containerization & API Development

**Learning Objectives:**
- Dockerize AI applications properly (multi-stage builds, GPU support)
- Build production APIs with FastAPI (async, streaming, middleware)
- Understand deployment patterns for LLM applications

**Key Resources:**
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Docker for ML Guide](https://docs.docker.com/guides/use-case/ml/)
- [Gradio for Quick UIs](https://www.gradio.app/docs)
- Blog: "Deploying LLM Applications" by Chip Huyen

**Hands-on Project:**
- Containerize your best RAG application with Docker (proper Dockerfile, docker-compose)
- Build a FastAPI service with: streaming endpoints, rate limiting, API key auth, health checks
- Add a Gradio/Streamlit frontend that connects to your API

**Milestone/Checkpoint:**
- [ ] Application runs reliably in Docker containers
- [ ] API handles concurrent requests with streaming support
- [ ] Full-stack application (frontend + backend + vector DB) running in docker-compose

---

### Week 19: Cloud Deployment & CI/CD

**Learning Objectives:**
- Deploy AI applications to cloud (AWS/GCP/Azure - pick one)
- Set up CI/CD pipelines for AI applications (testing, building, deploying)
- Understand serverless vs. always-on tradeoffs for AI workloads

**Key Resources:**
- [AWS Bedrock Documentation](https://docs.aws.amazon.com/bedrock/) OR [GCP Vertex AI](https://cloud.google.com/vertex-ai/docs) OR [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Modal.com for Serverless GPU](https://modal.com/docs)
- Blog: "MLOps for LLM Applications" by Neptune.ai

**Hands-on Project:**
- Deploy your application to a cloud provider with proper infrastructure (load balancer, auto-scaling)
- Set up GitHub Actions CI/CD: lint, test, build Docker image, deploy on merge
- Implement blue-green or canary deployment for your AI service

**Milestone/Checkpoint:**
- [ ] Application accessible via public URL with proper DNS
- [ ] CI/CD pipeline automatically deploys on git push
- [ ] Can do zero-downtime deployments

---

### Week 20: Monitoring, Observability & Safety

**Learning Objectives:**
- Set up comprehensive monitoring for LLM applications (latency, cost, quality)
- Implement observability with Langfuse or LangSmith for production tracing
- Add guardrails and safety measures (content filtering, PII detection)

**Key Resources:**
- [Langfuse Documentation](https://langfuse.com/docs)
- [Guardrails AI Documentation](https://www.guardrailsai.com/)
- [NeMo Guardrails by NVIDIA](https://github.com/NVIDIA/NeMo-Guardrails)
- Blog: "Monitoring LLM Applications in Production" by Arize AI

**Hands-on Project:**
- Integrate Langfuse: trace all LLM calls, retrieval steps, and agent actions
- Build a monitoring dashboard: response latency, token usage, cost per request, error rates
- Implement guardrails: input validation, output filtering, PII redaction, topic boundaries

**Milestone/Checkpoint:**
- [ ] Full observability into production LLM behavior
- [ ] Alerts set up for quality degradation and cost spikes
- [ ] Guardrails preventing harmful/off-topic outputs

---

### Week 21: Cost Optimization & Scaling

**Learning Objectives:**
- Optimize LLM costs: caching, model routing, prompt optimization
- Implement scaling strategies: queue-based processing, batch inference
- Design for reliability: fallbacks, circuit breakers, graceful degradation

**Key Resources:**
- [OpenAI Cookbook - Cost Optimization](https://cookbook.openai.com/)
- [Redis for LLM Caching](https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/vectors/)
- Blog: "Reducing LLM Costs in Production" by various authors
- [Celery for Task Queues](https://docs.celeryq.dev/)

**Hands-on Project:**
- Implement semantic caching (cache similar queries, not just exact matches)
- Build a model router: simple queries -> cheap model, complex -> expensive model
- Add queue-based processing for long-running tasks with progress tracking

**Milestone/Checkpoint:**
- [ ] Demonstrated 50%+ cost reduction with caching and routing
- [ ] System handles 100+ concurrent users without degradation
- [ ] Graceful fallback behavior when primary model is unavailable

---

## Phase 7: Projects, System Design & Interview Prep (Weeks 22-24)

### Week 22: Capstone Project

**Learning Objectives:**
- Build a complete, production-grade AI application from scratch
- Integrate multiple techniques: RAG + Agents + Fine-tuning + Deployment
- Create a polished project worthy of a portfolio

**Key Resources:**
- All previous resources as reference
- [Vercel AI SDK](https://sdk.vercel.ai/) (if building web app)
- [Streamlit](https://streamlit.io/) or [Next.js](https://nextjs.org/) for frontend
- GitHub for version control and project showcase

**Hands-on Project:**
Build ONE comprehensive project that demonstrates your skills. Ideas:
- **AI Research Assistant**: Multi-source RAG + agents that can search, summarize, and generate reports
- **AI-Powered Code Review Tool**: Analyzes PRs, suggests improvements, runs automated checks
- **Domain-Specific Copilot**: Custom fine-tuned model + RAG for a specific industry (legal, healthcare, finance)
- **Multi-Agent Workflow Platform**: Visual workflow builder where agents collaborate on complex tasks

**Milestone/Checkpoint:**
- [ ] Capstone project deployed and accessible
- [ ] Clean code with documentation, tests, and CI/CD
- [ ] Demo video or writeup explaining architecture decisions

---

### Week 23: System Design & Architecture

**Learning Objectives:**
- Learn AI system design patterns (RAG at scale, agent orchestration, model serving)
- Practice designing systems for common AI engineering interview questions
- Understand tradeoffs in real-world AI system architecture

**Key Resources:**
- Blog: "Emerging Architectures for LLM Applications" by a16z
- [System Design for AI Engineers (GitHub)](https://github.com/chiphuyen/machine-learning-systems-design)
- Blog: "Patterns for Building LLM-based Systems & Products" by Eugene Yan
- [Chip Huyen - "Designing Machine Learning Systems" book](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/)

**Hands-on Project:**
- Design 5 AI systems on paper (whiteboard-style): document processing pipeline, customer support bot, code generation tool, recommendation engine with LLMs, real-time AI moderation system
- For each: draw architecture diagram, identify components, discuss tradeoffs, estimate costs
- Practice explaining your designs in 15-minute mock presentations

**Milestone/Checkpoint:**
- [ ] 5 system designs documented with architecture diagrams
- [ ] Can discuss tradeoffs fluently (cost vs. quality, latency vs. accuracy, build vs. buy)
- [ ] Comfortable whiteboarding AI system designs under time pressure

---

### Week 24: Portfolio Polish & Interview Preparation

**Learning Objectives:**
- Polish GitHub profile and project documentation
- Prepare for AI engineering interview questions (technical + behavioral)
- Build a professional narrative around your AI engineering journey

**Key Resources:**
- [GitHub Profile README Guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile)
- Blog: "AI Engineer Interview Questions" by various companies
- [Interviewing.io](https://interviewing.io/) for mock interviews
- LinkedIn optimization guides for AI/ML roles

**Hands-on Project:**
- Polish top 3 projects: clean READMEs, architecture diagrams, demo GIFs/videos
- Write 2-3 technical blog posts about your learnings (publish on Medium, Dev.to, or personal blog)
- Do 3+ mock interviews (with friends, community members, or paid services)
- Update resume and LinkedIn to highlight AI engineering skills and projects

**Milestone/Checkpoint:**
- [ ] GitHub showcases 3+ polished AI projects with stars/engagement
- [ ] Published at least 1 technical blog post
- [ ] Completed mock interviews with positive feedback
- [ ] Actively applying to AI engineering roles

---

## Summary & Key Metrics

| Phase | Weeks | Key Deliverable |
|-------|-------|----------------|
| LLM Fundamentals | 1-3 | Working LLM app with streaming + function calling |
| RAG Systems | 4-7 | Production-quality RAG with evaluation metrics |
| AI Agents | 8-11 | Multi-agent system with memory and human-in-the-loop |
| Frameworks | 12-14 | Framework comparison + local model serving |
| Fine-Tuning | 15-17 | Custom fine-tuned and deployed model |
| MLOps & Production | 18-21 | Cloud-deployed application with monitoring |
| Projects & Interviews | 22-24 | Polished portfolio + active job search |

**Total estimated time investment:** 336-504 hours (at 2-3 hours/day)

---

## Tips for Success

1. **Build in public**: Share your progress on Twitter/LinkedIn. The AI community is supportive.
2. **Join communities**: Discord servers (LangChain, Hugging Face, MLOps Community), Reddit (r/LocalLLaMA, r/MachineLearning).
3. **Don't just follow tutorials**: After each tutorial, modify it. Break it. Rebuild it differently.
4. **Keep a learning journal**: Document what you learn, what confused you, and how you solved problems.
5. **Stay current**: Follow AI news (The Batch, TLDR AI, Papers With Code) - the field moves fast.
6. **Pair learning with building**: Every concept should result in running code within 24 hours.
7. **Prioritize depth over breadth**: It's better to deeply understand RAG than to superficially know 10 techniques.
