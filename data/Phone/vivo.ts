import { CalcuGame, PriceTier, Phone, SaleStatus, DeviceType } from '../Type';

export const vivophone: Phone[] = [
  {
    name: "iQOO 12",
    brand: "iQOO",
    type: "phone",
    saleStatus: "available",
    priceTier: "high-end",
    latestPrice: {
      defaultPrice: 26990,
      priceFrom: "Thailand"
    },
    chip: "Snapdragon 8 Gen 3",
    speaker: "Stereo speakers",
    camera: {
      main: 50,
      ultrawide: 50,
      telephoto: 64,
      selfie: 16,
      video: "8K@30fps, 4K@60fps",
      ois: true,
      digitalZoom: 100,
      opticalZoom: 3
    },
    storageRam: [
      { ram: 12, storage: 256, price: 26990 },
      { ram: 16, storage: 512, price: 31990 }
    ],
    display: "6.78 LTPO AMOLED, 144Hz",
    battery: 5000,
    charge: {
      wired: 120,
      wireless: 0
    },
    scores: {
      performance: 98,
      gaming: 99,
      battery: 85,
      display: 95,
      camera: 88,
      value: 82,
      thermal: 90,
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
      "ชิปแรงมาก",
      "ชาร์จไว",
      "เหมาะกับเล่นเกม",
      "จอรีเฟรชเรตสูง"
    ],
    cons: [
      "ราคาสูง",
      "กล้องไม่เด่นเท่าเรือธงบางค่าย",
      "ไม่มีชาร์จไร้สาย"
    ],
    official: "https://www.iqoo.com/th",
    shopee: "https://shopee.co.th/",
    lazada: "https://www.lazada.co.th/",
    youtube: "https://www.youtube.com/"
  },
  {
    name: "iQOO Neo 9",
    brand: "iQOO",
    type: "phone",
    saleStatus: "available",
    priceTier: "upper-midrange",
    latestPrice: {
      defaultPrice: 16990,
      priceFrom: "Thailand"
    },
    chip: "Snapdragon 8 Gen 2",
    speaker: "Stereo speakers",
    camera: {
      main: 50,
      ultrawide: 8,
      telephoto: undefined,
      selfie: 16,
      video: "4K@60fps",
      ois: true,
      digitalZoom: 10
    },
    storageRam: [
      { ram: 12, storage: 256, price: 16990 },
      { ram: 12, storage: 512, price: 18990 }
    ],
    display: "6.78 AMOLED144Hz",
    battery: 5160,
    charge: {
      wired: 120,
      wireless: 0
    },
    scores: {
      performance: 92,
      gaming: 95,
      battery: 88,
      display: 92,
      camera: 80,
      value: 90,
      thermal: 88,
      overall: 89
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
      "แรงคุ้มราคา",
      "เหมาะเล่นเกม",
      "จอสวย",
      "ชาร์จไวมาก"
    ],
    cons: [
      "กล้องธรรมดา",
      "ไม่มีชาร์จไร้สาย",
      "ตัวเครื่องค่อนข้างเกมมิ่ง"
    ],
    official: "https://www.iqoo.com/th",
    shopee: "https://shopee.co.th/",
    lazada: "https://www.lazada.co.th/"
  },
  {
    name: "vivo X100 Pro",
    brand: "vivo",
    type: "phone",
    saleStatus: "available",
    priceTier: "flagship",
    latestPrice: {
      defaultPrice: 39999,
      priceFrom: "Thailand"
    },
    chip: "Dimensity 9300",
    speaker: "Stereo speakers",
    camera: {
      main: 50,
      ultrawide: 50,
      telephoto: 50,
      selfie: 32,
      video: "8K@30fps, 4K@60fps",
      ois: true,
      digitalZoom: 100,
      opticalZoom: 4.3
    },
    storageRam: [
      { ram: 16, storage: 512, price: 39999 }
    ],
    display: "6.78 LTPO AMOLED, 120Hz",
    battery: 5400,
    charge: {
      wired: 100,
      wireless: 50
    },
    scores: {
      performance: 95,
      gaming: 93,
      battery: 90,
      display: 96,
      camera: 99,
      value: 80,
      thermal: 87,
      overall: 93
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
      "กล้องเทพ",
      "จอสวยมาก",
      "ชาร์จไวและมีไร้สาย",
      "เครื่องพรีเมียม"
    ],
    cons: [
      "แพง",
      "หนักพอสมควร",
      "ไม่เหมาะสายประหยัด"
    ],
    official: "https://www.vivo.com/th",
    shopee: "https://shopee.co.th/",
    lazada: "https://www.lazada.co.th/"
  },
  {
    name: "vivo V30 Pro",
    brand: "vivo",
    type: "phone",
    saleStatus: "available",
    priceTier: "upper-midrange",
    latestPrice: {
      defaultPrice: 15999,
      priceFrom: "Thailand"
    },
    chip: "Dimensity 8200",
    speaker: "Stereo speakers",
    camera: {
      main: 50,
      ultrawide: 50,
      telephoto: 50,
      selfie: 50,
      video: "4K@60fps",
      ois: true,
      digitalZoom: 10,
      opticalZoom: 2
    },
    storageRam: [
      { ram: 12, storage: 256, price: 15999 }
    ],
    display: "6.78 AMOLED, 120Hz",
    battery: 5000,
    charge: {
      wired: 80,
      wireless: 0
    },
    scores: {
      performance: 84,
      gaming: 81,
      battery: 86,
      display: 90,
      camera: 91,
      value: 88,
      thermal: 83,
      overall: 86
    },
    recommended: {
      gaming: false,
      camera: true,
      durability: true,
      budget: false,
      performance: true,
      battery: true,
      entertainment: true
    },
    pros: [
      "กล้องดี",
      "จอสวย",
      "แบตอึด",
      "เหมาะใช้งานทั่วไป"
    ],
    cons: [
      "ไม่ใช่สายเกมหนัก",
      "ไม่มีชาร์จไร้สาย",
      "ราคายังสูงสำหรับบางคน"
    ],
    official: "https://www.vivo.com/th",
    shopee: "https://shopee.co.th/",
    lazada: "https://www.lazada.co.th/"
  },
  {
    name: "vivo V29",
    brand: "vivo",
    type: "phone",
    saleStatus: "available",
    priceTier: "midrange",
    latestPrice: {
      defaultPrice: 12999,
      priceFrom: "Thailand"
    },
    chip: "Snapdragon 778G",
    speaker: "Stereo speakers",
    camera: {
      main: 50,
      ultrawide: 8,
      selfie: 50,
      video: "4K@30fps",
      ois: true,
      digitalZoom: 10
    },
    storageRam: [
      { ram: 12, storage: 256, price: 12999 }
    ],
    display: "6.78 AMOLED, 120Hz",
    battery: 4600,
    charge: {
      wired: 80,
      wireless: 0
    },
    scores: {
      performance: 76,
      gaming: 73,
      battery: 80,
      display: 88,
      camera: 86,
      value: 84,
      thermal: 78,
      overall: 81
    },
    recommended: {
      gaming: false,
      camera: true,
      durability: true,
      budget: false,
      performance: false,
      battery: true,
      entertainment: true
    },
    pros: [
      "จอสวย",
      "กล้องหน้าเด่น",
      "ตัวเครื่องบาง",
      "เหมาะใช้งานทั่วไป"
    ],
    cons: [
      "ชิปไม่แรงมาก",
      "ไม่เหมาะเล่นเกมหนัก",
      "ไม่มีชาร์จไร้สาย"
    ],
    official: "https://www.vivo.com/th",
    shopee: "https://shopee.co.th/",
    lazada: "https://www.lazada.co.th/"
      },
  
{ name: "vivo Y28",
  brand: "vivo",
  type: "phone",
  saleStatus: "discontinued",
  priceTier: "entry",

  latestPrice: {
    defaultPrice: 5999,
    priceFrom: "vivo Thailand",
  },

  chip: "MediaTek Helio G85 (12nm)",
  speaker: "ลำโพงเดี่ยว (Audio Booster 300%)",

  camera: {
    main: 50,
    selfie: 8,
    video: "1080p@30fps",
    ois: false,
    digitalZoom: 10,
  },

  storageRam: [
    { ram: 8, storage: 128, price: 5999 },
    { ram: 8, storage: 256, price: 6999 },
  ],

  display: "IPS LCD 6.68 นิ้ว 720x1608 90Hz",
  battery: 6000,
  charge: {
    wired: 44,
    wireless: 0,
  },

  scores: {
    performance: 32,
    gaming: 47,
    battery: 78,
    display: 45,
    camera: 40,
    value: 70,
    thermal: 55,
    overall: 48,
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
    "แบต 6000mAh ใช้ได้ 2 วันสบาย",
    "ชาร์จ 44W เร็วเกินราคา",
    "ราคาถูกมาก เริ่มไม่ถึง 6 พัน",
    "มีช่องหูฟัง 3.5mm + microSD",
  ],
  cons: [
    "จอ LCD ความละเอียดแค่ HD+ ภาพไม่คม",
    "Helio G85 เก่า เล่นเกมหนักไม่ไหว",
    "ไม่มี NFC",
    "ลำโพงเดี่ยว ไม่มีสเตอริโอ",
    "กันน้ำแค่ IP64",
  ],

  official: "https://www.vivo.com/th/products/y28",
  shopee: "https://shopee.co.th/list/vivo/Y28",
},

{
  name: "vivo V50 Lite 5G",
  brand: "vivo",
  type: "phone",
  saleStatus: "available",
  priceTier: "entry-midrange",

  latestPrice: {
    defaultPrice: 9999,
    priceFrom: "BaNANA / vivo Thailand",
  },

  chip: "MediaTek Dimensity 6300 (6nm)",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 8,
    selfie: 32,
    video: "4K@30fps",
    ois: false,
    digitalZoom: 10,
  },

  storageRam: [
    { ram: 8, storage: 256, price: 9999 },
    { ram: 12, storage: 512, price: 12999 },
  ],

  display: "AMOLED 6.77 นิ้ว 1080x2392 120Hz 1800 nits",
  battery: 6500,
  charge: {
    wired: 90,
    wireless: 0,
  },

  scores: {
    performance: 48,
    gaming: 63,
    battery: 88,
    display: 72,
    camera: 58,
    value: 78,
    thermal: 68,
    overall: 66,
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
    "แบต 6500mAh + ชาร์จ 90W ในราคาหมื่นเดียว",
    "จอ AMOLED 120Hz สว่าง 1800 nits",
    "บอดี้บาง แต่กันน้ำ IP65",
    "กล้องหน้า 32MP คมกว่าคู่แข่งช่วงราคาเดียวกัน",
  ],
  cons: [
    "Dimensity 6300 แรงระดับกลางล่าง เกมหนักต้องลดกราฟิก",
    "กล้องหลักไม่มี OIS",
    "อัลตราไวด์แค่ 8MP คุณภาพพอใช้",
    "จอยังเป็นแบบไม่ LTPO",
  ],

  official: "https://www.vivo.com/th/products/v50-lite-5g",
  shopee: "https://shopee.co.th/list/vivo/v50%20lite%205g",
},

