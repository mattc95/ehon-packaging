import type { Locale } from "./i18n";

/** Longest-first phrase map. Source catalog text stays Chinese for /zh. */
const phrases: [string, string][] = [
  [
    "我们可为客户提供产品生产所需的烫金、丝印、热转印、超声波焊接等一系列配套工艺。并有全套完整的外观处理，包含真空镀膜、UV喷漆、磨砂及其它表面处理。",
    "Supporting processes include hot stamping, silk screen, heat transfer and ultrasonic welding, plus vacuum metallizing, UV spray, frosting and other surface finishes.",
  ],
  [
    "此系列以喷漆哑红色为主，其中眼影、粉盒金边为烫亮金效果，唇彩睫毛的中圈、顶片喷镀亮金，搭配红色缎带",
    "This series is mainly matte-red spray. Eyeshadow and powder-compact gold edges use bright-gold hot stamping; lip-gloss and mascara collars and top plates are bright-gold metallized, paired with a red ribbon",
  ],
  [
    "1、可做注塑色、UV、喷漆、喷镀等工艺；印刷可丝印、烫金烫银等；",
    "1. Injection color, UV, spray and metallizing; printing includes silk screen and gold/silver hot stamping; ",
  ],
  [
    "2、图片工艺为：盖、底喷漆哑黑，中圈、中束、顶片镀亮银，配玫红色缎带；",
    "2. Sample shown: matte-black spray cap and base, bright-silver plated collar, mid-band and top plate, with a magenta ribbon; ",
  ],
  ["3、三种口径：11.8mm、12.1mm、12.7mm", "3. Three cup diameters: 11.8 mm, 12.1 mm, 12.7 mm"],
  [
    "图片：盖、底喷漆，中圈、中束喷镀亮金；",
    "Sample shown: cap and base spray-painted, collar and mid-band bright-gold metallized; ",
  ],
  [
    "可注塑、喷漆、UV、喷镀、丝印、烫印等工艺处理；",
    "Available processes include injection color, spray, UV, metallizing, silk screen and hot stamping; ",
  ],
  ["内杯口径Φ11.8mm、Φ12.1mm、Φ12.7mm", "Cup diameters: Ø11.8 mm, Ø12.1 mm, Ø12.7 mm"],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油、喷橡皮漆、镭雕、3D打印等；印刷可烫印、丝印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating, UV topcoat, soft-touch spray, laser engraving and 3D printing; printing includes hot stamping and silk screen.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油、镭雕等；印刷可烫印、丝印、热转印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating, UV topcoat and laser engraving; printing includes hot stamping, silk screen and heat transfer.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油等；印刷可烫印、丝印、热转印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating and UV topcoat; printing includes hot stamping, silk screen and heat transfer.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油等；印刷可烫印、丝印、镭雕、3D打印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating and UV topcoat; printing includes hot stamping, silk screen, laser engraving and 3D printing.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油、3D打印等；印刷可烫印、丝印、镭雕等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating, UV topcoat and 3D printing; printing includes hot stamping, silk screen and laser engraving.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油等；印刷可烫印、丝印、镭雕等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating and UV topcoat; printing includes hot stamping, silk screen and laser engraving.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油、喷橡皮漆等；印刷可烫印、丝印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating, UV topcoat and soft-touch spray; printing includes hot stamping and silk screen.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油、橡皮漆等；印刷可烫印、丝印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating, UV topcoat and soft-touch lacquer; printing includes hot stamping and silk screen.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油、镭雕等；印刷可烫印、丝印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating, UV topcoat and laser engraving; printing includes hot stamping and silk screen.",
  ],
  [
    "颜色和LOGO可按客户要求制作；表面加工处理可真空镀膜、喷涂、UV罩光油等；印刷可烫印、丝印等。",
    "Color and logo can be customized. Surface finishes include vacuum metallizing, spray coating and UV topcoat; printing includes hot stamping and silk screen.",
  ],
  [
    "颜色和LOGO可按客户要求制作；印刷可烫印、丝印等。",
    "Color and logo can be customized. Printing includes hot stamping and silk screen.",
  ],
  [
    "玻璃瓶，盖子颜色和LOGO可按客户要求制作",
    "Glass bottle; cap color and logo can be customized",
  ],
  [
    "电化铝盖子，吹瓶颜色和LOGO可按客户要求制作",
    "Anodized-aluminum cap; blown-bottle color and logo can be customized",
  ],
  ["电化铝盖子", "Anodized-aluminum cap"],
  ["可根据客人要求注塑任意颜色", "Injection color can be customized"],
  ["商标可丝印、烫金烫印等", "Logo can be silk-screened or hot-stamped"],
  ["产品颜色、尺寸可以根据客户的要求制作。", "Color and size can be customized."],
  ["颜色、尺寸可以根据客户的要求制作。", "Color and size can be customized."],
  ["颜色可做肤色或白色；尺寸可根据客户要求制作。", "Color can be skin-tone or white; size can be customized."],
  ["粉扑可做肤色或白色；尺寸可以根据客户的要求制作。", "Puff can be skin-tone or white; size can be customized."],
  ["尺寸可以根据客户的要求制作。", "Size can be customized."],
  ["内杯口径有11.8mm、12.1mm、12.7mm三种可选。", "Cup diameters: 11.8 mm, 12.1 mm and 12.7 mm."],
  ["内杯口径有11.8mm、12.1mm、12.7mm三种。", "Cup diameters: 11.8 mm, 12.1 mm and 12.7 mm."],
  ["内杯口径有11.8mm、12.1mm、12.7mm", "Cup diameters: 11.8 mm, 12.1 mm and 12.7 mm"],
  ["内径有11.8mm、12.1mm12.7mm三种。", "Inner diameters: 11.8 mm, 12.1 mm and 12.7 mm."],
  ["内杯口径：11.8mm、12.1mm、12.7mm", "Cup diameters: 11.8 mm, 12.1 mm, 12.7 mm"],
  ["内杯口径约6.3mm", "Cup diameter approx. 6.3 mm"],
  ["中束有平口、斜口两种。", "Mid-band available in straight or slanted opening."],
  ["中格有两种尺寸。", "Pan well available in two sizes."],
  ["（配铝中束）", " (with aluminum mid-band)"],
  ["盖（PP）/瓶（PE）/内塞（PP）", "Cap (PP) / bottle (PE) / wiper (PP)"],
  ["盖(AS)/底(ABS)", "Cap (AS) / base (ABS)"],
  ["盖（ABS）、瓶（PETG/AS）、刷杆（POM）、内塞（LDPE）", "Cap (ABS), bottle (PETG/AS), brush stem (POM), wiper (LDPE)"],
  ["中节为电化铝材质", "Mid-section is anodized aluminum"],
  ["盖材质为电化铝。", "Cap material: anodized aluminum."],
  ["盖为电化铝材质。", "Cap is anodized aluminum."],
  ["盖为电化铝。", "Cap is anodized aluminum."],
  ["电化铝盖。", "Anodized-aluminum cap."],
  ["电化铝盖", "Anodized-aluminum cap"],
  ["塑料盖", "Plastic cap"],
  ["PETG材质", "PETG"],
  ["PET瓶", "PET bottle"],
  ["材料：PETG", "Material: PETG"],
  ["材料：盖ABS、瓶PETG/AS、刷杆POM、内塞LDPE", "Material: cap ABS, bottle PETG/AS, brush stem POM, wiper LDPE"],
  ["材质：盖ABS、瓶PETG/AS、刷杆POM、内塞LDPE", "Material: cap ABS, bottle PETG/AS, brush stem POM, wiper LDPE"],
  ["瓶子为玻璃瓶", "Glass bottle"],
  ["瓶：玻璃", "Bottle: glass"],
  ["盖子", "cap"],
  ["吹瓶", "blown bottle"],
  ["盖", "Cap"],
  ["底", "Base"],
  ["瓶", "Bottle"],
  ["可提供搭配铝盘、粉扑、刷子。", "Aluminum pans, puffs and brushes available."],
  ["可配铝盘、粉扑", "Optional aluminum pan and puff"],
  ["可配铝盘", "Optional aluminum pan"],
  ["铝盘，刷子，粉扑", "Aluminum pan, brush, puff"],
  ["铝盘、刷子等", "Aluminum pans, brushes, etc."],
  ["铝盘、粉扑", "Aluminum pan, puff"],
  ["铝盘，粉扑", "Aluminum pan, puff"],
  ["铝盘、刷子", "Aluminum pan, brush"],
  ["铝盘，刷子", "Aluminum pan, brush"],
  ["铝盘/刷子", "Aluminum pan / brush"],
  ["铝盘,刷子", "Aluminum pan, brush"],
  ["粉扑,铝盘", "Puff, aluminum pan"],
  ["粉扑，海绵", "Puff, sponge"],
  ["刷子、海绵", "Brush, sponge"],
  ["刷杆PP", "Brush stem: PP"],
  ["满口水溶 OFC", "Overflow (OFC)"],
  ["灌装水溶 VOL", "Fill (VOL)"],
  ["紫罗兰色口红管系列", "Violet Lipstick series"],
  ["紫晶睫毛瓶系列", "Amethyst Mascara series"],
  ["翡翠眼线瓶系列", "Jade Eyeliner series"],
  ["蓝色乳液瓶系列", "Blue Lotion Bottle series"],
  ["亮银钻石系列", "Silver Diamond series"],
  ["方形亮银系列", "Square Bright Silver series"],
  ["方形哑红系列", "Square Matte Red series"],
  ["哑金缎带系列", "Matte Gold Ribbon series"],
  ["喷镀哑蓝色系列", "Matte Blue Metallized series"],
  ["哑蓝配哑银系列", "Matte Blue & Matte Silver series"],
  ["镀哑绿色系列", "Matte Green Plated series"],
  ["深浅蓝色系列", "Two-Tone Blue series"],
  ["渐变闪粉系列", "Gradient Glitter series"],
  ["渐变粉色系列", "Gradient Pink series"],
  ["渐变粉系列", "Gradient Pink series"],
  ["镀浅紫系列", "Light Purple Plated series"],
  ["哑光紫色系列", "Matte Purple series"],
  ["哑光紫系列", "Matte Purple series"],
  ["哑黑色系列", "Matte Black series"],
  ["哑黑纹路系列", "Matte Black Texture series"],
  ["镭雕散粉盒", "Laser-engraved Loose Powder Compact"],
  ["散粉盒系列", "Loose Powder Compact series"],
  ["气垫盒系列", "Cushion Compact series"],
  ["气垫粉盒", "Cushion Compact"],
  ["护肤瓶套装", "Skincare Bottle Set"],
  ["螺丝钢刷头", "Screw-in Steel Brush"],
  ["UV渐变系列", "UV Gradient series"],
  ["镀渐变系列", "Gradient Plated series"],
  ["撞粉色系列", "Color-block Pink series"],
  ["哑粉色系列", "Matte Pink series"],
  ["镀枪色系列", "Gunmetal Plated series"],
  ["湖蓝色系列", "Lake Blue series"],
  ["草绿色系列", "Grass Green series"],
  ["樱桃红系列", "Cherry Red series"],
  ["米白色系列", "Off-White series"],
  ["镀紫色系列", "Purple Plated series"],
  ["镀玫红系列", "Magenta Plated series"],
  ["镀绿色系列", "Green Plated series"],
  ["紫红色系列", "Magenta-Purple series"],
  ["玫红色系列", "Magenta series"],
  ["米黄色系列", "Beige series"],
  ["幻彩系列", "Iridescent series"],
  ["墨绿色系列", "Dark Green series"],
  ["珍珠白系列", "Pearl White series"],
  ["珠光红系列", "Pearl Red series"],
  ["亮棕色系列", "Bright Brown series"],
  ["亮紫色系列", "Bright Purple series"],
  ["亮蓝色系列", "Bright Blue series"],
  ["哑蓝色系列", "Matte Blue series"],
  ["橙金系列", "Orange Gold series"],
  ["大刷头系列", "Large Brush series"],
  ["红黄系列", "Red & Yellow series"],
  ["红白系列", "Red & White series"],
  ["黑白系列", "Black & White series"],
  ["浅蓝系列", "Light Blue series"],
  ["唇彩系列", "Lip Gloss series"],
  ["粉盒系列", "Powder Compact series"],
  ["哑黑系列", "Matte Black series"],
  ["亮银系列", "Bright Silver series"],
  ["黑色系列", "Black series"],
  ["透明系列", "Clear series"],
  ["枪色系列", "Gunmetal series"],
  ["蓝色系列", "Blue series"],
  ["哑金系列", "Matte Gold series"],
  ["亮金系列", "Bright Gold series"],
  ["紫色系列", "Purple series"],
  ["渐变系列", "Gradient series"],
  ["哑灰系列", "Matte Grey series"],
  ["哑红系列", "Matte Red series"],
  ["红色系列", "Red series"],
  ["银色系列", "Silver series"],
  ["白色系列", "White series"],
  ["编号", "Code"],
  ["箱规", "Carton"],
  ["纸箱", "Carton"],
  ["配件", "Components"],
  ["材质", "Material"],
  ["刷杆", "Brush stem"],
  ["内塞", "Wiper"],
  ["内杯", "Inner cup"],
  ["中圈", "Collar"],
  ["中束", "Mid-band"],
  ["底片", "Bottom plate"],
  ["开口", "Opening"],
  ["螺旋", "Screw"],
  ["泵头", "Pump"],
  ["铝盘", "Aluminum pan"],
  ["铝盖", "Aluminum cap"],
  ["粉扑", "Puff"],
  ["刷子", "Brush"],
  ["海绵", "Sponge"],
  ["玻璃珠", "Glass beads"],
  ["钢珠", "Steel ball"],
  ["电化铝", "Anodized aluminum"],
  ["玻璃", "Glass"],
];

const sortedPhrases = [...phrases].sort((a, b) => b[0].length - a[0].length);

export function catalogText(text: string, locale: Locale): string {
  if (!text) return text;
  const normalized = text.replace(/\r\n/g, "\n").replace(/\u00a0/g, " ");
  if (locale === "zh") return normalized;
  let out = normalized;
  for (const [zh, en] of sortedPhrases) {
    if (out.includes(zh)) out = out.split(zh).join(en);
  }
  return out
    .replace(/；/g, "; ")
    .replace(/、/g, ", ")
    .replace(/，/g, ", ")
    .replace(/。/g, ". ")
    .replace(/：/g, ": ")
    .replace(/:(\S)/g, ": $1")
    .replace(/（/g, "(")
    .replace(/）/g, ")")
    .replace(/\n+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])\(/g, "$1 (")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([,.;])/g, "$1")
    .replace(/([,.;]){2,}/g, "$1")
    .trim();
}
