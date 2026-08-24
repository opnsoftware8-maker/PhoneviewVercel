"use client";
import React, { useState, useMemo } from 'react';
import { Allphone } from '../data/index';
import { Phonecard } from '../components/Cardphone'; 
import Phonepage from './phonepage/Phonepages';

export default function App() {
  const [filterbutton, setFilterbutton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [getfindButton, SetfindButton] = useState(false);

  const [deviceType, setDeviceType] = useState<string>("all");
  const [priceTier, setPriceTier] = useState<string>("all");
  const [RecChoos, SetRecChoos] = useState({
      activate: false,
      gaming: false,
      camera: false,
      durability: false,
      budget: false,
      performance: false,
      battery: false,
      entertainment: false
  });
  
  // ใช้ null แทน String "null" เพื่อป้องกัน Bug การตรวจเช็คค่า
  const [CardProp, setCardProp] = useState<string | null>(null);
  const ResultphoneDat = CardProp ? Allphone.find(phone => phone.name === CardProp) : null;

  // ✅ คำนวณการคัดกรองโดยตรง ไม่ต้องผ่าน useEffect ให้เสียเวลา Re-render
  const PhoneArr = useMemo(() => {
    if (!Allphone) return [];

    return Allphone.filter(phone => {
      if (deviceType !== "all") {
        const pType = phone.type?.toLowerCase() || "";
        if (deviceType === "phone" && pType !== "phone" && pType !== "smartphone") return false;
        if (deviceType === "tablet" && pType !== "tablet") return false;
      }

      if (priceTier !== "all" && phone.priceTier !== priceTier) return false;

      if (searchTerm.trim() !== "") {
        const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
        const phoneName = phone.name?.toLowerCase() || "";
        const matchName = searchWords.every(word => phoneName.includes(word));
        if (!matchName) return false; 
      }

      for (const key in RecChoos) {
        if (key === "activate") continue; 
        const filterKey = key as keyof typeof RecChoos;
        if (RecChoos[filterKey] === true && phone.recommended?.[filterKey] !== true) {
          return false; 
        }
      }

      return true; 
    });
  }, [getfindButton, deviceType, priceTier, RecChoos]); 

  const filterLabels: Record<string, {text: string}> = {
    gaming: { text: "การเล่นเกม" },
    performance: { text: "ประสิทธิภาพ" },
    camera: { text: "งานภาพ/วิดีโอ" },
    durability: { text: "ความทนทาน" },
    budget: { text: "ความคุ้มค่า/งบประหยัด" },
    battery: { text: "แบตอึด" },
    entertainment: { text: "ดูหนัง/ความบันเทิง" }
  };

  const priceTierLabels: Record<string, string> = {
    "entry": "Entry (เริ่มต้น)",
    "budget": "Budget (ประหยัด)",
    "entry-midrange": "Entry-Mid (กลางเริ่มต้น)",
    "midrange": "Midrange (ระดับกลาง)",
    "upper-midrange": "Upper-Mid (กลางค่อนบน)",
    "high-end": "High-End (ระดับสูง)",
    "flagship": "Flagship (เรือธง)"
  };

  const btnBaseClass = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 border font-prompt";
  const btnActiveClass = "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20";
  const btnInactiveClass = "bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400";

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-prompt">
      <header className="w-full bg-zinc-900 text-white rounded-none px-6 py-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="block text-4xl sm:text-5xl font-black tracking-tight text-white font-trirong">
            PhoneView
          </span>
          <p className="text-base sm:text-lg text-neutral-400 font-medium leading-relaxed font-prompt">
            เว็บสำหรับแนะนำมือถือสำหรับคุณ ในงบประมาณที่คุณมี & คุ้มค่าที่สุดที่คุณต้องการ
          </p>
        </div>
      </header>
      
      <main className="p-4 sm:p-6 max-w-6xl mx-auto mt-4">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200/80 mb-8 transition-all">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full">
            <input 
              placeholder="ค้นหารุ่นมือถือ... (เช่น Xiaomi 15)" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="flex-1 min-w-[180px] border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 text-gray-800 text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white font-prompt"
            />
            
            <button 
              onClick={() => setFilterbutton(!filterbutton)} 
              className={`whitespace-nowrap flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-sm font-prompt ${
                filterbutton 
                ? 'bg-zinc-800 text-white hover:bg-zinc-900' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${filterbutton ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              คัดกรอง
            </button>

            <button 
              onClick={() => SetfindButton(!getfindButton)}
              className="whitespace-nowrap flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-7 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg font-prompt"
            >
              <span>ค้นหาเลย</span>
            </button>
          </div>

          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              filterbutton 
                ? 'grid-rows-[1fr] opacity-100' 
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-5 pt-5 border-t border-gray-100 space-y-6">
                <div>
                  <p className="text-base font-bold text-gray-800 mb-3 font-trirong">ประเภทอุปกรณ์</p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setDeviceType("all")} className={`${btnBaseClass} ${deviceType === "all" ? btnActiveClass : btnInactiveClass}`}>ทั้งหมด</button>
                    <button onClick={() => setDeviceType("phone")} className={`${btnBaseClass} ${deviceType === "phone" ? btnActiveClass : btnInactiveClass}`}>สมาร์ทโฟน</button>
                    <button onClick={() => setDeviceType("tablet")} className={`${btnBaseClass} ${deviceType === "tablet" ? btnActiveClass : btnInactiveClass}`}>แท็บเล็ต</button>
                  </div>
                </div>

                <div>
                  <p className="text-base font-bold text-gray-800 mb-3 font-trirong">ระดับราคา (Price Tier)</p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setPriceTier("all")} className={`${btnBaseClass} ${priceTier === "all" ? btnActiveClass : btnInactiveClass}`}>ทั้งหมด</button>
                    {Object.entries(priceTierLabels).map(([key, label]) => (
                      <button 
                        key={key} 
                        onClick={() => setPriceTier(key)} 
                        className={`${btnBaseClass} ${priceTier === key ? btnActiveClass : btnInactiveClass}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base font-bold text-gray-800 mb-3 font-trirong">จุดเด่นที่คุณต้องการ</p>
                  <div className="flex flex-wrap gap-2.5">
                    {Object.keys(RecChoos).map((key) => {
                      if (key === "activate") return null;
                      const filterKey = key as keyof typeof RecChoos;
                      if (!filterLabels[filterKey]) return null;

                      return (
                        <button 
                          key={filterKey}
                          onClick={() => SetRecChoos({ ...RecChoos, [filterKey]: !RecChoos[filterKey] })}
                          className={`${btnBaseClass} ${RecChoos[filterKey] ? btnActiveClass : btnInactiveClass}`}
                        >
                          {filterLabels[filterKey].text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ✅ ล็อค min-h-[500px] ป้องกันพื้นที่วูบวาบเมื่อผลการค้นหาเปลี่ยน */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[500px] align-start">
          {PhoneArr.length > 0 ? (
            PhoneArr.map((Data, index) => (
              <Phonecard key={Data.name || index} Device={Data} PropCard={setCardProp}/>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 h-fit">
              <p className="text-gray-600 text-lg font-semibold font-trirong">ไม่พบข้อมูลที่ตรงกับการค้นหา</p>
              <p className="text-gray-400 text-sm mt-1 font-prompt">ลองเปลี่ยนคำค้นหา หรือลดการตั้งค่าคัดกรองลง</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setDeviceType("all");
                  setPriceTier("all");
                  SetRecChoos({ activate: false, gaming: false, camera: false, durability: false, budget: false, performance: false, battery: false, entertainment: false });
                }}
                className="mt-4 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors font-prompt"
              >
                ล้างการตั้งค่าทั้งหมด
              </button>
            </div>
          )}
        </div>
        
        {CardProp && ResultphoneDat && <Phonepage phoneDat={ResultphoneDat} PhoneProp={() => setCardProp(null)} />}
      </main>
      
      <footer className="w-full bg-zinc-950 text-zinc-400 font-prompt border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-zinc-800/80">
            <div className="space-y-3">
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                เว็บไซต์รวบรวมและแนะนำสเปกสมาร์ทโฟนและแท็บเล็ต เพื่อช่วยให้คุณเลือกซื้อเครื่องที่คุ้มค่าและตอบโจทย์การใช้งานมากที่สุด
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-trirong text-base font-semibold text-zinc-200">ติดต่อเรา</h3>
              <div className="flex flex-col gap-3 text-sm">
                <a href="https://www.facebook.com/share/1BW1m1aiFN/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  Messenger: Thongkam Theawpan
                </a>
                <a href="https://line.me/ti/p/~thongkam theawpan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  LINE: thongkam theawpan
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs text-zinc-500 leading-relaxed mb-8">
            <p><span className="font-medium text-zinc-400">ข้อจำกัดความรับผิดชอบเรื่องราคา:</span> ราคาสินค้าที่แสดงบนเว็บไซต์เป็นราคากลางหรือราคาอ้างอิง ณ วันที่บันทึกข้อมูล ซึ่งอาจมีการเปลี่ยนแปลงตามโปรโมชันหรือส่วนลดของแต่ละแพลตฟอร์ม</p>
            <p><span className="font-medium text-zinc-400">การเปิดเผยลิงก์พันธมิตร:</span> เว็บไซต์นี้อาจได้รับค่าตอบแทนจากการสั่งซื้อสินค้าผ่านลิงก์พันธมิตร (Shopee / Lazada)</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 pt-4 border-t border-zinc-900">
            <p>&copy; 2026 PhoneView. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
