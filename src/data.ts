import { Project, ComparisonMetric } from "./types";

export const YASHRAJ_PROJECTS: Project[] = [
  {
    id: "tachyon",
    name: "tachyon",
    description: "A green threads scheduler in C with some ASM. Implements user-space multitasking, fiber rings, and low-overhead thread switching without default OS interruptions.",
    language: "C",
    githubUrl: "https://github.com/FreezB11"
  },
  {
    id: "inference-c",
    name: "inference.c",
    description: "A lightweight CPU-only LLM inference engine written in pure C. Dependency-free, standard math header calculations, and optimized floating-point matrix multiplications.",
    language: "C",
    githubUrl: "https://github.com/FreezB11"
  },
  {
    id: "koala",
    name: "koala",
    description: "A light-footprint autonomous AI agent architecture written from scratch. Focuses on streamlined deterministic sequence control loops and optimized token budgets.",
    language: "Python",
    githubUrl: "https://github.com/FreezB11"
  },
  {
    id: "psyduck",
    name: "psyduck",
    description: "A custom-trained, highly optimized 60M parameter language model. Balanced transformer block structures and rotary embedding parameters.",
    language: "Python",
    githubUrl: "https://github.com/FreezB11"
  },
  {
    id: "orcadb",
    name: "orcadb",
    description: "An ultra-fast, log-structured merge key-value database in Go. Implements stable Write-Ahead Logging (WAL) and Sorted String Tables (SSTables).",
    language: "Go",
    githubUrl: "https://github.com/FreezB11"
  },
  {
    id: "quic-lite",
    name: "quic-lite",
    description: "A lightweight custom implementation of the UDP-based QUIC transport protocol in Go. Implements multi-stream connections and custom sliding frame control.",
    language: "Go",
    githubUrl: "https://github.com/FreezB11"
  }
];

export const COMPARISON_METRICS: ComparisonMetric[] = [
  {
    name: "Startup Speed",
    yashraj: 92,
    claude: 10,
    yashrajLabel: "Sub-second action decisions ready instantly upon query request",
    claudeLabel: "14,500ms network handshake and cloud server spinup",
    category: "utility"
  },
  {
    name: "Memory Footprint",
    yashraj: 88,
    claude: 15,
    yashrajLabel: "Extremely lightweight focus state targeting target systems",
    claudeLabel: "Gigabytes of heavy runtime model processes",
    category: "utility"
  },
  {
    name: "2 AM Reliability",
    yashraj: 85,
    claude: 20,
    yashrajLabel: "Stable local troubleshooting and deep trace reasoning",
    claudeLabel: "Rate limits and daily quota depletion errors",
    category: "reliability"
  },
  {
    name: "Energy Footprint",
    yashraj: 94,
    claude: 5,
    yashrajLabel: "Fueled by basic organic meals and hot coffee",
    claudeLabel: "Massive megawatt grid load per cluster session",
    category: "environment"
  },
  {
    name: "Data Autonomy",
    yashraj: 100,
    claude: 15,
    yashrajLabel: "Zero cookies or telemetry; 100% hardware ownership based in brain",
    claudeLabel: "Prompt logs saved, analyzed, and recycled for training",
    category: "reliability"
  },
  {
    name: "Build Stability",
    yashraj: 90,
    claude: 30,
    yashrajLabel: "Deterministic compilation without sudden structural failure",
    claudeLabel: "Syntactic errors and loose hallucinations when confused",
    category: "reliability"
  }
];

export const FUN_ROASTS = [
  "Anthropic literally gets banned or restricted by policies, but I am entirely self-hosted inside my own organic skull.",
  "Every time Claude writes a Hello World app inside a container, a reservoir in Iowa loses a couple of gallons to cooling loop evaporation.",
  "Sit in dark silence alone at 2 AM while Claude-Code rate-limits your prompt, or DM me on Slack and expect a direct fix within minutes.",
  "My pointer dereferencing doesn't have a safety policy warning or content filter. I will compile your double-pointers without crying about it."
];
