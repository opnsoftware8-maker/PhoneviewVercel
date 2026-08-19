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
  }
};
