import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CasesSection from './components/CasesSection';
import ExperienceSection from './components/ExperienceSection';
import CoursesSection from './components/CoursesSection';
import ToolsSection from './components/ToolsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CopywritingCase from './components/cases/CopywritingCase';
import SocialMediaCase from './components/cases/SocialMediaCase';
import JornalismoCase from './components/cases/JornalismoCase';
import { Sparkles, ArrowUp, ArrowRight, Printer, X, Download } from 'lucide-react';
import { experiences, courses } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cvModalDirectOpen, setCvModalDirectOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleNavigateToCase = (caseId: string) => {
    if (caseId === 'case-redator-copywriter') {
      navigateTo('/case/redacao-copywriting');
    } else if (caseId === 'case-social-media') {
      navigateTo('/case/social-media');
    } else if (caseId === 'case-jornalista') {
      navigateTo('/case/jornalismo');
    }
  };

  // Monitor screen scroll to:
  // 1. Reveal "Scroll to Top" floating button
  // 2. Track currently visible section to highlight the correct item on the fixed Navbar
  useEffect(() => {
    const handleScroll = () => {
      // Toggle top pointer button
      setShowScrollTop(window.scrollY > 400);

      // Section tracker block
      const sections = ['hero', 'cases', 'experiences', 'courses', 'tools', 'about', 'contact'];
      let currentSection = 'hero';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If top of section is close to top viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenCVModal = () => {
    setCvModalDirectOpen(true);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="bg-bg-deep text-[#FFFFFF] min-h-screen relative font-sans antialiased selection:bg-brand-blue selection:text-white">
      {/* 
        This is an overlay area styled for physical paper outputs (PDF/Print), 
        rendered entirely HIDDEN on normal screen viewports.
      */}
      <div className="hidden print:block print-only bg-white text-black p-8 sm:p-12 space-y-10 selection:bg-transparent text-left select-text">
        <div className="border-b-2 border-gray-900 pb-6 flex justify-between items-start gap-4">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-gray-900">
              Victor Leal
            </h1>
            <p className="font-sans text-base font-semibold text-brand-blue uppercase tracking-wider mt-1">
              Redator | Copywriter | Jornalista | UX Writer
            </p>
          </div>
          <div className="text-right font-sans text-xs text-gray-600 space-y-1">
            <p>📍 Uberlândia, MG - Brasil</p>
            <p>📧 victorlealalo19@gmail.com</p>
            <p>📞 +55 (34) 99123-4567</p>
            <p>🔗 linkedin.com/in/victorleal</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
            Perfil Profissional
          </h2>
          <p className="font-sans text-sm text-gray-750 leading-relaxed">
            Profissional de comunicação com mais de 10 anos de experiência consolidada unindo jornalismo, marketing digital, copywriting, UX Writing e Inteligência Artificial para desenvolver soluções de comunicação mais estratégicas, humanas e focadas em conversão. Histórico comprovado em canais de massa, agências criativas e um dos maiores e-commerces do país.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-left">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-gray-900">
                    {exp.role} — <span className="font-normal text-gray-600">{exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-brand-blue font-bold tracking-widest self-center">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 font-sans text-xs sm:text-sm text-gray-750">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
              Habilidades & Competências
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {['UX Writing', 'Copywriting', 'Jornalismo', 'Storytelling', 'Linguagem Simples', 'SEO', 'UX Research', 'Design Conversacional', 'Prompt Engineering', 'Metodologias Ágeis'].map((tag) => (
                <span key={tag} className="font-sans text-xs text-gray-800 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
              Cursos & Certificações
            </h2>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-gray-750">
              {courses.slice(0, 6).map((c) => (
                <li key={c.id} className="flex justify-between">
                  <span className="font-bold">{c.title} <span className="font-normal text-gray-500">({c.institution})</span></span>
                  <span className="font-mono text-[11px] text-gray-500 font-semibold">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-100 mt-12">
          <p className="font-sans text-[10px] text-gray-400">
            Documento gerado dinamicamente via Portfólio de Victor Leal.
          </p>
        </div>
      </div>

      {/* Screen Presentation Flow (Hidden when printing) */}
      <div className="print:hidden no-print">
        {currentPath === '/case/redacao-copywriting' ? (
          <CopywritingCase onBack={() => navigateTo('/')} />
        ) : currentPath === '/case/social-media' ? (
          <SocialMediaCase onBack={() => navigateTo('/')} />
        ) : currentPath === '/case/jornalismo' ? (
          <JornalismoCase onBack={() => navigateTo('/')} />
        ) : (
          <>
            {/* Floating Navbar */}
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

            {/* 1. Hero Entrance Section */}
            <HeroSection onOpenCV={handleOpenCVModal} />

            {/* 2. Portfolio Cases Section */}
            <CasesSection onNavigateToCase={handleNavigateToCase} />

            {/* 3. Expandable Career History */}
            <ExperienceSection />

            {/* 4. Credentials Certifications section Grid */}
            <CoursesSection />

            {/* 5. Tool Domain panel */}
            <ToolsSection />

            {/* 6. Humanizing editorial narrative */}
            <AboutSection />

            {/* 7. Actionable Contact Boxes */}
            <ContactSection />
          </>
        )}

        {/* Footer info layout */}
        <footer className="bg-[#010006] py-12 border-t border-white/5 text-center px-4 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <p className="font-display font-extrabold text-[#FFFFFF] text-lg tracking-tight">Victor Leal</p>
              <p className="font-sans text-xs text-white/45 mt-0.5">Copywriter, Redator Freelancer e Jornalista de Alta Performance.</p>
            </div>
            
            <p className="font-sans text-xs text-white/30 text-left sm:text-right">
              Desenvolvido com sofisticação em React, Tailwind CSS v4 e Framer Motion. <br />
              Uberlândia, MG — Brasil. Propriedade Intelectual Reescrita © {new Date().getFullYear()}
            </p>
          </div>
        </footer>

        {/* Scroll-to-top floating clicker widget */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-brand-blue hover:bg-brand-blue-light text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,47,188,0.5)] cursor-pointer hover:scale-105"
            aria-label="Voltar para o topo"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {/* Embedded direct CV sheet preview modal (non-printable component wrap) */}
      {cvModalDirectOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10 no-print print:hidden">
          {/* Overlay */}
          <div
            onClick={() => setCvModalDirectOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Sheet center */}
          <div className="bg-white text-[#111111] w-full max-w-4xl h-full max-h-[90vh] rounded-2xl overflow-y-auto shadow-2xl relative z-10 flex flex-col text-left">
            {/* Nav controls */}
            <div className="sticky top-0 bg-gray-100 border-b border-gray-200 px-6 py-4 flex items-center justify-between gap-4 z-20">
              <span className="font-display font-bold text-sm tracking-tight text-gray-900 flex items-center gap-1.5">
                <Sparkles size={16} className="text-brand-blue" />
                Deseja salvar ou imprimir o PDF de Victor?
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/1zdyFsLR1WkTTlIgtaxZtShYjB7tkLQVa/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  Baixar Currículo (Google Drive)
                </a>
                <button
                  onClick={handlePrintCV}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer size={14} />
                  Imprimir
                </button>
                <button
                  onClick={() => setCvModalDirectOpen(false)}
                  className="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-200 border border-gray-300 p-2 rounded-lg transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Structured sheet layout */}
            <div className="p-8 sm:p-12 space-y-8 flex-grow select-text bg-white">
              <div className="border-b-2 border-gray-900 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                    Victor Leal
                  </h1>
                  <p className="font-sans text-sm sm:text-base font-semibold text-brand-blue uppercase tracking-wider mt-1">
                    Redator | Copywriter | Jornalista | UX Writer
                  </p>
                </div>
                <div className="text-left sm:text-right font-sans text-xs text-gray-650 space-y-1">
                  <p>📍 Uberlândia, MG - Brasil</p>
                  <p>📧 victorlealalo19@gmail.com</p>
                  <p>📞 +55 (34) 99123-4567</p>
                  <p>🔗 linkedin.com/in/victorleal</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                  Perfil Profissional
                </h2>
                <p className="font-sans text-sm text-gray-700 leading-relaxed">
                  Profissional de comunicação com mais de 10 anos de experiência consolidada unindo jornalismo, marketing digital, copywriting, UX Writing e Inteligência Artificial para desenvolver experiências de comunicação mais estratégicas, humanas e orientadas a resultados. Histórico demonstrável atuando em veículos de comunicação, agências de marketing, e-commerces e startups.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                  Experiência Recente
                </h2>
                <div className="space-y-6">
                  {experiences.slice(0, 5).map((exp) => (
                    <div key={exp.id} className="space-y-1 text-left">
                      <div className="flex justify-between items-start gap-4 flex-wrap">
                        <span className="font-display font-extrabold text-sm sm:text-base text-gray-900">
                          {exp.role} — <span className="font-normal text-gray-600">{exp.company}</span>
                        </span>
                        <span className="font-mono text-xs text-brand-blue font-bold tracking-widest">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="list-disc pl-5 space-y-0.5 font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {exp.description.slice(0, 2).map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                    Ferramentas & Soluções
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    {['UX Writing', 'Copywriting', 'Jornalismo', 'Storytelling', 'Linguagem Simples', 'SEO', 'UX Research', 'Design Conversacional', 'Prompt Engineering', 'Metodologias Ágeis'].map((tag) => (
                      <span key={tag} className="font-sans text-xs text-gray-800 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                    Cursos Principais
                  </h2>
                  <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-gray-700">
                    {courses.slice(0, 4).map((c) => (
                      <li key={c.id} className="flex justify-between">
                        <span className="font-bold">{c.title} <span className="font-normal text-gray-500">({c.institution})</span></span>
                        <span className="font-mono text-[11px] text-gray-500 font-semibold">{c.year}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-gray-200 mt-8">
                <p className="font-sans text-[10px] text-gray-400">
                  Resumo impresso gerado a partir do Portfólio oficial de Victor Leal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
