import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// Arquivos opcionais em public/: o site passa a usá-los assim que existirem
// (basta adicionar o arquivo e fazer push — a Vercel refaz o build).
const temFoto = existsSync('public/foto-davi.jpg')
const temCurriculo = existsSync('public/curriculo-davi-petroski.pdf')

export default defineConfig({
  plugins: [react()],
  define: {
    __TEM_FOTO__: JSON.stringify(temFoto),
    __TEM_CURRICULO__: JSON.stringify(temCurriculo),
  },
})
