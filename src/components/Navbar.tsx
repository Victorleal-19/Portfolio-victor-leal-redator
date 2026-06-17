import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Award } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Cases', id: 'cases' },
    { label: 'Experiências', id: 'experiences' },
    { label: 'Cursos', id: 'courses' },
    { label: 'Ferramentas', id: 'tools' },
    { label: 'Sobre mim', id: 'about' },
    { label: 'Contato', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-deep/80 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white font-display font-bold text-lg shadow-[0_0_15px_rgba(0,71,188,0.5)] transition-transform group-hover:scale-105 duration-300">
              VL
            </div>
            <div>
              <span className="font-display font-bold text-white text-base block tracking-tight line-clamp-1">
                Victor Leal
              </span>
              <span className="font-sans text-[10px] text-white/50 block -mt-1 tracking-wider uppercase font-medium">
                Redator & Estratégista
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                    active ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA on Navbar */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 glow-soft hover:shadow-[0_0_20px_rgba(30,102,236,0.4)] cursor-pointer"
            >
              Bora conversar? 📱
            </button>
          </div>

          {/* Mobile Menu Icon Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-brand-blue p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-bg-deep border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-colors flex items-center justify-between cursor-pointer ${
                      active
                        ? 'bg-brand-blue/10 text-white border-l-4 border-brand-blue font-semiboldPL'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-brand-blue hover:bg-brand-blue-light text-center text-white text-sm font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer"
                >
                  Bora conversar? 📱
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
