import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { contacts, experiences, courses } from '../data';
import { Send, FileText, Printer, X, Download, Mail, Linkedin, MessageCircle, Hash, ArrowRight, NotebookTabs } from 'lucide-react';

export default function ContactSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleCardClick = (channel: any, e: React.MouseEvent) => {
    if (channel.id === 'contact-cv') {
      e.preventDefault();
      setCvModalOpen(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const channelsWithCopy = contacts.map(c => {
    let desc = '';
    let iconComponent = Mail;
    if (c.id === 'contact-linkedin') {
      desc = 'Para networking e currículo.';
      iconComponent = Linkedin;
    } else if (c.id === 'contact-whatsapp') {
      desc = 'Resposta rápida.';
      iconComponent = MessageCircle;
    } else if (c.id === 'contact-email') {
      desc = 'Para propostas e parcerias.';
      iconComponent = Mail;
    } else if (c.id === 'contact-medium') {
      desc = 'Artigos e pensamentos.';
      iconComponent = Send;
    } else if (c.id === 'contact-behance') {
      desc = 'Visual stories e cases.';
      iconComponent = Hash;
    } else if (c.id === 'contact-cv') {
      desc = 'Versão PDF completa.';
      iconComponent = Download;
    }
    return {
      ...c,
      desc,
      icon: iconComponent,
      isCV: c.id === 'contact-cv'
    };
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-[#010008]">
      {/* Background blur lights */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-[44px] font-extrabold text-white tracking-tight leading-none">
            Bora <span className="text-[#1E66EC]">Conversar?</span>
          </h2>
        </div>

        {/* Contact Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {channelsWithCopy.map((channel) => {
            const isCV = channel.isCV;
            const IconComponent = channel.icon;

            if (isCV) {
              return (
                <button
                  key={channel.id}
                  onClick={(e) => handleCardClick(channel, e)}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0047BC] hover:bg-[#003da1] border border-white/5 text-left transition-all duration-300 hover:translate-y-[-4px] select-none hover:shadow-[0_8px_30px_rgba(0,71,188,0.35)] cursor-pointer w-full"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/10 border border-white/10 text-white transition-colors duration-300">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-display font-bold text-[15px] sm:text-base text-white leading-tight mb-0.5">
                      {channel.label}
                    </h3>
                    <p className="font-sans text-xs text-white/80 leading-normal">
                      {channel.desc}
                    </p>
                  </div>
                </button>
              );
            }

            return (
              <a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#0C0B25]/40 hover:bg-[#0E0D2C] rounded-2xl border border-white/5 hover:border-[#1E66EC]/40 text-left transition-all duration-300 hover:translate-y-[-4px] select-none hover:shadow-[0_0_20px_rgba(30,102,236,0.15)] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0C0B25]/60 group-hover:bg-[#1E66EC]/20 border border-white/5 group-hover:border-[#1E66EC]/30 text-[#A2A2B5] group-hover:text-[#1E66EC] transition-all duration-300">
                  <IconComponent size={20} />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-display font-bold text-[15px] sm:text-base text-white leading-tight mb-0.5 group-hover:text-[#1E66EC] transition-colors duration-300">
                    {channel.label}
                  </h3>
                  <p className="font-sans text-xs text-[#A2A2B5] leading-normal group-hover:text-white/80 transition-colors duration-300">
                    {channel.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Dynamic resume preview & PDF generator mock modal */}
        <AnimatePresence>
          {cvModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10 no-print">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCvModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              />

              {/* Sheet container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-white text-[#111111] w-full max-w-4xl h-full max-h-[90vh] rounded-2xl overflow-y-auto shadow-2xl relative z-10 flex flex-col"
              >
                {/* Control bar (sticky on top, non-printable) */}
                <div className="sticky top-0 bg-gray-100 border-b border-gray-200 px-6 py-4 flex items-center justify-between gap-4 z-20 no-print">
                  <div className="flex items-center gap-2 text-gray-700">
                    <NotebookTabs size={18} className="text-brand-blue" />
                    <span className="font-display font-bold text-sm tracking-tight text-gray-900">
                      Visualização de Impressão do Currículo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1ROZkNTrMItF8oWxxDbqxgtbEDE8WcqIl/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download size={14} />
                      Baixar Currículo (Google Drive)
                    </a>
                    <button
                      onClick={handlePrint}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Printer size={14} />
                      Imprimir
                    </button>
                    <button
                      onClick={() => setCvModalOpen(false)}
                      className="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-200 border border-gray-300 p-2 rounded-lg transition-colors cursor-pointer"
                      aria-label="Voltar ao portfólio"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Printable sheet contents */}
                <div id="print-cv-area" className="p-8 sm:p-12 space-y-8 flex-grow select-text">
                  
                  {/* Document Header */}
                  <div className="border-b-2 border-gray-900 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                        Victor Leal
                      </h1>
                      <p className="font-sans text-sm sm:text-base font-semibold text-brand-blue uppercase tracking-wider mt-1">
                        Redator | Copywriter | Jornalista | UX Writer
                      </p>
                    </div>
                    <div className="text-left sm:text-right font-sans text-xs text-gray-600 space-y-1">
                      <p>📍 Uberlândia, MG - Brasil</p>
                      <p>📧 victorlealalo19@gmail.com</p>
                      <p>📞 +55 (34) 99247-7580</p>
                      <p>🔗 linkedin.com/in/victorlealalo-ux-writer</p>
                    </div>
                  </div>

                  {/* Summary Profile */}
                  <div className="space-y-2">
                    <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                      Perfil Profissional
                    </h2>
                    <p className="font-sans text-sm text-gray-700 leading-relaxed">
                      Profissional de comunicação com mais de 10 anos de experiência consolidada unindo jornalismo, marketing digital, copywriting, UX Writing e Inteligência Artificial para desenvolver experiências de comunicação mais estratégicas, humanas e orientadas a resultados. Histórico demonstrável atuando em veículos de comunicação nacionais, agências de marketing, e-commerces de massa e incubadoras tecnológicas. Exímio senso analítico focado em transformar dados comportamentais em caminhos comunicativos eficientes.
                    </p>
                  </div>

                  {/* Employment Experience block summaries */}
                  <div className="space-y-4">
                    <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                      Experiência Profissional
                    </h2>
                    <div className="space-y-6">
                      {experiences.slice(0, 5).map((exp) => (
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
                            {exp.description.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Tools list summaries */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    {/* Column 1: Core skills grouping */}
                    <div className="space-y-3">
                      <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                        Domínio & Competências
                      </h2>
                      <div className="flex flex-wrap gap-1.5">
                        {['UX Writing', 'Copywriting', 'Jornalismo Editorial', 'Storytelling Técnico', 'Linguagem Simples', 'SEO Semântico', 'UX Research', 'Design Conversacional', 'Prompt Engineering', 'Metodologias Ágeis'].map((tag) => (
                          <span key={tag} className="font-sans text-xs text-gray-800 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Highlights of Education list */}
                    <div className="space-y-2">
                      <h2 className="font-display text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-gray-300 pb-1">
                        Formação & Certificações
                      </h2>
                      <ul className="space-y-2 font-sans text-xs sm:text-sm text-gray-750">
                        {courses.slice(0, 4).map((c) => (
                          <li key={c.id} className="flex justify-between">
                            <span className="font-bold">{c.title} <span className="font-normal text-gray-500">({c.institution})</span></span>
                            <span className="font-mono text-[11px] text-gray-500 font-semibold">{c.year}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Document Footer print only notes */}
                  <div className="text-center pt-8 border-t border-gray-200 mt-8">
                    <p className="font-sans text-[10px] text-gray-400">
                      Documento oficial atualizado. Acesse o portfólio digital iterativo completo em seu navegador.
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
