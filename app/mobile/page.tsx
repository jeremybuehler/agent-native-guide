import { Smartphone, CloudDownload, RefreshCw } from "lucide-react";

export default function MobilePage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white">Mobile Agents</h1>
                <p className="mt-4 text-xl text-zinc-400">
                    The unique challenges of running agent-native apps on mobile devices.
                </p>
            </div>

            <div className="space-y-12">
                <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                    <div className="flex items-start gap-6">
                        <div className="rounded-lg bg-blue-500/10 p-3 text-blue-400">
                            <Smartphone className="h-8 w-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">The iOS Challenge</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                Mobile OSs kill background processes aggressively. An agent running a long loop might be killed mid-execution.
                                <br /><br />
                                <strong>Solution:</strong> Checkpoint and Resume. State must be persisted to the server/file system after every step.
                                When the app wakes up, the agent reads `latest_checkpoint.json` and resumes the loop.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6">
                        <div className="mb-4 text-green-400">
                            <CloudDownload className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Cloud File States</h3>
                        <p className="text-zinc-400">
                            Files are the source of truth. The mobile app syncs files, the agent operates on files in the cloud (or locally if powerful enough), and the UI updates reactively.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6">
                        <div className="mb-4 text-purple-400">
                            <RefreshCw className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Background Execution</h3>
                        <p className="text-zinc-400">
                            Use background tasks for short bursts, but rely on server-side agents for complex, long-running loops.
                            The "Agent" doesn't have to live on the phone to be "Agent-native".
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
