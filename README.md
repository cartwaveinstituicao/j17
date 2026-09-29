# LOAN BRASIL — site institucional

Site institucional estático da **LOAN BRASIL SOCIEDADE DE CREDITO DIRETO S.A.**

## Executar localmente

Requer Node.js 18 ou superior.

```bash
npm run check
npm run dev
```

Acesse `http://localhost:3000`.

## Gerar pacote publicável

```bash
npm run build
```

A pasta `dist/` contém a cópia pronta para hospedagem estática. O servidor de desenvolvimento também serve a pasta `public/` diretamente.

## Estrutura

- `public/index.html`: página institucional.
- `public/privacy.html`: política de privacidade, aberta em nova guia pelo rodapé.
- `public/styles.css` e `public/script.js`: apresentação e interações responsivas.
- `public/logo.svg`, `public/favicon.svg` e `public/favicon.png`: identidade visual.
- `public/manus-routes.json`, `public/sitemap.xml` e `public/robots.txt`: descoberta e rotas públicas.
- `server.js`: servidor estático para Preview.
