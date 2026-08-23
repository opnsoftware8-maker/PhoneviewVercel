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
    display: "6.78" AMOLED, 120Hz",
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
      }
]
