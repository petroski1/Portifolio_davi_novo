import { useEffect, useState } from 'react'
import { useSecaoAtiva } from '../hooks/useSecaoAtiva'
import { IconeCodigo, IconeFechar, IconeMenu, IconeSetaDiagonal } from './Icones'

const links = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'habilidades', rotulo: 'Habilidades' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'contato', rotulo: 'Contato' },
]
const ids = links.map((l) => l.id)

export function Header() {
  const ativa = useSecaoAtiva(ids)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    if (!aberto) return
    const fechar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', fechar)
    return () => window.removeEventListener('keydown', fechar)
  }, [aberto])

  const classeLink = (id: string) => (ativa === id ? 'text-white' : 'text-texto-sec')

  return (
    <header className="sticky top-0 z-50 border-b border-borda-suave bg-fundo">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-6 py-[18px]">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 font-display text-xl font-bold text-texto"
          onClick={() => setAberto(false)}
        >
          <span className="inline-flex size-9 items-center justify-center rounded-[10px] bg-destaque text-white">
            <IconeCodigo tamanho={20} traco={2.2} />
          </span>
          <span>
            davi<span className="text-destaque-claro">.dev</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-7 text-[15px] font-medium lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={classeLink(l.id)}
              aria-current={ativa === l.id ? 'location' : undefined}
            >
              {l.rotulo}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn-primario hidden min-h-11 gap-2 rounded-[10px] px-5 text-[15px] lg:inline-flex">
          Fale comigo
          <IconeSetaDiagonal tamanho={16} />
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[10px] border border-borda-forte text-texto lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((a) => !a)}
        >
          {aberto ? <IconeFechar tamanho={22} /> : <IconeMenu tamanho={22} />}
        </button>
      </div>

      <nav
        id="menu-celular"
        aria-label="Principal"
        hidden={!aberto}
        className="border-t border-borda-suave bg-fundo lg:hidden"
      >
        <div className="mx-auto flex max-w-site flex-col px-6 py-3 text-base font-medium">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`flex min-h-12 items-center ${classeLink(l.id)}`}
              aria-current={ativa === l.id ? 'location' : undefined}
              onClick={() => setAberto(false)}
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-primario mb-2 mt-2 min-h-11 justify-center gap-2 rounded-[10px] px-5 text-[15px]"
            onClick={() => setAberto(false)}
          >
            Fale comigo
            <IconeSetaDiagonal tamanho={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}
