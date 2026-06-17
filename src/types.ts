export interface Case {
  id: string;
  category: 'redacao' | 'social' | 'jornalismo';
  title: string;
  subtitle: string;
  image: string;
  context: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  tools: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  keyOutcomes?: string[];
  skillsUsed: string[];
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  year: string;
  category: 'IA' | 'UX' | 'Conteúdo' | 'SEO' | 'Metodologias';
  topics: string[];
}

export interface Tool {
  name: string;
  category: 'Design & UX' | 'Inteligência Artificial' | 'Analytics & SEO' | 'Produtividade & Gestão' | 'Criação & Edição';
  iconName: string;
  description?: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  iconName: string;
  url: string;
  color: string;
  glowColor: string;
}

