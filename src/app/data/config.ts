// CONFIG ─────────────────────────────────────────────────────────────────────
// Preencha os campos abaixo. Todos os placeholders <<< >>> devem ser substituídos.

// NOME COMPLETO ou nome profissional. Curto, sem títulos ("Designer", "Sr." etc).
export const NAME = 'Gustavo Kammer';

// TAGLINE (1 linha, hero). Deve responder em uma frase: O QUE você faz + PARA QUEM + DIFERENCIAL.
// Exemplos válidos:
//   "Designo interfaces que clientes entendem e usuários terminam."
//   "UI/UX designer focado em produtos digitais que precisam funcionar de verdade."
// Evite: "Apaixonado por design", "Transformando ideias em realidade".
export const TAGLINE: Record<'pt' | 'en', string> = {
  pt: 'Experiências digitais sofisticadas, funcionais, em qualquer linguagem visual.',
  en: 'Sophisticated, functional digital experiences — in any visual language.',
};

// BIO CURTA (3–4 linhas, seção About). Deve cobrir:
//   1. Quem você é e há quanto tempo trabalha com isso.
//   2. Tipos de projeto que você costuma fazer.
//   3. Ferramentas/abordagem principais.
//   4. UM traço pessoal — ex: hobby, formação atípica, filosofia de trabalho.
export const BIO_SHORT: Record<'pt' | 'en', string> = {
  pt: 'UX Designer & Desenvolvedor Frontend. Transformo estratégia em interfaces funcionais, unindo design e código no mesmo processo. Trabalho com startups e produtos digitais criando experiências pensadas de ponta a ponta: da usabilidade à implementação, reduzindo ruídos entre ideia e execução para entregar produtos mais consistentes, rápidos e bem resolvidos.',
  en: 'UX Designer & Frontend Developer — I turn strategy into functional interfaces by combining design and code within the same process. I work with startups and digital products, crafting end-to-end experiences from usability to implementation, reducing friction between idea and execution to deliver more consistent, fast, and well-crafted products.',
};

// BIO LONGA (expandível na seção About). Trajetória, formação, filosofia de trabalho.
// Deixe como string vazia '' para ocultar o botão "Ler mais".
export const BIO_LONG: Record<'pt' | 'en', string> = {
  pt: '',
  en: '',
};

// COMPETÊNCIAS listadas na seção About (exibidas em duas colunas, estilo mono caption).
export const SKILLS = {
  design: {
    label: { pt: 'Design', en: 'Design' },
    items: [
      'Figma',
      'Prototyping',
      'Design Systems',
      'Interaction Design',
      'Wireframing',
      'Visual Design',
    ],
  },
  development: {
    label: { pt: 'Desenvolvimento', en: 'Development' },
    items: ['Angular', 'TypeScript', 'Tailwind CSS', 'React', 'Git / GitHub', 'REST APIs'],
  },
  process: {
    label: { pt: 'Processo', en: 'Process' },
    items: [
      'User Research',
      'Accessibility (WCAG)',
      'Usability Testing',
      'Design–Dev Handoff',
      'Agile / Scrum',
      'Documentation',
    ],
  },
};

// CONTATO ─────────────────────────────────────────────────────────────────────

// E-mail exibido como CTA principal na seção de contato.
export const EMAIL = 'gustavokammer.ux@gmail.com';

// Cidade e país exibidos no hero e no rodapé.
export const CITY = 'Criciúma, Brasil';

// Redes sociais. Defina como null para ocultar o link.
export const SOCIALS: Record<string, string | null> = {
  linkedin: null, // Ex: 'https://linkedin.com/in/seuusuario'
  behance: null, // Ex: 'https://behance.net/seuusuario'
  dribbble: null, // Ex: 'https://dribbble.com/seuusuario'
  github: null, // Ex: 'https://github.com/seuusuario'
};

// FOTO (seção About): preto e branco, proporção 4:5, fundo neutro.
// Coloque em /public/images/portrait.jpg e atualize este caminho.
// Deixe como '' para exibir o placeholder padrão.
export const PORTRAIT = '';
