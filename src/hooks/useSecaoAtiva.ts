import { useEffect, useState } from 'react'

/** Retorna o id da seção que ocupa a faixa central da tela. */
export function useSecaoAtiva(ids: string[]) {
  const [ativa, setAtiva] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setAtiva(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return ativa
}
