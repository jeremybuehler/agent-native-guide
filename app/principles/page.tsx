"use client";

import { AgentSimulator, LogStep } from "@/components/simulation/agent-simulator";

const granularScenario: LogStep[] = [
    { type: "user", content: "Review files modified this week. Based on incomplete items, suggest 3 priorities.", duration: 1000 },
    { type: "thought", content: "I need to find files modified recently and look for incomplete items.", duration: 1500 },
    { type: "call", toolName: "list_files", content: "list_files(recursive=true, modified_after='2025-10-20')", duration: 1200 },
    { type: "result", content: "['/notes/project-alpha.md', '/tasks/todo.md', '/daily/2025-10-24.md']", duration: 800 },
    { type: "thought", content: "Okay, I see the files. I'll read the todo list and the project notes.", duration: 1500 },
    { type: "call", toolName: "read_file", content: "read_file('/tasks/todo.md')", duration: 1200 },
    { type: "result", content: "- [x] Email client\n- [ ] Finish slide deck\n- [ ] Review PR #123", duration: 1000 },
    { type: "thought", content: "Found incomplete items. Now verifying context in project-alpha.", duration: 1500 },
    { type: "call", toolName: "read_file", content: "read_file('/notes/project-alpha.md')", duration: 1200 },
    { type: "result", content: "# Project Alpha\nDeadline for slide deck is Friday. Client meeting Monday.", duration: 1000 },
    { type: "thought", content: "I have enough information. Slide deck is urgent (Friday). PR is likely important.", duration: 1500 },
    { type: "response", content: "Based on your files, here are 3 priorities:\n1. **Finish slide deck** (Deadline: Friday)\n2. **Review PR #123** (Pending)\n3. Prepare for Monday's client meeting", duration: 1000 },
];

const rigidScenario: LogStep[] = [
    { type: "user", content: "Review files modified this week. Based on incomplete items, suggest 3 priorities.", duration: 1000 },
    { type: "thought", content: "I have a 'summarize_week' tool. I hope it does exactly what the user wants.", duration: 1500 },
    { type: "call", toolName: "summarize_week", content: "summarize_week()", duration: 1200 },
    { type: "result", content: "Error: Tool 'summarize_week' only returns a text summary, it does not extract priorities or check specific deadlines.", duration: 1000 },
    { type: "thought", content: "I can't inspect the files myself because I don't have atomic tools like 'read_file'. I'm stuck.", duration: 1500 },
    { type: "response", content: "I'm sorry, I can only provide a general weekly summary. I cannot identify specific priorities.", duration: 1000 },
];

export default function PrinciplesPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white">Core Principles</h1>
                <p className="mt-4 text-xl text-zinc-400">
                    The foundation of Agent-native architecture relies on giving agents the right primitives.
                </p>
            </div>

            <div className="space-y-24">
                {/* Parity */}
                <section>
                    <div className="mb-8 border-l-2 border-blue-500 pl-6">
                        <h2 className="text-2xl font-bold text-white">1. Parity</h2>
                        <p className="mt-2 text-zinc-400">
                            Whatever the user can do through the UI, the agent should be able to achieve through tools.
                            This is the golden rule. If an action exists in your detailed React form, a corresponding specific tool must exist for the agent.
                        </p>
                    </div>
                </section>

                {/* Granularity */}
                <section>
                    <div className="mb-8 border-l-2 border-purple-500 pl-6">
                        <h2 className="text-2xl font-bold text-white">2. Granularity</h2>
                        <p className="mt-2 text-zinc-400">
                            Tools should be atomic primitives. Features are outcomes achieved by an agent operating in a loop.
                            Instead of building a "Weekly Review" feature, build `list_files` and `read_file` tools.
                            The agent composes them to achieve the outcome.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-lg font-medium text-green-400">Agent-native Approach (Atomic Tools)</h3>
                            <AgentSimulator
                                scenarioName="Granular Tools"
                                title="Granular Loop"
                                steps={granularScenario}
                                description="The agent uses basic file ops to satisfy a complex, novel request."
                            />
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-medium text-red-400">Traditional/Rigid Approach</h3>
                            <AgentSimulator
                                scenarioName="Rigid Tools"
                                title="Rigid Workflow"
                                steps={rigidScenario}
                                description="The agent relies on a specific 'feature' tool that doesn't match the user's exact need."
                            />
                        </div>
                    </div>
                </section>

                {/* Composability */}
                <section>
                    <div className="mb-8 border-l-2 border-green-500 pl-6">
                        <h2 className="text-2xl font-bold text-white">3. Composability & Emergence</h2>
                        <p className="mt-2 text-zinc-400">
                            With atomic tools, you can create new features just by writing new prompts.
                            The agent can accomplish things you didn't explicitly design for (Emergent Capability).
                            You don't ship new code for every new user workflow; you just ship a smarter agent or a new prompt.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
