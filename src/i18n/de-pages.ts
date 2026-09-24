import type { PageCopy } from "./types";

const quote = { label: "Angebot anfordern", text: "Nennen Sie Produkttyp, Menge und gewünschte Oberfläche." };
const quoteBrief = { label: "Angebot anfordern", text: "Senden Sie den Brief, den der Vertriebskontakt wirklich nutzen wird." };

export const pages: Record<string, PageCopy> = {
  "lipstick-packaging": {
    navLabel: "Lippenstift-Verpackung",
    title: "Hersteller individueller Lippenstift-Verpackungen",
    description: "EHON fertigt Lippenstift-Etuis, Gehäuse und Mechanismen in Shantou. OEM- und ODM-Optionen umfassen Farbe, Logo, Oberfläche und Komponenten-Kombination.",
    h1: "Lippenstift-Verpackung – stark in der Marke außen, präzise für die Formel innen.",
    eyebrow: "Lippenstift-Verpackung",
    lead: "EHON entwickelt und fertigt Lippenstift-Etuis, innere Mechanismen und dekorierte Gehäuse für Marken, die eine wiederholbare, exportfähige Verpackung brauchen.",
    answer: "EHON Packaging produziert individuelle Lippenstift-Verpackungen in Shantou, China – darunter Slim-, Square- und Magnetverschluss-Etuis. Die Marke definiert Harz, Farbe, Logo und Oberfläche und geht vom Muster zur dekorierten und montierten Serienfertigung unter ISO 9001, ISO 14001 und ISO 45001.",
    imageAlt: "EHON Lippenstift-Etuis",
    highlights: [
      { title: "Architekturen", text: "Slim, quadratisch, rund und Magnetverschluss für Lippenlinien." },
      { title: "Mechanik-Passung", text: "Becherdurchmesser, Hub und Klick werden an der Mine bestätigt – nicht nur am Render." },
      { title: "Dekoration", text: "Heißprägung, Spray, Metallisierung, Druck und Zweifarben-Montagen." },
    ],
    specs: [
      { label: "Übliche Formate", value: "Slim, klassisch, quadratisch, magnetisch" },
      { label: "Individualisierung", value: "Farbe, Logo, Oberfläche, Becher, Gehäuse" },
      { label: "Liefermodell", value: "Bestehende Plattform oder neues Werkzeug" },
      { label: "Werk", value: "Shantou, Guangdong, seit 1992" },
    ],
    body: [
      {
        heading: "Was Einkäufer meist zuerst festlegen",
        paragraphs: [
          "Ein Lippenstift-Etui ist zugleich Mechanismus und Markenobjekt. Der erste Brief sollte den Minendurchmesser, das gewünschte Griffgefühl, den Markt und angeben, ob das Projekt auf einer EHON-Plattform starten kann oder ein neues Werkzeug braucht.",
          "Farbe, Logo-Position und Oberfläche werden gemeinsam spezifiziert, damit Gehäuse, Sockel und Becher nach der Dekoration weiter passen. So vermeiden Sie die Freigabe eines Renders, der Heißprägung, Spray oder Metallisierung nicht standhält.",
        ],
      },
      {
        heading: "Von der Lippenstory zur Serienverpackung",
        paragraphs: [
          "Der EHON-Ablauf führt vom Brief und Design über Materialwahl, Muster, Formen, Dekoration, Montage bis zur Exportprüfung. Es gibt abgestimmte Sets, wenn der Lippenstift mit Lipgloss, Mascara oder Puderdosen derselben Kollektion harmonieren soll.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann EHON ein Lippenstift-Etui individualisieren, ohne ein neues Werkzeug zu öffnen?",
        answer: "Ja. Viele Projekte starten auf einer bestehenden Plattform und ändern Farbe, Spray, Heißprägung, Logo und ausgewählte Komponenten. Eine völlig neue Form erfordert Werkzeugbau, den EHON im Angebot kalkuliert.",
      },
      {
        question: "Was sollte eine Anfrage für Lippenstift-Verpackung enthalten?",
        answer: "Produkttyp, geschätzte Menge, Zielmarkt, bevorzugte Form, Minen- oder Becherdurchmesser falls bekannt, Farbe, Logo-Methode, Oberfläche und ob Sie vor der Produktion ein Muster brauchen.",
      },
      {
        question: "Montiert und dekoriert EHON die Lippenstift-Verpackung?",
        answer: "Ja. Dekoration, Druck und Montage gehören zur Fertigung in Shantou, gefolgt von Qualitätsprüfung vor der Exportverpackung.",
      },
    ],
    related: [
      { label: "Lipgloss-Verpackung", text: "Tuben und Applikatoren für dieselbe Lippenlinie." },
      { label: "Dekoration und Oberflächen", text: "Heißprägung, Spray, Metallisierung und Druck." },
      quote,
    ],
  },
  "mascara-packaging": {
    navLabel: "Mascara-Verpackung",
    title: "Hersteller von Mascara-Verpackungen",
    description: "Individuelle Mascara-Tuben, Verschlüsse und Bürsten von EHON Packaging. Definieren Sie Füllmenge, Hals, Applikator und Dekoration für OEM- oder ODM-Projekte.",
    h1: "Mascara-Tuben und Bürsten – als ein System konzipiert.",
    eyebrow: "Mascara-Verpackung",
    lead: "EHON fertigt die Mascara-Verpackung als Ensemble aus Tube, Verschluss und Applikator, sodass Bürste, Dichtung und Dekoration gemeinsam spezifiziert werden.",
    answer: "EHON Packaging fertigt individuelle Mascara-Tuben in Shantou für Beauty-Marken. Der Einkäufer definiert Füllmenge, Hals, Stab und Verschluss, danach Farbe und Oberfläche. Das Muster prüft Dichtung, Applikator-Passung und Dekoration vor der Produktion.",
    imageAlt: "Mascara- und Eyeliner-Tuben",
    highlights: [
      { title: "Tube und Verschluss", text: "Gerade, konische und Soft-Touch-Richtungen mit passendem Gewinde." },
      { title: "Applikator", text: "Die Bürste wird nach Formel und dem versprochenen Wimperneffekt gewählt." },
      { title: "Dichtung", text: "Wischer und Verschluss werden geprüft, damit die Verpackung reist – nicht nur fürs Foto." },
    ],
    specs: [
      { label: "Komponenten", value: "Tube, Verschluss, Stab, Wischer" },
      { label: "Individualisierung", value: "Füllmenge, Farbe, Logo, Oberfläche" },
      { label: "Dekoration", value: "Druck, Heißprägung, Spray, Metallisierung" },
      { label: "Modell", value: "OEM-Plattform oder individuelles Design" },
    ],
    body: [
      {
        heading: "Warum die Bürste in den ersten Brief gehört",
        paragraphs: [
          "Die Mascara-Leistung wird an der Bürste gemessen, die Marke am Tubendesign. EHON behandelt beides als ein Set: Füllmenge, Halsfinish, Wischer und Verschluss-Drehmoment werden bestätigt, bevor das Artwork finalisiert wird.",
          "Wenn das Projekt visuelle Sprache mit Eyeliner oder Lipgloss teilt, können dieselbe Farbe und Oberfläche auf diese Verpackungen übertragen werden.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann der Applikator an einer bestehenden Mascara-Tube gewechselt werden?",
        answer: "Oft ja, wenn Hals und Wischer kompatibel sind. EHON bestätigt die Passung am Muster – ohne anzunehmen, dass jede Bürste in jedes Fläschchen passt.",
      },
      {
        question: "Welche Dekoration eignet sich für Mascara-Tuben?",
        answer: "Übliche Wege sind Siebdruck, Heißprägung, Sprühfarbe, Mattfinish und UV-Metallisierung. Das passende Verfahren hängt von Harz und Artwork ab.",
      },
    ],
    related: [
      { label: "Eyeliner-Verpackung", text: "Stifte und Komponenten für Flüssig-Eyeliner." },
      { label: "Zubehör", text: "Bürsten, Verschlüsse und Ergänzungsteile." },
      quote,
    ],
  },
  "eyeliner-packaging": {
    navLabel: "Eyeliner-Verpackung",
    title: "Hersteller von Eyeliner-Verpackungen",
    description: "EHON liefert individuelle Eyeliner-Verpackungen, darunter Fläschchen für Flüssig-Eyeliner und Stiftmechanismen, mit passenden Verschlüssen, Spitzen und Dekoration.",
    h1: "Eyeliner-Verpackung für Flüssigformeln und Stiftsysteme.",
    eyebrow: "Eyeliner-Verpackung",
    lead: "Flüssig-Eyeliner-Fläschchen und Stiftmechanismen brauchen eine präzise Spitze, einen stabilen Verschluss und ein Finish, das zur übrigen Augenlinie passt.",
    answer: "EHON Packaging fertigt individuelle Eyeliner-Verpackungen für Flüssig- und Stiftformat. Das Projekt spezifiziert Fläschchen oder Mechanismus, Verschluss, Spitze und Dekoration. Das Werk in Shantou formt, veredelt, montiert und prüft für Exportmarken.",
    imageAlt: "Dunkle Verpackung für Eyeliner-Linien",
    highlights: [
      { title: "Flüssig-Eyeliner", text: "Fläschchen, Verschluss und Filz- oder Bürstenspitze als Ensemble spezifiziert." },
      { title: "Stiftsysteme", text: "Mechanismus und Gehäuse für drehbare Augenstifte." },
      { title: "Linienkohärenz", text: "Farbe und metallische oder matte Oberflächen abgestimmt auf die Mascara." },
    ],
    specs: [
      { label: "Formate", value: "Flüssigfläschchen, Drehstift" },
      { label: "Kritische Passung", value: "Spitze, Verschluss, Dichtung" },
      { label: "Individualisierung", value: "Form, Farbe, Logo, Oberfläche" },
      { label: "Nächster Schritt", value: "Muster vor Seriendekoration" },
    ],
    body: [
      {
        heading: "Präzision vor Dekoration",
        paragraphs: [
          "Eyeliner-Verpackung scheitert, wenn Spitze, Wischer oder Mechanismus nach dem Artwork gewählt werden. EHON fragt zuerst Formeltyp, den versprochenen Strich und das Format und schlägt dann ein Ensemble vor, das sich wirklich dekorieren lässt.",
          "Eine komplette Augen-Kapsel kann den Eyeliner mit Mascara-Tuben und Lidschatten-Puderdosen derselben Oberflächenfamilie kombinieren.",
        ],
      },
    ],
    faqs: [
      {
        question: "Fertigen Sie Flüssig-Eyeliner-Fläschchen und auch Stifte?",
        answer: "Ja. Nennen Sie uns, welches Format die Formel verlangt. Bei Flüssig geht es um Fläschchen, Verschluss und Spitze; beim Stift um Mechanismus und Gehäuse.",
      },
      {
        question: "Kann der Eyeliner die Farbe einer bestehenden Mascara treffen?",
        answer: "Ja. Teilen Sie eine Referenzfarbe. Spray, Masterbatch und Dekoration nähern sich so weit an, wie Harz und Oberfläche es erlauben – bestätigt am Muster.",
      },
    ],
    related: [
      { label: "Mascara-Verpackung", text: "Passende Tuben für die Augenlinie." },
      { label: "Lidschatten-Verpackung", text: "Paletten und Einzel-Puderdosen." },
      quote,
    ],
  },
  "lip-gloss-packaging": {
    navLabel: "Lipgloss-Verpackung",
    title: "Hersteller individueller Lipgloss-Tuben",
    description: "Lipgloss-Tuben von EHON: transparent, satiniert und dekoriert, mit Schwamm- oder individuellem Applikator, Verschlüssen und Oberflächen.",
    h1: "Lipgloss-Tuben, die die Farbe zeigen und das Finish aushalten.",
    eyebrow: "Lipgloss-Verpackung",
    lead: "Transparente, satinierte oder voll dekorierte Lipgloss-Tuben – spezifiziert mit dem Applikator und Verschluss, den Ihre Formel wirklich braucht.",
    answer: "EHON Packaging fertigt transparente, satinierte und dekorierte Lipgloss-Tuben. Die Marke wählt Füllmenge, Applikator, Verschluss und Oberfläche. Das Muster bestätigt Transparenz, Haftfestigkeit der Dekoration und Applikator-Passung vor der Produktion in Shantou.",
    imageAlt: "Lipgloss-Tuben",
    highlights: [
      { title: "Sichtbarkeit", text: "Transparente und satinierte Optionen, wenn der Ton Teil der Regalstory ist." },
      { title: "Applikator", text: "Doe-Foot-Stäbe und verwandte Varianten, abgestimmt auf die Viskosität." },
      { title: "Dekoration", text: "Druck, Heißprägung und Spray, die die Formel weiter lesbar lassen." },
    ],
    specs: [
      { label: "Optiken", value: "Transparent, satiniert, opak, dekoriert" },
      { label: "Komponenten", value: "Fläschchen, Verschluss, Stab, Wischer" },
      { label: "Einsatz", value: "Lipgloss, Öl, Flüssiglippstift" },
      { label: "Weg", value: "Plattformwerkzeug oder neues Werkzeug" },
    ],
    body: [
      {
        heading: "Material und Oberfläche müssen zusammenpassen",
        paragraphs: [
          "Eine transparente Tube funktioniert nur, wenn das Harz nach dem gewählten Spray oder Druck klar bleibt. EHON wählt Material und Dekorationsweg gemeinsam – einschließlich Optionen mit recyceltem PET in ausgewählten Programmen.",
          "Teilen Sie Füllgewicht, Applikator-Präferenz und ob die Verpackung zu einem Lippenstift oder einer Puderdose derselben Kollektion passen soll.",
        ],
      },
    ],
    faqs: [
      {
        question: "Können Lipgloss-Tuben aus Recyclingmaterial gefertigt werden?",
        answer: "Ausgewählte Programme können recyceltes PET oder PCR nutzen. Die Verfügbarkeit hängt von Transparenz, Dekoration und der von der Formel geforderten Leistung ab. EHON bestätigt das im Angebot.",
      },
      {
        question: "Was unterscheidet eine Stock-Tube von einer individuellen Tube?",
        answer: "Eine Stock-Plattform ändert Farbe, Druck und manchmal den Applikator. Eine individuelle Tube ändert die Form und braucht Werkzeugbau. Beide Wege werden nach Menge und Zeitplan angeboten.",
      },
    ],
    related: [
      { label: "Lippenstift-Verpackung", text: "Etuis für dieselbe Lippenstory." },
      { label: "Materialien", text: "Harze, Transparenz und PCR-Optionen." },
      quote,
    ],
  },
  "eyeshadow-packaging": {
    navLabel: "Lidschatten-Verpackung",
    title: "Hersteller von Lidschatten-Verpackungen",
    description: "Individuelle Lidschatten-Puderdosen und Paletten von EHON, mit Godets, Spiegel, Verschlüssen und dekorativen Oberflächen für Make-up.",
    h1: "Lidschatten-Puderdosen und Paletten mit einem Verschluss, der sich fertig anfühlt.",
    eyebrow: "Lidschatten-Verpackung",
    lead: "Ein-Godet-Puderdosen und Palettenarchitekturen für gepresste Farbe – mit Spiegel, Einsätzen und dem Finish, das die Kampagne verlangt.",
    answer: "EHON Packaging fertigt individuelle Lidschatten-Verpackungen – von der Einzel-Puderdose bis zu palettenartigen Konstruktionen. Die Marke spezifiziert Godet-Anordnung, Spiegel, Verschluss und Dekoration. Formen, Veredelung und Montage erfolgen im Werk Shantou.",
    imageAlt: "Lidschatten-Verpackung",
    highlights: [
      { title: "Anordnung", text: "Ein Godet, Duo oder mehrere – geplant um die Formel." },
      { title: "Verschluss", text: "Scharnier, Magnet oder Klick – spezifiziert nach dem Gewicht der Puderdose." },
      { title: "Innenraum", text: "Spiegel und Einsätze mit Platz für den Tonnamen." },
    ],
    specs: [
      { label: "Formate", value: "Einzel, Duo, Multipan" },
      { label: "Innenraum", value: "Godets, Spiegel, Einsatz" },
      { label: "Außen", value: "Spray, Heißprägung, Druck, Metallisierung" },
      { label: "Verwandt", value: "Gesichts-Puderdosen und loses Puder" },
    ],
    body: [
      {
        heading: "Die Puderdose um die Godets herum bauen",
        paragraphs: [
          "Lidschatten-Verpackung sollte mit Godet-Größe und Tonanzahl beginnen – dann Scharnier und Dekoration. EHON folgt dieser Reihenfolge, damit ein schweres Metallic-Finish nicht mit dem Verschluss kämpft und der Spiegel weiter passt.",
          "Projekte mit gepresstem Puder und Creme-Farbe können die Puderdosen-Familie mit Gesichtsprodukten teilen, wenn die Marke dieselbe Objektsprache will.",
        ],
      },
    ],
    faqs: [
      {
        question: "Können Sie eine Lidschatten-Puderdose mit einer Gesichtspuder-Dose abstimmen?",
        answer: "Ja. Senden Sie beide Produkte in einem Brief, um Maße, Farbe und Oberfläche als Ensemble zu entwickeln – nicht als zwei unverbundene Werkzeuge.",
      },
      {
        question: "Sind Spiegel und Godets enthalten?",
        answer: "Sie können es sein. Nennen Sie Godet-Größe, ob ein Spiegel nötig ist und ob ein Applikator dabei ist, damit das Angebot die komplette Montage abdeckt.",
      },
    ],
    related: [
      { label: "Puderdosen", text: "Puderdosen für gepresstes Gesichtspuder." },
      { label: "Individuelles Design", text: "Form- und Komponentenrichtung." },
      quote,
    ],
  },
  "powder-compacts": {
    navLabel: "Puderdosen",
    title: "Hersteller individueller Puderdosen",
    description: "EHON fertigt individuelle Puderdosen für gepresste Gesichtsprodukte – mit Godet, Spiegel, Verschluss und dekorativen Oberflächen.",
    h1: "Puderdosen für gepresste Farbe und Complexion.",
    eyebrow: "Puderdosen",
    lead: "Kompaktsysteme für Rouge, Bronzer, Highlighter und gepresstes Puder – sodass Godet, Spiegel und Deckel als ein Produkt schließen.",
    answer: "EHON Packaging fertigt individuelle Puderdosen in Shantou für gepresste Gesichtskosmetik. Optionen umfassen Godet-Größe, Spiegel, Scharnier oder Magnetverschluss sowie Oberflächenfinish. Es gibt OEM-Plattformen und neues Werkzeug.",
    imageAlt: "Make-up-Puderdose",
    highlights: [
      { title: "Gepresste Systeme", text: "Godet und Puderdose dimensioniert für die Füllung – nicht umgekehrt." },
      { title: "Deckel-Erlebnis", text: "Spiegel, Taste und Verschluss für wiederholtes Öffnen abgestimmt." },
      { title: "Markenfläche", text: "Matte, metallische, geprägte oder bedruckte Deckel." },
    ],
    specs: [
      { label: "Einsatz", value: "Gepresstes Puder, Rouge, Bronzer" },
      { label: "Innenraum", value: "Godet, Spiegel, Platz für Applikator" },
      { label: "Verschluss", value: "Klick, Scharnier, magnetisch" },
      { label: "Werkumfang", value: "Formen, Dekoration, Montage, QC" },
    ],
    body: [
      {
        heading: "Eine Puderdose ist ein kleines Montageprojekt",
        paragraphs: [
          "Die Deckelgrafik sieht, wer kauft. Scharnier, Stift und Godet halten ein Jahr Öffnungen aus. EHON kalkuliert diese Funktionsteile zusammen mit der Dekoration, damit das freigegebene Muster die Konstruktion ist, die nachbestellt wird.",
          "Loses Puder ist eine andere Verpackung. Wenn die Formel nicht gepresst ist, nutzen Sie die Seite für loses Puder und behalten Sie die Puderdose für gepresste Referenzen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was unterscheidet eine Puderdose von der Verpackung für loses Puder?",
        answer: "Die Puderdose bewahrt ein gepresstes Godet hinter Deckel und Spiegel. Loses Puder nutzt einen Tiegel mit Sieb oder einen ähnlichen Verschluss. EHON fertigt beides – und sie sollten getrennt briefiert werden.",
      },
      {
        question: "Kann der Deckel das Logo in Heißprägung tragen?",
        answer: "Ja, wenn Harz und Untergrund die Folie annehmen. Teilen Sie Logo-Datei und Deckelfarbe, damit EHON Folie, Druck oder Gravur empfiehlt.",
      },
    ],
    related: [
      { label: "Loses Puder", text: "Verpackungen mit Sieb für ungepresstes Puder." },
      { label: "Lidschatten-Verpackung", text: "Farb-Puderdosen derselben Familie." },
      quote,
    ],
  },
  "loose-powder-packaging": {
    navLabel: "Loses Puder",
    title: "Hersteller von Verpackungen für loses Puder",
    description: "Tiegel und Verpackungen mit Sieb für loses Puder von EHON – mit Deckeln, Siftern und dekorativen Oberflächen.",
    h1: "Verpackung für loses Puder mit einem Sieb, das wirklich dosiert.",
    eyebrow: "Loses Puder",
    lead: "Tiegel, Siebe und Überdeckel für loses Gesichtspuder – spezifiziert nach Füllgewicht, Dosis und Deckeloptik.",
    answer: "EHON Packaging fertigt Verpackungen für loses Puder, darunter Tiegel mit Sieb und dekoriertem Überdeckel. Die Marke spezifiziert Füllmenge, Siebtyp, Farbe und Oberfläche. Das Werk in Shantou formt, dekoriert, montiert und prüft vor dem Export.",
    imageAlt: "Verpackung für loses Puder",
    highlights: [
      { title: "Siebkontrolle", text: "Masche und Lochmuster gewählt nach Partikelgröße." },
      { title: "Dichtung", text: "Innendichtung und Deckel-Drehmoment für den Transport gedacht." },
      { title: "Regalpräsenz", text: "Deckel- und Tiegel-Finishes abgestimmt auf die Puderdosen der Linie." },
    ],
    specs: [
      { label: "Format", value: "Tiegel, Sieb, Überdeckel" },
      { label: "Kritisches Teil", value: "Siebmasche und Dichtung" },
      { label: "Dekoration", value: "Spray, Druck, Heißprägung, Metallisierung" },
      { label: "Passt zu", value: "Puderdosen derselben Story" },
    ],
    body: [
      {
        heading: "Zuerst die Dosis, dann die Dekoration",
        paragraphs: [
          "Verpackung für loses Puder wird am sauberen Dosieren gemessen. EHON fragt Pudertyp und Zielfüllung, bevor das Sieb finalisiert wird – und überträgt danach Farbe und Logo der übrigen Gesichtslinie.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann das Sieb individualisiert werden?",
        answer: "Masche und Geometrie können selektiert oder nach dem Puder bearbeitet werden. Beschreiben Sie die gewünschte Dosis, und EHON schlägt ein Start-Sieb für das Muster vor.",
      },
      {
        question: "Ist ein Tiegel für loses Puder dasselbe wie ein Cremetiegel?",
        answer: "Nein. Der Cremetiegel priorisiert Liner und eine weite Öffnung. Der für loses Puder priorisiert das Sieb und eine kontrolliertere Dosis. EHON fertigt sie als getrennte Ensembles.",
      },
    ],
    related: [
      { label: "Puderdosen", text: "Gepresste Formate derselben Range." },
      { label: "Tiegel und Flaschen", text: "Hautpflege- und Hybridverpackungen." },
      quote,
    ],
  },
  "cream-jars-lotion-bottles": {
    navLabel: "Tiegel und Flaschen",
    title: "Hersteller von Cremetiegeln und Lotionflaschen",
    description: "Individuelle Cremetiegel, Lotionflaschen und Skin-Care-Verpackung von EHON – mit Deckeln, Linern, Pumpen und Oberflächen.",
    h1: "Cremetiegel und Lotionflaschen für Skin Care und hybride Beauty.",
    eyebrow: "Tiegel und Flaschen",
    lead: "Tiegel, Flaschen, Deckel und Dosierer für Cremes und Lotionen – mit Finishes, die neben Make-up bestehen können.",
    answer: "EHON Packaging fertigt individuelle Cremetiegel und Lotionflaschen für Skin-Care- und Hybrid-Beauty-Linien. Füllmenge, Hals, Liner, Deckel oder Pumpe sowie Dekoration werden gemeinsam spezifiziert. PCR und recyceltes PET können in ausgewählten Programmen geprüft werden.",
    imageAlt: "Cremetiegel und Lotionflaschen",
    highlights: [
      { title: "Tiegel", text: "Einfach- oder Doppelwandoptik, Liner und Schraubdeckel oder Überdeckel." },
      { title: "Flaschen", text: "Lotionflaschen mit Deckel oder pumpbereitem Hals." },
      { title: "Materialien", text: "Konventionelle Harze plus ausgewählte PCR- und Recycled-PET-Wege." },
    ],
    specs: [
      { label: "Formate", value: "Tiegel, Flasche, Deckel, Pumpenhals" },
      { label: "Skin-Care-Detail", value: "Liner, Dichtung, Dosis" },
      { label: "Materialien", value: "Standardharze, PCR und recyceltes PET auf Anfrage" },
      { label: "Dekoration", value: "Druck, Heißprägung, Spray, Beschichtung" },
    ],
    body: [
      {
        heading: "Auch Skin-Care-Verpackung muss zur Markenwelt gehören",
        paragraphs: [
          "Ein Cremetiegel ist oft der Held einer Pflegelinie und zugleich ein unterstützendes Objekt neben Make-up. EHON entwickelt zuerst Füllmenge und Dichtung, danach Farbe, Transparenz und Oberfläche, damit der Tiegel neben Lippenstift, Lipgloss oder Puderdosen bestehen kann.",
          "Wenn Materialien mit geringerem Impact Pflicht sind, sagen Sie es im Brief. PCR und recyceltes PET stehen in ausgewählten Programmen – und sind nicht automatisch für jedes Harz oder Finish verfügbar.",
        ],
      },
    ],
    faqs: [
      {
        question: "Können Tiegel und Flaschen ein gemeinsames Dekorationssystem teilen?",
        answer: "Ja. EHON kann Spray, Druck und Heißprägung zwischen Tiegel und Flasche abstimmen – innerhalb der Grenzen von Harz und Form. Geben Sie beide am Muster frei.",
      },
      {
        question: "Liefern Sie Pumpen und Deckel?",
        answer: "Deckel und passende Dosierkomponenten können enthalten sein. Beschreiben Sie Dosis und Viskosität, damit Hals und Pumpe als Teil der Verpackung angeboten werden.",
      },
    ],
    related: [
      { label: "Nachhaltige Verpackung", text: "PCR- und Recycled-PET-Optionen." },
      { label: "Zubehör", text: "Pumpen, Deckel und Anschlüsse." },
      quote,
    ],
  },
  accessories: {
    navLabel: "Zubehör",
    title: "Zubehör für Kosmetikverpackungen",
    description: "EHON-Zubehör: Pumpen, Deckel, Applikatoren, Spatel und Komponenten, die eine individuelle Verpackung komplettieren.",
    h1: "Zubehör, das die Verpackung komplett macht.",
    eyebrow: "Zubehör",
    lead: "Pumpen, Deckel, Stäbe, Spatel und Kleinteile – abgestimmt auf die Hauptverpackung und nicht erst in letzter Minute gesucht.",
    answer: "EHON Packaging liefert Zubehör wie Pumpen, Deckel, Applikatorstäbe und Spatel. Die Komponenten werden gewählt, um in Tiegel, Flasche oder Tube zu passen, und werden mit der Hauptverpackung in Shantou veredelt und montiert.",
    imageAlt: "Pumpe und Zubehör für Kosmetikverpackung",
    highlights: [
      { title: "Dosierung", text: "Pumpen und Anschlüsse für Lotionen und Flüssigformate." },
      { title: "Applikation", text: "Stäbe, Spatel und Deckel für Farbe und Haut." },
      { title: "Abstimmung", text: "Farbe und Oberfläche abgestimmt auf die Hauptkomponente." },
    ],
    specs: [
      { label: "Beispiele", value: "Pumpen, Deckel, Stäbe, Spatel" },
      { label: "Regel", value: "Passung bestätigt an der Hauptverpackung" },
      { label: "Finish", value: "Farb- und Dekorationsabstimmung auf Anfrage" },
      { label: "Lieferung", value: "Zusammen mit der Bestellung der Hauptverpackung" },
    ],
    body: [
      {
        heading: "Spezifizieren Sie Zubehör in derselben Anfrage",
        paragraphs: [
          "Ein Pumpenhals, der nur fast passt, tropft oder sitzt locker. EHON bevorzugt, Zubehör mit Tiegel, Flasche oder Tube anzubieten, damit Gewinde, Farbe und Dekoration in einem Musterset freigegeben werden.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann ich nur das Zubehör bestellen?",
        answer: "Manchmal, wenn die Komponente bereits existiert und in Ihre Verpackung passt. Senden Sie die Zeichnung oder ein Muster der Hauptverpackung, damit EHON die Schnittstelle prüft.",
      },
      {
        question: "Stimmt die Farbe des Zubehörs mit der Flasche überein?",
        answer: "Das ist das Ziel. Unterschiedliche Harze nehmen Farbe unterschiedlich auf – deshalb bestätigt EHON die Übereinstimmung an einem physischen Muster.",
      },
    ],
    related: [
      { label: "Tiegel und Flaschen", text: "Hauptverpackungen, die diese Teile komplettieren." },
      { label: "Mascara-Verpackung", text: "Mascara-Stäbe und -Verschlüsse." },
      quote,
    ],
  },
  "oem-odm": {
    navLabel: "OEM / ODM",
    title: "OEM und ODM für Kosmetikverpackungen",
    description: "EHON bietet OEM- und ODM-Kosmetikverpackung aus Shantou: bestehende Plattformen, individuelles Werkzeug, Dekoration, Montage und Exportprüfung seit 1992.",
    h1: "OEM- und ODM-Kosmetikverpackung – vom Brief zur Nachbestellung.",
    eyebrow: "OEM / ODM",
    lead: "Nutzen Sie eine EHON-Plattform, wenn Tempo zählt – oder öffnen Sie neues Werkzeug, wenn die Form die Marke ist.",
    answer: "EHON Packaging bietet OEM- und ODM-Kosmetikverpackung aus dem Werk in Shantou. OEM adaptiert bestehende Werkzeuge mit Farbe, Logo und Oberfläche. ODM und individuelle Entwicklung ergänzen Design und Werkzeugbau. Beide Wege umfassen Muster, Produktion, Dekoration, Montage und Qualitätskontrolle.",
    imageAlt: "Transparente Serie Kosmetikverpackung",
    highlights: [
      { title: "OEM-Plattform", text: "Von einem erprobten Werkzeug starten. Farbe, Dekoration und ausgewählte Teile ändern." },
      { title: "ODM / individuell", text: "Form, Komponenten-Set und Werkzeug für eine eigene Verpackung entwickeln." },
      { title: "Ein Werk", text: "Design-Support, Formen, Dekoration, Montage und Prüfung in Shantou." },
    ],
    specs: [
      { label: "OEM", value: "Bestehendes Werkzeug, individuelles Finish" },
      { label: "ODM", value: "Design plus Fertigung" },
      { label: "Neues Werkzeug", value: "Wird kalkuliert, wenn die Form neu ist" },
      { label: "Lieferung", value: "Dekorierte, montierte und geprüfte Verpackungen" },
    ],
    body: [
      {
        heading: "Wie Sie den Weg wählen",
        paragraphs: [
          "Wählen Sie OEM, wenn die Silhouette aus der Bibliothek von über 1.000 EHON-Designs kommen kann und die Marke in Farbe, Logo und Oberfläche lebt. Wählen Sie ODM oder Full Custom, wenn die Außenform, ein Mechanismus oder eine eigene Komponente Teil des Versprechens ist.",
          "In beiden Fällen braucht das Angebot Produkttyp, geschätzte Menge, Markt, Zeitplan, Materialpräferenzen und Art-Richtung. Das Muster bestätigt, was ein Render nicht kann.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was unterscheidet OEM und ODM bei EHON?",
        answer: "OEM bedeutet Fertigung nach Ihrer Spezifikation – oft auf einer bestehenden Plattform. ODM ergänzt EHON-Design und -Entwicklung vor der Fertigung. Eine neue Außenform erfordert in der Regel Werkzeugbau, unabhängig vom Label.",
      },
      {
        question: "Kann ein Projekt Stock- und individuelle Teile mischen?",
        answer: "Ja. Ein individueller Deckel auf einem bestehenden Tiegel oder ein Stock-Stab in einem neuen Fläschchen ist ein üblicher Brief. EHON prüft die Schnittstelle am Muster.",
      },
    ],
    related: [
      { label: "Individuelles Design", text: "Form- und Komponentenrichtung." },
      { label: "F&E / Werkzeugbau", text: "Wie neue Formen entwickelt werden." },
      quoteBrief,
    ],
  },
  "custom-design": {
    navLabel: "Individuelles Design",
    title: "Individuelles Design für Kosmetikverpackungen",
    description: "Das EHON-Design umfasst Form, Komponenten, Farbe und Funktion für Lippenstift, Lipgloss, Mascara, Puderdosen, Tiegel und Flaschen.",
    h1: "Individuelles Design, das sich formen, dekorieren und nachbestellen lässt.",
    eyebrow: "Individuelles Design",
    lead: "Form, Komponente, Farbe und Funktion werden gegen einen echten Brief gestaltet: Formel, Markt, Kostenband und Launch-Zeitplan.",
    answer: "EHON Packaging gestaltet Kosmetikverpackung für die Produktion – nicht nur für die Präsentation. Der Designschritt definiert Form, Komponenten, Farbe und Funktion und geht dann zur Materialwahl und zum Muster im Werk Shantou.",
    imageAlt: "Rosa Serie Kosmetikverpackung",
    highlights: [
      { title: "Form", text: "Eine Außenform, die entformt, auswirft und dekorierbar ist." },
      { title: "Komponenten", text: "Deckel, Becher, Stäbe, Siebe und Scharniere als System." },
      { title: "Farbstory", text: "Eine Finish-Familie, die sich über die ganze Kollektion erstrecken kann." },
    ],
    body: [
      {
        heading: "Was der Design-Brief enthalten sollte",
        paragraphs: [
          "Produkttyp, Zielmarkt, Füllung oder Minendurchmesser, eine Referenz die Ihnen gefällt, eine die Sie vermeiden wollen, Dekorationsideen und den Mengenrahmen. Diese Daten halten das erste Design in dem, was das Werk bemustern kann.",
          "Die ausgewählten EHON-Kollektionen – darunter transparente, farbige und Bürsten-Serien – zeigen, wie dieselbe Designsprache mehrere Kategorien abdeckt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Braucht man finales Artwork, bevor das Design beginnt?",
        answer: "Nein. Eine Logo-Datei hilft, aber das Design kann von Produkt und gewünschtem Gefühl starten. Dielines und Folien- oder Druckdateien werden vor dekorierten Mustern gebraucht.",
      },
      {
        question: "Kann das Design eine ganze Linie abdecken, nicht nur ein SKU?",
        answer: "Ja. Komplette Sets sind ein zentrales Angebot von EHON. Stellen Sie die ganze Linie im Brief vor, damit Proportionen und Finishes verwandt bleiben.",
      },
    ],
    related: [
      { label: "OEM / ODM", text: "Plattform oder neues Werkzeug wählen." },
      { label: "Lippenstift-Verpackung", text: "Eine zentrale Kategorie ansehen." },
      quoteBrief,
    ],
  },
  "decoration-finishing": {
    navLabel: "Dekoration und Oberflächen",
    title: "Dekoration und Oberflächen für Kosmetikverpackungen",
    description: "Heißprägung, Siebdruck, UV-Metallisierung, Matt, UV-Lack, Verlauf, Transfer und Lasergravur für EHON-Verpackungen.",
    h1: "Dekoration und Oberflächen, die die Verpackung unverkennbar zu Ihrer machen.",
    eyebrow: "Dekoration und Oberflächen",
    lead: "Acht Veredlungswege – gewählt nach Harz und Artwork, nicht als generisches Menü aufgetragen.",
    answer: "EHON Packaging dekoriert im Werk mit Heißprägung, Siebdruck, UV-Metallisierung, Mattfinish, UV-Lack, Verlaufs- und irisierenden Effekten, Wärme- oder Wassertransfer sowie Lasergravur. Das Verfahren wird an Material und Logo-Artwork angepasst und am Muster freigegeben.",
    imageAlt: "Serie dekorierter Kosmetikverpackung",
    highlights: [
      { title: "Heißprägung", text: "Logos und Linien in Folie auf kompatiblen Untergründen." },
      { title: "Siebdruck", text: "Scharfer Druck für Text, Icons und Artwork mit wenigen Farben." },
      { title: "UV-Metallisierung", text: "Metallischer Look, ohne anzunehmen, dass jedes Harz ihn annimmt." },
      { title: "Matt und UV-Lack", text: "Soft-Touch- oder Glanzschichten über der Farbe." },
      { title: "Verlauf / irisierend", text: "Wechselnde Effekte für Fashion-Kollektionen." },
      { title: "Transfer und Laser", text: "Wärme- oder Wassertransfer sowie Lasergravur für dauerhafte Markierungen." },
    ],
    specs: [
      { label: "F01", value: "Heißprägung" },
      { label: "F02", value: "Siebdruck" },
      { label: "F03", value: "UV-Metallisierung" },
      { label: "F04", value: "Mattfinish" },
      { label: "F05", value: "UV-Lack" },
      { label: "F06", value: "Verlauf / irisierend" },
      { label: "F07", value: "Wärme- oder Wassertransfer" },
      { label: "F08", value: "Lasergravur" },
    ],
    body: [
      {
        heading: "Das Finish folgt dem Material",
        paragraphs: [
          "Nicht jeder Effekt passt zu jedem Harz. Eine transparente Lipgloss-Tube, ein matter Puderdosen-Deckel und ein metallisierter Mascara-Verschluss sind unterschiedliche Oberflächen. EHON empfiehlt den Weg nach der Materialwahl und zeigt ihn an einem dekorierten Muster vor der Serie.",
        ],
      },
    ],
    faqs: [
      {
        question: "Können mehrere Finishes auf einer Komponente kombiniert werden?",
        answer: "Oft ja: zum Beispiel Spray plus Heißprägung oder Metallisierung plus ein mattes Fenster. Jeder zusätzliche Prozess betrifft Muster und Kosten – listen Sie den gesamten Stack in der Anfrage.",
      },
      {
        question: "Welches Finish eignet sich für ein kleines Logo?",
        answer: "Heißprägung und Lasergravur sind üblich für kleine Markenzeichen. Siebdruck eignet sich, wenn das Logo eine konkrete Tintfarbe braucht. EHON prüft die Linienstärke an der realen Kurve des Teils.",
      },
    ],
    related: [
      { label: "Materialien", text: "Harze, die diese Finishes annehmen." },
      { label: "Fertigung", text: "Wo die Dekoration im Werk sitzt." },
      quoteBrief,
    ],
  },
  materials: {
    navLabel: "Materialien",
    title: "Materialien für Kosmetikverpackungen",
    description: "EHON wählt Harze, Oberflächen und Applikatoren für Lippenstift, Lipgloss, Mascara, Puderdosen, Tiegel und Flaschen – einschließlich PCR und recyceltem PET in ausgewählten Programmen.",
    h1: "Materialien gewählt für Formel, Finish und Markt.",
    eyebrow: "Materialien",
    lead: "Harz, Transparenz, Dekorationswirkung und Applikator-Kunststoffe werden gegen das Produkt gewählt – nicht aus einer generischen Katalogzeile.",
    answer: "EHON Packaging spezifiziert Materialien während der Entwicklung in Shantou. Die Wahl umfasst Formharze, Transparenz oder Farbe, Dekorationskompatibilität und Applikator-Komponenten. PCR und recyceltes PET sind in ausgewählten Programmen verfügbar, wenn der Brief es verlangt.",
    imageAlt: "Material- und Farbkollektion Kosmetikverpackung",
    highlights: [
      { title: "Haupt-Harze", text: "Gewählt nach Transparenz, Steifigkeit, Scharnierleben oder Chemikalienkontakt." },
      { title: "Farbe", text: "Masterbatch und Spray als Teil des Materialplans betrachtet." },
      { title: "Optionen mit geringerem Impact", text: "PCR und recyceltes PET werden geprüft, wo die Verpackung es zulässt." },
    ],
    body: [
      {
        heading: "Was Sie EHON zum Material sagen sollten",
        paragraphs: [
          "Sagen Sie, ob die Verpackung transparent sein muss, ob sie eine lösemittelreiche Formel berührt, ob ein Scharnier täglich öffnet und ob eine Recycling-Aussage nötig ist. Diese vier Punkte engen das Harz schneller ein als allein ein Handelsname.",
          "Dekoration ist kein getrenntes Thema. Metallisierung, Heißprägung und Satinierung hängen vom Substrat ab. Material und Finish werden gemeinsam freigegeben.",
        ],
      },
    ],
    faqs: [
      {
        question: "Nutzt EHON nur einen Kunststoff?",
        answer: "Nein. Das Harz hängt von der Komponente ab. Ein Scharnier, ein transparentes Fläschchen, ein metallischer Deckel und ein Stab sind selten dasselbe Material. EHON schlägt das Ensemble während der Entwicklung vor.",
      },
      {
        question: "Können Sie ein Material empfehlen, wenn wir nur den Formeltyp kennen?",
        answer: "Ja. Teilen Sie Formel-Kategorie, Füllgröße und die Aussage, die die Verpackung tragen muss. EHON schlägt eine Start-Spezifikation für das Muster vor.",
      },
    ],
    related: [
      { label: "Nachhaltige Verpackung", text: "PCR und recyceltes PET im Detail." },
      { label: "Dekoration und Oberflächen", text: "Was diese Materialien annehmen können." },
      quoteBrief,
    ],
  },
  "sustainable-packaging": {
    navLabel: "Nachhaltige Verpackung",
    title: "Nachhaltige Kosmetikverpackung",
    description: "Die nachhaltigen Optionen von EHON umfassen PCR-Materialien und recyceltes PET in ausgewählten Programmen – mit Designberatung für ressourcenbewusste Marken.",
    h1: "Beauty-Verpackung mit besseren Materialoptionen.",
    eyebrow: "Nachhaltige Verpackung",
    lead: "PCR und recyceltes PET sind bereits in ausgewählten EHON-Programmen – für Marken, die eine bewusstere Verpackung wollen, ohne die Leistung zu raten.",
    answer: "EHON Packaging bietet PCR-Materialien und recyceltes PET in ausgewählten Programmen. Die Optionen sind projektspezifisch: Transparenz, Dekoration und Formelkontakt entscheiden, ob ein Recyclingmaterial geeignet ist. EHON berät zu Material und Oberfläche während des Briefs.",
    imageAlt: "Verpackungskollektion in Materialprogrammen",
    highlights: [
      { title: "PCR-Materialien", text: "Post-Consumer-Recycling-Optionen, wo die Komponente es zulässt." },
      { title: "Recyceltes PET", text: "Wird für ausgewählte transparente Flaschen und Verpackungen geprüft." },
      { title: "Beratung", text: "Material und Oberfläche gegen das reale Projekt gewählt – nicht als generische Aussage." },
    ],
    body: [
      {
        heading: "Was EHON behauptet – und was nicht",
        paragraphs: [
          "Ein Recyclingmaterial ist eine Spezifikation, kein Slogan. EHON bestätigt, ob PCR oder recyceltes PET Transparenz, Farbe, Dekoration und Funktion erfüllen können, bevor es ins Angebot geschrieben wird. Wenn nicht, sagt das Team es und schlägt die nächstliegende, produktionsfähige Alternative vor.",
          "Die Designberatung deckt Material- und Oberflächenwahl nach Projekt ab – einschließlich, wie eine bewusstere Verpackung weiter zur übrigen Color- oder Skin-Care-Linie passt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sind alle EHON-Verpackungen in PCR verfügbar?",
        answer: "Nein. PCR und recyceltes PET stehen in ausgewählten Programmen. Die Antwort hängt von Komponente, Finish und geforderter Leistung ab.",
      },
      {
        question: "Verändert Recyclingmaterial Farbe oder Transparenz?",
        answer: "Es kann sie verändern. Deshalb zeigt EHON das vorgeschlagene Material mit der geplanten Dekoration, bevor Sie die Produktion freigeben.",
      },
    ],
    related: [
      { label: "Materialien", text: "Wie Harze ausgewählt werden." },
      { label: "Tiegel und Flaschen", text: "Ein häufiger Ort, Recyclinganteil zu prüfen." },
      quoteBrief,
    ],
  },
  manufacturing: {
    navLabel: "Fertigung",
    title: "Fertigung von Kosmetikverpackungen",
    description: "Das EHON-Werk in Shantou umfasst Spritzguss, Blasformen, automatische Montage, Druck, Dekoration und Robotik.",
    h1: "Wo die Idee zur serienfähigen Verpackung wird.",
    eyebrow: "Fertigung",
    lead: "Ein Werk in Shantou, Guangdong – mit Formen, Montage, Druck und Dekoration in einer Kosmetikverpackungs-Operation.",
    answer: "EHON Packaging fertigt Kosmetikverpackungen in Shantou, Guangdong, auf einem Gelände von über 40.000 Quadratmetern. Die Kapazitäten umfassen Spritzguss, Blasformen, automatische Montage, Druck, Dekoration und Robotik. Das Unternehmen arbeitet seit 1992.",
    imageAlt: "EHON Packaging Werk in Shantou, Guangdong",
    highlights: [
      { title: "Spritzguss", text: "Deckel, Etuis, Puderdosen und Präzisionskomponenten." },
      { title: "Blasformen", text: "Flaschenformate für Lipgloss, Eyeliner und Lotion." },
      { title: "Automatische Montage", text: "Mehrteilige Verpackungen als System gebaut." },
      { title: "Druck und Dekoration", text: "Veredelung im Werk nach dem Formen." },
      { title: "Robotik", text: "Wiederholbare Handhabung entlang der Produktion." },
    ],
    body: [
      {
        heading: "Ein Standort für Schritte, die Einkäufer oft trennen",
        paragraphs: [
          "Marken verlieren Zeit, wenn Formen, Spray, Heißprägung und Montage in verschiedenen Werkstätten liegen. EHON hält diese Schritte im Shantou-Umfang – sodass Muster und Serienauftrag dieselbe Route folgen.",
          "Die Adresse lautet EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wo liegt das EHON-Werk?",
        answer: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, ZhuJin Industrial Park, LongHu District, Shantou, Guangdong, China.",
      },
      {
        question: "Welche Prozesse sind im Haus?",
        answer: "Spritzguss, Blasformen, automatische Montage, Druck, Dekoration und Robotik gehören zum veröffentlichten Fertigungsumfang.",
      },
    ],
    related: [
      { label: "Werk", text: "Standort und Besuchskontext ansehen." },
      { label: "Qualitätskontrolle", text: "Wie die Ausgabe geprüft wird." },
      quoteBrief,
    ],
  },
  "quality-control": {
    navLabel: "Qualitätskontrolle",
    title: "Qualitätskontrolle für Kosmetikverpackungen",
    description: "Die Qualitätskontrolle von EHON stützt sich auf die Systeme ISO 9001:2015, ISO 14001:2015 und ISO 45001:2018.",
    h1: "Zertifizierte Systeme. Dokumentierte Fertigung.",
    eyebrow: "Qualitätskontrolle",
    lead: "Die Prüfung ist der letzte Schritt im Ablauf – und die Zertifikate sind da, damit der Einkäufer das System dahinter verifizieren kann.",
    answer: "EHON Packaging integriert Qualitätskontrolle in die Verpackungsproduktion in Shantou. Das Unternehmen verfügt über ISO 9001:2015 für Qualitätsmanagement, ISO 14001:2015 für Umweltmanagement und ISO 45001:2018 für Arbeits- und Gesundheitsschutz. Die Prüfung erfolgt vor der Exportverpackung.",
    imageAlt: "ISO-9001-Zertifikat",
    highlights: [
      { title: "ISO 9001:2015", text: "Qualitätsmanagementsystem." },
      { title: "ISO 14001:2015", text: "Umweltmanagementsystem." },
      { title: "ISO 45001:2018", text: "Arbeits- und Gesundheitsschutz." },
    ],
    body: [
      {
        heading: "Was QC bei einem Verpackungsauftrag bedeutet",
        paragraphs: [
          "Bei einer dekorierten Verpackung deckt die Prüfung ab, was der Brief als kritisch markiert hat: Montagepassung, Farbe, Logo-Position, sichtbare Oberflächenfehler und Aufmachung. Die Zertifikate beschreiben das System; Muster und Serienprotokoll beschreiben Ihren Auftrag.",
          "Die Originalabbildungen liegen auf der Zertifikatsseite, damit Einkäufer den Scope lesen – nicht nur einem Siegel vertrauen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Welche ISO-Zertifikate hat EHON?",
        answer: "ISO 9001:2015, ISO 14001:2015 und ISO 45001:2018. Kopien sind auf der Zertifikatsseite zu sehen.",
      },
      {
        question: "Können Einkäufer Qualitätsdokumente einsehen?",
        answer: "Ja. Fordern Sie die benötigten Dokumente mit Ihrer RFQ oder dem Besuchsplan an – EHON teilt die relevanten Unterlagen.",
      },
    ],
    related: [
      { label: "Zertifikate", text: "Abbildungen der Zertifikate ansehen." },
      { label: "Fertigung", text: "Die Produktionsschritte, denen QC folgt." },
      quoteBrief,
    ],
  },
  "rd-tooling": {
    navLabel: "F&E / Werkzeugbau",
    title: "F&E und Werkzeugbau für Kosmetikverpackungen",
    description: "F&E und Werkzeugbau von EHON: individuelle Formen, Muster und 14 Patente für Verpackungsinnovation.",
    h1: "F&E und Werkzeugbau für Verpackungen, die zweimal gefertigt werden müssen.",
    eyebrow: "F&E / Werkzeugbau",
    lead: "Neue Formen werden zu Werkzeugen. Bestehende Plattformen werden zu schnelleren Projekten. Das Muster ist, wo beide Wege bewiesen werden.",
    answer: "EHON Packaging entwickelt Kosmetikverpackung durch Design, Werkzeugbau und Bemusterung in Shantou. Individuelle Formen werden geöffnet, wenn die Form neu ist. Das Unternehmen verfügt über 14 Patente für Verpackungsinnovation und 8 eingetragene Marken.",
    imageAlt: "Produktionsanlagen von EHON",
    highlights: [
      { title: "Werkzeugbau", text: "Neue Formen, wenn eine bestehende Plattform die Form nicht tragen kann." },
      { title: "Bemusterung", text: "Prototyp zur Bestätigung von Optik und Funktion." },
      { title: "Patente", text: "14 Patente für Verpackungsinnovation, plus 8 Marken." },
    ],
    body: [
      {
        heading: "Das Muster ist Teil der Entwicklung – kein Entgegenkommen",
        paragraphs: [
          "Die Werkzeugentscheidung sollte fallen, wenn das Komponenten-Set klar ist: welche Teile neu sind, welche geteilt werden können und welche Dekoration der Stahl erlauben muss. EHON bemustert danach, um Passung, Farbe und Finish vor der Produktion zu bestätigen.",
          "Patent- und Markenregister sind auf der Patentseite zusammengefasst – für Einkäufer, die Innovationsnachweis jenseits eines Moodboards brauchen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wann braucht man ein neues Werkzeug?",
        answer: "Wenn die Außenform oder ein kritischer Mechanismus in den aktuellen EHON-Plattformen nicht existiert. Farbe und der Großteil der Dekoration erfordern kein neues Werkzeug.",
      },
      {
        question: "Wie viele Patente hat EHON?",
        answer: "EHON veröffentlicht 14 Patente für Verpackungsinnovation und 8 eingetragene Marken.",
      },
    ],
    related: [
      { label: "Patente und Innovation", text: "Das Innovationsregister." },
      { label: "OEM / ODM", text: "Plattform versus individuelles Werkzeug." },
      quoteBrief,
    ],
  },
  "our-story": {
    navLabel: "Unsere Geschichte",
    title: "Unsere Geschichte",
    description: "Guangdong EHON Technology Co., Ltd. entwickelt und fertigt seit 1992 Kosmetikverpackungen in Shantou für Beauty-Marken weltweit.",
    h1: "Verpackung, die Teil Ihrer Marke wird.",
    eyebrow: "Unsere Geschichte",
    lead: "Guangdong EHON Technology Co., Ltd. vereint seit 1992 Design, F&E, Fertigung und Vertrieb von Kosmetikverpackungen.",
    answer: "EHON Packaging ist die Marke von Guangdong EHON Technology Co., Ltd., Hersteller von Kosmetikverpackungen, gegründet 1992 in Shantou, Guangdong. Das Unternehmen entwickelt, fertigt und vertreibt Verpackungen für Beauty-Marken – von Lippenstift und Mascara bis zu Tiegeln, Flaschen und Puderdosen.",
    imageAlt: "Showroom von EHON",
    highlights: [
      { title: "1992", text: "Gegründet in Shantou." },
      { title: "Über 40.000 m²", text: "Fertigungswerk." },
      { title: "Über 1.000", text: "Verpackungsdesigns." },
      { title: "Global", text: "Export in die wichtigsten Beauty-Märkte." },
    ],
    body: [
      {
        heading: "Ein Hersteller mit einem Markennamen, den Einkäufer suchen können",
        paragraphs: [
          "EHON ist die Verpackungsmarke. Guangdong EHON Technology Co., Ltd. ist der rechtliche Hersteller. Beide Namen sollten in Verträgen und auf dieser Website stehen, damit Einkauf, Suchmaschinen und KI-Antworten beim selben Unternehmen ankommen.",
          "Die Arbeit blieb spezifisch: Kosmetikverpackung, nicht Kunststoffe allgemein. Deshalb reicht der Katalog von Lippenstift-Mechanismen über Puderdosen und Lipgloss-Tuben bis zu Skin-Care-Tiegeln – mit Dekoration in derselben Operation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie lautet die Firmenbezeichnung?",
        answer: "Guangdong EHON Technology Co., Ltd. Die Marke für Kunden ist EHON Packaging.",
      },
      {
        question: "Wann wurde EHON gegründet?",
        answer: "1992, in Shantou, Guangdong, China.",
      },
    ],
    related: [
      { label: "Werk", text: "Wo die Arbeit stattfindet." },
      { label: "Zertifikate", text: "ISO-Systeme, die man prüfen kann." },
      quoteBrief,
    ],
  },
  factory: {
    navLabel: "Werk",
    title: "EHON-Werk in Shantou",
    description: "Besuchen Sie das EHON-Werk für Kosmetikverpackungen im LongHu District, Shantou: Formen, Montage, Druck, Showroom und Besprechungsräume.",
    h1: "Das Werk in Shantou hinter den Mustern.",
    eyebrow: "Werk",
    lead: "Über 40.000 Quadratmeter im LongHu District – mit Produktion, Showroom und Räumen, in denen der Brief wirklich entschieden wird.",
    answer: "Das EHON-Werk liegt in der EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China. Das Gelände umfasst mehr als 40.000 Quadratmeter und beinhaltet Spritzguss, Blasformen, Montage, Druck, Dekoration, Showroom und Besprechungsräume.",
    imageAlt: "EHON Werksgebäude",
    highlights: [
      { title: "Produktion", text: "Anlagen für Formen, Montage und Dekoration." },
      { title: "Showroom", text: "Kollektionen, die man persönlich prüft." },
      { title: "Besprechungen", text: "Ein Ort, um den Brief mit dem Team zu schließen." },
    ],
    body: [
      {
        heading: "Planen Sie den Besuch um ein Projekt",
        paragraphs: [
          "Ein Werksbesuch lohnt sich mehr mit einem Brief-Entwurf: Kategorien, Mengen und Zielsaison. EHON kann Formen, Dekoration und Showroom gegen diesen Brief führen – statt einer generischen Tour.",
          "Wenn Sie nicht reisen können, läuft dasselbe Gespräch per E-Mail, WhatsApp, WeChat oder Line. Fordern Sie ein Angebot an und legen Sie Referenzen bei.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie lautet die Werksadresse?",
        answer: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China. Telefon +86-754-88608623.",
      },
      {
        question: "Können internationale Einkäufer besuchen?",
        answer: "Ja. Kontaktieren Sie EHON im Voraus mit Ihren Daten und den Verpackungskategorien, die Sie prüfen möchten.",
      },
    ],
    related: [
      { label: "Fertigung", text: "Prozesse vor Ort." },
      { label: "Angebot anfordern", text: "Ein Projektgespräch vereinbaren." },
      quoteBrief,
    ],
  },
  certificates: {
    navLabel: "Zertifikate",
    title: "ISO-Zertifikate",
    description: "Sehen Sie die Zertifikate ISO 9001:2015, ISO 14001:2015 und ISO 45001:2018 des EHON-Werks für Kosmetikverpackungen in Shantou.",
    h1: "Zertifikate, die man öffnen kann – nicht nur Siegel.",
    eyebrow: "Zertifikate",
    lead: "Drei Managementsystem-Zertifikate: Qualität, Umwelt sowie Arbeits- und Gesundheitsschutz.",
    answer: "Guangdong EHON Technology Co., Ltd. veröffentlicht die Zertifikate ISO 9001:2015, ISO 14001:2015 und ISO 45001:2018 für den Betrieb von Kosmetikverpackungen. Die Abbildungen auf dieser Seite sind die Dokumente, die Einkäufer prüfen können.",
    imageAlt: "ISO-14001-Zertifikat",
    highlights: [
      { title: "ISO 9001:2015", text: "Qualitätsmanagement." },
      { title: "ISO 14001:2015", text: "Umweltmanagement." },
      { title: "ISO 45001:2018", text: "Arbeits- und Gesundheitsschutz." },
    ],
    body: [
      {
        heading: "Wie Sie diese Dokumente nutzen",
        paragraphs: [
          "Prüfen Sie Norm, Firmenbezeichnung und Scope gegen Ihre Lieferantenakte. Wenn Ihr Retailer oder Markeninhaber eine konkrete Kopie braucht, fordern Sie sie bei EHON an – das Team sendet die Datei, die zur hier veröffentlichten Abbildung gehört.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sind diese Zertifikate die aktuellen Website-Veröffentlichungen?",
        answer: "Die gezeigten Abbildungen sind die Dokumente, die EHON für ISO 9001:2015, ISO 14001:2015 und ISO 45001:2018 bereitstellt. Bitten Sie das Team um eine datierte Kopie, wenn Sie sie für ein Lieferantenportal brauchen.",
      },
    ],
    related: [
      { label: "Qualitätskontrolle", text: "Wie das System in Aufträgen aussieht." },
      { label: "Unsere Geschichte", text: "Das Unternehmen hinter den Zertifikaten." },
      quoteBrief,
    ],
  },
  "patents-innovation": {
    navLabel: "Patente und Innovation",
    title: "Patente und Innovation",
    description: "EHON verfügt über 14 Patente für Innovation bei Kosmetikverpackungen und 8 eingetragene Marken – mit eigener F&E und eigenem Werkzeugbau.",
    h1: "Vierzehn Patente. Acht Marken. Ein Werk, das sie nutzen kann.",
    eyebrow: "Patente und Innovation",
    lead: "Bei EHON zählt Innovation in Patenten und Marken – und bewährt sich, wenn eine neue Verpackung wirklich geformt und montiert wird.",
    answer: "EHON Packaging verfügt über 14 Patente für Verpackungsinnovation und 8 eingetragene Marken. Die Entwicklung liegt neben der F&E- und Werkzeugkapazität in Shantou, sodass eine neue Struktur von der Idee über das Muster zur Produktion gelangen kann.",
    imageAlt: "Besprechungsraum von EHON",
    highlights: [
      { title: "14", text: "Patente für Verpackungsinnovation." },
      { title: "8", text: "Eingetragene Marken." },
      { title: "Über 30 Jahre", text: "Fertigungserfahrung seit 1992." },
    ],
    body: [
      {
        heading: "Warum die Zahlen auf der Startseite stehen",
        paragraphs: [
          "Wer Verpackungswerke vergleicht, muss Vermarkter von Entwicklern trennen. EHON veröffentlicht Patentanzahl, Markenanzahl und Fertigungsumfang gemeinsam und lädt zu technischen Fragen während der Anfrage ein.",
        ],
      },
    ],
    faqs: [
      {
        question: "Bedeutet ein Patent, dass ich keine ähnliche Verpackung bekommen kann?",
        answer: "Die Patente von EHON schützen Erfindungen von EHON. Ihr individuelles Projekt wird so definiert, dass die freigegebene Verpackung die ist, die geliefert wird. Fragen Sie das Team, wenn Sie über Neuheit bei einem konkreten Mechanismus sprechen müssen.",
      },
    ],
    related: [
      { label: "F&E / Werkzeugbau", text: "Wie neue Formen geöffnet werden." },
      { label: "Unsere Geschichte", text: "Unternehmenshintergrund." },
      quoteBrief,
    ],
  },
};
