"use client";
import React, { useState, useEffect } from 'react';
import { Allphone } from '../data/index';
import { Phonecard } from '../components/Cardphone'; 

export default function App() {
  const [filterbutton, setFilterbutton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [getfindButton, SetfindButton] = useState(false);
  const [PhoneArr, setPhoneArr] = useState<any[]>([]); 

  // --- State สำหรับคัดกรองเพิ่มเติม ---
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
  
  useEffect(() => {
      if (!Allphone) return;

      const FilteredData = Allphone.filter(phone => {
          // 1. คัดกรองประเภทอุปกรณ์ (Device Type)
          if (deviceType !== "all") {
            const pType = phone.type?.toLowerCase() || "";
            if (deviceType === "phone" && pType !== "phone" && pType !== "smartphone") return false;
            if (deviceType === "tablet" && pType !== "tablet") return false;
          }

          // 2. คัดกรองระดับราคา (Price Tier)
          if (priceTier !== "all") {
            if (phone.priceTier !== priceTier) return false;
          }

          // 3. คัดกรองจากคำค้นหา (Search Term)
          if (searchTerm.trim() !== "") {
              const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
              const phoneName = phone.name?.toLowerCase() || "";
              const matchName = searchWords.every(word => phoneName.includes(word));
              if (!matchName) return false; 
          }

          // 4. คัดกรองจากจุดเด่น (Recommended)
          for (const key in RecChoos) {
              if (key === "activate") continue; 
              const filterKey = key as keyof typeof RecChoos;
              if (RecChoos[filterKey] === true && phone.recommended?.[filterKey] !== true) {
                  return false; 
              }
          }

          return true; 
      });
      
      setPhoneArr(FilteredData);
      
  // 🟢 เพิ่ม deviceType และ priceTier ลงใน Dependency เพื่อให้ค้นหาใหม่ทันทีเมื่อเปลี่ยนค่า
  }, [getfindButton, deviceType, priceTier]); 

  // --- ข้อมูล Label ต่างๆ ---
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

  // สไตล์ปุ่มที่ใช้ซ้ำ
  const btnBaseClass = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 border";
  const btnActiveClass = "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20";
  const btnInactiveClass = "bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400";

  return (
    <div className="min-h-screen bg-zinc-100/70 font-prompt">
      
      <header className="w-full bg-zinc-900 text-white rounded-none px-6 py-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="block text-4xl sm:text-5xl font-black tracking-tight text-white font-trirong">
            PhoneView
          </span>
          <p className="text-base sm:text-lg text-neutral-400 font-medium leading-relaxed">
            เว็บสำหรับแนะนำมือถือสำหรับคุณ ในงบประมาณที่คุณมี & คุ้มค่าที่สุดที่คุณต้องการ
          </p>
        </div>
      </header>
      
      <main className="p-4 sm:p-6 max-w-6xl mx-auto mt-4">
        
        {/* กล่องควบคุมการค้นหา */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200/80 mb-8 transition-all">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full">
            
            <input 
              placeholder="ค้นหารุ่นมือถือ... (เช่น Xiaomi 15)" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="flex-1 min-w-[180px] border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 text-gray-800 text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
            />
            
            <button 
              onClick={() => setFilterbutton(!filterbutton)} 
              className={`whitespace-nowrap flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-sm ${
                filterbutton 
                ? 'bg-zinc-800 text-white hover:bg-zinc-900' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              คัดกรอง {filterbutton ? '↑' : '↓'}
            </button>

            <button 
              onClick={() => SetfindButton(!getfindButton)}
              className="whitespace-nowrap flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-7 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
            >
              <span>ค้นหาเลย</span>
            </button>

          </div>

          {/* 🟢 ส่วนของการ์ดฟิลเตอร์ที่จัดระเบียบใหม่ */}
          {filterbutton && (
            <div className="mt-5 pt-5 border-t border-gray-100 space-y-6">
              
              {/* 1. หมวดหมู่: ประเภทอุปกรณ์ */}
              <div>
                <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span> ประเภทอุปกรณ์
                </p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setDeviceType("all")} className={`${btnBaseClass} ${deviceType === "all" ? btnActiveClass : btnInactiveClass}`}>ทั้งหมด</button>
                  <button onClick={() => setDeviceType("phone")} className={`${btnBaseClass} ${deviceType === "phone" ? btnActiveClass : btnInactiveClass}`}>สมาร์ทโฟน</button>
                  <button onClick={() => setDeviceType("tablet")} className={`${btnBaseClass} ${deviceType === "tablet" ? btnActiveClass : btnInactiveClass}`}>แท็บเล็ต</button>
                </div>
              </div>

              {/* 2. หมวดหมู่: ระดับราคา */}
              <div>
                <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-green-500 rounded-full"></span> ระดับราคา (Price Tier)
                </p>
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

              {/* 3. หมวดหมู่: จุดเด่น */}
              <div>
                <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-amber-500 rounded-full"></span> จุดเด่นที่คุณต้องการ
                </p>
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
          )}
        </div>
        
        {/* กล่องแสดงผลลัพธ์ Card มือถือ */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PhoneArr.length > 0 ? (
            PhoneArr.map((Data, index) => (
              <Phonecard key={Data.id || index} Device={Data} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-600 text-lg font-semibold">ไม่พบข้อมูลที่ตรงกับการค้นหา</p>
              <p className="text-gray-400 text-sm mt-1">ลองเปลี่ยนคำค้นหา หรือลดการตั้งค่าคัดกรองลง</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setDeviceType("all");
                  setPriceTier("all");
                  SetRecChoos({ activate: false, gaming: false, camera: false, durability: false, budget: false, performance: false, battery: false, entertainment: false });
                }}
                className="mt-4 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                ล้างการตั้งค่าทั้งหมด
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
