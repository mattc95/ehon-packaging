import type { PageCopy } from "./types";

const quote = { label: "Solicitar cotización", text: "Indique tipo de producto, cantidad y acabado objetivo." };
const quoteBrief = { label: "Solicitar cotización", text: "Envíe el brief que el contacto comercial va a usar de verdad." };

export const pages: Record<string, PageCopy> = {
  "lipstick-packaging": {
    navLabel: "Envases para labial",
    title: "Fabricante de envases para labial a medida",
    description: "EHON fabrica estuches, carcasas y mecanismos de labial en Shantou. Las opciones OEM y ODM cubren color, logo, acabado y combinación de componentes.",
    h1: "Envases de labial pensados para la marca por fuera y la fórmula por dentro.",
    eyebrow: "Envases para labial",
    lead: "EHON diseña y fabrica estuches de labial, mecanismos internos y carcasas decoradas para marcas que necesitan un envase repetible y listo para exportar.",
    answer: "EHON Packaging produce envases de labial a medida en Shantou, China, incluidos estuches slim, cuadrados y con cierre magnético. La marca define resina, color, logo y acabado, y pasa de la muestra a la producción decorada y ensamblada bajo ISO 9001, ISO 14001 e ISO 45001.",
    imageAlt: "Estuches de labial EHON",
    highlights: [
      { title: "Arquitecturas", text: "Slim, cuadrado, redondo y cierre magnético para líneas de labios." },
      { title: "Ajuste del mecanismo", text: "Diámetro de copa, recorrido y clic se confirman contra la barra, no solo contra el render." },
      { title: "Decoración", text: "Estampado en caliente, spray, metalizado, impresión y ensambles bicolor." },
    ],
    specs: [
      { label: "Formatos habituales", value: "Slim, clásico, cuadrado, magnético" },
      { label: "Personalización", value: "Color, logo, acabado, copa, carcasa" },
      { label: "Modelo de suministro", value: "Plataforma existente o molde nuevo" },
      { label: "Fábrica", value: "Shantou, Guangdong, desde 1992" },
    ],
    body: [
      {
        heading: "Lo que el comprador suele cerrar primero",
        paragraphs: [
          "Un estuche de labial es a la vez un mecanismo y un objeto de marca. El primer brief debe indicar el diámetro de la barra, el tacto deseado, el mercado y si el proyecto puede partir de una plataforma EHON o necesita un molde nuevo.",
          "Color, posición del logo y acabado se especifican juntos para que carcasa, base y copa sigan ensamblando después de decorar. Así se evita aprobar un render que no resiste el estampado, el spray o el metalizado.",
        ],
      },
      {
        heading: "De una historia de labios a un envase de producción",
        paragraphs: [
          "El flujo de EHON va del brief y el diseño a la selección de material, la muestra, el moldeo, la decoración, el ensamble y la inspección de exportación. Hay sets coordinados cuando el labial debe convivir con gloss, máscara o polveras de la misma colección.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿EHON puede personalizar un estuche de labial sin abrir un molde nuevo?",
        answer: "Sí. Muchos proyectos parten de una plataforma existente y cambian color, spray, estampado en caliente, logo y algunos componentes. Una forma totalmente nueva exige herramental, que EHON presupuesta en la cotización.",
      },
      {
        question: "¿Qué debe incluir una solicitud de envase de labial?",
        answer: "Tipo de producto, cantidad estimada, mercado objetivo, forma preferida, diámetro de barra o copa si se conoce, color, método de logo, acabado y si necesita muestra antes de producir.",
      },
      {
        question: "¿EHON ensambla y decora el envase de labial?",
        answer: "Sí. Decoración, impresión y ensamble forman parte de la fabricación en Shantou, seguidos de inspección de calidad antes del empaque de exportación.",
      },
    ],
    related: [
      { label: "Envases para gloss", text: "Tubos y aplicadores para la misma línea de labios." },
      { label: "Decoración y acabados", text: "Estampado, spray, metalizado e impresión." },
      quote,
    ],
  },
  "mascara-packaging": {
    navLabel: "Envases para máscara",
    title: "Fabricante de envases para máscara de pestañas",
    description: "Tubos, tapas y cepillos de máscara a medida, de EHON Packaging. Defina capacidad, cuello, aplicador y decoración para proyectos OEM u ODM.",
    h1: "Tubos y cepillos de máscara diseñados como un solo sistema.",
    eyebrow: "Envases para máscara",
    lead: "EHON fabrica el envase de máscara como un conjunto de tubo, tapa y aplicador, de modo que cepillo, sello y decoración se especifican juntos.",
    answer: "EHON Packaging fabrica tubos de máscara a medida en Shantou para marcas de belleza. El comprador define capacidad, cuello, varilla y tapa, y luego color y acabado. La muestra verifica el sello, el ajuste del aplicador y la decoración antes de producir.",
    imageAlt: "Tubos de máscara y delineador",
    highlights: [
      { title: "Tubo y tapa", text: "Direcciones rectas, cónicas y soft-touch con rosca a juego." },
      { title: "Aplicador", text: "El cepillo se elige según la fórmula y el resultado que se promete en las pestañas." },
      { title: "Sello", text: "El escurridor y el cierre se comprueban para que el envase viaje, no solo para la foto." },
    ],
    specs: [
      { label: "Componentes", value: "Tubo, tapa, varilla, escurridor" },
      { label: "Personalización", value: "Capacidad, color, logo, acabado" },
      { label: "Decoración", value: "Impresión, estampado, spray, metalizado" },
      { label: "Modelo", value: "Plataforma OEM o diseño a medida" },
    ],
    body: [
      {
        heading: "Por qué el cepillo entra en el primer brief",
        paragraphs: [
          "El desempeño de la máscara se juzga por el cepillo, y la marca se juzga por el tubo. EHON los trata como un solo conjunto: capacidad, acabado de cuello, escurridor y torque de tapa se confirman antes de cerrar el arte.",
          "Si el proyecto comparte lenguaje visual con el delineador o el gloss, el mismo color y acabado pueden pasar a esos envases.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se puede cambiar el aplicador en un tubo de máscara existente?",
        answer: "A menudo sí, cuando el cuello y el escurridor son compatibles. EHON confirma el ajuste en la muestra, sin dar por hecho que cualquier cepillo encaja en cualquier frasco.",
      },
      {
        question: "¿Qué decoración funciona en tubos de máscara?",
        answer: "Las vías habituales son serigrafía, estampado en caliente, color en spray, acabado mate y metalizado UV. El proceso correcto depende de la resina y del arte.",
      },
    ],
    related: [
      { label: "Envases para delineador", text: "Lápices y componentes de delineador líquido." },
      { label: "Accesorios", text: "Cepillos, tapas y piezas de apoyo." },
      quote,
    ],
  },
  "eyeliner-packaging": {
    navLabel: "Envases para delineador",
    title: "Fabricante de envases para delineador",
    description: "EHON suministra envases de delineador a medida, incluidos frascos de delineador líquido y mecanismos de lápiz, con tapas, puntas y decoración a juego.",
    h1: "Envases de delineador para fórmulas líquidas y sistemas de lápiz.",
    eyebrow: "Envases para delineador",
    lead: "Los frascos de delineador líquido y los mecanismos de lápiz necesitan una punta precisa, una tapa estable y un acabado coherente con el resto de la línea de ojos.",
    answer: "EHON Packaging fabrica envases de delineador a medida para formato líquido y lápiz. El proyecto especifica frasco o mecanismo, tapa, punta y decoración. La fábrica de Shantou moldea, acaba, ensambla e inspecciona para marcas de exportación.",
    imageAlt: "Packaging de tono oscuro para líneas de delineador",
    highlights: [
      { title: "Delineador líquido", text: "Frasco, tapa y punta de fieltro o cepillo especificados como un conjunto." },
      { title: "Sistemas de lápiz", text: "Mecanismo y carcasa para lápices de ojos retráctiles." },
      { title: "Coherencia de línea", text: "Color y acabados metalizados o mates alineados con la máscara." },
    ],
    specs: [
      { label: "Formatos", value: "Frasco líquido, lápiz twist" },
      { label: "Ajuste crítico", value: "Punta, tapa, sello" },
      { label: "Personalización", value: "Forma, color, logo, acabado" },
      { label: "Siguiente paso", value: "Muestra antes de decorar en serie" },
    ],
    body: [
      {
        heading: "Precisión antes que decoración",
        paragraphs: [
          "El envase de delineador falla cuando la punta, el escurridor o el mecanismo se eligen después del arte. EHON pide primero el tipo de fórmula, el trazo que se promete y el formato, y luego propone un conjunto que sí se puede decorar.",
          "Una cápsula de ojos completa puede emparejar el delineador con tubos de máscara y polveras de sombra de la misma familia de acabados.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Fabrican frascos de delineador líquido y también lápices?",
        answer: "Sí. Indíquenos qué formato pide la fórmula. El líquido se centra en frasco, tapa y punta; el lápiz, en el mecanismo y la carcasa.",
      },
      {
        question: "¿El delineador puede igualar el color de una máscara existente?",
        answer: "Sí. Comparta un color de referencia. Spray, masterbatch y decoración se acercan tanto como permiten la resina y el acabado, y se confirman en muestra.",
      },
    ],
    related: [
      { label: "Envases para máscara", text: "Tubos a juego para la línea de ojos." },
      { label: "Envases para sombra", text: "Paletas y polveras individuales." },
      quote,
    ],
  },
  "lip-gloss-packaging": {
    navLabel: "Envases para gloss",
    title: "Fabricante de tubos de gloss a medida",
    description: "Tubos de gloss de EHON: transparentes, esmerilados y decorados, con aplicador de esponja o a medida, tapas y acabados.",
    h1: "Tubos de gloss que muestran el color y resisten el acabado.",
    eyebrow: "Envases para gloss",
    lead: "Tubos de gloss transparentes, esmerilados o totalmente decorados, especificados con el aplicador y la tapa que su fórmula realmente necesita.",
    answer: "EHON Packaging fabrica tubos de gloss transparentes, esmerilados y decorados. La marca elige capacidad, aplicador, tapa y acabado. La muestra confirma transparencia, adherencia de la decoración y ajuste del aplicador antes de la producción en Shantou.",
    imageAlt: "Tubos de gloss",
    highlights: [
      { title: "Visibilidad", text: "Opciones transparentes y esmeriladas cuando el tono forma parte de la historia en el anaquel." },
      { title: "Aplicador", text: "Varillas tipo doe-foot y afines, ajustadas a la viscosidad." },
      { title: "Decoración", text: "Impresión, estampado y spray que siguen dejando leer la fórmula." },
    ],
    specs: [
      { label: "Aspectos", value: "Transparente, esmerilado, opaco, decorado" },
      { label: "Componentes", value: "Frasco, tapa, varilla, escurridor" },
      { label: "Uso", value: "Gloss, aceite, labial líquido" },
      { label: "Vía", value: "Molde de plataforma o herramental nuevo" },
    ],
    body: [
      {
        heading: "El material y el acabado tienen que coincidir",
        paragraphs: [
          "Un tubo transparente solo sirve si la resina sigue clara después del spray o la impresión elegidos. EHON selecciona material y vía de decoración juntos, incluidas opciones con PET reciclado en programas seleccionados.",
          "Comparta el peso de llenado, la preferencia de aplicador y si el envase debe hacer juego con un labial o una polvera de la misma colección.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Los tubos de gloss pueden hacerse en material reciclado?",
        answer: "Programas seleccionados pueden usar PET reciclado o PCR. La disponibilidad depende de la transparencia, la decoración y el desempeño que pide la fórmula. EHON lo confirma en la cotización.",
      },
      {
        question: "¿Qué diferencia hay entre un tubo de stock y uno a medida?",
        answer: "Una plataforma de stock cambia color, impresión y a veces el aplicador. Un tubo a medida cambia la forma y necesita herramental. Ambas vías se cotizan según cantidad y calendario.",
      },
    ],
    related: [
      { label: "Envases para labial", text: "Estuches para la misma historia de labios." },
      { label: "Materiales", text: "Resinas, transparencia y opciones PCR." },
      quote,
    ],
  },
  "eyeshadow-packaging": {
    navLabel: "Envases para sombra",
    title: "Fabricante de envases para sombra de ojos",
    description: "Polveras y paletas de sombra a medida de EHON, con godets, espejo, cierres y acabados decorativos para maquillaje.",
    h1: "Polveras y paletas de sombra con un cierre que se siente terminado.",
    eyebrow: "Envases para sombra",
    lead: "Polveras de un solo godet y arquitecturas de paleta para color prensado, con espejo, insertos y el acabado que pide la campaña.",
    answer: "EHON Packaging fabrica envases de sombra a medida, de la polvera individual a construcciones tipo paleta. La marca especifica distribución de godets, espejo, cierre y decoración. Moldeo, acabado y ensamble se hacen en la fábrica de Shantou.",
    imageAlt: "Envase de sombra de ojos",
    highlights: [
      { title: "Distribución", text: "Un godet, dúo o varios, planificados alrededor de la fórmula." },
      { title: "Cierre", text: "Bisagra, imán o clic especificados según el peso de la polvera." },
      { title: "Interior", text: "Espejo e insertos que dejan sitio para el nombre del tono." },
    ],
    specs: [
      { label: "Formatos", value: "Individual, dúo, multipan" },
      { label: "Interior", value: "Godets, espejo, inserto" },
      { label: "Exterior", value: "Spray, estampado, impresión, metalizado" },
      { label: "Relacionado", value: "Polveras de rostro y polvos sueltos" },
    ],
    body: [
      {
        heading: "Construir la polvera alrededor de los godets",
        paragraphs: [
          "El envase de sombra debe empezar por el tamaño del godet y el número de tonos, y después la bisagra y la decoración. EHON sigue ese orden para que un acabado metálico pesado no pelee con el cierre y el espejo siga cabiendo.",
          "Los proyectos de polvo prensado y color en crema pueden compartir familia de polvera con los productos de rostro cuando la marca quiere un mismo lenguaje de objeto.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Pueden igualar una polvera de sombra con una de polvos?",
        answer: "Sí. Envíe ambos productos en un mismo brief para desarrollar medidas, color y acabado como un conjunto, y no como dos moldes sin relación.",
      },
      {
        question: "¿El espejo y los godets están incluidos?",
        answer: "Pueden estarlo. Indique el tamaño del godet, si necesita espejo y si hay aplicador, para que la cotización cubra el ensamble completo.",
      },
    ],
    related: [
      { label: "Polveras", text: "Polveras de rostro prensado." },
      { label: "Diseño a medida", text: "Dirección de forma y componentes." },
      quote,
    ],
  },
  "powder-compacts": {
    navLabel: "Polveras",
    title: "Fabricante de polveras a medida",
    description: "EHON fabrica polveras a medida para productos de rostro prensados, con godet, espejo, cierre y acabados decorativos.",
    h1: "Polveras para color prensado y complexion.",
    eyebrow: "Polveras",
    lead: "Sistemas compactos para rubor, bronceador, iluminador y polvo prensado, de modo que godet, espejo y tapa cierran como un solo producto.",
    answer: "EHON Packaging fabrica polveras a medida en Shantou para cosmética de rostro prensada. Las opciones incluyen tamaño de godet, espejo, bisagra o cierre magnético, y acabado de superficie. Hay plataformas OEM y herramental nuevo.",
    imageAlt: "Polvera de maquillaje",
    highlights: [
      { title: "Sistemas prensados", text: "Godet y polvera dimensionados para el llenado, no al revés." },
      { title: "Experiencia de tapa", text: "Espejo, botón y cierre ajustados para abrirse una y otra vez." },
      { title: "Superficie de marca", text: "Tapas mate, metálicas, estampadas o impresas." },
    ],
    specs: [
      { label: "Uso", value: "Polvo prensado, rubor, bronceador" },
      { label: "Interior", value: "Godet, espejo, espacio para aplicador" },
      { label: "Cierre", value: "Clic, bisagra, magnético" },
      { label: "Alcance de fábrica", value: "Moldeo, decoración, ensamble, QC" },
    ],
    body: [
      {
        heading: "Una polvera es un pequeño proyecto de ensamble",
        paragraphs: [
          "El gráfico de la tapa es lo que ve quien compra. La bisagra, el pasador y el godet son lo que aguanta un año de aperturas. EHON cotiza esas piezas funcionales junto con la decoración, para que la muestra aprobada sea la construcción que se va a reordenar.",
          "El polvo suelto es otro envase. Si la fórmula no va prensada, use la página de polvos sueltos y reserve la polvera para las referencias prensadas.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre una polvera y el envase de polvo suelto?",
        answer: "La polvera guarda un godet prensado detrás de tapa y espejo. El polvo suelto usa un tarro con tamiz o un cierre similar. EHON fabrica ambos y conviene briefearlos por separado.",
      },
      {
        question: "¿La tapa puede llevar el logo en estampado en caliente?",
        answer: "Sí, cuando la resina y la base aceptan el foil. Comparta el archivo del logo y el color de la tapa para que EHON recomiende foil, impresión o grabado.",
      },
    ],
    related: [
      { label: "Polvos sueltos", text: "Envases con tamiz para polvo no prensado." },
      { label: "Envases para sombra", text: "Polveras de color de la misma familia." },
      quote,
    ],
  },
  "loose-powder-packaging": {
    navLabel: "Polvos sueltos",
    title: "Fabricante de envases para polvo suelto",
    description: "Tarros y envases con tamiz para polvo suelto, de EHON, con tapas, sifters y acabados decorativos.",
    h1: "Envase de polvo suelto con un tamiz que dosifica de verdad.",
    eyebrow: "Polvos sueltos",
    lead: "Tarros, tamices y sobretapas para polvo suelto de rostro, especificados por peso de llenado, dosis y aspecto de la tapa.",
    answer: "EHON Packaging fabrica envases de polvo suelto, incluidos tarros con tamiz y sobretapa decorada. La marca especifica capacidad, tipo de tamiz, color y acabado. La planta de Shantou moldea, decora, ensambla e inspecciona antes de exportar.",
    imageAlt: "Envase de polvo suelto",
    highlights: [
      { title: "Control del tamiz", text: "Malla y patrón de orificios elegidos según el tamaño de partícula." },
      { title: "Sello", text: "Sello interior y torque de tapa pensados para el transporte." },
      { title: "Presencia en anaquel", text: "Acabados de tapa y tarro alineados con las polveras de la línea." },
    ],
    specs: [
      { label: "Formato", value: "Tarro, tamiz, sobretapa" },
      { label: "Pieza crítica", value: "Malla del tamiz y sello" },
      { label: "Decoración", value: "Spray, impresión, estampado, metalizado" },
      { label: "Se combina con", value: "Polveras de la misma historia" },
    ],
    body: [
      {
        heading: "Primero la dosis, después la decoración",
        paragraphs: [
          "El envase de polvo suelto se juzga por lo limpio de la dosificación. EHON pide el tipo de polvo y el llenado objetivo antes de cerrar el tamiz, y luego aplica el color y el logo del resto de la línea de rostro.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El tamiz se puede personalizar?",
        answer: "La malla y la geometría se pueden seleccionar o mecanizar según el polvo. Describa la dosis que busca y EHON propondrá un tamiz de partida para la muestra.",
      },
      {
        question: "¿Un tarro de polvo suelto es lo mismo que un tarro de crema?",
        answer: "No. El tarro de crema prioriza el liner y una boca ancha. El de polvo suelto prioriza el tamiz y una dosis más contenida. EHON los fabrica como conjuntos distintos.",
      },
    ],
    related: [
      { label: "Polveras", text: "Formatos prensados de la misma gama." },
      { label: "Tarros y frascos", text: "Envases de skincare e híbridos." },
      quote,
    ],
  },
  "cream-jars-lotion-bottles": {
    navLabel: "Tarros y frascos",
    title: "Fabricante de tarros de crema y frascos de loción",
    description: "Tarros de crema, frascos de loción y packaging de skincare a medida, de EHON, con tapas, liners, bombas y acabados.",
    h1: "Tarros de crema y frascos de loción para skincare y belleza híbrida.",
    eyebrow: "Tarros y frascos",
    lead: "Tarros, frascos, tapas y dosificadores para cremas y lociones, con acabados que pueden convivir con el maquillaje.",
    answer: "EHON Packaging fabrica tarros de crema y frascos de loción a medida para líneas de skincare y belleza híbrida. Capacidad, cuello, liner, tapa o bomba, y decoración se especifican juntos. PCR y PET reciclado se pueden revisar en programas seleccionados.",
    imageAlt: "Tarros de crema y frascos de loción",
    highlights: [
      { title: "Tarros", text: "Aspecto de pared simple o doble, liners y tapa rosca o sobretapa." },
      { title: "Frascos", text: "Frascos de loción con tapa o cuello listo para bomba." },
      { title: "Materiales", text: "Resinas convencionales más vías seleccionadas de PCR y PET reciclado." },
    ],
    specs: [
      { label: "Formatos", value: "Tarro, frasco, tapa, cuello para bomba" },
      { label: "Detalle de skincare", value: "Liner, sello, dosis" },
      { label: "Materiales", value: "Resinas estándar, PCR y PET reciclado bajo pedido" },
      { label: "Decoración", value: "Impresión, estampado, spray, recubrimiento" },
    ],
    body: [
      {
        heading: "El packaging de skincare también tiene que pertenecer al mundo de la marca",
        paragraphs: [
          "Un tarro de crema suele ser el héroe de una línea de cuidado y, a la vez, un objeto de apoyo junto al maquillaje. EHON desarrolla primero capacidad y sello, y después el color, la transparencia y el acabado que permiten que el tarro conviva con labial, gloss o polveras.",
          "Si los materiales de menor impacto son un requisito, dígalo en el brief. PCR y PET reciclado están en programas seleccionados y no son automáticos para cada resina o acabado.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Tarros y frascos pueden compartir un sistema de decoración?",
        answer: "Sí. EHON puede alinear spray, impresión y estampado entre un tarro y un frasco, dentro de los límites de cada resina y forma. Apruebe ambos en muestra.",
      },
      {
        question: "¿Suministran bombas y tapas?",
        answer: "Las tapas y los componentes de dosificación compatibles pueden incluirse. Describa la dosis y la viscosidad para cotizar cuello y bomba como parte del envase.",
      },
    ],
    related: [
      { label: "Packaging sostenible", text: "Opciones de PCR y PET reciclado." },
      { label: "Accesorios", text: "Bombas, tapas y acoples." },
      quote,
    ],
  },
  accessories: {
    navLabel: "Accesorios",
    title: "Accesorios de packaging cosmético",
    description: "Accesorios de EHON: bombas, tapas, aplicadores, espátulas y componentes que completan un envase a medida.",
    h1: "Accesorios que completan el envase.",
    eyebrow: "Accesorios",
    lead: "Bombas, tapas, varillas, espátulas y piezas pequeñas, ajustadas al envase principal y no buscadas a última hora.",
    answer: "EHON Packaging suministra accesorios como bombas, tapas, varillas aplicadoras y espátulas. Los componentes se eligen para encajar en el tarro, frasco o tubo, y se acaban y ensamblan con el envase principal en Shantou.",
    imageAlt: "Bomba y accesorios de packaging cosmético",
    highlights: [
      { title: "Dosificación", text: "Bombas y acoples para lociones y formatos líquidos." },
      { title: "Aplicación", text: "Varillas, espátulas y tapas para color y piel." },
      { title: "Correspondencia", text: "Color y acabado alineados con el componente principal." },
    ],
    specs: [
      { label: "Ejemplos", value: "Bombas, tapas, varillas, espátulas" },
      { label: "Regla", value: "Ajuste confirmado contra el envase principal" },
      { label: "Acabado", value: "Igualación de color y decoración bajo pedido" },
      { label: "Suministro", value: "Junto con el pedido del envase principal" },
    ],
    body: [
      {
        heading: "Especifique los accesorios en la misma solicitud",
        paragraphs: [
          "Un cuello de bomba que está casi bien va a gotear o a quedar flojo. EHON prefiere cotizar los accesorios con el tarro, el frasco o el tubo, para aprobar rosca, color y decoración en un mismo juego de muestras.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puedo pedir solo el accesorio?",
        answer: "A veces, si el componente ya existe y encaja en su envase. Envíe el plano o una muestra del envase principal para que EHON revise la interfaz.",
      },
      {
        question: "¿El color del accesorio va a coincidir con el frasco?",
        answer: "Esa es la meta. Resinas distintas toman el color de forma distinta, así que EHON confirma la coincidencia en una muestra física.",
      },
    ],
    related: [
      { label: "Tarros y frascos", text: "Envases principales que estas piezas completan." },
      { label: "Envases para máscara", text: "Varillas y tapas de máscara." },
      quote,
    ],
  },
  "oem-odm": {
    navLabel: "OEM / ODM",
    title: "OEM y ODM de packaging cosmético",
    description: "EHON ofrece packaging cosmético OEM y ODM desde Shantou: plataformas existentes, herramental a medida, decoración, ensamble e inspección de exportación desde 1992.",
    h1: "Packaging cosmético OEM y ODM, del brief al reorden.",
    eyebrow: "OEM / ODM",
    lead: "Use una plataforma EHON cuando importa la velocidad, o abra herramental nuevo cuando la forma es la marca.",
    answer: "EHON Packaging ofrece packaging cosmético OEM y ODM desde su fábrica de Shantou. El OEM adapta moldes existentes con color, logo y acabado. El ODM y el desarrollo a medida suman diseño y herramental. Ambas vías incluyen muestra, producción, decoración, ensamble y control de calidad.",
    imageAlt: "Serie transparente de packaging cosmético",
    highlights: [
      { title: "Plataforma OEM", text: "Partir de un molde probado. Cambiar color, decoración y piezas seleccionadas." },
      { title: "ODM / a medida", text: "Desarrollar forma, conjunto de componentes y herramental para un envase propio." },
      { title: "Una sola fábrica", text: "Apoyo de diseño, moldeo, decoración, ensamble e inspección en Shantou." },
    ],
    specs: [
      { label: "OEM", value: "Molde existente, acabado a medida" },
      { label: "ODM", value: "Diseño más fabricación" },
      { label: "Herramental nuevo", value: "Se cotiza cuando la forma es nueva" },
      { label: "Entrega", value: "Envases decorados, ensamblados e inspeccionados" },
    ],
    body: [
      {
        heading: "Cómo elegir la vía",
        paragraphs: [
          "Elija OEM cuando la silueta puede salir de la biblioteca de más de 1.000 diseños de EHON y la marca vive en el color, el logo y el acabado. Elija ODM o full custom cuando la forma exterior, un mecanismo o un componente propio forma parte de la propuesta.",
          "En ambos casos la cotización necesita tipo de producto, cantidad estimada, mercado, calendario, preferencias de material y dirección de arte. La muestra confirma lo que un render no puede.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre OEM y ODM en EHON?",
        answer: "OEM significa fabricar según su especificación, a menudo sobre una plataforma existente. ODM suma el diseño y el desarrollo de EHON antes de fabricar. Una forma exterior nueva suele exigir herramental, sea cual sea la etiqueta.",
      },
      {
        question: "¿Un proyecto puede mezclar piezas de stock y piezas a medida?",
        answer: "Sí. Una tapa a medida sobre un tarro existente, o una varilla de stock en un frasco nuevo, es un brief habitual. EHON revisa la interfaz en la muestra.",
      },
    ],
    related: [
      { label: "Diseño a medida", text: "Dirección de forma y componentes." },
      { label: "I+D / herramental", text: "Cómo se desarrollan los moldes nuevos." },
      quoteBrief,
    ],
  },
  "custom-design": {
    navLabel: "Diseño a medida",
    title: "Diseño de packaging cosmético a medida",
    description: "El diseño de EHON cubre forma, componentes, color y función para labial, gloss, máscara, polveras, tarros y frascos.",
    h1: "Un diseño a medida que se puede moldear, decorar y reordenar.",
    eyebrow: "Diseño a medida",
    lead: "Forma, componente, color y función se diseñan contra un brief real: fórmula, mercado, banda de costo y calendario de lanzamiento.",
    answer: "EHON Packaging diseña packaging cosmético para producción, no solo para la presentación. El paso de diseño define forma, componentes, color y función, y luego pasa a la selección de material y a la muestra en la fábrica de Shantou.",
    imageAlt: "Serie rosa de packaging cosmético",
    highlights: [
      { title: "Forma", text: "Una forma exterior que desmoldea, expulsa y se puede decorar." },
      { title: "Componentes", text: "Tapas, copas, varillas, tamices y bisagras como un sistema." },
      { title: "Historia de color", text: "Una familia de acabados que puede extenderse a toda la colección." },
    ],
    body: [
      {
        heading: "Qué debe contener el brief de diseño",
        paragraphs: [
          "Tipo de producto, mercado objetivo, llenado o diámetro de barra, una referencia que le guste, una que quiera evitar, ideas de decoración y el rango de cantidad. Esos datos mantienen el primer diseño dentro de lo que la fábrica puede muestrear.",
          "Las colecciones destacadas de EHON, incluidas las series transparente, de color y de cepillo, muestran cómo un mismo lenguaje de diseño cubre varias categorías.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Hace falta el arte final antes de empezar el diseño?",
        answer: "No. Un archivo de logo ayuda, pero el diseño puede partir del producto y de la sensación buscada. Los dielines y los archivos de foil o impresión se necesitan antes de las muestras decoradas.",
      },
      {
        question: "¿El diseño puede cubrir una línea completa, no un solo SKU?",
        answer: "Sí. Los sets completos son una oferta central de EHON. Presente toda la línea en el brief para que proporciones y acabados sigan relacionados.",
      },
    ],
    related: [
      { label: "OEM / ODM", text: "Elegir plataforma o herramental nuevo." },
      { label: "Envases para labial", text: "Ver una categoría central." },
      quoteBrief,
    ],
  },
  "decoration-finishing": {
    navLabel: "Decoración y acabados",
    title: "Decoración y acabados de packaging cosmético",
    description: "Estampado en caliente, serigrafía, metalizado UV, mate, barniz UV, degradado, transferencia y grabado láser para el packaging de EHON.",
    h1: "Decoración y acabados que hacen el envase inconfundiblemente suyo.",
    eyebrow: "Decoración y acabados",
    lead: "Ocho vías de acabado, elegidas según la resina y el arte, no aplicadas como un menú genérico.",
    answer: "EHON Packaging decora en planta con estampado en caliente, serigrafía, metalizado UV, acabado mate, barniz UV, efectos degradados e iridiscentes, transferencia por calor o agua, y grabado láser. El proceso se ajusta al material y al arte del logo, y se aprueba en muestra.",
    imageAlt: "Serie de packaging cosmético decorado",
    highlights: [
      { title: "Estampado en caliente", text: "Logos y filetes en foil sobre bases compatibles." },
      { title: "Serigrafía", text: "Impresión nítida para texto, iconos y arte de pocos colores." },
      { title: "Metalizado UV", text: "Aspecto metálico sin dar por hecho que toda resina lo acepta." },
      { title: "Mate y barniz UV", text: "Capas soft-touch o brillo sobre el color." },
      { title: "Degradado / iridiscente", text: "Efectos de cambio para colecciones de moda." },
      { title: "Transferencia y láser", text: "Transferencia por calor o agua, y grabado láser para marcas permanentes." },
    ],
    specs: [
      { label: "F01", value: "Estampado en caliente" },
      { label: "F02", value: "Serigrafía" },
      { label: "F03", value: "Metalizado UV" },
      { label: "F04", value: "Acabado mate" },
      { label: "F05", value: "Barniz UV" },
      { label: "F06", value: "Degradado / iridiscente" },
      { label: "F07", value: "Transferencia por calor o agua" },
      { label: "F08", value: "Grabado láser" },
    ],
    body: [
      {
        heading: "El acabado sigue al material",
        paragraphs: [
          "No todo efecto corresponde a toda resina. Un tubo de gloss transparente, una tapa de polvera mate y una tapa de máscara metalizada son superficies distintas. EHON recomienda la vía después de elegir el material y la demuestra en una muestra decorada antes de la serie.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se pueden combinar varios acabados en un componente?",
        answer: "A menudo sí: por ejemplo spray más estampado, o metalizado más una ventana mate. Cada proceso extra afecta la muestra y el costo, así que liste la pila completa en la solicitud.",
      },
      {
        question: "¿Qué acabado conviene para un logo pequeño?",
        answer: "El estampado en caliente y el grabado láser son habituales para marcas pequeñas. La serigrafía sirve cuando el logo necesita un color de tinta concreto. EHON revisa el grosor de línea sobre la curva real de la pieza.",
      },
    ],
    related: [
      { label: "Materiales", text: "Resinas que aceptan estos acabados." },
      { label: "Fabricación", text: "Dónde se sitúa la decoración en la planta." },
      quoteBrief,
    ],
  },
  materials: {
    navLabel: "Materiales",
    title: "Materiales de packaging cosmético",
    description: "EHON selecciona resinas, acabados y aplicadores para labial, gloss, máscara, polveras, tarros y frascos, incluido PCR y PET reciclado en programas seleccionados.",
    h1: "Materiales elegidos para la fórmula, el acabado y el mercado.",
    eyebrow: "Materiales",
    lead: "Resina, transparencia, impacto de la decoración y plásticos del aplicador se eligen contra el producto, no desde una línea genérica de catálogo.",
    answer: "EHON Packaging especifica los materiales durante el desarrollo en Shantou. La elección cubre resinas de moldeo, transparencia o color, compatibilidad con la decoración y componentes del aplicador. PCR y PET reciclado están disponibles en programas seleccionados cuando el brief lo pide.",
    imageAlt: "Colección de materiales y color de packaging cosmético",
    highlights: [
      { title: "Resinas principales", text: "Elegidas por transparencia, rigidez, vida de bisagra o contacto químico." },
      { title: "Color", text: "Masterbatch y spray considerados como parte del plan de material." },
      { title: "Opciones de menor impacto", text: "PCR y PET reciclado se revisan donde el envase lo permite." },
    ],
    body: [
      {
        heading: "Qué contarle a EHON sobre el material",
        paragraphs: [
          "Diga si el envase debe ser transparente, si toca una fórmula rica en solvente, si una bisagra se abrirá a diario y si hace falta una declaración de contenido reciclado. Esos cuatro puntos estrechan la resina más rápido que un nombre comercial solo.",
          "La decoración no es un tema aparte. Metalizado, estampado y esmerilado dependen del sustrato. Material y acabado se aprueban juntos.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿EHON usa un solo plástico?",
        answer: "No. La resina depende del componente. Una bisagra, un frasco transparente, una tapa metálica y una varilla rara vez son el mismo material. EHON propone el conjunto durante el desarrollo.",
      },
      {
        question: "¿Pueden recomendar un material si solo conocemos el tipo de fórmula?",
        answer: "Sí. Comparta la categoría de fórmula, el tamaño de llenado y la declaración que necesita el envase. EHON propondrá una especificación de partida para la muestra.",
      },
    ],
    related: [
      { label: "Packaging sostenible", text: "PCR y PET reciclado con más detalle." },
      { label: "Decoración y acabados", text: "Qué pueden aceptar esos materiales." },
      quoteBrief,
    ],
  },
  "sustainable-packaging": {
    navLabel: "Packaging sostenible",
    title: "Packaging cosmético sostenible",
    description: "Las opciones sostenibles de EHON incluyen materiales PCR y PET reciclado en programas seleccionados, con consulta de diseño para marcas que cuidan los recursos.",
    h1: "Packaging de belleza con mejores opciones de material.",
    eyebrow: "Packaging sostenible",
    lead: "PCR y PET reciclado ya están en programas seleccionados de EHON, para marcas que quieren un envase más consciente sin adivinar el desempeño.",
    answer: "EHON Packaging ofrece materiales PCR y PET reciclado dentro de programas seleccionados. Las opciones son específicas del proyecto: transparencia, decoración y contacto con la fórmula deciden si un material reciclado es adecuado. EHON asesora sobre material y acabado durante el brief.",
    imageAlt: "Colección de packaging usada en programas de material",
    highlights: [
      { title: "Materiales PCR", text: "Opciones de reciclado posconsumo donde el componente lo permite." },
      { title: "PET reciclado", text: "Se considera para frascos y envases transparentes seleccionados." },
      { title: "Consulta", text: "Material y acabado elegidos contra el proyecto real, no como una declaración genérica." },
    ],
    body: [
      {
        heading: "Qué va a afirmar EHON, y qué no",
        paragraphs: [
          "Un material reciclado es una especificación, no un eslogan. EHON confirma si el PCR o el PET reciclado pueden cumplir transparencia, color, decoración y función antes de escribirlo en la cotización. Si no puede, el equipo lo dice y propone la alternativa más cercana y lista para producir.",
          "La consulta de diseño cubre la selección de material y acabado según el proyecto, incluido cómo un envase más consciente sigue haciendo juego con el resto de una línea de color o de skincare.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Todos los envases de EHON están disponibles en PCR?",
        answer: "No. PCR y PET reciclado están en programas seleccionados. La respuesta depende del componente, del acabado y del desempeño requerido.",
      },
      {
        question: "¿El material reciclado cambia el color o la transparencia?",
        answer: "Puede cambiarlos. Por eso EHON muestra el material propuesto con la decoración prevista antes de que apruebe la producción.",
      },
    ],
    related: [
      { label: "Materiales", text: "Cómo se seleccionan las resinas." },
      { label: "Tarros y frascos", text: "Un lugar habitual para revisar contenido reciclado." },
      quoteBrief,
    ],
  },
  manufacturing: {
    navLabel: "Fabricación",
    title: "Fabricación de packaging cosmético",
    description: "La fábrica de EHON en Shantou cubre inyección, soplado, ensamble automático, impresión, decoración y manipulación robótica.",
    h1: "Donde la idea se vuelve un envase listo para producir.",
    eyebrow: "Fabricación",
    lead: "Una planta en Shantou, Guangdong, con moldeo, ensamble, impresión y decoración dentro de una misma operación de packaging cosmético.",
    answer: "EHON Packaging fabrica packaging cosmético en Shantou, Guangdong, en un predio de más de 40.000 metros cuadrados. Las capacidades incluyen moldeo por inyección, soplado, ensamble automático, impresión, decoración y manipulación robótica. La empresa opera desde 1992.",
    imageAlt: "Fábrica de EHON Packaging en Shantou, Guangdong",
    highlights: [
      { title: "Inyección", text: "Tapas, estuches, polveras y componentes de precisión." },
      { title: "Soplado", text: "Formatos de frasco para gloss, delineador y loción." },
      { title: "Ensamble automático", text: "Envases de varias piezas construidos como un sistema." },
      { title: "Impresión y decoración", text: "Acabado en planta después del moldeo." },
      { title: "Manipulación robótica", text: "Movimiento repetible a lo largo de la producción." },
    ],
    body: [
      {
        heading: "Un solo sitio para pasos que el comprador suele separar",
        paragraphs: [
          "Las marcas pierden tiempo cuando el moldeo, el spray, el estampado y el ensamble están en talleres distintos. EHON mantiene esos pasos en su alcance de Shantou, de modo que la muestra y el pedido de serie siguen la misma ruta.",
          "La dirección es EHON Industrial Zone, No.2 ZhuJinYiHeng Road, distrito de LongHu, Shantou, Guangdong, China.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Dónde está la fábrica de EHON?",
        answer: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, ZhuJin Industrial Park, distrito de LongHu, Shantou, Guangdong, China.",
      },
      {
        question: "¿Qué procesos están en casa?",
        answer: "Moldeo por inyección, soplado, ensamble automático, impresión, decoración y manipulación robótica forman parte del alcance de fabricación publicado.",
      },
    ],
    related: [
      { label: "Fábrica", text: "Ver el sitio y el contexto de visita." },
      { label: "Control de calidad", text: "Cómo se inspecciona la salida." },
      quoteBrief,
    ],
  },
  "quality-control": {
    navLabel: "Control de calidad",
    title: "Control de calidad de packaging cosmético",
    description: "El control de calidad de EHON se apoya en los sistemas ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018.",
    h1: "Sistemas certificados. Fabricación documentada.",
    eyebrow: "Control de calidad",
    lead: "La inspección es el último paso del flujo, y los certificados están para que el comprador verifique el sistema que hay detrás.",
    answer: "EHON Packaging integra el control de calidad en la producción de packaging en Shantou. La empresa cuenta con ISO 9001:2015 de gestión de la calidad, ISO 14001:2015 de gestión ambiental e ISO 45001:2018 de seguridad y salud en el trabajo. La inspección ocurre antes del empaque de exportación.",
    imageAlt: "Certificado ISO 9001",
    highlights: [
      { title: "ISO 9001:2015", text: "Sistema de gestión de la calidad." },
      { title: "ISO 14001:2015", text: "Sistema de gestión ambiental." },
      { title: "ISO 45001:2018", text: "Seguridad y salud en el trabajo." },
    ],
    body: [
      {
        heading: "Qué significa el QC en un pedido de packaging",
        paragraphs: [
          "En un envase decorado, la inspección cubre lo que el brief marcó como crítico: ajuste de ensamble, color, posición del logo, defectos visibles de superficie y acondicionado. Los certificados describen el sistema; la muestra y el registro de serie describen su pedido.",
          "Las imágenes originales están en la página de certificados para que el comprador lea el alcance, no solo confíe en un sello.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué certificados ISO tiene EHON?",
        answer: "ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018. Las copias se muestran en la página de certificados.",
      },
      {
        question: "¿Los compradores pueden revisar documentos de calidad?",
        answer: "Sí. Solicite los documentos que necesite con su RFQ o con el plan de visita, y EHON compartirá los registros pertinentes.",
      },
    ],
    related: [
      { label: "Certificados", text: "Ver las imágenes de los certificados." },
      { label: "Fabricación", text: "Los pasos de producción que sigue el QC." },
      quoteBrief,
    ],
  },
  "rd-tooling": {
    navLabel: "I+D / herramental",
    title: "I+D y herramental de packaging cosmético",
    description: "I+D y herramental de EHON: moldes a medida, muestras y 14 patentes en innovación de packaging.",
    h1: "I+D y herramental para envases que hay que fabricar dos veces.",
    eyebrow: "I+D / herramental",
    lead: "Las formas nuevas se vuelven moldes. Las plataformas existentes se vuelven proyectos más rápidos. La muestra es donde ambas vías se demuestran.",
    answer: "EHON Packaging desarrolla packaging cosmético mediante diseño, herramental y muestreo en Shantou. Los moldes a medida se abren cuando la forma es nueva. La empresa cuenta con 14 patentes en innovación de packaging y 8 marcas registradas.",
    imageAlt: "Equipos de producción de EHON",
    highlights: [
      { title: "Herramental", text: "Moldes nuevos cuando una plataforma existente no puede llevar la forma." },
      { title: "Muestreo", text: "Prototipo para confirmar el detalle visual y el funcional." },
      { title: "Patentes", text: "14 patentes en innovación de packaging, más 8 marcas." },
    ],
    body: [
      {
        heading: "La muestra es parte del desarrollo, no una cortesía",
        paragraphs: [
          "La decisión de herramental debe tomarse cuando el conjunto de componentes está claro: qué piezas son nuevas, cuáles se pueden compartir y qué decoración debe permitir el acero. EHON muestra después para confirmar ajuste, color y acabado antes de producir.",
          "Los registros de patentes y marcas se resumen en la página de patentes, para compradores que necesitan evidencia de innovación más allá de un moodboard.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuándo hace falta un molde nuevo?",
        answer: "Cuando la forma exterior o un mecanismo crítico no existe en las plataformas actuales de EHON. El color y la mayor parte de la decoración no exigen un molde nuevo.",
      },
      {
        question: "¿Cuántas patentes tiene EHON?",
        answer: "EHON publica 14 patentes en innovación de packaging y 8 marcas registradas.",
      },
    ],
    related: [
      { label: "Patentes e innovación", text: "El registro de innovación." },
      { label: "OEM / ODM", text: "Plataforma frente a herramental a medida." },
      quoteBrief,
    ],
  },
  "our-story": {
    navLabel: "Nuestra historia",
    title: "Nuestra historia",
    description: "Guangdong EHON Technology Co., Ltd. diseña y fabrica packaging cosmético en Shantou desde 1992 para marcas de belleza de todo el mundo.",
    h1: "Packaging pensado para formar parte de su marca.",
    eyebrow: "Nuestra historia",
    lead: "Guangdong EHON Technology Co., Ltd. integra diseño, I+D, fabricación y venta de packaging cosmético desde 1992.",
    answer: "EHON Packaging es la marca de Guangdong EHON Technology Co., Ltd., fabricante de packaging cosmético fundado en 1992 en Shantou, Guangdong. La empresa diseña, desarrolla, fabrica y vende envases para marcas de belleza, del labial y la máscara a tarros, frascos y polveras.",
    imageAlt: "Showroom de EHON",
    highlights: [
      { title: "1992", text: "Fundada en Shantou." },
      { title: "40.000 m²+", text: "Planta de fabricación." },
      { title: "1.000+", text: "Diseños de packaging." },
      { title: "Global", text: "Exportación a los principales mercados de belleza." },
    ],
    body: [
      {
        heading: "Un fabricante con un nombre de marca que el comprador puede buscar",
        paragraphs: [
          "EHON es la marca de packaging. Guangdong EHON Technology Co., Ltd. es el fabricante legal. Ambos nombres deben figurar en los contratos y en este sitio para que compras, buscadores y respuestas de IA lleguen a la misma empresa.",
          "El trabajo se ha mantenido específico: packaging cosmético, no plásticos en general. Por eso el catálogo va de mecanismos de labial a polveras, tubos de gloss y tarros de skincare, con la decoración en la misma operación.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuál es la razón social?",
        answer: "Guangdong EHON Technology Co., Ltd. La marca con la que se trabaja con clientes es EHON Packaging.",
      },
      {
        question: "¿Cuándo se fundó EHON?",
        answer: "En 1992, en Shantou, Guangdong, China.",
      },
    ],
    related: [
      { label: "Fábrica", text: "Dónde se hace el trabajo." },
      { label: "Certificados", text: "Sistemas ISO que se pueden verificar." },
      quoteBrief,
    ],
  },
  factory: {
    navLabel: "Fábrica",
    title: "Fábrica de EHON en Shantou",
    description: "Visite la fábrica de packaging cosmético de EHON en el distrito de LongHu, Shantou: moldeo, ensamble, impresión, showroom y salas de reunión.",
    h1: "La fábrica de Shantou que está detrás de las muestras.",
    eyebrow: "Fábrica",
    lead: "Más de 40.000 metros cuadrados en el distrito de LongHu, con producción, showroom y salas donde el brief se decide de verdad.",
    answer: "La fábrica de EHON está en EHON Industrial Zone, No.2 ZhuJinYiHeng Road, distrito de LongHu, Shantou, Guangdong, China. El predio supera los 40.000 metros cuadrados e incluye inyección, soplado, ensamble, impresión, decoración, showroom y espacio de reuniones.",
    imageAlt: "Edificio de la fábrica EHON",
    highlights: [
      { title: "Producción", text: "Equipos de moldeo, ensamble y decoración." },
      { title: "Showroom", text: "Colecciones que se revisan en persona." },
      { title: "Reuniones", text: "Un lugar para cerrar el brief con el equipo." },
    ],
    body: [
      {
        heading: "Planee la visita alrededor de un proyecto",
        paragraphs: [
          "Una visita a fábrica rinde más con un brief en borrador: categorías, cantidades y temporada objetivo. EHON puede recorrer moldeo, decoración y showroom contra ese brief, en lugar de un tour genérico.",
          "Si no puede viajar, la misma conversación sigue por correo, WhatsApp, WeChat o Line. Solicite una cotización y adjunte referencias.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuál es la dirección de la fábrica?",
        answer: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, distrito de LongHu, Shantou, Guangdong, China. Teléfono +86-754-88608623.",
      },
      {
        question: "¿Pueden visitar compradores internacionales?",
        answer: "Sí. Contacte a EHON con antelación, con sus fechas y las categorías de packaging que quiere revisar.",
      },
    ],
    related: [
      { label: "Fabricación", text: "Procesos en el sitio." },
      { label: "Solicitar cotización", text: "Agendar una conversación de proyecto." },
      quoteBrief,
    ],
  },
  certificates: {
    navLabel: "Certificados",
    title: "Certificados ISO",
    description: "Vea los certificados ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018 de la fábrica de packaging cosmético de EHON en Shantou.",
    h1: "Certificados que se pueden abrir, no solo sellos.",
    eyebrow: "Certificados",
    lead: "Tres certificados de sistema de gestión: calidad, medio ambiente, y seguridad y salud en el trabajo.",
    answer: "Guangdong EHON Technology Co., Ltd. publica los certificados ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018 de su operación de packaging cosmético. Las imágenes de esta página son los documentos que el comprador puede inspeccionar.",
    imageAlt: "Certificado ISO 14001",
    highlights: [
      { title: "ISO 9001:2015", text: "Gestión de la calidad." },
      { title: "ISO 14001:2015", text: "Gestión ambiental." },
      { title: "ISO 45001:2018", text: "Seguridad y salud en el trabajo." },
    ],
    body: [
      {
        heading: "Cómo usar estos documentos",
        paragraphs: [
          "Compruebe la norma, la razón social y el alcance contra su ficha de proveedor. Si su retailer o el dueño de la marca necesita una copia concreta, pídasela a EHON y el equipo enviará el archivo que corresponde a la imagen publicada aquí.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Estos certificados son las publicaciones vigentes del sitio?",
        answer: "Las imágenes mostradas son los documentos que EHON aporta para ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018. Pida al equipo una copia fechada si la necesita para un portal de proveedores.",
      },
    ],
    related: [
      { label: "Control de calidad", text: "Cómo se ve el sistema en los pedidos." },
      { label: "Nuestra historia", text: "La empresa detrás de los certificados." },
      quoteBrief,
    ],
  },
  "patents-innovation": {
    navLabel: "Patentes e innovación",
    title: "Patentes e innovación",
    description: "EHON cuenta con 14 patentes en innovación de packaging cosmético y 8 marcas registradas, con I+D y herramental propios.",
    h1: "Catorce patentes. Ocho marcas. Una fábrica que puede usarlas.",
    eyebrow: "Patentes e innovación",
    lead: "En EHON la innovación se cuenta en patentes y marcas, y se demuestra cuando un envase nuevo realmente se moldea y se ensambla.",
    answer: "EHON Packaging cuenta con 14 patentes en innovación de packaging y 8 marcas registradas. El desarrollo está junto a la capacidad de I+D y herramental de Shantou, de modo que una estructura nueva puede pasar de la idea a la muestra y a la producción.",
    imageAlt: "Sala de reuniones de EHON",
    highlights: [
      { title: "14", text: "Patentes en innovación de packaging." },
      { title: "8", text: "Marcas registradas." },
      { title: "30+ años", text: "Experiencia de fabricación desde 1992." },
    ],
    body: [
      {
        heading: "Por qué las cifras están en la página de inicio",
        paragraphs: [
          "Quien compara fábricas de packaging necesita separar a un comercializador de un desarrollador. EHON publica el número de patentes, el de marcas y el alcance de fabricación juntos, e invita a las preguntas técnicas durante la solicitud.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Una patente significa que no puedo obtener un envase similar?",
        answer: "Las patentes de EHON protegen invenciones de EHON. Su proyecto a medida se define para que el envase que aprueba sea el que se le suministra. Pregunte al equipo si necesita hablar de novedad en un mecanismo concreto.",
      },
    ],
    related: [
      { label: "I+D / herramental", text: "Cómo se abren los moldes nuevos." },
      { label: "Nuestra historia", text: "Antecedentes de la empresa." },
      quoteBrief,
    ],
  },
};
