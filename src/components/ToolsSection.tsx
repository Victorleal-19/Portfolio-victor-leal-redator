import React from 'react';
import { Bot, Pencil, BarChart2, Globe, Code, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function ToolsSection() {
  const columns = [
    {
      title: 'AI & CONTENT',
      icon: Bot,
      id: 'ai-content',
      groups: [
        ['Claude'],
        ['Claude Code'],
        ['ChatGPT', 'Gemini'],
        ['NotebookLM'],
        ['Manus']
      ]
    },
    {
      title: 'UX DESIGN & RESEARCH',
      icon: Pencil,
      id: 'ux-design',
      groups: [
        ['Figma', 'FigJam'],
        ['Figma Make', 'Miro'],
        ['Canva', 'Photoshop'],
        ['CapCut', 'Maze'],
        ['Hotjar', 'UXCam']
      ]
    },
    {
      title: 'SEO & ANALYTICS',
      icon: BarChart2,
      id: 'seo-analytics',
      groups: [
        ['Google Trends'],
        ['Ubersuggest'],
        ['Google Analytics'],
        ['Google Search Console'],
        ['SEMrush']
      ]
    },
    {
      title: 'DOCUMENTATION &\nCOLLABORATION',
      icon: Globe,
      id: 'collab-docs',
      groups: [
        ['Notion', 'Confluence'],
        ['Zeroheight'],
        ['Google Workspace'],
        ['Slack', 'Discord'],
        ['Asana', 'Trello']
      ]
    },
    {
      title: 'DEVELOPMENT & VIBE\nCODING',
      icon: Code,
      id: 'dev-coding',
      groups: [
        ['VS Code'],
        ['Claude Code'],
        ['Codex'],
        ['Google AI Studio'],
        ['Lovable', 'Antigravity'],
        ['Voiceflow', 'Vercel'],
        ['Netlify']
      ]
    }
  ];

  return (
    <section id="tools" className="py-24 border-b border-white/5 relative overflow-hidden bg-[#01000b] no-print">
      
      {/* Background neon soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-blue/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Stack de <span className="text-brand-blue-light">Ferramentas</span>
          </h2>
        </div>

        {/* 5-Column Side-by-Side Grid layout corresponding to physical columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6 sm:gap-x-8 w-full text-left items-start">
          {columns.map((col) => {
            const IconComponent = col.icon;
            return (
              <div key={col.id} className="flex flex-col w-full">
                {/* Column Header */}
                <div className="flex items-center gap-3 mb-6 min-h-[44px]">
                  <div className="w-8 h-8 rounded-lg bg-[#0e0c2d] border border-brand-blue/20 flex items-center justify-center text-brand-blue-light flex-shrink-0">
                    <IconComponent size={15} />
                  </div>
                  <h3 className="font-display font-bold text-[10px] sm:text-[11px] tracking-wider text-white uppercase leading-snug whitespace-pre-line">
                    {col.title}
                  </h3>
                </div>

                {/* Sub-rows/groups of pills */}
                <div className="space-y-2.5 w-full">
                  {col.groups.map((group, groupIdx) => (
                    <div key={groupIdx} className="flex flex-wrap gap-2 w-full">
                      {group.map((tool) => (
                        <div
                          key={tool}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/5 bg-[#0C0B25]/40 hover:bg-[#0E0D2C] hover:border-[#1E66EC]/40 transition-all duration-300 cursor-default select-none shadow-sm group"
                        >
                          {/* Pulsing blue bullet dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1E66EC] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#A2A2B5] tracking-wide group-hover:text-white transition-colors duration-300">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom footer box */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col md:flex-row items-center gap-4 justify-between w-full">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue-light border border-brand-blue/20 flex-shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="font-display font-semibold text-white text-xs sm:text-sm block">Autonomia e adaptação em tempo recorde</span>
              <span className="font-sans text-[11px] sm:text-xs text-white/50 block">Caso o seu tempo utilize outra esteira de tarefas corporativas ou design system, integro e adapto meu fluxo de escrita no primeiro sprint.</span>
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-mono font-bold text-brand-blue-light hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0 mt-3 md:mt-0"
          >
            Quero agendar um papo <ArrowRight size={12} />
          </button>
        </div>

      </div>
    </section>
  );
}
