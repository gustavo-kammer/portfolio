import { Project, ProjectType, VersatilityCrop } from './types';

export type { Project };

export const TYPE_LABELS: Record<ProjectType, { pt: string; en: string }> = {
  healthtech: { pt: 'Healthtech', en: 'Healthtech' },
  edtech: { pt: 'EdTech', en: 'EdTech' },
  agritech: { pt: 'AgriTech', en: 'AgriTech' },
  govtech: { pt: 'GovTech', en: 'GovTech' },
  sports: { pt: 'Esporte', en: 'Sports' },
  enterprise: { pt: 'Enterprise', en: 'Enterprise' },
};

export const VERSATILITY_CROPS: VersatilityCrop[] = [
  {
    src: 'assets/images/crops/SANTERRA.webp',
    alt: {
      pt: 'Painel administrativo Santerra em laptop, fundo grafite escuro',
      en: 'Santerra admin dashboard on laptop, dark graphite background',
    },
    styleTag: { pt: 'Enterprise SaaS', en: 'Enterprise SaaS' },
  },
  {
    src: 'assets/images/crops/PCA.webp',
    alt: {
      pt: 'App PCA-P em smartphone dark mode sobre concreto claro',
      en: 'PCA-P dark mode app on smartphone resting on light concrete',
    },
    styleTag: { pt: 'Esporte & Performance', en: 'Sports & Performance' },
  },
  {
    src: 'assets/images/crops/UNESC.webp',
    alt: {
      pt: 'Smart Campus UNESC com mapa 3D em monitor, ambiente acadêmico',
      en: 'Smart Campus UNESC with 3D map on monitor, academic environment',
    },
    styleTag: { pt: 'Educação & IoT', en: 'Education & IoT' },
  },
  {
    src: 'assets/images/crops/PROCER.webp',
    alt: {
      pt: 'Dashboard Procer em laptop sobre superfície de juta natural',
      en: 'Procer dashboard on laptop over natural jute surface',
    },
    styleTag: { pt: 'Agronegócio', en: 'Agribusiness' },
  },
  // {
  //   src: 'assets/images/crops/GAAET.png',
  //   alt: {
  //     pt: 'Sistema GaAE com mapa de Criciúma em monitor institucional',
  //     en: 'GaAE system with Criciúma map on institutional monitor',
  //   },
  //   styleTag: { pt: 'Saúde Pública', en: 'Public Health' },
  // },
  {
    src: 'assets/images/crops/MEDICAL IA.webp',
    alt: {
      pt: 'Medical AI em composição multi-device, laptop e smartphone',
      en: 'Medical AI in multi-device composition, laptop and smartphone',
    },
    styleTag: { pt: 'Healthtech', en: 'Healthtech' },
  },
];

