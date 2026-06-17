import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences } from '../data';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';

export default function ExperienceSection() {
  // Start with the first experience expanded by default (Magalu)
  const [expandedId, setExpandedId] = useState<string | null>('exp-magalu');

  const toggleAccordion = (id: string) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const topExp = experiences[0];
  const otherExps = experiences.slice(1);

  const renderExperienceCard = (exp: typeof experiences[0], isTop: boolean) => {
    const isExpanded = expandedId === exp.id;
    return (
      <div
        key={exp.id}
        className={`rounded-2xl transition-all duration-300 border ${
          isExpanded
            ? 'bg-[#060517] border-brand-blue/30 shadow-[0_0_25px_rgba(0,71,188,0.1)]'
            : 'bg-brand-card hover:bg-white/[0.01] border-white/5'
        } overflow-hidden h-fit`}
      >
        {/* Accordion Trigger Header */}
        <button
          onClick={() => toggleAccordion(exp.id)}
          className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-4 min-w-0">
            {/* Small elegant icon bullet */}
            <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue-light border border-brand-blue/20 flex-shrink-0 animate-fade-in">
              <Briefcase size={18} />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                  {exp.role}
                </h3>
                {isTop && (
                  <span className="font-mono text-[8px] font-bold text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                    Mais recente
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-white/50 text-xs">
                <span className="font-semibold text-white/80">{exp.company}</span>
                <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline" />
                <span className="flex items-center gap-1 font-sans">
                  {exp.period}
                </span>
              </div>
            </div>
          </div>

          {/* Accordion Arrow rotatable indicator */}
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/55 transition-all duration-300 flex-shrink-0 ${
              isExpanded ? 'rotate-180 bg-brand-blue/25 border-brand-blue/30 text-white' : ''
            }`}
          >
            <ChevronDown size={16} />
          </div>
        </button>

        {/* Animated Accordion Expanded Body */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-white/5 space-y-5">
                
                {/* Skills / Badges used in this experience */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skillsUsed?.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[9px] text-[#1e66ec] bg-brand-blue/10 border border-brand-blue/15 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Grid representation inside card (two-column if top, single if secondary) */}
                <div className={`grid grid-cols-1 ${isTop ? 'md:grid-cols-2' : ''} gap-5 pt-1 text-left`}>
                  
                  {/* Column 1: Atividades e Responsabilidades */}
                  <div className="space-y-2.5">
                    <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-[#1e66ec]">
                      Atividades & Atuações
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.map((desc: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-white/75 text-xs sm:text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light mt-1.5 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Principais Resultados de Negócio */}
                  {exp.keyOutcomes && exp.keyOutcomes.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Abordagens & Colaborações
                      </h4>
                      <ul className="space-y-2">
                        {exp.keyOutcomes.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-white/75 text-xs sm:text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="experiences" className="py-24 border-b border-white/5 relative overflow-hidden bg-[#01000B] no-print">
      
      {/* Background decoration blur lights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-stretch">
        
        {/* Section Header - Centered */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-brand-blue-light font-semibold uppercase tracking-[0.2em] text-[10px] py-1 px-3 bg-brand-blue/10 rounded-full border border-brand-blue/20 inline-block mb-4">
            Trajetória e experiências
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none mb-6">
            Experiências recentes
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/65 leading-relaxed">
            Unindo redação publicitária de conversão, jornalismo analítico, design de conteúdo móvel e automatização com IA Generativa.
          </p>
        </div>

        {/* Accordion Layout with Top element full width, others in 2 columns */}
        <div className="space-y-6 w-full">
          {/* Top Main Experience: Magazine Luiza */}
          <div className="w-full">
            {renderExperienceCard(topExp, true)}
          </div>

          {/* Grid Layout of other experiences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {otherExps.map((exp) => renderExperienceCard(exp, false))}
          </div>
        </div>

      </div>
    </section>
  );
}
