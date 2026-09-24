import type { SeoPage } from "./types";

const quote = { href: "/contact/request-a-quote", label: "Request a Quote", text: "Send the brief your sales contact will actually use." };

export const customPages: SeoPage[] = [
  {
    slug: "oem-odm",
    path: "/custom-packaging/oem-odm",
    navLabel: "OEM / ODM",
    title: "Cosmetic Packaging OEM and ODM",
    description:
      "EHON provides OEM and ODM cosmetic packaging from Shantou: existing platforms, custom tooling, decoration, assembly and export inspection since 1992.",
    h1: "OEM and ODM cosmetic packaging, from a brief to a reorder.",
    eyebrow: "OEM / ODM",
    lead: "Use an existing EHON platform when speed matters, or open new tooling when the shape itself is the brand.",
    answer:
      "EHON Packaging offers OEM and ODM cosmetic packaging from its Shantou factory. OEM projects adapt existing molds with color, logo and finishing. ODM and custom projects add design and tooling. Both routes include sampling, production, decoration, assembly and quality control.",
    image: "/assets/series-transparent.jpg",
    imageAlt: "Transparent cosmetic packaging series",
    highlights: [
      { title: "OEM platform", text: "Start from a proven mold. Change color, decoration and selected parts." },
      { title: "ODM / custom", text: "Develop shape, component stack and tooling for a proprietary pack." },
      { title: "One factory", text: "Design support, molding, decoration, assembly and inspection in Shantou." },
    ],
    specs: [
      { label: "OEM", value: "Existing mold, custom finish" },
      { label: "ODM", value: "Design plus manufacturing" },
      { label: "Custom tooling", value: "Quoted when the shape is new" },
      { label: "Output", value: "Decorated, assembled, inspected packs" },
    ],
    body: [
      {
        heading: "How to choose the route",
        paragraphs: [
          "Choose OEM when the silhouette can come from EHON’s library of more than 1,000 packaging designs and the brand lives in color, logo and finish. Choose ODM or full custom when the outer shape, a mechanism or a proprietary component is part of the claim.",
          "Either way the quotation needs product type, estimated quantity, target market, timing, material preferences and artwork direction. Sampling confirms the decisions that a rendering cannot.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between OEM and ODM at EHON?",
        answer:
          "OEM means manufacturing to your specification, often on an existing platform. ODM adds EHON design and development before manufacturing. A new outer shape usually means custom tooling regardless of the label.",
      },
      {
        question: "Can one project mix stock components and custom parts?",
        answer:
          "Yes. A custom cap on an existing jar, or a stock wand in a new bottle, is a normal brief. EHON checks the interface during sampling.",
      },
    ],
    related: [
      { href: "/custom-packaging/custom-design", label: "Custom Design", text: "Shape and component direction." },
      { href: "/capabilities/rd-tooling", label: "R&D / Tooling", text: "How new molds are developed." },
      quote,
    ],
  },
  {
    slug: "custom-design",
    path: "/custom-packaging/custom-design",
    navLabel: "Custom Design",
    title: "Custom Cosmetic Packaging Design",
    description:
      "EHON custom packaging design covers shape, components, color and function for lipstick, gloss, mascara, compacts, jars and bottles.",
    h1: "Custom design that can be molded, decorated and reordered.",
    eyebrow: "Custom design",
    lead: "Shape, component, color and function are designed against a real brief: formula, market, cost band and launch timing.",
    answer:
      "EHON Packaging designs custom cosmetic packaging for production, not only for presentation. The design step defines shape, components, color and function, then moves into material selection and sampling at the Shantou factory.",
    image: "/assets/series-pink.png",
    imageAlt: "Pink cosmetic packaging series",
    highlights: [
      { title: "Shape", text: "Outer form that can draft, eject and decorate." },
      { title: "Components", text: "Caps, cups, wands, sifters and hinges as a system." },
      { title: "Color story", text: "A finish family that can extend across a collection." },
    ],
    body: [
      {
        heading: "What the design brief should contain",
        paragraphs: [
          "Product type, target market, fill or bullet size, a reference you like, a reference you want to avoid, decoration ideas, and the quantity range. Those facts keep the first design inside what the factory can sample.",
          "EHON’s featured collections, including transparent, color and brush-led series, show how one design language can cover several categories.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need finished artwork before design starts?",
        answer:
          "No. A logo file helps, but design can start from the product and the desired feeling. Final dielines and foil or print files are needed before decorated samples.",
      },
      {
        question: "Can design cover a full set, not one SKU?",
        answer:
          "Yes. Complete sets are a core EHON offer. Brief the whole line so proportions and finishes stay related.",
      },
    ],
    related: [
      { href: "/custom-packaging/oem-odm", label: "OEM / ODM", text: "Choose platform or new tooling." },
      { href: "/products/lipstick-packaging", label: "Lipstick Packaging", text: "See a core category." },
      quote,
    ],
  },
  {
    slug: "decoration-finishing",
    path: "/custom-packaging/decoration-finishing",
    navLabel: "Decoration & Finishing",
    title: "Cosmetic Packaging Decoration and Finishing",
    description:
      "Hot stamping, silk screen, UV metallizing, matte finishing, UV coating, gradient, heat transfer and laser engraving for EHON cosmetic packaging.",
    h1: "Decoration and finishing that make the pack unmistakably yours.",
    eyebrow: "Decoration & finishing",
    lead: "Eight core finishing routes, chosen for the resin and the artwork rather than applied as a generic menu.",
    answer:
      "EHON Packaging decorates cosmetic packaging in-house with hot stamping, silk screen printing, UV metallizing, matte finishing, UV coating, gradient and iridescent effects, heat or water transfer, and laser engraving. The process is matched to material and logo artwork, then approved on sample.",
    image: "/assets/series-brush.png",
    imageAlt: "Decorated cosmetic packaging series",
    highlights: [
      { title: "Hot stamping", text: "Foil logos and lines on compatible base coats." },
      { title: "Silk screen", text: "Crisp print for text, icons and limited color art." },
      { title: "UV metallizing", text: "A metallic look without assuming every resin can take it." },
      { title: "Matte & UV coat", text: "Soft-touch or gloss top layers over color." },
      { title: "Gradient / iridescent", text: "Shift effects for fashion-led collections." },
      { title: "Transfer & laser", text: "Heat or water transfer, and laser engraving for permanent marks." },
    ],
    specs: [
      { label: "F01", value: "Hot stamping" },
      { label: "F02", value: "Silk screen printing" },
      { label: "F03", value: "UV metallizing" },
      { label: "F04", value: "Matte finishing" },
      { label: "F05", value: "UV coating" },
      { label: "F06", value: "Gradient / iridescent" },
      { label: "F07", value: "Heat / water transfer" },
      { label: "F08", value: "Laser engraving" },
    ],
    body: [
      {
        heading: "Finish follows material",
        paragraphs: [
          "Not every effect belongs on every resin. A clear gloss tube, a matte compact lid and a metallized mascara cap are different surfaces. EHON recommends the route after the material is chosen, then proves it on a decorated sample before bulk.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can several finishes be combined on one component?",
        answer:
          "Often yes, for example spray plus hot stamp, or metallizing plus a matte window. Each extra process affects sampling and cost, so list the full stack in the RFQ.",
      },
      {
        question: "Which finish is best for a small logo?",
        answer:
          "Hot stamping and laser engraving are common for small marks. Silk screen is useful when the logo needs a specific ink color. EHON checks line weight on the actual curve of the part.",
      },
    ],
    related: [
      { href: "/custom-packaging/materials", label: "Materials", text: "Resins that accept these finishes." },
      { href: "/capabilities/manufacturing", label: "Manufacturing", text: "Where decoration sits in the plant." },
      quote,
    ],
  },
  {
    slug: "materials",
    path: "/custom-packaging/materials",
    navLabel: "Materials",
    title: "Cosmetic Packaging Materials",
    description:
      "EHON selects cosmetic packaging resins, finishes and applicators for lipstick, gloss, mascara, compacts, jars and bottles, including selected PCR and recycled PET.",
    h1: "Materials chosen for the formula, the finish and the market.",
    eyebrow: "Materials",
    lead: "Resin, clarity, impact of decoration and applicator plastics are selected against the product, not from a generic catalog line.",
    answer:
      "EHON Packaging specifies cosmetic packaging materials during development in Shantou. The choice covers resins for molding, clarity or color, compatibility with decoration, and applicator components. PCR and recycled PET are available in selected programs when the brief requires them.",
    image: "/assets/hero-violet.jpg",
    imageAlt: "Cosmetic packaging material and color collection",
    highlights: [
      { title: "Primary resins", text: "Chosen for clarity, stiffness, hinge life or chemical contact." },
      { title: "Color", text: "Masterbatch and spray considered as part of the material plan." },
      { title: "Lower-impact options", text: "PCR and recycled PET reviewed where the pack allows." },
    ],
    body: [
      {
        heading: "What to tell EHON about material",
        paragraphs: [
          "Say whether the pack must be clear, whether it touches a solvent-heavy formula, whether a hinge will be opened daily, and whether a recycled content claim is required. Those four points narrow the resin faster than a trade name alone.",
          "Decoration is not a separate topic. Metallizing, stamping and frosting all depend on the substrate. Material and finish are approved together.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does EHON only use one plastic?",
        answer:
          "No. The resin depends on the component. A hinge, a clear bottle, a metallic cap and a wand are rarely the same material. EHON proposes the set during development.",
      },
      {
        question: "Can you recommend a material if we only know the formula type?",
        answer:
          "Yes. Share formula category, fill size and the claim you need on pack. EHON will propose a starting specification for sampling.",
      },
    ],
    related: [
      { href: "/custom-packaging/sustainable-packaging", label: "Sustainable Packaging", text: "PCR and recycled PET in more detail." },
      { href: "/custom-packaging/decoration-finishing", label: "Decoration & Finishing", text: "What those materials can accept." },
      quote,
    ],
  },
  {
    slug: "sustainable-packaging",
    path: "/custom-packaging/sustainable-packaging",
    navLabel: "Sustainable Packaging",
    title: "Sustainable Cosmetic Packaging",
    description:
      "EHON sustainable cosmetic packaging options include PCR materials and recycled PET in selected programs, with design consultation for resource-conscious beauty brands.",
    h1: "Beauty packaging with better material choices.",
    eyebrow: "Sustainable packaging",
    lead: "PCR and recycled PET are already in selected EHON programs for brands that want a more resource-conscious pack without guessing at performance.",
    answer:
      "EHON Packaging offers PCR materials and recycled PET within selected cosmetic packaging programs. The options are project-specific: clarity, decoration and formula contact decide whether a recycled material is appropriate. EHON consults on material and finish during the brief.",
    image: "/assets/hero-violet.jpg",
    imageAlt: "Cosmetic packaging collection used for material programs",
    highlights: [
      { title: "PCR materials", text: "Post-consumer recycled options where the component allows." },
      { title: "Recycled PET", text: "Considered for selected bottles and clear packs." },
      { title: "Consultation", text: "Material and finish chosen against the real project, not a blanket claim." },
    ],
    body: [
      {
        heading: "What EHON will and will not claim",
        paragraphs: [
          "A recycled material is a specification, not a slogan. EHON confirms whether PCR or recycled PET can meet clarity, color, decoration and functional needs before it is written into a quotation. If it cannot, the team says so and proposes the closest production-ready alternative.",
          "Design consultation covers material and finish selection based on project needs, including how a more resource-conscious pack still matches the rest of a color or skincare line.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is every EHON pack available in PCR?",
        answer:
          "No. PCR and recycled PET are available in selected programs. The answer depends on the component, the finish and the performance required.",
      },
      {
        question: "Will recycled material change the color or clarity?",
        answer:
          "It can. That is why EHON samples the proposed material with the intended decoration before you approve bulk production.",
      },
    ],
    related: [
      { href: "/custom-packaging/materials", label: "Materials", text: "How resins are selected." },
      { href: "/products/cream-jars-lotion-bottles", label: "Cream Jars & Lotion Bottles", text: "A common place to review recycled content." },
      quote,
    ],
  },
];

export const capabilityPages: SeoPage[] = [
  {
    slug: "manufacturing",
    path: "/capabilities/manufacturing",
    navLabel: "Manufacturing",
    title: "Cosmetic Packaging Manufacturing",
    description:
      "EHON’s Shantou factory covers injection molding, blow molding, automated assembly, printing, decoration and robotic handling for cosmetic packaging.",
    h1: "Where ideas become production-ready packaging.",
    eyebrow: "Manufacturing",
    lead: "A modern plant in Shantou, Guangdong, with molding, assembly, printing and decoration under one cosmetic packaging operation.",
    answer:
      "EHON Packaging manufactures cosmetic packaging in Shantou, Guangdong, on a site of more than 40,000 square meters. Capabilities include injection molding, blow molding, automatic assembly, printing, decoration and robotic handling. The company has operated since 1992.",
    image: "/assets/factory-building.jpg",
    imageAlt: "EHON Packaging factory in Shantou, Guangdong",
    highlights: [
      { title: "Injection molding", text: "Caps, cases, compacts and precision components." },
      { title: "Blow molding", text: "Bottle formats for gloss, liner and lotion projects." },
      { title: "Automatic assembly", text: "Multi-part packs built as a system." },
      { title: "Printing & decoration", text: "In-plant finishing after molding." },
      { title: "Robotic handling", text: "Repeatable movement through production." },
    ],
    body: [
      {
        heading: "One site for the steps buyers usually split",
        paragraphs: [
          "Brands lose time when molding, spray, stamping and assembly sit in different workshops. EHON keeps those steps in its Shantou manufacturing scope so a sample and a bulk order follow the same route.",
          "The factory address is EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the EHON factory?",
        answer:
          "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, ZhuJin Industrial Park, LongHu District, Shantou, Guangdong, China.",
      },
      {
        question: "Which processes are in house?",
        answer:
          "Injection molding, blow molding, automatic assembly, printing, decoration and robotic handling are part of the published manufacturing scope.",
      },
    ],
    related: [
      { href: "/about/factory", label: "Factory", text: "See the site and visiting context." },
      { href: "/capabilities/quality-control", label: "Quality Control", text: "How output is inspected." },
      quote,
    ],
  },
  {
    slug: "quality-control",
    path: "/capabilities/quality-control",
    navLabel: "Quality Control",
    title: "Cosmetic Packaging Quality Control",
    description:
      "EHON quality control for cosmetic packaging is backed by ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 management systems.",
    h1: "Certified systems. Documented manufacturing.",
    eyebrow: "Quality control",
    lead: "Inspection is the last step of the workflow, and the certificates are there so buyers can verify the system behind it.",
    answer:
      "EHON Packaging runs quality control as part of cosmetic packaging production in Shantou. The company holds ISO 9001:2015 for quality management, ISO 14001:2015 for environmental management and ISO 45001:2018 for occupational health and safety. Inspection happens before export packing.",
    image: "/assets/cert-9001.jpg",
    imageAlt: "ISO 9001 certificate",
    highlights: [
      { title: "ISO 9001:2015", text: "Quality management system." },
      { title: "ISO 14001:2015", text: "Environmental management system." },
      { title: "ISO 45001:2018", text: "Occupational health and safety." },
    ],
    body: [
      {
        heading: "What QC means on a packaging order",
        paragraphs: [
          "For a decorated pack, inspection covers the points the brief made critical: assembly fit, color, logo position, obvious surface defects and pack-out. The management certificates describe the system; the sample and the bulk record describe your order.",
          "Original certificate images are published on the certificates page so a buyer can read the scope instead of trusting a badge.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which ISO certificates does EHON hold?",
        answer:
          "ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. Copies are shown on the certificates page.",
      },
      {
        question: "Can buyers review quality documents?",
        answer:
          "Yes. Request the documents you need with your RFQ or factory visit plan and EHON will share the relevant records.",
      },
    ],
    related: [
      { href: "/about/certificates", label: "Certificates", text: "View the certificate images." },
      { href: "/capabilities/manufacturing", label: "Manufacturing", text: "The production steps QC follows." },
      quote,
    ],
  },
  {
    slug: "rd-tooling",
    path: "/capabilities/rd-tooling",
    navLabel: "R&D / Tooling",
    title: "Cosmetic Packaging R&D and Tooling",
    description:
      "EHON R&D and tooling for cosmetic packaging: custom molds, sampling and 14 patents across packaging innovation.",
    h1: "R&D and tooling for packs that have to be made twice.",
    eyebrow: "R&D / Tooling",
    lead: "New shapes become molds. Existing platforms become faster projects. Sampling is where both are proven.",
    answer:
      "EHON Packaging develops cosmetic packaging through design, tooling and sampling in Shantou. Custom molds are opened when the shape is new. The company holds 14 patents across packaging innovation and 8 registered trademarks.",
    image: "/assets/production.jpg",
    imageAlt: "EHON production equipment",
    highlights: [
      { title: "Tooling", text: "New molds scoped when an existing platform cannot carry the shape." },
      { title: "Sampling", text: "Prototype to confirm visual and functional details." },
      { title: "Patents", text: "14 patents across packaging innovation, plus 8 trademarks." },
    ],
    body: [
      {
        heading: "Sampling is part of development, not a courtesy",
        paragraphs: [
          "A tooling decision should be made after the component stack is clear: which parts are new, which can be shared, and which decoration the steel must allow. EHON then samples to confirm fit, color and finish before production.",
          "Patent and trademark records are summarized on the patents page for buyers who need innovation evidence beyond a mood board.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is a new mold required?",
        answer:
          "When the outer shape or a critical mechanism does not exist in EHON’s current platforms. Color and most decoration do not require a new mold.",
      },
      {
        question: "How many patents does EHON hold?",
        answer:
          "EHON publishes 14 patents across packaging innovation and 8 registered trademarks.",
      },
    ],
    related: [
      { href: "/about/patents-innovation", label: "Patents & Innovation", text: "The innovation record." },
      { href: "/custom-packaging/oem-odm", label: "OEM / ODM", text: "Platform versus custom tooling." },
      quote,
    ],
  },
];

export const aboutPages: SeoPage[] = [
  {
    slug: "our-story",
    path: "/about/our-story",
    navLabel: "Our Story",
    title: "Our Story",
    description:
      "Guangdong EHON Technology Co., Ltd. has designed and manufactured cosmetic packaging in Shantou since 1992 for beauty brands worldwide.",
    h1: "Packaging made to become part of your brand.",
    eyebrow: "Our story",
    lead: "Guangdong EHON Technology Co., Ltd. has integrated design, R&D, manufacturing and sales of cosmetic packaging since 1992.",
    answer:
      "EHON Packaging is the brand of Guangdong EHON Technology Co., Ltd., a cosmetic packaging manufacturer founded in 1992 in Shantou, Guangdong. The company designs, develops, manufactures and sells packaging for global beauty brands, from lipstick and mascara to jars, bottles and compacts.",
    image: "/assets/showroom.jpg",
    imageAlt: "EHON showroom",
    highlights: [
      { title: "1992", text: "Founded in Shantou." },
      { title: "40,000㎡+", text: "Manufacturing site." },
      { title: "1,000+", text: "Packaging designs." },
      { title: "Global", text: "Exports across major beauty markets." },
    ],
    body: [
      {
        heading: "A manufacturer with a brand name buyers can search",
        paragraphs: [
          "EHON is the packaging brand. Guangdong EHON Technology Co., Ltd. is the legal manufacturer. Both names belong on contracts and on this site so sourcing teams, search engines and AI answers resolve to the same company.",
          "The work has stayed specific: cosmetic packaging, not general plastics. That focus is why the catalog runs from lipstick mechanisms to powder compacts, gloss tubes and skincare jars, with decoration in the same operation.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the legal company name?",
        answer: "Guangdong EHON Technology Co., Ltd. The brand used with customers is EHON Packaging.",
      },
      {
        question: "When was EHON founded?",
        answer: "1992, in Shantou, Guangdong, China.",
      },
    ],
    related: [
      { href: "/about/factory", label: "Factory", text: "Where the work is done." },
      { href: "/about/certificates", label: "Certificates", text: "ISO systems you can verify." },
      quote,
    ],
  },
  {
    slug: "factory",
    path: "/about/factory",
    navLabel: "Factory",
    title: "EHON Factory in Shantou",
    description:
      "Visit the EHON cosmetic packaging factory in LongHu District, Shantou: molding, assembly, printing, showroom and meeting spaces.",
    h1: "The Shantou factory behind the samples.",
    eyebrow: "Factory",
    lead: "More than 40,000 square meters in LongHu District, with production, a showroom and rooms where project briefs actually get decided.",
    answer:
      "The EHON factory is in EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China. The site covers more than 40,000 square meters and includes injection molding, blow molding, assembly, printing, decoration, a showroom and meeting space.",
    image: "/assets/factory-building.jpg",
    imageAlt: "EHON factory building",
    highlights: [
      { title: "Production", text: "Molding, assembly and decoration equipment." },
      { title: "Showroom", text: "Collections reviewed in person." },
      { title: "Meetings", text: "A place to lock a brief with the team." },
    ],
    body: [
      {
        heading: "Plan a visit around a project",
        paragraphs: [
          "A factory visit is most useful with a draft brief: categories, quantities and a target season. EHON can walk molding, decoration and the showroom against that brief instead of offering a generic tour.",
          "If you cannot travel, the same conversation runs by email, WhatsApp, WeChat or Line. Request a quote and attach references.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the factory address?",
        answer:
          "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China. Phone +86-754-88608623.",
      },
      {
        question: "Can international buyers visit?",
        answer:
          "Yes. Contact EHON in advance with your dates and the packaging categories you want to review.",
      },
    ],
    related: [
      { href: "/capabilities/manufacturing", label: "Manufacturing", text: "Processes on site." },
      { href: "/contact/request-a-quote", label: "Request a Quote", text: "Book a project conversation." },
      quote,
    ],
  },
  {
    slug: "certificates",
    path: "/about/certificates",
    navLabel: "Certificates",
    title: "ISO Certificates",
    description:
      "View EHON Packaging ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certificates for the Shantou cosmetic packaging factory.",
    h1: "Certificates you can open, not just badges.",
    eyebrow: "Certificates",
    lead: "Three management-system certificates for quality, environment, and occupational health and safety.",
    answer:
      "Guangdong EHON Technology Co., Ltd. publishes ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certificates for its cosmetic packaging operation. The images on this page are the documents buyers can inspect.",
    image: "/assets/cert-14001.jpg",
    imageAlt: "ISO 14001 certificate",
    highlights: [
      { title: "ISO 9001:2015", text: "Quality management." },
      { title: "ISO 14001:2015", text: "Environmental management." },
      { title: "ISO 45001:2018", text: "Occupational health and safety." },
    ],
    body: [
      {
        heading: "How to use these documents",
        paragraphs: [
          "Check the standard, the company name and the scope against your vendor form. If your retailer or brand owner needs a specific copy, ask EHON and the team will provide the file that matches the image published here.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these certificates current publications on the site?",
        answer:
          "The certificate images shown are the documents EHON provides for ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. Ask the team if you need a dated copy for a vendor portal.",
      },
    ],
    related: [
      { href: "/capabilities/quality-control", label: "Quality Control", text: "How the system shows up on orders." },
      { href: "/about/our-story", label: "Our Story", text: "The company behind the certificates." },
      quote,
    ],
  },
  {
    slug: "patents-innovation",
    path: "/about/patents-innovation",
    navLabel: "Patents & Innovation",
    title: "Patents and Innovation",
    description:
      "EHON holds 14 patents across cosmetic packaging innovation and 8 registered trademarks, backed by in-house R&D and tooling.",
    h1: "Fourteen patents. Eight trademarks. A factory that can use them.",
    eyebrow: "Patents & innovation",
    lead: "Innovation at EHON is counted in patents and trademarks, then proven when a new pack actually molds and assembles.",
    answer:
      "EHON Packaging holds 14 patents across packaging innovation and 8 registered trademarks. Development sits with the Shantou R&D and tooling capability, so a new structure can move from idea to sample to production.",
    image: "/assets/meeting.jpg",
    imageAlt: "EHON meeting room",
    highlights: [
      { title: "14", text: "Patents across packaging innovation." },
      { title: "8", text: "Registered trademarks." },
      { title: "30+ years", text: "Manufacturing experience since 1992." },
    ],
    body: [
      {
        heading: "Why the numbers are on the homepage",
        paragraphs: [
          "Buyers comparing cosmetic packaging factories need a way to separate a trading company from a developer. EHON publishes the patent count, the trademark count and the manufacturing scope together, and invites technical questions during the RFQ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a patent mean I cannot get a similar pack?",
        answer:
          "EHON’s own patents protect EHON inventions. Your custom project is scoped so the pack you approve is the pack supplied to you. Ask the team if you need a novelty discussion for a specific mechanism.",
      },
    ],
    related: [
      { href: "/capabilities/rd-tooling", label: "R&D / Tooling", text: "How new molds are opened." },
      { href: "/about/our-story", label: "Our Story", text: "Company background." },
      quote,
    ],
  },
];

export function getCustom(slug: string) {
  return customPages.find((item) => item.slug === slug);
}
export function getCapability(slug: string) {
  return capabilityPages.find((item) => item.slug === slug);
}
export function getAbout(slug: string) {
  return aboutPages.find((item) => item.slug === slug);
}
