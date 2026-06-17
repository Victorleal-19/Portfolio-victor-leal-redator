import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  X, 
  Sparkles, 
  AlertCircle, 
  Compass, 
  Target, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Case } from '../types';

interface CasesSectionProps {
  onNavigateToCase?: (caseId: string) => void;
}

export default function CasesSection({ onNavigateToCase }: CasesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // The 3 core cases requested by the user
  const carouselCases: Case[] = [
    {
      id: 'case-redator-copywriter',
      category: 'redacao',
      title: 'Redator e Copywriting: Lançamento de Alta Conversão',
      subtitle: 'Estruturação de funil perene e otimizações de SEO multiplicando o tráfego orgânico institucional de ponta.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
      context: 'Um lançamento estratégico perpétuo precisava reduzir a dependência imediata de tráfego pago e consolidar a atração orgânica contínua através do entendimento real do consumidor.',
      challenge: 'Escrever fluxos de navegação e e-mails que sanassem as objeções técnicas complexas do usuário e gerassem gatilhos confortáveis e claros para a conversão de leads.',
      strategy: 'Aplicamos o clássico método PAS (Problema, Agitação, Solução), estruturamos um roteiro semântico de SEO baseado em dores reais de busca e desenvolvemos Landing Pages estéticas focadas em leitura fluida.',
      execution: 'Criação de copys magnéticas com forte escaneabilidade, guias técnicos de alto valor distribuídos como iscas e réguas de e-mail automatizadas de nutrição baseada em clique.',
      result: 'Elevação substancial de 35% nas taxas de cliques, otimização de indexação no topo do Google e faturamento recorrente otimizado.',
      tools: [
        'SEO',
        'Escrita Persuasiva',
        'Estratégia de Conteúdo',
        'Conversão',
        'Campanhas Digitais',
        'Landing Pages',
        'Email Marketing',
        'Funil de Vendas',
        'Performance'
      ]
    },
    {
      id: 'case-social-media',
      category: 'social',
      title: 'Social Media: Construção de Autoridade de Marca',
      subtitle: 'Calendários editoriais autorais e storytelling sofisticado escalando conexões orgânicas C-Level.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      context: 'Estabelecer a autoridade e posicionamento profissional de marcas e fundadores em canais corporativos densos como o LinkedIn, atraindo a atenção de tomadores de decisão.',
      challenge: 'Garantir a sofisticação da linguagem sem perder o apelo de engajamento nativo, comunicando inovação e inteligência artificial de forma clara e instigante.',
      strategy: 'Apostamos em curadoria assertiva de tendências tecnológicas complexas traduzidas em carrosséis interativos, Storytelling focado em lições de bastidores e cronogramas consistentes.',
      execution: 'Desenho de posts educacionais refinados, roteiros de vídeos curtos de alta retenção no CapCut e newsletter executiva minimalista enviada periodicamente.',
      result: 'Análise de métricas com expressivo aumento orgânico em taxas de engajamento, curtidas ativas e atração recorrente de leads corporativos B2B altamente qualificados.',
      tools: [
        'Gestão de Redes Sociais',
        'Planejamento de Conteúdo',
        'Engajamento',
        'Calendário Editorial',
        'Storytelling',
        'Meta Ads',
        'Análise de Métricas',
        'Performance'
      ]
    },
    {
      id: 'case-jornalista',
      category: 'jornalismo',
      title: 'Jornalista: Reportagens e Retratos Socioculturais',
      subtitle: 'Apuração atenta e narrativas investigativas estéticas valorizando a história viva de comunidades prestigiadas.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      context: 'Unir o rigor da pesquisa de fatos e investigações factuais à beleza estética do jornalismo literário contemporâneo em plataformas de divulgação cultural.',
      challenge: 'Estruturar artigos de fôlego com sensibilidade humana que de fato registrassem a essência dos entrevistados, motivando compartilhamentos orgânicos.',
      strategy: 'Utilizamos técnicas de reportagem participante e etnografia aprofundada, com escuta atenta personalizada e redação fluida em pirâmide invertida.',
      execution: 'Realização de apurações aprofundadas em comarcas locais, dezenas de entrevistas de fôlego em formato multimídia, documentação de releases e cobertura fotográfica ativa de debates acadêmicos.',
      result: 'Acréscimo exponencial na audiência direta e replicação das matérias de forma espontânea por mídias e canais institucionais parceiros.',
      tools: [
        'Reportagem',
        'Entrevistas',
        'Apuração',
        'Assessoria de Imprensa',
        'Cobertura de Eventos',
        'Comunicação Institucional',
        'Conteúdo Multiplataforma'
      ]
    }
  ];

  // Auto-play timer for slide transition (6 seconds)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselCases.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselCases.length) % carouselCases.length);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch triggers for mobile swiping action
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const currentProject = carouselCases[currentIndex];

  return (
    <section id="cases" className="py-24 border-b border-white/5 relative overflow-hidden bg-[#01000b] no-print">
      
      {/* Background radial soft lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-950/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Principais cases
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A2A2B5] leading-relaxed max-w-2xl mx-auto">
            Conteúdo estratégico aliado à pesquisa, acessibilidade e IA para facilitar a experiência das pessoas usuárias e impulsionar resultados de negócio.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div 
          className="w-full relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-[#08071A]/85 border border-white/5 rounded-3xl p-6 sm:p-10 md:p-12 w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center min-h-[460px] relative overflow-hidden transition-all duration-500 hover:border-brand-blue/20 hover:shadow-[0_20px_50px_rgba(30,102,236,0.1)] group/banner"
            >
              {/* Subtle top visual linear accent highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-blue/25 via-transparent to-transparent pointer-events-none" />

              {/* Left Side: Content info */}
              <div className="w-full md:w-7/12 flex flex-col items-start text-left">
                
                {/* Horizontal premium badge structure */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-blue-light bg-[#1E66EC]/10 border border-[#1E66EC]/25 px-3 py-1 rounded-full font-bold">
                    ✨ CASE EM DESTAQUE
                  </span>
                  
                  {/* Category Pill */}
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/95 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-semibold">
                    {currentProject.category === 'redacao' ? 'REDATOR & COPYWRITER' : currentProject.category === 'social' ? 'CONTENT STRATEGY' : 'PRODUÇÃO EDITORIAL'}
                  </span>

                  {/* Core Attribute Badge */}
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#A2A2B5] bg-white/5 border border-white/10 px-3 py-1 rounded-full font-medium">
                    {currentProject.category === 'redacao' ? 'CONVERSÃO' : currentProject.category === 'social' ? 'AUDIÊNCIA' : 'REPORTAGEM'}
                  </span>
                </div>

                {/* Main Headline Title */}
                <h3 className="font-display text-2xl sm:text-3xl md:text-[32px] font-extrabold text-white tracking-tight leading-[1.15] mb-4 whitespace-normal">
                  {currentProject.title}
                </h3>

                {/* Subtitle / Description Summary - 2 to 4 lines */}
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed mb-6 block max-w-xl">
                  {currentProject.subtitle}
                </p>

                {/* Grid list of tags with smooth design */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {currentProject.tools.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[10px] text-[#A2A2B5]/80 bg-[#0C0B25]/65 hover:text-white hover:bg-[#0E0D2C] border border-white/5 hover:border-brand-blue/20 px-3 py-1 rounded-full transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Core CTA button */}
                <button
                  onClick={() => {
                    if (onNavigateToCase) {
                      onNavigateToCase(currentProject.id);
                    }
                  }}
                  className="group/btn inline-flex items-center gap-2 bg-[#1E66EC] hover:bg-[#003da1] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_8px_25px_rgba(30,102,236,0.35)] cursor-pointer hover:translate-y-[-2px] leading-none"
                >
                  Ver case completo
                  <ArrowUpRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

              {/* Right Side: Visual crop preview mockup */}
              <div className="w-full md:w-5/12 flex-shrink-0 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0c0a29] border border-white/10 group-hover/banner:border-brand-blue/30 transition-all duration-500 shadow-2xl">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title} 
                  className="w-full h-full object-cover opacity-80 group-hover/banner:scale-104 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Centered Discrete pagination UI dots and arrows */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev Arrow Button */}
            <button
               onClick={goToPrev}
               className="text-[#A2A2B5] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full cursor-pointer flex items-center justify-center"
               aria-label="Case anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Navigation Dot indicators */}
            <div className="flex items-center gap-2.5">
              {carouselCases.map((_, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => handleIndicatorClick(idx)}
                    className={`h-1.5 transition-all duration-350 rounded-full cursor-pointer ${
                      isActive ? 'w-7 bg-brand-blue-light' : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir para case ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Next Arrow Button */}
            <button
               onClick={goToNext}
               className="text-[#A2A2B5] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full cursor-pointer flex items-center justify-center"
               aria-label="Próximo case"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>


    </section>
  );
}
