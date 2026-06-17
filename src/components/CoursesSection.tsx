import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { courses } from '../data';
import { Calendar, GraduationCap, CheckCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CoursesSection() {
  const [expandedCourseIds, setExpandedCourseIds] = useState<Record<string, boolean>>({
    'course-ai-product': true,
    'course-cert-uxw': true
  });

  const toggleCourse = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCourseIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 3 high-impact main course IDs highlighted at the top
  const mainCourseIds = ['course-ai-product', 'course-cert-uxw', 'course-copywriting-spec'];
  const mainCourses = courses.filter(c => mainCourseIds.includes(c.id));
  const otherCourses = courses.filter(c => !mainCourseIds.includes(c.id));

  // Chunk other courses into blocks of 4 cards per slide
  const chunkSize = 4;
  const chunks: (typeof otherCourses)[] = [];
  for (let i = 0; i < otherCourses.length; i += chunkSize) {
    chunks.push(otherCourses.slice(i, i + chunkSize));
  }

  const [slideIndex, setSlideIndex] = useState(0);

  // Autoplay intervals of 6 seconds (6000ms) with primitive dependency array safely configured
  useEffect(() => {
    if (chunks.length === 0) return;
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % chunks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [chunks.length]);

  const handlePrev = () => {
    setSlideIndex(prev => (prev - 1 + chunks.length) % chunks.length);
  };

  const handleNext = () => {
    setSlideIndex(prev => (prev + 1) % chunks.length);
  };

  const renderCourseCard = (course: typeof courses[0], isFeatured = false) => {
    const isExpanded = !!expandedCourseIds[course.id];
    return (
      <div
        key={course.id}
        onClick={(e) => toggleCourse(course.id, e)}
        className={`group bg-[#08071A] hover:bg-[#0c0a29] border rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative h-fit ${
          isExpanded 
            ? 'border-brand-blue/40 shadow-[0_0_20px_rgba(0,71,188,0.15)] bg-[#0d092d]' 
            : 'border-white/5 hover:border-brand-blue/20'
        }`}
      >
        <div className="space-y-4">
          {/* Header badge area */}
          <div className="flex items-center justify-between gap-2">
            <span className={`font-mono text-[8px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-widest ${
              course.category === 'IA' 
                ? 'text-amber-400 bg-amber-400/10 border border-amber-400/20' 
                : course.category === 'UX' 
                ? 'text-[#1e66ec] bg-brand-blue/15 border border-[#1e66ec]/20'
                : 'text-[#A2A2B5] bg-white/5 border border-white/10'
            }`}>
              Badge: {course.category}
            </span>
            <span className="flex items-center gap-1 font-mono text-[10px] text-white/40">
              <Calendar size={11} /> {course.year}
            </span>
          </div>

          {/* Course and Institution Title */}
          <div className="space-y-1 text-left">
            <h3 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-brand-blue-light transition-colors leading-snug">
              {course.title}
            </h3>
            <p className="font-sans text-xs text-white/55 font-medium">
              {course.institution}
            </p>
          </div>
        </div>

        {/* Foldout Topics Content with Framer Motion Animation */}
        <div className="overflow-hidden">
          <AnimatePresence initial={false}>
            {isExpanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="pt-4 border-t border-white/5 space-y-2 text-left"
              >
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-white/30 block">
                  Tópicos praticados e ementa:
                </span>
                <div className="space-y-1.5 pt-0.5">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#A2A2B5] leading-relaxed">
                      <CheckCircle size={10} className="text-brand-blue-light flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-white/20 font-mono text-[8px] uppercase tracking-widest font-bold">
                <span>Visualizar tópicos</span>
                <ChevronDown size={11} className="text-white/40 group-hover:translate-y-0.5 transition-transform" />
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Certificate Marker area */}
        {isExpanded && (
          <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-white/30 font-mono text-[9px] uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <GraduationCap size={13} className="text-brand-blue-light" />
              <span>Especialização Verificada</span>
            </div>
            <ChevronDown size={11} className="text-brand-blue-light rotate-180" />
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="courses" className="py-24 border-b border-white/5 relative overflow-hidden bg-[#01000B] no-print">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header - Centered without description */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Cursos e especializações
          </h2>
        </div>

        {/* Part 1: Top Main Highlights */}
        <div className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            {mainCourses.map(course => renderCourseCard(course, true))}
          </div>
        </div>

        {/* Part 2: Carousel of remaining courses */}
        <div className="w-full relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-lg font-semibold text-white/80">
              Outras especializações
            </h3>
            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer text-white/70 hover:text-white"
                aria-label="Anteriores"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer text-white/70 hover:text-white"
                aria-label="Seguintes"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Active slide display block */}
          <div className="overflow-hidden min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
              >
                {chunks[slideIndex]?.map(course => renderCourseCard(course))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bullet/Dot pagination indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {chunks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  slideIndex === idx ? 'w-6 bg-brand-blue' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
