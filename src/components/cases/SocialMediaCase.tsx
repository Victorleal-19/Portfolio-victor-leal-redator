import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Compass, AlertCircle, Target, CheckCircle2, Award } from 'lucide-react';

interface SocialMediaCaseProps {
  onBack: () => void;
}

export default function SocialMediaCase({ onBack }: SocialMediaCaseProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <article className="min-h-screen bg-[#01000B] text-white pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Breadcrumb & Navigation */}
      <div className="max-w-4xl mx-auto mb-10 relative z-10 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-semibold text-[#A2A2B5] hover:text-white transition-colors py-2 px-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          Voltar para Home
        </button>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#A2A2B5]/80">
          <span>Cases</span>
          <span>/</span>
          <span className="text-brand-blue-light font-bold">Social Media</span>
        </div>
      </div>

      {/* Hero Header Block */}
      <header className="max-w-4xl mx-auto mb-16 relative z-10 text-left">
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-blue-light bg-[#1E66EC]/10 border border-[#1E66EC]/25 px-3.5 py-1.5 rounded-full font-bold">
            ✨ CASE DE DESTAQUE
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium">
            CONTENT STRATEGY
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#A2A2B5] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium">
            CAMPANHA INSTITUCIONAL
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 whitespace-normal">
          Social Media e Estratégia de Conteúdo para Redes Sociais
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#A2A2B5] leading-relaxed max-w-3xl mb-10">
          Planejamento de marcas, calendários editoriais autorais, storytelling e gestão de audiência corporativa e institucional com foco em engajamento real.
        </p>

        {/* Featured Case Banner Cover Image */}
        <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/9] mb-12 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" 
            alt="Social Media e Estratégia" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01000b] via-transparent to-transparent" />
        </div>

        {/* Resumo Box */}
        <div className="bg-[#08071A]/90 border border-white/5 p-6 sm:p-8 rounded-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Sparkles size={80} className="text-white" />
          </div>
          <h2 className="font-display text-sm font-bold tracking-widest text-brand-blue-light uppercase mb-4">
            Resumo
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed">
            Atuei na criação de estratégias de conteúdo e gestão de redes sociais para diferentes segmentos, desenvolvendo conteúdos voltados para engajamento, fortalecimento de marca e relacionamento com o público. Ao longo dessa experiência, produzi conteúdos para empresas como Lunar Alimentos, Planalto Ovos, IGEP Clínica e também para a Universidade Federal de Uberlândia (UFU), participando da estratégia digital de uma campanha institucional de reeleição.
          </p>
        </div>
      </header>

      {/* Main Narrative Content Sections */}
      <main className="max-w-4xl mx-auto relative z-10 space-y-16">
        
        {/* Contexto Section */}
        <section className="space-y-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Compass className="text-brand-blue-light" size={24} />
            Contexto
          </h3>
          <div className="border border-white/5 bg-[#08071A]/40 p-6 sm:p-8 rounded-2xl">
            <p className="font-sans text-[#A2A2B5] text-sm sm:text-base leading-relaxed">
              As redes sociais se tornaram um dos principais pontos de contato entre marcas e pessoas. Nesse cenário, o desafio era criar conteúdos capazes de gerar interesse, engajamento e conexão com diferentes públicos, transformando temas complexos em mensagens mais claras, relevantes e acessíveis. Cada projeto possuía objetivos específicos, exigindo adaptações de linguagem, formato e estratégia de conteúdo.
            </p>
          </div>
        </section>

        {/* Meu Papel Section */}
        <section className="space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <AlertCircle className="text-brand-blue-light" size={24} />
            Meu papel
          </h3>
          <div className="bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-2xl">
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              Atuei como Social Media responsável por:
            </p>
            {/* Grid layout of beautiful cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Planejamento de conteúdo',
                'Criação de calendários editoriais',
                'Produção de posts para redes sociais',
                'Copywriting para campanhas digitais',
                'Estratégia de comunicação',
                'Gestão de conteúdo institucional',
                'Construção de narrativas para diferentes públicos',
                'Produção de conteúdo informativo e promocional',
                'Adaptação de linguagem para diferentes canais'
              ].map((item) => (
                <div 
                  key={item} 
                  className="bg-[#0C0B25]/80 border border-white/5 p-4 rounded-xl flex items-center gap-3 hover:border-brand-blue/30 hover:bg-[#0E0D2C]/90 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E66EC]" />
                  <span className="font-sans text-xs sm:text-sm text-white/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo de Trabalho Timeline Section */}
        <section className="space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Target className="text-brand-blue-light" size={24} />
            Processo de trabalho
          </h3>
          
          <div className="space-y-12 relative border-l border-white/10 ml-4 pl-6 sm:pl-10 py-2">
            {/* Stage 1 */}
            <div className="relative">
              {/* Dot marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-brand-blue border-4 border-[#01000B]" />
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest text-[#1E66EC] font-bold uppercase block">
                  ETAPA 01
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  1. Pesquisa e entendimento do público
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  O trabalho começava com o entendimento dos objetivos do cliente e do comportamento do público. A partir disso, eram identificados:
                </p>
                <div className="pt-2">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {['Principais dúvidas', 'Objeções', 'Interesses', 'Temas prioritários', 'Oportunidades'].map((sub) => (
                      <div key={sub} className="bg-white/5 px-2 py-1.5 rounded-lg text-center text-xs font-mono text-white/80 border border-white/5">
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative">
              {/* Dot marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-brand-blue border-4 border-[#01000B]" />
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest text-[#1E66EC] font-bold uppercase block">
                  ETAPA 02
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  2. Planejamento editorial
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  Com os insights levantados, era construída uma estratégia de conteúdo capaz de equilibrar informação, relacionamento, posicionamento de marca e engajamento. Cada pauta era planejada considerando o contexto do negócio e as necessidades das pessoas que acompanhavam os canais.
                </p>
                <div className="pt-2">
                  <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                    <img 
                      src="/images/cases/social-media/editorial.png" 
                      alt="Calendário Editorial e Planejamento" 
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Planejamento Editorial</span>
                      <span className="font-sans text-[11px] text-white/50">Fluxo e Cronogramas de Conteúdo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative">
              {/* Dot marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-brand-blue border-4 border-[#01000B]" />
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-[#1E66EC] font-bold uppercase block">
                  ETAPA 03
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  3. Produção de conteúdo
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  A criação dos conteúdos envolvia redação de posts, criação de legendas, desenvolvimento de campanhas e adaptação da linguagem para diferentes formatos. O foco era produzir mensagens claras, relevantes e alinhadas aos objetivos de comunicação de cada projeto.
                </p>

                <div className="pt-2">
                  <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                    <img 
                      src="/images/cases/social-media/Rede%20Sociais.png" 
                      alt="Posts em Redes Sociais" 
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover max-h-[500px] transition-all duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Posts e Redes Sociais</span>
                      <span className="font-sans text-[11px] text-white/50">Lunar, Planalto e IGEP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaque de Projeto Section with UFU Campanha details & Premium Block */}
        <section className="space-y-6 border-t border-b border-white/5 py-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-brand-blue-light font-bold uppercase tracking-wider block">
              ESTUDO DE CASO EM FOCO
            </span>
            <h3 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-none">
              Comunicação institucional para a Universidade Federal de Uberlândia (UFU)
            </h3>
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
            Um dos projetos mais relevantes dessa trajetória foi a participação na estratégia digital da campanha de reeleição do então reitor da Universidade Federal de Uberlândia, Valder Steffen. O trabalho consistia em alimentar as redes sociais da chapa com conteúdos relevantes para o público apto a votar. Para isso, foram mapeadas as principais dúvidas, objeções e preocupações das pessoas eleitoras, transformando esses insights em conteúdos que respondiam questionamentos e reduziam resistências ao longo da campanha.
          </p>

          <div className="bg-[#08071A] border border-white/5 p-6 rounded-2xl space-y-6">
            <h4 className="font-display text-sm font-semibold text-white/95 uppercase tracking-wider">
              Minha atuação:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Identificação de dúvidas e objeções do público',
                'Criação de estratégias de conteúdo',
                'Produção de copies para redes sociais',
                'Construção de narrativas institucionais',
                'Comunicação focada em esclarecimento e relacionamento',
                'Produção de conteúdo orientado à tomada de decisão'
              ].map((act, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="mt-1 bg-brand-blue-light/20 p-1 rounded">
                    <ChevronSmallCircle />
                  </div>
                  <span className="font-sans text-xs text-white/80 leading-snug">{act}</span>
                </div>
              ))}
            </div>

            <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 flex justify-center items-center group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
              <img 
                src="/images/cases/social-media/UFU.png" 
                alt="Campanha Reeleição UFU" 
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[600px] sm:max-h-[750px] object-contain transition-all duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Campanha Reeleição UFU</span>
                <span className="font-sans text-[11px] text-white/50">Comunicação Institucional</span>
              </div>
            </div>
          </div>

          {/* Premium Highlight Card Re-eleição */}
          <div className="bg-gradient-to-r from-brand-blue-light/10 to-brand-blue/5 border border-brand-blue-light/25 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-40 bg-brand-blue-light/15 rounded-full blur-[80px]" />
            <div className="space-y-2 relative z-10 max-w-xl text-left">
              <h5 className="font-display text-xs font-bold tracking-widest text-[#1E66EC] uppercase">
                O Resultado Final
              </h5>
              <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed">
                A campanha culminou na reeleição do reitor Valder Steffen ainda no primeiro turno, com uma vantagem expressiva sobre os demais candidatos da disputa.
              </p>
            </div>
            
            {/* The visually requested premium metric indicator */}
            <div className="bg-black/60 border border-brand-blue-light/30 rounded-2xl px-8 py-6 text-center shadow-xl flex-shrink-0 relative z-10 w-full md:w-auto">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-emerald-400 leading-none">
                +60%
              </div>
              <div className="font-sans text-[11px] font-bold text-white uppercase tracking-wider mt-1.5">
                dos votos válidos
              </div>
              <div className="font-mono text-[9px] text-[#A2A2B5] mt-1 uppercase">
                Reeleição em primeiro turno
              </div>
            </div>
          </div>
        </section>

        {/* Empresas Atendidas Section */}
        <section className="space-y-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            Empresas atendidas
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#A2A2B5]">
            Ao longo da minha atuação como Social Media, desenvolvi conteúdos para as seguintes organizações de relevância:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {[
              'Lunar Alimentos',
              'Planalto Ovos',
              'IGEP Clínica',
              'Universidade Federal de Uberlândia (UFU)'
            ].map((company) => (
              <div key={company} className="bg-[#0C0B25]/60 border border-white/5 p-4 rounded-xl text-center flex items-center justify-center min-h-[70px]">
                <span className="font-display text-xs s:text-sm font-semibold text-white/90">{company}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Competências Section */}
        <section className="space-y-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            Competências aplicadas
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Social Media', 'Planejamento de Conteúdo', 'Content Strategy', 
              'Copywriting', 'Storytelling', 'Comunicação Institucional', 
              'Branding', 'Marketing Digital', 'Gestão de Redes Sociais', 
              'Produção de Conteúdo', 'Community Building', 'Engajamento', 
              'Calendário Editorial', 'Conteúdo Multiplataforma'
            ].map((tag) => (
              <span 
                key={tag} 
                className="font-mono text-[10px] sm:text-xs text-[#A2A2B5] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:text-white hover:border-brand-blue-light/30 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* O Que Aprendi Section */}
        <section className="space-y-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Award className="text-brand-blue-light" size={24} />
            O que aprendi
          </h3>
          <div className="bg-gradient-to-br from-[#0c0a29] to-[#01000b] border border-[#1e66ec]/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-blue-light/5 rounded-full blur-[80px]" />
            <p className="font-sans text-[#A2A2B5] text-sm sm:text-base leading-relaxed relative z-10">
              Essa experiência fortaleceu minha capacidade de transformar objetivos de comunicação em conteúdos relevantes para diferentes públicos. Também ampliou minha visão sobre comportamento de audiência, construção de narrativas, gestão de comunidades e produção de conteúdo orientado a relacionamento e influência.
            </p>
          </div>
        </section>

        {/* Footer Navigation Back Action */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display text-sm font-semibold tracking-tight text-white/90">Curtiu ver o impacto dessas campanhas?</h4>
            <p className="font-sans text-xs text-[#A2A2B5] mt-0.5">Fale comigo para estruturar canais editoriais e calendários magnéticos no LinkedIn ou Instagram.</p>
          </div>
          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E66EC] hover:bg-[#0047BC] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
          >
            Voltar para Home
            <ArrowLeft size={12} className="rotate-180" />
          </button>
        </div>

      </main>
    </article>
  );
}

function ChevronSmallCircle() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5" stroke="#1E66EC" strokeWidth="1.2"/>
      <path d="M5.5 4L7.5 6L5.5 8" stroke="#1E66EC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
