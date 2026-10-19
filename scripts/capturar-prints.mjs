// Tira um print de cada projeto (1280x800) e salva em public/projetos/<slug>.webp
// e uma versão menor <slug>-640.webp para os cards.
// Uso: npm run prints            (todos os projetos com url)
//      npm run prints -- slug    (só um projeto)
import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const projetos = [
  ['clinica-valeria-lopes', 'https://valerialopes.vercel.app/'],
  // A página inicial é a tela de login: o recorte dá zoom no logo e no formulário.
  ['oralcad-connect', 'https://oralcad-connect.lovable.app', { x: 320, y: 90, width: 640, height: 400 }],
  ['davi-lab', 'https://davi-lab.vercel.app/'],
  ['fincontrol-pro', 'https://jest-pessoal.netlify.app/'],
  ['loja-militar', 'https://trabalho-cliente-54.vercel.app/'],
  ['vallestetica', 'https://vallestetica.netlify.app/'],
]

const filtro = process.argv[2]
await mkdir('public/projetos', { recursive: true })
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
)
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
// Com recorte, a captura é feita em 2x para o resultado continuar com 1280px de largura.
const zoom = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 })

for (const [slug, url, recorte] of projetos) {
  if (filtro && filtro !== slug) continue
  const aba = recorte ? zoom : page
  await aba.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {})
  await aba.waitForTimeout(2500)
  console.log(`${slug}: ${aba.url()} — "${await aba.title()}"`)
  const png = await aba.screenshot(recorte ? { clip: recorte } : {})
  await sharp(png).webp({ quality: 82 }).toFile(`public/projetos/${slug}.webp`)
  await sharp(png).resize(640).webp({ quality: 78 }).toFile(`public/projetos/${slug}-640.webp`)
}

await browser.close()
