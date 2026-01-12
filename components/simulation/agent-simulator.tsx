"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Terminal, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export type LogStep = {
    type: "user" | "thought" | "call" | "result" | "response";
    content: string;
    toolName?: string;
    duration?: number;
};

interface AgentSimulatorProps {
    scenarioName: string;
    steps: LogStep[];
    title?: string;
    description?: string;
}

export function AgentSimulator({ scenarioName, steps, title, description }: AgentSimulatorProps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeLogs, setActiveLogs] = useState<LogStep[]>([]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isPlaying && currentStepIndex < steps.length - 1) {
            const nextStep = steps[currentStepIndex + 1];
            const delay = nextStep.duration || 1000;

            timeout = setTimeout(() => {
                setCurrentStepIndex((prev) => prev + 1);
                setActiveLogs((prev) => [...prev, nextStep]);
            }, delay);
        } else if (currentStepIndex >= steps.length - 1) {
            setIsPlaying(false);
        }

        return () => clearTimeout(timeout);
    }, [isPlaying, currentStepIndex, steps]);

    const handleStart = () => {
        setCurrentStepIndex(-1);
        setActiveLogs([]);
        setIsPlaying(true);
    };

    const handleReset = () => {
        setCurrentStepIndex(-1);
        setActiveLogs([]);
        setIsPlaying(false);
    };

    return (
        <div className="w-full rounded-xl border border-white/10 bg-zinc-900/50 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-4 py-3">
                <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-300">Agent Simulator: {title || scenarioName}</span>
                </div>
                <div className="flex gap-2">
                    {!isPlaying && currentStepIndex === -1 && (
                        <button
                            onClick={handleStart}
                            className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500"
                        >
                            <ArrowRight className="h-3.5 w-3.5" />
                            Run Agent
                        </button>
                    )}
                    {!isPlaying && currentStepIndex >= steps.length - 1 && (
                        <button
                            onClick={handleReset}
                            className="rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white"
                        >
                            Reset
                        </button>
                    )}
                    {isPlaying && (
                        <div className="flex items-center gap-2 text-xs text-blue-400">
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            Processing...
                        </div>
                    )}
                </div>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 font-mono text-sm space-y-4 scroll-smooth">
                {description && activeLogs.length === 0 && (
                    <div className="text-zinc-500 italic p-4 text-center">
                        {description}
                    </div>
                )}

                <AnimatePresence>
                    {activeLogs.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={clsx(
                                "rounded-lg p-3 border l-2",
                                step.type === "user" && "bg-blue-500/10 border-blue-500/20 text-blue-200",
                                step.type === "thought" && "bg-zinc-800/50 border-zinc-700/50 text-zinc-400 italic",
                                step.type === "call" && "bg-purple-500/10 border-purple-500/20 text-purple-300",
                                step.type === "result" && "bg-zinc-950 border-zinc-800 text-zinc-500 ml-4",
                                step.type === "response" && "bg-green-500/10 border-green-500/20 text-green-200"
                            )}
                        >
                            <div className="flex items-start gap-3">
                                {step.type === "user" && <div className="mt-0.5 rounded bg-blue-500/20 p-1"><ArrowRight className="h-3 w-3 text-blue-400" /></div>}
                                {step.type === "thought" && <div className="mt-0.5 rounded bg-zinc-700/50 p-1"><Bot className="h-3 w-3 text-zinc-400" /></div>}
                                {step.type === "call" && <div className="mt-0.5 rounded bg-purple-500/20 p-1"><Terminal className="h-3 w-3 text-purple-400" /></div>}
                                {step.type === "result" && <div className="mt-0.5 w-3" />}
                                {step.type === "response" && <div className="mt-0.5 rounded bg-green-500/20 p-1"><CheckCircle2 className="h-3 w-3 text-green-400" /></div>}

                                <div className="flex-1">
                                    {step.type === "call" && step.toolName && (
                                        <span className="mb-1 block text-xs uppercase tracking-wider text-purple-400/70">
                                            Tool Call: {step.toolName}
                                        </span>
                                    )}
                                    {step.type === "result" && (
                                        <span className="mb-1 block text-xs uppercase tracking-wider text-zinc-600">
                                            Result
                                        </span>
                                    )}
                                    <div className="whitespace-pre-wrap">{step.content}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