{
  name: "iQOO Z10 5G",
  brand: "iQOO",
  type: "phone",
  saleStatus: "available",
  priceTier: "budget",

  latestPrice: {
    defaultPrice: 9490,
    priceFrom: "vivo Thailand Online Store",
  },

  chip: "Qualcomm Snapdragon 7s Gen 3 (4nm)",
  speaker: "ลำโพงคู่สเตอริโอ (400% Volume)",

  camera: {
    main: 50,
    selfie: 32,
    video: "4K@30fps",
    ois: true,
    digitalZoom: 10,
  },

  storageRam: [
    { ram: 8, storage: 256, price: 9490 },
    { ram: 12, storage: 256, price: 10490 },
  ],

  display: "AMOLED 6.77 นิ้ว 1080x2392 120Hz 5000 nits",
  battery: 7300,
  charge: {
    wired: 90,
    wireless: 0,
  },

  scores: {
    performance: 62,
    gaming: 72,
    battery: 95,
    display: 78,
    camera: 62,
    value: 88,
    thermal: 74,
    overall: 76,
  },

  recommended: {
    gaming: true,
    camera: false,
    durability: true,
    budget: true,
    performance: false,
    battery: true,
    entertainment: true,
  },

  pros: [
    "แบต 7300mAh ใหญ่สุดในช่วงราคาหมื่นต้น",
    "ชาร์จ 90W + Bypass Charging เล่นเกมได้แบบไม่ผ่านแบต",
    "กล้องหลัก Sony IMX882 มี OIS",
    "จอ AMOLED สว่าง 5000 nits + ลำโพงคู่",
    "ผ่านมาตรฐานทนทาน MIL-STD-810H",
  ],
  cons: [
    "ไม่มีกล้องอัลตราไวด์ (ตัวที่สองเป็น 2MP วัดระยะ)",
    "ไม่ระบุมาตรฐาน IP ชัดเจน (กันสาดน้ำเท่านั้น)",
    "Snapdragon 7s Gen 3 แรงระดับกลาง ไม่ใช่ตัวท็อป",
    "บอดี้พลาสติก",
  ],

  official: "https://www.iqoo.com/in/products/z10",
  shopee: "https://shopee.co.th/list/vivo/iQOO%20Z10",
},

