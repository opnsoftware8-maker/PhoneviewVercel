"use client";
import React, { useState, useEffect } from 'react';
import { Allphone } from '../data/index';
import { Phonecard } from '../components/Cardphone'; 

export default function App() {
  const [filterbutton, setFilterbutton] = useState(false);
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
  const [searchTerm, setSearchTerm] = useState("");
  const [getfindButton, SetfindButton] = useState(false);
  const [PhoneArr, setPhoneArr] = useState<any[]>([]); 
  
  useEffect(() => {
      if (!Allphone) return;

      const FilteredData = Allphone.filter(phone => {
          if (searchTerm.trim() !== "") {
              const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
              const phoneName = phone.name?.toLowerCase() || "";
              
              const matchName = searchWords.every(word => phoneName.includes(word));
              if (!matchName) {
                  return false; 
              }
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
      
      setPhoneArr(FilteredData);
      
  }, [getfindButton]); 

  // ข้อมูลสำหรับปุ่มฟิลเตอร์ (ถอดอิโมจิออกทั้งหมดแล้ว)
  const filterLabels: Record<string, {text: string}> = {
    gaming: { text: "การเล่นเกม" },
    performance: { text: "ประสิทธิภาพ" },
    camera: { text: "งานภาพ/วิดีโอ" },
    durability: { text: "ความทนทาน" },
    budget: { text: "ความคุ้มค่า/งบประหยัด" },
    battery: { text: "แบตอึด" },
    entertainment: { text: "ดูหนัง/ความบันเทิง" }
  };

  return (
    <div className="min-h-screen bg-zinc-100/70"> {/* ปรับโทนสีพื้นหลังให้อ่อนนุ่มสายตาขึ้น */}
      
      {/* เอาเส้นขอบสีฟ้าใต้ Header ออกเรียบร้อย */}
      <header className="w-full bg-zinc-900 text-white rounded-none px-6 py-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="block text-4xl sm:text-5xl font-black tracking-tight text-white">
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
            
            {/* 1. ช่องค้นหา (ถอดอิโมจิออก) */}
            <input 
              placeholder="ค้นหารุ่นมือถือ... (เช่น Xiaomi 15)" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="flex-1 min-w-[180px] border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 text-gray-800 text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
            />
            
            {/* 2. ปุ่มเปิด/ปิด เมนูคัดกรอง */}
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

            {/* 3. ปุ่มค้นหาหลัก */}
            <button 
              onClick={() => SetfindButton(!getfindButton)}
              className="whitespace-nowrap flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-7 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
            >
              <span>ค้นหาเลย</span>
            </button>

          </div>

          {/* ส่วนของการ์ดฟิลเตอร์ */}
          {filterbutton && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">เลือกจุดเด่นที่คุณต้องการ:</p>
              <div className="flex flex-wrap gap-2.5">
                {Object.keys(RecChoos).map((key) => {
                  if (key === "activate") return null;
                  
                  const filterKey = key as keyof typeof RecChoos;
                  if (!filterLabels[filterKey]) return null;

                  return (
                    <button 
                      key={filterKey}
                      onClick={() => SetRecChoos({ ...RecChoos, [filterKey]: !RecChoos[filterKey] })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 border ${
                        RecChoos[filterKey] 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20' 
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      {filterLabels[filterKey].text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        
        {/* กล่องแสดงผลลัพธ์ Card มือถือ */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PhoneArr.length > 0 ? (
            PhoneArr.map((Data, index) => (
              <Phonecard key={Data.id || index} Device={Data} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-600 text-lg font-semibold">ไม่พบข้อมูลมือถือที่ตรงกับการค้นหา</p>
              <p className="text-gray-400 text-sm mt-1">ลองเปลี่ยนคำค้นหา หรือลดการตั้งค่าคัดกรองลง</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
