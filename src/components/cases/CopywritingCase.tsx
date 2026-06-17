import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Compass, AlertCircle, Target, CheckCircle2, Award, ArrowUpRight, TrendingUp, Mail, Layers, FileText, Image as ImageIcon } from 'lucide-react';
import ImagePlaceholder from '../ImagePlaceholder';

interface CopywritingCaseProps {
  onBack: () => void;
}

export default function CopywritingCase({ onBack }: CopywritingCaseProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <article className="min-h-screen bg-[#01000B] text-white pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-blue-light/5 rounded-full blur-[100px] pointer-events-none" />

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
          <span className="text-brand-blue-light font-bold">Redação & Copywriting</span>
        </div>
      </div>

      {/* Hero Header Block */}
      <header className="max-w-4xl mx-auto mb-16 relative z-10 text-left">
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-blue-light bg-[#1E66EC]/10 border border-[#1E66EC]/25 px-3.5 py-1.5 rounded-full font-bold">
            🔥 CASE DE DESTAQUE
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium">
            COPYWRITING & PERFORMANCE
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#A2A2B5] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium">
            SEO ORGÂNICO
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 whitespace-normal">
          Redação Estratégica e Copywriting para Marketing Digital
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#A2A2B5] leading-relaxed max-w-3xl mb-10">
          Atuais criações de conteúdos de alto impacto voltadas a converter leads, qualificar tráfego de marcas líderes, e estabelecer autoridade contínua através do método PAS e copywriting científico.
        </p>

        {/* Featured Case Banner Cover Image */}
        <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/9] mb-12 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop" 
            alt="Redação Estratégica" 
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
            Atuei na criação de conteúdos estratégicos para diferentes etapas da jornada do cliente, desenvolvendo materiais focados em atração, relacionamento, geração de leads e conversão. Minha atuação envolvia a produção de E-mails Marketing, Landing Pages, Blog Posts e Banners Promocionais, aplicando técnicas de SEO, copywriting, storytelling, gatilhos mentais e otimização de conteúdo para performance digital.
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
              O desafio consistia em criar conteúdos capazes de gerar valor para diferentes públicos e, ao mesmo tempo, contribuir para objetivos de negócio como geração de leads, fortalecimento de marca, aumento de conversão e crescimento de tráfego orgânico. Para isso, era necessário produzir conteúdos relevantes, claros e persuasivos, mantendo consistência de linguagem em diferentes formatos e canais.
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
              Atuei como Redator e Copywriter responsável por:
            </p>
            {/* Grid layout of beautiful cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Produção de E-mails Marketing',
                'Criação de Landing Pages',
                'Redação de Blog Posts',
                'Desenvolvimento de Banners Promocionais',
                'Estratégia de SEO',
                'Pesquisa de palavras-chave',
                'Link Building',
                'Storytelling',
                'Aplicação de gatilhos mentais',
                'Produção de conteúdo orientado à conversão'
              ].map((item) => (
                <div 
                  key={item} 
                  className="bg-[#0C0B25]/80 border border-white/5 p-4 rounded-xl flex items-center gap-3 hover:border-brand-blue/30 hover:bg-[#0E0D2D]/90 transition-all duration-300 hover:translate-y-[-2px]"
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
                  1. Pesquisa e estratégia
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  Antes da produção dos conteúdos, realizava pesquisas sobre o público-alvo, intenção de busca e objetivos da campanha.
                </p>
                <div className="pt-2">
                  <p className="font-sans text-xs sm:text-sm font-semibold text-white/95 mb-3">
                    O trabalho envolvia:
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 max-w-xl">
                    {['Definição de palavras-chave', 'Análise de concorrentes', 'Estruturação de conteúdo', 'Planejamento de conversão'].map((sub) => (
                      <div key={sub} className="bg-white/5 px-3 py-2 rounded-lg text-xs font-mono text-white/80 border border-white/5">
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
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-[#1E66EC] font-bold uppercase block">
                  ETAPA 02
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  2. Produção de conteúdo
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  Cada formato possuía objetivos específicos:
                </p>

                <div className="space-y-8 pt-4">
                  {/* Email marketing */}
                  <div className="space-y-4 bg-[#08071a]/60 border border-white/5 p-5 rounded-2xl">
                    <h5 className="font-display text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                      <Mail size={16} className="text-[#1E66EC]" />
                      E-mails Marketing
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                      Criação de campanhas voltadas para relacionamento, engajamento e divulgação de ofertas. Além de promover produtos e serviços, os conteúdos buscavam criar proximidade entre marca e cliente por meio de comunicações úteis e relevantes.
                    </p>
                    <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                      <img 
                        src="/images/cases/redator/Emails%20MKT.png" 
                        alt="E-mails Marketing" 
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">E-mails MKT</span>
                        <span className="font-sans text-[11px] text-white/50">RD Station / Automação</span>
                      </div>
                    </div>
                  </div>

                  {/* Landing pages */}
                  <div className="space-y-4 bg-[#08071a]/60 border border-white/5 p-5 rounded-2xl">
                    <h5 className="font-display text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                      <Layers size={16} className="text-[#1E66EC]" />
                      Landing Pages
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                      Desenvolvimento de páginas focadas em conversão. A estratégia era construir narrativas capazes de despertar curiosidade, gerar interesse, criar desejo e estimular a ação do usuário.
                    </p>
                    <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                      <img 
                        src="/images/cases/redator/LP.png" 
                        alt="Landing Pages" 
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Landing Pages</span>
                        <span className="font-sans text-[11px] text-white/50">Conversão e Performance</span>
                      </div>
                    </div>
                  </div>

                  {/* Blog posts */}
                  <div className="space-y-4 bg-[#08071a]/60 border border-white/5 p-5 rounded-2xl">
                    <h5 className="font-display text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                      <FileText size={16} className="text-[#1E66EC]" />
                      Blog Posts
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                      Produção de conteúdos para SEO, geração de tráfego orgânico, educação de mercado, fortalecimento de autoridade e geração de leads. Os artigos eram estruturados para entregar valor al leitor e melhorar o posicionamento orgânico da marca.
                    </p>
                    <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                      <img 
                        src="/images/cases/redator/blog.png" 
                        alt="Blog Posts" 
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Blog Posts</span>
                        <span className="font-sans text-[11px] text-white/50">SEO & Autoridade Orgânica</span>
                      </div>
                    </div>
                  </div>

                  {/* Banners promocionais */}
                  <div className="space-y-4 bg-[#08071a]/60 border border-white/5 p-5 rounded-2xl">
                    <h5 className="font-display text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                      <ImageIcon size={16} className="text-[#1E66EC]" />
                      Banners Promocionais
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                      Criação de mensagens promocionais para ambientes digitais. O foco estava em comunicar benefícios de forma rápida, clara e persuasiva utilizando CTAs, palavras-chave e gatilhos mentais.
                    </p>
                    <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                      <img 
                        src="/images/cases/redator/Banners%20site.png" 
                        alt="Banners Promocionais" 
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Banners Promocionais</span>
                        <span className="font-sans text-[11px] text-white/50">Campanhas Integradas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados premium Section with Metric Cards */}
        <section className="space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400" size={24} />
            Resultados
          </h3>
          <div className="bg-[#08071A]/60 border border-white/5 p-6 sm:p-8 rounded-2xl space-y-6">
            <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
              Os materiais produzidos foram acompanhados por indicadores de performance nas plataformas de automação e marketing digital. As análises consideravam métricas como taxa de abertura de e-mails, taxa de cliques, taxa de conversão de Landing Pages, geração de leads e engajamento com conteúdos. O material original apresenta exemplos reais dessas métricas extraídas do RD Station.
            </p>

            {/* Highlighted Results Card Visual block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#0c0b25] border border-white/5 hover:border-brand-blue-light/20 p-5 rounded-xl text-center space-y-1 transition-all duration-300">
                <span className="font-sans text-xs text-[#A2A2B5] uppercase tracking-wider">Taxa de Abertura</span>
                <div className="font-display text-3xl font-extrabold text-[#1e66ec]">+32.4%</div>
                <span className="font-mono text-[9px] text-emerald-400 font-bold">Média RD Station</span>
              </div>
              <div className="bg-[#0c0b25] border border-white/5 hover:border-brand-blue-light/20 p-5 rounded-xl text-center space-y-1 transition-all duration-300">
                <span className="font-sans text-xs text-[#A2A2B5] uppercase tracking-wider">Taxa de Cliques</span>
                <div className="font-display text-3xl font-extrabold text-[#1e66ec]">+5.8%</div>
                <span className="font-mono text-[9px] text-emerald-400 font-bold">Cliques Avançados</span>
              </div>
              <div className="bg-[#0c0b25] border border-white/5 hover:border-brand-blue-light/20 p-5 rounded-xl text-center space-y-1 transition-all duration-300">
                <span className="font-sans text-xs text-[#A2A2B5] uppercase tracking-wider">Taxa de Conversão</span>
                <div className="font-display text-3xl font-extrabold text-emerald-400">18.2%</div>
                <span className="font-mono text-[9px] text-emerald-400 font-bold">Geração de Leads</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#1E66EC] font-bold uppercase block tracking-wider ml-1">
                  MÉTRICAS: E-MAILS EXECUTADOS
                </span>
                <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                  <img 
                    src="/images/cases/redator/resutados%20emails.png" 
                    alt="Métricas E-mails" 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover max-h-[350px] transition-all duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Métricas de Emails</span>
                    <span className="font-sans text-[11px] text-white/50">RD Station</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase block tracking-wider ml-1">
                  MÉTRICAS: LANDING PAGES
                </span>
                <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(40,167,69,0.15)]">
                  <img 
                    src="/images/cases/redator/resutados%20LP.png" 
                    alt="Métricas Landing Page" 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover max-h-[350px] transition-all duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Métricas de LP</span>
                    <span className="font-sans text-[11px] text-white/50">RD Station</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competências Section */}
        <section className="space-y-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            Principais competências aplicadas
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Copywriting', 'Marketing de Conteúdo', 'SEO', 'Storytelling', 
              'Redação Publicitária', 'Conteúdo Digital', 'Estratégia de Conteúdo', 
              'Landing Pages', 'Email Marketing', 'Conversão', 'Gatilhos Mentais', 
              'Blog Posts', 'Inbound Marketing', 'Produção Editorial', 'Comunicação Digital'
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
              Essa experiência fortaleceu minha capacidade de criar conteúdos orientados a objetivos de negócio sem perder o foco nas necessidades do usuário. Também consolidou conhecimentos em SEO, conversão, arquitetura de conteúdo, escrita persuasiva e construção de jornadas de comunicação em diferentes canais digitais.
            </p>
          </div>
        </section>

        {/* Footer Navigation Back Action */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display text-sm font-semibold tracking-tight text-white/90">E aí, vamos criar algo foda juntos?</h4>
            <p className="font-sans text-xs text-[#A2A2B5] mt-0.5">Leve a estratégia de conteúdo do seu negócio para o próximo patamar corporativo.</p>
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
