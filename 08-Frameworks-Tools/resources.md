# Frameworks & Tools for AI Engineering

A curated collection of frameworks, tools, and resources for building AI-powered applications.

---

## 1. LLM Application Frameworks

Frameworks for building applications powered by large language models.

| Framework | Repository | Notes |
|-----------|-----------|-------|
| **LangChain** | [GitHub](https://github.com/langchain-ai/langchain) | Most popular LLM app framework with extensive integrations |
| **LlamaIndex** | [GitHub](https://github.com/run-llama/llama_index) | Specialized in data ingestion and retrieval-augmented generation |
| **Haystack** (by deepset) | [GitHub](https://github.com/deepset-ai/haystack) | Production-ready NLP/LLM framework with pipeline architecture |
| **Semantic Kernel** (Microsoft) | [GitHub](https://github.com/microsoft/semantic-kernel) | Enterprise-focused SDK with .NET and Python support |

### LangChain Resources

- Documentation: https://python.langchain.com/
- Academy (free courses): https://academy.langchain.com

### LlamaIndex Resources

- Documentation: https://docs.llamaindex.ai/

---

## 2. Agent Frameworks

Frameworks for building autonomous and semi-autonomous AI agents.

| Framework | Repository | Notes |
|-----------|-----------|-------|
| **LangGraph** | [GitHub](https://github.com/langchain-ai/langgraph) | Stateful, multi-actor agent orchestration built on LangChain |
| **CrewAI** | [GitHub](https://github.com/crewAIInc/crewAI) | Role-based multi-agent collaboration framework |
| **AutoGen** | [GitHub](https://github.com/microsoft/autogen) | Microsoft's multi-agent conversation framework |
| **Phidata** | [GitHub](https://github.com/phidatahq/phidata) | Toolkit for building AI assistants with memory and tools |
| **Smolagents** (Hugging Face) | [GitHub](https://github.com/huggingface/smolagents) | Lightweight agent framework with code-based actions |

---

## 3. API Providers & SDKs

Services and libraries for accessing LLM capabilities.

| Provider | Link | Notes |
|----------|------|-------|
| **OpenAI API** | [Docs](https://platform.openai.com/docs) | GPT-4, GPT-4o, embeddings, DALL-E, Whisper |
| **Anthropic API** | [Docs](https://docs.anthropic.com/) | Claude models with large context windows |
| **Google Gemini** | [Docs](https://ai.google.dev/) | Multimodal models with long context |
| **Groq** (fast inference) | [Console](https://console.groq.com/) | Ultra-low latency inference with custom LPU hardware |
| **Together AI** | [Website](https://www.together.ai/) | Open-source model hosting and fine-tuning |
| **Ollama** (local models) | [GitHub](https://github.com/ollama/ollama) | Run open-source models locally with a simple CLI |
| **LiteLLM** (unified API) | [GitHub](https://github.com/BerriAI/litellm) | Unified interface to 100+ LLM providers with OpenAI-compatible format |

---

## 4. Development Tools

Tools that accelerate AI application development, debugging, and deployment.

### AI-Powered IDEs

- **Cursor** - AI-native code editor with built-in LLM assistance
- **GitHub Copilot** - AI pair programmer integrated into VS Code, JetBrains, etc.

### Observability & Debugging

| Tool | Link | Notes |
|------|------|-------|
| **LangSmith** | [Website](https://smith.langchain.com/) | Debugging, tracing, and evaluation for LLM apps |
| **Langfuse** | [GitHub](https://github.com/langfuse/langfuse) | Open-source LLM observability and analytics |
| **Weights & Biases** | [Website](https://wandb.ai/) | Experiment tracking, model monitoring, and evaluation |

### UI & API Frameworks

| Tool | Link | Notes |
|------|------|-------|
| **Streamlit** | [Website](https://streamlit.io/) | Rapid prototyping of data/AI apps with Python |
| **Gradio** | [GitHub](https://github.com/gradio-app/gradio) | Quick ML demo interfaces with minimal code |
| **FastAPI** | [Website](https://fastapi.tiangolo.com/) | High-performance Python API framework, ideal for serving AI models |

---

## 5. Model Serving

Tools for self-hosting and serving LLMs in production.

| Tool | Repository | Notes |
|------|-----------|-------|
| **vLLM** | [GitHub](https://github.com/vllm-project/vllm) | High-throughput serving with PagedAttention, best for production GPU deployments |
| **Ollama** | [GitHub](https://github.com/ollama/ollama) | Easiest local setup, great for development and personal use |
| **TGI** (Text Generation Inference) | [GitHub](https://github.com/huggingface/text-generation-inference) | Hugging Face's production inference server with tensor parallelism |
| **llama.cpp** | [GitHub](https://github.com/ggerganov/llama.cpp) | CPU/GPU inference with GGUF quantized models, runs anywhere |

---

## 6. When to Use What

A decision guide for choosing the right tool based on your use case.

### Choosing an LLM Application Framework

| Use Case | Recommended | Why |
|----------|-------------|-----|
| General-purpose LLM apps with many integrations | **LangChain** | Largest ecosystem, most connectors and community support |
| RAG-heavy applications (search, Q&A over docs) | **LlamaIndex** | Purpose-built for data ingestion, indexing, and retrieval |
| Enterprise/.NET environments | **Semantic Kernel** | Native .NET support, Microsoft ecosystem integration |
| Production NLP pipelines | **Haystack** | Clean pipeline architecture, strong evaluation tools |

### Choosing an Agent Framework

| Use Case | Recommended | Why |
|----------|-------------|-----|
| Complex stateful workflows with cycles | **LangGraph** | Graph-based orchestration with persistence and human-in-the-loop |
| Multi-agent role-based collaboration | **CrewAI** | Intuitive role/goal/backstory paradigm for agent teams |
| Research and multi-agent conversations | **AutoGen** | Flexible conversation patterns between multiple agents |
| Quick assistant with tools and memory | **Phidata** | Simple API, batteries-included for common use cases |
| Lightweight, code-first agents | **Smolagents** | Minimal abstraction, agents write and execute code directly |

### Choosing a Model Provider

| Use Case | Recommended | Why |
|----------|-------------|-----|
| Best overall quality | **OpenAI** or **Anthropic** | Leading frontier models |
| Speed-critical applications | **Groq** | Fastest inference available |
| Privacy/offline requirements | **Ollama** | Fully local, no data leaves your machine |
| Cost-sensitive with open models | **Together AI** | Competitive pricing for open-source models |
| Multi-provider flexibility | **LiteLLM** | Switch providers without code changes |

### Choosing a Model Serving Solution

| Use Case | Recommended | Why |
|----------|-------------|-----|
| Production GPU deployment at scale | **vLLM** | Best throughput with continuous batching |
| Local development and testing | **Ollama** | One-command setup, model management built in |
| Hugging Face model ecosystem | **TGI** | Native HF model support, tensor parallelism |
| Resource-constrained / CPU environments | **llama.cpp** | Excellent quantization, runs on consumer hardware |

---

## Quick Start Recommendation

For beginners in AI engineering, a solid starting stack is:

1. **LangChain** or **LlamaIndex** for application logic
2. **OpenAI API** (or **Ollama** for local/free experimentation)
3. **LangSmith** or **Langfuse** for debugging
4. **Streamlit** or **Gradio** for quick demos
5. **FastAPI** when you need a production API
