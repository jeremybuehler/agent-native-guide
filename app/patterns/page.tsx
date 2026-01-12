import { FileText, Folder, FolderOpen } from "lucide-react";

export default function PatternsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white">Implementation Patterns</h1>
                <p className="mt-4 text-xl text-zinc-400">
                    How to structure your application data to be accessible to both users and agents.
                </p>
            </div>

            <div className="space-y-24">
                {/* Files as Interface */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Files as the Universal Interface</h2>
                        <p className="text-zinc-400 mb-6">
                            In an agent-native app, the file system is the shared state. It allows for conflict-free collaboration,
                            portability, and transparency.
                        </p>

                        <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-6">
                            <h3 className="text-lg font-medium text-white mb-4">Recommended Directory Structure</h3>
                            <div className="font-mono text-sm text-zinc-300 space-y-2">
                                <div className="flex items-center gap-2">
                                    <FolderOpen className="h-4 w-4 text-blue-400" />
                                    <span>UseData/</span>
                                </div>
                                <div className="pl-6 flex items-center gap-2">
                                    <Folder className="h-4 w-4 text-blue-400" />
                                    <span>AgentMemory/</span>
                                    <span className="text-zinc-500 ml-2">// Working memory, logs</span>
                                </div>
                                <div className="pl-6 flex items-center gap-2">
                                    <Folder className="h-4 w-4 text-blue-400" />
                                    <span>Research/</span>
                                    <span className="text-zinc-500 ml-2">// User content</span>
                                </div>
                                <div className="pl-12 flex items-center gap-2">
                                    <Folder className="h-4 w-4 text-blue-400" />
                                    <span>books/</span>
                                </div>
                                <div className="pl-16 flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-zinc-400" />
                                    <span>war_and_peace.md</span>
                                </div>
                                <div className="pl-16 flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-zinc-400" />
                                    <span>notes.md</span>
                                </div>
                                <div className="pl-6 flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-zinc-400" />
                                    <span>preferences.md</span>
                                    <span className="text-zinc-500 ml-2">// Explicit user instructions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Context Injection */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">The Context.md Pattern</h2>
                        <p className="text-zinc-400 mb-6">
                            Agents need to know "Who am I?" and "What do I know?".
                            The `context.md` pattern maintains a portable working memory.
                        </p>

                        <div className="rounded-xl border border-white/10 bg-zinc-950 p-6 font-mono text-sm text-zinc-300">
                            <div className="text-purple-400 mb-2"># Context</div>

                            <div className="text-blue-400 mt-4">## Who I Am</div>
                            <div className="text-zinc-400">Reading assistant for the Every app.</div>

                            <div className="text-blue-400 mt-4">## What I Know About This User</div>
                            <ul className="list-disc list-inside text-zinc-400">
                                <li>Interested in military history</li>
                                <li>Prefers concise analysis</li>
                            </ul>

                            <div className="text-blue-400 mt-4">## Current State</div>
                            <div className="text-zinc-400">- No pending tasks</div>
                            <div className="text-zinc-400">- Last sync: 10 minutes ago</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
