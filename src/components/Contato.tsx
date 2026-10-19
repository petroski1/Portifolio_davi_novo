import { contato } from '../data/contato'
import {
  IconeEmail,
  IconeGithub,
  IconeInstagram,
  IconeLinkedin,
  IconeTelefone,
  IconeWhatsapp,
} from './Icones'
import { Revelar } from './Revelar'

const redes = [
  { rotulo: 'GitHub', url: contato.github, icone: <IconeGithub tamanho={20} /> },
  { rotulo: 'LinkedIn', url: contato.linkedin, icone: <IconeLinkedin tamanho={20} /> },
  { rotulo: 'Instagram', url: contato.instagram, icone: <IconeInstagram tamanho={20} /> },
]

const externo = (url: string) => (url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})

export function Contato() {
  return (
    <section id="contato" className="border-t border-borda-suave">
      <div className="mx-auto flex max-w-site flex-wrap items-stretch gap-8 px-6 pb-16 pt-[88px]">
        <Revelar className="flex min-w-0 flex-[2_1_440px] flex-col gap-[18px] rounded-[22px] border border-roxo-badge-borda bg-roxo-badge p-10">
          <span className="text-xs font-bold tracking-[0.16em] text-destaque-suave">VAMOS TRABALHAR JUNTOS</span>
          <h2 className="m-0 font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.15]">
            Tem um projeto em mente?
          </h2>
          <p className="m-0 max-w-[520px] text-[17px] text-[#CFCBEA]">
            Estou disponível para novos sites, landing pages e sistemas. Me conte sua ideia e eu te respondo com uma
            proposta.
          </p>
          <div className="flex flex-wrap gap-3.5 pt-1.5">
            <a href={`mailto:${contato.email}`} className="btn-primario min-h-[50px] px-[26px]">
              Enviar e-mail
              <IconeEmail tamanho={18} traco={2.2} />
            </a>
            <a
              href={contato.whatsappUrl}
              className="btn min-h-[50px] border border-[#5B4AA8] px-[26px] text-texto hover:text-white"
              {...externo(contato.whatsappUrl)}
            >
              Chamar no WhatsApp
              <IconeWhatsapp tamanho={18} />
            </a>
          </div>
        </Revelar>

        <Revelar
          atraso={100}
          className="flex min-w-0 flex-[1_1_280px] flex-col gap-[22px] rounded-[22px] border border-borda bg-card p-8"
        >
          <span className="text-xs font-bold tracking-[0.16em] text-texto-mudo">CONTATO</span>
          <div className="flex flex-col gap-3.5 text-[15px]">
            <a href={`mailto:${contato.email}`} className="flex min-h-11 items-center gap-3 text-texto">
              <span className="icone-caixa size-10 rounded-[10px]">
                <IconeEmail tamanho={18} />
              </span>
              <span className="[overflow-wrap:anywhere]">{contato.email}</span>
            </a>
            <a
              href={contato.whatsappUrl}
              className="flex min-h-11 items-center gap-3 text-texto"
              {...externo(contato.whatsappUrl)}
            >
              <span className="icone-caixa size-10 rounded-[10px]">
                <IconeTelefone tamanho={18} />
              </span>
              <span>{contato.whatsappTexto}</span>
            </a>
          </div>
          <div className="mt-auto flex gap-2.5">
            {redes.map((r) => (
              <a
                key={r.rotulo}
                href={r.url}
                aria-label={r.rotulo}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-borda-forte text-texto"
                {...externo(r.url)}
              >
                {r.icone}
              </a>
            ))}
          </div>
        </Revelar>
      </div>
    </section>
  )
}
