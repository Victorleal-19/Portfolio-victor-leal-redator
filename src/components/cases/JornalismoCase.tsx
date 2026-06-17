import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Compass, AlertCircle, Target, CheckCircle2, Award, Heart, BookOpen, MessageSquare, Newspaper, Star } from 'lucide-react';

interface JornalismoCaseProps {
  onBack: () => void;
}

export default function JornalismoCase({ onBack }: JornalismoCaseProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <article className="min-h-screen bg-[#01000B] text-white pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-slate-550/5 rounded-full blur-[100px] pointer-events-none" />

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
          <span className="text-brand-blue-light font-bold">Jornalismo & Cultura</span>
        </div>
      </div>

      {/* Hero Header Block */}
      <header className="max-w-4xl mx-auto mb-16 relative z-10 text-left">
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-blue-light bg-[#1E66EC]/10 border border-[#1E66EC]/25 px-3.5 py-1.5 rounded-full font-bold">
            ✍️ APURAÇÃO & REPORTAGEM
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium">
            PRODUÇÃO EDITORIAL
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#A2A2B5] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium">
            DIVULGAÇÃO SOCIAL
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 whitespace-normal">
          Jornalismo, Cultura e Produção de Conteúdo Editorial
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#A2A2B5] leading-relaxed max-w-3xl mb-10">
          Rigor de investigação jornalística aliada à curadoria e à estética de narrativas aprofundadas focando em impulsionar compreensão e senso de comunidade.
        </p>

        {/* Featured Case Banner Cover Image */}
        <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/9] mb-12 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop" 
            alt="Jornalismo e Cultura" 
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
            Atuou na produção de conteúdo jornalístico e editorial para veículos independentes de comunicação, desenvolvendo reportagens, entrevistas, matérias de interesse público e conteúdos voltados para cultura, entretenimento e sociedade. Minha atuação sempre esteve conectada à missão de informar, contextualizar acontecimentos e contar histórias relevantes para diferentes públicos, utilizando apuração, pesquisa e construção narrativa como principais ferramentas de trabalho.
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
              O jornalismo foi uma das primeiras áreas da comunicação em que desenvolvi experiência profissional e continua sendo uma das bases da minha formação como comunicador. Ao longo dessa trajetória, produzi conteúdos para veículos independentes de notícia, participando da cobertura de pautas culturais, entrevistas com artistas, eventos e temas de interesse social.
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
              Atuei como jornalista responsável por:
            </p>
            {/* Grid layout of beautiful cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Pesquisa e apuração de informações',
                'Produção de reportagens',
                'Entrevistas',
                'Redação de matérias',
                'Produção de conteúdo editorial',
                'Cobertura de eventos',
                'Construção de pautas',
                'Curadoria de informações',
                'Storytelling jornalístico',
                'Revisão e edição de textos'
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
                  1. Pesquisa e apuração
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  Cada pauta iniciava com um processo de investigação e levantamento de informações. As atividades incluíam:
                </p>
                <div className="pt-2">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {['Pesquisa de contexto', 'Análise de fontes', 'Verificação', 'Roteiro de entrevistas', 'Dados adicionais'].map((sub) => (
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
                  2. Entrevistas e coleta de informações
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  Parte importante do trabalho consistia na realização de entrevistas com artistas, profissionais da cultura e pessoas envolvidas nos acontecimentos retratados. O objetivo era transformar informações dispersas em narrativas relevantes e acessíveis para o público.
                </p>
                <div className="pt-2">
                  <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                    <img 
                      src="/images/cases/jornalista/entrevistas-coletas-informacoes.png" 
                      alt="Entrevistas e Coleta de Informações" 
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Entrevistas e Apurações</span>
                      <span className="font-sans text-[11px] text-white/50">Trabalho de Campo</span>
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
                  3. Produção das matérias
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
                  Após a apuração, os conteúdos eram estruturados considerando clareza da informação, relevância da pauta, hierarquia das informações, contexto histórico e cultural, além de proporcionar uma ótima experiência de leitura. A preocupação não era apenas informar, mas também gerar compreensão e conexão com o tema abordado.
                </p>

                <div className="pt-2">
                  <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
                    <img 
                      src="/images/cases/jornalista/producao-de%20-materias.png" 
                      alt="Produção de Matérias e Reportagens" 
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover max-h-[480px] transition-all duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Produção de Matérias</span>
                      <span className="font-sans text-[11px] text-white/50">Redação & Editoria</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaque de Atuação - Cultura Preta exclusive Area */}
        <section className="space-y-6 border-t border-b border-white/5 py-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-brand-blue-light font-bold uppercase tracking-wider block">
              COLUNISMO & COMUNIDADE INDEPENDENTE
            </span>
            <h3 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-none">
              Destaque de atuação: Cultura Preta
            </h3>
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed">
            Atualmente atuo como colunista do Cultura Preta, veículo independente de notícias e entretenimento voltado para a valorização da cultura negra e para a produção de conteúdos de interesse do povo preto.
          </p>

          <div className="bg-[#08071A] border border-white/5 p-6 rounded-2xl space-y-6">
            <h4 className="font-display text-sm font-semibold text-white/95 uppercase tracking-wider">
              Nesse contexto, participei da produção de conteúdos relacionados a:
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Música',
                'Cultura afro-brasileira',
                'Entretenimento',
                'Eventos culturais',
                'Representatividade',
                'Entrevistas exclusivas',
                'Cobertura de festivais e shows'
              ].map((act, i) => (
                <div key={i} className="bg-white/5 px-3 py-2 rounded-lg border border-white/10 font-sans text-xs sm:text-sm text-white/80">
                  {act}
                </div>
              ))}
            </div>

            <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0B25]/80 group transition-all duration-300 hover:border-brand-blue-light/35 hover:shadow-[0_4px_20px_rgba(30,102,236,0.15)]">
              <img 
                src="/images/cases/jornalista/destaque-atuacao-cuktura-preta.png" 
                alt="Coluna Cultura Preta" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[500px] transition-all duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-[10px] text-brand-blue-light font-bold uppercase tracking-wider">Cultura Preta</span>
                <span className="font-sans text-[11px] text-white/50">Colunismo & Portal de Entretenimento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact in my Career / Editorial visual insights */}
        <section className="bg-gradient-to-br from-brand-blue-light/[0.04] to-transparent border border-white/5 rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Newspaper size={120} className="text-white" />
          </div>
          <h3 className="font-display text-lg sm:text-2xl font-bold text-white relative z-10">
            Impacto na minha carreira
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#A2A2B5] leading-relaxed relative z-10">
            A experiência em jornalismo contribuiu diretamente para o desenvolvimento de habilidades que hoje utilizo em UX Writing, Content Design e Estratégia de Conteúdo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 relative z-10">
            {[
              'Escuta ativa',
              'Pesquisa com usuários',
              'Investigação de problemas',
              'Organização de informações complexas',
              'Clareza na comunicação',
              'Construção de narrativas',
              'Adaptação de linguagem'
            ].map((skill, index) => (
              <div key={index} className="bg-black/40 border border-white/5 p-3 rounded-lg text-center font-mono text-[10px] sm:text-xs text-white/95">
                {skill}
              </div>
            ))}
          </div>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mt-4 relative z-10">
            Essas competências continuam sendo fundamentais na criação de experiências digitais mais claras, acessíveis e centradas nas necessidades das pessoas usuárias.
          </p>
        </section>

        {/* Competências Section */}
        <section className="space-y-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            Principais competências desenvolvidas
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Jornalismo', 'Reportagem', 'Entrevistas', 'Storytelling', 
              'Pesquisa', 'Produção Editorial', 'Comunicação', 'Apuração', 
              'Cobertura de Eventos', 'Conteúdo Cultural', 'Redação', 
              'Edição de Texto', 'Curadoria de Conteúdo', 'Fact Checking', 'Comunicação Digital'
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
              O jornalismo me ensinou que uma boa comunicação começa pela compreensão profunda das pessoas, dos contextos e dos problemas que precisam ser resolvidos. Essa visão continua orientando meu trabalho atualmente, seja na produção de conteúdo, na pesquisa ou na construção de experiências digitais sem atritos.
            </p>
          </div>
        </section>

        {/* Footer Navigation Back Action */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display text-sm font-semibold tracking-tight text-white/90">Gostaria de conhecer mais sobre os artigos?</h4>
            <p className="font-sans text-xs text-[#A2A2B5] mt-0.5">Mande uma mensagem para conversarmos sobre coberturas, ensaios editoriais ou ensaios socioculturais.</p>
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
