import React from "react";
import { YASHRAJ_PROJECTS } from "../data";
import { FolderGit, ExternalLink, Code } from "lucide-react";

export function ProjectGrid() {
  const getLangBadgeStyle = (lang: string) => {
    switch (lang) {
      case "C": return "border-[#111111] text-[#dc2626] bg-[#fdf2f2]";
      case "C++": return "border-[#111111] text-indigo-600 bg-[#e0e7ff]";
      case "Go": return "border-[#111111] text-[#16a34a] bg-[#eafaf1]";
      case "Python": return "border-[#111111] text-amber-600 bg-[#fffbeb]";
      default: return "border-[#111111] text-[#111111] bg-gray-100";
    }
  };

  return (
    <div id="compiled-projects" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b-2 border-gray-200 pb-4 gap-2">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter text-[#111111] flex items-center space-x-2">
            <FolderGit className="w-5 h-5 text-[#16a34a] shrink-0" />
            <span>Systems Blueprint Catalog</span>
          </h3>
          <p className="text-gray-500 text-xs mt-1 font-mono uppercase tracking-wide">
            A catalog of custom systems components, local database runtimes, and lightweight custom implementations.
          </p>
        </div>
        <a 
          href="https://github.com/FreezB11" 
          target="_blank" 
          referrerPolicy="no-referrer"
          className="text-xs font-mono font-bold text-[#111111] hover:text-[#dc2626] mt-2 md:mt-0 flex items-center space-x-1.5 transition-colors underline"
          id="link-github-top"
        >
          <span>View GitHub Source ({YASHRAJ_PROJECTS.length}+ Systems Projects)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {YASHRAJ_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-white border-2 border-[#111111] p-5 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[6px_6px_0px_0px_rgba(22,163,74,1)] hover:-translate-y-0.5 transition-all flex flex-col justify-between h-full group"
            id={`project-card-${project.id}`}
          >
            <div>
              {/* Header with name and language */}
              <div className="flex items-start justify-between gap-3 mb-3.5">
                <h4 className="font-mono font-black text-base text-[#111111] uppercase tracking-tight flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>{project.name}</span>
                </h4>
                <span className={`text-[9px] px-2 py-0.5 border font-mono font-black uppercase ${getLangBadgeStyle(project.language)} rounded-none`}>
                  {project.language}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs font-sans text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Link to code */}
            <a
              href={project.githubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="mt-auto w-full py-2.5 bg-[#fbfbfb] hover:bg-[#111111] border-2 border-[#111111] text-[#111111] hover:text-white font-mono text-[11px] font-black text-center uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 select-none"
              id={`btn-proj-link-${project.id}`}
            >
              <span>Explore Code</span>
              <ExternalLink className="w-3 h-3 transition-transform group-hover:scale-110" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
