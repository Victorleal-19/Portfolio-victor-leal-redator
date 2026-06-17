import { Case, Experience, Course, Tool, ContactChannel } from './types';

export const stats = [
  { value: '10+ anos', label: 'de experiência' },
  { value: '6+', label: 'áreas de atuação' },
  { value: '20+', label: 'cursos e certificações' },
  { value: 'Projetos', label: 'para empresas, startups e inst.' }
];

export const cases: Case[] = [
  {
    id: 'case-magalu',
    category: 'redacao',
    title: 'Nova experiência: Favoritos e Listas no Magalu',
    subtitle: 'Simplificação de fluxos e otimização de microcopys no SuperApp Magalu impactando milhões de acessos mensais.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    context: 'A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava sofrendo com ruído de arquitetura, dificultando a migração de salvamentos para a esteira de checkout.',
    challenge: 'Unificar as jornadas de salvamento, criar microcopys contextuais confortáveis e fluidos na interface móvel e encurtar o caminho para o carrinho, mitigando fricções cognitivas.',
    strategy: 'Conduzi auditorias de heurística verbal detalhadas, estruturei testes de leitura (Plain Language) e guiei testes A/B nas chamadas de ação (CTAs) principais de conversão.',
    execution: 'Desenvolvemos modais de aviso com linguagem simplificada, refinamos e limpamos os estados vazios e reestruturamos as mensagens de feedback imediato de sucesso.',
    result: 'Redução tangível de etapas no funil de compra e um aumento de 14.5% em vendas diretas originadas do botão de favoritar.',
    tools: ['Figma', 'UX Research', 'Linguagem Simples', 'Hotjar']
  },
  {
    id: 'case-copy-lp',
    category: 'redacao',
    title: 'Copywriting de Conversão: Lançamento Evergreen',
    subtitle: 'Estrutura persuasiva de Landing Pages, fluxo estratégico de e-mails de conversão e materiais ricos.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    context: 'Empresa do setor de tecnologia necessitava migrar sua estrutura de aquisição fria para um funil perpétuo (evergreen) focado em educar e converter leads altamente qualificados.',
    challenge: 'Escrever uma narrativa fluida baseada no método PAS (Problema, Agitação, Solução) que mantivesse o interesse do lead técnico sem soar puramente comercial.',
    strategy: 'Conduzi entrevistas com clientes ativos para coletar voice-of-customer exato, montei matriz de objeções críticas e gerei headlines magnéticas com forte apelo de escaneabilidade.',
    execution: 'Criação de Landing Pages de alta conversão, e-mails de onboarding comportamentais disparados por clique, newsletters contextuais e um guia técnico gratuito de alto valor.',
    result: 'Elevação de 35% na taxa de conversão de cliques na Landing Page e aumento de faturamento orgânico do funil automatizado.',
    tools: ['Figma', 'ChatGPT', 'Google Analytics', 'Mailchimp']
  },
  {
    id: 'case-seo-blog',
    category: 'redacao',
    title: 'Blog Estético & SEO de Atração Semântica',
    subtitle: 'Artigos otimizados fundamentados em intenção de busca que impulsionaram tráfego orgânico institucional.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    context: 'Estabilizar do zero a reputação orgânica de um ecossistema corporativo em canais de busca, mitigando a dependência excessiva em mídia paga.',
    challenge: 'Produzir artigos longos com profundidade editorial que resolvessem dores genuínas e ao mesmo tempo conquistassem autoridade na primeira página do mecanismo de busca.',
    strategy: 'Mapeamento de lacunas de mercado com ferramentas avançadas, agrupamento de palavras-chave por intenção semântica (search clusters) e redação baseada em fluidez e escaneabilidade em F-pattern.',
    execution: 'Produção contínua de artigos aprofundados, otimizados com cabeçalhos semânticos claros, e estruturação interna de backlinks estratégicos de cross-linking.',
    result: 'Indexação de 12 artigos de fôlego no top 3 do Google em menos de 4 meses, reduzindo o custo de aquisição (CAC).',
    tools: ['SEMrush', 'Ubersuggest', 'Google Search Console', 'NotebookLM']
  },
  {
    id: 'case-newsletter-think',
    category: 'social',
    title: 'Newsletter Think Labs e Crescimento de Audiência Orgânica',
    subtitle: 'Storytelling sofisticado focado em inovação, inteligência artificial e novos negócios para o ecossistema C-Level.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    context: 'Construir relevância editorial orgânica e autoridade de marca em um mercado repleto de mensagens hiperbólicas e poluição comunicativa.',
    challenge: 'Estruturar uma newsletter frequente que retivesse a atenção de fundadores de startups e diretores de inovação em menos de 3 minutos de leitura rápida.',
    strategy: 'Apostar em curadoria assertiva de tendências de IA, linguagem pessoal com alto fator de diálogo, tom de voz profissional e escaneabilidade impecável.',
    execution: 'Modelagem técnica de prompts para resumos executivos baseados no Claude e estruturação de disparos minimalistas com taxas de clique simplificadas.',
    result: 'Atração orgânica de mais de 15 mil inscritos ativos com taxas médias de abertura constantes acima de 48%.',
    tools: ['Claude', 'Mailchimp', 'Notion', 'Google Trends']
  },
  {
    id: 'case-campanha-solar',
    category: 'social',
    title: 'Campanhas de Branding e Conscientização Fotovoltaica',
    subtitle: 'Conteúdo orgânico educativo e posts interativos simplificando a eficiência de energia solar para o público regional.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
    context: 'Expandir o engajamento de uma marca regional de energia renovável traduzindo dados e termos técnicos complexos de engenharia solar para o morador comum.',
    challenge: 'Aproximar o conceito de economia fotovoltaica faturada do dia a dia, gerando de forma lúdica o desejo de simulação e contratação direta.',
    strategy: 'Desenho de calculadoras estéticas de economia simulada nas redes sociais, posts educativos em formato carrossel fundamentados em Storytelling clássico e campanhas sazonais.',
    execution: 'Planejamento síncrono de posts visuais utilizando Canva e Figma, redação de roteiros curtos de vídeos explicativos de alta retenção e moderação humanizada de canais.',
    result: 'Crescimento de 120% no alcance orgânico regional no Facebook e Instagram com captação direta de leads pré-qualificados.',
    tools: ['Canva', 'CapCut', 'Figma', 'Miro']
  },
  {
    id: 'case-jornalismo-cultura',
    category: 'jornalismo',
    title: 'Reportagens Especiais e Entrevistas — Cultura Preta',
    subtitle: 'Produção jornalística humanizada com retratos socioculturais autênticos e coberturas de representatividade racial legítima.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
    context: 'Atuar ativamente na divulgação de artes, conquistas comunitárias, histórias de afroempreendedorismo e bastidores de produções culturais pretas no Brasil.',
    challenge: 'Evitar discursos de pura vulnerabilidade, elevando o pragmatismo artístico ancestral, resiliência econômica inovadora e retratos com técnica narrativa apurada.',
    strategy: 'Etnografia profunda, construção de arcos de narrativa literária (New Journalism) sem fugir da objetividade factual, cobrindo festivais artísticos de relevo nacional.',
    execution: 'Realização de apurações profundas, dezenas de entrevistas audiovisuais de fôlego com personalidades influentes e redação de artigos editoriais polidos.',
    result: 'Pico exponencial de acessos na plataforma cultural e replicação de pautas especiais por portais parceiros de comportamento nacionais.',
    tools: ['NotebookLM', 'Notion', 'CapCut']
  },
  {
    id: 'case-jornalismo-unitri',
    category: 'jornalismo',
    title: 'Cobertura Institucional e PR de Comunidade — UNITRI',
    subtitle: 'Produção ágil de releases factuais, notas radiofônicas locais e matérias especiais de fomento acadêmico.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
    context: 'Fazer a ponte entre a comunidade científica, realizações de extensão da universidade e a imprensa radiofônica e impressa local.',
    challenge: 'Traduzir jargões científicos densos e conquistas de pesquisas acadêmicas complicadas em matérias interessantes e releases fáceis de assimilação de jornais parceiros.',
    strategy: 'Redação tática unindo pirâmide invertida clássica, linguagem simples sem perda de rigor conceitual e relacionamento ativo com jornalistas e editores regionais.',
    execution: 'Entrevistas factuais periódicas com pesquisadores, redação semanal de releases corporativos e produção tática de áudio-scripts breves formatados para rádio local.',
    result: 'Acréscimo de 65% na taxa de publicações orgânicas espontâneas (PR de impacto) da marca nos maiores canais noticiosos regionais.',
    tools: ['Notion', 'NotebookLM', 'Audacity']
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-magalu',
    company: 'Magazine Luiza',
    role: 'UX Writer',
    period: '07/2024 → Atual',
    description: [
      'Construção e otimização de fluxos conversacionais de navegação no aplicativo SuperApp do Magalu, mapeamento de jornadas e confecção contínua de microcopys de botões, mensagens de erro e notificações contextuais.',
      'Desenvolvimento estratégico e padronização gramatical de e-mails transacionais e avisos push de fidelidade.',
      'Validação ativa de cópias em processos de product discovery e pesquisas diretas de usabilidade verbal de produto (testes de heurística, entrevistas e mapas de calor).'
    ],
    keyOutcomes: [
      'Parceria transversal ágil ao lado de Product Designers, Desenvolvedores e Product Owners.',
      'Defesa consistente das premissas de linguagem simples, acessibilidade digital universal (WCAG) e consistência verbal de design.',
      'Implementação estratégica de modelos de IA aplicados para acelerar roteiros de testes de usabilidade e fluxos de escrita de conteúdo.'
    ],
    skillsUsed: ['UX Writing', 'UX Research', 'IA', 'Acessibilidade', 'Produto']
  },
  {
    id: 'exp-culturapreta',
    company: 'Cultura Preta',
    role: 'Jornalista',
    period: '11/2021 → Atual',
    description: [
      'Planejamento, apuração aprofundada de fatos e redação elegante de reportagens especiais englobando cultura afro-brasileira, música, afroempreendedorismo e tendências de comportamento.',
      'Planejamento e gravação de entrevistas especiais profundas com artistas independentes de destaque nacional.'
    ],
    keyOutcomes: [
      'Curadoria autônoma de pautas, gerenciamento eficaz de cronograma de publicação de artigos e otimização semântica SEO avançada gerando autoridade orgânica.'
    ],
    skillsUsed: ['Jornalismo', 'Storytelling', 'Conteúdo', 'Editorial']
  },
  {
    id: 'exp-hawk',
    company: 'Hawk Agency',
    role: 'Copywriter',
    period: '07/2022 → 07/2024',
    description: [
      'Redação persuasiva de Landing Pages de conversão focadas em quebra de objeções, roteirização de vídeos de vendas, confecção de criativos táticos de alta conversão para tráfego pago e fluxos automatizados de e-mails comportamentais.',
      'Desenvolvimento e lapidação de manuais de tom de voz verbal de produtos digitais e infoprodutos recorrentes.'
    ],
    keyOutcomes: [
      'Trabalho colaborativo com gestores de tráfego pago e web designers focados em otimizar as taxas de conversão (CRO).',
      'Monitoramento pragmático de performance, CTR e conversões diretas de vendas.'
    ],
    skillsUsed: ['Copywriting', 'SEO', 'CRO', 'Marketing']
  },
  {
    id: 'exp-multivisi',
    company: 'Multivisi',
    role: 'Copywriter',
    period: '12/2021 → 07/2022',
    description: [
      'Reestruturação completa e simplificação pragmática de descrições técnicas de produtos em páginas de e-commerce de grande porte, visando mitigar objeções e sanar dúvidas frequentes de maquinários.',
      'Geração semanal de campanhas táticas de e-mail marketing estruturando réguas de relacionamento corporativo.'
    ],
    keyOutcomes: [
      'Refinamento de descrições técnicas cruciais aplicando linguagem simples e amigável para compradores industriais e rurais.',
      'Otimizações internas de SEO On-page tático.'
    ],
    skillsUsed: ['SEO', 'Automação', 'E-mail Marketing', 'Conteúdo']
  },
  {
    id: 'exp-ecos',
    company: 'Ecos Energia Solar',
    role: 'Social Media',
    period: '08/2021 → 12/2021',
    description: [
      'Planejamento completo, copywriting persuasivo de postagens informativas e design básico de suporte de posts educando e engajando o consumidor sobre a economia sustentável da energia fotovoltaica fotovoltaica.',
      'Redação tática de Landing Pages educativas regionais destinadas a leads de topo e meio de funil.'
    ],
    keyOutcomes: [
      'Integração orgânica alinhando os contatos de leads ativos motivados pelas redes com a esteira consultiva comercial real.'
    ],
    skillsUsed: ['Social Media', 'Landing Pages', 'Conteúdo', 'Marketing']
  },
  {
    id: 'exp-[#01000b]tri',
    company: 'UNITRI',
    role: 'Jornalista',
    period: '05/2019 → 05/2021',
    description: [
      'Apuração de fatos jornalísticos internos da universidade, cobertura fotográfica detalhada de debates acadêmicos e elaboração formal de notas de imprensa.',
      'Escrita diária de releases corporativos e notas para a imprensa e produção de roteiros de notícias curtas para rádio acadêmica.'
    ],
    keyOutcomes: [
      'Construção de relações sólidas com canais corporativos e fomento constante a publicações de mídia espontânea na comarca regional.'
    ],
    skillsUsed: ['Jornalismo', 'Storytelling', 'PR', 'Rádio']
  },
  {
    id: 'exp-freelancer',
    company: 'Freelancer',
    role: 'UX Writer | Redator | Copywriter | Social Media | Jornalista | Gestor de Tráfego',
    period: '2019 → Atual',
    description: [
      'Atendimento consultivo personalizado para startups inovadoras, marcas institucionais de renome e criadores de conteúdo independentes espalhados pelo Brasil.',
      'Reestruturação de websites, redação de materiais ricos e copys persuasivas integradas com técnicas refinadas de inteligência artificial generativa.'
    ],
    keyOutcomes: [
      'Foco integral em cocriação multidisciplinar baseado no pragmatismo analítico verbal de conversão e treinamento de fluxos eficientes.'
    ],
    skillsUsed: ['UX Writing', 'Copywriting', 'Tráfego Pago', 'Marketing', 'IA']
  }
];

