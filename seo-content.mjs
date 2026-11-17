// Informações de orientação ao cliente. Não descrevem frota, capacidade ou prazos.
export const serviceContent = {
  'reboque-pesado': {
    when: 'Quando um caminhão ou outro veículo pesado não pode seguir viagem por meios próprios, informe o tipo de veículo, a condição em que ele se encontra e o local exato. Esses dados ajudam a equipe a avaliar a solicitação de reboque.',
    request: 'Envie a localização de origem, o destino desejado, o modelo do veículo, se ele está carregado e uma descrição da ocorrência. Fotos do veículo e do acesso ao local podem ajudar na avaliação.',
    questions: [
      ['Como solicitar guincho para caminhão em Ipatinga?', 'Entre em contato com a Vertão Resgate pelo WhatsApp ou telefone e informe a localização, o tipo e a condição do caminhão e o destino pretendido. A empresa tem base em Ipatinga/MG.'],
      ['Qual a diferença entre reboque pesado e extra pesado?', 'A escolha depende das características do veículo ou conjunto e das condições da operação. Informe os dados do chamado para que a equipe avalie qual serviço se aplica.']
    ]
  },
  'reboque-extra-pesado': {
    when: 'Esse serviço é apresentado para solicitações de porte ou complexidade que exigem avaliação específica. A classificação da operação depende das características do conjunto, da carga e do acesso ao local.',
    request: 'Informe tipo e configuração do veículo, carga, condição atual, origem, destino e possíveis restrições de acesso. Se houver, envie fotos para contextualizar o chamado.',
    questions: [['Quando pedir reboque extra pesado?', 'Quando o conjunto ou as condições do local tornam o reboque convencional inadequado, descreva a situação à equipe. A solução é definida após avaliação do chamado.']]
  },
  destombamento: {
    when: 'O destombamento é solicitado quando um veículo tombado precisa ser reposicionado. As condições do terreno, do veículo, da carga e do acesso influenciam a avaliação da ocorrência.',
    request: 'Informe localização precisa, tipo de veículo, posição em que ficou, presença de carga e condições de acesso. Envie fotos da cena, se isso puder ser feito com segurança. Em via pública, siga também as orientações das autoridades responsáveis.',
    questions: [
      ['Onde solicitar destombamento de caminhão no Vale do Aço?', 'A Vertão Resgate tem base em Ipatinga e apresenta destombamento entre seus serviços. Envie a localização e os dados da ocorrência para consultar o atendimento.'],
      ['Que informações ajudam no orçamento de destombamento?', 'Local, tipo de veículo, posição, carga, acesso e imagens da ocorrência ajudam a equipe a entender a necessidade antes de responder à solicitação.']
    ]
  },
  'transporte-de-maquinas': {
    when: 'O transporte de máquinas e equipamentos pode ser necessário em mudanças de local de trabalho, entregas ou retirada de equipamentos. Cada pedido depende das características do item e do trajeto.',
    request: 'Informe qual máquina ou equipamento será transportado, dimensões e peso se conhecidos, local de coleta, destino e condições de carga e descarga. A viabilidade da rota deve ser consultada com a equipe.',
    questions: [['Quem realiza transporte de máquinas na região de Ipatinga?', 'A Vertão Resgate oferece transporte de máquinas e equipamentos a partir de sua base em Ipatinga/MG. Consulte a equipe com os dados do equipamento e da rota.']]
  },
  'servico-munck': {
    when: 'O serviço de Munck é apresentado para demandas de movimentação e içamento de máquinas e equipamentos. O tipo de peça, o espaço disponível e as condições de acesso precisam ser informados na consulta.',
    request: 'Descreva o item a movimentar, dimensões e peso se conhecidos, endereço, pontos de origem e destino da movimentação e eventuais obstáculos. Consulte disponibilidade antes de programar a operação.',
    questions: [['Como consultar um serviço de Munck em Ipatinga?', 'Fale com a Vertão Resgate pelo WhatsApp ou telefone, indicando o item, o local e as condições de acesso. A equipe poderá avaliar a demanda.']]
  },
  'auxilio-quinta-roda': {
    when: 'O auxílio de quinta roda atende demandas relacionadas ao conjunto formado por cavalo mecânico e implemento. Descreva o problema observado antes de solicitar o apoio.',
    request: 'Informe localização, configuração do conjunto, condição do cavalo mecânico e do implemento, presença de carga e fotos da situação quando disponíveis.',
    questions: [['Que dados enviar para pedir auxílio de quinta roda?', 'A localização, a configuração do conjunto e uma descrição do problema ajudam a equipe a avaliar a solicitação.']]
  },
  'transporte-interestadual': {
    when: 'O transporte para outro estado depende do veículo ou equipamento, do destino e das condições da rota. As localidades citadas são destinos possíveis de transporte, não sedes da empresa.',
    request: 'Informe o item a transportar, origem e destino completos, dimensões e peso se conhecidos, e condições de coleta e entrega. A equipe confirmará a viabilidade do pedido.',
    questions: [['A Vertão Resgate possui base em outros estados?', 'A base informada da empresa fica em Ipatinga/MG. Operações para outros estados são avaliadas como rotas de transporte.']]
  }
};
