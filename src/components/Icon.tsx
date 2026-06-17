import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size = 20 }: IconProps) {
  // Gracefully fallback to a default icon if not found
  const LucideIcon = (LucideIcons as any)[name];
  
  if (!LucideIcon) {
    return <LucideIcons.HelpCircle className={className} size={size} />;
  }

  return <LucideIcon className={className} size={size} />;
}
