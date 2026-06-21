import React, { useState } from "react";
import { COMPARISON_METRICS } from "../data";
import { Droplet, HelpCircle, HardDrive, Shield, CheckCircle } from "lucide-react";

export function MetricsDashboard() {
  const [promptMultiplier, setPromptMultiplier] = useState(1);
  const [selectedMetricIndex, setSelectedMetricIndex] = useState(0);

  // Scaled statistics
  const totalWaterClaude = (0.5 * promptMultiplier * 100).toFixed(0);
  const totalWaterYashraj = (0.015 * promptMultiplier).toFixed(2);
  const electricityKwhClaude = (0.04 * promptMultiplier * 100).toFixed(1);
  const electricityKwhYashraj = "0.00"; // biologically self-powered!

  const metricsCount = COMPARISON_METRICS.length;
  const cx = 160;
  const cy = 160;
  const maxRadius = 100;

  // Concentric hexagon ring coordinates
  const ringLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getHexPoints = (level: number) => {
    const points: string[] = [];
    for (let i = 0; i < metricsCount; i++) {
      const angle = i * (Math.PI / 3) - Math.PI / 2;
      const x = cx + maxRadius * level * Math.cos(angle);
      const y = cy + maxRadius * level * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  // Compute player vertices paths
  const getYashrajPoints = () => {
    const points: string[] = [];
    COMPARISON_METRICS.forEach((m, i) => {
      const angle = i * (Math.PI / 3) - Math.PI / 2;
      const val = m.yashraj / 100;
      const x = cx + maxRadius * val * Math.cos(angle);
      const y = cy + maxRadius * val * Math.sin(angle);
      points.push(`${x},${y}`);
    });
    return points.join(" ");
  };

  const getAiPoints = () => {
    const points: string[] = [];
    COMPARISON_METRICS.forEach((m, i) => {
      const angle = i * (Math.PI / 3) - Math.PI / 2;
      const val = m.claude / 100;
      const x = cx + maxRadius * val * Math.cos(angle);
      const y = cy + maxRadius * val * Math.sin(angle);
      points.push(`${x},${y}`);
    });
    return points.join(" ");
  };

  const getLabelPlacement = (index: number) => {
    const angle = index * (Math.PI / 3) - Math.PI / 2;
    const labelDist = 122; // Distance of labels from center
    const x = cx + labelDist * Math.cos(angle);
    const y = cy + labelDist * Math.sin(angle);
    
    let textAnchor = "middle";
    let dy = "0.33em";
    
    if (index === 0) {
      textAnchor = "middle";
      dy = "-0.7em";
    } else if (index === 3) {
      textAnchor = "middle";
      dy = "1.2em";
    } else if (index === 1 || index === 2) {
      textAnchor = "start";
      dy = "0.33em";
    } else if (index === 4 || index === 5) {
      textAnchor = "end";
      dy = "0.33em";
    }
    
    return { x, y, textAnchor, dy };
  };

  const selectedMetric = COMPARISON_METRICS[selectedMetricIndex] || COMPARISON_METRICS[0];

  return (
    <div id="metrics-dashboard" className="bg-[#fdfdfd] p-4 sm:p-6 md:p-8 relative">
      
      {/* Header and Title */}
      <div className="border-b-2 border-[#111111] pb-5 mb-8">
        <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tighter text-[#111111] flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse"></span>
          <span>Biological Spec Hex Parameter Grid</span>
        </h3>
        <p className="text-gray-500 text-xs mt-1.5 font-mono uppercase tracking-wide">
          An interactive comparison of human developer systems attributes against standard cloud-hosted LLM resources.
        </p>
      </div>

      {/* Interactive Estimator Slider Block */}
      <div className="bg-[#f4f4f4] border-2 border-[#111111] p-4 sm:p-5 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
        <div className="lg:col-span-6 font-mono">
          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest block">
            PROMPT MULTIPLIER SIMULATOR
          </span>
          <span className="text-sm font-bold text-[#111111] block mt-1">
            Running <strong className="text-[#dc2626] font-mono">{promptMultiplier * 100}</strong> typical engineering requests
          </span>
          <input
            type="range"
            min="1"
            max="100"
            value={promptMultiplier}
            onChange={(e) => setPromptMultiplier(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-300 rounded-none appearance-none cursor-pointer accent-[#111111] mt-4"
            id="simulation-range"
          />
        </div>

        {/* Scaled environmental counters */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l-2 border-gray-300 pt-4 lg:pt-0 lg:pl-6">
          <div className="font-mono">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black flex items-center">
              <Droplet className="w-3.5 h-3.5 text-blue-600 mr-1 shrink-0" />
              <span>Cooling Water Impact</span>
            </div>
            <div className="mt-1.5 flex flex-col space-y-0.5">
              <span className="text-xs text-[#dc2626] font-bold">
                AI MODEL: <strong className="text-[#111111] text-sm">{totalWaterClaude}L</strong> of fresh water
              </span>
              <span className="text-xs text-[#16a34a] font-bold">
                ME: <strong className="text-[#111111] text-sm">{totalWaterYashraj}L</strong> (Standard coffee flow)
              </span>
            </div>
          </div>

          <div className="font-mono">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black flex items-center">
              <HardDrive className="w-3.5 h-3.5 text-amber-500 mr-1 shrink-0" />
              <span>Electricity Drain</span>
            </div>
            <div className="mt-1.5 flex flex-col space-y-0.5">
              <span className="text-xs text-[#dc2626] font-bold">
                AI MODEL: <strong className="text-[#111111] text-sm">{electricityKwhClaude} kWh</strong> grid pull
              </span>
              <span className="text-xs text-[#16a34a] font-bold">
                ME: <strong className="text-[#111111] text-sm">{electricityKwhYashraj} kWh</strong> (Biologically fueled)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Radar Layout - Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Radar Chart Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
          <span className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest mb-4">
            Interactive Parameter Graph
          </span>
          
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square">
            <svg viewBox="0 0 320 320" className="w-full h-full select-none overflow-visible">
              
              {/* Concentric hexagonal grid rings */}
              {ringLevels.map((level, i) => (
                <polygon
                  key={i}
                  points={getHexPoints(level)}
                  fill="none"
                  stroke="#dddddd"
                  strokeWidth="1"
                  strokeDasharray={i === 4 ? "none" : "2,2"}
                />
              ))}

              {/* Axial spoke lines */}
              {COMPARISON_METRICS.map((_, i) => {
                const angle = i * (Math.PI / 3) - Math.PI / 2;
                const x = cx + maxRadius * Math.cos(angle);
                const y = cy + maxRadius * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="#cccccc"
                    strokeWidth="1"
                  />
                );
              })}

              {/* AI Model Rating Polygon Area (Red) */}
              <polygon
                points={getAiPoints()}
                fill="rgba(220, 38, 38, 0.15)"
                stroke="#dc2626"
                strokeWidth="2"
                className="transition-all duration-500"
              />

              {/* Yashraj Rating Polygon Area (Green) */}
              <polygon
                points={getYashrajPoints()}
                fill="rgba(22, 163, 74, 0.25)"
                stroke="#16a34a"
                strokeWidth="2.5"
                className="transition-all duration-500"
              />

              {/* Interaction points and hover targets */}
              {COMPARISON_METRICS.map((m, i) => {
                const angle = i * (Math.PI / 3) - Math.PI / 2;
                const yValue = m.yashraj / 100;
                const aiValue = m.claude / 100;
                
                const yX = cx + maxRadius * yValue * Math.cos(angle);
                const yY = cy + maxRadius * yValue * Math.sin(angle);
                
                const aiX = cx + maxRadius * aiValue * Math.cos(angle);
                const aiY = cy + maxRadius * aiValue * Math.sin(angle);

                return (
                  <g key={i} className="cursor-pointer" onClick={() => setSelectedMetricIndex(i)}>
                    {/* Yashraj point */}
                    <circle
                      cx={yX}
                      cy={yY}
                      r="4.5"
                      fill="#16a34a"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="transition-transform duration-300 hover:scale-150"
                    />
                    {/* AI point */}
                    <circle
                      cx={aiX}
                      cy={aiY}
                      r="4"
                      fill="#dc2626"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="transition-transform duration-300 hover:scale-150"
                    />
                  </g>
                );
              })}

              {/* Dimension Labels */}
              {COMPARISON_METRICS.map((m, i) => {
                const placement = getLabelPlacement(i);
                const isSelected = selectedMetricIndex === i;
                return (
                  <text
                    key={i}
                    x={placement.x}
                    y={placement.y}
                    textAnchor={placement.textAnchor}
                    dy={placement.dy}
                    onClick={() => setSelectedMetricIndex(i)}
                    className={`font-mono text-[10px] tracking-tight font-bold cursor-pointer transition-all uppercase select-none ${
                      isSelected 
                        ? "fill-[#dc2626] font-black scale-105 filter drop-shadow-sm" 
                        : "fill-[#333333] hover:fill-[#16a34a] text-gray-600"
                    }`}
                  >
                    {m.name}
                  </text>
                );
              })}
            </svg>
          </div>

          <div className="flex items-center space-x-6 mt-4 font-mono text-xxs tracking-wider uppercase font-extrabold pb-1">
            <span className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 bg-[#16a34a] border border-[#111111]"></span>
              <span>Yashraj (Me)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 bg-[#dc2626] border border-[#111111]"></span>
              <span>AI Model</span>
            </span>
          </div>
        </div>

        {/* Selected Parameter Details Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="font-mono text-xs uppercase text-gray-400 font-black tracking-widest pl-1 mb-1">
            // Select dimension on graph or from list
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {COMPARISON_METRICS.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMetricIndex(idx)}
                className={`p-2.5 border-2 font-mono text-[10px] font-black uppercase text-left transition-all ${
                  selectedMetricIndex === idx
                    ? "bg-[#111111] text-white border-[#111111] shadow-[2px_2px_0px_0px_rgba(22,163,74,1)]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#111111]"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Detailed side-by-side metric report card */}
          <div className="border-4 border-[#111111] bg-white p-5 sm:p-6 shadow-[5px_5px_0px_0px_rgba(17,17,17,1)]">
            <div className="flex justify-between items-baseline border-b-2 border-dashed border-gray-200 pb-3 mb-4">
              <span className="font-mono font-black text-xs text-gray-400 uppercase tracking-widest">
                Verification spec sheet
              </span>
              <span className="font-sans font-black text-sm uppercase text-[#111111] tracking-tight">
                {selectedMetric.name}
              </span>
            </div>

            <div className="space-y-4">
              {/* Me details */}
              <div className="font-mono border-l-4 border-[#16a34a] pl-3.5 py-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#16a34a] font-extrabold tracking-wide uppercase">Yashraj (Me)</span>
                  <span className="font-black bg-[#eafaf1] text-[#16a34a] px-2 py-0.5 border border-[#16a34a]">
                    {selectedMetric.yashraj}%
                  </span>
                </div>
                <p className="text-gray-900 text-xs sm:text-sm mt-1.5 font-sans leading-relaxed">
                  {selectedMetric.yashrajLabel}
                </p>
              </div>

              {/* AI model details */}
              <div className="font-mono border-l-4 border-[#dc2626] pl-3.5 py-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#dc2626] font-extrabold tracking-wide uppercase">AI Model</span>
                  <span className="font-black bg-[#fdf2f2] text-[#dc2626] px-2 py-0.5 border border-[#dc2626]">
                    {selectedMetric.claude}%
                  </span>
                </div>
                <p className="text-gray-900 text-xs sm:text-sm mt-1.5 font-sans leading-relaxed">
                  {selectedMetric.claudeLabel}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
