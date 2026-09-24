import type { ArticleCopy, ModelCopy } from "./types";

export const models: Record<string, ModelCopy> = {
  "magnetic-slim-lipstick": {
    title: "磁吸细管口红",
    description: "亿宏磁吸细管口红，可在现有平台或新模具上定制颜色、Logo 和表面处理。",
    imageAlt: "磁吸细管口红",
    summary: "磁吸闭合的细管口红，适合想要安静、高级手感和装饰外壳的品牌。",
    specs: [
      { label: "形式", value: "细管，磁吸闭合" },
      { label: "可定制", value: "颜色、Logo、喷涂、烫金" },
      { label: "路径", value: "OEM 平台或定制模具" },
    ],
    paragraphs: [
      "亿宏在汕头把这支口红作为外壳、机构和装饰的一套来制造。请告知膏体尺寸、数量和想要的表面，团队会确认现有模具能否承载。",
      "颜色和 Logo 在装饰量产前用实物样品确认。同一套表面语言可以延伸到同系列的唇釉和粉盒。",
    ],
  },
  "square-lipstick-case": {
    title: "方管口红",
    description: "几何分明的方管口红，可定制颜色以及烫金或印刷，由亿宏制造。",
    imageAlt: "方管口红包装",
    summary: "比方圆管更有建筑感的方管结构，适合想要这种轮廓的唇部线。",
    specs: [
      { label: "形式", value: "方管" },
      { label: "可定制", value: "树脂颜色、Logo、表面处理" },
      { label: "打样时检查", value: "中束配合与棱边装饰" },
    ],
    paragraphs: [
      "方形会改变烫金和喷涂在棱边上的断裂方式。亿宏打的是装饰后的管子，而不只是素坯，Logo 位置在真实零件上得到验证。",
    ],
  },
  "bump-pink-series": {
    title: "Bump Pink 系列",
    description: "亿宏 Bump Pink 系列，一套协调的粉色化妆品包材。",
    imageAlt: "Bump Pink 化妆品包材系列",
    summary: "系列 077。给唇部和彩妆线用的粉色家族，多个零件共用一种表面。",
    specs: [
      { label: "系列", value: "077 Bump Pink 系列" },
      { label: "外观", value: "协调的粉色与表面" },
      { label: "用途", value: "唇部与彩妆套装" },
    ],
    paragraphs: [
      "Bump Pink 说明一种色彩如何把一套产品拢在一起。请告知系列里的 SKU，亿宏会确认哪些零件可以共用表面。",
    ],
  },
  "classic-mascara-tube": {
    title: "经典睫毛膏管",
    description: "亿宏在汕头制造的睫毛膏管、盖与刷杆系统。",
    imageAlt: "经典睫毛膏管",
    summary: "管和盖配匹配的刷杆，容量、密封和装饰一起定规格。",
    specs: [
      { label: "零件", value: "管、盖、刷杆、刮片" },
      { label: "可定制", value: "容量、颜色、印刷、烫金" },
      { label: "样品检查", value: "密封、涂抹头配合、图稿" },
    ],
    paragraphs: [
      "刷杆是包装的一部分，不是事后再加的配件。请告知配方类型和目标宣称，刮片和刷头会与管子一起报价。",
    ],
  },
  "big-brush-series": {
    title: "Big Brush 系列",
    description: "亿宏 Big Brush 系列，以涂抹头为主角的睫毛膏与眼部包材。",
    imageAlt: "Big Brush 化妆品包材系列",
    summary: "系列 078。刷头就是产品故事时，用涂抹头来主导的睫毛膏与眼部包装。",
    specs: [
      { label: "系列", value: "078 Big Brush 系列" },
      { label: "重点", value: "刷杆与管子作为一套" },
      { label: "装饰", value: "表面与涂抹头故事匹配" },
    ],
    paragraphs: [
      "当涂抹头就是卖点时用这个系列。亿宏在同一件样品上确认刷杆配合、管身装饰和盖色。",
    ],
  },
  "liquid-eyeliner-bottle": {
    title: "眼线液瓶",
    description: "亿宏眼线液瓶与盖，笔头配合和装饰适合眼部系列。",
    imageAlt: "眼线液瓶",
    summary: "眼线液的瓶、盖和笔头组合，适合需要可控笔触和完成感瓶盖的配方。",
    specs: [
      { label: "形式", value: "眼线液瓶" },
      { label: "关键配合", value: "笔头、盖、密封" },
      { label: "可搭配", value: "同一表面的睫毛膏管" },
    ],
    paragraphs: [
      "先简报配方类型，再谈图稿。亿宏先锁定笔头和盖，再套用眼部线其余产品的色彩系统。",
    ],
  },
  "clear-lip-gloss-tube": {
    title: "透明唇釉管",
    description: "亿宏制造并装饰的透明与磨砂唇釉管，配海绵头。",
    imageAlt: "透明唇釉管",
    summary: "让色号可见的透明唇釉管，盖、刷杆和装饰作为一套来定。",
    specs: [
      { label: "外观", value: "透明、磨砂或装饰" },
      { label: "涂抹头", value: "海绵头与刮片" },
      { label: "材料", value: "以透明度优先的树脂；选定项目可用再生 PET" },
    ],
    paragraphs: [
      "装饰如果把树脂打雾，透明就没有意义。亿宏把材料和印刷或烫金一起选，再在样品上确认清澈度。",
    ],
  },
  "transparent-series": {
    title: "Transparent 系列",
    description: "亿宏 Transparent 系列，一套覆盖唇釉及相关零件的透明包材。",
    imageAlt: "亿宏透明包材系列",
    summary: "系列 079。让配方颜色成为物件一部分的透明包装系统。",
    specs: [
      { label: "系列", value: "079 Transparent 系列" },
      { label: "外观", value: "透明零件，表面协调" },
      { label: "延伸", value: "唇釉及相关 SKU 同属一个家族" },
    ],
    paragraphs: [
      "Transparent 系列是一套系统，不是一只瓶子。亿宏可以把透明语言延伸到您真正上市的 SKU，只在 Logo 需要落位的地方做装饰。",
    ],
  },
  "single-eyeshadow-compact": {
    title: "单色眼影盒",
    description: "亿宏单色眼影盒，含镜子和可定制的盖面处理。",
    imageAlt: "单色眼影盒",
    summary: "带镜子和闭合的单色眼影盒，盖面可以跟上更宽的色彩故事。",
    specs: [
      { label: "布局", value: "单格" },
      { label: "内部", value: "粉盘、镜子" },
      { label: "外部", value: "喷涂、烫金、印刷或电镀" },
    ],
    paragraphs: [
      "从粉盘尺寸开始。亿宏再配铰链或磁铁和镜子，让较重的盖面仍然能干净闭合。",
    ],
  },
  "round-powder-compact": {
    title: "圆形粉饼盒",
    description: "亿宏圆形压制粉盒，含铝盘、镜子和装饰盖。",
    imageAlt: "圆形粉饼盒",
    summary: "用于粉饼、腮红或修容的圆盒，含铝盘、镜子和可以承载品牌的盖。",
    specs: [
      { label: "用途", value: "粉饼、腮红、修容" },
      { label: "内部", value: "铝盘与镜子" },
      { label: "闭合", value: "铰链或磁吸" },
    ],
    paragraphs: [
      "盖是品牌表面。铰链和铝盘才是返单时还在的部分。亿宏把它们一起打样。",
    ],
  },
  "sifter-loose-powder-jar": {
    title: "带筛网的散粉罐",
    description: "亿宏成型并装饰的散粉罐，含筛网和外盖。",
    imageAlt: "带筛网的散粉罐",
    summary: "筛网出粉量按粉末来选，再把表面做成与粉盒线一致。",
    specs: [
      { label: "形式", value: "罐、筛网、外盖" },
      { label: "关键零件", value: "筛网与密封" },
      { label: "不同于", value: "膏霜瓶或压制粉盒" },
    ],
    paragraphs: [
      "请先描述粉末手感和灌装重量。亿宏建议筛网，再做盖色和 Logo。",
    ],
  },
  "double-wall-cream-jar": {
    title: "双层膏霜瓶",
    description: "护肤与跨界美妆用的定制膏霜瓶，含内胆、盖和亿宏的表面处理。",
    imageAlt: "膏霜瓶",
    summary: "带内胆和盖的膏霜瓶，可以放在彩妆旁边，也可以领一条护肤线。",
    specs: [
      { label: "形式", value: "膏霜瓶与盖" },
      { label: "细节", value: "内胆、密封、容量" },
      { label: "材料", value: "标准树脂；简报允许时可用 PCR 或再生 PET" },
    ],
    paragraphs: [
      "容量和密封先于战役表面。若再生含量声明重要，请写进询盘，亿宏才能确认这只瓶子能否承载。",
    ],
  },
  "lotion-bottle": {
    title: "乳液瓶",
    description: "亿宏为护肤线制造的乳液瓶，可配盖或预留泵口。",
    imageAlt: "乳液与膏霜包装",
    summary: "瓶口可接盖或泵头的乳液瓶，装饰系统与膏霜瓶一致。",
    specs: [
      { label: "形式", value: "瓶" },
      { label: "瓶口", value: "可接盖或泵头" },
      { label: "表面处理", value: "印刷、喷涂、烫金、涂层" },
    ],
    paragraphs: [
      "泵头要和瓶子一起报价。瓶口只是差不多，组装后会漏或歪。",
    ],
  },
  "lotion-pump": {
    title: "乳液泵头",
    description: "与亿宏膏霜瓶、乳液瓶匹配的泵头和配合件。",
    imageAlt: "化妆品泵头",
    summary: "按主包装的瓶口、剂量和颜色来定的泵头。",
    specs: [
      { label: "角色", value: "分配配合件" },
      { label: "匹配", value: "瓶口、剂量、颜色" },
      { label: "供货", value: "与主包材一起报价" },
    ],
    paragraphs: [
      "请发送瓶子图纸，或请亿宏同时供应两者。配件与罐或瓶在同一组样品上确认。",
    ],
  },
};