{
  name: "vivo V50 5G",
  brand: "vivo",
  type: "phone",
  saleStatus: "available",
  priceTier: "midrange",

  latestPrice: {
    defaultPrice: 15999,
    priceFrom: "BaNANA / vivo Thailand",
  },

  chip: "Qualcomm Snapdragon 7 Gen 3 (4nm)",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 50,
    selfie: 50,
    video: "4K@30fps",
    ois: true,
    digitalZoom: 20,
  },

  storageRam: [
    { ram: 12, storage: 256, price: 15999 },
    { ram: 12, storage: 512, price: 17999 },
  ],

  display: "AMOLED 6.77 นิ้ว 1080x2392 120Hz 4500 nits",
  battery: 6000,
  charge: {
    wired: 90,
    wireless: 0,
  },

  scores: {
    performance: 60,
    gaming: 69,
    battery: 82,
    display: 80,
    camera: 78,
    value: 72,
    thermal: 70,
    overall: 74,
  },

  recommended: {
    gaming: false,
    camera: true,
    durability: true,
    budget: false,
    performance: false,
    battery: true,
    entertainment: true,
  },

  pros: [
    "กล้อง ZEISS ครบ 3 ตัว 50MP ทั้งหลัก/อัลตราไวด์/หน้า",
    "กันน้ำระดับ IP68 + IP69 ฉีดน้ำแรงดันสูงได้",
    "จอ AMOLED สว่างสูงสุด 4500 nits",
    "แบต 6000mAh ชาร์จ 90W",
    "Aura Light ช่วยถ่ายพอร์ตเทรตกลางคืน",
  ],
  cons: [
    "Snapdragon 7 Gen 3 แรงไม่พอสำหรับเกมกราฟิกสูงสุด",
    "ไม่มีเลนส์เทเลโฟโต้ ซูมไกลคุณภาพตก",
    "ไม่มีชาร์จไร้สาย",
    "ราคาตั้งสูงเมื่อเทียบกับ iQOO ที่แรงกว่าในราคาใกล้กัน",
  ],

  official: "https://www.vivo.com/th/products/v50",
  shopee: "https://shopee.co.th/list/vivo/V50",
},

