// Gera o HTML final com o conteúdo já renderizado (melhor SEO e carregamento).
import { readdir, readFile, rm, writeFile } from 'node:fs/promises'

const { render } = await import('../dist-ssr/entry-server.js')
const arquivo = 'dist/index.html'
const html = await readFile(arquivo, 'utf8')

// Preload das fontes usadas no topo da página, para evitar troca de fonte visível.
const fontesTopo = ['sora-latin-800', 'sora-latin-700', 'dm-sans-latin-400', 'dm-sans-latin-500', 'dm-sans-latin-700']
const preloads = (await readdir('dist/assets'))
  .filter((f) => f.endsWith('.woff2') && fontesTopo.some((n) => f.startsWith(`${n}-normal-`)))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

await writeFile(arquivo, html.replace('</title>', `</title>\n    ${preloads}`).replace('<!--app-->', render()))
await rm('dist-ssr', { recursive: true, force: true })
console.log('Pré-renderização concluída: dist/index.html')
