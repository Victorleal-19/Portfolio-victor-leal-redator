import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  title: string;
  description: string;
  heightClass?: string;
  className?: string;
}

export default function ImagePlaceholder({ 
  title, 
  description, 
  heightClass = "h-48 sm:h-64",
  className = ""
}: ImagePlaceholderProps) {
  return (
    <div className={`w-full relative rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#0c0a29]/80 to-[#02000d]/90 p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-brand-blue-light/20 ${heightClass} ${className}`}>
      {/* Visual wireframe backing grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue-light/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative flex flex-col items-center gap-3">
        <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl text-brand-blue-light/80">
          <ImageIcon size={22} className="opacity-80" />
        </div>
        <div className="space-y-1">
          <h5 className="font-display text-sm font-semibold tracking-tight text-white/90">
            {title}
          </h5>
          <p className="font-sans text-xs text-[#A2A2B5] max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