export const courses: Course[] = [
  // IA Badges
  {
    id: 'course-ai-product',
    title: 'AI Product Week',
    institution: 'Escola PM3',
    year: '2024',
    category: 'IA',
    topics: ['Product Management de Inteligência Artificial', 'LLMs em Produção & Custos', 'Integração de Modelos em Apps', 'UX e Fluxos para Interfaces com IA']
  },
  {
    id: 'course-claude-ai',
    title: 'Claude AI',
    institution: 'Anthropic Academy',
    year: '2024',
    category: 'IA',
    topics: ['Prompt Engineering Avançado', 'Modelagem Semiótica e Tom de Voz Verbal', 'Sprints de Construção Customizada', 'Análise de Sentimentos e Resumos Segmentados']
  },
  {
    id: 'course-ia-trabalho',
    title: 'Como Aplicar IA no Trabalho',
    institution: 'Alura',
    year: '2023',
    category: 'IA',
    topics: ['Produtividade Acelerada com Generative AI', 'Agilização de Copys & Brainstorming', 'Automatização de Tarefas com LLMs', 'Segurança de Dados e Refinamentos']
  },
  {
    id: 'course-prompt-eng',
    title: 'Prompt Engineering',
    institution: 'Vanderbilt University',
    year: '2023',
    category: 'IA',
    topics: ['Estruturação de prompts eficientes', 'Zero-shot, Few-shot e Chain-of-Thought', 'Engenharia de Prompt para Conteúdo de Escala', 'Mitigação de Alucinações Corporativas']
  },
  {
    id: 'course-ia-mkt',
    title: 'IA para Marketing',
    institution: 'Conversão',
    year: '2024',
    category: 'IA',
    topics: ['Criação de Personas de Marca com Modelos Cognitivos', 'Análise Semântica de Avaliações de Clientes', 'Curadoria e Validação Crítica de Copys', 'Hiperpersonalização Assistida por IA']
  },
  // UX Badges
  {
    id: 'course-cert-uxw',
    title: 'UX Writing & Conteúdo Digital',
    institution: 'Aldeia',
    year: '2022',
    category: 'UX',
    topics: ['Princípios Globais de UX Writing', 'Auditoria Heurística Comunicativa', 'Microcopys Amigáveis e Clareza', 'Criação de Guias de Tom de Voz']
  },
  {
    id: 'course-ux-research',
    title: 'UX Research',
    institution: 'Mergo',
    year: '2023',
    category: 'UX',
    topics: ['Condução de Testes de Usabilidade Verbal', 'Protocolos Cogitativos (Think Aloud)', 'Análise Qualitativa de Entrevistas', 'Alinhamento com Product Designers']
  },
  {
    id: 'course-ux-design',
    title: 'UX Design',
    institution: 'How Bootcamps',
    year: '2022',
    category: 'UX',
    topics: ['Fundamentos de UI/UX Design no Figma', 'Mapeamento Metódico de Jornadas e Fluxos', 'Heurísticas de UX Aplicadas à Interface', 'Princípios de Consistência e Gestalt']
  },
  {
    id: 'course-conversational',
    title: 'Design Conversacional',
    institution: 'Udemy / Kurio',
    year: '2023',
    category: 'UX',
    topics: ['Arquitetura de Fluxo Conversacional', 'Linguagem Humana em Interfaces de Voz', 'Desenho de Intenções e Entidades', 'Integração de APIs de Atendimento']
  },
  // Conteúdo Badges
  {
    id: 'course-copywriting-spec',
    title: 'Copywriting e Storytelling Persuasivo',
    institution: 'Copy Society',
    year: '2021',
    category: 'Conteúdo',
    topics: ['Técnicas de Headline de Alto Impacto', 'Uso Estruturado do Método PAS (Problema, Agitação, Solução)', 'Narrativas de Arcos Dramáticos Corporativos', 'Redação e Quebra de Objeções Diretas']
  },
  {
    id: 'course-mkt-conteudo',
    title: 'Marketing de Conteúdo',
    institution: 'Rock Content',
    year: '2020',
    category: 'Conteúdo',
    topics: ['Práticas Clássicas de Inbound Marketing', 'Estruturação de Calendário Editorial de Alta Escala', 'Métricas de CAC, ROI e Taxas de Retenção Orgânica', 'Materiais Ricos e Captação Inteligente de Leads']
  },
  {
    id: 'course-linguagem-simples',
    title: 'Curso de Linguagem Simples',
    institution: 'Enap',
    year: '2022',
    category: 'Conteúdo',
    topics: ['Eliminação de Jargões e Fricção de Leitura', 'Diretrizes de Clareza e Plain Language', 'Critérios Nacionais de Visual Law e Escrita', 'Leitura Facilitada e Práticas de Inclusão']
  },
  // SEO Badges
  {
    id: 'course-seo-summit',
    title: 'SEO Summit',
    institution: 'Conversão',
    year: '2024',
    category: 'SEO',
    topics: ['SEO On-page & Otimizações Semânticas', 'Rastreabilidade e Indexação Google', 'Arquitetura Editorial Hub-and-Spoke', 'UX Aplicada a Buscas Orgânicas']
  },
  {
    id: 'course-prompt-seo',
    title: 'Prompt Engineering para SEO',
    institution: 'Mirago',
    year: '2024',
    category: 'SEO',
    topics: ['Automação de Roteamento Semântico com LLMs', 'Mapeamento Automatizado de Palavras-Chave', 'Criação de Briefing Otimizado de Redação', 'Intenção do Usuário e Otimização Avançada']
  },
  // Metodologias Badges
  {
    id: 'course-metodologias-ageis',
    title: 'Metodologias Ágeis',
    institution: 'Escola PM3',
    year: '2022',
    category: 'Metodologias',
    topics: ['Framework Scrum, Sprints e Daily Meetings', 'Quadro Kanban e Organização Visual', 'Gestão Ágil de Backlogs Transversais de Produto', 'Colaboração e OKRs entre Diferentes Squads']
  }
];

