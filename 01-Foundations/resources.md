# Foundations & Prerequisites

> For intermediate users who already know Python and basic ML. These resources help you solidify the core skills needed before diving deeper into AI engineering.

---

## 1. Python for AI (Intermediate/Advanced)

| Resource | Link |
|----------|------|
| Python Data Science Handbook (GitHub) | https://github.com/jakevdp/PythonDataScienceHandbook |
| Python for Data Science (freeCodeCamp) | [freeCodeCamp Course](https://www.freecodecamp.org/) |

### Python Data Science Handbook

- **What it covers:** NumPy, Pandas, Matplotlib, Scikit-Learn, and IPython/Jupyter workflows in depth.
- **Why it's useful:** Goes well beyond beginner tutorials. Excellent for strengthening your data manipulation and numerical computing skills, which are foundational to every AI pipeline.

### Python for Data Science (freeCodeCamp)

- **What it covers:** Applied Python for data wrangling, analysis, and visualization with real-world projects.
- **Why it's useful:** Structured curriculum with hands-on challenges that reinforce intermediate patterns you'll use daily in AI work.

---

## 2. Mathematics for ML (Refresh)

| Resource | Link |
|----------|------|
| 3Blue1Brown Linear Algebra | https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab |
| StatQuest ML | https://www.youtube.com/c/joshstarmer |
| Mathematics for Machine Learning (Book, free PDF) | https://mml-book.github.io/ |

### 3Blue1Brown - Essence of Linear Algebra

- **What it covers:** Vectors, linear transformations, matrix multiplication, determinants, eigenvalues/eigenvectors -- all with stunning geometric intuition.
- **Why it's useful:** Builds deep visual intuition for the linear algebra operations that underpin neural networks, attention mechanisms, and embeddings.

### StatQuest with Josh Starmer

- **What it covers:** Statistics, probability, machine learning algorithms, and mathematical concepts explained with clear, step-by-step breakdowns.
- **Why it's useful:** Perfect for refreshing specific topics on demand. The bite-sized format makes it easy to revisit concepts like gradient descent, PCA, or Bayesian reasoning.

### Mathematics for Machine Learning (Book)

- **What it covers:** Linear algebra, analytic geometry, matrix decompositions, probability, continuous optimization, and how they connect to ML methods.
- **Why it's useful:** A comprehensive yet accessible reference that bridges the gap between pure math and practical ML. The free PDF makes it easy to keep as a desk reference.

---

## 3. Deep Learning Foundations

| Resource | Link |
|----------|------|
| Andrej Karpathy - Neural Networks: Zero to Hero | https://karpathy.ai/zero-to-hero.html |
| Zero to Hero YouTube Playlist | https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ |
| Fast.ai - Practical Deep Learning | https://course.fast.ai/ |
| 3Blue1Brown - Neural Networks | https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi |

### Andrej Karpathy - Neural Networks: Zero to Hero

- **What it covers:** Building neural networks from scratch in Python -- from micrograd (backprop engine) to makemore (character-level language models) to a GPT implementation.
- **Why it's useful:** Teaches you to build everything from the ground up with no library magic. You gain a first-principles understanding of how modern architectures actually work under the hood.

### Fast.ai - Practical Deep Learning for Coders

- **What it covers:** Top-down approach to deep learning: image classification, NLP, tabular data, collaborative filtering, and deployment -- using PyTorch and the fastai library.
- **Why it's useful:** Complements the bottom-up approach. You learn to train state-of-the-art models quickly while progressively peeling back the layers of abstraction.

### 3Blue1Brown - Neural Networks

- **What it covers:** What neural networks are, how gradient descent and backpropagation work, visualized with the clarity 3B1B is known for.
- **Why it's useful:** Gives you rock-solid geometric and mathematical intuition for how learning happens in neural networks. Great as a primer or refresher before tackling more complex architectures.

---

## 4. Transformer Architecture

| Resource | Link |
|----------|------|
| "Attention Is All You Need" (paper) | https://arxiv.org/abs/1706.03762 |
| Jay Alammar - The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ |
| Andrej Karpathy - "Let's build GPT" | https://www.youtube.com/watch?v=kCc8FmEb1nY |

### "Attention Is All You Need" (Vaswani et al., 2017)

- **What it covers:** The original paper introducing the Transformer architecture -- multi-head self-attention, positional encoding, encoder-decoder structure.
- **Why it's useful:** This is THE foundational paper for modern AI. Reading it helps you understand the design decisions behind GPT, BERT, and every major LLM.

### Jay Alammar - The Illustrated Transformer

- **What it covers:** A visual, step-by-step walkthrough of how Transformers process input -- from embeddings through attention layers to output.
- **Why it's useful:** Makes the paper's dense notation accessible. The diagrams and animations clarify exactly how queries, keys, and values interact, and how information flows through the model.

### Andrej Karpathy - "Let's build GPT from scratch"

- **What it covers:** Coding a GPT-style transformer from an empty file -- tokenization, attention, training loop, and text generation.
- **Why it's useful:** After reading the theory, this video makes it concrete. You see every component implemented in ~2 hours and understand how all the pieces fit together in practice.

---

## 5. Key GitHub Repos

| Repository | Link |
|------------|------|
| Dive into Deep Learning (d2l-en) | https://github.com/d2l-ai/d2l-en |
| Fast.ai Book (fastbook) | https://github.com/fastai/fastbook |

### Dive into Deep Learning (d2l-en)

- **What it covers:** An interactive, code-first deep learning textbook with implementations in PyTorch, TensorFlow, and JAX. Covers MLPs, CNNs, RNNs, attention mechanisms, optimization, and more.
- **Why it's useful:** Combines rigorous theory with runnable code. Each concept comes with exercises and notebooks you can experiment with immediately, making it ideal for self-study.

### Fast.ai Book (fastbook)

- **What it covers:** The complete Jupyter notebook companion to the Fast.ai course -- deep learning applications, ethics, deployment, and the fastai library internals.
- **Why it's useful:** Provides a full, executable curriculum. You can run every example, modify the code, and build real projects while following along with the course.

---

## Suggested Learning Path

1. **Refresh math** (1-2 weeks): Watch 3Blue1Brown Linear Algebra + Neural Networks playlists. Skim the MML book chapters on topics that feel rusty.
2. **Deepen Python skills** (ongoing): Work through the Python Data Science Handbook alongside your other learning.
3. **Build foundations** (3-4 weeks): Follow Karpathy's Zero to Hero series end-to-end, coding along.
4. **Understand Transformers** (1 week): Read the paper, study the Illustrated Transformer, then watch "Let's build GPT."
5. **Consolidate** (2-3 weeks): Pick either d2l-en or Fast.ai for a structured deep dive with projects.
