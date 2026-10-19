# Portfólio — Davi Petroski

Vite + React + TypeScript + Tailwind CSS. Publicado na Vercel: cada push na `main` atualiza o site.

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (pré-renderiza o HTML em dist/)
```

## Adicionar um projeto

1. Inclua um item em `src/data/projetos.ts` (título, descrição, tags, url, imagem).
2. Para gerar o print, adicione `['slug', 'https://url-do-projeto']` em `scripts/capturar-prints.mjs` e rode
   `npm run prints -- slug` (precisa do Chromium do Playwright: `npx playwright install chromium`).
   Isso cria `public/projetos/slug.webp` e `slug-640.webp`; use `imagem: '/projetos/slug.webp'`.
3. Se o site pedir login, deixe sem `imagem` e escolha uma `ilustracao`.

## Arquivos opcionais (passam a ser usados assim que existirem)

- `public/foto-davi.jpg` — foto do círculo do hero (quadrada, ideal 840×840).
- `public/curriculo-davi-petroski.pdf` — botão "Baixar currículo".

Links de GitHub, LinkedIn e Instagram ficam em `src/data/contato.ts`.
