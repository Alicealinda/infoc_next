export default function handler(req, res) {
  const noticias = [
    { id: 1, titulo: "Brasil vence Argentina em amistoso eletrizante", descricao: "Jogo termina em 3x2 com golaço de falta nos acréscimos.", tipo: "esportes" },
    { id: 2, titulo: "Seleção feminina se prepara para a Copa do Mundo", descricao: "Treinamentos intensos marcam início da concentração.", tipo: "esportes" },
    { id: 3, titulo: "Atleta paralímpico quebra recorde mundial", descricao: "Brasileiro surpreende em competição internacional.", tipo: "esportes" },
    { id: 4, titulo: "Final do Brasileirão promete emoções", descricao: "Última rodada definirá o campeão e os rebaixados.", tipo: "esportes" },
    { id: 5, titulo: "Time brasileiro é campeão da Libertadores", descricao: "Conquista histórica com vitória nos pênaltis.", tipo: "esportes" },
    
    { id: 6, titulo: "Congresso aprova nova reforma tributária", descricao: "Texto traz mudanças em impostos e simplificação fiscal.", tipo: "politica" },
    { id: 7, titulo: "Senado discute regras para redes sociais", descricao: "Projeto prevê responsabilização de plataformas digitais.", tipo: "politica" },
    { id: 8, titulo: "Presidente sanciona pacote econômico", descricao: "Medidas visam estimular investimento e geração de empregos.", tipo: "politica" },
    { id: 9, titulo: "Novo ministro da Justiça toma posse", descricao: "Cerimônia aconteceu no Palácio do Planalto.", tipo: "politica" },
    { id: 10, titulo: "Câmara aprova aumento do salário mínimo", descricao: "Novo valor entra em vigor no próximo mês.", tipo: "politica" },

    { id: 11, titulo: "Startup brasileira lança app de segurança", descricao: "Aplicativo usa IA para alertar sobre emergências.", tipo: "tecnologia" },
    { id: 12, titulo: "Novo chip promete mais velocidade nos celulares", descricao: "Fabricante anuncia tecnologia 30% mais eficiente.", tipo: "tecnologia" },
    { id: 13, titulo: "Cientistas criam robô que realiza cirurgias com precisão", descricao: "Equipamento já foi testado com sucesso em hospitais.", tipo: "tecnologia" },
    { id: 14, titulo: "Governo investe em banda larga rural", descricao: "Projeto levará internet para áreas remotas.", tipo: "tecnologia" },
    { id: 15, titulo: "Brasil terá primeira fábrica de carros autônomos", descricao: "Montadora já iniciou a construção do complexo.", tipo: "tecnologia" },

    { id: 16, titulo: "Enem terá novas regras a partir deste ano", descricao: "Mudanças incluem nova estrutura de questões.", tipo: "educacao" },
    { id: 17, titulo: "Universidades ampliam vagas para cursos híbridos", descricao: "Modelo combina aulas presenciais e online.", tipo: "educacao" },
    { id: 18, titulo: "Projeto incentiva leitura nas escolas públicas", descricao: "Alunos terão acesso gratuito a milhares de livros digitais.", tipo: "educacao" },
    { id: 19, titulo: "MEC lança programa de capacitação para professores", descricao: "Formação será totalmente online e gratuita.", tipo: "educacao" },
    { id: 20, titulo: "Escolas adotam tecnologias assistivas na sala de aula", descricao: "Ferramentas promovem inclusão de alunos com deficiência.", tipo: "educacao" },

    { id: 21, titulo: "Novo tratamento para diabetes é testado no Brasil", descricao: "Pesquisadores mostram bons resultados com planta amazônica.", tipo: "saude" },
    { id: 22, titulo: "Campanha de vacinação contra gripe começa hoje", descricao: "Postos de saúde atenderão em horário estendido.", tipo: "saude" },
    { id: 23, titulo: "Hospital público bate recorde de cirurgias realizadas", descricao: "Mais de mil procedimentos em apenas um mês.", tipo: "saude" },
    { id: 24, titulo: "Estudo mostra aumento da expectativa de vida", descricao: "População brasileira vive, em média, 76 anos.", tipo: "saude" },
    { id: 25, titulo: "Alerta para nova variante de vírus respiratório", descricao: "Autoridades reforçam uso de máscaras em ambientes fechados.", tipo: "saude" },

    { id: 26, titulo: "Pesquisa aponta crescimento da atividade física", descricao: "Número de pessoas praticando esportes subiu 20%.", tipo: "saude" },
    { id: 27, titulo: "Brasil desenvolve vacina nacional contra dengue", descricao: "Imunizante já entrou na fase final de testes.", tipo: "saude" },
    { id: 28, titulo: "Escola rural é destaque em olimpíada de matemática", descricao: "Estudantes superaram concorrentes de grandes centros.", tipo: "educacao" },
    { id: 29, titulo: "Nova lei garante internet gratuita em escolas públicas", descricao: "Conexão será mantida com verba federal.", tipo: "educacao" },
    { id: 30, titulo: "Startup lança plataforma de aulas com realidade virtual", descricao: "Ambiente imersivo facilita aprendizado em ciências e história.", tipo: "tecnologia" }
  ];

  res.status(200).json(noticias);
}