import React from 'react';
import { Compass, Sparkles, MessageSquare, Flame } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-white/5 relative overflow-hidden bg-[#01000b] no-print">
      
      {/* Background soft ambient lights */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#1E66EC]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] bg-indigo-950/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full text-left">
        
        {/* Section Header - 100% Centered */}
        <div className="text-center mb-16 w-full flex flex-col items-center">
          <span className="font-mono text-brand-blue-light font-semibold uppercase tracking-[0.2em] text-[10px] py-1 px-3 bg-brand-blue/10 rounded-full border border-brand-blue/20 inline-block mb-4">
            Um pouco + sobre mim
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
            Quem é Victor Leal?
          </h2>
        </div>

        {/* Premium Format Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Box & Key Branded Citations (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6">
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-[#08071A] p-2.5 shadow-2xl w-full max-w-[340px]">
              
              {/* Photo placeholder with visual accent overlays */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#0e0c29]">
                <img
                  src="/src/assets/images/perfil.jpeg"
                  alt="Victor Leal - Redator, Copywriter e Jornalista"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Information Bottom overlay tab */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-5 text-center">
                  <span className="font-display font-extrabold text-white text-base tracking-wide block">Victor Leal</span>
                  <span className="font-mono text-[9px] text-[#1E66EC] block uppercase tracking-widest font-bold mt-0.5">Uberlândia, MG - Brasil 📍</span>
                </div>
              </div>
            </div>

            {/* Citations block 1: Curiosidade */}
            <div className="w-full max-w-[340px] p-5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-2 mt-2">
              <span className="font-mono text-[8px] tracking-wider uppercase text-white/30 block flex items-center gap-1">
                <Flame size={10} className="text-brand-blue-light animate-pulse" /> Direcionamento
              </span>
              <p className="font-serif italic font-medium text-white/90 text-sm sm:text-base text-left leading-relaxed">
                "A curiosidade é o que move minha carreira."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial narrative block & citations (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Trajetória integrada e foco estratégico
              </h3>
              <div className="h-[2px] w-12 bg-brand-blue-light rounded-full" />
            </div>

            <div className="space-y-6 font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              <p>
                Minha trajetória passa pelo jornalismo, marketing digital, copywriting, UX Writing e Inteligência Artificial.
              </p>
              
              <p>
                Ao longo da carreira atuei em agências, empresas de tecnologia, projetos institucionais e veículos de comunicação, sempre utilizando conteúdo estratégico para resolver problemas, gerar valor e criar conexões genuínas.
              </p>

              <p>
                Hoje combino dados, comportamento, pesquisa e IA para desenvolver conteúdos mais relevantes, claros e orientados a resultados.
              </p>
            </div>

            {/* Highlighted core drive blockquote citation 2: Boas histórias */}
            <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/15 relative text-left">
              <div className="absolute top-4 right-5 opacity-10 pointer-events-none">
                <MessageSquare size={60} className="text-brand-blue-light" />
              </div>
              <span className="font-mono text-[8px] text-[#1E66EC] uppercase tracking-wider block mb-2">Visão Profissional</span>
              <p className="font-sans text-xs sm:text-sm font-semibold text-brand-blue-light leading-relaxed italic">
                "Boas histórias têm o poder de transformar pessoas e negócios."
              </p>
            </div>

            {/* Quick interactive bullet list summarizing elements from user information */}
            <div className="pt-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-3">CONVICÇÕES E PILARES PRÁTICOS:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {[
                  'Escrita centrada nas pessoas',
                  'Linguagem simples & Plain Language',
                  'Forte autonomia orientada a dados',
                  'Curiosidade ativa para novas tecnologias',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
