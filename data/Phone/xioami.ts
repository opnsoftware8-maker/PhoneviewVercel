import { CalcuGame,PriceTier,Phone,SaleStatus, DeviceType} from '../Type';

export const Xiaomiphone: Record<string, Phone> = {
  Xiaomi15: {
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

  Redmi15Pro: {
    name: "Redmi 15 Pro",
    brand: "Redmi",
    type: "phone",
    saleStatus: "available",
    priceTier: "midrange",
    latestPrice: {
      defaultPrice: 12990,
      priceFrom: "https://www.mi.com/th/product/redmi-15-pro/",
    },

    chip: "MediaTek Dimensity 7300-Ultra",
    camera: {
      main: 200,
      ultrawide: 8,
      telephoto: 0,
      selfie: 16,
      video: "4K30 / 1080p60",
      ois: true,
      digitalZoom: 30,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 8, storage: 256, price: 12990 },
      { ram: 12, storage: 512, price: 14990 },
    ],

    display: '6.67" AMOLED, 120Hz, 3000 nits',
    battery: 5500,
    charge: {
      wired: 67,
    },

    scores: {
      performance: 82,
      thermal: 88,
      display: 90,
      battery: 92,
      camera: 85,
      value: 95,
      gaming: CalcuGame(82, 88, 90, 92),
      overall: 88,
    },

    recommended: {
      gaming: false,
      camera: true,
      durability: true,
      budget: true,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "คุ้มค่าต่อราคา ให้หน้าจอและกล้องหลัก 200MP สเปกดีเยี่ยม",
      "แบตเตอรี่ความจุสูง ใช้งานได้ยาวนานตลอดวัน",
      "งานประกอบแข็งแรง กันน้ำกันฝุ่นมาตรฐานดี",
    ],
    cons: [
      "ชิปประมวลผลเน้นประหยัดพลังงาน ไม่เหมาะกับเกมระดับ AAA ปรับสุด",
      "กล้อง Ultrawide ความละเอียดค่อนข้างน้อย",
    ],

    official: "https://www.mi.com/th/product/redmi-15-pro/",
    shopee: "https://shopee.co.th/xiaomi_official_store",
    lazada: "https://www.lazada.co.th/shop/xiaomi",
  },
};
