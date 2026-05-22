# Portfolio UI/UX

Portfolio pessoal para designer UI/UX. **Angular 21** (standalone components, signals) + **Tailwind CSS v4**.

---

## Instalação

```bash
npm install
npm start        # dev em http://localhost:4200
npm run build    # build de produção
```

---

## Como personalizar o conteúdo

**Todo o conteúdo pessoal está em um único arquivo:** `src/app/data/config.ts`

Abra esse arquivo e substitua cada campo `<<< >>>`:

| Constante | O que é | Exemplo |
|---|---|---|
| `NAME` | Nome profissional | `'Ana Lima'` |
| `TAGLINE` | Tagline da hero (PT/EN) | `{ pt: 'Designo interfaces...', en: 'I design...' }` |
| `BIO_SHORT` | Bio curta na seção About (PT/EN) | 3–4 linhas |
| `BIO_LONG` | Bio expandível — deixe `''` para ocultar | opcional |
| `SKILLS` | Lista de competências | `['Figma', 'Prototyping', ...]` |
| `EMAIL` | E-mail CTA principal | `'ana@dominio.com'` |
| `CITY` | Cidade e país | `'São Paulo, Brasil'` |
| `SOCIALS` | Links de redes | `{ linkedin: 'https://...', behance: null }` |
| `PORTRAIT` | Caminho da foto (4:5, preto/branco) | `'/images/portrait.jpg'` |

> **Foto:** coloque em `public/images/portrait.jpg` e defina `PORTRAIT = '/images/portrait.jpg'`.

---

## Tipos de projeto (`type`)

O portfólio organiza projetos por **domínio**, não por tecnologia:

- `healthtech` — Produtos para o setor de saúde
- `edtech` — Educação e instituições de ensino
- `agritech` — Agroindústria e cadeia produtiva
- `govtech` — Setor público e gestão governamental
- `sports` — Esporte, performance e bem-estar
- `enterprise` — SaaS, B2B e ferramentas internas

Para adicionar um novo projeto, edite `src/app/data/projects.ts` seguindo a estrutura dos projetos existentes.

---

## Como adicionar um projeto

1. Abra `src/app/data/projects.ts`
2. Adicione um objeto ao array `PROJECTS`:

```ts
{
  slug: 'nome-do-projeto',          // URL: /projects/nome-do-projeto
  title: { pt: 'Nome PT', en: 'Name EN' },
  description: { pt: '...', en: '...' },
  challenge: { pt: '...', en: '...' },
  year: 2025,
  type: 'enterprise',               // ver seção "Tipos de projeto" acima
  role: 'UI/UX & Prototype',
  client: 'Cliente',                // opcional
  externalUrl: 'https://...',       // opcional
  thumbnail: '/images/projects/nome/thumb.jpg',
  gallery: [
    { src: '/images/projects/nome/1.jpg', caption: { pt: '...', en: '...' } },
  ],
  styleTag: 'editorial',
}
```

3. Coloque imagens em `public/images/projects/nome-do-projeto/`.
4. O filtro na seção de projetos funciona automaticamente pelo campo `type`.

---

## Recortes da seção de versatilidade

Em `src/app/data/projects.ts`, edite `VERSATILITY_CROPS`:

```ts
export const VERSATILITY_CROPS = [
  { src: '/images/crops/editorial.jpg', styleTag: 'editorial' },
  { src: '/images/crops/corporate.jpg', styleTag: 'corporate' },
  // mínimo 4, ideal 6
];
```

Proporção recomendada: **16:10**. As imagens mantêm suas cores originais — esse contraste com a página neutra é o que comunica versatilidade.

---

## Internacionalização

Toggle `PT / EN` persiste via `localStorage`. Labels da interface ficam em:
- `src/app/data/i18n/pt.json`
- `src/app/data/i18n/en.json`

Conteúdo pessoal usa `{ pt: '...', en: '...' }` diretamente nos dados.

---

## Tokens de design (Tailwind v4)

Este projeto usa Tailwind CSS v4, que configura tokens via CSS (não `tailwind.config.js`). Os tokens ficam em `src/styles.css` no bloco `@theme`:

```css
@theme {
  --color-base:          #F4F2EE;   /* fundo principal */
  --color-elevated:      #FFFFFF;   /* cards */
  --color-ink-primary:   #1A1A1A;   /* títulos */
  --color-ink-secondary: #4A4A4A;   /* corpo */
  --color-ink-muted:     #8A8A8A;   /* metadados */
  --color-line:          #E4E1DC;   /* bordas hairline */
  --color-accent:        #3B5BFF;   /* acento único */
}
```

---

## Estrutura de arquivos

```
src/
├── app/
│   ├── core/
│   │   ├── i18n.service.ts             — idioma via signals + localStorage
│   │   └── scroll-reveal.directive.ts  — IntersectionObserver scroll reveal
│   ├── shared/
│   │   └── header/header.component.ts  — header fixo + mobile menu
│   ├── pages/
│   │   ├── home/
│   │   │   ├── home.page.ts
│   │   │   ├── hero.section.ts
│   │   │   ├── versatility.section.ts
│   │   │   ├── projects.section.ts
│   │   │   ├── about.section.ts
│   │   │   └── contact.section.ts
│   │   └── project-detail/
│   │       └── project-detail.page.ts
│   └── data/
│       ├── config.ts       ← preencha aqui
│       ├── projects.ts     ← adicione projetos aqui
│       └── i18n/
│           ├── pt.json
│           └── en.json
├── styles.css              — tokens + todos os estilos globais
└── index.html
```
