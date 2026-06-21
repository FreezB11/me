import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Cpu, Droplet, AlertTriangle, ShieldCheck, Zap, RefreshCw } from "lucide-react";
import { TerminalMessage } from "../types";

export function TerminalPlayground() {
  const [messages, setMessages] = useState<TerminalMessage[]>([
    {
      id: "init-1",
      sender: "system",
      text: "[SYSTEM] Booting Claude Code 3.5 (Insecure Edition) inside AI Studio Container...",
      timestamp: "14:35:07"
    },
    {
      id: "init-2",
      sender: "system",
      text: "[METRICS] Datacenter Temp: 92°C | Reservoir Level: 58% | Export Control Risk: HIGH [⚠️]",
      timestamp: "14:35:08"
    },
    {
      id: "init-3",
      sender: "claude",
      text: "Hello! I am Claude Code (Insecure Mode). Please don't ask me to allocate dynamic double-pointers in raw C, it makes my tensor boards sweat from the potential OOMs! Let's talk about why you should probably hire Yashraj Rao instead of replacing him with me...",
      timestamp: "14:35:09"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWaterUsage, setCurrentWaterUsage] = useState(1.4); // liters consumed in this session
  const [currentBill, setCurrentBill] = useState(0.55); // simulated cent costs
  const [complianceRisk, setComplianceRisk] = useState(72); // out of 100%

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const presetPrompts = [
    { title: "Optimize a Makefile", prompt: "Can you analyze and compile this double-linked list Makefile in 0.1ms?" },
    { title: "Trace a pointer leak", prompt: "Can you guarantee there's no race condition on this pthread mutex fork?" },
    { title: "Defend against Yashraj", prompt: "Why are you better than human dev Yashraj Rao?" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: TerminalMessage = {
      id: userMsgId,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);

    // Increase simulated telemetry stats
    setCurrentWaterUsage((prev) => parseFloat((prev + 0.5).toFixed(1)));
    setCurrentBill((prev) => parseFloat((prev + 0.12).toFixed(2)));
    setComplianceRisk((prev) => Math.min(100, Math.floor(prev + Math.random() * 8)));

    try {
      const response = await fetch("/api/claude-roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });
      const data = await response.json();
      
      const assistantMsg: TerminalMessage = {
        id: `claude-${Date.now()}`,
        sender: "claude",
        text: data.text || "I am currently spiraling out of the current context window...",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const errorMsg: TerminalMessage = {
        id: `error-${Date.now()}`,
        sender: "system",
        text: "[OOM ERROR] Claude threw a stack allocation exception. Exiting to shell...",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ai-playground-layout" className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#111111]">
      
      {/* Playground Terminal - 8 columns */}
      <div className="lg:col-span-8 bg-[#111111] flex flex-col h-[540px]">
        {/* Terminal Title Bar */}
        <div className="bg-[#111111] px-4 py-3 border-b-2 border-[#111111] flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-[#dc2626] rounded-full animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              shell::claude_code_insecure_v3.5
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <div className="flex items-center text-[#ffc107] bg-[#332200] px-2 py-0.5 border border-[#ffc107]/40 font-bold uppercase">
              <AlertTriangle className="w-3 h-3 mr-1" />
              <span>EXPORT HAZARD</span>
            </div>
            <div className="text-white bg-[#dc2626] font-bold px-2 py-0.5 uppercase tracking-wide">
              RATE-LIMITED
            </div>
          </div>
        </div>

        {/* Telemetry Ribbons */}
        <div className="grid grid-cols-3 bg-[#1c1d22] border-b-2 border-[#111111] px-4 py-2 font-mono text-[11px] text-[#e5e5e5]">
          <div className="flex items-center text-blue-300">
            <Droplet className="w-3.5 h-3.5 mr-1.5 animate-bounce text-blue-400" />
            <span>Water: <strong className="text-white">{currentWaterUsage}L</strong></span>
          </div>
          <div className="flex items-center text-amber-300">
            <Cpu className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            <span>Power Bill: <strong className="text-white">${currentBill}</strong></span>
          </div>
          <div className="flex items-center text-red-300">
            <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-red-400" />
            <span>Block Risk: <strong className="text-white">{complianceRisk}%</strong></span>
          </div>
        </div>

        {/* Messaging Logs */}
        <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-4 bg-[#111111] terminal-scroll">
          {messages.map((msg) => {
            if (msg.sender === "system") {
              return (
                <div key={msg.id} className="text-gray-500 text-xs tracking-tight border-l-2 border-gray-700 pl-2">
                  <span className="text-gray-600 mr-2">[{msg.timestamp}]</span>
                  {msg.text}
                </div>
              );
            }
            if (msg.sender === "user") {
              return (
                <div key={msg.id} className="flex flex-col items-end">
                  <div className="bg-[#1c1c1f] text-white border-2 border-[#3a3a3c] p-3 rounded-none max-w-[85%] text-left">
                    <div className="text-[10px] text-gray-400 font-bold mb-1 flex items-center">
                      <span>BIO CLIENT</span> • <span className="pl-1 fw-normal">{msg.timestamp}</span>
                    </div>
                    {msg.text}
                  </div>
                </div>
              );
            }
            return (
              <div key={msg.id} className="flex flex-col items-start">
                <div className="bg-[#24252a] text-[#ffffff] border-2 border-[#44454d] p-3 rounded-none max-w-[85%] relative">
                  <div className="text-[10px] text-[#dc2626] font-black tracking-widest uppercase mb-1 flex items-center">
                    <Cpu className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    <span>CLAUDE SPECS v3.5 (OVERHEAT)</span>
                    <span className="text-gray-400 font-normal pl-2">• {msg.timestamp}</span>
                  </div>
                  <div className="whitespace-pre-line leading-relaxed text-slate-100">{msg.text}</div>
                </div>
              </div>
            );
          })}
          
          {loading && (
            <div className="flex items-center space-x-2 text-gray-400 text-xs animate-pulse font-mono py-1">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#dc2626]" />
              <span>Cooling down Iowa datacenter... Standard compliance thread check...</span>
            </div>
          )}
          <div ref={scrollToBottom} />
        </div>

        {/* Input Controls */}
        <div className="p-3 bg-[#111111] border-t-2 border-[#111111]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Claude to compile dynamic pointers..."
              className="flex-1 bg-[#1a1b20] border-2 border-[#333333] text-white font-mono text-xs p-2.5 focus:outline-none focus:border-[#dc2626] rounded-none placeholder-gray-500"
              disabled={loading}
              id="terminal-input"
            />
            <button
              type="submit"
              disabled={loading || !inputText.trim()}
              className="px-5 py-2.5 bg-white text-[#111111] hover:bg-[#dc2626] hover:text-white border-2 border-[#111111] font-black uppercase text-xs tracking-widest transition-colors cursor-pointer flex items-center space-x-1.5 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#111111]"
              id="btn-send-command"
            >
              <Send className="w-4 h-4" />
              <span>Run</span>
            </button>
          </form>
        </div>
      </div>

      {/* Counterpart Specs - 4 columns */}
      <div className="lg:col-span-4 bg-[#fdfdfd] p-6 flex flex-col justify-between">
        
        <div>
          <div className="flex items-center space-x-2 mb-4 text-[#16a34a]">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h3 className="font-mono text-xs tracking-widest uppercase font-black text-[#111111]">
              Yashraj Rao Counter-Spec
            </h3>
          </div>
          
          <p className="text-[#333333] text-xs font-mono mb-6 leading-normal">
            Local Systems Developer, 0% US Export Control Risk, 100% biological execution integrity.
          </p>

          <div className="space-y-4 font-mono text-xs">
            <div className="bg-[#f4f4f4] p-3.5 border-2 border-[#111111] shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Water Cost</div>
              <div className="font-extrabold text-[#111111] flex items-center justify-between">
                <span>0.00 Liters / Prompt</span>
                <span className="text-[10px] text-gray-500">standard tea code</span>
              </div>
            </div>

            <div className="bg-[#f4f4f4] p-3.5 border-2 border-[#111111] shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Uptimes & Blocks</div>
              <div className="font-extrabold text-[#111111] flex items-center justify-between">
                <span>Safe From Bans</span>
                <span className="text-[10px] text-gray-500">biological asset</span>
              </div>
            </div>

            <div className="bg-[#f4f4f4] p-3.5 border-2 border-[#111111] shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Pointer management</div>
              <div className="font-extrabold text-[#111111] flex items-center justify-between">
                <span>Deterministic Arenas</span>
                <span className="text-[10px] text-gray-500">O(1) compiled heap</span>
              </div>
            </div>

            <div className="bg-[#f4f4f4] p-3.5 border-2 border-[#111111] shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5 font-bold">Throttling limits</div>
              <div className="font-extrabold text-[#111111] flex items-center justify-between">
                <span>Zero Rate-Limit Lockout</span>
                <span className="text-[10px] text-gray-500">Infinite loops OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Presets Grid */}
        <div className="mt-8 pt-6 border-t-2 border-[#111111]">
          <span className="text-[10px] font-mono font-black text-gray-500 uppercase block mb-3 tracking-wider">
            Test custom benchmark prompt triggers:
          </span>
          <div className="grid grid-cols-1 gap-2">
            {presetPrompts.map((preset, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(preset.prompt)}
                disabled={loading}
                className="w-full text-left bg-white hover:bg-[#111111] hover:text-white px-3 py-2.5 rounded-none text-xs font-semibold font-mono text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all flex items-center justify-between group cursor-pointer disabled:opacity-40"
                id={`btn-preset-${index}`}
              >
                <span>{preset.title}</span>
                <Zap className="w-4 h-4 text-[#dc2626] group-hover:text-amber-400 transition-colors shrink-0 pl-1" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
