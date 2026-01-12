import { AlertTriangle, XCircle } from "lucide-react";

export default function AntiPatternsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white">Anti-Patterns</h1>
                <p className="mt-4 text-xl text-zinc-400">
                    Common mistakes when building agentic applications.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                    <div className="mb-4 flex items-center gap-3 text-red-400">
                        <XCircle className="h-6 w-6" />
                        <h3 className="text-lg font-bold">Agent as Router</h3>
                    </div>
                    <p className="text-zinc-400">
                        Using the agent only to classify intent and then route to a hardcoded function.
                        This treats the agent like a glorified regex matcher and misses out on its reasoning capabilities.
                    </p>
                </div>

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                    <div className="mb-4 flex items-center gap-3 text-red-400">
                        <XCircle className="h-6 w-6" />
                        <h3 className="text-lg font-bold">Workflow-shaped Tools</h3>
                    </div>
                    <p className="text-zinc-400">
                        Creating tools like `analyze_and_organize` that bundle judgment into the tool.
                        Instead, provide `analyze` and `organize` as separate tools so the agent can compose them flexibly.
                    </p>
                </div>

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                    <div className="mb-4 flex items-center gap-3 text-red-400">
                        <XCircle className="h-6 w-6" />
                        <h3 className="text-lg font-bold">Orphan UI Actions</h3>
                    </div>
                    <p className="text-zinc-400">
                        Button clicks that do things the agent cannot replicate because no tool exists for it.
                        This breaks the "Parity" principle.
                    </p>
                </div>

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                    <div className="mb-4 flex items-center gap-3 text-red-400">
                        <XCircle className="h-6 w-6" />
                        <h3 className="text-lg font-bold">Context Starvation</h3>
                    </div>
                    <p className="text-zinc-400">
                        The agent fails because it doesn't know what files exist or what the user's preferences are.
                        Always inject available resources and capabilities into the system prompt.
                    </p>
                </div>
            </div>
        </div>
    );
}
