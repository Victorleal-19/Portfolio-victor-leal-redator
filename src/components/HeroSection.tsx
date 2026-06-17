import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenCV: () => void;
}

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  const handleScrollToCases = () => {
    const casesSection = document.getElementById('cases');
    if (casesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = casesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center relative overflow-hidden bg-bg-deep no-print">
      
      {/* Centered Deep Ambient Glowing Background */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[20%] w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Status Tagline - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 hover:border-brand-blue/30 transition-all duration-305"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue-light animate-pulse" />
          <span className="font-mono text-[10px] text-brand-blue-light uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5">
            Disponível para novos desafios
          </span>
        </motion.div>

        {/* Clean Typographic Centered Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4.5xl sm:text-6xl md:text-[5rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6"
          id="hero-title"
        >
          Redator <span className="text-white/40 font-sans font-light">|</span> Copywriter <span className="text-white/40 font-sans font-light">|</span> <span className="text-brand-blue-light font-sans font-medium">Jornalista</span>
        </motion.h1>

        {/* Short, Objective Sub-Hero Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed mb-10"
          id="hero-subtitle"
        >
          Jornalista formado com experiência em marketing digital, copywriting, UX Writing e Inteligência Artificial. Combino dados, pesquisa, comportamento do usuário e IA para criar conteúdos mais relevantes, claros e orientados a resultados.
        </motion.p>

        {/* Highlighted statistics cards below description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12"
          id="hero-stats"
        >
          {[
            { value: '10+ anos', label: 'de experiência' },
            { value: '6+', label: 'áreas de atuação' },
            { value: '20+', label: 'cursos e certificações' },
            { value: 'Projetos', label: 'para empresas, startups e inst.' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="bg-[#08071A] hover:bg-[#0c0a29] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-brand-blue/30 hover:-translate-y-1"
            >
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white block">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] sm:text-xs text-white/50 block mt-1 tracking-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Primary Centered CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToCases}
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-light text-white font-semibold tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(30,102,236,0.3)] hover:shadow-[0_0_30px_rgba(30,102,236,0.55)] flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
            id="hero-cta-primary"
          >
            <span>Ver principais cases</span>
            <ArrowRight size={14} />
          </button>

          <a
            href="https://drive.google.com/file/d/1zdyFsLR1WkTTlIgtaxZtShYjB7tkLQVa/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#08071A]/80 hover:bg-white/5 text-white font-semibold border border-white/10 hover:border-white/25 tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
            id="hero-cta-secondary"
          >
            <Download size={14} className="text-brand-blue-light" />
            <span>Baixar currículo</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