export const tools: Tool[] = [
  // AI & Content
  { name: 'Claude', category: 'Design & UX', iconName: 'Brain', description: 'Redação refinada, análise semiótica de tom verbal.' },
  { name: 'Claude Code', category: 'Criação & Edição', iconName: 'Code', description: 'Escrita de código estruturada e manutenção sistêmica sênior.' },
  { name: 'ChatGPT', category: 'Design & UX', iconName: 'Zap', description: 'Brainstorm extremado, geração ágil de ideias rápidas.' },
  { name: 'Gemini', category: 'Design & UX', iconName: 'Cpu', description: 'Integração e buscas táticas no ecossistema contextual Google.' },
  { name: 'NotebookLM', category: 'Design & UX', iconName: 'BookOpen', description: 'Sínteses, curadoria de pesquisas e estudos analíticos.' },
  { name: 'Manus', category: 'Design & UX', iconName: 'Sparkles', description: 'Co-pilotagem autônoma de fluxos de trabalho.' },

  // UX Design & Research
  { name: 'Figma', category: 'Inteligência Artificial', iconName: 'Layers', description: 'Prototipagem de interfaces, testes de microcopys no layout.' },
  { name: 'FigJam', category: 'Inteligência Artificial', iconName: 'Map', description: 'Dinâmicas colaborativas e mapeamento de fluxos de usuário.' },
  { name: 'Figma Make', category: 'Inteligência Artificial', iconName: 'Sparkles', description: 'Design generativo ágil para rascunhos de layouts.' },
  { name: 'Miro', category: 'Inteligência Artificial', iconName: 'LayoutGrid', description: 'Arquitetura informacional de interfaces e brainstorms de UX.' },
  { name: 'Canva', category: 'Inteligência Artificial', iconName: 'Image', description: 'Mockups rápidos e apoio visual em projetos criativos.' },
  { name: 'Photoshop', category: 'Inteligência Artificial', iconName: 'Paintbrush', description: 'Tratamentos de imagens e artes corporativas refinadas.' },
  { name: 'CapCut', category: 'Inteligência Artificial', iconName: 'Video', description: 'Sincronização e cortes dinâmicos em roteiros de alta retenção.' },
  { name: 'Maze', category: 'Inteligência Artificial', iconName: 'Flame', description: 'Pesquisas remotas de usabilidade com protótipo interativo.' },
  { name: 'Hotjar', category: 'Inteligência Artificial', iconName: 'Compass', description: 'Análise de mapas de calor e comportamentos de clique.' },
  { name: 'UXCam', category: 'Inteligência Artificial', iconName: 'Smartphone', description: 'Análise de usabilidade real e gravação de sessões em mobile.' },

  // SEO & Analytics
  { name: 'Google Trends', category: 'Analytics & SEO', iconName: 'TrendingUp', description: 'Mapeamento temporal das maiores buscas do momento orgânico.' },
  { name: 'Ubersuggest', category: 'Analytics & SEO', iconName: 'Search', description: 'Pesquisa refinada de termos-chave e volumes de pesquisa.' },
  { name: 'Google Analytics', category: 'Analytics & SEO', iconName: 'BarChart2', description: 'Monitoramento pragmático de taxas de conversão de leads e funil.' },
  { name: 'Google Search Console', category: 'Analytics & SEO', iconName: 'Globe', description: 'Diagnósticos e monitoramentos técnicos de páginas no Google.' },
  { name: 'SEMrush', category: 'Analytics & SEO', iconName: 'Compass', description: 'Análise de concorrência orgânica de topo, meio e fundo de funil.' },

  // Documentation & Collaboration
  { name: 'Notion', category: 'Produtividade & Gestão', iconName: 'StickyNote', description: 'Célula pessoal de notas rápidas, rascunhos e diário de escrita.' },
  { name: 'Confluence', category: 'Produtividade & Gestão', iconName: 'Folder', description: 'Leitura de portfólios institucionais de produto e especificações de squads.' },
  { name: 'Zeroheight', category: 'Produtividade & Gestão', iconName: 'FileText', description: 'Consumo e documentação de Content Style Guides em Design Systems.' },
  { name: 'Google Workspace', category: 'Produtividade & Gestão', iconName: 'LayoutGrid', description: 'Escritório cooperativo essencial em nuvem para arquivos de texto.' },
  { name: 'Slack', category: 'Produtividade & Gestão', iconName: 'Slack', description: 'Comunicações diárias cruciais e ágeis com equipes e stakeholders.' },
  { name: 'Discord', category: 'Produtividade & Gestão', iconName: 'MessagesSquare', description: 'Alinhamentos corporativos rápidos e comunidades técnicas de IA.' },
  { name: 'Asana', category: 'Produtividade & Gestão', iconName: 'Calendar', description: 'Organização tática de tarefas integradas e timelines de datas.' },
  { name: 'Trello', category: 'Produtividade & Gestão', iconName: 'Kanban', description: 'Gerenciamento visual flexível e intuitivo de entregas diárias.' },

  // Development & Vibe Coding
  { name: 'VS Code', category: 'Criação & Edição', iconName: 'Code', description: 'Editor e visualizador de tags semânticas e marcações HTML.' },
  { name: 'Codex', category: 'Criação & Edição', iconName: 'Terminal', description: 'Estudos e testes de prompt-scripts e IA aplicados para engenharia.' },
  { name: 'Google AI Studio', category: 'Criação & Edição', iconName: 'Sparkles', description: 'Ambiente de testes para chamadas de APIs do Gemini de ponta.' },
  { name: 'Lovable', category: 'Criação & Edição', iconName: 'Compass', description: 'Plataforma de prototipagem ágil de web apps.' },
  { name: 'Antigravity', category: 'Criação & Edição', iconName: 'Cpu', description: 'Deploy autônomo síncrono e integrado de servidores em containers.' },
  { name: 'Voiceflow', category: 'Criação & Edição', iconName: 'MessageSquareText', description: 'Prototipagem interativa rápida de fluxos conversacionais.' },
  { name: 'Vercel', category: 'Criação & Edição', iconName: 'Cloud', description: 'Deploy rápido de páginas e APIs web sem fricção.' },
  { name: 'Netlify', category: 'Criação & Edição', iconName: 'CloudLightning', description: 'Solução moderna de hospedagem de front-ends sem complicação.' }
];