{
  name: "iQOO Neo 10",
  brand: "iQOO",
  type: "phone",
  saleStatus: "available",
  priceTier: "upper-midrange",

  latestPrice: {
    defaultPrice: 14490,
    priceFrom: "vivo Thailand Online Store",
  },

  chip: "Qualcomm Snapdragon 8s Gen 4 (4nm) + Q1 Supercomputing Chip",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 8,
    selfie: 32,
    video: "4K@60fps",
    ois: true,
    digitalZoom: 10,
  },

  storageRam: [
    { ram: 8, storage: 256, price: 14490 },
    { ram: 12, storage: 256, price: 15900 },
    { ram: 16, storage: 512, price: 17900 },
  ],

  display: "AMOLED 6.78 นิ้ว 1260x2800 144Hz 4400 nits",
  battery: 7000,
  charge: {
    wired: 120,
    wireless: 0,
  },

  scores: {
    performance: 82,
    gaming: 84,
    battery: 92,
    display: 84,
    camera: 64,
    value: 90,
    thermal: 82,
    overall: 83,
  },

  recommended: {
    gaming: true,
    camera: false,
    durability: false,
    budget: true,
    performance: true,
    battery: true,
    entertainment: true,
  },

  pros: [
    "Snapdragon 8s Gen 4 แรงระดับเรือธงรอง ในราคาหมื่นกลาง",
    "จอ 1.5K 144Hz + ชิปกราฟิกเสริมดันเฟรมเกมได้ 144fps",
    "แบต 7000mAh ชาร์จเร็ว 120W",
    "คุ้มค่าที่สุดสำหรับสายเกมงบไม่เกิน 15,000",
    "RAM LPDDR5X Ultra + UFS 4.1",
  ],
  cons: [
    "กล้องเป็นจุดอ่อน อัลตราไวด์แค่ 8MP ไม่มีเทเลโฟโต้",
    "กันน้ำแค่ IP65",
    "ไม่มีชาร์จไร้สาย",
    "เครื่องหนักและค่อนข้างหนา",
  ],

  official: "https://www.iqoo.com/in/products/neo10",
  shopee: "https://shopee.co.th/list/iQOO/Neo",
},

