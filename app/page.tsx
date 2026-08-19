"use client";
import React, { useState, useEffect } from 'react';
import { Allphone } from '../data/index';
import { Phonecard } from './Cardphone'; 

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
      if (!Allphone || !Allphone.xiaomiphone) return;

      const FilteredData = Allphone.xiaomiphone.filter(phone => {
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

  return (
    <div>
      <header className="w-full bg-zinc-900 text-white rounded-none px-6 py-6 border-b border-neutral-800">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="block text-4xl sm:text-5xl font-bold text-zinc-200/90">
            PhoneView
          </span>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            เว็บสำหรับแนะนำมือถือสำหรับคุณ ในงบประมาณที่คุณมี & คุ้มค่าที่สุดที่คุณต้องการ
          </p>
        </div>
      </header>
      
      <main className="p-4 max-w-6xl mx-auto">
        <div>
          <div>
            <input 
              placeholder="ค้นหามือถือได้ที่นี่!" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="border p-2 mb-4 text-black rounded w-full max-w-md"
            />
          </div>
          
          <div>
            {!filterbutton ? (
              <button onClick={() => setFilterbutton(true)} className="bg-gray-200 p-2 text-black rounded">
                คัดกรอง ↓
              </button>
            ) : (
              <div className="border p-4 bg-gray-50 text-black rounded">
                <button onClick={() => setFilterbutton(false)} className="mb-2 font-bold">
                  คัดกรอง ↑
                </button>
                <div>
                  {!RecChoos.activate ? (
                    <button onClick={() => SetRecChoos({ ...RecChoos, activate: true })}>
                      ประเภทการใช้งาน ↓
                    </button>
                  ) : (
                    <div className="flex flex-col gap-2 items-start">
                      <button onClick={() => SetRecChoos({ ...RecChoos, activate: false })} className="font-bold text-blue-600">
                        <span>ประเภทการใช้งาน ↑</span>
                      </button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, gaming: !RecChoos.gaming })}> การเล่นเกม {RecChoos.gaming ? "✓" : "×"}</button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, performance: !RecChoos.performance })}> ประสิทธิภาพ {RecChoos.performance ? "✓" : "×"}</button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, camera: !RecChoos.camera })}> งานภาพ/วิดีโอ {RecChoos.camera ? "✓" : "×"}</button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, durability: !RecChoos.durability })}> ความทนทาน {RecChoos.durability ? "✓" : "×"}</button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, budget: !RecChoos.budget })}> ความคุ้มค่า/งบประหยัด {RecChoos.budget ? "✓" : "×"}</button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, battery: !RecChoos.battery })}> แบตอึด {RecChoos.battery ? "✓" : "×"}</button>
                      <button onClick={() => SetRecChoos({ ...RecChoos, entertainment: !RecChoos.entertainment })}> ดูหนัง/ความบันเทิง {RecChoos.entertainment ? "✓" : "×"}</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 px-6 rounded font-semibold transition-colors" onClick={() => SetfindButton(!getfindButton)}>
            <span>ค้นหา</span>
          </button>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PhoneArr.length > 0 ? (
            PhoneArr.map((Data, index) => (
              <Phonecard key={Data.id || index} Device={Data} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-8">ไม่พบข้อมูลมือถือที่ตรงกับการค้นหา</p>
          )}
        </div>
      </main>
    </div>
  );
}
