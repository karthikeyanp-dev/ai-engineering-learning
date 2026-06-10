# AI Engineering Learning Resource Collection

> A structured, self-paced curriculum for becoming a Full Stack AI Engineer in 2025-2026.

---

## The AI Engineer Role in 2025-2026

The AI Engineer has emerged as one of the most in-demand roles in technology. Unlike traditional ML Engineers who focus on training models from scratch, or Software Engineers who build conventional applications, the **Full Stack AI Engineer** sits at the intersection: building production-grade applications powered by large language models, retrieval systems, autonomous agents, and multi-modal AI.

In 2025-2026, the role demands:

- Proficiency in orchestrating LLMs (OpenAI, Anthropic, open-source models) into real applications
- Deep understanding of Retrieval-Augmented Generation (RAG) architectures
- Ability to design, build, and deploy AI agent systems
- Expertise in evaluation, observability, and production reliability
- Strong software engineering fundamentals applied to AI-native systems

This collection is designed to take you from an intermediate Python/ML practitioner to a job-ready Full Stack AI Engineer.

---

## Learning Path Overview

```
Phase 1          Phase 2          Phase 3          Phase 4
[LLM Fundamentals] --> [RAG & Vector DBs] --> [AI Agents] --> [Frameworks & Tools]
   2-3 weeks           3-4 weeks           3-4 weeks          2-3 weeks

Phase 5          Phase 6          Phase 7          Phase 8          Phase 9
[Fine-Tuning] --> [MLOps & Deploy] --> [Eval & Testing] --> [System Design] --> [Projects]
  2-3 weeks        3-4 weeks           2 weeks           2-3 weeks        4-6 weeks
```

**Total estimated time: 23-34 weeks (6-8 months) at ~10-15 hours/week**

| Phase | Topic | Duration | Folder |
|-------|-------|----------|--------|
| 1 | LLM Fundamentals & Prompt Engineering | 2-3 weeks | `02-LLM-Fundamentals/`, `03-Prompt-Engineering/` |
| 2 | RAG Systems & Vector Databases | 3-4 weeks | `04-RAG-Systems/`, `06-Vector-Databases/` |
| 3 | AI Agents & Multi-Agent Systems | 3-4 weeks | `05-AI-Agents/` |
| 4 | Frameworks & Tools Mastery | 2-3 weeks | `08-Frameworks-Tools/` |
| 5 | Fine-Tuning & Model Customization | 2-3 weeks | `07-Fine-Tuning/` |
| 6 | MLOps, Deployment & Production | 3-4 weeks | `09-MLOps-Deployment/` |
| 7 | Evaluation, Testing & Observability | 2 weeks | `10-Evaluation-Testing/` |
| 8 | System Design & Architecture | 2-3 weeks | `11-System-Design/` |
| 9 | Projects & Portfolio Building | 4-6 weeks | `12-Projects-Portfolio/` |

---

## Quick-Start Guide

If you want to get productive as fast as possible, focus on these resources first:

1. **Start here** - Review the roadmap in [`00-Roadmap/`](./00-Roadmap/) for a high-level orientation.
2. **Understand LLMs** - Work through [`02-LLM-Fundamentals/`](./02-LLM-Fundamentals/) to build intuition about how modern language models work (tokenization, attention, inference).
3. **Learn Prompt Engineering** - Complete [`03-Prompt-Engineering/`](./03-Prompt-Engineering/) to master structured prompting, chain-of-thought, and system prompt design.
4. **Build a RAG pipeline** - Follow [`04-RAG-Systems/`](./04-RAG-Systems/) to build your first retrieval-augmented generation application end-to-end.
5. **Deploy something** - Jump to [`09-MLOps-Deployment/`](./09-MLOps-Deployment/) to learn how to ship an AI application to production.

> **80/20 Rule**: Phases 1-3 cover roughly 80% of what you need for most AI Engineer positions. Prioritize depth in these areas before broadening.

---

## Table of Contents

