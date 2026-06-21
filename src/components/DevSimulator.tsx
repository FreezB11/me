import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Mail, Clock, HelpCircle, Activity, Heart, Moon } from "lucide-react";

export function DevSimulator() {
  const [selectedConsultant, setSelectedConsultant] = useState<"none" | "claude" | "yashraj">("none");

  return (
    <div id="dev-simulator" className="bg-[#fdfdfd] p-4 sm:p-6 md:p-8 relative">
      
      <div className="border-b-2 border-[#111111] pb-4 mb-6">
        <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tighter text-[#111111] flex items-center space-x-2">
          <Moon className="w-5 h-5 text-[#dc2626] animate-pulse shrink-0" />
          <span>The 2 AM Crisis Simulator</span>
        </h3>
        <p className="text-gray-500 text-xs mt-1 font-mono uppercase tracking-wide">
          Your production server threw a segmentation fault panic. Choose your debugger assistant to resolve it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        
        {/* Choice A: Your AI Model */}
        <div
          onClick={() => setSelectedConsultant("claude")}
          className={`p-5 font-mono cursor-pointer transition-all flex flex-col justify-between rounded-none border-2 ${
            selectedConsultant === "claude"
              ? "bg-[#fff5f5] border-[#dc2626] shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]"
              : "bg-white border-[#111111] text-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:bg-[#f4f4f4]"
          }`}
          id="choice-sim-claude"
        >
          <div>
            <div className="flex items-center justify-between mb-3 border-b-2 border-dashed border-gray-200 pb-2">
              <span className="text-xs text-[#dc2626] font-black uppercase tracking-wider">Option A STATUS</span>
              <span className="text-[9px] font-bold text-gray-500 uppercase">AI Neural Net</span>
            </div>
            <h4 className="text-sm font-black uppercase text-[#111111] tracking-tight">Your AI Model (Throttled Mode)</h4>
            <p className="text-gray-600 text-xs mt-2.5 leading-normal font-sans">
              A billions-of-parameters remote model waiting to parse your diagnostic logs... as soon as your rate-limit cooling cycle refreshes.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-gray-200 flex justify-between items-center text-[11px] text-gray-500">
            <span className="font-semibold">Latency: ~12.5 seconds</span>
            <span className="text-[#dc2626] font-extrabold uppercase select-none">Prone to spirals</span>
          </div>
        </div>

        {/* Choice B: Yashraj */}
        <div
          onClick={() => setSelectedConsultant("yashraj")}
          className={`p-5 font-mono cursor-pointer transition-all flex flex-col justify-between rounded-none border-2 ${
            selectedConsultant === "yashraj"
              ? "bg-[#f5fff5] border-[#16a34a] shadow-[4px_4px_0px_0px_rgba(22,163,74,1)]"
              : "bg-white border-[#111111] text-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:bg-[#f4f4f4]"
          }`}
          id="choice-sim-yashraj"
        >
          <div>
            <div className="flex items-center justify-between mb-3 border-b-2 border-dashed border-gray-200 pb-2">
              <span className="text-xs text-[#16a34a] font-black uppercase tracking-wider">Option B STATUS</span>
              <span className="text-[9px] font-bold text-gray-500 uppercase">Biological</span>
            </div>
            <h4 className="text-sm font-black uppercase text-[#111111] tracking-tight">Yashraj Rao (Caffeinated Dev)</h4>
            <p className="text-gray-600 text-xs mt-2.5 leading-normal font-sans">
              A systems developer running compiled thoughts directly. Zero safety policy layers, zero rate-limiting, direct bare-metal debug.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-gray-200 flex justify-between items-center text-[11px] text-gray-500 font-mono">
            <span className="font-semibold">Latency: ~0.2ms (Direct Slack)</span>
            <span className="text-[#16a34a] font-extrabold uppercase select-none">Deterministic compiler</span>
          </div>
        </div>

      </div>

      {/* Simulator active log response window */}
      <div className="border-2 border-[#111111] p-5 bg-[#111111] text-[#fdfdfd] font-mono text-sm relative">
        {selectedConsultant === "none" && (
          <div className="text-center py-8 text-gray-400 block text-xs font-semibold uppercase tracking-wide">
            [⚠️ ACTIVE PORT CHECK] Choose one of the debug options above to initiate simulated crisis trace log arrays...
          </div>
        )}

        {selectedConsultant === "claude" && (
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-800 pb-2 text-[11px] text-gray-500 font-bold uppercase tracking-wide">
              <span className="flex items-center text-[#dc2626]">
                <Clock className="w-4 h-4 mr-1 animate-spin shrink-0" />
                <span>ACTIVE DEBATE LOGS // AI_MODEL_AGENT</span>
              </span>
              <span>TIME TIMEOUT: 14 SECONDS</span>
            </div>

            <div className="space-y-3.5 text-xs select-text">
              <div className="text-gray-300">
                <span className="text-blue-400 font-black uppercase mr-2">[BIO_CLIENT]:</span>
                "Urgent! My POSIX thread pool deadlock is dropping socket payloads in production queue!"
              </div>
              <div className="text-red-300 leading-relaxed pl-3.5 border-l-2 border-[#dc2626]">
                <span className="text-[#dc2626] font-black uppercase block mb-1">YOUR AI MODEL:</span>
                "I apologize, but as an AI assistant, I don't have direct memory-mapped hardware access. Interacting with active system mutex locks may violate federal usage policies. 
                Instead, I can write a 500-line mock React dashboard showing simulated water icons, or write a essay on mutex safety. Here are some warnings about licensing guidelines..."
              </div>
              <div className="text-gray-500 text-[10px] pt-1 uppercase">
                [SYSTEM WARNING] Context buffer limits reached. Cooling metrics failing. Datacenter rate-limiter active.
              </div>
            </div>
          </div>
        )}

        {selectedConsultant === "yashraj" && (
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-800 pb-2 text-[11px] text-gray-500 font-bold uppercase tracking-wide">
              <span className="flex items-center text-[#16a34a]">
                <Clock className="w-4 h-4 mr-1 animate-pulse shrink-0" />
                <span>ACTIVE PROCESS STREAM // HUMAN_ENGINE</span>
              </span>
              <span>TIME ELAPSED: 0.1 SECONDS</span>
            </div>

            <div className="space-y-3.5 text-xs select-text">
              <div className="text-gray-300">
                <span className="text-blue-400 font-black uppercase mr-2">[BIO_CLIENT]:</span>
                "Urgent! My POSIX thread pool deadlock is dropping socket payloads in production queue!"
              </div>
              <div className="text-green-300 leading-relaxed pl-3.5 border-l-2 border-[#16a34a]">
                <span className="text-[#16a34a] font-black uppercase block mb-1">YASHRAJ RAO:</span>
                "Ah, standard alignment race condition on your buffer loader. You forgot a memory fence barrier check on line 28 of ring.cpp. Mutex locking doesn't map cleanly onto your compilation tags. Replace the lock with std::atomic_bool and check standard memory fences. Let's patch it."
              </div>
              <div className="text-gray-500 text-[10px] pt-1 flex flex-col sm:flex-row sm:justify-between uppercase gap-1.5">
                <span>[BIOLOGICAL PERFORMANCE] Synapse Activity: Stable | Energy usage: 1 cup coffee</span>
                <span className="text-[#16a34a] font-bold">100% compiled & verified</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
