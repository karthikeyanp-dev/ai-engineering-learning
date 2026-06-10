# Vector Databases & Embeddings

## Understanding Embeddings

- [OpenAI Embeddings Guide](https://platform.openai.com/docs/guides/embeddings)
- [Sentence Transformers](https://www.sbert.net/)
- [MTEB Leaderboard (embedding model comparison)](https://huggingface.co/spaces/mteb/leaderboard)
- [Jay Alammar's "The Illustrated Word2Vec"](https://jalammar.github.io/illustrated-word2vec/)

## Vector Database Options

| Database | Type | Link |
|----------|------|------|
| ChromaDB | Lightweight, great for learning | [GitHub](https://github.com/chroma-core/chroma) |
| Pinecone | Managed, production-ready | [Website](https://www.pinecone.io/) |
| Weaviate | Open-source, feature-rich | [GitHub](https://github.com/weaviate/weaviate) |
| Qdrant | Open-source, performant | [GitHub](https://github.com/qdrant/qdrant) |
| Milvus | Open-source, enterprise | [GitHub](https://github.com/milvus-io/milvus) |
| pgvector | PostgreSQL extension | [GitHub](https://github.com/pgvector/pgvector) |
| FAISS | Facebook, for research | [GitHub](https://github.com/facebookresearch/faiss) |

### ChromaDB

- GitHub: https://github.com/chroma-core/chroma
- Docs: https://docs.trychroma.com/

### Pinecone

- Website: https://www.pinecone.io/
- Free tier available, great docs

### Weaviate

- GitHub: https://github.com/weaviate/weaviate

### Qdrant

- GitHub: https://github.com/qdrant/qdrant

### Milvus

- GitHub: https://github.com/milvus-io/milvus

### pgvector

- GitHub: https://github.com/pgvector/pgvector

### FAISS

- GitHub: https://github.com/facebookresearch/faiss

## Tutorials & Courses

- [Pinecone Learning Center](https://www.pinecone.io/learn/)
- [Complete Tutorial on Vector Database (YouTube)](https://www.youtube.com/watch?v=8KrTO9bS91s)
- [DeepLearning.AI - Vector Databases: from Embeddings to Applications](https://www.deeplearning.ai/courses/vector-databases-embeddings-applications)

## Key Concepts

- **Vector similarity** - cosine, euclidean, dot product
- **Approximate Nearest Neighbor (ANN) algorithms** - HNSW, IVF
- **Indexing strategies**
- **Metadata filtering**
- **Hybrid search** - dense + sparse vectors
- **Dimensionality and embedding model selection**
- **Chunking strategies for documents**

## Comparison Guide

| Database | Best For | Hosting | Cost | Ease of Use |
|----------|----------|---------|------|-------------|
| ChromaDB | Learning, prototyping, small projects | Self-hosted / embedded | Free (open-source) | Very Easy |
| Pinecone | Production apps, teams wanting managed infra | Fully managed | Free tier + paid plans | Easy |
| Weaviate | Feature-rich apps needing modularity | Self-hosted or cloud | Free (open-source) + cloud plans | Moderate |
| Qdrant | High-performance search, Rust enthusiasts | Self-hosted or cloud | Free (open-source) + cloud plans | Moderate |
| Milvus | Enterprise-scale, large datasets | Self-hosted or Zilliz Cloud | Free (open-source) + cloud plans | Complex |
| pgvector | Teams already using PostgreSQL | Wherever your Postgres runs | Free (extension) | Easy (if you know SQL) |
| FAISS | Research, benchmarking, offline workloads | Self-hosted (library, not a server) | Free (open-source) | Moderate |

### When to Use What

- **Just learning?** Start with **ChromaDB** - minimal setup, Python-native, runs in-memory.
- **Building a production app?** Use **Pinecone** for zero-ops or **Qdrant/Weaviate** for open-source flexibility.
- **Already using PostgreSQL?** Add **pgvector** to avoid introducing a new service.
- **Enterprise scale with billions of vectors?** Consider **Milvus** with distributed deployment.
- **Research or offline batch processing?** **FAISS** gives you low-level control and top performance.
