export const sampleMarkdown = `
# The Future of AI: Beyond Large Language Models

The landscape of Artificial Intelligence is shifting. While Large Language Models (LLMs) have dominated the conversation for the past few years, the next frontier is about **Agentic Workflows** and **Multimodal Reasoning**.

## Key Concepts

*   **Autonomous Agents**: Systems that can plan, use tools, and correct their own mistakes.
*   **Multimodal Learning**: AI that understands text, images, audio, and video simultaneously.
*   **Long-term Memory**: Breaking the context window barrier with RAG and persistent state.

### A Code Example

\`\`\`javascript
async function executeTask(objective) {
  const agent = new AutonomousAgent({
    model: "gemini-2.0-flash",
    tools: ["web-browser", "code-interpreter"]
  });

  const plan = await agent.plan(objective);
  return await agent.execute(plan);
}
\`\`\`

> "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it." — Mark Weiser

## Comparative Analysis

| Feature | LLMs (2023) | Agentic AI (2025) |
| :--- | :--- | :--- |
| Reasoning | Pattern Matching | Multi-step Planning |
| Tool Use | Plugins | Native Integration |
| Memory | Context Window | Long-term Vector DB |

### The Road Ahead

1.  **Safety & Alignment**: Ensuring agents act within ethical bounds.
2.  **Efficiency**: Running complex models on edge devices.
3.  **Human-AI Collaboration**: Moving from "chat" to "partnership".

---

Stay tuned for more updates on the SUMMR blog!
`;
