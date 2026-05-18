# Agent-Native Guide

> **An interactive, visual reference for building Agent-Native applications** — exploring the principles, patterns, anti-patterns, and mobile considerations of the new agentic software paradigm.

Inspired by the [Every.to Agent Native guide](https://every.to/guides/agent-native), this app brings the concepts to life with animated agent simulations and structured explanations.

---

## 🧠 What Is Agent-Native?

Agent-Native architecture is a design philosophy where software is built from the ground up to be operated by both humans *and* AI agents. Instead of bolting an AI layer onto a traditional app, agent-native apps treat the agent as a first-class user — giving it the same capabilities the human UI provides.

---

## 📚 Content Sections

| Route | Description |
|---|---|
| `/` | Hero landing page — introduces the paradigm with feature highlights |
| `/principles` | Core principles: Parity, Granularity, and Composability — with live animated agent simulations |
| `/patterns` | Implementation patterns: Files as Interface, Context.md, and recommended directory structure |
| `/mobile` | Mobile-specific challenges: iOS process killing, checkpoint/resume, cloud file state |
| `/anti-patterns` | Common mistakes: Agent as Router, Workflow-shaped Tools, Orphan UI Actions, Context Starvation |

---

## ✨ Key Features

- **Interactive Agent Simulator** — animated step-by-step replay of agent reasoning loops (thoughts → tool calls → results → responses)
- **Side-by-side comparisons** — granular (agent-native) vs. rigid (traditional) tool design
- **Dark UI** — full dark theme with Tailwind v4, Geist font, and subtle glassmorphism effects
- **Responsive navigation** — sticky navbar with mobile hamburger menu
- **Framer Motion animations** — smooth step-by-step log reveals in the simulator

---

## 🏗️ Project Structure

```
agent-native-guide/
├── app/
│   ├── layout.tsx              # Root layout — Navbar + Footer + Geist fonts
│   ├── globals.css             # Tailwind v4 + CSS custom properties
│   ├── page.tsx                # Home / hero page
│   ├── principles/page.tsx     # Core principles + AgentSimulator demos
│   ├── patterns/page.tsx       # Files-as-interface + Context.md pattern
│   ├── mobile/page.tsx         # Mobile agent challenges
│   └── anti-patterns/page.tsx  # Common anti-patterns
├── components/
│   ├── navbar.tsx              # Sticky responsive navbar
│   ├── footer.tsx              # Footer with external links
│   └── simulation/
│       └── agent-simulator.tsx # Animated agent loop simulator component
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config / postcss.config.mjs
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.1.1 | App framework (App Router) |
| [React](https://react.dev) | 19.2.3 | UI rendering |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Animations |
| [Lucide React](https://lucide.dev) | ^0.562 | Icons |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Conditional class merging |
| [Geist](https://vercel.com/font) | via next/font | Typography |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/jeremybuehler/agent-native-guide.git
cd agent-native-guide
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build & Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🧩 Core Concepts Covered

### 1. Parity
> Whatever the user can do through the UI, the agent should be able to achieve through tools.

If a React form action exists, a corresponding agent tool must exist. No orphaned UI actions.

### 2. Granularity
> Tools should be atomic primitives. Features are outcomes achieved by an agent in a loop.

Build `list_files` + `read_file`, not `weekly_review`. The agent composes them.

### 3. Composability & Emergence
> New features emerge from new prompts, not new code.

Atomic tools unlock workflows you never explicitly designed. Ship a smarter prompt, not a new feature.

### 4. Files as Interface
> The filesystem is the shared, conflict-free state layer between humans and agents.

Recommended structure:
```
UserData/
├── AgentMemory/       # Working memory, logs
├── Research/
│   └── books/
│       └── notes.md
└── preferences.md    # Explicit user instructions
```

### 5. Context.md Pattern
A portable `context.md` gives the agent its identity, user knowledge, and current state — injected into every system prompt.

---

## 📱 Mobile Considerations

- **iOS process killing** → checkpoint agent state after every step; resume from `latest_checkpoint.json`
- **Background execution** → use server-side agents for long-running loops; mobile app stays reactive
- **Cloud file state** → files are source of truth; UI updates reactively from synced file changes

---

## ⚠️ Anti-Patterns

| Anti-Pattern | Problem |
|---|---|
| **Agent as Router** | Treats the LLM like a regex classifier; skips reasoning |
| **Workflow-shaped Tools** | Bundles judgment into the tool (e.g., `analyze_and_organize`); removes agent flexibility |
| **Orphan UI Actions** | UI buttons with no corresponding tool — breaks Parity |
| **Context Starvation** | Agent lacks knowledge of available files/preferences; fails unnecessarily |

---

## 📄 License

MIT

---

## 🔗 References

- [Every.to — Agent Native Guide](https://every.to/guides/agent-native)
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
