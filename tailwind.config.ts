import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fundo: { DEFAULT: '#0A0A17', alt: '#0D0D1E' },
        card: '#13132B',
        borda: { DEFAULT: '#24244A', suave: '#1E1E3A', forte: '#2E2E58', botao: '#3A3A66' },
        texto: { DEFAULT: '#F4F4FB', sec: '#A6A6C8', mudo: '#8E8EB2' },
        destaque: { DEFAULT: '#7C3AED', claro: '#A78BFA', suave: '#C4B5FD' },
        roxo: {
          badge: '#1A1438',
          'badge-borda': '#3B2D7A',
          icone: '#2A1F66',
          chip: '#1C1C3C',
          tag: '#1E1844',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      // Só o tamanho: a altura de linha é herdada (1.6), como no layout aprovado.
      fontSize: { xs: '12px', sm: '14px', base: '16px', lg: '18px', xl: '20px' },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
} satisfies Config
