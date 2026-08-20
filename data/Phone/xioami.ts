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
];