export const PROJECTS: Project[] = [
  // 1. CONECTA IA — Santerra Distribuidora
  {
    slug: 'conecta-ia',
    title: { pt: 'Conecta IA', en: 'Conecta IA' },
    description: {
      pt: 'Plataforma de chat comercial inteligente com painel administrativo completo.',
      en: 'Intelligent commercial chat platform with full administrative panel.',
    },
    year: 2025,
    type: 'enterprise',
    role: 'UI/UX Design',
    client: 'Santerra Distribuidora',
    thumbnail: 'assets/images/projects/santerra/thumb.png',
    hero: 'assets/images/projects/santerra/hero.webp',
    context: {
      pt: 'A Santerra Distribuidora precisava de uma plataforma interna para apoiar sua equipe comercial com inteligência artificial — desde consultas rápidas até gestão de prompts, monitoramento de uso e auditoria. O desafio era reunir, em uma única interface, funcionalidades que normalmente se espalham em várias ferramentas: chat de IA, dashboard de utilização e custo, cadastro hierárquico de prompts, logs detalhados, gestão de usuários e relatórios exportáveis. Trabalhei na arquitetura de informação dos módulos, na consistência visual entre as nove telas principais e na hierarquia visual de dados densos — para que administrador, gestor e analista encontrassem cada um o que precisa sem ruído.',
      en: 'Santerra Distribuidora needed an internal platform to support its commercial team with AI — from quick queries to prompt management, usage monitoring, and auditing. The challenge was bringing together, in a single interface, features that usually live across multiple tools: AI chat, usage and cost dashboards, hierarchical prompt registry, detailed logs, user management, and exportable reports. I worked on the information architecture across modules, the visual consistency between the nine main screens, and the visual hierarchy of dense data — so that admin, manager, and analyst each find what they need without noise.',
    },
    gallery: [
      {
        src: 'assets/images/projects/santerra/galeria/01-login.png',
        caption: {
          pt: '01 · Tela de entrada · Login institucional com identidade Santerra',
          en: '01 · Entry screen · Institutional login with Santerra identity',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/02-dashboard.png',
        caption: {
          pt: '02 · Painel administrativo · KPIs de uso e custo da IA, séries temporais e performance semanal',
          en: '02 · Admin panel · AI usage and cost KPIs, time series, and weekly performance',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/03-usuarios.png',
        caption: {
          pt: '03 · Gestão de usuários · Listagem com filtros de status e ação contextual',
          en: '03 · User management · Listing with status filters and contextual actions',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/04-perfil.png',
        caption: {
          pt: '04 · Perfil do usuário · Detalhamento de identificação, contato e carteira',
          en: '04 · User profile · Identification, contact, and account details',
        },
        type: 'detail',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/05-cadastro-prompt.png',
        caption: {
          pt: '05 · Cadastro de prompts · Estrutura hierárquica com ações por nível',
          en: '05 · Prompt registry · Hierarchical structure with per-level actions',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/06-relatorios-vazio.png',
        caption: {
          pt: '06 · Relatórios · Estado vazio · O painel orienta o usuário antes do primeiro relatório',
          en: '06 · Reports · Empty state · The panel guides the user before the first report',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/07-relatorios-tabela.png',
        caption: {
          pt: '07 · Relatórios · Visualização em tabela · Dados estruturados com exportação',
          en: '07 · Reports · Table view · Structured data with export',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/08-relatorios-grafico.png',
        caption: {
          pt: '08 · Relatórios · Visualização em gráfico · Mesma base, leitura diferente',
          en: '08 · Reports · Chart view · Same data, different reading',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/santerra/galeria/09-logs-auditoria.png',
        caption: {
          pt: '09 · Logs e auditoria · Rastreabilidade de erros, alertas e ações por módulo',
          en: '09 · Logs and audit · Traceability of errors, alerts, and actions by module',
        },
        type: 'screen',
        device: 'web',
      },
    ],
    brandSystem: {
      fontFamily: {
        name: 'Albert Sans',
        googleFontsUrl:
          'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&display=swap',
        fonts: [
          { family: 'Albert Sans', weight: 700, label: 'Bold' },
          { family: 'Albert Sans', weight: 400, label: 'Regular' },
        ],
      },
      palette: [
        { hex: '#191e6e', cmyk: { c: 100, m: 96, y: 36, k: 18 } },
        { hex: '#1e2ca3', cmyk: { c: 100, m: 89, y: 1, k: 7 } },
        { hex: '#1555c2', cmyk: { c: 92, m: 66, y: 0, k: 0 } },
        { hex: '#ffffff', cmyk: { c: 0, m: 0, y: 0, k: 0 }, name: { pt: 'Branco', en: 'White' } },
        { hex: '#000000', cmyk: { c: 0, m: 0, y: 0, k: 100 }, name: { pt: 'Preto', en: 'Black' } },
      ],
      manualReference: {
        pt: 'Guia de Usabilidade 2025 · Manual de Marca Santerra',
        en: 'Usability Guide 2025 · Santerra Brand Manual',
      },
    },
    styleTag: 'corporate',
  },

  // 2. PCA-P — Biohacking & Performance
  {
    slug: 'pca-p',
    title: { pt: 'PCA-P', en: 'PCA-P' },
    description: {
      pt: 'App mobile de biohacking e performance esportiva com gamificação.',
      en: 'Mobile biohacking and athletic performance app with gamification.',
    },
    year: 2026,
    type: 'sports',
    role: 'UI/UX Design',
    client: 'Pain Cave Academy',
    thumbnail: 'assets/images/projects/pca/thumb.png',
    hero: 'assets/images/projects/pca/hero.webp',
    context: {
      pt: 'PCA-P é um aplicativo voltado a atletas que querem entender e otimizar a própria performance através de dados de recuperação, treino e biohacking. O desafio era apresentar muita informação técnica — score de recuperação, fitness, forma, fadiga, integração com Strava — sem perder a leveza de um produto que o usuário abre todo dia. A solução foi um dark mode que reduz fadiga visual, gamificação calibrada (Jornada do Herói, níveis, XP) para criar engajamento sem virar jogo, e um gráfico radar central que comunica o estado geral do atleta em um único olhar. Cada elemento foi pensado para que o atleta abra o app, entenda como está em 3 segundos e tome uma decisão.',
      en: "PCA-P is an app for athletes who want to understand and optimize their performance through recovery, training, and biohacking data. The challenge was presenting dense technical information — recovery score, fitness, form, fatigue, Strava integration — without losing the lightness of a product users open daily. The solution: a dark mode that reduces visual fatigue, calibrated gamification (Hero's Journey, levels, XP) to drive engagement without feeling like a game, and a central radar chart that communicates the athlete's overall state at a glance. Every element was designed so the athlete opens the app, understands their state in 3 seconds, and makes a decision.",
    },
    gallery: [],
    styleTag: 'playful',
  },

  // 3. SMART CAMPUS — UNESC
  {
    slug: 'smart-campus-unesc',
    title: { pt: 'Smart Campus', en: 'Smart Campus' },
    description: {
      pt: 'Painel de monitoramento em tempo real do campus universitário, com mapa 3D e sensores IoT.',
      en: 'Real-time university campus monitoring panel, with 3D map and IoT sensors.',
    },
    year: 2026,
    type: 'edtech',
    role: 'UI/UX Design & Dev Frontend',
    client: 'UNESC',
    thumbnail: 'assets/images/projects/unesc/thumb.png',
    hero: 'assets/images/projects/unesc/hero.webp',
    context: {
      pt: 'A UNESC precisava centralizar, em uma única interface, dados de sensores IoT espalhados pelo campus — temperatura, umidade, qualidade do ar, alertas de equipamentos — junto com a visualização espacial dos blocos. O desafio era equilibrar densidade de informação com legibilidade: o administrador precisa entender o estado do campus inteiro em segundos, mas também conseguir descer ao nível de bloco e dispositivo individual. Trabalhei o mapa 3D como elemento âncora — ele oferece a leitura geográfica imediata — pareado com cards de KPI no topo e um gráfico de barras stacked que revela o estado de cada bloco. Eventos críticos aparecem em painel lateral persistente, sem interromper o fluxo de quem está navegando o mapa.',
      en: "UNESC needed to centralize, in a single interface, data from IoT sensors spread across the campus — temperature, humidity, air quality, equipment alerts — together with the spatial visualization of buildings. The challenge: balancing information density with legibility. The administrator needs to grasp the campus state in seconds, but also drill down to individual building and device. The 3D map became the anchor element — it offers immediate geographic reading — paired with KPI cards at the top and a stacked bar chart that reveals each building's state. Critical events appear in a persistent side panel, without interrupting whoever is navigating the map.",
    },
    gallery: [],
    styleTag: 'corporate',
  },

  // 4. PROCER PARTNER — Agrointeligência Pós-Colheita
  {
    slug: 'procer-partner',
    title: { pt: 'Procer Partner', en: 'Procer Partner' },
    description: {
      pt: 'Plataforma de gestão documental e compliance para parceiros de agronegócio.',
      en: 'Document management and compliance platform for agribusiness partners.',
    },
    year: 2026,
    type: 'agritech',
    role: 'UI/UX Design & Dev Frontend',
    client: 'Procer',
    thumbnail: 'assets/images/projects/procer/thumb.png',
    hero: 'assets/images/projects/procer/hero.webp',
    context: {
      pt: 'A Procer atua na agrointeligência de pós-colheita e precisava de uma plataforma para gerenciar a relação documental e contratual com dezenas de empresas terceirizadas. O desafio era projetar dois sistemas em um — uma visão de comando para a equipe interna da Procer (validação de documentos, gestão de contratos, auditoria) e uma visão de operação para as empresas terceiras (envio de documentos, acompanhamento de pendências, correção de reprovações) — mantendo coerência visual e lógica entre os dois lados. O sistema cobre 14 módulos distribuídos entre os dois níveis de acesso, com fluxos críticos de compliance: criação de formulários personalizados de documento, modelos de contrato com campos dinâmicos, sistema de alertas escalonados (30/60/90 dias) e auditoria completa de ações. Cada decisão de design foi pensada considerando que documentos vencidos ou contratos mal-aprovados têm consequência jurídica real.',
      en: "Procer operates in post-harvest agro-intelligence and needed a platform to manage documentation and contractual relationships with dozens of third-party companies. The challenge: designing two systems in one — a command view for Procer's internal team (document validation, contract management, auditing) and an operational view for third-party companies (document submission, pending tracking, rejection correction) — keeping visual and logical coherence between both sides. The system covers 14 modules across two access levels, with critical compliance flows: custom document form creation, contract templates with dynamic fields, tiered alert system (30/60/90 days), and complete action auditing. Every design decision was made considering that expired documents or mis-approved contracts have real legal consequences.",
    },
    gallery: [
      {
        src: 'assets/images/projects/procer/galeria/01-login.png',
        caption: {
          pt: '01 · Tela de entrada · Login institucional com identidade industrial Procer',
          en: '01 · Entry screen · Institutional login with Procer industrial identity',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/02-registro-etapa-1.png',
        caption: {
          pt: '02 · Cadastro · Etapa 1 de 4 · Dados da empresa com progress bar persistente',
          en: '02 · Registration · Step 1 of 4 · Company data with persistent progress bar',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/03-registro-etapa-4.png',
        caption: {
          pt: '03 · Cadastro · Etapa 4 de 4 · Documentação obrigatória com upload e validação',
          en: '03 · Registration · Step 4 of 4 · Required documentation with upload and validation',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/04-dashboard-admin-terceiros.png',
        caption: {
          pt: '04 · Dashboard Admin · Visão consolidada das empresas terceiras · KPIs gerais e alertas críticos',
          en: '04 · Admin Dashboard · Consolidated view of third-party companies · General KPIs and critical alerts',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/05-dashboard-admin-interno.png',
        caption: {
          pt: '05 · Dashboard Admin · Modo gestão interna · O mesmo painel, agora dedicado à documentação da própria Procer',
          en: "05 · Admin Dashboard · Internal management mode · The same panel, now dedicated to Procer's own documentation",
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/06-documentos-validacao.png',
        caption: {
          pt: '06 · Validação de documento · Aprovar, reprovar ou solicitar correção com comentário · ação com consequência jurídica',
          en: '06 · Document validation · Approve, reject, or request correction with comment · action with legal consequence',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/07-tipos-documento.png',
        caption: {
          pt: '07 · Tipos de documento · Construção de formulários personalizados com validade e obrigatoriedade definidas pelo admin',
          en: '07 · Document types · Custom form builder with validity and required fields defined by admin',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/08-modelos-contrato.png',
        caption: {
          pt: '08 · Modelos de contrato · Editor com campos dinâmicos (CNPJ, razão social) e versionamento',
          en: '08 · Contract templates · Editor with dynamic fields (Tax ID, company name) and versioning',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/09-funcionario-ficha.png',
        caption: {
          pt: '09 · Ficha do colaborador · Foto, dados, documentos obrigatórios e status documental individual',
          en: '09 · Employee profile · Photo, data, required documents, and individual document status',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/procer/galeria/10-alertas.png',
        caption: {
          pt: '10 · Alertas · Listagem com filtros por tipo e criticidade · prevenção de vencimentos e pendências',
          en: '10 · Alerts · Listing with filters by type and severity · expiration and pending prevention',
        },
        type: 'screen',
        device: 'web',
      },
    ],
    brandSystem: {
      fontFamily: {
        name: 'Inter',
        fonts: [
          { family: 'Inter', weight: 700, label: 'Bold' },
          { family: 'Inter', weight: 400, label: 'Regular' },
        ],
      },
      tokenGroups: [
        {
          groupName: { pt: 'Marca', en: 'Brand' },
          description: {
            pt: 'Cores principais da identidade Procer · ação primária e destaques secundários',
            en: 'Procer core brand colors · primary action and secondary highlights',
          },
          tokens: [
            { name: 'brand.primary', hex: '#00339E' },
            { name: 'brand.secondary', hex: '#019DE8' },
          ],
        },
        {
          groupName: { pt: 'Fundo', en: 'Background' },
          description: {
            pt: 'Superfícies da interface · hierarquia entre primária, secundária e navegação',
            en: 'Interface surfaces · hierarchy across primary, secondary and navigation',
          },
          tokens: [
            { name: 'background.primary', hex: '#F1F5F9' },
            { name: 'background.secondary', hex: '#E6F6FD' },
            { name: 'background.navbar', hex: '#00091F' },
          ],
        },
        {
          groupName: { pt: 'Feedback', en: 'Feedback' },
          description: {
            pt: 'Sinalização de estados · sucesso, atenção, erro e perigo · cada estado com variante clara para fundos',
            en: 'State signaling · success, warning, error and danger · each state with light variant for backgrounds',
          },
          tokens: [
            { name: 'feedback.success', hex: '#3EAD22' },
            { name: 'feedback.success-light', hex: '#EAF7E7' },
            { name: 'feedback.warning', hex: '#F4B400' },
            { name: 'feedback.warning-light', hex: '#FFF6DB' },
            { name: 'feedback.danger', hex: '#D6505A' },
            { name: 'feedback.danger-light', hex: '#F9ECED' },
            { name: 'feedback.error', hex: '#FF0000' },
            { name: 'feedback.error-light', hex: '#FDECEC' },
          ],
        },
        {
          groupName: { pt: 'Neutros', en: 'Neutral' },
          description: {
            pt: 'Escala de cinza · base do sistema · usada em textos, bordas e ícones',
            en: 'Grayscale · system foundation · used for text, borders and icons',
          },
          tokens: [
            { name: 'neutral.gray-50', hex: '#F8FAFC' },
            { name: 'neutral.gray-100', hex: '#EEEFF0' },
            { name: 'neutral.gray-300', hex: '#BABCC7' },
            { name: 'neutral.gray-400', hex: '#B0BAC9' },
            { name: 'neutral.gray-500', hex: '#64748B' },
            { name: 'neutral.gray-700', hex: '#535767' },
          ],
        },
        {
          groupName: { pt: 'Tokens semânticos', en: 'Semantic tokens' },
          description: {
            pt: 'Tokens funcionais que referenciam neutros · garantem consistência entre componentes',
            en: 'Functional tokens that reference neutrals · ensure consistency across components',
          },
          tokens: [
            { name: 'font.title', hex: '#000000', referencesToken: 'Base.black' },
            { name: 'font.primary', hex: '#535767', referencesToken: 'neutral.gray-700' },
            { name: 'font.secondary', hex: '#64748B', referencesToken: 'neutral.gray-500' },
            { name: 'icon.primary', hex: '#BABCC7', referencesToken: 'neutral.gray-300' },
            { name: 'icon.secondary', hex: '#535767', referencesToken: 'neutral.gray-700' },
            { name: 'stroke.primary', hex: '#535767', referencesToken: 'neutral.gray-700' },
            { name: 'stroke.secondary', hex: '#B0BAC9', referencesToken: 'neutral.gray-400' },
            { name: 'stroke.card', hex: '#EEEFF0', referencesToken: 'neutral.gray-100' },
          ],
        },
      ],
      manualReference: {
        pt: 'Design Tokens · Procer Partner',
        en: 'Design Tokens · Procer Partner',
      },
    },
    styleTag: 'corporate',
  },

  // 5. GaAE — Gestão de Atenção Especializada
  {
    slug: 'gaae',
    title: { pt: 'GaAE', en: 'GaAE' },
    description: {
      pt: 'Sistema de gestão ambulatorial especializada com monitoramento geográfico.',
      en: 'Specialized ambulatory care management system with geographic monitoring.',
    },
    year: 2025,
    type: 'govtech',
    role: 'UI/UX Design',
    client: 'Impacto Soluções',
    thumbnail: 'assets/images/projects/gaae/thumb.png',
    hero: 'assets/images/projects/gaae/hero.webp',
    context: {
      pt: 'O GaAE é um sistema voltado à gestão de atenção ambulatorial especializada — o tipo de produto onde uma decisão de design ruim pode atrasar atendimento médico real. O desafio central foi resolver como apresentar dados de saúde pública em três níveis de granularidade geográfica — Área, UBS e Microárea — sem sobrecarregar o gestor com escolha. Cada nível responde a uma pergunta diferente: Área para alocação macro de recursos, UBS para gestão operacional, Microárea para ação de campo. A solução foi um mapa único com três modos de visualização, cada um com sua própria hierarquia visual de marcadores e dados auxiliares. O sistema também inclui módulos de auditoria, gestão de usuários e relatórios — peças padrão de qualquer plataforma B2G, aqui resolvidas com rigor, mas não o foco da apresentação.',
      en: 'GaAE is a system for managing specialized ambulatory care — the kind of product where a bad design decision can delay actual medical care. The core challenge was solving how to present public health data across three levels of geographic granularity — Area, UBS, and Micro-area — without overloading the manager with choice. Each level answers a different question: Area for macro resource allocation, UBS for operational management, Micro-area for field action. The solution was a single map with three visualization modes, each with its own visual hierarchy of markers and auxiliary data. The system also includes audit, user management, and reporting modules — standard pieces of any B2G platform, solved here with rigor but not the focus of this presentation.',
    },
    gallery: [
      {
        src: 'assets/images/projects/gaae/galeria/01-dashboard.png',
        caption: {
          pt: '01 · Dashboard · KPIs operacionais, evolução temporal e gerenciamento de demandas por especialidade',
          en: '01 · Dashboard · Operational KPIs, temporal evolution, and demand management by specialty',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/gaae/galeria/02-mapa-area.png',
        caption: {
          pt: '02 · Mapa · Modo Área · Visão macro para decisões de alocação de recursos · cada zona agrupa múltiplas UBS',
          en: '02 · Map · Area mode · Macro view for resource allocation decisions · each zone groups multiple health units',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/gaae/galeria/03-mapa-ubs.png',
        caption: {
          pt: '03 · Mapa · Modo UBS · Visão operacional · Unidades Básicas de Saúde com indicadores individuais de fila e encaminhamentos',
          en: '03 · Map · UBS mode · Operational view · primary health units with individual indicators for queue and referrals',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/gaae/galeria/04-mapa-microareas.png',
        caption: {
          pt: '04 · Mapa · Modo Microáreas · Visão granular · subdivisão territorial das UBS para ação de campo e agentes comunitários',
          en: '04 · Map · Micro-areas mode · Granular view · territorial subdivision of health units for field action and community agents',
        },
        type: 'screen',
        device: 'web',
      },
    ],
    styleTag: 'corporate',
    brandSystem: {
      fontFamily: {
        name: 'Montserrat + Public Sans',
        googleFontsUrl:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Public+Sans:wght@400;500;600&display=swap',
        fonts: [
          { family: 'Montserrat', weight: 700, label: 'Heading Bold' },
          { family: 'Montserrat', weight: 600, label: 'Heading Semibold' },
          { family: 'Public Sans', weight: 600, label: 'Body Semibold' },
          { family: 'Public Sans', weight: 400, label: 'Body Regular' },
        ],
      },

      tokenGroups: [
        {
          groupName: { pt: 'Marca', en: 'Brand' },
          description: {
            pt: 'Cores principais da identidade visual do GaAE utilizadas em navegação, ações primárias e elementos institucionais.',
            en: 'Core GaAE brand colors used in navigation, primary actions, and institutional elements.',
          },
          tokens: [
            { name: 'brand.primary', hex: '#1E3A5F' },
            { name: 'brand.primary-hover', hex: '#162F4D' },
            { name: 'brand.secondary', hex: '#0EA5A4' },
            { name: 'brand.accent', hex: '#22C55E' },
            { name: 'brand.light', hex: '#F0FDFA' },
          ],
        },

        {
          groupName: { pt: 'Superfícies', en: 'Surfaces' },
          description: {
            pt: 'Fundos e superfícies da interface utilizados para organização visual e hierarquia.',
            en: 'Backgrounds and interface surfaces used for visual organization and hierarchy.',
          },
          tokens: [
            { name: 'neutral.bg', hex: '#F8FAFC' },
            { name: 'neutral.surface', hex: '#FFFFFF' },
            { name: 'neutral.border', hex: '#E2E8F0' },
          ],
        },

        {
          groupName: { pt: 'Tipografia', en: 'Typography' },
          description: {
            pt: 'Escala textual utilizada para títulos, textos auxiliares e conteúdos secundários.',
            en: 'Text scale used for headings, auxiliary text, and secondary content.',
          },
          tokens: [
            { name: 'text.primary', hex: '#0B1220' },
            { name: 'text.secondary', hex: '#64748B' },
            { name: 'text.muted', hex: '#94A3B8' },
          ],
        },

        {
          groupName: { pt: 'Status e Alertas', en: 'Status & Alerts' },
          description: {
            pt: 'Sistema visual de feedback para estados operacionais, criticidade e monitoramento.',
            en: 'Visual feedback system for operational states, criticality, and monitoring.',
          },
          tokens: [
            { name: 'status.success', hex: '#16A34A' },
            { name: 'status.success-bg', hex: '#F0FDF4' },

            { name: 'status.warning', hex: '#D97706' },
            { name: 'status.warning-bg', hex: '#FFFBEB' },

            { name: 'status.high', hex: '#EA580C' },
            { name: 'status.high-bg', hex: '#FFF7ED' },

            { name: 'status.critical', hex: '#DC2626' },
            { name: 'status.critical-bg', hex: '#FEF2F2' },

            { name: 'status.info', hex: '#2563EB' },
            { name: 'status.info-bg', hex: '#EFF6FF' },
          ],
        },

        {
          groupName: { pt: 'Visualização de Dados', en: 'Data Visualization' },
          description: {
            pt: 'Cores utilizadas em gráficos, mapas e indicadores analíticos do sistema.',
            en: 'Colors used in charts, maps, and analytical indicators.',
          },
          tokens: [
            { name: 'chart.primarySeries', hex: '#1E3A5F' },
            { name: 'chart.secondarySeries', hex: '#0EA5A4' },
            { name: 'chart.tertiarySeries', hex: '#F59E0B' },
            { name: 'chart.quaternarySeries', hex: '#6366F1' },
            { name: 'chart.comparison', hex: '#94A3B8' },
            { name: 'chart.goal', hex: '#16A34A' },
            { name: 'chart.alert', hex: '#DC2626' },
          ],
        },
      ],

      manualReference: {
        pt: 'Design Tokens · GaAE Platform',
        en: 'Design Tokens · GaAE Platform',
      },
    },
  },

  // 6. MEDICAL AI — Inteligência Médica
  {
    slug: 'medical-ai',
    title: { pt: 'Medical AI', en: 'Medical AI' },
    description: {
      pt: 'Plataforma de apoio diagnóstico para estudos médicos com inteligência artificial.',
      en: 'Diagnostic support platform for medical studies powered by artificial intelligence.',
    },
    year: 2025,
    type: 'healthtech',
    role: 'UI/UX Design',
    client: 'Impacto Soluções',
    thumbnail: 'assets/images/projects/medical-ia/thumb.png',
    hero: 'assets/images/projects/medical-ia/hero.webp',
    context: {
      pt: 'Medical AI é uma plataforma que apoia profissionais de saúde na análise de estudos médicos com auxílio de inteligência artificial — um contexto onde confiança visual importa tanto quanto função. O desafio principal foi desenhar a interface do chat com IA de forma que comunicasse precisão clínica sem soltar a frieza típica de softwares hospitalares. A solução combinou três elementos: identidade visual com verde-menta e formas orgânicas como "respiração" antes do dado denso; dois estados de chat claramente diferenciados (vazio e em uso) para guiar o usuário sobre o que perguntar; e paridade real entre web e mobile, considerando que profissionais de saúde alternam entre desktop em consultório e celular em deslocamento. O sistema também inclui dashboard analítico e gestão de estudos — peças necessárias, mas que cedem o protagonismo à conversação com IA, que é a função central do produto.',
      en: 'Medical AI is a platform that supports healthcare professionals in analyzing medical studies with AI assistance — a context where visual trust matters as much as function. The main challenge was designing the AI chat interface so it would communicate clinical precision without inheriting the coldness typical of hospital software. The solution combined three elements: a visual identity with mint green and organic shapes as a "breath" before dense data; two clearly differentiated chat states (empty and in use) to guide users on what to ask; and real parity between web and mobile, considering that healthcare professionals alternate between desktop in office and phone on the move. The system also includes an analytics dashboard and study management — necessary pieces, but ones that yield the spotlight to the AI conversation, which is the product\'s central function.',
    },
    gallery: [
      {
        src: 'assets/images/projects/medical-ia/galeria/01-login-web.png',
        caption: {
          pt: '01 · Login Admin · Portal de acesso administrativo · interface desenhada para transmitir segurança e controle operacional',
          en: '01 · Admin Login · Administrative access portal · interface designed to convey security and operational control',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/medical-ia/galeria/02-dashboard.png',
        caption: {
          pt: '02 · Dashboard Admin · Visão estratégica da plataforma · acompanhamento de métricas, atividade e gestão centralizada',
          en: '02 · Admin Dashboard · Strategic platform overview · monitoring metrics, activity, and centralized management',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/medical-ia/galeria/03-cadastro-prompt.png',
        caption: {
          pt: '03 · Cadastro de Prompts · Ambiente administrativo para criação, edição e organização de prompts inteligentes',
          en: '03 · Prompt Management · Administrative environment for creating, editing, and organizing intelligent prompts',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/medical-ia/galeria/04-gerenciamento-usuarios.png',
        caption: {
          pt: '04 · Gerenciamento de Usuários · Controle de permissões, acessos e estrutura operacional da plataforma',
          en: '04 · User Management · Control over permissions, access, and operational platform structure',
        },
        type: 'screen',
        device: 'web',
      },
      {
        src: 'assets/images/projects/medical-ia/galeria/05-login-mobile.png',
        caption: {
          pt: '05 · Mobile · Login do Usuário · Experiência simplificada e acessível para entrada rápida no aplicativo',
          en: '05 · Mobile · User Login · Simplified and accessible experience for quick app access',
        },
        type: 'screen',
        device: 'mobile',
      },
      {
        src: 'assets/images/projects/medical-ia/galeria/06-chat-01.png',
        caption: {
          pt: '06 · Mobile · Chat IA · Estado inicial da conversa com sugestões que orientam a interação do usuário',
          en: '06 · Mobile · AI Chat · Initial conversation state with suggestions guiding user interaction',
        },
        type: 'screen',
        device: 'mobile',
      },
      {
        src: 'assets/images/projects/medical-ia/galeria/07-chat-02.png',
        caption: {
          pt: '07 · Mobile · Chat IA · Conversa em andamento com foco em clareza, continuidade e agilidade de uso',
          en: '07 · Mobile · AI Chat · Active conversation focused on clarity, continuity, and agile interaction',
        },
        type: 'screen',
        device: 'mobile',
      },
    ],
    styleTag: 'editorial',
    brandSystem: {
      fontFamily: {
        name: 'Montserrat + Inter',
        googleFontsUrl:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Inter:wght@400;500;600&display=swap',
        fonts: [
          { family: 'Montserrat', weight: 700, label: 'Heading Bold' },
          { family: 'Montserrat', weight: 600, label: 'Heading Semibold' },

          { family: 'Inter', weight: 600, label: 'Body Semibold' },
          { family: 'Inter', weight: 400, label: 'Body Regular' },
        ],
      },

      tokenGroups: [
        {
          groupName: { pt: 'Marca', en: 'Brand' },
          description: {
            pt: 'Paleta principal da Medical AI utilizada em identidade visual, navegação e ações primárias.',
            en: 'Core Medical AI palette used in branding, navigation, and primary actions.',
          },
          tokens: [
            { name: 'primary.default', hex: '#0077B6' },
            { name: 'primary.hover', hex: '#0096C7' },
            { name: 'primary.logo', hex: '#002E48' },

            { name: 'success.default', hex: '#00B386' },
            { name: 'success.hover', hex: '#00CC99' },

            { name: 'ai.default', hex: '#6C63FF' },
            { name: 'ai.hover', hex: '#857DFF' },

            { name: 'image.highlight', hex: '#19AA79' },
          ],
        },

        {
          groupName: { pt: 'Superfícies', en: 'Surfaces' },
          description: {
            pt: 'Estrutura de superfícies e divisores da interface clínica.',
            en: 'Surface structure and dividers for the clinical interface.',
          },
          tokens: [
            { name: 'neutral.background', hex: '#F5F9FC' },
            { name: 'neutral.divider', hex: '#D6E4EC' },
            { name: 'Base.white', hex: '#FFFFFF' },
            { name: 'Base.black', hex: '#000000' },
          ],
        },

        {
          groupName: { pt: 'Tipografia', en: 'Typography' },
          description: {
            pt: 'Hierarquia textual utilizada para leitura clínica e navegação operacional.',
            en: 'Text hierarchy used for clinical reading and operational navigation.',
          },
          tokens: [
            { name: 'neutral.textPrimary', hex: '#212121' },
            { name: 'neutral.textSecondary', hex: '#9E9E9E' },
          ],
        },

        {
          groupName: { pt: 'Bordas e Estados', en: 'Borders & States' },
          description: {
            pt: 'Sistema visual de bordas interativas e estados de foco.',
            en: 'Visual system for interactive borders and focus states.',
          },
          tokens: [
            { name: 'stroke.input', hex: '#AEC8D4' },
            { name: 'stroke.hover', hex: '#98B7C6' },
            {
              name: 'stroke.focus',
              hex: '#002E48',
              referencesToken: 'primary.logo',
            },
          ],
        },

        {
          groupName: { pt: 'Feedback', en: 'Feedback' },
          description: {
            pt: 'Estados operacionais utilizados em alertas, respostas da IA e validações clínicas.',
            en: 'Operational states used in alerts, AI responses, and clinical validations.',
          },
          tokens: [
            {
              name: 'feedback.success',
              hex: '#00B386',
              referencesToken: 'success.default',
            },

            { name: 'feedback.warning', hex: '#FFB703' },
            { name: 'feedback.error', hex: '#E63946' },
            { name: 'feedback.info', hex: '#2196F3' },
          ],
        },
      ],

      manualReference: {
        pt: 'Design Tokens · Medical AI',
        en: 'Design Tokens · Medical AI',
      },
    },
  },
];
