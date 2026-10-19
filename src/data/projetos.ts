import type { IlustracaoId } from '../components/Ilustracoes'

export type Projeto = {
  titulo: string
  descricao: string
  tags: string[]
  /** Link do projeto no ar. Use '#' enquanto não houver URL pública. */
  url: string
  /**
   * Print do site em public/projetos/ (ex.: '/projetos/meu-site.webp').
   * Gere com `npm run prints`. Sem imagem, o card mostra a ilustração.
   */
  imagem?: string
  /** Ilustração usada quando não há imagem (ex.: o site pede login). */
  ilustracao?: IlustracaoId
  /** Cor de fundo do topo do card e cor do número. */
  fundo?: string
  corNumero?: string
}

export const projetos: Projeto[] = [
  {
    titulo: 'Clínica de Estética Valéria Lopes',
    descricao:
      'Site da biomédica Valéria Lopes com tratamentos por categoria, galeria de antes e depois e agendamento enviado direto pelo WhatsApp.',
    tags: ['Landing page', 'Agendamento', 'Vercel'],
    url: '#', // TODO: URL pública de produção a confirmar
    ilustracao: 'clinica',
    fundo: '#2B1A22',
    corNumero: '#F5D0DC',
  },
  {
    titulo: 'OralCad Connect',
    descricao:
      'Sistema financeiro para laboratório de prótese dentária: trabalhos, valores, pagamentos e pendências, com painéis diferentes para equipe e clientes.',
    tags: ['Sistema web', 'Login', 'Dashboard'],
    url: 'https://oralcad-connect.lovable.app',
    ilustracao: 'oralcad', // a página inicial é a tela de login
    fundo: '#0F1D36',
    corNumero: '#BFDBFE',
  },
  {
    titulo: 'Davi Lab — Estúdio Odontológico',
    descricao:
      'Site premium para odontologia com calculadora interativa de custo e prazo de tratamento, carrossel de especialistas e agendamento online.',
    tags: ['Calculadora', 'Formulário', 'WhatsApp'],
    url: 'https://davi-lab.vercel.app/',
    imagem: '/projetos/davi-lab.webp',
    fundo: '#0E2A2A',
    corNumero: '#99F6E4',
  },
  {
    titulo: 'FinControl Pro',
    descricao:
      'Sistema completo de gestão financeira pessoal, feito como aplicação web para organizar o dinheiro do dia a dia.',
    tags: ['Aplicação web', 'Finanças', 'Netlify'],
    url: 'https://jest-pessoal.netlify.app/',
    imagem: '/projetos/fincontrol-pro.webp',
    fundo: '#102418',
    corNumero: '#BBF7D0',
  },
  {
    titulo: 'Loja Militar — Avaliações',
    descricao:
      'Página feita para cliente, focada em reunir e exibir as avaliações de quem comprou na loja, reforçando a confiança de novos clientes.',
    tags: ['E-commerce', 'Avaliações', 'Vercel'],
    url: 'https://trabalho-cliente-54.vercel.app/',
    imagem: '/projetos/loja-militar.webp',
    fundo: '#22241A',
    corNumero: '#E7E5C4',
  },
  {
    titulo: 'Vallestética (1ª versão)',
    descricao:
      'Primeira versão do site da clínica de estética e pós-operatório, com serviços faciais, corporais e capilares — base que evoluiu para o projeto 01.',
    tags: ['Site institucional', 'Saúde', 'Netlify'],
    url: 'https://vallestetica.netlify.app/',
    imagem: '/projetos/vallestetica.webp',
    fundo: '#2A2218',
    corNumero: '#F3E3C7',
  },
]
