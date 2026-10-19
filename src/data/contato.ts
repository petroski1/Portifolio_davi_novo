// Troque '#' pelos links reais assim que tiver.
export const contato = {
  email: 'daviscmedeiros@gmail.com',
  whatsappTexto: '(21) 98156-6811',
  whatsappUrl: 'https://wa.me/5521981566811',
  github: '#',
  linkedin: '#',
  instagram: '#',
  // Fica ativo sozinho quando public/curriculo-davi-petroski.pdf existir.
  curriculo: __TEM_CURRICULO__ ? '/curriculo-davi-petroski.pdf' : '#',
}

export const foto = __TEM_FOTO__ ? '/foto-davi.jpg' : null
