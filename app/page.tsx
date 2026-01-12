import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, FileCode2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>The New Software Paradigm</span>
          </div>

          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
            Agent-native Architectures
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            How to build apps after code ends. Discover the principles of building software that grows and improves with agentic capabilities.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/principles"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/patterns"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Explore Patterns
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-colors hover:border-blue-500/30">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Parity & Granularity</h3>
            <p className="text-zinc-400">
              Ensure agents can do everything users can do. Break features into atomic tools.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-colors hover:border-purple-500/30">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
              <FileCode2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Files as Interface</h3>
            <p className="text-zinc-400">
              Use the filesystem as a universal, conflict-free interface for state and context.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-colors hover:border-green-500/30">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Emergent Capability</h3>
            <p className="text-zinc-400">
              Compose atomic tools to create features that you never explicitly designed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
