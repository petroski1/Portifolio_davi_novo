export function Footer() {
  return (
    <footer className="border-t border-borda-suave">
      <div className="mx-auto flex max-w-site flex-wrap justify-between gap-3 p-6 text-sm text-texto-mudo">
        <span>© {new Date().getFullYear()} Davi Petroski. Todos os direitos reservados.</span>
        <span>Desenvolvido por Davi Petroski</span>
      </div>
    </footer>
  )
}
