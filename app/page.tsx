"use client";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Allphone } from '../data/index';
import { Phonecard } from '../components/Cardphone'; 
import Phonepage from './phonepage/Phonepages';
import GeminiChat, { ExploredPhoneInfo } from '../components/GeminiChat';

export default function App() {
  const [filterbutton, setFilterbutton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [getfindButton, SetfindButton] = useState(false);
  const [randomSeed, setRandomSeed] = useState(1);

  const priceTierScrollRef = useRef<HTMLDivElement>(null);
  const recChoosScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  const [deviceType, setDeviceType] = useState<string>("all");
  const [priceTier, setPriceTier] = useState<string>("all");
  
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [inputMinPrice, setInputMinPrice] = useState<string>("");
  const [inputMaxPrice, setInputMaxPrice] = useState<string>("");

  const [lastExploredPhone, setLastExploredPhone] = useState<ExploredPhoneInfo | null>(null);
  const [openChatSignal, setOpenChatSignal] = useState<number>(0);

  const handleExplorePhone = (phoneName: string) => {
    setCardProp(phoneName);
    const found = Allphone.find((p) => p.name === phoneName);
    if (found) {
      setLastExploredPhone({
        name: found.name,
        brand: found.brand,
        price: found.latestPrice?.defaultPrice,
      });
    }
  };

  const handleAskGeminiDirectly = (phoneName: string) => {
    const found = Allphone.find((p) => p.name === phoneName);
    if (found) {
      setLastExploredPhone({
        name: found.name,
        brand: found.brand,
        price: found.latestPrice?.defaultPrice,
      });
    }
    setOpenChatSignal((prev) => prev + 1);
  };

  useEffect(() => {
    const delayFilter = setTimeout(() => {
      setMinPrice(inputMinPrice);
      setMaxPrice(inputMaxPrice);
    }, 600); 

    return () => clearTimeout(delayFilter);
  }, [inputMinPrice, inputMaxPrice]);

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
  
  const [CardProp, setCardProp] = useState<string | null>(null);
  const ResultphoneDat = CardProp ? Allphone.find(phone => phone.name === CardProp) : null;

  const PhoneArr = useMemo(() => {
    if (!Allphone) return [];

    const filtered = Allphone.filter(phone => {
      if (deviceType !== "all") {
        const pType = phone.type?.toLowerCase() || "";
        if (deviceType === "phone" && pType !== "phone" && pType !== "smartphone") return false;
        if (deviceType === "tablet" && pType !== "tablet") return false;
      }

      if (priceTier !== "all" && phone.priceTier !== priceTier) return false;

      if (minPrice !== "" || maxPrice !== "") {
        const price = phone.latestPrice?.defaultPrice || 0;
        const min = minPrice !== "" ? Number(minPrice) : 0;
        const max = maxPrice !== "" ? Number(maxPrice) : Infinity;
        if (price < min || price > max) return false;
      }

      if (searchTerm.trim() !== "") {
        const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
        const phoneName = (phone.name || "").toLowerCase();
        const brandName = (phone.brand || "").toLowerCase();
        const fullName = `${brandName} ${phoneName}`;
        const matchName = searchWords.every(word => fullName.includes(word));
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

    // Default: smart_shuffle (สุ่มปนๆ กันโดยจัดกลุ่มตามระดับเรือธง -> ระดับสูง -> กลาง -> เริ่มต้น แล้วสุ่มคละในแต่ละกลุ่มและสลับแบรนด์ให้หลากหลาย)
    const tierPriorityOrder: Record<string, number> = {
      "flagship": 1,
      "high-end": 2,
      "upper-midrange": 3,
      "midrange": 4,
      "entry-midrange": 5,
      "budget": 6,
      "entry": 7
    };

    // Group items by tier group
    const groups: Record<number, typeof filtered> = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 99: [] };
    filtered.forEach(item => {
      const order = tierPriorityOrder[item.priceTier] || 99;
      groups[order].push(item);
    });

    let result: typeof filtered = [];
    let seed = randomSeed;

    // Helper seeded shuffle for an array
    const shuffleArray = (arr: typeof filtered) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        seed = (seed * 9301 + 49297) % 233280;
        const j = Math.floor((seed / 233280) * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    [1, 2, 3, 4, 5, 6, 7, 99].forEach(tierKey => {
      const tierItems = groups[tierKey];
      if (tierItems && tierItems.length > 0) {
        result = result.concat(shuffleArray(tierItems));
      }
    });

    return result;
  }, [getfindButton, deviceType, priceTier, RecChoos, minPrice, maxPrice, searchTerm, randomSeed]); 

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

  const handleResetScroll = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ left: 0 });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-prompt overflow-x-hidden w-full max-w-full">
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
      
      <main className="p-4 sm:p-6 max-w-6xl mx-auto mt-4 w-full overflow-x-hidden">
        <div className="relative z-30 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200/80 transition-all">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full">
              <input 
                placeholder="ค้นหารุ่นมือถือ... (เช่น Xiaomi 15)" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="flex-1 min-w-[180px] border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 text-gray-800 text-base sm:text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white font-prompt"
              />
              
              <button 
                onClick={() => setRandomSeed(prev => prev + 1)}
                title="เรียบเรียงลำดับใหม่"
                aria-label="เรียบเรียงลำดับใหม่"
                className="whitespace-nowrap flex items-center justify-center p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border border-gray-200 text-gray-700 transition-all duration-300 active:scale-95 shadow-sm"
              >
                <svg 
                  className="w-5 h-5 text-gray-700 hover:rotate-180 transition-transform duration-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>

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
          </div>

          {/* เมนูคัดกรองแบบ Overlay ลอยทับเนื้อหาด้านล่าง โดยไม่ดันการ์ดมือถือลงไป */}
          <div 
            className={`absolute left-0 right-0 top-full mt-2 z-40 transition-all duration-300 origin-top ${
              filterbutton 
                ? 'opacity-100 scale-y-100 pointer-events-auto visible' 
                : 'opacity-0 scale-y-95 pointer-events-none invisible'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/90 p-5 sm:p-6 space-y-6">
              {/* ประเภทอุปกรณ์ */}
              <div>
                <p className="text-base font-bold text-gray-800 mb-3 font-trirong">ประเภทอุปกรณ์</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setDeviceType("all")} className={`${btnBaseClass} ${deviceType === "all" ? btnActiveClass : btnInactiveClass}`}>ทั้งหมด</button>
                  <button onClick={() => setDeviceType("phone")} className={`${btnBaseClass} ${deviceType === "phone" ? btnActiveClass : btnInactiveClass}`}>สมาร์ทโฟน</button>
                  <button onClick={() => setDeviceType("tablet")} className={`${btnBaseClass} ${deviceType === "tablet" ? btnActiveClass : btnInactiveClass}`}>แท็บเล็ต</button>
                </div>
              </div>

              {/* ระดับราคา (เลื่อนซ้าย-ขวา พร้อมปุ่ม Glassmorphism ไม่บังปุ่ม) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-base font-bold text-gray-800 font-trirong">ระดับราคา (Price Tier)</p>
                  <span className="text-xs text-gray-400 font-prompt hidden sm:inline">เลื่อนซ้าย-ขวาเพื่อดูเพิ่มเติม</span>
                </div>
                
                <div className="relative group w-full">
                  {/* ปุ่มเลื่อนซ้าย Glassmorphism */}
                  <button
                    type="button"
                    onClick={() => scrollLeft(priceTierScrollRef)}
                    aria-label="เลื่อนซ้าย"
                    className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all active:scale-90 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* แถบรายการระดับราคาเลื่อนแนวนอน */}
                  <div
                    ref={priceTierScrollRef}
                    className="flex items-center gap-2.5 overflow-x-auto hide-scrollbar scroll-smooth px-8 sm:px-9 py-1.5 w-full"
                  >
                    <button 
                      onClick={() => {
                        setPriceTier("all");
                        setInputMinPrice("");
                        setInputMaxPrice("");
                      }} 
                      className={`${btnBaseClass} shrink-0 whitespace-nowrap ${priceTier === "all" ? btnActiveClass : btnInactiveClass}`}
                    >
                      ทั้งหมด
                    </button>

                    {Object.entries(priceTierLabels).map(([key, label]) => (
                      <button 
                        key={key} 
                        onClick={() => {
                          setPriceTier(key);
                          setInputMinPrice("");
                          setInputMaxPrice("");
                        }} 
                        className={`${btnBaseClass} shrink-0 whitespace-nowrap ${priceTier === key ? btnActiveClass : btnInactiveClass}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* ปุ่มเลื่อนขวา Glassmorphism */}
                  <button
                    type="button"
                    onClick={() => scrollRight(priceTierScrollRef)}
                    aria-label="เลื่อนขวา"
                    className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all active:scale-90 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 mt-4 w-full max-w-full">
                  <input 
                    type="number"
                    placeholder="ราคาต่ำสุด"
                    value={inputMinPrice}
                    onChange={(e) => {
                      setInputMinPrice(e.target.value);
                      if (e.target.value !== "") setPriceTier("all");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        setMinPrice(inputMinPrice);
                        e.currentTarget.blur();
                        handleResetScroll();
                      }
                    }}
                    onBlur={handleResetScroll}
                    className="flex-1 min-w-0 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-2.5 text-gray-800 text-base sm:text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white font-prompt"
                  />
                  <span className="text-gray-400 font-medium shrink-0">-</span>
                  <input 
                    type="number"
                    placeholder="ราคาสูงสุด"
                    value={inputMaxPrice}
                    onChange={(e) => {
                      setInputMaxPrice(e.target.value);
                      if (e.target.value !== "") setPriceTier("all");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        setMaxPrice(inputMaxPrice);
                        e.currentTarget.blur();
                        handleResetScroll();
                      }
                    }}
                    onBlur={handleResetScroll}
                    className="flex-1 min-w-0 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-2.5 text-gray-800 text-base sm:text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white font-prompt"
                  />
                </div>
              </div>

              {/* จุดเด่นที่คุณต้องการ (เลื่อนซ้าย-ขวา พร้อมปุ่ม Glassmorphism ไม่บังปุ่ม) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-base font-bold text-gray-800 font-trirong">จุดเด่นที่คุณต้องการ</p>
                  <span className="text-xs text-gray-400 font-prompt hidden sm:inline">เลื่อนซ้าย-ขวาเพื่อเลือกจุดเด่น</span>
                </div>

                <div className="relative group w-full">
                  {/* ปุ่มเลื่อนซ้าย Glassmorphism */}
                  <button
                    type="button"
                    onClick={() => scrollLeft(recChoosScrollRef)}
                    aria-label="เลื่อนซ้าย"
                    className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all active:scale-90 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* แถบรายการจุดเด่นเลื่อนแนวนอน */}
                  <div
                    ref={recChoosScrollRef}
                    className="flex items-center gap-2.5 overflow-x-auto hide-scrollbar scroll-smooth px-8 sm:px-9 py-1.5 w-full"
                  >
                    {Object.keys(RecChoos).map((key) => {
                      if (key === "activate") return null;
                      const filterKey = key as keyof typeof RecChoos;
                      if (!filterLabels[filterKey]) return null;

                      return (
                        <button 
                          key={filterKey}
                          onClick={() => SetRecChoos({ ...RecChoos, [filterKey]: !RecChoos[filterKey] })}
                          className={`${btnBaseClass} shrink-0 whitespace-nowrap ${RecChoos[filterKey] ? btnActiveClass : btnInactiveClass}`}
                        >
                          {filterLabels[filterKey].text}
                        </button>
                      );
                    })}
                  </div>

                  {/* ปุ่มเลื่อนขวา Glassmorphism */}
                  <button
                    type="button"
                    onClick={() => scrollRight(recChoosScrollRef)}
                    aria-label="เลื่อนขวา"
                    className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all active:scale-90 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[700px] content-start items-start">
          {PhoneArr.length > 0 ? (
            PhoneArr.map((Data, index) => (
              <Phonecard key={Data.name || index} Device={Data} PropCard={handleExplorePhone}/>
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
                  setInputMinPrice("");
                  setInputMaxPrice("");
                  setMinPrice("");
                  setMaxPrice("");
                  SetRecChoos({ activate: false, gaming: false, camera: false, durability: false, budget: false, performance: false, battery: false, entertainment: false });
                }}
                className="mt-4 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors font-prompt"
              >
                ล้างการตั้งค่าทั้งหมด
              </button>
            </div>
          )}
        </div>
        
        {CardProp && ResultphoneDat && (
          <Phonepage
            phoneDat={ResultphoneDat}
            PhoneProp={() => setCardProp(null)}
            onAskAI={handleAskGeminiDirectly}
          />
        )}
      </main>
      
      <footer className="w-full bg-zinc-950 text-zinc-400 font-prompt border-t border-zinc-800">
  <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-zinc-800/80">
      <div className="space-y-3">
        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
          เว็บไซต์รวบรวมและแนะนำสเปกสมาร์ทโฟนและแท็บเล็ต เพื่อช่วยให้คุณเลือกซื้อเครื่องที่คุ้มค่าและตอบโจทย์การใช้งานมากที่สุด
        </p>
        <p className="text-sm font-semibold text-zinc-200/70 leading-relaxed max-w-sm">
           ข้อมูลต่างๆและคำอธิบายเว็บไซต์นี้อาจผิดพลาดได้ คุณสามารถค้นหามือถือรุ่นใดๆที่คุณสนใจเพิ่มเติมได้ผ่านแพลตฟอร์ม GSMArena, Droidsans และอื่นๆเพิ่มเติมได้
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

    <div className="space-y-3 text-xs leading-relaxed mb-8">
      <p className="text-zinc-200 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
        <span className="font-semibold text-white">คำชี้แจงเรื่องราคาสินค้า:</span> ราคาสินค้าแต่ละรุ่นอาจมีความแตกต่างกันขึ้นอยู่กับร้านค้าผู้จำหน่าย ทั้งนี้ ราคาที่แสดงบนเว็บไซต์เป็นราคาอ้างอิงที่คำนวณจากโปรโมชันและส่วนลดของร้านค้าหรือแพลตฟอร์มแล้ว แต่<span className="text-white font-medium underline decoration-zinc-500 underline-offset-4">ยังไม่รวมโค้ดส่วนลดส่วนบุคคลของผู้ใช้งาน</span>
      </p>
      <p className="text-zinc-500 px-1">
        <span className="font-medium text-zinc-400">การเปิดเผยลิงก์พันธมิตร:</span> เว็บไซต์นี้อาจได้รับค่าตอบแทนจากการสั่งซื้อสินค้าผ่านลิงก์พันธมิตร (Shopee / Lazada)
      </p>
    </div>

    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 pt-4 border-t border-zinc-900">
      <p>&copy; 2026 PhoneView. All rights reserved.</p>
    </div>
  </div>
</footer>
      
      <GeminiChat
        lastExploredPhone={lastExploredPhone}
        onClearExploredPhone={() => setLastExploredPhone(null)}
        openSignal={openChatSignal}
      />
    </div>
  );
}