{
  name: "iQOO 15R",
  brand: "iQOO",
  type: "phone",
  saleStatus: "available",
  priceTier: "high-end",

  latestPrice: {
    defaultPrice: 19900,
    priceFrom: "iQOO Thailand",
  },

  chip: "Qualcomm Snapdragon 8 Gen 5 (3nm) + Q2 Supercomputing Chip",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 8,
    selfie: 32,
    video: "4K@60fps",
    ois: true,
    digitalZoom: 20,
  },

  storageRam: [
    { ram: 12, storage: 256, price: 19900 },
    { ram: 12, storage: 512, price: 21900 },
  ],

  display: "AMOLED 6.59 นิ้ว 1260x2750 (1.5K) 144Hz 5000 nits",
  battery: 7600,
  charge: {
    wired: 100,
    wireless: 0,
  },

  scores: {
    performance: 92,
    gaming: 91,
    battery: 96,
    display: 86,
    camera: 70,
    value: 92,
    thermal: 88,
    overall: 88,
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
    "Snapdragon 8 Gen 5 แรงระดับเรือธงในราคาไม่ถึง 20,000",
    "แบต 7600mAh ใหญ่สุดในกลุ่ม + ชาร์จ 100W",
    "ระบายความร้อน Vapor Chamber 6,500 ตร.มม. เล่นเกมนานได้",
    "กันน้ำ IP68 + IP69",
    "อัปเดต Android 4 เวอร์ชัน + แพตช์ความปลอดภัย 6 ปี",
    "จอ 144Hz + Bypass Charging 2.0",
  ],
  cons: [
    "กล้องยังไม่ใช่จุดขาย อัลตราไวด์ 8MP และไม่มีเทเลโฟโต้",
    "ไม่มีชาร์จไร้สาย",
    "จอ 1.5K ไม่ใช่ LTPO เต็มรูปแบบเหมือน iQOO 15",
    "น้ำหนักราว 202-206 กรัม ค่อนข้างหนัก",
  ],

  official: "https://www.iqoo.com/in/products/iqoo15r",
  shopee: "https://shopee.co.th/list/iQOO/15R",
},

{
  name: "iQOO 15",
  brand: "iQOO",
  type: "phone",
  saleStatus: "available",
  priceTier: "flagship",

  latestPrice: {
    defaultPrice: 29900,
    priceFrom: "vivo Thailand Online Store",
  },

  chip: "Qualcomm Snapdragon 8 Elite Gen 5 (3nm) + Q3 Supercomputing Chip",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 50,
    telephoto: 50,
    selfie: 32,
    video: "8K@30fps",
    ois: true,
    digitalZoom: 100,
    opticalZoom: 3,
  },

  storageRam: [
    { ram: 12, storage: 256, price: 29900 },
    { ram: 16, storage: 512, price: 32900 },
  ],

  display: "LTPO AMOLED 6.85 นิ้ว 1440x3168 (2K) 144Hz 6000 nits",
  battery: 7000,
  charge: {
    wired: 100,
    wireless: 40,
  },

  scores: {
    performance: 98,
    gaming: 94,
    battery: 90,
    display: 96,
    camera: 82,
    value: 85,
    thermal: 90,
    overall: 93,
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
    "Snapdragon 8 Elite Gen 5 แรงสุดในตลาด Android",
    "จอ 2K LTPO 144Hz สว่างพีค 6000 nits",
    "กล้องครบ 3 ตัว 50MP รวมเทเลโฟโต้ซูม 3x",
    "แบต 7000mAh ชาร์จ 100W + ไร้สาย 40W",
    "กันน้ำ IP68 + IP69",
    "ราคาถูกกว่าเรือธงแบรนด์อื่นที่ใช้ชิปเดียวกันหลายพัน",
  ],
  cons: [
    "กล้องยังสู้สาย ZEISS ของ vivo X ซีรีส์ไม่ได้",
    "เครื่องใหญ่ จอ 6.85 นิ้ว ถือมือเดียวไม่สะดวก",
    "OriginOS ยังมีแอปพรีโหลดเยอะ",
    "ร้อนได้ถ้ารีดเฟรมเรตสูงต่อเนื่องนาน",
  ],

  official: "https://shop.vivo.com/th/product/2280",
  shopee: "https://shopee.co.th/list/iQOO/15",
},

{
  name: "vivo X300 Pro",
  brand: "vivo",
  type: "phone",
  saleStatus: "available",
  priceTier: "flagship",

  latestPrice: {
    defaultPrice: 39999,
    priceFrom: "vivo Thailand Online Store",
  },

  chip: "MediaTek Dimensity 9500 (3nm) + vivo VS1/V3+ Imaging Chip",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 50,
    telephoto: 200,
    selfie: 50,
    video: "8K@30fps",
    ois: true,
    digitalZoom: 100,
    opticalZoom: 3.7,
  },

  storageRam: [
    { ram: 16, storage: 512, price: 39999 },
  ],

  display: "LTPO AMOLED 6.78 นิ้ว 1260x2800 120Hz 4500 nits",
  battery: 6510,
  charge: {
    wired: 90,
    wireless: 40,
  },

  scores: {
    performance: 95,
    gaming: 90,
    battery: 86,
    display: 92,
    camera: 98,
    value: 72,
    thermal: 84,
    overall: 94,
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
    "กล้องเทเลโฟโต้ ZEISS APO 200MP เซนเซอร์ใหญ่ 1/1.4 นิ้ว ซูมเทพสุดในตลาด",
    "Dimensity 9500 แรงระดับท็อป พร้อมชิปประมวลผลภาพแยก",
    "กล้องหน้า 50MP",
    "แบต 6510mAh + ชาร์จ 90W และไร้สาย 40W",
    "กันน้ำ IP68 + IP69",
    "ต่อ Telephoto Extender/ชุดเลนส์เสริมได้",
  ],
  cons: [
    "ราคาสูงสุดในลิสต์ 39,999 บาท",
    "มีให้เลือกความจุเดียว (16+512GB)",
    "จอ 120Hz ไม่สูงเท่าสายเกมมิ่ง 144Hz",
    "เครื่องหนัก กล้องหลังนูนมาก",
    "โมดูลกล้องทำให้วางราบกับโต๊ะไม่นิ่ง",
  ],

  official: "https://www.vivo.com/th/products/x300-pro",
  shopee: "https://shopee.co.th/list/vivo/x300%20pro",
},

