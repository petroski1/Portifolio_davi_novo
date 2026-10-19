import { projetos, type Projeto } from '../data/projetos'
import { IconeSetaDiagonal } from './Icones'
import { ilustracoes } from './Ilustracoes'
import { Revelar } from './Revelar'

function Miniatura({ projeto, numero }: { projeto: Projeto; numero: string }) {
  const Ilustracao = ilustracoes[projeto.ilustracao ?? 'clinica']
  // A versão de 640px é gerada junto com o print (npm run prints).
  const menor = projeto.imagem?.replace(/\.webp$/, '-640.webp')

  return (
    <div className="relative h-[200px] p-[18px]" style={{ background: projeto.fundo ?? '#1A1438' }}>
      <span
        className="absolute left-4 top-3.5 font-mono text-xs"
        style={{ color: projeto.corNumero ?? '#C4B5FD' }}
        aria-hidden="true"
      >
        {numero}
      </span>
      <div className="mt-[22px]">
        {projeto.imagem ? (
          <img
            src={projeto.imagem}
            srcSet={`${menor} 640w, ${projeto.imagem} 1280w`}
            sizes="(min-width: 768px) 360px, calc(100vw - 84px)"
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            alt={`Página inicial do projeto ${projeto.titulo}`}
            className="h-[150px] w-full rounded-[10px] object-cover object-top"
          />
        ) : (
          <Ilustracao />
        )}
      </div>
    </div>
  )
}

export function Projetos() {
  return (
    <section id="projetos" className="border-t border-borda-suave bg-fundo-alt">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-6 py-[88px]">
        <Revelar className="flex flex-col items-center gap-2.5 text-center">
          <span className="rotulo">PROJETOS EM DESTAQUE</span>
          <h2 className="titulo-secao">Alguns trabalhos recentes</h2>
          <p className="m-0 max-w-[560px] text-texto-sec">Todos estão no ar — clique para navegar no projeto real.</p>
        </Revelar>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6">
          {projetos.map((p, i) => {
            const numero = String(i + 1).padStart(2, '0')
            const temLink = p.url !== '#'
            return (
              <Revelar
                key={p.titulo}
                como="article"
                atraso={(i % 3) * 100}
                className="flex flex-col overflow-hidden rounded-[18px] border border-borda bg-card"
              >
                <Miniatura projeto={p} numero={numero} />
                <div className="flex flex-1 flex-col gap-3 p-[22px]">
                  <h3 className="m-0 font-display text-[19px] font-semibold">{p.titulo}</h3>
                  <p className="m-0 flex-1 text-[15px] text-texto-sec">{p.descricao}</p>
                  <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0 text-xs font-medium text-destaque-suave">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-roxo-tag px-2.5 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.url}
                    className="inline-flex min-h-11 items-center gap-1.5 self-start text-[15px] font-bold"
                    {...(temLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    Ver projeto <span className="sr-only">{p.titulo}</span>
                    <IconeSetaDiagonal tamanho={16} />
                  </a>
                </div>
              </Revelar>
            )
          })}
        </div>
      </div>
    </section>
  )
}
