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
    shopee: "https://th.shp.ee/HwwkmJ43", 
    lazada: "https://www.lazada.co.th/products/xiaomi-15-xiaomi-15-ultra-i5644190815.html",
  },

  {
    name: "Redmi Note 15 Pro 5G",
    brand: "Xiaomi",
    type: "phone",
    saleStatus: "available",
    priceTier: "upper-midrange",

    latestPrice: {
      defaultPrice: 9990,
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
    shopee: "https://shopee.co.th/-NEW-REDMI-Note-15-Pro-5G-8-256-%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B1...", 
    lazada: "https://www.lazada.co.th/products/xiaomi-redmi-note-15-pro-5g-8256gb-amoled-683-6580mah-45w-2-i5146932840.html",
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
    shopee: "https://shopee.co.th/Xiaomi-Pad-8-(8-128GB)-%E0%B9%81%E0%B8%A5%E0%B8%B0-(8-256GB)-%E0%B9%81%E0%B8%97%E0%B9%87%E0%B8%9A%E0%B9%80...", 
    lazada: "https://www.lazada.co.th/products/xiaomi-pad-8-112-32k-144hz-snapdragon-8s-gen-4-9200mah-45w-i5146932842.html",
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
    shopee: "https://shopee.co.th/Xiaomi-15-Ultra-Snapdragon-8-Elite-6.73-inch-LTPO-AMOLED-120Hz-6000mAh-Battery-90W-Fast-Charging-i.26062498...", 
    lazada: "https://www.lazada.co.th/products/xiaomi-15-xiaomi-15-ultra-i5644190815.html",
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
    shopee: "https://shopee.co.th/REDMI-15-5G-8-256-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88-7000mAh...", 
    lazada: "https://www.lazada.co.th/products/redmi-15-5g-8256-7000mah-33w-69-fhd-144hz-i5146932843.html",
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
    shopee: "https://shopee.co.th/-NEW-POCO-X7-PRO-12-256-12-512-%E0%B8%8A%E0%B8%B4%EF%BF%BD%E0%B8%9B%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%95-Dim...", 
    lazada: "https://www.lazada.co.th/products/poco-x7-pro-12256-12512-dimensity-8400-ultra-6000mah-90w-i5146932844.html",
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
    shopee: "https://shopee.co.th/POCO-X7-8256-12512-Dimensity-7300-Ultra-5110mAh-45W-AMOLED-1.5K-i.26062499.1234567890", 
    lazada: "https://www.lazada.co.th/products/poco-x7-8256-12512-dimensity-7300-ultra-5110mah-45w-i5146932845.html",
  },
    {
    name: "Xiaomi Pad 7 Pro",
    brand: "Xiaomi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "high-end",

    latestPrice: {
      defaultPrice: 11891,
      priceFrom: "Shopee"
    },

    chip: "Snapdragon 8s Gen 3",
    speaker: "Quad speakers, Dolby Atmos",

    camera: {
      main: 50,
      selfie: 32,
      video: "4K 30/60fps, 1080p 30/60fps",
      ois: false,
      digitalZoom: 0
    },

    storageRam: [
      { ram: 8, storage: 128, price: 11891 },
      { ram: 8, storage: 256, price: 11891 },
      { ram: 12, storage: 512, price: 11891 }
    ],

    display: "11.2-inch 3.2K 144Hz, 3200×2136, 800 nits, 3:2, Dolby Vision",
    battery: 8850,
    charge: {
      wired: 67,
      wireless: 0
    },

    scores: {
      performance: 96,
      gaming: 95,
      battery: 91,
      display: 96,
      camera: 78,
      value: 94,
      thermal: 90,
      overall: 93
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true
    },

    pros: [
      "ถนัดเล่นเกมหนักและงานกราฟิก",
      "ถนัดตัดต่อวิดีโอและงานสร้างสรรค์",
      "ถนัดทำงานหลายแอปพร้อมกัน",
      "ถนัดดูหนังและคอนเทนต์ด้วยจอ 3.2K 144Hz",
      "ถนัดงานที่ต้องใช้ประสิทธิภาพสูง"
    ],

    cons: [
      "ไม่ถนัดงานที่เน้นถ่ายภาพเป็นหลัก",
      "ไม่ถนัดงานที่ต้องการพกพาแบบเครื่องเล็ก",
      "ไม่ถนัดผู้ใช้ที่ต้องการเครื่องราคาประหยัด"
    ],

    official: "https://www.mi.com/th/product/xiaomi-pad-7-pro/",
    shopee: "https://th.shp.ee/pXXt5uD7"
  },

  {
    name: "Xiaomi Pad 7",
    brand: "Xiaomi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "upper-midrange",

    latestPrice: {
      defaultPrice: 12589,
      priceFrom: "Shopee"
    },

    chip: "Snapdragon 7+ Gen 3",
    speaker: "Quad speakers, Dolby Atmos",

    camera: {
      main: 13,
      selfie: 8,
      video: "4K 30fps, 1080p 30/60fps",
      ois: false,
      digitalZoom: 0
    },

    storageRam: [
      { ram: 8, storage: 128, price: 12589 },
      { ram: 8, storage: 256, price: 12589 },
      { ram: 12, storage: 256, price: 12589 }
    ],

    display: "11.2-inch 3.2K 144Hz, 3200×2136, 800 nits, 3:2, Dolby Vision",
    battery: 8850,
    charge: {
      wired: 45,
      wireless: 0
    },

    scores: {
      performance: 91,
      gaming: 91,
      battery: 91,
      display: 96,
      camera: 62,
      value: 88,
      thermal: 89,
      overall: 90
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true
    },

    pros: [
      "ถนัดเล่นเกมระดับหนัก",
      "ถนัดเรียนและทำงานหลายหน้าต่าง",
      "ถนัดดูหนังและคอนเทนต์",
      "ถนัดงานกราฟิกและตัดต่อระดับกลางถึงสูง",
      "ถนัดใช้งานระยะยาวด้วยจอคุณภาพสูง"
    ],

    cons: [
      "ไม่ถนัดงานถ่ายภาพจริงจัง",
      "ไม่ถนัดงานที่ต้องการกล้องคุณภาพสูง",
      "ไม่ถนัดผู้ใช้ที่ต้องการแท็บเล็ตขนาดเล็ก"
    ],

    official: "https://www.mi.com/th/product/xiaomi-pad-7/",
    shopee: "https://th.shp.ee/2Po76tpD"
  },

  {
    name: "Xiaomi Pad Mini",
    brand: "Xiaomi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "flagship",

    latestPrice: {
      defaultPrice: 18990,
      priceFrom: "Shopee"
    },

    chip: "Dimensity 9400+",
    speaker: "",

    camera: {
      main: 13,
      selfie: 8,
      video: "4K 30fps, 1080p 30/60fps",
      ois: false,
      digitalZoom: 0
    },

    storageRam: [
      { ram: 8, storage: 256, price: 18990 },
      { ram: 12, storage: 512, price: 18990 }
    ],

    display: "8.8-inch 3K 165Hz, 3008×1880, 403 ppi, 700 nits, Dolby Vision",
    battery: 7500,
    charge: {
      wired: 67,
      wireless: 0
    },

    scores: {
      performance: 99,
      gaming: 98,
      battery: 88,
      display: 98,
      camera: 62,
      value: 79,
      thermal: 91,
      overall: 93
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true
    },

    pros: [
      "ถนัดเล่นเกมหนักมาก",
      "ถนัดเกมที่ต้องการเฟรมเรตสูง",
      "ถนัดพกพาและใช้งานด้วยมือเดียว",
      "ถนัดดูคอนเทนต์ด้วยจอ 3K 165Hz",
      "ถนัดงานประสิทธิภาพสูงในขนาดกะทัดรัด"
    ],

    cons: [
      "ไม่ถนัดงานที่ต้องการพื้นที่หน้าจอขนาดใหญ่",
      "ไม่ถนัดงานเอกสารหรือ Multitasking แบบจอใหญ่",
      "ไม่ถนัดงานถ่ายภาพจริงจัง",
      "ไม่ถนัดคนที่ต้องการความคุ้มค่าด้านราคา"
    ],

    official: "https://www.mi.com/th/product/xiaomi-pad-mini/",
    shopee: "https://th.shp.ee/Neksnnf7"
  },

  {
    name: "Redmi Pad 2 Pro",
    brand: "Redmi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "midrange",

    latestPrice: {
      defaultPrice: 8999,
      priceFrom: "Shopee"
    },

    chip: "Snapdragon 7s Gen 4",
    speaker: "",

    camera: {
      main: 8,
      selfie: 8,
      video: "1080p 30fps",
      ois: false,
      digitalZoom: 0
    },

    storageRam: [
      { ram: 6, storage: 128, price: 8999 },
      { ram: 8, storage: 256, price: 8999 }
    ],

    display: "12.1-inch 2.5K 120Hz, 2560×1600, 500 nits, Dolby Vision",
    battery: 12000,
    charge: {
      wired: 33,
      wireless: 0
    },

    scores: {
      performance: 84,
      gaming: 83,
      battery: 97,
      display: 91,
      camera: 55,
      value: 94,
      thermal: 87,
      overall: 87
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: true,
      budget: true,
      performance: true,
      battery: true,
      entertainment: true
    },

    pros: [
      "ถนัดดูหนังและคอนเทนต์บนจอใหญ่",
      "ถนัดเรียนและทำงานเอกสาร",
      "ถนัดใช้งานแบตเตอรี่ยาวนาน",
      "ถนัดเล่นเกมระดับกลางถึงสูง",
      "ถนัดใช้งานทั่วไปและ Multitasking"
    ],

    cons: [
      "ไม่ถนัดถ่ายภาพจริงจัง",
      "ไม่ถนัดเกมระดับหนักสุดเท่ารุ่นเรือธง",
      "ไม่ถนัดงานที่ต้องการ USB ความเร็วสูง",
      "ไม่ถนัดการพกพาเนื่องจากตัวเครื่องค่อนข้างใหญ่"
    ],

    official: "https://www.mi.com/th/product/redmi-pad-2-pro/",
    shopee: "https://th.shp.ee/GxUj6JPQ"
  },

  {
    name: "Redmi Pad 2 (9.7)",
    brand: "Redmi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "entry",

    latestPrice: {
      defaultPrice: 5499,
      priceFrom: "Shopee"
    },

    chip: "Snapdragon 6s 4G Gen 2",
    speaker: "Stereo speakers",

    camera: {
      main: 8,
      selfie: 5,
      video: "1080p 30fps",
      ois: false,
      digitalZoom: 0
    },

    storageRam: [
      { ram: 4, storage: 64, price: 5499 },
      { ram: 4, storage: 128, price: 5499 }
    ],

    display: "9.7-inch 2K 120Hz, 2048×1280, 500 nits",
    battery: 7600,
    charge: {
      wired: 18,
      wireless: 0
    },

    scores: {
      performance: 59,
      gaming: 55,
      battery: 87,
      display: 86,
      camera: 45,
      value: 91,
      thermal: 78,
      overall: 68
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: true,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true
    },

    pros: [
      "ถนัดเรียนออนไลน์",
      "ถนัดอ่านหนังสือและเอกสาร",
      "ถนัดดู YouTube และสตรีมมิง",
      "ถนัดงานทั่วไปที่ไม่หนัก",
      "ถนัดใช้งานในงบประหยัด"
    ],

    cons: [
      "ไม่ถนัดเล่นเกมหนัก",
      "ไม่ถนัดตัดต่อวิดีโอหนัก",
      "ไม่ถนัด Multitasking จำนวนมาก",
      "ไม่ถนัดงานที่ต้องการประสิทธิภาพสูง",
      "ไม่ถนัดถ่ายภาพจริงจัง"
    ],

    official: "https://www.mi.com/th/product/redmi-pad-2-9-7-inch/",
    shopee: "https://th.shp.ee/kTJBUQHA"
  },

  {
    name: "Redmi Pad 2 (11)",
    brand: "Redmi",
    type: "tablet",
    saleStatus: "available",
    priceTier: "entry-midrange",

    latestPrice: {
      defaultPrice: 6999,
      priceFrom: "Shopee"
    },

    chip: "Helio G100-Ultra",
    speaker: "Quad speakers",

    camera: {
      main: 8,
      selfie: 5,
      video: "1080p 30fps",
      ois: false,
      digitalZoom: 0
    },

    storageRam: [
      { ram: 4, storage: 128, price: 6999 },
      { ram: 6, storage: 128, price: 6999 },
      { ram: 8, storage: 256, price: 6999 }
    ],

    display: "11-inch 2.5K 90Hz, 2560×1600, 500 nits",
    battery: 9000,
    charge: {
      wired: 18,
      wireless: 0
    },

    scores: {
      performance: 63,
      gaming: 61,
      battery: 93,
      display: 87,
      camera: 45,
      value: 93,
      thermal: 80,
      overall: 73
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: true,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true
    },

    pros: [
      "ถนัดดูหนังและความบันเทิง",
      "ถนัดเรียนออนไลน์",
      "ถนัดอ่านเอกสารและหนังสือ",
      "ถนัดใช้งานทั่วไป",
      "ถนัดใช้งานแบตเตอรี่ยาวนาน",
      "ถนัดงานที่ต้องการจอใหญ่ในงบจำกัด"
    ],

    cons: [
      "ไม่ถนัดเล่นเกมหนัก",
      "ไม่ถนัดตัดต่อวิดีโอหนัก",
      "ไม่ถนัดงานประสิทธิภาพสูง",
      "ไม่ถนัดถ่ายภาพจริงจัง",
      "ไม่ถนัดงาน Multitasking หนักเท่ารุ่นระดับสูง"
    ],

    official: "https://www.mi.com/th/product/redmi-pad-2/",
    shopee: "https://th.shp.ee/AcYaVpea"
  },
  {
  name: "Redmi 17 5G",
  brand: "Redmi",
  type: "phone",
  saleStatus: "available",
  priceTier: "entry-midrange",
  latestPrice: {
    defaultPrice: 6224,
    priceFrom: "Shopee"
  },
  chip: "Qualcomm Snapdragon 4 Gen 5",
  speaker: "Stereo speakers",
  camera: {
    main: 50,
    selfie: 8,
    video: "1080p@30fps",
    ois: false,
    digitalZoom: 10
  },
  storageRam: [
    {
      ram: 4,
      storage: 128,
      price: 6224
    }
  ],
  display: "6.9-inch IPS LCD, 1600×720, 120Hz",
  battery: 7500,
  charge: {
    wired: 45,
    wireless: 0
  },
  scores: {
    performance: 62,
    gaming: 60,
    battery: 95,
    display: 72,
    camera: 58,
    value: 88,
    thermal: 78,
    overall: 72
  },
  recommended: {
    gaming: true,
    camera: false,
    durability: true,
    budget: true,
    performance: true,
    battery: true,
    entertainment: true
  },
  pros: [
    "7500mAh battery",
    "45W fast charging",
    "120Hz display",
    "Stereo speakers",
    "IP64"
  ],
  cons: [
    "HD+ resolution",
    "No OIS"
  ],
  official: "https://www.mi.com/th/product/redmi-17-5g/specs/",
  shopee: "https://th.shp.ee/mUHiZcXz"
},
{
  name: "Redmi 17",
  brand: "Redmi",
  type: "phone",
  saleStatus: "available",
  priceTier: "budget",
  latestPrice: {
    defaultPrice: 5394,
    priceFrom: "Shopee"
  },
  chip: "MediaTek Helio G91-Ultra",
  speaker: "Stereo speakers",
  camera: {
    main: 50,
    selfie: 8,
    video: "1080p@30fps",
    ois: false,
    digitalZoom: 10
  },
  storageRam: [
    {
      ram: 4,
      storage: 128,
      price: 5394
    }
  ],
  display: "6.9-inch IPS LCD, 1600×720, 120Hz",
  battery: 7500,
  charge: {
    wired: 45,
    wireless: 0
  },
  scores: {
    performance: 42,
    gaming: 40,
    battery: 95,
    display: 72,
    camera: 58,
    value: 90,
    thermal: 82,
    overall: 65
  },
  recommended: {
    gaming: false,
    camera: false,
    durability: true,
    budget: true,
    performance: false,
    battery: true,
    entertainment: true
  },
  pros: [
    "แบตเตอรี่ความจุ 7500mAh อึกมาก",
    "การชาร์จแบบสาย 45W fast charging",
    "หน้ายอ120Hz ลื่นไหลมาก",
    "ลำโพง เสตอรีโอ(Stereo)",
    "มาตรฐานกันนำ่กันฝุ่น IP64(ป้องกันนำ้ฝนได้สบาย แต่ไม่สามารถแช่นำ้ได้)"
  ],
  cons: [
    "ความคมชัดเพียง HD+ (เพียงพอสำหรับการใช้ทั่วไป)",
    "ชิปมีประสิทธิภาพ ระดับเริ่มต้น สำหรับงานทั่วไป(โซเชียลหรือเกมเบาๆ(กลางตํ่าได้)"
  ],
  official: "https://www.mi.com/th/product/redmi-17/specs/",
  shopee: "https://th.shp.ee/7ZtYYjLJ"
},
{
  name: "Redmi A7 Pro",
  brand: "Redmi",
  type: "phone",
  saleStatus: "available",
  priceTier: "entry",
  latestPrice: {
    defaultPrice: 4599,
    priceFrom: "Shopee"
  },
  chip: "Unisoc T7250",
  speaker: "Mono speaker",
  camera: {
    main: 13,
    selfie: 8,
    video: "1080p@30fps",
    ois: false,
    digitalZoom: 10
  },
  storageRam: [
    {
      ram: 4,
      storage: 64,
      price: 4599
    }
  ],
  display: "6.9-inch IPS LCD, 1600×720, 120Hz",
  battery: 6000,
  charge: {
    wired: 15,
    wireless: 0
  },
  scores: {
    performance: 25,
    gaming: 23,
    battery: 84,
    display: 68,
    camera: 35,
    value: 78,
    thermal: 86,
    overall: 52
  },
  recommended: {
    gaming: false,
    camera: false,
    durability: true,
    budget: true,
    performance: false,
    battery: true,
    entertainment: true
  },
  pros: [
    "6000mAh battery",
    "120Hz display",
    "microSD support"
  ],
  cons: [
    "13MP กล้องหลัก ใช้ทั่วไปได้แน่นอนแต่ไม่เหมาะงานถ่ายภาพ",
    "15W ชาร์จแบบสาย ช้า-ทั่วไป",
    "ชิปประมวลผล ประสิทธิภาพระดับเริ่มต้น"
  ],
  official: "https://www.mi.com/th/product/redmi-a7-pro/specs/",
  shopee: "https://th.shp.ee/vQtXyHxw"
},
{
  name: "Redmi A7",
  brand: "Redmi",
  type: "phone",
  saleStatus: "available",
  priceTier: "entry",
  latestPrice: {
    defaultPrice: 3817,
    priceFrom: "Shopee"
  },
  chip: "Unisoc T7250",
  speaker: "Mono speaker",
  camera: {
    main: 13,
    selfie: 8,
    video: "1080p@30fps",
    ois: false,
    digitalZoom: 10
  },
  storageRam: [
    {
      ram: 4,
      storage: 64,
      price: 3817
    }
  ],
  display: "6.88-inch IPS LCD, 1640×720, 120Hz",
  battery: 5200,
  charge: {
    wired: 15,
    wireless: 0
  },
  scores: {
    performance: 23,
    gaming: 21,
    battery: 72,
    display: 66,
    camera: 35,
    value: 90,
    thermal: 87,
    overall: 50
  },
  recommended: {
    gaming: false,
    camera: false,
    durability: true,
    budget: true,
    performance: false,
    battery: true,
    entertainment: true
  },
  pros: [
    "หน้าจอ120Hz ลื่นไหลเป็นอย่างมาก",
    "แบตเตอรี่ความจุ 5200mAh",
    "รองรับmicroSDการ์ด"
  ],
  cons: [
    "กล้องหลักเพียง 13MP ",
    "15W สำหรับการขาร์จสาย ค่อนข้างช้า-ทั่วไป",
    "ชิปประมวลผล ระดับเริ่มต้น"
  ],
  official: "https://www.mi.com/th/product/redmi-a7/specs/",
  shopee: "https://th.shp.ee/KgbVorYD"
},
{
  name: "Redmi 15C",
  brand: "Redmi",
  type: "phone",
  saleStatus: "available",
  priceTier: "entry",
  latestPrice: {
    defaultPrice: 4979,
    priceFrom: "Shopee"
  },
  chip: "MediaTek Helio G81-Ultra",
  speaker: "Mono speaker",
  camera: {
    main: 50,
    selfie: 8,
    video: "1080p@30fps",
    ois: false,
    digitalZoom: 10
  },
  storageRam: [
    {
      ram: 4,
      storage: 128,
      price: 4979
    }
  ],
  display: "6.9-inch IPS LCD, 1600×720, 120Hz",
  battery: 6000,
  charge: {
    wired: 33,
    wireless: 0
  },
  scores: {
    performance: 31,
    gaming: 30,
    battery: 88,
    display: 70,
    camera: 58,
    value: 86,
    thermal: 82,
    overall: 60
  },
  recommended: {
    gaming: false,
    camera: true,
    durability: true,
    budget: true,
    performance: false,
    battery: true,
    entertainment: true
  },
  pros: [
    "ความจุแบตเตอรี่6000mAh ",
    "33W fast charging",
    "หน้าจอ 120Hz ลื่นไหลเป็นอย่างมาก",
    "50MP สำหรับกล้องหลัก",
    "รองรับmicroSD การ์ด"
  ],
  cons: [
    "ความคมชัดเพียง HD+",
    "ชิปประมวลผลเริ่มต้น",
    "ไม่รองรับการกันสั่น ทางฮาร์ดแวร์"
  ],
  official: "https://www.mi.com/th/product/redmi-15c/specs/",
  shopee: "https://th.shp.ee/gK7Uzm7V"
},
  {
  name: "Xiaomi 17T Pro",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "flagship",
  latestPrice: {
    defaultPrice: 20334,
    priceFrom: "Shopee"
  },
  chip: "MediaTek Dimensity 9500",
  speaker: "Stereo speakers, Dolby Atmos",
  camera: {
    main: 50,
    ultrawide: 12,
    telephoto: 50,
    selfie: 32,
    video: "8K@30fps, 4K@120fps",
    ois: true,
    digitalZoom: 120,
    opticalZoom: 5
  },
  storageRam: [
    {
      ram: 12,
      storage: 256,
      price: 20334
    }
  ],
  display: "6.83-inch AMOLED, 2772×1280, 144Hz, 3500 nits",
  battery: 7000,
  charge: {
    wired: 100,
    wireless: 50
  },
  scores: {
    performance: 98,
    gaming: 98,
    battery: 94,
    display: 96,
    camera: 94,
    value: 90,
    thermal: 95,
    overall: 96
  },
  recommended: {
    gaming: true,
    camera: true,
    durability: true,
    budget: false,
    performance: true,
    battery: true,
    entertainment: true
  },
  pros: [
    "ชิปประมวลผล Dimensity 9500 ประสิทธิภาพสูง",
    "หน้าจอ144Hz AMOLED display",
    "กล้องLeica แบบสามเลนส์",
    "7000mAh ความจุแบตเตอรี่",
    "100W สำหรับชาร?จสายไวเป็นอย่างมาก",
    "50W สำหรับชาร์จไร้สาย ค่อนข้างไว",
    "มาตรฐานกันนำ้กันฝุ่น IP68"
  ],
  cons: [
    "กว้าง และ หนัก",
    "ราคาสูงมทก"
  ],
  official: "https://www.mi.com/th/product/xiaomi-17t-pro/specs/",
  shopee: "https://th.shp.ee/q3fryJ8a"
},
{
  name: "Xiaomi 17T",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "upper-midrange",
  latestPrice: {
    defaultPrice: 15354,
    priceFrom: "Shopee"
  },
  chip: "MediaTek Dimensity 8500-Ultra",
  speaker: "Stereo speakers, Dolby Atmos",
  camera: {
    main: 50,
    ultrawide: 12,
    telephoto: 50,
    selfie: 32,
    video: "4K@60fps",
    ois: true,
    digitalZoom: 120,
    opticalZoom: 5
  },
  storageRam: [
    {
      ram: 12,
      storage: 256,
      price: 15354
    }
  ],
  display: "6.59-inch AMOLED, 2756×1268, 120Hz, 3500 nits",
  battery: 6500,
  charge: {
    wired: 67,
    wireless: 0
  },
  scores: {
    performance: 90,
    gaming: 90,
    battery: 94,
    display: 94,
    camera: 92,
    value: 94,
    thermal: 93,
    overall: 92
  },
  recommended: {
    gaming: true,
    camera: true,
    durability: true,
    budget: false,
    performance: true,
    battery: true,
    entertainment: true
  },
  pros: [
    "Dimensity 8500-Ultra",
    "120Hz 1.5K AMOLED",
    "Leica triple camera",
    "6500mAh battery",
    "IP68"
  ],
  cons: [
    "No wireless charging"
  ],
  official: "https://www.mi.com/th/product/xiaomi-17t/specs/",
  shopee: "https://th.shp.ee/5dLjxjYJ"
},
{
  name: "Xiaomi 15T Pro",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "flagship",
  latestPrice: {
    defaultPrice: 18251,
    priceFrom: "Shopee"
  },
  chip: "MediaTek Dimensity 9400+",
  speaker: "Stereo speakers, Dolby Atmos",
  camera: {
    main: 50,
    ultrawide: 12,
    telephoto: 50,
    selfie: 32,
    video: "8K@30fps, 4K@120fps",
    ois: true,
    digitalZoom: 100,
    opticalZoom: 5
  },
  storageRam: [
    {
      ram: 12,
      storage: 512,
      price: 18251
    }
  ],
  display: "6.83-inch AMOLED, 2772×1280, 144Hz, 3200 nits",
  battery: 5500,
  charge: {
    wired: 90,
    wireless: 50
  },
  scores: {
    performance: 96,
    gaming: 96,
    battery: 88,
    display: 96,
    camera: 94,
    value: 94,
    thermal: 94,
    overall: 94
  },
  recommended: {
    gaming: true,
    camera: true,
    durability: true,
    budget: false,
    performance: true,
    battery: true,
    entertainment: true
  },
  pros: [
    "Dimensity 9400+",
    "หน้าจอแบบ 144Hz AMOLED display",
    "Leica camera ทางฮาร์ดแวร์",
    "90W ชาร์จแบบสายไวเป็นอย่างมาก",
    "50W ชาร์จไร้สาย, ค่อนข้างเร็ว",
    "มาตรฐานกันนำ้กันฝุ่น IP68"
  ],
  cons: [
    "ตัวเครื่อง กว้างและหนา"
  ],
  official: "https://www.mi.com/th/product/xiaomi-15t-pro/specs/",
  shopee: "https://th.shp.ee/sEbzTB3Q"
},
{
  name: "Xiaomi 17",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "flagship",
  latestPrice: {
    defaultPrice: 23990,
    priceFrom: "Shopee"
  },
  chip: "Qualcomm Snapdragon 8 Elite Gen 5",
  speaker: "Stereo speakers, Dolby Atmos",
  camera: {
    main: 50,
    ultrawide: 50,
    telephoto: 50,
    selfie: 50,
    video: "8K@30fps, 4K@120fps",
    ois: true,
    digitalZoom: 100,
    opticalZoom: 2.6
  },
  storageRam: [
    {
      ram: 12,
      storage: 512,
      price: 23990
    }
  ],
  display: "6.3-inch CrystalRes OLED, 2656×1220, 1-120Hz, 3500 nits",
  battery: 6330,
  charge: {
    wired: 100,
    wireless: 50
  },
  scores: {
    performance: 99,
    gaming: 98,
    battery: 94,
    display: 97,
    camera: 96,
    value: 91,
    thermal: 94,
    overall: 96
  },
  recommended: {
    gaming: true,
    camera: true,
    durability: true,
    budget: false,
    performance: true,
    battery: true,
    entertainment: true
  },
  pros: [
    "Snapdragon 8 Elite Gen 5",
    "Compact 6.3-inch OLED",
    "Leica triple 50MP cameras",
    "6330mAh battery",
    "100W wired charging",
    "50W wireless charging",
    "IP68"
  ],
  cons: [
    "Small display for some users",
    "Expensive"
  ],
  official: "https://www.mi.com/th/product/xiaomi-17/specs/",
  shopee: "https://th.shp.ee/GZBXwmkZ"
},
{
  name: "Xiaomi 17 Ultra",
  brand: "Xiaomi",
  type: "phone",
  saleStatus: "available",
  priceTier: "flagship",
  latestPrice: {
    defaultPrice: 39329,
    priceFrom: "Shopee"
  },
  chip: "Qualcomm Snapdragon 8 Elite Gen 5",
  speaker: "Stereo speakers, Dolby Atmos",
  camera: {
    main: 50,
    ultrawide: 50,
    telephoto: 200,
    selfie: 50,
    video: "8K@30fps, 4K@120fps",
    ois: true,
    digitalZoom: 120,
    opticalZoom: 4.3
  },
  storageRam: [
    {
      ram: 16,
      storage: 512,
      price: 39329
    }
  ],
  display: "6.9-inch Xiaomi HyperRGB OLED, 2608×1200, 1-120Hz, 3500 nits",
  battery: 6000,
  charge: {
    wired: 100,
    wireless: 50
  },
  scores: {
    performance: 100,
    gaming: 99,
    battery: 95,
    display: 99,
    camera: 100,
    value: 86,
    thermal: 96,
    overall: 98
  },
  recommended: {
    gaming: true,
    camera: true,
    durability: true,
    budget: false,
    performance: true,
    battery: true,
    entertainment: true
  },
  pros: [
    "ชิปประมวลผล Snapdragon 8 Elite Gen 5 ระดับเรือธง ประสิทธืภาพสูงเป็นอย่างมาก",
    "200MP periscop เทเลโฟโต้",
    "Leica camera ทางฮาร์ดแวร์",
    "หน้าจอแบบ HyperRGB OLED",
    "100W ชาร์จด้วยสายไวมาก",
    "50W ชาร์จไร้สายค่อนข้างไว",
    "IP68"
  ],
  cons: [
    "ราคาสูงเป็นอย่างมาก(ตามราคามือถือเรือธง)",
    "ค่อนข้างกว้างและหนัก"
  ],
  official: "https://www.mi.com/th/product/xiaomi-17-ultra/specs/",
  shopee: "https://th.shp.ee/d7aFkJBr"
}
];
