import { Contato } from './components/Contato'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Habilidades } from './components/Habilidades'
import { Hero } from './components/Hero'
import { Projetos } from './components/Projetos'
import { Sobre } from './components/Sobre'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-destaque focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
