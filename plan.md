# Plano de implementação — LOAN BRASIL

## Objetivo
Criar um site institucional premium, responsivo e profissional para a LOAN BRASIL SOCIEDADE DE CREDITO DIRETO S.A., em português do Brasil, com foco em confiança, clareza e apresentação responsável das áreas de atuação e canais de contato.

## Arquitetura e entrega
- **Arquitetura:** site estático, sem backend ou banco; o conteúdo público pode ser pré-produzido e servido com baixa latência.
- **Servidor de desenvolvimento:** servidor Node.js simples em `server.js`, ouvindo em `0.0.0.0:3000`.
- **Estrutura:** `public/index.html` (conteúdo indexável), `public/privacy.html` (política em nova guia), `public/styles.css`, `public/script.js`, `public/logo.svg`, `public/favicon.svg`, `public/favicon.png`, `public/manus-routes.json`.
- **SEO:** títulos, descrição, Open Graph, Twitter Card e JSON-LD no HTML inicial; sitemap e robots para as páginas públicas.
- **Rotas:** `/`, `/privacy.html`, `/manus-routes.json`, `/sitemap.xml`, `/robots.txt`.
- **Cache:** conteúdo HTML com revalidação; CSS/JS e identidade visual podem ser cacheados por curto período no servidor de desenvolvimento. Sem APIs ou dados personalizados.

## Direção visual
Identidade editorial financeira contemporânea: fundo azul-marinho profundo, superfícies marfim, acentos cobre e verde mineral, tipografia serifada para autoridade e sans-serif para leitura. Hero com composição abstrata de formas geométricas e linhas de conexão, sem fotografia genérica ou promessas comerciais. Microinterações discretas, navegação sticky e hierarquia espaçosa.

## Seções
1. Header com wordmark, navegação âncora e CTA de contato.
2. Hero com apresentação institucional, texto responsável e sinalização de presença em Manaus.
3. Faixa de confiança com CNPJ, sede e canais diretos.
4. Sobre a empresa e proposta de valor.
5. Serviços em cards com as cinco áreas informadas.
6. Diferenciais institucionais.
7. Chamada de contato com dados completos.
8. Footer com atividades, identificação legal e link da Política de Privacidade em nova guia.

## Verificação
- `npm run check` para validar sintaxe e presença de arquivos.
- `npm run build` para criar a pasta `dist` com pacote publicável.
- Servidor local em `3000` e `curl` para confirmar HTTP 200, manifesto de rotas, sitemap e páginas.
- Inspeção de código para verificar link externo da política, favicon, dados institucionais e responsividade CSS.
