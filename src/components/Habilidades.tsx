import type { ReactNode } from 'react'
import { IconeBanco, IconeEnviar, IconeMonitor } from './Icones'
import { Revelar } from './Revelar'

const grupos: { titulo: string; descricao: string; icone: ReactNode; itens: string[] }[] = [
  {
    titulo: 'Front-end',
    descricao: 'Interfaces responsivas, rápidas e fiéis ao layout.',
    icone: <IconeMonitor tamanho={20} />,
    itens: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    titulo: 'Sistemas e dados',
    descricao: 'Login, painéis e controle financeiro com banco de dados.',
    icone: <IconeBanco tamanho={20} />,
    itens: ['Supabase', 'Autenticação', 'Dashboards', 'Node.js', 'APIs REST'],
  },
  {
    titulo: 'Entrega e ferramentas',
    descricao: 'Do código ao site no ar, com versionamento e deploy.',
    icone: <IconeEnviar tamanho={20} />,
    itens: ['Git & GitHub', 'Vercel', 'Netlify', 'Lovable', 'Figma', 'SEO básico'],
  },
]

export function Habilidades() {
  return (
    <section id="habilidades" className="mx-auto flex max-w-site flex-col gap-10 px-6 py-[88px]">
      <Revelar className="flex flex-col items-center gap-2.5 text-center">
        <span className="rotulo">HABILIDADES</span>
        <h2 className="titulo-secao">Ferramentas que domino</h2>
      </Revelar>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {grupos.map((g, i) => (
          <Revelar
            key={g.titulo}
            atraso={i * 100}
            className="flex flex-col gap-[18px] rounded-[18px] border border-borda bg-card p-7"
          >
            <div className="flex items-center gap-3">
              <span className="icone-caixa size-10 rounded-[10px]">{g.icone}</span>
              <h3 className="m-0 font-display text-[19px] font-semibold">{g.titulo}</h3>
            </div>
            <p className="m-0 text-[15px] text-texto-sec">{g.descricao}</p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0 text-sm font-medium">
              {g.itens.map((item) => (
                <li key={item} className="rounded-lg border border-borda-forte bg-roxo-chip px-3 py-1.5">
                  {item}
                </li>
              ))}
            </ul>
          </Revelar>
        ))}
      </div>
    </section>
  )
}