export const contacts: ContactChannel[] = [
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/victorlealalo-ux-writer',
    iconName: 'Linkedin',
    url: 'https://www.linkedin.com/in/victorlealalo-ux-writer/',
    color: '#0A66C2',
    glowColor: 'rgba(10, 102, 194, 0.4)'
  },
  {
    id: 'contact-whatsapp',
    label: 'WhatsApp',
    value: '+55 (34) 99247-7580',
    iconName: 'Smartphone',
    url: 'https://api.whatsapp.com/send?phone=5534992477580&text=Ol%C3%A1%20Victor%2C%20tudo%20bem%3F%20Adorei%20o%20seu%20trabalho!%20Bora%20bater%20um%20papo%3F',
    color: '#25D366',
    glowColor: 'rgba(37, 211, 102, 0.4)'
  },
  {
    id: 'contact-email',
    label: 'E-mail',
    value: 'victorlealalo19@gmail.com',
    iconName: 'Mail',
    url: 'mailto:victorlealalo19@gmail.com',
    color: '#EA4335',
    glowColor: 'rgba(234, 67, 53, 0.4)'
  },
  {
    id: 'contact-medium',
    label: 'Medium',
    value: 'medium.com/@victorleal19',
    iconName: 'BookOpen',
    url: 'https://medium.com/@victorleal19',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.4)'
  },
  {
    id: 'contact-behance',
    label: 'Behance',
    value: 'behance.net/victorleal9',
    iconName: 'Globe',
    url: 'https://www.behance.net/victorleal9',
    color: '#0057FF',
    glowColor: 'rgba(0, 87, 255, 0.4)'
  },
  {
    id: 'contact-cv',
    label: 'Download CV',
    value: 'Versão PDF completa',
    iconName: 'Download',
    url: 'https://drive.google.com/file/d/1zdyFsLR1WkTTlIgtaxZtShYjB7tkLQVa/view?usp=drive_link',
    color: '#0047BC',
    glowColor: 'rgba(0, 71, 188, 0.4)'
  }
];

// Fallback utility to guarantee full print compatibility without duplicate arrays
experiences.forEach((exp: any) => {
  if (!exp.description) {
    exp.description = exp.responsabilidades || [];
  }
});
