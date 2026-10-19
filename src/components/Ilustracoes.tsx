// Miniaturas ilustradas do layout original. Usadas nos cards sem print
// (projeto sem URL pública ou com tela de login).

const Estrela = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2" />
  </svg>
)

const Clinica = () => (
  <div className="flex h-[150px] flex-col overflow-hidden rounded-[10px] bg-[#FBF4F1]">
    <div className="flex h-[18px] items-center gap-[5px] bg-[#F0E2DC] px-2">
      {[0, 1, 2].map((i) => <span key={i} className="size-1.5 rounded-full bg-[#D9B8AC]" />)}
    </div>
    <div className="flex flex-1 gap-2.5 p-3">
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="h-2.5 w-4/5 rounded-[3px] bg-[#8E4E62]" />
        <div className="h-2.5 w-3/5 rounded-[3px] bg-[#8E4E62]" />
        <div className="mt-1 h-1.5 w-[90%] rounded-[3px] bg-[#E6CFC7]" />
        <div className="h-1.5 w-[70%] rounded-[3px] bg-[#E6CFC7]" />
        <div className="mt-2 h-[18px] w-16 rounded-[9px] bg-[#25A35A]" />
      </div>
      <div className="w-[38%] rounded-lg bg-[#E9C9C0]" />
    </div>
  </div>
)

const Oralcad = () => (
  <div className="flex h-[150px] overflow-hidden rounded-[10px] bg-[#F5F8FC]">
    <div className="flex w-[22%] flex-col gap-1.5 bg-[#1E3A6E] px-2 py-2.5">
      <div className="h-1.5 rounded-[3px] bg-[#5B8BD9]" />
      <div className="h-1.5 rounded-[3px] bg-[#33528A]" />
      <div className="h-1.5 rounded-[3px] bg-[#33528A]" />
      <div className="h-1.5 rounded-[3px] bg-[#33528A]" />
    </div>
    <div className="flex flex-1 flex-col gap-2 p-2.5">
      <div className="flex gap-1.5">
        <div className="h-[30px] flex-1 rounded-md bg-[#DCE7F7]" />
        <div className="h-[30px] flex-1 rounded-md bg-[#DCF3E6]" />
        <div className="h-[30px] flex-1 rounded-md bg-[#FBE7D6]" />
      </div>
      <div className="flex flex-1 flex-col gap-[5px] rounded-md border border-[#E2E8F2] bg-white p-2">
        <div className="h-[5px] rounded-[3px] bg-[#CBD5E4]" />
        <div className="h-[5px] rounded-[3px] bg-[#E2E8F2]" />
        <div className="h-[5px] rounded-[3px] bg-[#E2E8F2]" />
        <div className="h-[5px] rounded-[3px] bg-[#E2E8F2]" />
      </div>
    </div>
  </div>
)

const DaviLab = () => (
  <div className="flex h-[150px] flex-col overflow-hidden rounded-[10px] bg-[#F2FAF8]">
    <div className="flex h-[18px] items-center gap-[5px] bg-[#DDEFEB] px-2">
      {[0, 1, 2].map((i) => <span key={i} className="size-1.5 rounded-full bg-[#9CCFC4]" />)}
    </div>
    <div className="flex flex-1 items-end gap-2.5 p-3">
      <div className="flex flex-1 flex-col gap-1.5 self-center">
        <div className="h-2.5 w-[85%] rounded-[3px] bg-[#0F5F57]" />
        <div className="h-1.5 w-[70%] rounded-[3px] bg-[#BFE0D9]" />
        <div className="h-1.5 w-[55%] rounded-[3px] bg-[#BFE0D9]" />
      </div>
      <div className="flex h-[90%] w-[44%] flex-col gap-[5px] rounded-lg border border-[#CFE8E2] bg-white p-2">
        <div className="h-[5px] rounded-[3px] bg-[#CFE8E2]" />
        <div className="h-3 rounded-md bg-[#E6F4F1]" />
        <div className="h-3 rounded-md bg-[#E6F4F1]" />
        <div className="mt-auto h-3.5 rounded-[7px] bg-[#14B8A6]" />
      </div>
    </div>
  </div>
)

const FinControl = () => (
  <div className="flex h-[150px] flex-col gap-2.5 overflow-hidden rounded-[10px] border border-[#1F3A2A] bg-[#0B1410] p-3">
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => <div key={i} className="h-7 flex-1 rounded-md bg-[#14281C]" />)}
    </div>
    <div className="flex flex-1 items-end gap-[7px]">
      {[40, 65, 50, 80, 58, 92, 70].map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-[3px] ${i === 5 ? 'bg-[#4ADE80]' : 'bg-[#22C55E]'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  </div>
)

const LojaMilitar = () => (
  <div className="flex h-[150px] flex-col gap-2 overflow-hidden rounded-[10px] bg-[#F7F6F0] p-3">
    <div className="flex gap-1 text-[#D4A20A]">
      {[0, 1, 2, 3, 4].map((i) => <Estrela key={i} />)}
    </div>
    <div className="grid flex-1 grid-cols-2 gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-1 rounded-md border border-[#E4E2D4] bg-white p-1.5">
          <div className="h-[5px] w-1/2 rounded-[3px] bg-[#5B6236]" />
          <div className="h-1 rounded-sm bg-[#E4E2D4]" />
          <div className="h-1 w-4/5 rounded-sm bg-[#E4E2D4]" />
        </div>
      ))}
    </div>
  </div>
)

const Vallestetica = () => (
  <div className="flex h-[150px] flex-col overflow-hidden rounded-[10px] bg-[#FAF5EC]">
    <div className="flex h-[26px] items-center justify-between bg-[#EADCC4] px-2.5">
      <div className="h-[7px] w-10 rounded-[3px] bg-[#8A6A3E]" />
      <div className="flex gap-[5px]">
        {[0, 1, 2].map((i) => <div key={i} className="h-[5px] w-[18px] rounded-[3px] bg-[#C9B28C]" />)}
      </div>
    </div>
    <div className="grid flex-1 grid-cols-3 gap-1.5 p-2.5">
      <div className="rounded-md bg-[#E8D7BB]" />
      <div className="rounded-md bg-[#DCC6A2]" />
      <div className="rounded-md bg-[#E8D7BB]" />
    </div>
  </div>
)

export const ilustracoes = {
  clinica: Clinica,
  oralcad: Oralcad,
  davilab: DaviLab,
  fincontrol: FinControl,
  lojamilitar: LojaMilitar,
  vallestetica: Vallestetica,
}

export type IlustracaoId = keyof typeof ilustracoes
