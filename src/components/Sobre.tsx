import type { ReactNode } from 'react'
import { IconeCalendario, IconeCheck, IconeCodigoInv, IconeSetaDireita, IconeSorriso } from './Icones'
import { Revelar } from './Revelar'

const numeros: { valor: string; rotulo: string; icone: ReactNode }[] = [
  { valor: '4+', rotulo: 'Anos de experiência', icone: <IconeCalendario tamanho={22} /> },
  { valor: '6+', rotulo: 'Projetos publicados', icone: <IconeCodigoInv tamanho={22} /> },
  { valor: '19', rotulo: 'Clientes atendidos', icone: <IconeSorriso tamanho={22} /> },
  { valor: 'Saúde', rotulo: 'Clínicas e laboratórios são minha especialidade', icone: <IconeCheck tamanho={22} /> },
]

export function Sobre() {
  return (
    <section id="sobre" className="border-y border-borda-suave bg-fundo-alt">
      <div className="mx-auto flex max-w-site flex-wrap items-center gap-14 px-6 py-20">
        <Revelar className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
          <span className="selo">SOBRE MIM</span>
          <h2 className="titulo-secao leading-[1.2]">Transformo ideias em produtos digitais que funcionam</h2>
          <p className="m-0 max-w-[540px] text-[17px] text-texto-sec">
            Sou o Davi Petroski, desenvolvedor web há mais de 4 anos. Já atendi 19 clientes, ajudando clínicas,
            laboratórios e pequenos negócios a ter presença online profissional — sites rápidos, bonitos e pensados para
            converter visitas em agendamentos — e crio sistemas que organizam a rotina e as finanças de quem os usa.
          </p>
          <a href="#contato" className="btn-contorno min-h-[46px] self-start px-[22px]">
            Vamos conversar
            <IconeSetaDireita tamanho={16} />
          </a>
        </Revelar>

        <div className="grid min-w-0 flex-[1_1_440px] grid-cols-2 gap-4">
          {numeros.map((n, i) => (
            <Revelar
              key={n.rotulo}
              atraso={i * 80}
              className="flex flex-col gap-3.5 rounded-2xl border border-borda bg-card p-6"
            >
              <span className="icone-caixa size-11 rounded-xl">{n.icone}</span>
              <div>
                <div className="font-display text-[34px] font-bold leading-none">{n.valor}</div>
                <div className="mt-1.5 text-sm text-texto-sec">{n.rotulo}</div>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