{
  name: "vivo X200",
  brand: "vivo",
  type: "phone",
  saleStatus: "discontinued",
  priceTier: "flagship",

  latestPrice: {
    defaultPrice: 29999,
    priceFrom: "ราคาเปิดตัวศูนย์ไทย (ปัจจุบันเคลียร์สต็อกราว 20,000)",
  },

  chip: "MediaTek Dimensity 9400 (3nm)",
  speaker: "ลำโพงคู่สเตอริโอ",

  camera: {
    main: 50,
    ultrawide: 50,
    telephoto: 50,
    selfie: 32,
    video: "4K@60fps",
    ois: true,
    digitalZoom: 100,
    opticalZoom: 3,
  },

  storageRam: [
    { ram: 12, storage: 256, price: 29999 },
    { ram: 16, storage: 512, price: 32999 },
  ],

  display: "AMOLED 6.67 นิ้ว 1260x2800 120Hz 4500 nits",
  battery: 5800,
  charge: {
    wired: 90,
    wireless: 0,
  },

  scores: {
    performance: 88,
    gaming: 85,
    battery: 80,
    display: 88,
    camera: 90,
    value: 78,
    thermal: 80,
    overall: 87,
  },

  recommended: {
    gaming: true,
    camera: true,
    durability: true,
    budget: false,
    performance: true,
    battery: false,
    entertainment: true,
  },

  pros: [
    "กล้อง ZEISS 3 ตัว 50MP ครบ รวมเทเลโฟโต้ 3x",
    "Dimensity 9400 ยังแรงพออีกหลายปี",
    "ตัวเครื่องกะทัดรัด 6.67 นิ้ว ถือมือเดียวได้",
    "กันน้ำ IP68 + IP69",
    "ราคามือสอง/เคลียร์สต็อกคุ้มมาก",
  ],
  cons: [
    "เลิกผลิตแล้ว หาเครื่องศูนย์ใหม่ยาก",
    "ไม่มีชาร์จไร้สาย (มีเฉพาะรุ่น Pro)",
    "แบต 5800mAh น้อยกว่ารุ่นใหม่ในปีนี้",
    "จอ 120Hz ไม่ใช่ LTPO เต็มรูปแบบ",
  ],

  official: "https://www.vivo.com/th/products/x200",
  shopee: "https://shopee.co.th/list/vivo/X200",
},    
    {
    name: "vivo Y21d",
    brand: "vivo",
    type: "phone",
    saleStatus: "available",
    priceTier: "budget",

    latestPrice: {
      defaultPrice: 6999,
      priceFrom: "เริ่มต้นประมาณ 6,999 บาท",
    },

    chip: "Unisoc T7225",
    speaker: "Dual Stereo Speaker, สูงสุด 400%",

    camera: {
      main: 50,
      ultrawide: undefined,
      telephoto: undefined,
      selfie: 5,
      video: "1080p",
      ois: false,
      digitalZoom: 10,
      opticalZoom: undefined,
    },

    storageRam: [
      {
        ram: 4,
        storage: 128,
        price: 0,
      },
      {
        ram: 6,
        storage: 128,
        price: 0,
      },
      {
        ram: 6,
        storage: 256,
        price: 0,
      },
    ],

    display: "6.68-inch LCD, 1608×720, 90Hz, 1000 nits",
    battery: 6500,

    charge: {
      wired: 44,
      wireless: 0,
    },

    scores: {
      performance: 42,
      gaming: 40,
      battery: 92,
      display: 62,
      camera: 55,
      value: 84,
      thermal: 82,
      overall: 68,
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
      "ถนัดสายแบตเตอรี่และใช้งานทั่วไปมาก",
      "ถนัดสายความทนทาน มีมาตรฐาน IP68 และ IP69",
      "ถนัดสายดูวิดีโอและฟังเพลง เพราะมีลำโพงสเตอริโอคู่เสียงดังสูงสุด 400%",
      "แบตเตอรี่ 6500mAh พร้อมชาร์จไว 44W",
      "รองรับ microSD สูงสุด 2TB",
      "หน้าจอ 90Hz ใช้งานทั่วไปได้ลื่นกว่าจอ 60Hz",
      "กล้องหลัก 50MP เพียงพอสำหรับการถ่ายภาพทั่วไป",
    ],

    cons: [
      "ไม่ถนัดสายเกมหนัก เพราะ Unisoc T7225 มีประสิทธิภาพระดับเริ่มต้น",
      "ไม่ถนัดสายกล้องจริงจัง เพราะไม่มีกล้อง Ultra-wide และ Telephoto",
      "ไม่ถนัดสายหน้าจอ เพราะเป็น LCD ความละเอียดเพียง HD+",
      "กล้องหน้า 5MP ค่อนข้างธรรมดา",
      "ไม่มี 5G",
      "ไม่มี NFC",
      "พอร์ต USB เป็น USB 2.0",
      "ไม่มีชาร์จไร้สาย",
    ],

    official: "https://www.vivo.com/th/products/y21d",
    shopee: "https://th.shp.ee/xBacyqSk",
  },

  {
    name: "vivo Y31d",
    brand: "vivo",
    type: "phone",
    saleStatus: "available",
    priceTier: "budget",

    latestPrice: {
      defaultPrice: 7999,
      priceFrom: "เริ่มต้นประมาณ 7,999 บาท",
    },

    chip: "Qualcomm Snapdragon 6s Gen 2 4G",
    speaker: "Dual Stereo Speaker, สูงสุด 400%",

    camera: {
      main: 50,
      ultrawide: undefined,
      telephoto: undefined,
      selfie: 8,
      video: "1080p",
      ois: false,
      digitalZoom: 10,
      opticalZoom: undefined,
    },

    storageRam: [
      {
        ram: 6,
        storage: 128,
        price: 0,
      },
      {
        ram: 6,
        storage: 256,
        price: 0,
      },
    ],

    display: "6.75-inch LCD, 1570×720, 120Hz, 1250 nits",
    battery: 7200,

    charge: {
      wired: 44,
      wireless: 0,
    },

    scores: {
      performance: 58,
      gaming: 56,
      battery: 98,
      display: 72,
      camera: 58,
      value: 88,
      thermal: 86,
      overall: 76,
    },

    recommended: {
      gaming: true,
      camera: false,
      durability: true,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "ถนัดสายแบตเตอรี่มาก จุดเด่นหลักคือแบต 7200mAh",
      "ถนัดสายใช้งานหนักต่อเนื่องและเดินทาง เพราะแบตอึดมาก",
      "ถนัดสายเกมระดับเบาถึงกลางมากกว่า Y21d ด้วย Snapdragon 6s Gen 2",
      "ถนัดสายความทนทาน มีมาตรฐาน IP68 และ IP69",
      "ถนัดสายความบันเทิงด้วยจอ 120Hz และลำโพงสเตอริโอคู่ 400%",
      "หน้าจอสว่างสูงสุด 1250 nits",
      "ชาร์จไว 44W",
      "มีแบตเตอรี่ BlueVolt ที่ออกแบบมาให้มีอายุการใช้งานยาวนาน",
    ],

    cons: [
      "ไม่ถนัดสายกล้องจริงจัง เพราะไม่มีกล้อง Ultra-wide และ Telephoto",
      "ไม่ถนัดสายเกมหนัก เพราะ Snapdragon 6s Gen 2 4G ยังไม่ใช่ชิปสำหรับเกมระดับสูง",
      "ไม่ถนัดสายหน้าจอคุณภาพสูง เพราะเป็น LCD และความละเอียดเพียง 1570×720",
      "ไม่มี 5G",
      "ไม่มี NFC",
      "พอร์ต USB เป็น USB 2.0",
      "ไม่มีชาร์จไร้สาย",
      "ตัวเครื่องค่อนข้างใหญ่และหนักประมาณ 219 กรัม",
    ],

    official: "https://www.vivo.com/th/products/y31d",
    shopee: "https://th.shp.ee/K1CApqbv",
  },
{
  name: "vivo V70 FE",
  brand: "vivo",
  type: "phone",
  saleStatus: "available",
  priceTier: "upper-midrange",

  latestPrice: {
    defaultPrice: 14999,
    priceFrom: "เริ่มต้นประมาณ 14,999 บาท",
  },

  chip: "MediaTek Dimensity 7360-Turbo",
  speaker: "Dual Stereo Speaker",

  camera: {
    main: 200,
    ultrawide: 8,
    telephoto: undefined,
    selfie: 32,
    video: "4K / 1080p / 720p",
    ois: true,
    digitalZoom: 9,
    opticalZoom: undefined,
  },

  storageRam: [
    {
      ram: 8,
      storage: 256,
      price: 0,
    },
    {
      ram: 12,
      storage: 256,
      price: 0,
    },
  ],

  display: "6.83-inch AMOLED Q10+, 2800×1260, 120Hz, 5000 nits",
  battery: 7000,

  charge: {
    wired: 90,
    wireless: 0,
  },

  scores: {
    performance: 76,
    gaming: 75,
    battery: 96,
    display: 94,
    camera: 90,
    value: 88,
    thermal: 82,
    overall: 86,
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
    "ถนัดสายกล้องและถ่ายภาพ เพราะมีกล้องหลัก 200MP พร้อม OIS",
    "ถนัดสายแบตเตอรี่ ด้วยแบต 7000mAh และชาร์จไว 90W",
    "ถนัดสายเกมระดับกลางถึงค่อนข้างหนัก ด้วย Dimensity 7360-Turbo",
    "ถนัดสายหน้าจอ AMOLED ความละเอียด 1.5K และ 120Hz",
    "ถนัดสายความทนทานด้วยมาตรฐาน IP68 และ IP69",
    "กล้องหน้า 32MP",
    "ลำโพงสเตอริโอคู่",
    "RAM LPDDR5 และ UFS 3.1",
  ],

  cons: [
    "ไม่ถนัดสายกล้องซูมจริงจัง เพราะไม่มีกล้อง Telephoto",
    "ไม่ถนัดสายเกมระดับเรือธง เพราะ Dimensity 7360-Turbo ยังอยู่ระดับกลาง",
    "ไม่ถนัดสายเพิ่มพื้นที่ เพราะไม่รองรับ microSD",
    "USB 2.0",
    "ไม่มีชาร์จไร้สาย",
    "ไม่มี NFC",
  ],

  official: "https://www.vivo.com/th/products/V70-fe?fromSuggestion=V70+Fe",
  shopee: "https://th.shp.ee/Dm8LxPZ4",
},

