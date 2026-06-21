export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  githubUrl: string;
}

export interface ComparisonMetric {
  name: string;
  yashraj: number; // custom rating or performance score
  claude: number;
  yashrajLabel: string;
  claudeLabel: string;
  category: "utility" | "environment" | "reliability";
}

export interface TerminalMessage {
  id: string;
  sender: "user" | "claude" | "system";
  text: string;
  timestamp: string;
}
