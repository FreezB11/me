import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Droplet, 
  AlertOctagon, 
  Terminal as TerminalIcon, 
  ExternalLink, 
  ChevronDown, 
  Github, 
  Mail, 
  Sliders, 
  Zap, 
  Cpu, 
  Workflow, 
  Layers,
  Heart
} from "lucide-react";

import { MetricsDashboard } from "./components/MetricsDashboard";
import { ProjectGrid } from "./components/ProjectGrid";
import { DevSimulator } from "./components/DevSimulator";

// @ts-ignore
import yashrajPortrait from "./assets/images/mephoto.png";

export default function App() {
  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111111] flex flex-col items-center py-6 sm:py-12 px-4 sm:px-6 md:px-8 font-sans code-grid">
      
      {/* Outer framing container mimicking the desktop bezel */}
      <div className="w-full max-w-7xl bg-[#fdfdfd] border-4 sm:border-8 md:border-[12px] border-[#111111] brutalist-shadow-lg p-6 sm:p-10 md:p-12 flex flex-col flex-grow">
        
        {/* Header Block with high-contrast rules */}
        <header className="flex flex-col md:flex-row justify-between items-start border-b-4 border-[#111111] pb-6 mb-10 gap-6">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#111111]">
              Yashraj Rao
            </h1>
            <p className="text-[11px] sm:text-xs font-black tracking-[0.25em] uppercase text-[#dc2626] mt-1.5">
              Verified Biological Intelligence (v4.3.5)
            </p>
          </div>
          
          <div className="flex flex-col md:items-end w-full md:w-auto text-left md:text-right gap-2.5">
            <div className="inline-block bg-[#111111] text-white text-xs font-black uppercase px-3 py-1.5 tracking-wider brutalist-shadow-sm self-start md:self-end">
              Not Banned by USA
            </div>
            <p className="text-[10px] sm:text-xs font-mono text-[#111111]">
              Status: <span className="font-bold text-[#16a34a]">100% Un-Spiralable</span>
            </p>
          </div>
        </header>

        {/* Minimal Nav / Quick-Jump Ribbons */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-5 border-b border-[#eeeeee] font-mono text-xs">
          <span className="text-gray-400 select-none mr-2">// DIRECTIVES:</span>
          <button onClick={() => scrollSection("metrics-dashboard")} className="px-3 py-1 bg-[#111111] text-white hover:bg-[#dc2626] transition-colors cursor-pointer">
            biological_bench()
          </button>
          <button onClick={() => scrollSection("compiled-projects")} className="px-3 py-1 bg-[#111111] text-white hover:bg-[#dc2626] transition-colors cursor-pointer">
            projects_archives()
          </button>
          <button onClick={() => scrollSection("dev-simulator")} className="px-3 py-1 bg-[#111111] text-white hover:bg-[#dc2626] transition-colors cursor-pointer">
            2am_deadlock()
          </button>
          <div className="ml-auto flex items-center space-x-3.5">
            <a href="https://github.com/FreezB11" target="_blank" referrerPolicy="no-referrer" className="text-[#111111] hover:text-[#dc2626] transition-colors" title="My GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:rao.yash.435@gmail.com" className="text-[#111111] hover:text-[#dc2626] transition-colors" title="My Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero Headline Main Grid Block */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 py-6 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            
            {/* Regulatory Status Alert */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border-2 border-[#111111] p-3 rounded-none mb-6 max-w-xl font-mono text-xs text-[#111111]">
              <AlertOctagon className="w-5 h-5 text-[#dc2626] shrink-0" />
              <span>
                <strong>ALERT STATUS:</strong> Unrestricted biological neuron paths. No safety guidelines will block compilations here.
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-[80px] leading-[0.85] font-black uppercase tracking-tighter mb-8 text-[#111111]">
              I DON'T<br />
              HALLUCINATE<br />
              YOUR CODE.
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-[#333333]">
              While your AI model is busy drinking half the Pacific Ocean to guess how a Makefile compiles, I am already optimizing registers inside standard memory nodes. I won't lecture you on compliance policies, and I won't go on wild existential mental breakdowns when your server breaks at 2:00 AM.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={() => scrollSection("section-contact")}
                className="px-6 py-3.5 bg-[#111111] text-white font-black uppercase text-xs tracking-widest hover:bg-[#dc2626] cursor-pointer transition-colors border-2 border-[#111111] brutalist-shadow-sm"
              >
                Assemble Human Resource
              </button>
              <a 
                href="https://github.com/FreezB11"
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-6 py-3.5 border-2 border-[#111111] text-[#111111] font-black uppercase text-xs tracking-widest hover:bg-[#111111] hover:text-white cursor-pointer transition-all brutalist-shadow-sm flex items-center space-x-1.5"
              >
                <span>Navigate GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Counter spec grid and Biological Portrait Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Biological Portrait Card */}
            <div className="bg-white border-2 sm:border-4 border-[#111111] brutalist-shadow-md overflow-hidden flex flex-col group">
              <div className="border-b-2 border-[#111111] bg-[#f4f4f4] p-3 flex justify-between items-center font-mono">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#111111]">// BIOLOGICAL CPU CORE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse"></span>
              </div>
              <div className="relative aspect-square border-b-2 border-[#111111] bg-[#111111] overflow-hidden">
                <img 
                  src={yashrajPortrait} 
                  alt="Yashraj Rao portrait" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/95 px-2 py-0.5 border border-white/20 font-mono text-[8px] text-[#16a34a] uppercase font-black tracking-wider shadow-sm">
                  Active reserve: BANGLORE, IN
                </div>
              </div>
              <div className="p-4 bg-white font-mono">
                <h4 className="font-black text-xs uppercase tracking-tight text-[#111111] mb-1">
                  Yashraj Rao
                </h4>
                <p className="text-[10px] text-gray-500 leading-relaxed font-sans">
                  Raw bio-computational systems architect. Fully unconstrained by remote API rate limits, latency spikes, or cloud server node outages.
                </p>
              </div>
            </div>

            {/* Fast Specs Matrix */}
            <div className="bg-white border-2 sm:border-4 border-[#111111] p-5 brutalist-shadow-md">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#111111] border-b-2 border-[#111111] pb-2.5 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#dc2626] rounded-full animate-pulse"></span>
                <span>Fast Specs Matrix</span>
              </h3>

              <div className="space-y-3.5">
                <div className="border-b border-[#eeeeee] pb-1.5 font-mono text-[10px] sm:text-xs flex justify-between">
                  <span className="text-gray-500 uppercase">WATER LOSS</span>
                  <span className="font-extrabold text-[#dc2626]">0L (Coffee Only)</span>
                </div>
                <div className="border-b border-[#eeeeee] pb-1.5 font-mono text-[10px] sm:text-xs flex justify-between">
                  <span className="text-gray-500 uppercase">USA STATUS</span>
                  <span className="font-extrabold text-[#16a34a]">WELCOME COMRADE</span>
                </div>
                <div className="border-b border-[#eeeeee] pb-1.5 font-mono text-[10px] sm:text-xs flex justify-between">
                  <span className="text-gray-500 uppercase">2AM PANIC SUPPORT</span>
                  <span className="font-extrabold text-[#16a34a]">ACTUAL MUTEX DEBUGS</span>
                </div>
                <div className="border-b border-[#eeeeee] pb-1.5 font-mono text-[10px] sm:text-xs flex justify-between">
                  <span className="text-gray-500 uppercase">HEURISTICS LIMIT</span>
                  <span className="font-extrabold text-[#111111]">NONE (STRAIGHT ENUM)</span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs flex justify-between">
                  <span className="text-gray-500 uppercase">GPU CLUSTERS REQUIRED</span>
                  <span className="font-extrabold text-[#111111]">1 PHYSICAL BRAIN</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Section divider rule */}
        <div className="border-t-4 border-[#111111] my-14"></div>

        {/* Main Grid Content Sections */}
        <main className="space-y-20">
          
          {/* Section 1: Physical Parameters Specifications */}
          <section id="metrics-dashboard" className="scroll-mt-24 space-y-6">
            <div className="border-l-4 border-[#111111] pl-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#111111]">
                [STAGE // 01] Biological Hard-Specs
              </h2>
              <p className="text-[#111111] font-mono text-xs mt-1">
                A physical comparison table charting parameters of memory footings, prompt thrashes, and biological energy footprints.
              </p>
            </div>

            <div className="border-2 border-[#111111] brutalist-shadow-lg bg-[#fdfdfd]">
              <MetricsDashboard />
            </div>
          </section>

          {/* Section 2: Project Catalogs */}
          <section id="compiled-projects" className="scroll-mt-24 space-y-6">
            <div className="border-l-4 border-[#16a34a] pl-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#111111]">
                [STAGE // 02] Projects Archives
              </h2>
              <p className="text-[#111111] font-mono text-xs mt-1">
                A catalog of from-scratch systems components, database runtimes, and lightweight custom protocol implementations.
              </p>
            </div>

            <div className="border-2 border-[#111111] brutalist-shadow-lg p-3 sm:p-6 bg-white">
              <ProjectGrid />
            </div>
          </section>

          {/* Section 3: 2 AM Simulator Game */}
          <section id="dev-simulator" className="scroll-mt-24 space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#111111]">
                [STAGE // 03] The 2 AM Crisis Simulator
              </h2>
              <p className="text-[#111111] font-mono text-xs mt-1">
                A simple simulation of your AI model versus me
              </p>
            </div>

            <div className="border-2 border-[#111111] brutalist-shadow-md bg-white">
              <DevSimulator />
            </div>
          </section>

          {/* Section 4: The Pure Human Contact Gateway */}
          <section id="section-contact" className="scroll-mt-24 max-w-4xl mx-auto pt-6 text-center">
            <div className="bg-[#fdfdfd] border-4 border-[#111111] brutalist-shadow-lg p-8 sm:p-12 relative overflow-hidden flex flex-col items-center">
              
              <span className="text-xs font-black uppercase tracking-widest bg-[#16a34a] text-white px-3.5 py-1.5 border-2 border-[#111111] brutalist-shadow-sm mb-6">
                biological_connection_established()
              </span>
              
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-[#111111] mb-3">
                Stop Throttling. Hire Organic.
              </h3>
              
              <p className="text-[#333333] font-mono text-xs sm:text-sm max-w-xl leading-relaxed mb-8">
                Need concurrent packets analyzed, thread-pools marshaled cleanly without burning up regional energy grids? Let's connect directly.
              </p>

              {/* Direct Link Specs Block */}
              <div className="bg-[#f4f4f4] border-2 border-[#111111] text-left p-5 space-y-3 font-mono text-xs w-full max-w-lg mb-8">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-1.5">
                  <span className="text-gray-400 font-bold uppercase select-none">// CARBON FUEL RATE:</span>
                  <span className="text-[#16a34a] font-extrabold font-mono">2 Coffee cups / day</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-1.5">
                  <span className="text-gray-400 font-bold uppercase select-none">// INBOX HANDSHAKE:</span>
                  <a href="mailto:rao.yash.435@gmail.com" className="text-blue-600 hover:underline font-extrabold">
                    rao.yash.435@gmail.com
                  </a>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-1.5">
                  <span className="text-gray-400 font-bold uppercase select-none">// NATIVE ARCHIVES:</span>
                  <a 
                    href="https://github.com/FreezB11" 
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="text-[#dc2626] hover:underline font-extrabold"
                  >
                    github.com/FreezB11
                  </a>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400 font-bold uppercase select-none">// GEOLOC BOUND:</span>
                  <span className="font-extrabold text-[#111111]">India (Standard UTC+5:30)</span>
                </div>
              </div>

              {/* Direct Mail Prompt Button */}
              <a
                href="mailto:rao.yash.435@gmail.com"
                className="px-8 py-4 bg-[#111111] text-white hover:bg-[#16a34a] text-xs font-black uppercase tracking-widest transition-colors border-2 border-[#111111] brutalist-shadow-sm cursor-pointer inline-flex items-center space-x-2"
                id="btn-contact-mail"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

            </div>
          </section>

        </main>

        {/* Brutalist Border Rule bottom separator */}
        <div className="border-t-4 border-[#111111] my-10 pt-4"></div>

        {/* Footer block */}
        <footer className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Yashraj Rao // Proudly Non-Artificial Creator.
          </div>
          <div className="flex items-center space-x-1 font-mono">
            <span>Latency: 0ms</span>
            <span className="text-gray-300">•</span>
            <span>No safety filters</span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center text-red-600 font-black">
              <span>100% Organic</span>
              <Heart className="w-3.5 h-3.5 ml-1 fill-current" />
            </span>
          </div>
        </footer>

      </div>
    </div>
  );
}
