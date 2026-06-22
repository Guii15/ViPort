# CLAUDE.md — Portfólio Vitorya Silva

## Visão Geral
Portfólio profissional de Social Media e Criação de Conteúdo.
Stack: React + Vite + Tailwind CSS + Framer Motion
Tema: Claro (branco/off-white) com acentos Roxo (#7C3AED) e Coral (#FF6B6B)

## Identidade
- Nome: Vitorya de Cassia Silva
- Tagline: "Criando conteúdo que conecta"
- Email: vitoryacs55@gmail.com
- WhatsApp: +55 35 99702-4823
- Instagram: https://www.instagram.com/_vitoryacs_/
- Foto: sem foto por enquanto, usar placeholder com as iniciais "VS" estilizado

## Paleta de Cores
- Background: #FAFAFA (off-white)
- Primária: #7C3AED (roxo)
- Secundária: #FF6B6B (coral)
- Texto principal: #1A1A1A
- Texto secundário: #6B7280
- Cards/superfícies: #FFFFFF com sombra suave

## Tipografia
- Títulos: fonte moderna e elegante (Google Fonts: "Playfair Display" ou "Cormorant Garamond")
- Corpo: "Inter" ou "DM Sans"

## Seções (em ordem)

### 1. Navbar
- Logo: "Vitorya Silva" em roxo
- Links: Sobre, Serviços, Portfólio, Resultados, Contato
- Botão CTA: "Vamos conversar?" em coral, abre WhatsApp ao clicar
- Navbar fixa no topo, fundo branco com sombra suave ao rolar

### 2. Hero
- Lado esquerdo: texto animado com Framer Motion
  - Subtítulo pequeno: "Social Media & Criadora de Conteúdo"
  - Título grande: "Criando conteúdo que conecta"
  - Parágrafo: "Transformo marcas em presenças digitais memoráveis através de estratégia, criatividade e consistência."
  - Dois botões: "Ver Portfólio" (roxo, scroll até seção portfólio) e "Falar no WhatsApp" (coral, link WhatsApp)
- Lado direito: placeholder circular estilizado com gradiente roxo→coral e iniciais "VS" no centro
- Fundo: blob animado suave em roxo e coral com opacidade baixa (~10%)

### 3. Sobre
- Texto curto sobre ela: "Olá! Sou Vitorya, Social Media apaixonada por transformar ideias em conteúdo que gera conexão real. Trabalho com marcas que querem crescer de forma autêntica nas redes sociais."
- Pequena lista de diferenciais com ícones:
  - ✦ Estratégia personalizada para cada marca
  - ✦ Conteúdo criativo e alinhado ao seu público
  - ✦ Gestão completa do seu perfil
  - ✦ Resultados mensuráveis

### 4. Serviços
- Grid de cards (2x3 ou 3x2) com ícone, título e descrição curta
- Serviços:
  1. Feed — Planejamento e criação visual do feed
  2. Stories — Conteúdos dinâmicos para stories
  3. Reels — Roteiro e edição de reels estratégicos
  4. Identidade Visual — Criação de identidade para redes sociais
  5. Gestão de Perfil — Gerenciamento completo do seu Instagram
  6. Planejamento de Conteúdo — Calendário editorial personalizado
- Cards com hover: fundo muda para gradiente roxo→coral, texto fica branco

### 5. Portfólio (Galeria)
- Título: "Trabalhos que falam por si"
- Grid 3x3 (9 posts) com imagens quadradas
- IMPORTANTE: as imagens são placeholders por enquanto (usar cor sólida roxo/coral alternados com texto "Arte em breve")
- Cada card tem:
  - Imagem quadrada
  - Hover effect: overlay escuro com ícone do Instagram e texto "Ver no Instagram"
  - Ao clicar: abre o post no Instagram em nova aba
- Links dos posts: deixar como "#" por enquanto, serão preenchidos depois
- Os dados dos posts ficam em `src/data/portfolio.js` como array de objetos:
  {id, image, caption, instagramUrl}

### 6. Resultados (Contadores Animados)
- Título: "Números que provam"
- 3 contadores que animam ao entrar na viewport (usar Intersection Observer + Framer Motion):
  1. "+15" → "Clientes Atendidos"
  2. "+200" → "Posts Criados"
  3. "3 anos" → "de Experiência"
- Fundo com gradiente suave roxo→coral
- Texto branco

### 7. Depoimentos (opcional, esqueleto)
- Título: "O que dizem sobre mim"
- 3 cards placeholder com texto genérico por enquanto
- Poderá ser preenchido com depoimentos reais depois

### 8. Contato
- Título: "Vamos criar algo incrível juntos?"
- Subtítulo: "Entre em contato e vamos conversar sobre o seu projeto"
- Dois botões grandes centralizados:
  - WhatsApp: abre wa.me/5535997024823
  - Instagram: abre instagram.com/_vitoryacs_/
  - Email: abre mailto:vitoryacs55@gmail.com
- Ícones sociais no rodapé

### 9. Footer
- "© 2026 Vitorya Silva. Todos os direitos reservados."
- Links rápidos e ícones sociais

## Animações (Framer Motion)
- Fade + slide up em todas as seções ao entrar na viewport
- Blob flutuante no Hero (CSS animation, keyframes)
- Contadores animados na seção Resultados
- Hover nos cards de serviços e portfólio
- Navbar com sombra progressiva ao rolar

## Estrutura de Arquivos