| Folder | Description |
|--------|-------------|
| [`00-Roadmap/`](./00-Roadmap/) | High-level learning roadmap, timelines, and milestone checklists |
| [`01-Foundations/`](./01-Foundations/) | Prerequisite refreshers: Python, ML basics, linear algebra, probability |
| [`02-LLM-Fundamentals/`](./02-LLM-Fundamentals/) | Transformer architecture, tokenization, attention mechanisms, model families |
| [`03-Prompt-Engineering/`](./03-Prompt-Engineering/) | Prompting techniques, system prompts, chain-of-thought, structured outputs |
| [`04-RAG-Systems/`](./04-RAG-Systems/) | Retrieval-Augmented Generation: chunking, retrieval, re-ranking, hybrid search |
| [`05-AI-Agents/`](./05-AI-Agents/) | Autonomous agents, tool use, planning, multi-agent orchestration |
| [`06-Vector-Databases/`](./06-Vector-Databases/) | Embeddings, vector stores (Pinecone, Weaviate, Qdrant, Chroma, pgvector) |
| [`07-Fine-Tuning/`](./07-Fine-Tuning/) | LoRA, QLoRA, RLHF, DPO, dataset preparation, training pipelines |
| [`08-Frameworks-Tools/`](./08-Frameworks-Tools/) | LangChain, LlamaIndex, CrewAI, AutoGen, Semantic Kernel, Haystack |
| [`09-MLOps-Deployment/`](./09-MLOps-Deployment/) | Containerization, serving (vLLM, TGI), CI/CD, monitoring, scaling |
| [`10-Evaluation-Testing/`](./10-Evaluation-Testing/) | LLM evaluation, benchmarking, A/B testing, observability, tracing |
| [`11-System-Design/`](./11-System-Design/) | Architecture patterns, cost optimization, latency budgets, failure modes |
| [`12-Projects-Portfolio/`](./12-Projects-Portfolio/) | Capstone projects, portfolio pieces, and demo applications |
| [`13-Career-Interview/`](./13-Career-Interview/) | Interview preparation, resume tips, system design interviews for AI roles |

---

## Prerequisites

This resource collection assumes you already have:

| Skill | Level Required | Notes |
|-------|---------------|-------|
| Python | Intermediate | Comfortable with classes, decorators, async/await, type hints |
| Git & CLI | Working proficiency | Branching, merging, basic shell scripting |
| Machine Learning | Fundamentals | Supervised/unsupervised learning, train/test splits, overfitting |
| Deep Learning | Basic awareness | Know what neural networks are, backpropagation at a high level |
| APIs & Web | Working knowledge | REST APIs, HTTP methods, JSON, basic web architecture |
| SQL | Basics | SELECT, JOIN, GROUP BY |

If you are shaky on any of the above, review the materials in [`01-Foundations/`](./01-Foundations/) before proceeding to Phase 1.

---

## How to Use This Resource Collection

### Recommended Workflow

1. **Follow the phases sequentially.** Each phase builds on concepts from the previous one. Resist the temptation to skip ahead unless you have prior experience in a topic.

2. **Active learning over passive reading.** Each section contains a mix of:
   - Conceptual notes and references
   - Hands-on tutorials and code examples
   - Mini-projects to reinforce understanding
   
   Prioritize building things. Reading without coding will not stick.

3. **Track your progress.** Use the checklists in [`00-Roadmap/`](./00-Roadmap/) to mark off completed topics and maintain momentum.

4. **Build projects early and often.** Do not wait until Phase 9 to start building. Each phase should result in at least one small working artifact (a script, a notebook, a deployed endpoint).

5. **Stay current.** The AI engineering landscape moves fast. Supplement this collection with:
   - arXiv papers on new techniques
   - Official documentation for tools you use
   - Community discussions (Discord servers, Twitter/X threads, Hacker News)

### Time Commitment

- **Full-time learner (~30-40 hrs/week):** Complete in 3-4 months
- **Part-time learner (~10-15 hrs/week):** Complete in 6-8 months
- **Casual pace (~5-7 hrs/week):** Complete in 10-12 months

### Suggested Tools Setup

Before starting, ensure you have:

```
- Python 3.11+
- An OpenAI API key (or Anthropic/other provider)
- Docker Desktop
- A code editor (VS Code recommended)
- Git configured
- A virtual environment manager (uv, poetry, or conda)
```

---

## Contributing & Updating

This is a living document. As the field evolves, update resources, add new tools, and refine the learning path. Date-stamp any time-sensitive references so they can be reviewed periodically.

---

*Last updated: June 2026*
