import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  como?: ElementType
  atraso?: number
  className?: string
}

/** Faz o conteúdo surgir suavemente quando entra na tela. */
export function Revelar({ children, como: Tag = 'div', atraso = 0, className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('visivel')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`revelar ${className}`}
      style={atraso ? ({ '--atraso': `${atraso}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