export const articles: Record<string, ArticleCopy> = {
  "choose-a-cosmetic-jar": {
    title: "高端护肤线如何选择膏霜瓶",
    description: "向包材工厂采购定制膏霜瓶时，关于容量、内胆、盖和表面的采购指南。",
    imageAlt: "膏霜瓶",
    blocks: [
      { paragraphs: ["从配方往外选瓶子。容量、内胆和密封决定包装能不能用。盖的颜色决定它像不像您的品牌。"] },
      { heading: "容量和瓶口", paragraphs: ["厚霜需要手指或刮勺真正伸得进去的瓶口。清爽乳液也许更适合瓶子。在按参考照片锁定直径之前，先告诉亿宏灌装重量，以及消费者如何取用。"] },
      { heading: "内胆和盖", paragraphs: ["内胆保护配方和螺纹。盖承载喷涂、烫金或印刷。请把它们作为一套组装来确认。漂亮的盖配错内胆，不是完成的包装。"] },
      { heading: "表面和系列的其余部分", paragraphs: ["如果膏霜瓶要和乳液瓶或彩妆粉盒放在一起，请把这些参考一起发来。只有树脂允许时，亿宏才会让零件之间的装饰对齐，并在样品上展示差异。", "选定的膏霜瓶项目可以评估 PCR 或再生 PET。请写在同一份简报里，让它被报价，而不是事后变成一句口号。"] },
    ],
  },
  "custom-lip-gloss-tubes": {
    title: "定制唇釉管：材料、涂抹头、装饰与打样",
    description: "如何向亿宏指定一支定制唇釉管，从透明度和刷头，到装饰以及应该确认的样品。",
    imageAlt: "唇釉包装",
    blocks: [
      { paragraphs: ["一支唇釉管要让色号看得见，也要经得起灌装、运输和手袋。材料、涂抹头和装饰应作为同一个决定来定。"] },
      { heading: "材料", paragraphs: ["透明和磨砂树脂是常见起点。选定项目在透明度仍然满足简报时，可以使用再生 PET。请说明配方是唇釉、唇油还是液体唇膏，因为接触和黏度会改变刷杆和刮片。"] },
      { heading: "涂抹头", paragraphs: ["海绵头很常见，但不是万能的。请描述希望的剂量。亿宏把瓶口、刮片和刷杆一起检查，这样您确认的涂抹头就是出货的那一支。"] },
      { heading: "装饰", paragraphs: ["如果料体颜色是重点，印刷和烫金必须给管子留下足够的透明区域。全喷涂会把它变成不透明的故事。两种都成立。它们不是同一个产品。", "打样应包含装饰后的管子，而不是素瓶再加一份单独的图稿 PDF。这才是亿宏在生产前使用的确认件。"] },
    ],
  },
  "approve-packaging-components": {
    title: "确认化妆品包材零件之前要核对什么",
    description: "美妆品牌与制造商确认管壳、管子、粉盒、膏霜瓶和配件时的技术清单。",
    imageAlt: "化妆品包材零件",
    blocks: [
      { paragraphs: ["确认的应是您以后会返单的零件。一只素坯和一张装饰效果图都不是那个零件。"] },
      { heading: "配合", paragraphs: ["在真实零件上检查螺纹、中束、刮片、铰链、筛网和泵头。如果配件来自同一家工厂，请在主包材上确认它。"] },
      { heading: "外观", paragraphs: ["喷涂、电镀或烫金之后，颜色、光泽和 Logo 位置会移动。请在装饰样品上签字。用名称记下工艺：烫金、丝印、UV 电镀、雾面、UV 涂层、渐变、转印或激光。"] },
      { heading: "文件", paragraphs: ["亿宏已公布的体系是 ISO 9001:2015、ISO 14001:2015 和 ISO 45001:2018。向零售商门户索取所需副本，并把确认样品留作大货的品质基准。"] },
    ],
  },
  "brief-an-oem-factory": {
    title: "全球美妆品牌如何向 OEM 包材工厂做简报",
    description: "第一份化妆品包材简报里该写什么，亿宏才能报价 OEM 或 ODM，而不必再猜一轮。",
    imageAlt: "亿宏展厅",
    blocks: [
      { paragraphs: ["有用的包材简报短而具体。第一封说明写清产品、市场、数量区间，以及外形是否必须是新的，亿宏就能更快报价。"] },
      { heading: "从配方开始，而不是从情绪板开始", paragraphs: ["请说明是口红、唇釉、睫毛膏、眼线、压制粉、散粉、霜还是乳液。如果知道，加上灌装重量或膏体尺寸。效果图有帮助，但零件堆叠更重要：管壳、管子、粉盒、罐或瓶，以及泵头、刷杆或筛网。"] },
      { heading: "把平台和新开模具分开", paragraphs: ["如果亿宏现有模具能做这个项目，变量就是颜色、Logo 和表面。如果轮廓本身就是品牌，请说明需要定制模具。把两条路写在同一句话里，是报价走偏的常见原因。"] },
      { heading: "在同一封邮件里提出表面处理", paragraphs: ["烫金、丝印、电镀、雾面、UV、渐变、转印和激光雕刻不能互相替换。列出想要的效果并附上 Logo。亿宏按树脂匹配工艺，再在样品上证明。", "简报可通过询价表、WhatsApp、微信或 Line 发送。只有真正有目标季节时，才写上季节。"] },
    ],
  },
  "pcr-and-recycled-pet": {
    title: "化妆品包材中的 PCR 与再生 PET",
    description: "在罐子、瓶子或管子上指定 PCR 或再生 PET 之前，美妆采购应问亿宏什么。",
    imageAlt: "化妆品包材系列",
    blocks: [
      { paragraphs: ["亿宏可以为选定的化妆品包材项目评估 PCR 和再生 PET。正确的问题不是「你们有没有可持续包装」，而是「这个零件、这种表面和这个配方能不能用」。"] },
      { heading: "什么情况下现实", paragraphs: ["透明或浅色瓶子，以及部分罐子，是常见候选。厚重的金属感睫毛膏盖或活铰链是另一类材料问题。当再生规格与透明度、颜色或装饰冲突时，亿宏会说明。"] },
      { heading: "样品上要确认什么", paragraphs: ["看透明度、颜色偏移，以及烫金、印刷或喷涂在零件上的附着。只存在于幻灯片上的再生声明不是规格。样品才是。", "如果再生含量是可选项，请在同一份报价里要两条路径：标准树脂和再生替代。这样其中一条守不住表面时，上市仍能推进。"] },
    ],
  },
  "china-beauty-expo": {
    title: "在上海中国美容博览会见亿宏",
    description: "亿宏包材参展上海中国美容博览会。预约会议，查看口红、唇釉、睫毛膏、粉盒和膏霜瓶。",
    imageAlt: "亿宏在中国美容博览会",
    blocks: [
      { paragraphs: ["亿宏在上海中国美容博览会与美妆品牌和采购团队见面。展位的意义和工厂一样：包装要能拿在手里，而不只是一份目录 PDF。"] },
      { heading: "现场看什么", paragraphs: ["带上您真正要上市的品类。口红管、唇釉管、睫毛膏和眼线、眼影和粉饼盒、散粉、膏霜瓶、乳液瓶和配件，都可以对着您的数量和表面来谈。"] },
      { heading: "出发前先约会议", paragraphs: ["使用询价表或 WhatsApp，在项目备注里写上「中国美容博览会」，以及希望放在桌上的产品。如果无法到场，同一份简报会到汕头团队，并可通过微信、Line 或邮件继续。", "展会页面在展后仍然有用。在上海开始的项目对话，会在工厂继续成为打样和生产。"] },
    ],
  },
};
