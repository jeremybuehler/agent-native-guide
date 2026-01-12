import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm text-zinc-500">
                    Built to explain the <Link href="https://every.to/guides/agent-native" target="_blank" className="text-zinc-300 hover:text-white underline underline-offset-4">Agent Native</Link> architecture.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com" target="_blank" className="text-zinc-500 transition-colors hover:text-white">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
