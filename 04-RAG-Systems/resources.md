# RAG Systems (Retrieval-Augmented Generation)

## 1. Core Concept & Theory

- **Original RAG Paper** - "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
  - https://arxiv.org/abs/2005.11401
- **LangChain RAG Guide** - Official tutorial on building RAG applications
  - https://python.langchain.com/docs/tutorials/rag/
- **LlamaIndex RAG Guide** - Comprehensive framework documentation for RAG
  - https://docs.llamaindex.ai/en/stable/

---

## 2. Best Courses

| Course | Link |
|--------|------|
| DeepLearning.AI - Retrieval Augmented Generation | https://www.deeplearning.ai/courses/retrieval-augmented-generation |
| DeepLearning.AI - Building and Evaluating Advanced RAG | https://www.deeplearning.ai/courses/building-evaluating-advanced-rag |
| DeepLearning.AI - LangChain Chat with Your Data | https://www.deeplearning.ai/courses/langchain-chat-with-your-data |

---

## 3. GitHub Repositories (ESSENTIAL)

- **NirDiamant/RAG_Techniques**
  - https://github.com/NirDiamant/RAG_Techniques
  - Comprehensive collection of advanced RAG techniques with implementations
- **langchain-ai/rag-from-scratch**
  - https://github.com/langchain-ai/rag-from-scratch
- **run-llama/llama_index**
  - https://github.com/run-llama/llama_index
- **chroma-core/chroma**
  - https://github.com/chroma-core/chroma

---

## 4. Video Tutorials

- **LangChain RAG from Scratch playlist**
  - https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x
- **FreeCodeCamp RAG Tutorial**
  - Search for "RAG Tutorial FreeCodeCamp" on YouTube

---

## 5. Advanced RAG Techniques

- **Hybrid Search** - Combining keyword search (BM25) with semantic (vector) search
- **Multi-Query Retrieval** - Generating multiple query variations to improve recall
- **Self-Querying Retrieval** - LLM constructs its own structured queries with metadata filters
- **Parent Document Retrieval** - Retrieve small chunks but return larger parent documents for context
- **Contextual Compression** - Compress retrieved documents to only relevant portions
- **Re-ranking** - Using Cohere Rerank, cross-encoders, or other models to reorder results by relevance
- **Graph RAG (Microsoft)**
  - https://github.com/microsoft/graphrag
  - Combines knowledge graphs with RAG for improved reasoning over complex data
- **Agentic RAG Patterns** - Using agents to decide when/how to retrieve and synthesize information
- **RAPTOR** - Recursive Abstractive Processing for Tree-Organized Retrieval
- **Corrective RAG (CRAG)** - Self-correcting retrieval that evaluates and refines retrieved documents

---

## 6. Production RAG

### Chunking Strategies
- **Recursive Character Splitting** - Split by characters with overlap
- **Semantic Chunking** - Split based on semantic similarity between sentences
- **Agentic Chunking** - Use LLMs to determine optimal chunk boundaries

### Embedding Model Selection
- Consider: dimensionality, context window, domain specificity, cost, and latency
- Popular choices: OpenAI text-embedding-3-small/large, Cohere embed-v3, BGE, E5

### Retrieval Evaluation
- **RAGAS** - Evaluation framework for RAG pipelines
  - https://github.com/explodinggradients/ragas
  - Metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall

### Indexing Pipelines
- Document loaders, parsers, and metadata extraction
- Incremental indexing and deduplication
- Multi-modal indexing (text, tables, images)

### Caching and Optimization
- Semantic caching for repeated or similar queries
- Embedding caching to reduce API calls
- Query routing to select appropriate indices
- Streaming responses for better UX
