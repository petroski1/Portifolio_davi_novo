// Tira um print de cada projeto (1280x800) e salva em public/projetos/<slug>.webp
// e uma versão menor <slug>-640.webp para os cards.
// Uso: npm run prints            (todos os projetos com url)
//      npm run prints -- slug    (só um projeto)
import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const projetos = [
  // oralcad-connect fica de fora: a página inicial é uma tela de login.
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

for (const [slug, url] of projetos) {
  if (filtro && filtro !== slug) continue
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {})
  await page.waitForTimeout(2500)
  console.log(`${slug}: ${page.url()} — "${await page.title()}"`)
  const png = await page.screenshot()
  await sharp(png).webp({ quality: 82 }).toFile(`public/projetos/${slug}.webp`)
  await sharp(png).resize(640).webp({ quality: 78 }).toFile(`public/projetos/${slug}-640.webp`)
}

await browser.close()
