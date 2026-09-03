# ViPort — Portfólio Vitorya Silva

Landing page profissional de Social Media & Designer Gráfica, construída como single-page com navegação por âncoras.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://motion.dev/) — animações de entrada e contadores
- [react-icons](https://react-icons.github.io/react-icons/) — ícones dos cards de serviço
- Embed oficial do Instagram (`instagram.com/embed.js`) para os posts do portfólio

## Como rodar localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
npm run lint       # ESLint
```

## Estrutura de pastas

```
src/
├── main.jsx              # entry point
├── App.jsx                # composição das seções da página
├── index.css              # tema Tailwind (cores, fontes) + estilos globais
├── assets/                 # imagens (foto da Vitorya em .webp)
├── data/
│   ├── portfolio.js        # itens do grid de Portfólio (id, caption, link do Instagram)
│   └── depoimentos.js      # itens da seção Depoimentos (nome, texto)
└── components/
    ├── SectionWrapper.jsx   # wrapper com animação fade+slide-up ao entrar na viewport
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Sobre.jsx
    ├── Servicos.jsx
    ├── Portfolio.jsx
    ├── InstagramEmbed.jsx   # embed real do Instagram com fallback para link
    ├── Resultados.jsx       # contadores animados
    ├── Depoimentos.jsx
    ├── Contato.jsx
    └── Footer.jsx
```

## Conteúdo editável

- **Portfólio**: edite `src/data/portfolio.js` para adicionar/remover posts (itens sem `instagramUrl` real caem no fallback visual "Arte em breve").
- **Depoimentos**: edite `src/data/depoimentos.js` para substituir os textos de exemplo pelos depoimentos reais dos clientes.
- **Contato**: WhatsApp, Instagram e e-mail estão hardcoded em `Contato.jsx` e `Footer.jsx`.

## Paleta e tipografia

Definidas em `src/index.css` (`@theme`):

- Primária: `#3454D1` (azul) · Secundária: `#6D28D9` (roxo)
- Fundo: `#F5F5FA` · Texto: `#1E1B2E`
- Títulos: Cormorant Garamond · Corpo: DM Sans

A spec original do projeto está em [`claude.md`](./claude.md).
