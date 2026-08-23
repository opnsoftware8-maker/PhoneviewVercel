import { CalcuGame, PriceTier, Phone, SaleStatus, DeviceType } from '../Type';

export const samsungphone: Phone[] = [
    {
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    type: "phone",
    saleStatus: "available",
    priceTier: "flagship",

    latestPrice: {
      defaultPrice: 46900,
      priceFrom: "https://www.samsung.com/th/smartphones/galaxy-s25-ultra/buy/",
    },

    chip: "Snapdragon 8 Elite for Galaxy",
    camera: {
      main: 200,
      ultrawide: 50,
      telephoto: 50,
      selfie: 12,
      video: "8K30 / 4K120",
      ois: true,
      digitalZoom: 100,
      opticalZoom: 5,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 12, storage: 256, price: 46900 },
      { ram: 12, storage: 512, price: 52900 },
      { ram: 12, storage: 1024, price: 62900 },
    ],

    display: '6.9" Dynamic LTPO AMOLED 2X, QHD+ (3120×1440), 120Hz, 2600 nits',
    battery: 5000,
    charge: {
      wired: 45,
      wireless: 15,
    },

    scores: {
      performance: 99,
      thermal: 88,
      display: 98,
      battery: 87,
      camera: 96,
      value: 75,
      gaming: CalcuGame(99, 87, 98, 88),
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
      "ชิป Snapdragon 8 Elite for Galaxy แรงสุดในสาย Android",
      "กล้อง 4 ตัว หลัก 200MP พร้อมเพอริสโคป 50MP ซูมออปติคอล 5x",
      "จอ QHD+ LTPO 6.9 นิ้ว สว่างสูงสุด 2600 nits",
      "มีปากกา S Pen ในตัว และกรอบไทเทเนียม",
      "อัปเดต Android ยาว 7 ปี",
    ],
    cons: [
      "ราคาสูงมาก เริ่มต้น 46,900 บาท",
      "ไม่มีหัวชาร์จให้ในกล่อง",
      "ชาร์จ 45W ช้ากว่าคู่แข่งจีนที่ชาร์จ 90-120W",
    ],

    official: "https://www.samsung.com/th/smartphones/galaxy-s25-ultra/",
    shopee: "https://shopee.co.th/samsung_thailand",
    lazada: "https://www.lazada.co.th/shop/samsung",
  },
  {
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    type: "phone",
    saleStatus: "available",
    priceTier: "flagship",

    latestPrice: {
      defaultPrice: 29900,
      priceFrom: "https://www.samsung.com/th/smartphones/galaxy-s25/buy/",
    },

    chip: "Snapdragon 8 Elite for Galaxy",
    camera: {
      main: 50,
      ultrawide: 12,
      telephoto: 10,
      selfie: 12,
      video: "8K30 / 4K60",
      ois: true,
      digitalZoom: 30,
      opticalZoom: 3,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 12, storage: 256, price: 29900 },
      { ram: 12, storage: 512, price: 34900 },
    ],

    display: '6.2" Dynamic LTPO AMOLED 2X, FHD+ (2340×1080), 120Hz, 2600 nits',
    battery: 4000,
    charge: {
      wired: 25,
      wireless: 15,
    },

    scores: {
      performance: 97,
      thermal: 82,
      display: 92,
      battery: 72,
      camera: 88,
      value: 78,
      gaming: CalcuGame(97, 72, 92, 82),
      overall: 89,
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
      "ชิป Snapdragon 8 Elite for Galaxy แรงระดับเรือธง",
      "ขนาดกะทัดรัด 6.2 นิ้ว ถือถนัดมือ",
      "มีเลนส์เทเลโฟโตซูมออปติคอล 3x ในราคาไม่ถึง 30,000",
      "หน่วยความจำ UFS 4.0 และอัปเดต Android ยาว 7 ปี",
    ],
    cons: [
      "แบตเตอรี่เพียง 4000mAh น้อยที่สุดในรุ่นเรือธงปีนี้",
      "ชาร์จเพียง 25W ช้ากว่าคู่แข่งมาก",
      "บอดี้เล็ก ระบายความร้อนสู้รุ่น Ultra ไม่ได้",
    ],

    official: "https://www.samsung.com/th/smartphones/galaxy-s25/",
    shopee: "https://shopee.co.th/samsung_thailand",
    lazada: "https://www.lazada.co.th/shop/samsung",
  },
  {
    name: "Samsung Galaxy A56 5G",
    brand: "Samsung",
    type: "phone",
    saleStatus: "available",
    priceTier: "upper-midrange",

    latestPrice: {
      defaultPrice: 13999,
      priceFrom: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a56-5g/",
    },

    chip: "Exynos 1580",
    camera: {
      main: 50,
      ultrawide: 12,
      selfie: 12,
      video: "4K30",
      ois: true,
      digitalZoom: 10,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 12, storage: 256, price: 13999 },
    ],

    display: '6.7" Super AMOLED, FHD+ (2340×1080), 120Hz, 1900 nits',
    battery: 5000,
    charge: {
      wired: 45,
      wireless: 0,
    },

    scores: {
      performance: 76,
      thermal: 82,
      display: 90,
      battery: 88,
      camera: 82,
      value: 85,
      gaming: CalcuGame(76, 88, 90, 82),
      overall: 84,
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
      "ชิป Exynos 1580 ผลิต 4nm แรงขึ้นชัดเจนจากรุ่นก่อน",
      "กล้องหลัก 50MP พร้อม OIS และอัลตร้าไวด์ 12MP",
      "จอ Super AMOLED 120Hz สว่างสูงสุด 1900 nits",
      "ชาร์จไว 45W และอัปเดต Android ยาว 6 ปี",
      "กันน้ำและฝุ่น IP67",
    ],
    cons: [
      "ไม่มีเลนส์เทเลโฟโต",
      "ไม่มีหัวชาร์จให้ในกล่อง",
      "ไม่รองรับ microSD",
    ],

    official: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a56-5g/",
    shopee: "https://shopee.co.th/samsung_thailand",
    lazada: "https://www.lazada.co.th/shop/samsung",
  },
  {
    name: "Samsung Galaxy A36 5G",
    brand: "Samsung",
    type: "phone",
    saleStatus: "available",
    priceTier: "midrange",

    latestPrice: {
      defaultPrice: 11999,
      priceFrom: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a36-5g/",
    },

    chip: "Snapdragon 6 Gen 3",
    camera: {
      main: 50,
      ultrawide: 8,
      selfie: 12,
      video: "4K30",
      ois: true,
      digitalZoom: 10,
    },
    speaker: "ลำโพงคู่ สเตอริโอ (Dolby Atmos)",

    storageRam: [
      { ram: 8, storage: 128, price: 11999 },
    ],

    display: '6.7" Super AMOLED, FHD+ (2340×1080), 120Hz, 1200 nits',
    battery: 5000,
    charge: {
      wired: 45,
      wireless: 0,
    },

    scores: {
      performance: 68,
      thermal: 80,
      display: 86,
      battery: 88,
      camera: 76,
      value: 80,
      gaming: CalcuGame(68, 88, 86, 80),
      overall: 79,
    },

    recommended: {
      gaming: false,
      camera: false,
      durability: true,
      budget: false,
      performance: false,
      battery: true,
      entertainment: true,
    },

    pros: [
      "จอ Super AMOLED 6.7 นิ้ว 120Hz",
      "กล้องหลัก 50MP รองรับ OIS",
      "ชาร์จไว 45W และแบตเตอรี่ 5000mAh",
      "ฝาหลังกระจกและกันน้ำ IP67",
      "อัปเดต Android ยาว 6 ปี",
    ],
    cons: [
      "ชิป Snapdragon 6 Gen 3 แรงกว่าคู่แข่งช่วงราคาเดียวกันไม่ได้",
      "กล้องอัลตร้าไวด์เพียง 8MP",
      "ไม่มีหัวชาร์จให้ในกล่อง",
    ],

    official: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a36-5g/",
    shopee: "https://shopee.co.th/samsung_thailand",
    lazada: "https://www.lazada.co.th/shop/samsung",
  },
  {
    name: "Samsung Galaxy A16 5G",
    brand: "Samsung",
    type: "phone",
    saleStatus: "available",
    priceTier: "entry-midrange",

    latestPrice: {
      defaultPrice: 5999,
      priceFrom: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a16-5g/",
    },

    chip: "MediaTek Dimensity 6300",
    camera: {
      main: 50,
      ultrawide: 5,
      selfie: 13,
      video: "1080p30",
      ois: false,
      digitalZoom: 10,
    },
    speaker: "ลำโพงเดี่ยว",

    storageRam: [
      { ram: 4, storage: 128, price: 5999 },
      { ram: 8, storage: 256, price: 8499 },
    ],

    display: '6.7" Super AMOLED, FHD+ (2340×1080), 90Hz',
    battery: 5000,
    charge: {
      wired: 25,
      wireless: 0,
    },

    scores: {
      performance: 55,
      thermal: 78,
      display: 80,
      battery: 88,
      camera: 65,
      value: 88,
      gaming: CalcuGame(55, 88, 80, 78),
      overall: 73,
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
      "จอ Super AMOLED FHD+ ในราคาไม่ถึง 6,000 บาท",
      "อัปเดต Android ยาวถึง 6 ปี ยาวที่สุดในกลุ่มราคานี้",
      "รองรับ microSD ขยายได้สูงสุด 1.5TB",
      "แบตเตอรี่ 5000mAh ชาร์จไว 25W",
      "กันน้ำและฝุ่น IP54",
    ],
    cons: [
      "รีเฟรชเรตเพียง 90Hz",
      "ไม่มี OIS",
      "ลำโพงเดี่ยว ไม่ใช่สเตอริโอ",
      "รุ่นเริ่มต้น RAM เพียง 4GB",
    ],

    official: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a16-5g/",
    shopee: "https://shopee.co.th/samsung_thailand",
    lazada: "https://www.lazada.co.th/shop/samsung",
  },
  {
    name: "Samsung Galaxy A06 5G",
    brand: "Samsung",
    type: "phone",
    saleStatus: "available",
    priceTier: "entry",

    latestPrice: {
      defaultPrice: 5499,
      priceFrom: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a06-5g/",
    },

    chip: "MediaTek Dimensity 6300",
    camera: {
      main: 50,
      selfie: 8,
      video: "1080p30",
      ois: false,
      digitalZoom: 4,
    },
    speaker: "ลำโพงเดี่ยว",

    storageRam: [
      { ram: 6, storage: 128, price: 5499 },
    ],

    display: '6.7" LCD, HD+ (1600×720), 90Hz, 800 nits',
    battery: 5000,
    charge: {
      wired: 25,
      wireless: 0,
    },

    scores: {
      performance: 52,
      thermal: 76,
      display: 60,
      battery: 88,
      camera: 58,
      value: 78,
      gaming: CalcuGame(52, 88, 60, 76),
      overall: 66,
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
      "รองรับ 5G ในราคาระดับเริ่มต้น",
      "แบตเตอรี่ 5000mAh ชาร์จไว 25W",
      "รองรับ microSD เพิ่มพื้นที่ได้",
      "ได้ One UI และอัปเดตนาน 6 ปี",
    ],
    cons: [
      "จอเป็น LCD ความละเอียดเพียง HD+ (1600×720)",
      "กล้องมีเพียงกล้องหลัก 50MP กับกล้องวัดระยะ 2MP",
      "ลำโพงเดี่ยว และไม่มีมาตรฐานกันน้ำ",
      "ราคาป้ายสูงเมื่อเทียบกับคู่แข่งจีนสเปคเดียวกัน",
    ],

    official: "https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a06-5g/",
    shopee: "https://shopee.co.th/samsung_thailand",
    lazada: "https://www.lazada.co.th/shop/samsung",
  },
];
