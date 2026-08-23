import { CalcuGame, PriceTier, Phone, SaleStatus, DeviceType } from '../Type';

export const xiaomiphone: Phone[] = [
  {
    name: "Xiaomi 15",
    brand: "Xiaomi",
    type: "phone",
    saleStatus: "available",
    priceTier: "flagship",                              
    latestPrice: {
      defaultPrice: 26990,
      priceFrom: "https://www.mi.com/th/product/xiaomi-15/buy/",
    },

    chip: "Snapdragon 8 Elite",
    camera: {
      main: 50,
      ultrawide: 50,
      telephoto: 50,
      selfie: 32,
      video: "8K30 / 4K60",
      ois: true,
      digitalZoom: 60,
      opticalZoom: 2.6,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 12, storage: 256, price: 26990 },
      { ram: 16, storage: 512, price: 34990 },
    ],

    display: '6.36" LTPO OLED, 120Hz, 3200 nits',
    battery: 5400,
    charge: {
      wired: 90,
      wireless: 50,
    },

    scores: {
      performance: 98,
      thermal: 85,
      display: 95,
      battery: 90,
      camera: 94,
      value: 88,
      gaming: CalcuGame(98, 90, 95, 85),
      overall: 92,
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
      "แรงระดับท็อปด้วยชิป Snapdragon 8 Elite",
      "กล้อง Leica คุณภาพสูง ขนาดเครื่องกะทัดรัดพกพาง่าย",
      "แบตเตอรี่จุเพิ่มขึ้นเมื่อเทียบกับขนาดบอดี้",
    ],
    cons: [
      "บอดี้เล็ก ทำให้ระบายความร้อนสู้รุ่นใหญ่ (Pro/Ultra) ตอนโหลดหนักยาวๆ ไม่ได้",
    ],

    official: "https://www.mi.com/th/product/xiaomi-15/",
    shopee: "https://shopee.co.th/xiaomi_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
  {
  name: "Redmi 15C",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "entry",

  latestPrice: {
    defaultPrice: 3499,
    priceFrom: "https://www.mi.com/th/product/redmi-15c/",
  },

  chip: "MediaTek Helio G81-Ultra",
  camera: {
    main: 50,
    selfie: 8,
    video: "1080p",
    ois: false,
    digitalZoom: 10,
  },
  speaker: "ลำโพงเดี่ยว",

  storageRam: [
    { ram: 4, storage: 128, price: 3499 },
    { ram: 6, storage: 128, price: 3999 },
    { ram: 8, storage: 256, price: 4999 },
  ],

  display: '6.9" LCD, 120Hz, 1600×720',
  battery: 6000,
  charge: {
    wired: 33,
    wireless: 0,
  },

  scores: {
    performance: 55,
    thermal: 75,
    display: 65,
    battery: 92,
    camera: 65,
    value: 90,
    gaming: CalcuGame(55, 92, 65, 75),
    overall: 72,
  },

  recommended: {
    gaming: false,
    camera: false,
    durability: true,
    budget: true,
    performance: false,
    battery: true,
    entertainment: true,
  },

  pros: [
    "แบตเตอรี่ขนาดใหญ่ 6000mAh",
    "หน้าจอใหญ่ 6.9 นิ้ว รองรับ 120Hz",
    "รองรับ microSD สูงสุด 1TB",
    "ชาร์จเร็ว 33W",
  ],

  cons: [
    "หน้าจอความละเอียดเพียง 1600×720",
    "ชิป Helio G81-Ultra เหมาะกับการใช้งานทั่วไปมากกว่าการเล่นเกมหนัก",
    "ไม่มี OIS",
  ],

  official: "https://www.mi.com/th/product/redmi-15c/",
},
  {
  name: "Redmi Note 15 Pro 5G",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "upper-midrange",

  latestPrice: {
    defaultPrice: 0,
    priceFrom: "https://www.mi.com/th/product/redmi-note-15-pro-5g/",
  },

  chip: "MediaTek Dimensity 7400-Ultra",
  camera: {
    main: 200,
    ultrawide: 8,
    selfie: 20,
    video: "4K30 / 1080p60",
    ois: true,
    digitalZoom: 10,
  },
  speaker: "ลำโพงคู่สเตอริโอ (Dolby Atmos)",

  storageRam: [
    { ram: 8, storage: 256, price: 0 },
    { ram: 12, storage: 512, price: 0 },
  ],

  display: '6.83" AMOLED, 1.5K, 120Hz, 3200 nits',
  battery: 6580,
  charge: {
    wired: 45,
    wireless: 0,
  },

  scores: {
    performance: 82,
    thermal: 85,
    display: 96,
    battery: 96,
    camera: 91,
    value: 90,
    gaming: CalcuGame(82, 96, 96, 85),
    overall: 91,
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
    "ชิป Dimensity 7400-Ultra ผลิตด้วยกระบวนการ 4nm",
    "กล้องหลัก 200MP พร้อม OIS",
    "จอ AMOLED 1.5K 120Hz สว่างสูงสุด 3200 nits",
    "แบตเตอรี่ใหญ่ 6580mAh",
    "รองรับ IP66/IP68/IP69/IP69K",
    "Gorilla Glass Victus 2",
  ],

  cons: [
    "ชาร์จเร็ว 45W ไม่ได้เร็วเท่ารุ่นเรือธงหลายรุ่น",
    "ไม่มีเลนส์ Telephoto จริง",
    "ใช้ UFS 2.2",
  ],

  official: "https://www.mi.com/th/product/redmi-note-15-pro-5g/",
},
    {
    name: "Xiaomi Pad 8",
    brand: "Xiaomi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "upper-midrange",

    latestPrice: {
      defaultPrice: 11990,
      priceFrom: "https://www.mi.com/th/product/xiaomi-pad-8/buy/",
    },

    chip: "Snapdragon 8s Gen 4",
    camera: {
      main: 13,
      selfie: 8,
      video: "4K30",
      ois: false,
      digitalZoom: 4,
    },
    speaker: "ลำโพง 4 ตัว สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 8, storage: 128, price: 11990 },
      { ram: 8, storage: 256, price: 15990 },
    ],

    display: '11.2" LCD 3.2K (2136×3200), 144Hz, 800 nits',
    battery: 9200,
    charge: {
      wired: 45,
      wireless: 0,
    },

    scores: {
      performance: 88,
      thermal: 80,
      display: 92,
      battery: 96,
      camera: 60,
      value: 85,
      gaming: CalcuGame(88, 96, 92, 80),
      overall: 86,
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: false,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },

    pros: [
      "ชิป Snapdragon 8s Gen 4 แรงระดับเรือธงสำหรับแท็บเล็ต",
      "จอ 11.2 นิ้ว ความละเอียด 3.2K รีเฟรช 144Hz",
      "แบตเตอรี่ 9200mAh ใช้งานได้ยาวนานตลอดวัน",
      "ตัวเครื่องบางเพียง 5.75 มม. น้ำหนัก 485 กรัม",
    ],
    cons: [
      "ชาร์จเพียง 45W เทียบรุ่น Pro ที่ชาร์จ 67W ไม่ได้",
      "กล้องมีเพียง 13MP เหมาะใช้งานทั่วไป ไม่ใช่จุดเด่น",
      "ไม่รองรับเครือข่ายมือถือ (Wi-Fi only)",
    ],

    official: "https://www.mi.com/th/product/xiaomi-pad-8/",
    shopee: "https://shopee.co.th/xiaomi_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
  {
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    type: "phone",
    saleStatus: "available",
    priceTier: "flagship",

    latestPrice: {
      defaultPrice: 42990,
      priceFrom: "https://www.mi.com/th/product/xiaomi-15-ultra/buy/",
    },

    chip: "Snapdragon 8 Elite",
    camera: {
      main: 50,
      ultrawide: 50,
      telephoto: 200,
      selfie: 32,
      video: "8K30 / 4K60",
      ois: true,
      digitalZoom: 120,
      opticalZoom: 4.3,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 16, storage: 512, price: 42990 },
      { ram: 16, storage: 1024, price: 49990 },
    ],

    display: '6.73" LTPO AMOLED, WQHD+ (3200×1440), 120Hz, 3200 nits',
    battery: 5410,
    charge: {
      wired: 90,
      wireless: 50,
    },

    scores: {
      performance: 99,
      thermal: 90,
      display: 97,
      battery: 88,
      camera: 97,
      value: 80,
      gaming: CalcuGame(99, 88, 97, 90),
      overall: 95,
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
      "ชิป Snapdragon 8 Elite แรงสุดพร้อมระบบระบายความร้อน 3D IceLoop",
      "กล้อง 4 ตัวจาก Leica พร้อมเพอริสโคป 200MP ซูมออปติคอล 4.3x",
      "จอ WQHD+ LTPO สว่างสูงสุด 3200 nits",
      "พื้นที่ UFS 4.1 ความเร็วอ่าน 4GB/s",
    ],
    cons: [
      "ราคาสูง กว่า 40,000 บาท",
      "ตัวเครื่องหนาและหนักกว่ารุ่น Xiaomi 15 ปกติ",
    ],

    official: "https://www.mi.com/th/product/xiaomi-15-ultra/",
    shopee: "https://shopee.co.th/xiaomi_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
  {
    name: "Redmi 15 5G",
    brand: "Xiaomi",
    type: "phone",
    saleStatus: "available",
    priceTier: "entry-midrange",

    latestPrice: {
      defaultPrice: 5999,
      priceFrom: "https://www.mi.com/th/product/redmi-15-5g/buy/",
    },

    chip: "Snapdragon 6s Gen 3",
    camera: {
      main: 50,
      selfie: 16,
      video: "1080p60",
      ois: false,
      digitalZoom: 10,
    },
    speaker: "ลำโพงเดี่ยว",

    storageRam: [
      { ram: 8, storage: 256, price: 5999 },
    ],

    display: '6.9" IPS LCD, FHD+ (2340×1080), 144Hz, 850 nits',
    battery: 7000,
    charge: {
      wired: 33,
      wireless: 0,
    },

    scores: {
      performance: 60,
      thermal: 80,
      display: 70,
      battery: 95,
      camera: 60,
      value: 88,
      gaming: CalcuGame(60, 95, 70, 80),
      overall: 74,
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: true,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "แบตเตอรี่ใหญ่ 7000mAh ใช้งานได้นานถึง 2 วัน",
      "จอใหญ่ 6.9 นิ้ว รีเฟรช 144Hz",
      "รองรับเครือข่าย 5G ในราคาไม่ถึง 6,000 บาท",
      "รองรับ Circle to Search และ Google Gemini",
    ],
    cons: [
      "จอเป็น IPS LCD ไม่ใช่ AMOLED",
      "ชิป Snapdragon 6s Gen 3 เหมาะกับงานทั่วไป ไม่ใช่เกมหนัก",
      "ไม่มี OIS และกล้องอัลตร้าไวด์",
    ],

    official: "https://www.mi.com/th/product/redmi-15-5g/",
    shopee: "https://shopee.co.th/xiaomi_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
  {
    name: "POCO X7 Pro",
    brand: "Xiaomi",
    type: "phone",
    saleStatus: "available",
    priceTier: "upper-midrange",

    latestPrice: {
      defaultPrice: 11990,
      priceFrom: "https://www.mi.com/th/product/poco-x7-pro/buy/",
    },

    chip: "Dimensity 8400-Ultra",
    camera: {
      main: 50,
      ultrawide: 8,
      selfie: 20,
      video: "4K30",
      ois: true,
      digitalZoom: 20,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 12, storage: 256, price: 11990 },
      { ram: 12, storage: 512, price: 13990 },
    ],

    display: '6.67" AMOLED, 1.5K (2712×1220), 120Hz, 3200 nits',
    battery: 6000,
    charge: {
      wired: 90,
      wireless: 0,
    },

    scores: {
      performance: 90,
      thermal: 85,
      display: 93,
      battery: 92,
      camera: 78,
      value: 88,
      gaming: CalcuGame(90, 92, 93, 85),
      overall: 89,
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true,
    },

    pros: [
      "ชิป Dimensity 8400-Ultra ผลิตด้วยกระบวนการ 4nm แรงระดับเรือธง",
      "แบตเตอรี่ 6000mAh ชาร์จไว 90W",
      "จอ AMOLED 1.5K สว่างสูงสุด 3200 nits พร้อม Gorilla Glass Victus 2",
      "กันน้ำและฝุ่น IP68",
    ],
    cons: [
      "กล้องอัลตร้าไวด์มีเพียง 8MP",
      "ไม่มีเลนส์เทเลโฟโตจริง",
      "ใช้ UFS 2.2 ไม่ใช่ UFS 4.0",
    ],

    official: "https://www.mi.com/th/product/poco-x7-pro/",
    shopee: "https://shopee.co.th/poco_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
  {
    name: "POCO X7",
    brand: "Xiaomi",
    type: "phone",
    saleStatus: "available",
    priceTier: "midrange",

    latestPrice: {
      defaultPrice: 7999,
      priceFrom: "https://www.mi.com/th/product/poco-x7/buy/",
    },

    chip: "Dimensity 7300-Ultra",
    camera: {
      main: 50,
      ultrawide: 8,
      selfie: 20,
      video: "4K30",
      ois: true,
      digitalZoom: 20,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 8, storage: 256, price: 7999 },
      { ram: 12, storage: 512, price: 9999 },
    ],

    display: '6.67" AMOLED, 1.5K (2712×1220), 120Hz, 3000 nits',
    battery: 5110,
    charge: {
      wired: 45,
      wireless: 0,
    },

    scores: {
      performance: 72,
      thermal: 80,
      display: 90,
      battery: 85,
      camera: 75,
      value: 88,
      gaming: CalcuGame(72, 85, 90, 80),
      overall: 82,
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: true,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "จอ AMOLED 1.5K 120Hz พร้อม Gorilla Glass Victus 2",
      "กล้องหลัก 50MP Sony LYT-600 รองรับ OIS",
      "กันน้ำและฝุ่น IP68",
      "ราคาเริ่มต้นต่ำกว่า 8,000 บาท",
    ],
    cons: [
      "ชิป Dimensity 7300-Ultra พอใช้ ไม่ใช่สำหรับเกมหนัก",
      "แบตเตอรี่ 5110mAh น้อยกว่ารุ่น Pro",
      "ชาร์จเพียง 45W",
    ],

    official: "https://www.mi.com/th/product/poco-x7/",
    shopee: "https://shopee.co.th/poco_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
];
