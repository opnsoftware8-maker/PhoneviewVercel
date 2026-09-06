import { CalcuGame, PriceTier, Phone, SaleStatus, DeviceType } from '../Type';

export const huaweiphone: Phone[] = [
  {
    name: "HUAWEI MatePad SE 11 WiFi",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "entry",

    latestPrice: {
      defaultPrice: 7821,
      priceFrom: "Shopee",
    },

    chip: "Kirin 710A",
    speaker: "ลำโพงคู่",

    camera: {
      main: 5,
      selfie: 2,
      video: "1080p",
      ois: false,
      digitalZoom: 4,
    },

    storageRam: [
      { ram: 4, storage: 128, price: 7821 },
      { ram: 8, storage: 128, price: 6021 },
    ],

    display: "11 นิ้ว IPS LCD, 1920x1200, 60Hz",
    battery: 7700,
    charge: {
      wired: 22.5,
      wireless: 0,
    },

    scores: {
      performance: 55,
      gaming: 50,
      battery: 70,
      display: 60,
      camera: 45,
      value: 85,
      thermal: 65,
      overall: CalcuGame(55, 70, 60, 65),
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: false,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "ราคาจับต้องได้ เหมาะสำหรับนักเรียนและผู้เริ่มต้น",
      "แบตเตอรี่ใช้งานได้นานทั้งวัน",
      "หน้าจอกว้าง 11 นิ้ว ดูวิดีโอและเรียนออนไลน์สบาย",
    ],

    cons: [
      "ประสิทธิภาพจำกัด ไม่เหมาะสำหรับเล่นเกมหนักหรือตัดต่อวิดีโอ",
      "กล้องคุณภาพพื้นฐาน ถ่ายรูปในแสงน้อยได้ไม่ดี",
      "ไม่มีช่องใส่ซิมการ์ด (รุ่น WiFi เท่านั้น)",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad-se11/",
    shopee: "https://th.shp.ee/hYAeU7Cb",
  },

  {
    name: "HUAWEI MatePad SE 11 LTE",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "entry",

    latestPrice: {
      defaultPrice: 6471,
      priceFrom: "Shopee",
    },

    chip: "Kirin 710A",
    speaker: "ลำโพงคู่",

    camera: {
      main: 5,
      selfie: 2,
      video: "1080p",
      ois: false,
      digitalZoom: 4,
    },

    storageRam: [
      { ram: 4, storage: 128, price: 6471 },
      { ram: 8, storage: 128, price: 7821 },
    ],

    display: "11 นิ้ว IPS LCD, 1920x1200, 60Hz",
    battery: 7700,
    charge: {
      wired: 22.5,
      wireless: 0,
    },

    scores: {
      performance: 55,
      gaming: 50,
      battery: 70,
      display: 60,
      camera: 45,
      value: 80,
      thermal: 65,
      overall: CalcuGame(55, 70, 60, 65),
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: false,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "รองรับซิมการ์ด ใช้งานอินเทอร์เน็ตได้ทุกที่",
      "ราคาคุ้มค่า ได้ทั้ง WiFi และ LTE",
      "แบตเตอรี่ทน ใช้งานนอกบ้านได้ทั้งวัน",
    ],

    cons: [
      "ประสิทธิภาพจำกัด เหมาะสำหรับงานเบาๆ เท่านั้น",
      "กล้องคุณภาพต่ำ ไม่เหมาะสำหรับถ่ายรูปจริงจัง",
      "น้ำหนักค่อนข้างมากสำหรับแท็บเล็ต 11 นิ้ว",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad-se11/",
    shopee: "https://th.shp.ee/hYAeU7Cb",
  },

  {
    name: "HUAWEI MatePad 11.5 Standard",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "budget",

    latestPrice: {
      defaultPrice: 8901,
      priceFrom: "Shopee",
    },

    chip: "Snapdragon 7 Gen 1",
    speaker: "ลำโพง 4 ตัว",

    camera: {
      main: 13,
      selfie: 8,
      video: "1080p",
      ois: false,
      digitalZoom: 10,
    },

    storageRam: [
      { ram: 8, storage: 128, price: 8901 },
    ],

    display: "11.5 นิ้ว IPS LCD, 2224x1440, 120Hz",
    battery: 7700,
    charge: {
      wired: 22.5,
      wireless: 0,
    },

    scores: {
      performance: 70,
      gaming: 65,
      battery: 75,
      display: 75,
      camera: 60,
      value: 90,
      thermal: 70,
      overall: CalcuGame(70, 75, 75, 70),
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: false,
      budget: true,
      performance: true,
      battery: true,
      entertainment: true,
    },

    pros: [
      "คุ้มค่าที่สุดในรุ่น 11.5 นิ้ว ได้คีย์บอร์ดแถม",
      "หน้าจอ 120Hz ลื่นไหล ทำงานและดูวิดีโอได้สบาย",
      "ลำโพง 4 ตัว เสียงดังชัด เหมาะสำหรับดูหนังฟังเพลง",
      "ประสิทธิภาพเพียงพอสำหรับทำงานเอกสารและเรียนออนไลน์",
    ],

    cons: [
      "ไม่เหมาะสำหรับเล่นเกมกราฟิกหนัก",
      "กล้องยังอยู่ในระดับกลาง ถ่ายรูปในแสงน้อยได้ไม่ดี",
      "ไม่มีปากกาแถมในรุ่นพื้นฐาน (ต้องซื้อเพิ่ม)",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad11-5/",
    shopee: "https://th.shp.ee/bc5yPDSB",
  },

  {
    name: "HUAWEI MatePad 11.5 PaperMatte Edition",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "entry-midrange",

    latestPrice: {
      defaultPrice: 11990,
      priceFrom: "Shopee",
    },

    chip: "Snapdragon 7 Gen 1",
    speaker: "ลำโพง 4 ตัว",

    camera: {
      main: 13,
      selfie: 8,
      video: "1080p",
      ois: false,
      digitalZoom: 10,
    },

    storageRam: [
      { ram: 8, storage: 256, price: 11990 },
    ],

    display: "11.5 นิ้ว PaperMatte, 2224x1440, 120Hz",
    battery: 7700,
    charge: {
      wired: 22.5,
      wireless: 0,
    },

    scores: {
      performance: 70,
      gaming: 65,
      battery: 75,
      display: 85,
      camera: 60,
      value: 85,
      thermal: 70,
      overall: CalcuGame(70, 75, 85, 70),
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: false,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },

    pros: [
      "หน้าจอ PaperMatte ถนอมสายตา ลดแสงสะท้อน เหมาะสำหรับการจดบันทึกและอ่านหนังสือ",
      "ได้คีย์บอร์ดแถมทุกสี (ดำ/ชมพู)",
      "ความจุ 256GB เพียงพอสำหรับเก็บไฟล์งานและสื่อ",
      "เขียนลื่นด้วยปากกา M-Pencil (รุ่นที่มีปากกาแถม)",
    ],

    cons: [
      "ราคาสูงกว่ารุ่น Standard ประมาณ 3,000 บาท",
      "ประสิทธิภาพใกล้เคียงรุ่น Standard แต่จ่ายเพิ่มสำหรับหน้าจอและของแถม",
      "ไม่เหมาะสำหรับเล่นเกมหนัก",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad11-5-papermatte/",
    shopee: "https://th.shp.ee/Vvh5Gurm",
  },

  {
    name: "HUAWEI MatePad 11.5 S 2026",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "midrange",

    latestPrice: {
      defaultPrice: 16990,
      priceFrom: "Shopee",
    },

    chip: "Kirin 9000W",
    speaker: "ลำโพง 6 ตัว",

    camera: {
      main: 13,
      selfie: 8,
      video: "4K",
      ois: true,
      digitalZoom: 10,
    },

    storageRam: [
      { ram: 12, storage: 256, price: 16990 },
    ],

    display: "11.5 นิ้ว PaperMatte, 2880x1840, 144Hz",
    battery: 10100,
    charge: {
      wired: 22.5,
      wireless: 0,
    },

    scores: {
      performance: 90,
      gaming: 85,
      battery: 90,
      display: 95,
      camera: 75,
      value: 80,
      thermal: 85,
      overall: CalcuGame(90, 90, 95, 85),
    },

    recommended: {
      gaming: true,
      camera: true,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },

    pros: [
      "ประสิทธิภาพสูงสุดในตระกูล MatePad 11.5 เล่นเกมและตัดต่อวิดีโอได้ลื่น",
      "หน้าจอ 144Hz ความละเอียดสูง สีแม่นยำ เหมาะสำหรับงานกราฟิก",
      "แบตเตอรี่ 10100mAh ใช้งานได้นานกว่า 10 ชั่วโมง",
      "ได้ Smart Keyboard และ M-Pencil แถมครบชุด",
    ],

    cons: [
      "ราคาสูงเกือบ 17,000 บาท",
      "น้ำหนักมากจากแบตเตอรี่ใหญ่",
      "อาจเกินความจำเป็นสำหรับผู้ใช้ทั่วไป",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad11-5s-2026/",
    shopee: "https://th.shp.ee/PBgxfa2e",
  },

  {
    name: "HUAWEI MatePad Mini",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "entry-midrange",

    latestPrice: {
      defaultPrice: 13482,
      priceFrom: "Shopee",
    },

    chip: "Snapdragon 7 Gen 3",
    speaker: "ลำโพง 4 ตัว",

    camera: {
      main: 13,
      selfie: 8,
      video: "1080p",
      ois: false,
      digitalZoom: 10,
    },

    storageRam: [
      { ram: 8, storage: 256, price: 13482 },
    ],

    display: "8.8 นิ้ว IPS LCD, 2240x1440, 120Hz",
    battery: 6100,
    charge: {
      wired: 40,
      wireless: 0,
    },

    scores: {
      performance: 75,
      gaming: 70,
      battery: 65,
      display: 80,
      camera: 65,
      value: 75,
      thermal: 75,
      overall: CalcuGame(75, 65, 80, 75),
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: true,
      budget: false,
      performance: true,
      battery: false,
      entertainment: true,
    },

    pros: [
      "ขนาดกะทัดรัด 8.8 นิ้ว พกพาสะดวก ถือมือเดียวได้",
      "ประสิทธิภาพดี เหมาะสำหรับอ่านหนังสือและทำงานเบา",
      "มีตัวเลือกปากกา M-Pencil และเคสแถม",
      "หน้าจอความละเอียดสูง คมชัด",
    ],

    cons: [
      "แบตเตอรี่เล็กกว่ารุ่นอื่น ใช้งานได้น้อยกว่า",
      "หน้าจอเล็ก ไม่เหมาะสำหรับแบ่งหน้าจอทำงานหลายแอป",
      "ราคาต่อความจุค่อนข้างสูง",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad-mini/",
    shopee: "https://th.shp.ee/2aP7JENc",
  },

  {
    name: "HUAWEI MatePad Air",
    brand: "HUAWEI",
    type: "tablet",
    saleStatus: "available",
    priceTier: "high-end",

    latestPrice: {
      defaultPrice: 29990,
      priceFrom: "Shopee",
    },

    chip: "Snapdragon 888",
    speaker: "ลำโพง 6 ตัว",

    camera: {
      main: 13,
      ultrawide: 8,
      selfie: 8,
      video: "4K",
      ois: true,
      digitalZoom: 10,
    },

    storageRam: [
      { ram: 8, storage: 256, price: 29990 },
    ],

    display: "11.5 นิ้ว IPS LCD, 2880x1840, 144Hz",
    battery: 8400,
    charge: {
      wired: 66,
      wireless: 0,
    },

    scores: {
      performance: 85,
      gaming: 80,
      battery: 80,
      display: 90,
      camera: 75,
      value: 65,
      thermal: 80,
      overall: CalcuGame(85, 80, 90, 80),
    },

    recommended: {
      gaming: true,
      camera: true,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },

    pros: [
      "ดีไซน์พรีเมียม บางเบา พกพาสะดวก",
      "ประสิทธิภาพสูง เหมาะสำหรับทำงานกราฟิกและตัดต่อวิดีโอ",
      "หน้าจอความละเอียดสูง สีแม่นยำ 144Hz",
      "ลำโพง 6 ตัว เสียงรอบทิศทาง",
      "ได้ชุดอุปกรณ์เสริมครบ (คีย์บอร์ด, ปากกา, เคส)",
    ],

    cons: [
      "ราคาสูงเกือบ 30,000 บาท",
      "ความคุ้มค่าต่ำกว่ารุ่น 11.5 S ในแง่ประสิทธิภาพต่อราคา",
      "อาจเกินความจำเป็นสำหรับผู้ใช้ทั่วไป",
    ],

    official: "https://consumer.huawei.com/th/tablets/matepad-air/",
    shopee: "https://th.shp.ee/NgTw2PbF",
  },

  {
    name: "Huawei Nova 14 Pro",
    brand: "Huawei",
    type: "phone",
    saleStatus: "available",
    priceTier: "upper-midrange",
    latestPrice: {
      defaultPrice: 15990,
      priceFrom: "Shopee",
    },
    chip: "Kirin 8020",
    speaker: "Stereo",
    camera: {
      main: 50,
      ultrawide: 8,
      telephoto: 12,
      selfie: 50,
      video: "4K",
      ois: true,
      digitalZoom: 50,
      opticalZoom: 3,
    },
    storageRam: [
      {
        ram: 12,
        storage: 512,
        price: 15990,
      },
    ],
    display: "6.78\" AMOLED, 2776x1224, 120Hz",
    battery: 5100,
    charge: {
      wired: 100,
      wireless: 0,
    },
    scores: {
      performance: 78,
      gaming: 75,
      battery: 80,
      display: 85,
      camera: 82,
      value: 88,
      thermal: 76,
      overall: CalcuGame(78, 80, 85, 76),
    },
    recommended: {
      gaming: false,
      camera: true,
      durability: false,
      budget: false,
      performance: false,
      battery: true,
      entertainment: true,
    },
    pros: [
      "กล้องหน้าคู่ 50MP ถ่ายเซลฟี่คมชัด",
      "หน้าจอ AMOLED 120Hz สีสวย",
      "ชาร์จไว 100W เต็มเร็วใน 38 นาที",
      "มีเลนส์เทเลโฟโต้ 3x ถ่ายซูมชัด",
      "ดีไซน์บางเบา พกพาสะดวก",
    ],
    cons: [
      "ไม่รองรับ 5G ในบางตลาด",
      "ไม่มีชาร์จไร้สาย",
      "ประสิทธิภาพเกมไม่เท่าเรือธง",
      "แอป Google ต้องติดตั้งเพิ่ม",
    ],
    official: "https://consumer.huawei.com/th/phones/nova14-pro/",
    shopee: "https://th.shp.ee/KTERXD9W",
  },

  {
    name: "Huawei Nova 14",
    brand: "Huawei",
    type: "phone",
    saleStatus: "available",
    priceTier: "midrange",
    latestPrice: {
      defaultPrice: 10990,
      priceFrom: "Shopee",
    },
    chip: "Kirin 8000",
    speaker: "Mono",
    camera: {
      main: 50,
      ultrawide: 12,
      telephoto: undefined,
      selfie: 50,
      video: "4K",
      ois: true,
      digitalZoom: 30,
    },
    storageRam: [
      {
        ram: 12,
        storage: 256,
        price: 10990,
      },
    ],
    display: "6.7\" OLED, 2412x1080, 120Hz",
    battery: 5500,
    charge: {
      wired: 100,
      wireless: 0,
    },
    scores: {
      performance: 72,
      gaming: 68,
      battery: 82,
      display: 80,
      camera: 78,
      value: 90,
      thermal: 74,
      overall: CalcuGame(72, 82, 80, 74),
    },
    recommended: {
      gaming: false,
      camera: true,
      durability: false,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },
    pros: [
      "กล้องหน้า 50MP ถ่ายวิดีโอคอลชัด",
      "ชาร์จไว 100W แบต 5500mAh อึดทั้งวัน",
      "หน้าจอ OLED 120Hz ลื่นไหล",
      "ราคาคุ้มค่าเมื่อเทียบกับสเปก",
      "ดีไซน์บางเพียง 7.2mm",
    ],
    cons: [
      "ไม่มีเลนส์เทเลโฟโต้",
      "ลำโพงโมโนไม่เท่ารุ่น Pro",
      "ไม่รองรับ 5G",
      "แอป Google ต้องติดตั้งเอง",
    ],
    official: "https://consumer.huawei.com/th/phones/nova14/",
    shopee: "https://th.shp.ee/KTERXD9W",
  },

  {
    name: "Huawei Nova Y74",
    brand: "Huawei",
    type: "phone",
    saleStatus: "available",
    priceTier: "budget",
    latestPrice: {
      defaultPrice: 6490,
      priceFrom: "Shopee",
    },
    chip: "Kirin 710A",
    speaker: "Mono",
    camera: {
      main: 50,
      ultrawide: undefined,
      telephoto: undefined,
      selfie: 8,
      video: "1080p",
      ois: false,
      digitalZoom: 10,
    },
    storageRam: [
      {
        ram: 8,
        storage: 128,
        price: 5990,
      },
      {
        ram: 8,
        storage: 256,
        price: 6490,
      },
    ],
    display: "6.67\" IPS LCD, 1604x720, 90Hz",
    battery: 6620,
    charge: {
      wired: 40,
      wireless: 0,
    },
    scores: {
      performance: 55,
      gaming: 50,
      battery: 92,
      display: 65,
      camera: 60,
      value: 95,
      thermal: 70,
      overall: CalcuGame(55, 92, 65, 70),
    },
    recommended: {
      gaming: false,
      camera: false,
      durability: false,
      budget: true,
      performance: false,
      battery: true,
      entertainment: false,
    },
    pros: [
      "แบตเตอรี่ 6620mAh อึดมาก ใช้ได้ 2 วัน",
      "ราคาเริ่มต้นเพียง 6,490 บาท คุ้มค่า",
      "พื้นที่เก็บข้อมูล 256GB เพียงพอ",
      "ชาร์จไว 40W สำหรับระดับราคานี้",
      "หน้าจอใหญ่ 6.67 นิ้ว ดูวิดีโอสะดวก",
    ],
    cons: [
      "ความละเอียดหน้าจอแค่ HD+ ไม่คมมาก",
      "ประสิทธิภาพเกมต่ำ เล่นเกมหนักไม่ลื่น",
      "กล้องหน้าแค่ 8MP",
      "ลำโพงโมโนเสียงไม่ดัง",
      "ชาร์จไร้สายไม่มี",
    ],
    official: "https://consumer.huawei.com/th/phones/nova-y74/",
    shopee: "https://th.shp.ee/PqasdtKh",
  },

  {
    name: "Huawei Pura 90s Pro Max",
    brand: "Huawei",
    type: "phone",
    saleStatus: "available",
    priceTier: "flagship",
    latestPrice: {
      defaultPrice: 49990,
      priceFrom: "Shopee",
    },
    chip: "Kirin 9030S",
    speaker: "Stereo",
    camera: {
      main: 50,
      ultrawide: 40,
      telephoto: 200,
      selfie: 13,
      video: "4K",
      ois: true,
      digitalZoom: 100,
      opticalZoom: 4,
    },
    storageRam: [
      {
        ram: 12,
        storage: 512,
        price: 49990,
      },
    ],
    display: "6.9\" LTPO OLED, 2880x1308, 1-120Hz",
    battery: 6000,
    charge: {
      wired: 100,
      wireless: 80,
    },
    scores: {
      performance: 88,
      gaming: 85,
      battery: 90,
      display: 92,
      camera: 95,
      value: 75,
      thermal: 82,
      overall: CalcuGame(88, 90, 92, 82),
    },
    recommended: {
      gaming: true,
      camera: true,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },
    pros: [
      "กล้องเทเลโฟโต้ 200MP ซูม 4x ชัดมาก",
      "หน้าจอ LTPO 120Hz ลื่นประหยัดแบต",
      "ชาร์จไว 100W + ไร้สาย 80W",
      "กันน้ำกันฝุ่น IP68/IP69",
      "แบตเตอรี่ 6000mAh อึดทั้งวัน",
      "รองรับ 5G Advanced",
    ],
    cons: [
      "ราคาสูงเกือบ 50,000 บาท",
      "แอป Google ต้องติดตั้งเพิ่ม",
      "น้ำหนัก 230g ค่อนข้างหนัก",
      "ไม่มีช่องใส่การ์ดหน่วยความจำ",
    ],
    official: "https://consumer.huawei.com/th/phones/pura90s-pro-max/",
    shopee: "https://th.shp.ee/oYCSUmq2",
  },

  {
    name: "Huawei Pura 90s Pro",
    brand: "Huawei",
    type: "phone",
    saleStatus: "available",
    priceTier: "high-end",
    latestPrice: {
      defaultPrice: 34990,
      priceFrom: "Shopee",
    },
    chip: "Kirin 9030S",
    speaker: "Stereo",
    camera: {
      main: 50,
      ultrawide: 40,
      telephoto: 50,
      selfie: 13,
      video: "4K",
      ois: true,
      digitalZoom: 50,
      opticalZoom: 3,
    },
    storageRam: [
      {
        ram: 12,
        storage: 256,
        price: 34990,
      },
      {
        ram: 12,
        storage: 512,
        price: 38990,
      },
    ],
    display: "6.8\" LTPO OLED, 2848x1312, 1-120Hz",
    battery: 6000,
    charge: {
      wired: 66,
      wireless: 50,
    },
    scores: {
      performance: 88,
      gaming: 85,
      battery: 90,
      display: 90,
      camera: 90,
      value: 80,
      thermal: 82,
      overall: CalcuGame(88, 90, 90, 82),
    },
    recommended: {
      gaming: true,
      camera: true,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },
    pros: [
      "ชิป Kirin 9030S แรงพอใช้กับทุกงาน",
      "กล้องหลัก 50MP + เทเล 50MP ถ่ายชัด",
      "ชาร์จไว 66W + ไร้สาย 50W",
      "หน้าจอ LTPO 120Hz สวยลื่น",
      "แบตเตอรี่ 6000mAh อึด",
      "รองรับ 5G Advanced",
    ],
    cons: [
      "ราคาเริ่มต้น 34,990 บาท ยังสูง",
      "แอป Google ต้องติดตั้งเอง",
      "ชาร์จช้ากว่ารุ่น Pro Max (66W vs 100W)",
      "ไม่มีช่องใส่การ์ดหน่วยความจำ",
    ],
    official: "https://consumer.huawei.com/th/phones/pura90s-pro/",
    shopee: "https://th.shp.ee/oYCSUmq2",
  },
];
      
