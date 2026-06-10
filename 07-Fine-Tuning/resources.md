# Fine-Tuning & Model Customization

## Core Concepts

### When to Fine-Tune vs RAG vs Prompt Engineering

| Approach | Best For | Trade-offs |
|----------|----------|------------|
| **Prompt Engineering** | Quick iteration, general tasks, when model already has knowledge | Limited by context window, no permanent learning |
| **RAG (Retrieval-Augmented Generation)** | Domain-specific knowledge, frequently changing data, factual accuracy | Requires vector DB infrastructure, retrieval latency |
| **Fine-Tuning** | Changing model behavior/style, teaching new formats, domain adaptation, improving consistency | Requires training data, compute costs, risk of catastrophic forgetting |

**Rule of thumb**: Start with prompt engineering, try RAG for knowledge, fine-tune for behavior.

### Full Fine-Tuning vs Parameter-Efficient Fine-Tuning (PEFT)

- **Full Fine-Tuning**: Updates all model parameters. Requires significant GPU memory (often multiple GPUs). Best results but highest cost.
- **PEFT**: Updates only a small subset of parameters. Much lower memory requirements. Nearly matches full fine-tuning performance in many cases.

### LoRA (Low-Rank Adaptation)

- Freezes the pre-trained model weights
- Injects trainable low-rank decomposition matrices into transformer layers
- Typically trains <1% of original parameters
- Adapters can be swapped at inference time
- Key hyperparameters: `r` (rank), `lora_alpha`, `target_modules`

### QLoRA (Quantized LoRA)

- Combines 4-bit quantization with LoRA
- Loads base model in 4-bit precision (NF4 quantization)
- Applies LoRA adapters on top of quantized model
- Enables fine-tuning 65B+ models on a single 48GB GPU
- Uses double quantization and paged optimizers for memory efficiency

---

## Essential Resources

| Resource | Description | Link |
|----------|-------------|------|
| **Hugging Face PEFT** | Library for parameter-efficient fine-tuning (LoRA, prefix tuning, etc.) | https://github.com/huggingface/peft |
| **Hugging Face TRL** | Transformer Reinforcement Learning - SFT, RLHF, DPO training | https://github.com/huggingface/trl |
| **Unsloth** | 2-5x faster fine-tuning with 80% less memory | https://github.com/unslothai/unsloth |
| **Axolotl** | Streamlined fine-tuning with YAML configs, supports many architectures | https://github.com/axolotl-ai-cloud/axolotl |

---

## Courses

- **DeepLearning.AI - Finetuning Large Language Models**
  - Covers when to fine-tune, data preparation, training, and evaluation
  - https://www.deeplearning.ai/courses/finetuning-large-language-models

- **Hugging Face Fine-tuning Guide**
  - Official documentation on training and fine-tuning with Transformers
  - https://huggingface.co/docs/transformers/training

- **Phil Schmid's Fine-Tuning Notebooks**
  - Practical notebooks covering various fine-tuning scenarios with PyTorch and Hugging Face
  - https://github.com/philschmid/deep-learning-pytorch-huggingface

---

## GitHub Repositories

- **LLM-Finetuning** - Collection of fine-tuning notebooks and guides for various LLMs
  - https://github.com/ashishpatel26/LLM-Finetuning

- **LLMs-from-scratch** - Build and fine-tune LLMs from the ground up, step by step
  - https://github.com/rasbt/LLMs-from-scratch

- **LLM Course** (fine-tuning section) - Comprehensive course covering the full LLM pipeline including fine-tuning
  - https://github.com/mlabonne/llm-course

---

## Advanced Topics

### RLHF (Reinforcement Learning from Human Feedback)

- Train a reward model from human preference data
- Use PPO (Proximal Policy Optimization) to align the LLM with the reward model
- Pipeline: SFT -> Reward Model Training -> PPO Training
- Used by ChatGPT, Claude, and other aligned models

### DPO (Direct Preference Optimization)

- Simplifies RLHF by eliminating the need for a separate reward model
- Directly optimizes the policy using preference pairs (chosen vs rejected)
- More stable training, fewer hyperparameters
- Increasingly popular alternative to full RLHF

### Dataset Preparation and Curation

- Quality over quantity (1000 high-quality examples can outperform 100K noisy ones)
- Formats: instruction/input/output, conversation, completion
- Tools: Argilla, Label Studio for annotation
- Synthetic data generation using stronger models

### Instruction Tuning

- Teaching models to follow instructions in a specific format
- Chat templates (ChatML, Llama format, etc.)
- System prompts and role-playing capabilities
- Multi-turn conversation fine-tuning

### Merging Models (MergeKit)

- Combine multiple fine-tuned models without additional training
- Methods: SLERP, TIES, DARE, linear interpolation
- Create specialized models by merging domain experts
- https://github.com/arcee-ai/mergekit

### Quantization (GPTQ, AWQ, GGUF)

| Method | Description | Use Case |
|--------|-------------|----------|
| **GPTQ** | Post-training quantization, GPU-focused | Fast GPU inference |
| **AWQ** | Activation-aware weight quantization | Better quality preservation |
| **GGUF** | CPU-friendly format used by llama.cpp | Local/edge deployment |

### Evaluation of Fine-Tuned Models

- Perplexity and loss curves
- Task-specific benchmarks (MMLU, HumanEval, etc.)
- Human evaluation and preference testing
- LLM-as-judge approaches
- A/B testing in production

---

## Practical Steps

### Setting Up Training Environment

**GPU Requirements (approximate)**:

| Model Size | Full Fine-Tune | QLoRA |
|------------|---------------|-------|
| 7B | 2x A100 80GB | 1x RTX 3090/4090 (24GB) |
| 13B | 4x A100 80GB | 1x A100 40GB |
| 70B | 8x A100 80GB | 1x A100 80GB |

### Free GPU Options

- **Google Colab** - Free tier offers T4 GPU (16GB), Pro offers A100
- **Kaggle Notebooks** - 2x T4 GPUs, 30 hours/week free

### Cloud GPU Providers

| Provider | Pros | Link |
|----------|------|------|
| **RunPod** | Serverless & on-demand, competitive pricing | runpod.io |
| **Lambda Labs** | Simple pricing, good A100/H100 availability | lambdalabs.com |
| **Vast.ai** | Marketplace model, cheapest options available | vast.ai |

### Experiment Tracking with W&B (Weights & Biases)

- Log training metrics, hyperparameters, and model artifacts
- Compare runs visually
- Integrated with Hugging Face Trainer via `report_to="wandb"`
- Free for personal/academic use
- https://wandb.ai

---

## Quick Start Checklist

1. [ ] Define your objective (what behavior to change/add)
2. [ ] Collect and curate training data (min 100-1000 examples)
3. [ ] Choose base model appropriate for your task
4. [ ] Set up environment (GPU, libraries, tracking)
5. [ ] Configure training (LoRA rank, learning rate, epochs)
6. [ ] Train and monitor loss curves
7. [ ] Evaluate against held-out test set
8. [ ] Iterate on data quality and hyperparameters
9. [ ] Quantize and deploy
