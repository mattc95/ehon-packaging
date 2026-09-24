import type { PageCopy } from "./types";

const quote = { label: "Solicitar orçamento", text: "Indique tipo de produto, quantidade e acabamento-alvo." };
const quoteBrief = { label: "Solicitar orçamento", text: "Envie o brief que o contato comercial vai usar de verdade." };

export const pages: Record<string, PageCopy> = {
  "lipstick-packaging": {
    navLabel: "Embalagens para batom",
    title: "Fabricante de embalagens para batom sob medida",
    description: "A EHON fabrica estojos, carcaças e mecanismos de batom em Shantou. As opções OEM e ODM cobrem cor, logo, acabamento e combinação de componentes.",
    h1: "Embalagens de batom pensadas para a marca por fora e a fórmula por dentro.",
    eyebrow: "Embalagens para batom",
    lead: "A EHON projeta e fabrica estojos de batom, mecanismos internos e carcaças decoradas para marcas que precisam de uma embalagem repetível e pronta para exportar.",
    answer: "A EHON Packaging produz embalagens de batom sob medida em Shantou, China, incluindo estojos slim, quadrados e com fechamento magnético. A marca define resina, cor, logo e acabamento, e passa da amostra à produção decorada e montada sob ISO 9001, ISO 14001 e ISO 45001.",
    imageAlt: "Estojos de batom EHON",
    highlights: [
      { title: "Arquiteturas", text: "Slim, quadrado, redondo e fechamento magnético para linhas de lábios." },
      { title: "Ajuste do mecanismo", text: "Diâmetro da cuba, curso e clique são confirmados contra a barra, não só contra o render." },
      { title: "Decoração", text: "Estampagem a quente, spray, metalização, impressão e montagens bicolor." },
    ],
    specs: [
      { label: "Formatos habituais", value: "Slim, clássico, quadrado, magnético" },
      { label: "Personalização", value: "Cor, logo, acabamento, cuba, carcaça" },
      { label: "Modelo de fornecimento", value: "Plataforma existente ou molde novo" },
      { label: "Fábrica", value: "Shantou, Guangdong, desde 1992" },
    ],
    body: [
      {
        heading: "O que o comprador costuma fechar primeiro",
        paragraphs: [
          "Um estojo de batom é ao mesmo tempo um mecanismo e um objeto de marca. O primeiro brief deve indicar o diâmetro da barra, o toque desejado, o mercado e se o projeto pode partir de uma plataforma EHON ou precisa de um molde novo.",
          "Cor, posição do logo e acabamento são especificados juntos para que carcaça, base e cuba continuem montando depois de decorar. Assim se evita aprovar um render que não resiste à estampagem, ao spray ou à metalização.",
        ],
      },
      {
        heading: "De uma história de lábios a uma embalagem de produção",
        paragraphs: [
          "O fluxo da EHON vai do brief e do design à seleção de material, amostra, moldagem, decoração, montagem e inspeção de exportação. Há sets coordenados quando o batom precisa conviver com gloss labial, máscara para cílios ou pós compactos da mesma coleção.",
        ],
      },
    ],
    faqs: [
      {
        question: "A EHON pode personalizar um estojo de batom sem abrir um molde novo?",
        answer: "Sim. Muitos projetos partem de uma plataforma existente e mudam cor, spray, estampagem a quente, logo e alguns componentes. Uma forma totalmente nova exige ferramentaria, que a EHON orça no orçamento.",
      },
      {
        question: "O que deve incluir uma solicitação de embalagem de batom?",
        answer: "Tipo de produto, quantidade estimada, mercado-alvo, forma preferida, diâmetro de barra ou cuba se conhecido, cor, método de logo, acabamento e se precisa de amostra antes de produzir.",
      },
      {
        question: "A EHON monta e decora a embalagem de batom?",
        answer: "Sim. Decoração, impressão e montagem fazem parte da fabricação em Shantou, seguidas de inspeção de qualidade antes da embalagem de exportação.",
      },
    ],
    related: [
      { label: "Embalagens para gloss labial", text: "Tubos e aplicadores para a mesma linha de lábios." },
      { label: "Decoração e acabamentos", text: "Estampagem, spray, metalização e impressão." },
      quote,
    ],
  },
  "mascara-packaging": {
    navLabel: "Embalagens para máscara",
    title: "Fabricante de embalagens para máscara para cílios",
    description: "Tubos, tampas e escovas de máscara sob medida, da EHON Packaging. Defina capacidade, gargalo, aplicador e decoração para projetos OEM ou ODM.",
    h1: "Tubos e escovas de máscara projetados como um só sistema.",
    eyebrow: "Embalagens para máscara",
    lead: "A EHON fabrica a embalagem de máscara como um conjunto de tubo, tampa e aplicador, de modo que escova, vedação e decoração sejam especificados juntos.",
    answer: "A EHON Packaging fabrica tubos de máscara sob medida em Shantou para marcas de beleza. O comprador define capacidade, gargalo, haste e tampa, e depois cor e acabamento. A amostra verifica a vedação, o ajuste do aplicador e a decoração antes de produzir.",
    imageAlt: "Tubos de máscara e delineador",
    highlights: [
      { title: "Tubo e tampa", text: "Direções retas, cônicas e soft-touch com rosca combinada." },
      { title: "Aplicador", text: "A escova é escolhida conforme a fórmula e o resultado prometido nos cílios." },
      { title: "Vedação", text: "O raspador e o fechamento são checados para que a embalagem viaje, não só para a foto." },
    ],
    specs: [
      { label: "Componentes", value: "Tubo, tampa, haste, raspador" },
      { label: "Personalização", value: "Capacidade, cor, logo, acabamento" },
      { label: "Decoração", value: "Impressão, estampagem, spray, metalização" },
      { label: "Modelo", value: "Plataforma OEM ou design sob medida" },
    ],
    body: [
      {
        heading: "Por que a escova entra no primeiro brief",
        paragraphs: [
          "O desempenho da máscara é julgado pela escova, e a marca é julgada pelo tubo. A EHON os trata como um só conjunto: capacidade, acabamento do gargalo, raspador e torque da tampa são confirmados antes de fechar a arte.",
          "Se o projeto compartilha linguagem visual com o delineador ou o gloss labial, a mesma cor e acabamento podem passar para essas embalagens.",
        ],
      },
    ],
    faqs: [
      {
        question: "É possível trocar o aplicador em um tubo de máscara existente?",
        answer: "Muitas vezes sim, quando o gargalo e o raspador são compatíveis. A EHON confirma o ajuste na amostra, sem assumir que qualquer escova cabe em qualquer frasco.",
      },
      {
        question: "Que decoração funciona em tubos de máscara?",
        answer: "As vias habituais são serigrafia, estampagem a quente, cor em spray, acabamento fosco e metalização UV. O processo correto depende da resina e da arte.",
      },
    ],
    related: [
      { label: "Embalagens para delineador", text: "Lápis e componentes de delineador líquido." },
      { label: "Acessórios", text: "Escovas, tampas e peças de apoio." },
      quote,
    ],
  },
  "eyeliner-packaging": {
    navLabel: "Embalagens para delineador",
    title: "Fabricante de embalagens para delineador",
    description: "A EHON fornece embalagens de delineador sob medida, incluindo frascos de delineador líquido e mecanismos de lápis, com tampas, pontas e decoração combinados.",
    h1: "Embalagens de delineador para fórmulas líquidas e sistemas de lápis.",
    eyebrow: "Embalagens para delineador",
    lead: "Os frascos de delineador líquido e os mecanismos de lápis precisam de uma ponta precisa, uma tampa estável e um acabamento coerente com o restante da linha de olhos.",
    answer: "A EHON Packaging fabrica embalagens de delineador sob medida para formato líquido e lápis. O projeto especifica frasco ou mecanismo, tampa, ponta e decoração. A fábrica de Shantou molda, acaba, monta e inspeciona para marcas de exportação.",
    imageAlt: "Embalagem de tom escuro para linhas de delineador",
    highlights: [
      { title: "Delineador líquido", text: "Frasco, tampa e ponta de feltro ou escova especificados como um conjunto." },
      { title: "Sistemas de lápis", text: "Mecanismo e carcaça para lápis de olhos retráteis." },
      { title: "Coerência de linha", text: "Cor e acabamentos metalizados ou foscos alinhados com a máscara." },
    ],
    specs: [
      { label: "Formatos", value: "Frasco líquido, lápis twist" },
      { label: "Ajuste crítico", value: "Ponta, tampa, vedação" },
      { label: "Personalização", value: "Forma, cor, logo, acabamento" },
      { label: "Próximo passo", value: "Amostra antes de decorar em série" },
    ],
    body: [
      {
        heading: "Precisão antes da decoração",
        paragraphs: [
          "A embalagem de delineador falha quando a ponta, o raspador ou o mecanismo são escolhidos depois da arte. A EHON pede primeiro o tipo de fórmula, o traço prometido e o formato, e depois propõe um conjunto que realmente possa ser decorado.",
          "Uma cápsula de olhos completa pode emparelhar o delineador com tubos de máscara e estojos de sombra da mesma família de acabamentos.",
        ],
      },
    ],
    faqs: [
      {
        question: "Vocês fabricam frascos de delineador líquido e também lápis?",
        answer: "Sim. Indique qual formato a fórmula pede. O líquido se concentra em frasco, tampa e ponta; o lápis, no mecanismo e na carcaça.",
      },
      {
        question: "O delineador pode igualar a cor de uma máscara existente?",
        answer: "Sim. Compartilhe uma cor de referência. Spray, masterbatch e decoração se aproximam tanto quanto a resina e o acabamento permitem, e são confirmados em amostra.",
      },
    ],
    related: [
      { label: "Embalagens para máscara", text: "Tubos combinados para a linha de olhos." },
      { label: "Embalagens para sombra", text: "Paletas e estojos individuais." },
      quote,
    ],
  },
  "lip-gloss-packaging": {
    navLabel: "Embalagens para gloss labial",
    title: "Fabricante de tubos de gloss labial sob medida",
    description: "Tubos de gloss labial da EHON: transparentes, foscos e decorados, com aplicador de esponja ou sob medida, tampas e acabamentos.",
    h1: "Tubos de gloss labial que mostram a cor e resistem ao acabamento.",
    eyebrow: "Embalagens para gloss labial",
    lead: "Tubos de gloss transparentes, foscos ou totalmente decorados, especificados com o aplicador e a tampa que sua fórmula realmente precisa.",
    answer: "A EHON Packaging fabrica tubos de gloss transparentes, foscos e decorados. A marca escolhe capacidade, aplicador, tampa e acabamento. A amostra confirma transparência, aderência da decoração e ajuste do aplicador antes da produção em Shantou.",
    imageAlt: "Tubos de gloss labial",
    highlights: [
      { title: "Visibilidade", text: "Opções transparentes e foscas quando o tom faz parte da história na gôndola." },
      { title: "Aplicador", text: "Hastes tipo doe-foot e afins, ajustadas à viscosidade." },
      { title: "Decoração", text: "Impressão, estampagem e spray que ainda deixam ler a fórmula." },
    ],
    specs: [
      { label: "Aspectos", value: "Transparente, fosco, opaco, decorado" },
      { label: "Componentes", value: "Frasco, tampa, haste, raspador" },
      { label: "Uso", value: "Gloss labial, óleo, batom líquido" },
      { label: "Via", value: "Molde de plataforma ou ferramentaria nova" },
    ],
    body: [
      {
        heading: "O material e o acabamento precisam coincidir",
        paragraphs: [
          "Um tubo transparente só serve se a resina continuar clara depois do spray ou da impressão escolhidos. A EHON seleciona material e via de decoração juntos, incluindo opções com PET reciclado em programas selecionados.",
          "Compartilhe o peso de enchimento, a preferência de aplicador e se a embalagem deve combinar com um batom ou um pó compacto da mesma coleção.",
        ],
      },
    ],
    faqs: [
      {
        question: "Os tubos de gloss labial podem ser feitos em material reciclado?",
        answer: "Programas selecionados podem usar PET reciclado ou PCR. A disponibilidade depende da transparência, da decoração e do desempenho que a fórmula pede. A EHON confirma isso no orçamento.",
      },
      {
        question: "Qual a diferença entre um tubo de estoque e um sob medida?",
        answer: "Uma plataforma de estoque muda cor, impressão e às vezes o aplicador. Um tubo sob medida muda a forma e precisa de ferramentaria. Ambas as vias são orçadas conforme quantidade e calendário.",
      },
    ],
    related: [
      { label: "Embalagens para batom", text: "Estojos para a mesma história de lábios." },
      { label: "Materiais", text: "Resinas, transparência e opções PCR." },
      quote,
    ],
  },
  "eyeshadow-packaging": {
    navLabel: "Embalagens para sombra",
    title: "Fabricante de embalagens para sombra",
    description: "Estojos e paletas de sombra sob medida da EHON, com godets, espelho, fechamentos e acabamentos decorativos para maquiagem.",
    h1: "Estojos e paletas de sombra com um fechamento que se sente acabado.",
    eyebrow: "Embalagens para sombra",
    lead: "Estojos de um único godet e arquiteturas de paleta para cor prensada, com espelho, insertos e o acabamento que a campanha pede.",
    answer: "A EHON Packaging fabrica embalagens de sombra sob medida, do estojo individual a construções tipo paleta. A marca especifica distribuição de godets, espelho, fechamento e decoração. Moldagem, acabamento e montagem são feitos na fábrica de Shantou.",
    imageAlt: "Embalagem de sombra",
    highlights: [
      { title: "Distribuição", text: "Um godet, duo ou vários, planejados em torno da fórmula." },
      { title: "Fechamento", text: "Dobradiça, ímã ou clique especificados conforme o peso do estojo." },
      { title: "Interior", text: "Espelho e insertos que deixam espaço para o nome do tom." },
    ],
    specs: [
      { label: "Formatos", value: "Individual, duo, multipan" },
      { label: "Interior", value: "Godets, espelho, inserto" },
      { label: "Exterior", value: "Spray, estampagem, impressão, metalização" },
      { label: "Relacionado", value: "Pós compactos de rosto e pó solto" },
    ],
    body: [
      {
        heading: "Construir o estojo em torno dos godets",
        paragraphs: [
          "A embalagem de sombra deve começar pelo tamanho do godet e o número de tons, e depois a dobradiça e a decoração. A EHON segue essa ordem para que um acabamento metálico pesado não dispute com o fechamento e o espelho continue cabendo.",
          "Os projetos de pó prensado e cor em creme podem compartilhar família de estojo com os produtos de rosto quando a marca quer a mesma linguagem de objeto.",
        ],
      },
    ],
    faqs: [
      {
        question: "Vocês podem igualar um estojo de sombra com um de pó compacto?",
        answer: "Sim. Envie ambos os produtos em um mesmo brief para desenvolver medidas, cor e acabamento como um conjunto, e não como dois moldes sem relação.",
      },
      {
        question: "O espelho e os godets estão incluídos?",
        answer: "Podem estar. Indique o tamanho do godet, se precisa de espelho e se há aplicador, para que o orçamento cubra a montagem completa.",
      },
    ],
    related: [
      { label: "Pós compactos", text: "Estojos de rosto prensado." },
      { label: "Design sob medida", text: "Direção de forma e componentes." },
      quote,
    ],
  },
  "powder-compacts": {
    navLabel: "Pós compactos",
    title: "Fabricante de pós compactos sob medida",
    description: "A EHON fabrica pós compactos sob medida para produtos de rosto prensados, com godet, espelho, fechamento e acabamentos decorativos.",
    h1: "Pós compactos para cor prensada e complexion.",
    eyebrow: "Pós compactos",
    lead: "Sistemas compactos para blush, bronzer, iluminador e pó prensado, de modo que godet, espelho e tampa fechem como um só produto.",
    answer: "A EHON Packaging fabrica pós compactos sob medida em Shantou para cosmética de rosto prensada. As opções incluem tamanho de godet, espelho, dobradiça ou fechamento magnético, e acabamento de superfície. Há plataformas OEM e ferramentaria nova.",
    imageAlt: "Pó compacto de maquiagem",
    highlights: [
      { title: "Sistemas prensados", text: "Godet e estojo dimensionados para o enchimento, não o contrário." },
      { title: "Experiência da tampa", text: "Espelho, botão e fechamento ajustados para abrir uma e outra vez." },
      { title: "Superfície de marca", text: "Tampas foscas, metálicas, estampadas ou impressas." },
    ],
    specs: [
      { label: "Uso", value: "Pó prensado, blush, bronzer" },
      { label: "Interior", value: "Godet, espelho, espaço para aplicador" },
      { label: "Fechamento", value: "Clique, dobradiça, magnético" },
      { label: "Alcance da fábrica", value: "Moldagem, decoração, montagem, QC" },
    ],
    body: [
      {
        heading: "Um pó compacto é um pequeno projeto de montagem",
        paragraphs: [
          "O gráfico da tampa é o que quem compra vê. A dobradiça, o pino e o godet são o que aguenta um ano de aberturas. A EHON orça essas peças funcionais junto com a decoração, para que a amostra aprovada seja a construção que será reordenada.",
          "O pó solto é outra embalagem. Se a fórmula não for prensada, use a página de pó solto e reserve o pó compacto para as referências prensadas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre um pó compacto e a embalagem de pó solto?",
        answer: "O pó compacto guarda um godet prensado atrás de tampa e espelho. O pó solto usa um pote com peneira ou um fechamento semelhante. A EHON fabrica ambos e convém briefá-los separadamente.",
      },
      {
        question: "A tampa pode levar o logo em estampagem a quente?",
        answer: "Sim, quando a resina e a base aceitam o foil. Compartilhe o arquivo do logo e a cor da tampa para que a EHON recomende foil, impressão ou gravação.",
      },
    ],
    related: [
      { label: "Pó solto", text: "Embalagens com peneira para pó não prensado." },
      { label: "Embalagens para sombra", text: "Estojos de cor da mesma família." },
      quote,
    ],
  },
  "loose-powder-packaging": {
    navLabel: "Pó solto",
    title: "Fabricante de embalagens para pó solto",
    description: "Potes e embalagens com peneira para pó solto, da EHON, com tampas, sifters e acabamentos decorativos.",
    h1: "Embalagem de pó solto com uma peneira que dosifica de verdade.",
    eyebrow: "Pó solto",
    lead: "Potes, peneiras e sobretampas para pó solto de rosto, especificados por peso de enchimento, dose e aspecto da tampa.",
    answer: "A EHON Packaging fabrica embalagens de pó solto, incluindo potes com peneira e sobretampa decorada. A marca especifica capacidade, tipo de peneira, cor e acabamento. A planta de Shantou molda, decora, monta e inspeciona antes de exportar.",
    imageAlt: "Embalagem de pó solto",
    highlights: [
      { title: "Controle da peneira", text: "Malha e padrão de furos escolhidos conforme o tamanho da partícula." },
      { title: "Vedação", text: "Vedação interna e torque da tampa pensados para o transporte." },
      { title: "Presença na gôndola", text: "Acabamentos de tampa e pote alinhados com os pós compactos da linha." },
    ],
    specs: [
      { label: "Formato", value: "Pote, peneira, sobretampa" },
      { label: "Peça crítica", value: "Malha da peneira e vedação" },
      { label: "Decoração", value: "Spray, impressão, estampagem, metalização" },
      { label: "Combina com", value: "Pós compactos da mesma história" },
    ],
    body: [
      {
        heading: "Primeiro a dose, depois a decoração",
        paragraphs: [
          "A embalagem de pó solto é julgada pela limpeza da dosagem. A EHON pede o tipo de pó e o enchimento-alvo antes de fechar a peneira, e depois aplica a cor e o logo do restante da linha de rosto.",
        ],
      },
    ],
    faqs: [
      {
        question: "A peneira pode ser personalizada?",
        answer: "A malha e a geometria podem ser selecionadas ou usinadas conforme o pó. Descreva a dose que busca e a EHON proporá uma peneira de partida para a amostra.",
      },
      {
        question: "Um pote de pó solto é a mesma coisa que um pote de creme?",
        answer: "Não. O pote de creme prioriza o liner e uma boca larga. O de pó solto prioriza a peneira e uma dose mais contida. A EHON os fabrica como conjuntos distintos.",
      },
    ],
    related: [
      { label: "Pós compactos", text: "Formatos prensados da mesma gama." },
      { label: "Potes e frascos", text: "Embalagens de skincare e híbridos." },
      quote,
    ],
  },
  "cream-jars-lotion-bottles": {
    navLabel: "Potes e frascos",
    title: "Fabricante de potes de creme e frascos de loção",
    description: "Potes de creme, frascos de loção e embalagem de skincare sob medida, da EHON, com tampas, liners, bombas dosadoras e acabamentos.",
    h1: "Potes de creme e frascos de loção para skincare e beleza híbrida.",
    eyebrow: "Potes e frascos",
    lead: "Potes, frascos, tampas e dosadores para cremes e loções, com acabamentos que podem conviver com a maquiagem.",
    answer: "A EHON Packaging fabrica potes de creme e frascos de loção sob medida para linhas de skincare e beleza híbrida. Capacidade, gargalo, liner, tampa ou bomba dosadora, e decoração são especificados juntos. PCR e PET reciclado podem ser analisados em programas selecionados.",
    imageAlt: "Potes de creme e frascos de loção",
    highlights: [
      { title: "Potes", text: "Aspecto de parede simples ou dupla, liners e tampa rosca ou sobretampa." },
      { title: "Frascos", text: "Frascos de loção com tampa ou gargalo pronto para bomba dosadora." },
      { title: "Materiais", text: "Resinas convencionais mais vias selecionadas de PCR e PET reciclado." },
    ],
    specs: [
      { label: "Formatos", value: "Pote, frasco, tampa, gargalo para bomba" },
      { label: "Detalhe de skincare", value: "Liner, vedação, dose" },
      { label: "Materiais", value: "Resinas padrão, PCR e PET reciclado sob pedido" },
      { label: "Decoração", value: "Impressão, estampagem, spray, revestimento" },
    ],
    body: [
      {
        heading: "A embalagem de skincare também precisa pertencer ao mundo da marca",
        paragraphs: [
          "Um pote de creme costuma ser o herói de uma linha de cuidado e, ao mesmo tempo, um objeto de apoio ao lado da maquiagem. A EHON desenvolve primeiro capacidade e vedação, e depois a cor, a transparência e o acabamento que permitem que o pote conviva com batom, gloss labial ou pós compactos.",
          "Se materiais de menor impacto forem um requisito, diga no brief. PCR e PET reciclado estão em programas selecionados e não são automáticos para cada resina ou acabamento.",
        ],
      },
    ],
    faqs: [
      {
        question: "Potes e frascos podem compartilhar um sistema de decoração?",
        answer: "Sim. A EHON pode alinhar spray, impressão e estampagem entre um pote e um frasco, dentro dos limites de cada resina e forma. Aprove ambos em amostra.",
      },
      {
        question: "Vocês fornecem bombas dosadoras e tampas?",
        answer: "As tampas e os componentes de dosagem compatíveis podem ser incluídos. Descreva a dose e a viscosidade para orçar gargalo e bomba dosadora como parte da embalagem.",
      },
    ],
    related: [
      { label: "Embalagem sustentável", text: "Opções de PCR e PET reciclado." },
      { label: "Acessórios", text: "Bombas dosadoras, tampas e acoplamentos." },
      quote,
    ],
  },
  accessories: {
    navLabel: "Acessórios",
    title: "Acessórios de embalagem cosmética",
    description: "Acessórios da EHON: bombas dosadoras, tampas, aplicadores, espátulas e componentes que completam uma embalagem sob medida.",
    h1: "Acessórios que completam a embalagem.",
    eyebrow: "Acessórios",
    lead: "Bombas dosadoras, tampas, hastes, espátulas e peças pequenas, ajustadas à embalagem principal e não buscadas em cima da hora.",
    answer: "A EHON Packaging fornece acessórios como bombas dosadoras, tampas, hastes aplicadoras e espátulas. Os componentes são escolhidos para encaixar no pote, frasco ou tubo, e são acabados e montados com a embalagem principal em Shantou.",
    imageAlt: "Bomba dosadora e acessórios de embalagem cosmética",
    highlights: [
      { title: "Dosagem", text: "Bombas dosadoras e acoplamentos para loções e formatos líquidos." },
      { title: "Aplicação", text: "Hastes, espátulas e tampas para cor e pele." },
      { title: "Correspondência", text: "Cor e acabamento alinhados com o componente principal." },
    ],
    specs: [
      { label: "Exemplos", value: "Bombas dosadoras, tampas, hastes, espátulas" },
      { label: "Regra", value: "Ajuste confirmado contra a embalagem principal" },
      { label: "Acabamento", value: "Igualação de cor e decoração sob pedido" },
      { label: "Fornecimento", value: "Junto com o pedido da embalagem principal" },
    ],
    body: [
      {
        heading: "Especifique os acessórios na mesma solicitação",
        paragraphs: [
          "Um gargalo de bomba que está quase certo vai vazar ou ficar frouxo. A EHON prefere orçar os acessórios com o pote, o frasco ou o tubo, para aprovar rosca, cor e decoração em um mesmo jogo de amostras.",
        ],
      },
    ],
    faqs: [
      {
        question: "Posso pedir só o acessório?",
        answer: "Às vezes, se o componente já existe e encaixa na sua embalagem. Envie o desenho ou uma amostra da embalagem principal para que a EHON revise a interface.",
      },
      {
        question: "A cor do acessório vai coincidir com o frasco?",
        answer: "Essa é a meta. Resinas distintas tomam a cor de forma diferente, então a EHON confirma a coincidência em uma amostra física.",
      },
    ],
    related: [
      { label: "Potes e frascos", text: "Embalagens principais que essas peças completam." },
      { label: "Embalagens para máscara", text: "Hastes e tampas de máscara." },
      quote,
    ],
  },
  "oem-odm": {
    navLabel: "OEM / ODM",
    title: "OEM e ODM de embalagem cosmética",
    description: "A EHON oferece embalagem cosmética OEM e ODM desde Shantou: plataformas existentes, ferramentaria sob medida, decoração, montagem e inspeção de exportação desde 1992.",
    h1: "Embalagem cosmética OEM e ODM, do brief ao reordenamento.",
    eyebrow: "OEM / ODM",
    lead: "Use uma plataforma EHON quando a velocidade importa, ou abra ferramentaria nova quando a forma é a marca.",
    answer: "A EHON Packaging oferece embalagem cosmética OEM e ODM desde sua fábrica de Shantou. O OEM adapta moldes existentes com cor, logo e acabamento. O ODM e o desenvolvimento sob medida somam design e ferramentaria. Ambas as vias incluem amostra, produção, decoração, montagem e controle de qualidade.",
    imageAlt: "Série transparente de embalagem cosmética",
    highlights: [
      { title: "Plataforma OEM", text: "Partir de um molde comprovado. Mudar cor, decoração e peças selecionadas." },
      { title: "ODM / sob medida", text: "Desenvolver forma, conjunto de componentes e ferramentaria para uma embalagem própria." },
      { title: "Uma só fábrica", text: "Apoio de design, moldagem, decoração, montagem e inspeção em Shantou." },
    ],
    specs: [
      { label: "OEM", value: "Molde existente, acabamento sob medida" },
      { label: "ODM", value: "Design mais fabricação" },
      { label: "Ferramentaria nova", value: "É orçada quando a forma é nova" },
      { label: "Entrega", value: "Embalagens decoradas, montadas e inspecionadas" },
    ],
    body: [
      {
        heading: "Como escolher a via",
        paragraphs: [
          "Escolha OEM quando a silhueta pode sair da biblioteca de mais de 1.000 designs da EHON e a marca vive na cor, no logo e no acabamento. Escolha ODM ou full custom quando a forma exterior, um mecanismo ou um componente próprio faz parte da proposta.",
          "Em ambos os casos o orçamento precisa de tipo de produto, quantidade estimada, mercado, calendário, preferências de material e direção de arte. A amostra confirma o que um render não pode.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre OEM e ODM na EHON?",
        answer: "OEM significa fabricar conforme sua especificação, muitas vezes sobre uma plataforma existente. ODM soma o design e o desenvolvimento da EHON antes de fabricar. Uma forma exterior nova costuma exigir ferramentaria, seja qual for o rótulo.",
      },
      {
        question: "Um projeto pode misturar peças de estoque e peças sob medida?",
        answer: "Sim. Uma tampa sob medida sobre um pote existente, ou uma haste de estoque em um frasco novo, é um brief habitual. A EHON revisa a interface na amostra.",
      },
    ],
    related: [
      { label: "Design sob medida", text: "Direção de forma e componentes." },
      { label: "P&D / ferramentaria", text: "Como os moldes novos são desenvolvidos." },
      quoteBrief,
    ],
  },
  "custom-design": {
    navLabel: "Design sob medida",
    title: "Design de embalagem cosmética sob medida",
    description: "O design da EHON cobre forma, componentes, cor e função para batom, gloss labial, máscara, pós compactos, potes e frascos.",
    h1: "Um design sob medida que se pode moldar, decorar e reordenar.",
    eyebrow: "Design sob medida",
    lead: "Forma, componente, cor e função são projetados contra um brief real: fórmula, mercado, faixa de custo e calendário de lançamento.",
    answer: "A EHON Packaging projeta embalagem cosmética para produção, não só para a apresentação. A etapa de design define forma, componentes, cor e função, e depois passa à seleção de material e à amostra na fábrica de Shantou.",
    imageAlt: "Série rosa de embalagem cosmética",
    highlights: [
      { title: "Forma", text: "Uma forma exterior que desmolda, ejeta e pode ser decorada." },
      { title: "Componentes", text: "Tampas, cubas, hastes, peneiras e dobradiças como um sistema." },
      { title: "História de cor", text: "Uma família de acabamentos que pode se estender a toda a coleção." },
    ],
    body: [
      {
        heading: "O que o brief de design deve conter",
        paragraphs: [
          "Tipo de produto, mercado-alvo, enchimento ou diâmetro de barra, uma referência de que gosta, uma que quer evitar, ideias de decoração e a faixa de quantidade. Esses dados mantêm o primeiro design dentro do que a fábrica pode amostrar.",
          "As coleções em destaque da EHON, incluindo as séries transparente, de cor e de escova, mostram como uma mesma linguagem de design cobre várias categorias.",
        ],
      },
    ],
    faqs: [
      {
        question: "É preciso a arte final antes de começar o design?",
        answer: "Não. Um arquivo de logo ajuda, mas o design pode partir do produto e da sensação buscada. Os dielines e os arquivos de foil ou impressão são necessários antes das amostras decoradas.",
      },
      {
        question: "O design pode cobrir uma linha completa, não um único SKU?",
        answer: "Sim. Os sets completos são uma oferta central da EHON. Apresente toda a linha no brief para que proporções e acabamentos continuem relacionados.",
      },
    ],
    related: [
      { label: "OEM / ODM", text: "Escolher plataforma ou ferramentaria nova." },
      { label: "Embalagens para batom", text: "Ver uma categoria central." },
      quoteBrief,
    ],
  },
  "decoration-finishing": {
    navLabel: "Decoração e acabamentos",
    title: "Decoração e acabamentos de embalagem cosmética",
    description: "Estampagem a quente, serigrafia, metalização UV, fosco, verniz UV, degradê, transferência e gravação a laser para a embalagem da EHON.",
    h1: "Decoração e acabamentos que tornam a embalagem inconfundivelmente sua.",
    eyebrow: "Decoração e acabamentos",
    lead: "Oito vias de acabamento, escolhidas conforme a resina e a arte, não aplicadas como um menu genérico.",
    answer: "A EHON Packaging decora na planta com estampagem a quente, serigrafia, metalização UV, acabamento fosco, verniz UV, efeitos degradê e iridescentes, transferência por calor ou água, e gravação a laser. O processo se ajusta ao material e à arte do logo, e é aprovado em amostra.",
    imageAlt: "Série de embalagem cosmética decorada",
    highlights: [
      { title: "Estampagem a quente", text: "Logos e filetes em foil sobre bases compatíveis." },
      { title: "Serigrafia", text: "Impressão nítida para texto, ícones e arte de poucas cores." },
      { title: "Metalização UV", text: "Aspecto metálico sem assumir que toda resina o aceita." },
      { title: "Fosco e verniz UV", text: "Camadas soft-touch ou brilho sobre a cor." },
      { title: "Degradê / iridescente", text: "Efeitos de mudança para coleções de moda." },
      { title: "Transferência e laser", text: "Transferência por calor ou água, e gravação a laser para marcas permanentes." },
    ],
    specs: [
      { label: "F01", value: "Estampagem a quente" },
      { label: "F02", value: "Serigrafia" },
      { label: "F03", value: "Metalização UV" },
      { label: "F04", value: "Acabamento fosco" },
      { label: "F05", value: "Verniz UV" },
      { label: "F06", value: "Degradê / iridescente" },
      { label: "F07", value: "Transferência por calor ou água" },
      { label: "F08", value: "Gravação a laser" },
    ],
    body: [
      {
        heading: "O acabamento segue o material",
        paragraphs: [
          "Nem todo efeito corresponde a toda resina. Um tubo de gloss transparente, uma tampa de pó compacto fosca e uma tampa de máscara metalizada são superfícies distintas. A EHON recomenda a via depois de escolher o material e a demonstra em uma amostra decorada antes da série.",
        ],
      },
    ],
    faqs: [
      {
        question: "É possível combinar vários acabamentos em um componente?",
        answer: "Muitas vezes sim: por exemplo spray mais estampagem, ou metalização mais uma janela fosca. Cada processo extra afeta a amostra e o custo, então liste a pilha completa na solicitação.",
      },
      {
        question: "Que acabamento convém para um logo pequeno?",
        answer: "A estampagem a quente e a gravação a laser são habituais para marcas pequenas. A serigrafia serve quando o logo precisa de uma cor de tinta concreta. A EHON revisa a espessura de linha sobre a curva real da peça.",
      },
    ],
    related: [
      { label: "Materiais", text: "Resinas que aceitam esses acabamentos." },
      { label: "Fabricação", text: "Onde a decoração se situa na planta." },
      quoteBrief,
    ],
  },
  materials: {
    navLabel: "Materiais",
    title: "Materiais de embalagem cosmética",
    description: "A EHON seleciona resinas, acabamentos e aplicadores para batom, gloss labial, máscara, pós compactos, potes e frascos, incluindo PCR e PET reciclado em programas selecionados.",
    h1: "Materiais escolhidos para a fórmula, o acabamento e o mercado.",
    eyebrow: "Materiais",
    lead: "Resina, transparência, impacto da decoração e plásticos do aplicador são escolhidos contra o produto, não a partir de uma linha genérica de catálogo.",
    answer: "A EHON Packaging especifica os materiais durante o desenvolvimento em Shantou. A escolha cobre resinas de moldagem, transparência ou cor, compatibilidade com a decoração e componentes do aplicador. PCR e PET reciclado estão disponíveis em programas selecionados quando o brief pede.",
    imageAlt: "Coleção de materiais e cor de embalagem cosmética",
    highlights: [
      { title: "Resinas principais", text: "Escolhidas por transparência, rigidez, vida de dobradiça ou contato químico." },
      { title: "Cor", text: "Masterbatch e spray considerados como parte do plano de material." },
      { title: "Opções de menor impacto", text: "PCR e PET reciclado são analisados onde a embalagem permite." },
    ],
    body: [
      {
        heading: "O que contar à EHON sobre o material",
        paragraphs: [
          "Diga se a embalagem deve ser transparente, se toca uma fórmula rica em solvente, se uma dobradiça será aberta diariamente e se é necessária uma declaração de conteúdo reciclado. Esses quatro pontos estreitam a resina mais rápido do que um nome comercial sozinho.",
          "A decoração não é um tema à parte. Metalização, estampagem e fosqueamento dependem do substrato. Material e acabamento são aprovados juntos.",
        ],
      },
    ],
    faqs: [
      {
        question: "A EHON usa um único plástico?",
        answer: "Não. A resina depende do componente. Uma dobradiça, um frasco transparente, uma tampa metálica e uma haste raramente são o mesmo material. A EHON propõe o conjunto durante o desenvolvimento.",
      },
      {
        question: "Vocês podem recomendar um material se só conhecemos o tipo de fórmula?",
        answer: "Sim. Compartilhe a categoria de fórmula, o tamanho de enchimento e a declaração que a embalagem precisa. A EHON proporá uma especificação de partida para a amostra.",
      },
    ],
    related: [
      { label: "Embalagem sustentável", text: "PCR e PET reciclado com mais detalhe." },
      { label: "Decoração e acabamentos", text: "O que esses materiais podem aceitar." },
      quoteBrief,
    ],
  },
  "sustainable-packaging": {
    navLabel: "Embalagem sustentável",
    title: "Embalagem cosmética sustentável",
    description: "As opções sustentáveis da EHON incluem materiais PCR e PET reciclado em programas selecionados, com consulta de design para marcas que cuidam dos recursos.",
    h1: "Embalagem de beleza com melhores opções de material.",
    eyebrow: "Embalagem sustentável",
    lead: "PCR e PET reciclado já estão em programas selecionados da EHON, para marcas que querem uma embalagem mais consciente sem adivinhar o desempenho.",
    answer: "A EHON Packaging oferece materiais PCR e PET reciclado dentro de programas selecionados. As opções são específicas do projeto: transparência, decoração e contato com a fórmula decidem se um material reciclado é adequado. A EHON orienta sobre material e acabamento durante o brief.",
    imageAlt: "Coleção de embalagem usada em programas de material",
    highlights: [
      { title: "Materiais PCR", text: "Opções de reciclado pós-consumo onde o componente permite." },
      { title: "PET reciclado", text: "É considerado para frascos e embalagens transparentes selecionados." },
      { title: "Consulta", text: "Material e acabamento escolhidos contra o projeto real, não como uma declaração genérica." },
    ],
    body: [
      {
        heading: "O que a EHON vai afirmar, e o que não",
        paragraphs: [
          "Um material reciclado é uma especificação, não um slogan. A EHON confirma se o PCR ou o PET reciclado podem cumprir transparência, cor, decoração e função antes de escrevê-lo no orçamento. Se não puder, a equipe diz e propõe a alternativa mais próxima e pronta para produzir.",
          "A consulta de design cobre a seleção de material e acabamento conforme o projeto, incluindo como uma embalagem mais consciente continua combinando com o restante de uma linha de cor ou de skincare.",
        ],
      },
    ],
    faqs: [
      {
        question: "Todas as embalagens da EHON estão disponíveis em PCR?",
        answer: "Não. PCR e PET reciclado estão em programas selecionados. A resposta depende do componente, do acabamento e do desempenho exigido.",
      },
      {
        question: "O material reciclado muda a cor ou a transparência?",
        answer: "Pode mudar. Por isso a EHON mostra o material proposto com a decoração prevista antes de você aprovar a produção.",
      },
    ],
    related: [
      { label: "Materiais", text: "Como as resinas são selecionadas." },
      { label: "Potes e frascos", text: "Um lugar habitual para analisar conteúdo reciclado." },
      quoteBrief,
    ],
  },
  manufacturing: {
    navLabel: "Fabricação",
    title: "Fabricação de embalagem cosmética",
    description: "A fábrica da EHON em Shantou cobre injeção, sopro, montagem automática, impressão, decoração e manuseio robótico.",
    h1: "Onde a ideia vira embalagem pronta para produzir.",
    eyebrow: "Fabricação",
    lead: "Uma planta em Shantou, Guangdong, com moldagem, montagem, impressão e decoração dentro de uma mesma operação de embalagem cosmética.",
    answer: "A EHON Packaging fabrica embalagem cosmética em Shantou, Guangdong, em um terreno de mais de 40.000 metros quadrados. As capacidades incluem moldagem por injeção, sopro, montagem automática, impressão, decoração e manuseio robótico. A empresa opera desde 1992.",
    imageAlt: "Fábrica da EHON Packaging em Shantou, Guangdong",
    highlights: [
      { title: "Injeção", text: "Tampas, estojos, pós compactos e componentes de precisão." },
      { title: "Sopro", text: "Formatos de frasco para gloss labial, delineador e loção." },
      { title: "Montagem automática", text: "Embalagens de várias peças construídas como um sistema." },
      { title: "Impressão e decoração", text: "Acabamento na planta depois da moldagem." },
      { title: "Manuseio robótico", text: "Movimento repetível ao longo da produção." },
    ],
    body: [
      {
        heading: "Um só local para etapas que o comprador costuma separar",
        paragraphs: [
          "As marcas perdem tempo quando a moldagem, o spray, a estampagem e a montagem estão em oficinas distintas. A EHON mantém essas etapas no seu alcance de Shantou, de modo que a amostra e o pedido de série sigam a mesma rota.",
          "O endereço é EHON Industrial Zone, No.2 ZhuJinYiHeng Road, distrito de LongHu, Shantou, Guangdong, China.",
        ],
      },
    ],
    faqs: [
      {
        question: "Onde fica a fábrica da EHON?",
        answer: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, ZhuJin Industrial Park, distrito de LongHu, Shantou, Guangdong, China.",
      },
      {
        question: "Quais processos estão na casa?",
        answer: "Moldagem por injeção, sopro, montagem automática, impressão, decoração e manuseio robótico fazem parte do alcance de fabricação publicado.",
      },
    ],
    related: [
      { label: "Fábrica", text: "Ver o local e o contexto de visita." },
      { label: "Controle de qualidade", text: "Como a saída é inspecionada." },
      quoteBrief,
    ],
  },
  "quality-control": {
    navLabel: "Controle de qualidade",
    title: "Controle de qualidade de embalagem cosmética",
    description: "O controle de qualidade da EHON se apoia nos sistemas ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018.",
    h1: "Sistemas certificados. Fabricação documentada.",
    eyebrow: "Controle de qualidade",
    lead: "A inspeção é a última etapa do fluxo, e os certificados existem para que o comprador verifique o sistema por trás.",
    answer: "A EHON Packaging integra o controle de qualidade na produção de embalagem em Shantou. A empresa conta com ISO 9001:2015 de gestão da qualidade, ISO 14001:2015 de gestão ambiental e ISO 45001:2018 de segurança e saúde no trabalho. A inspeção ocorre antes da embalagem de exportação.",
    imageAlt: "Certificado ISO 9001",
    highlights: [
      { title: "ISO 9001:2015", text: "Sistema de gestão da qualidade." },
      { title: "ISO 14001:2015", text: "Sistema de gestão ambiental." },
      { title: "ISO 45001:2018", text: "Segurança e saúde no trabalho." },
    ],
    body: [
      {
        heading: "O que o QC significa em um pedido de embalagem",
        paragraphs: [
          "Em uma embalagem decorada, a inspeção cobre o que o brief marcou como crítico: ajuste de montagem, cor, posição do logo, defeitos visíveis de superfície e acondicionamento. Os certificados descrevem o sistema; a amostra e o registro de série descrevem o seu pedido.",
          "As imagens originais estão na página de certificados para que o comprador leia o alcance, não só confie em um selo.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quais certificados ISO a EHON tem?",
        answer: "ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018. As cópias são exibidas na página de certificados.",
      },
      {
        question: "Os compradores podem revisar documentos de qualidade?",
        answer: "Sim. Solicite os documentos de que precisa com seu RFQ ou com o plano de visita, e a EHON compartilhará os registros pertinentes.",
      },
    ],
    related: [
      { label: "Certificados", text: "Ver as imagens dos certificados." },
      { label: "Fabricação", text: "As etapas de produção que o QC acompanha." },
      quoteBrief,
    ],
  },
  "rd-tooling": {
    navLabel: "P&D / ferramentaria",
    title: "P&D e ferramentaria de embalagem cosmética",
    description: "P&D e ferramentaria da EHON: moldes sob medida, amostras e 14 patentes em inovação de embalagem.",
    h1: "P&D e ferramentaria para embalagens que precisam ser fabricadas duas vezes.",
    eyebrow: "P&D / ferramentaria",
    lead: "As formas novas viram moldes. As plataformas existentes viram projetos mais rápidos. A amostra é onde ambas as vias se demonstram.",
    answer: "A EHON Packaging desenvolve embalagem cosmética mediante design, ferramentaria e amostragem em Shantou. Os moldes sob medida são abertos quando a forma é nova. A empresa conta com 14 patentes em inovação de embalagem e 8 marcas registradas.",
    imageAlt: "Equipamentos de produção da EHON",
    highlights: [
      { title: "Ferramentaria", text: "Moldes novos quando uma plataforma existente não consegue carregar a forma." },
      { title: "Amostragem", text: "Protótipo para confirmar o detalhe visual e o funcional." },
      { title: "Patentes", text: "14 patentes em inovação de embalagem, mais 8 marcas." },
    ],
    body: [
      {
        heading: "A amostra é parte do desenvolvimento, não uma cortesia",
        paragraphs: [
          "A decisão de ferramentaria deve ser tomada quando o conjunto de componentes está claro: quais peças são novas, quais podem ser compartilhadas e que decoração o aço deve permitir. A EHON amostra depois para confirmar ajuste, cor e acabamento antes de produzir.",
          "Os registros de patentes e marcas estão resumidos na página de patentes, para compradores que precisam de evidência de inovação além de um moodboard.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quando é preciso um molde novo?",
        answer: "Quando a forma exterior ou um mecanismo crítico não existe nas plataformas atuais da EHON. A cor e a maior parte da decoração não exigem um molde novo.",
      },
      {
        question: "Quantas patentes a EHON tem?",
        answer: "A EHON publica 14 patentes em inovação de embalagem e 8 marcas registradas.",
      },
    ],
    related: [
      { label: "Patentes e inovação", text: "O registro de inovação." },
      { label: "OEM / ODM", text: "Plataforma frente a ferramentaria sob medida." },
      quoteBrief,
    ],
  },
  "our-story": {
    navLabel: "Nossa história",
    title: "Nossa história",
    description: "A Guangdong EHON Technology Co., Ltd. projeta e fabrica embalagem cosmética em Shantou desde 1992 para marcas de beleza de todo o mundo.",
    h1: "Embalagem pensada para fazer parte da sua marca.",
    eyebrow: "Nossa história",
    lead: "A Guangdong EHON Technology Co., Ltd. integra design, P&D, fabricação e venda de embalagem cosmética desde 1992.",
    answer: "A EHON Packaging é a marca da Guangdong EHON Technology Co., Ltd., fabricante de embalagem cosmética fundada em 1992 em Shantou, Guangdong. A empresa projeta, desenvolve, fabrica e vende embalagens para marcas de beleza, do batom e da máscara para cílios a potes, frascos e pós compactos.",
    imageAlt: "Showroom da EHON",
    highlights: [
      { title: "1992", text: "Fundada em Shantou." },
      { title: "40.000 m²+", text: "Planta de fabricação." },
      { title: "1.000+", text: "Designs de embalagem." },
      { title: "Global", text: "Exportação para os principais mercados de beleza." },
    ],
    body: [
      {
        heading: "Um fabricante com um nome de marca que o comprador pode buscar",
        paragraphs: [
          "EHON é a marca de embalagem. Guangdong EHON Technology Co., Ltd. é o fabricante legal. Ambos os nomes devem figurar nos contratos e neste site para que compras, buscadores e respostas de IA cheguem à mesma empresa.",
          "O trabalho se manteve específico: embalagem cosmética, não plásticos em geral. Por isso o catálogo vai de mecanismos de batom a pós compactos, tubos de gloss labial e potes de skincare, com a decoração na mesma operação.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual é a razão social?",
        answer: "Guangdong EHON Technology Co., Ltd. A marca com a qual se trabalha com clientes é EHON Packaging.",
      },
      {
        question: "Quando a EHON foi fundada?",
        answer: "Em 1992, em Shantou, Guangdong, China.",
      },
    ],
    related: [
      { label: "Fábrica", text: "Onde o trabalho é feito." },
      { label: "Certificados", text: "Sistemas ISO que se podem verificar." },
      quoteBrief,
    ],
  },
  factory: {
    navLabel: "Fábrica",
    title: "Fábrica da EHON em Shantou",
    description: "Visite a fábrica de embalagem cosmética da EHON no distrito de LongHu, Shantou: moldagem, montagem, impressão, showroom e salas de reunião.",
    h1: "A fábrica de Shantou por trás das amostras.",
    eyebrow: "Fábrica",
    lead: "Mais de 40.000 metros quadrados no distrito de LongHu, com produção, showroom e salas onde o brief se decide de verdade.",
    answer: "A fábrica da EHON fica em EHON Industrial Zone, No.2 ZhuJinYiHeng Road, distrito de LongHu, Shantou, Guangdong, China. O terreno supera os 40.000 metros quadrados e inclui injeção, sopro, montagem, impressão, decoração, showroom e espaço de reuniões.",
    imageAlt: "Edifício da fábrica EHON",
    highlights: [
      { title: "Produção", text: "Equipamentos de moldagem, montagem e decoração." },
      { title: "Showroom", text: "Coleções que se revisam pessoalmente." },
      { title: "Reuniões", text: "Um lugar para fechar o brief com a equipe." },
    ],
    body: [
      {
        heading: "Planeje a visita em torno de um projeto",
        paragraphs: [
          "Uma visita à fábrica rende mais com um brief em rascunho: categorias, quantidades e temporada-alvo. A EHON pode percorrer moldagem, decoração e showroom contra esse brief, em vez de um tour genérico.",
          "Se você não puder viajar, a mesma conversa segue por e-mail, WhatsApp, WeChat ou Line. Solicite um orçamento e anexe referências.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual é o endereço da fábrica?",
        answer: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, distrito de LongHu, Shantou, Guangdong, China. Telefone +86-754-88608623.",
      },
      {
        question: "Compradores internacionais podem visitar?",
        answer: "Sim. Contate a EHON com antecedência, com suas datas e as categorias de embalagem que quer revisar.",
      },
    ],
    related: [
      { label: "Fabricação", text: "Processos no local." },
      { label: "Solicitar orçamento", text: "Agendar uma conversa de projeto." },
      quoteBrief,
    ],
  },
  certificates: {
    navLabel: "Certificados",
    title: "Certificados ISO",
    description: "Veja os certificados ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018 da fábrica de embalagem cosmética da EHON em Shantou.",
    h1: "Certificados que se podem abrir, não só selos.",
    eyebrow: "Certificados",
    lead: "Três certificados de sistema de gestão: qualidade, meio ambiente, e segurança e saúde no trabalho.",
    answer: "A Guangdong EHON Technology Co., Ltd. publica os certificados ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018 de sua operação de embalagem cosmética. As imagens desta página são os documentos que o comprador pode inspecionar.",
    imageAlt: "Certificado ISO 14001",
    highlights: [
      { title: "ISO 9001:2015", text: "Gestão da qualidade." },
      { title: "ISO 14001:2015", text: "Gestão ambiental." },
      { title: "ISO 45001:2018", text: "Segurança e saúde no trabalho." },
    ],
    body: [
      {
        heading: "Como usar esses documentos",
        paragraphs: [
          "Verifique a norma, a razão social e o alcance contra sua ficha de fornecedor. Se seu varejista ou o dono da marca precisar de uma cópia concreta, peça à EHON e a equipe enviará o arquivo que corresponde à imagem publicada aqui.",
        ],
      },
    ],
    faqs: [
      {
        question: "Esses certificados são as publicações vigentes do site?",
        answer: "As imagens exibidas são os documentos que a EHON fornece para ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018. Peça à equipe uma cópia datada se precisar para um portal de fornecedores.",
      },
    ],
    related: [
      { label: "Controle de qualidade", text: "Como o sistema aparece nos pedidos." },
      { label: "Nossa história", text: "A empresa por trás dos certificados." },
      quoteBrief,
    ],
  },
  "patents-innovation": {
    navLabel: "Patentes e inovação",
    title: "Patentes e inovação",
    description: "A EHON conta com 14 patentes em inovação de embalagem cosmética e 8 marcas registradas, com P&D e ferramentaria próprios.",
    h1: "Quatorze patentes. Oito marcas. Uma fábrica que pode usá-las.",
    eyebrow: "Patentes e inovação",
    lead: "Na EHON a inovação se conta em patentes e marcas, e se demonstra quando uma embalagem nova realmente é moldada e montada.",
    answer: "A EHON Packaging conta com 14 patentes em inovação de embalagem e 8 marcas registradas. O desenvolvimento está junto à capacidade de P&D e ferramentaria de Shantou, de modo que uma estrutura nova possa passar da ideia à amostra e à produção.",
    imageAlt: "Sala de reuniões da EHON",
    highlights: [
      { title: "14", text: "Patentes em inovação de embalagem." },
      { title: "8", text: "Marcas registradas." },
      { title: "30+ anos", text: "Experiência de fabricação desde 1992." },
    ],
    body: [
      {
        heading: "Por que os números estão na página inicial",
        paragraphs: [
          "Quem compara fábricas de embalagem precisa separar um comercializador de um desenvolvedor. A EHON publica o número de patentes, o de marcas e o alcance de fabricação juntos, e convida a perguntas técnicas durante a solicitação.",
        ],
      },
    ],
    faqs: [
      {
        question: "Uma patente significa que não posso obter uma embalagem semelhante?",
        answer: "As patentes da EHON protegem invenções da EHON. Seu projeto sob medida é definido para que a embalagem que você aprova seja a que lhe é fornecida. Pergunte à equipe se precisar falar de novidade em um mecanismo concreto.",
      },
    ],
    related: [
      { label: "P&D / ferramentaria", text: "Como os moldes novos são abertos." },
      { label: "Nossa história", text: "Antecedentes da empresa." },
      quoteBrief,
    ],
  },
};
