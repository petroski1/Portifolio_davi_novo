import { contato, foto } from '../data/contato'
import { IconeDownload, IconeSetaDiagonal } from './Icones'

const tecnologias = [
  { nome: 'HTML', cor: 'bg-[#2A1810] text-[#FDBA8C] border-[#4A2A18]' },
  { nome: 'CSS', cor: 'bg-[#0F1E33] text-[#93C5FD] border-[#1C3558]' },
  { nome: 'JavaScript', cor: 'bg-[#2A2810] text-[#FDE68A] border-[#4A4518]' },
  { nome: 'TypeScript', cor: 'bg-[#0F1E33] text-[#93C5FD] border-[#1C3558]' },
  { nome: 'React', cor: 'bg-[#0D2630] text-[#7DD3FC] border-[#164050]' },
  { nome: 'Tailwind', cor: 'bg-[#0D2A2A] text-[#5EEAD4] border-[#164545]' },
  { nome: 'Supabase', cor: 'bg-[#102A18] text-[#86EFAC] border-[#1B4528]' },
]

const str = (s: string) => <span className="text-[#86EFAC]">"{s}"</span>

export function Hero() {
  const semCurriculo = contato.curriculo === '#'

  return (
    <section
      id="inicio"
      className="mx-auto flex max-w-site flex-wrap items-center gap-14 px-6 pb-[88px] pt-[72px]"
    >
      <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
        <span className="selo">DESENVOLVEDOR WEB</span>
        <h1 className="m-0 font-display text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          Olá, eu sou o <span className="text-destaque-claro">Davi</span>
          <br />
          <span className="text-[0.72em] font-bold text-texto">Crio sites e sistemas que trabalham por você.</span>
        </h1>
        <p className="m-0 max-w-[520px] text-lg text-texto-sec">
          Desenvolvo sites para clínicas e negócios locais, landing pages com agendamento pelo WhatsApp e sistemas web
          sob medida — do layout ao deploy.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="#projetos" className="btn-primario min-h-[50px] px-[26px]">
            Ver meus projetos
            <IconeSetaDiagonal tamanho={18} />
          </a>
          <a
            href={contato.curriculo}
            className="btn-contorno min-h-[50px] px-[26px]"
            {...(semCurriculo ? {} : { download: true })}
          >
            Baixar currículo
            <IconeDownload tamanho={18} />
          </a>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <span className="text-xs font-bold tracking-[0.14em] text-texto-mudo">TECNOLOGIAS QUE USO</span>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 font-mono text-[13px] font-medium">
            {tecnologias.map((t) => (
              <li key={t.nome} className={`rounded-lg border px-3 py-[7px] ${t.cor}`}>
                {t.nome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_420px] justify-center">
        <div className="relative w-full max-w-[480px] pb-[150px] sm:pb-24">
          <div className="flex aspect-square w-full max-w-[420px] flex-col items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#5B3FD0] bg-[#24185A] text-destaque-suave">
            {foto ? (
              <img
                src={foto}
                alt="Foto de Davi Petroski"
                width={420}
                height={420}
                fetchPriority="high"
                className="size-full object-cover"
              />
            ) : (
              <>
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-label="Espaço para foto"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                </svg>
                <span className="text-sm font-medium">[Sua foto aqui]</span>
              </>
            )}
          </div>

          <div className="absolute bottom-0 right-0 w-[290px] max-w-[80%] overflow-hidden rounded-[14px] border border-[#2E2E58] bg-[#0F0F22] shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-[#23234A] px-3.5 py-2.5 font-mono text-xs text-texto-mudo">
              <span>davi.js</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-[9px] rounded-full bg-[#F87171]" />
                <span className="size-[9px] rounded-full bg-[#FBBF24]" />
                <span className="size-[9px] rounded-full bg-[#4ADE80]" />
              </span>
            </div>
            <pre className="m-0 whitespace-pre-wrap px-4 py-3.5 font-mono text-[12.5px] leading-[1.7] text-[#E4E4F4]">
              <span className="text-[#C084FC]">const</span> dev = {'{'}
              {'\n  '}nome: {str('Davi Petroski')},
              {'\n  '}stack: [{str('React')}, {str('Tailwind')}],
              {'\n  '}foco: {str('sites que geram clientes')},
              {'\n  '}disponivel: <span className="text-[#FDBA74]">true</span>
              {'\n};'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
