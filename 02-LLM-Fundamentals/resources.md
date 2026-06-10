# LLM Fundamentals

A comprehensive collection of resources for understanding Large Language Models (LLMs) — from foundational concepts like tokenization and attention mechanisms to practical implementation and prompt engineering.

---

## 1. Core Courses

| Course | Link | Description |
|--------|------|-------------|
| Hugging Face LLM Course | [huggingface.co/learn/llm-course](https://huggingface.co/learn/llm-course/chapter1/1) | A structured course covering the full LLM pipeline — from architecture basics to deployment. Ideal for practitioners who want hands-on experience with Hugging Face tools. |
| Hugging Face NLP Course | [huggingface.co/learn/nlp-course](https://huggingface.co/learn/nlp-course) | Covers core NLP concepts using the Transformers library, including tokenizers, fine-tuning, and working with datasets. A prerequisite for deeper LLM work. |
| ChatGPT Prompt Engineering for Developers | [deeplearning.ai](https://www.deeplearning.ai/courses/chatgpt-prompt-engineering-for-developers) | A short course by DeepLearning.AI teaching best practices for prompting LLMs effectively, including iterative prompt development, summarization, and structured output generation. |
| LLM Zoomcamp (DataTalks.Club) | [datatalks.club](https://datatalks.club/blog/llm-zoomcamp.html) | A free, project-based course that walks through building a real RAG application, covering retrieval, orchestration, evaluation, and monitoring of LLM-powered systems. |

---

## 2. Books & Reading

### "Build a Large Language Model From Scratch" — Sebastian Raschka

- **GitHub**: [github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)
- A hands-on guide that walks through implementing a GPT-style language model from the ground up using PyTorch. Covers data preparation, attention mechanisms, pre-training, and fine-tuning with clear code examples and explanations.

### "Hands-On Large Language Models" — Jay Alammar & Maarten Grootendorst

- **GitHub**: [github.com/HandsOnLLM/Hands-On-Large-Language-Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models)
- A practical guide focused on using and understanding LLMs through visual explanations and code. Covers text classification, semantic search, text generation, prompt engineering, and multimodal models with an emphasis on intuition over theory.

---

## 3. Video Resources

| Video | Link | Description |
|-------|------|-------------|
| Andrej Karpathy — "Let's build GPT from scratch" | [YouTube](https://www.youtube.com/watch?v=kCc8FmEb1nY) | A ~2 hour walkthrough of building a GPT model from scratch in Python. Covers bigram models, self-attention, multi-head attention, and the full transformer architecture with live coding. |
| Andrej Karpathy — "State of GPT" | [YouTube](https://www.youtube.com/watch?v=bZQun8Y4L2A) | A detailed talk explaining how GPT models are trained (pre-training, supervised fine-tuning, RLHF) and practical guidance on how to effectively use them. Excellent for understanding the full training pipeline. |
| 3Blue1Brown — "But what is a GPT?" | [YouTube](https://www.youtube.com/watch?v=wjZofJX0v4M) | A visually rich explanation of how transformers and GPT models work under the hood, breaking down embeddings, attention, and neural network layers with beautiful animations. Perfect for building intuition. |

---

## 4. Key GitHub Repositories

| Repository | Description |
|------------|-------------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Step-by-step code for implementing a ChatGPT-like LLM from scratch. Companion repo to Sebastian Raschka's book. |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | Official collection of examples and best practices for using the OpenAI API — covers embeddings, retrieval, fine-tuning, function calling, and more. |
| [Hannibal046/Awesome-LLM](https://github.com/Hannibal046/Awesome-LLM) | A curated list of LLM papers, tools, frameworks, and resources organized by topic. Great as a reference index for the field. |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | A comprehensive roadmap and resource collection for learning LLMs, covering the scientist path (building LLMs) and the engineer path (using LLMs in production). |

---

## 5. Understanding Tokenization, Embeddings, Attention

| Resource | Link | Description |
|----------|------|-------------|
| OpenAI Tokenizer | [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer) | An interactive tool that visualizes how text is split into tokens by different models. Essential for understanding token limits, prompt budgeting, and how models "see" text. |
| Jay Alammar's Blog | [jalammar.github.io](https://jalammar.github.io/) | Highly visual, illustrated guides to transformers, attention, BERT, GPT-2, and other core concepts. The "Illustrated Transformer" post is considered one of the best introductions to the architecture. |

---

## 6. Key Concepts to Master

### Tokenization and Vocabulary
The process of converting raw text into discrete tokens (subwords, characters, or words) that models can process. Understanding BPE (Byte Pair Encoding) and vocabulary size trade-offs is fundamental to working with LLMs.

### Self-Attention Mechanism
The core innovation that allows transformers to weigh the relevance of all tokens in a sequence relative to each other. Enables the model to capture long-range dependencies and contextual relationships in text.

### Transformer Architecture
The foundational architecture (introduced in "Attention Is All You Need", 2017) consisting of encoder and decoder blocks with multi-head attention, feed-forward networks, residual connections, and layer normalization.

### Pre-training vs Fine-tuning
Pre-training learns general language understanding from massive unlabeled corpora (next-token prediction or masked language modeling). Fine-tuning adapts the pre-trained model to specific tasks or behaviors using smaller, curated datasets.

### Inference Optimization
Techniques to make LLM inference faster and cheaper, including KV-cache, quantization (INT8, INT4), speculative decoding, batching strategies, and model distillation.

### Context Windows and Memory
The fixed-length input a model can process at once (e.g., 4K, 128K tokens). Understanding context window limitations is critical for designing applications that handle long documents, conversations, or retrieval-augmented generation.

### Temperature, Top-k, Top-p Sampling
Decoding strategies that control the randomness and diversity of generated text. Temperature scales logits, top-k limits sampling to the k most likely tokens, and top-p (nucleus sampling) limits to tokens whose cumulative probability exceeds p.

---

## Suggested Learning Path

1. Start with **3Blue1Brown's video** for visual intuition
2. Take the **Hugging Face NLP Course** for hands-on foundations
3. Watch **Karpathy's "Let's build GPT"** to understand implementation
4. Read **"Build a Large Language Model From Scratch"** for deep understanding
5. Explore the **OpenAI Cookbook** for practical application patterns
6. Take the **LLM Zoomcamp** to build a complete project