{
  name: "vivo V60",
  brand: "vivo",
  type: "phone",
  saleStatus: "available",
  priceTier: "upper-midrange",

  latestPrice: {
    defaultPrice: 14999,
    priceFrom: "เริ่มต้นประมาณ 14,999 บาท",
  },

  chip: "Qualcomm Snapdragon 7 Gen 4",
  speaker: "Dual Stereo Speaker",

  camera: {
    main: 50,
    ultrawide: 8,
    telephoto: 50,
    selfie: 50,
    video: "4K / 1080p / 720p",
    ois: true,
    digitalZoom: 10,
    opticalZoom: 3,
  },

  storageRam: [
    {
      ram: 8,
      storage: 256,
      price: 0,
    },
    {
      ram: 12,
      storage: 256,
      price: 0,
    },
    {
      ram: 12,
      storage: 512,
      price: 0,
    },
  ],

  display: "6.77-inch AMOLED, 2392×1080, 120Hz, 5000 nits",
  battery: 6500,

  charge: {
    wired: 90,
    wireless: 0,
  },

  scores: {
    performance: 84,
    gaming: 82,
    battery: 94,
    display: 92,
    camera: 96,
    value: 90,
    thermal: 86,
    overall: 90,
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
    "ถนัดสายกล้องมาก โดยเฉพาะ Portrait และการซูม ด้วยกล้อง Telephoto ZEISS 50MP",
    "ถนัดสายเกมระดับกลางถึงสูง ด้วย Snapdragon 7 Gen 4",
    "ถนัดสายแบตเตอรี่ ด้วยแบต 6500mAh และชาร์จไว 90W",
    "ถนัดสายหน้าจอ AMOLED 120Hz",
    "ถนัดสายถ่ายวิดีโอ เพราะรองรับวิดีโอ 4K",
    "ถนัดสายความทนทานด้วย IP68 และ IP69",
    "กล้องหน้า 50MP",
    "รองรับ NFC",
  ],

  cons: [
    "ไม่ถนัดสายเพิ่มพื้นที่ เพราะไม่รองรับ microSD",
    "ไม่ถนัดสายชาร์จไร้สาย เพราะไม่รองรับ",
    "USB 2.0",
    "กล้อง Ultra-wide 8MP ความละเอียดน้อยกว่ากล้องหลักและ Telephoto",
    "ไม่ใช่มือถือสำหรับเกมระดับเรือธงโดยตรง",
  ],

  official: "https://www.vivo.com/th/products/v60",
  shopee: "https://th.shp.ee/PkX8TcqK",
},

]
