"use client";
import React, { useState, useEffect } from 'react';
import { Allphone } from '../data/index';
import { Phonecard } from '../components/Cardphone'; 
import Phonepage from './phonepage/Phonepages';

// Constants สำหรับ className ที่ใช้บ่อย
const STYLES = {
  // Button styles
  btnBase: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 border font-prompt",
  btnActive: "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20",
  btnInactive: "bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400",
  
  // Layout
  pageContainer: "min-h-screen bg-[#F4F3EE] font-prompt",
  mainContainer: "p-4 sm:p-6 max-w-6xl mx-auto mt-4",
  
  // Header
  header: "w-full bg-zinc-900 text-white rounded-none px-6 py-8 shadow-md",
  headerContent: "max-w-4xl mx-auto space-y-3",
  headerTitle: "block text-4xl sm:text-5xl font-black tracking-tight text-white font-trirong",
  headerDescription: "text-base sm:text-lg text-neutral-400 font-medium leading-relaxed font-prompt",
  
  // Filter card
  filterCard: "bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200/80 mb-8 transition-all",
  filterTopRow: "flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full",
  
  // Input
  searchInput: "flex-1 min-w-[180px] border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 text-gray-800 text-sm rounded-xl outline-none transition-all duration-300 bg-gray-50 focus:bg-white font-prompt",
  
  // Filter toggle button
  filterToggleBtn: "whitespace-nowrap flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-sm font-prompt",
  filterToggleActive: "bg-zinc-800 text-white hover:bg-zinc-900",
  filterToggleInactive: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200",
  
  // Search button
  searchBtn: "whitespace-nowrap flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-7 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg font-prompt",
  
  // Icon
  icon: "w-4 h-4 transition-transform duration-300",
  iconRotated: "rotate-180",
  iconNotRotated: "rotate-0",
  
  // Filter dropdown
  filterDropdown: "transition-all duration-500 ease-in-out overflow-hidden",
  filterDropdownOpen: "max-h-[1000px] opacity-100 mt-5 pt-5 border-t border-gray-100",
  filterDropdownClosed: "max-h-0 opacity-0 mt-0 pt-0 border-transparent",
  
  // Filter section
  filterSection: "space-y-6",
  filterSectionTitle: "text-base font-bold text-gray-800 mb-3 font-trirong",
  filterButtonGroup: "flex flex-wrap gap-2",
  filterButtonGroupWide: "flex flex-wrap gap-2.5",
  
  // Phone grid
  phoneGrid: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
  
  // Empty state
  emptyState: "col-span-full flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300",
  emptyStateTitle: "text-gray-600 text-lg font-semibold font-trirong",
  emptyStateDescription: "text-gray-400 text-sm mt-1 font-prompt",
  clearBtn: "mt-4 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors font-prompt",
  
  // Footer
  footer: "w-full bg-zinc-950 text-zinc-400 font-prompt border-t border-zinc-800",
  footerContent: "max-w-4xl mx-auto px-4 py-8 md:py-12",
  footerGrid: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-zinc-800/80",
  footerSection: "space-y-3",
  footerDescription: "text-sm text-zinc-400 leading-relaxed max-w-sm",
  footerTitle: "font-trirong text-base font-semibold text-zinc-200",
  footerLinks: "flex flex-col gap-3 text-sm",
  footerLink: "inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors",
  footerDot: "w-1.5 h-1.5 rounded-full bg-zinc-500",
  footerDisclaimer: "space-y-3 text-xs text-zinc-500 leading-relaxed mb-8",
  footerDisclaimerHighlight: "font-medium text-zinc-400",
  footerDisclaimerMuted: "text-zinc-600",
  footerBottom: "flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 pt-4 border-t border-zinc-900"
};

export default function App() {
  const [filterbutton, setFilterbutton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [getfindButton, SetfindButton] = useState(false);
  const [PhoneArr, setPhoneArr] = useState<any[]>([]); 

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
  const [CardProp, setCardProp] = useState<string>("null");
  const ResultphoneDat = CardProp ? Allphone.find(phone => phone.name === CardProp): null;
  
  useEffect(() => {
      if (!Allphone) return;

      const FilteredData = Allphone.filter(phone => {
          if (deviceType !== "all") {
            const pType = phone.type?.toLowerCase() || "";
            if (deviceType === "phone" && pType !== "phone" && pType !== "smartphone") return false;
            if (deviceType === "tablet" && pType !== "tablet") return false;
          }

          if (priceTier !== "all") {
            if (phone.priceTier !== priceTier) return false;
          }

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
      
      setPhoneArr(FilteredData);
      
  }, [getfindButton, deviceType, priceTier]); 

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

  // Helper functions สำหรับ className
  const getButtonClass = (isActive: boolean) => 
    `${STYLES.btnBase} ${isActive ? STYLES.btnActive : STYLES.btnInactive}`;

  const getFilterToggleClass = (isOpen: boolean) => 
    `${STYLES.filterToggleBtn} ${isOpen ? STYLES.filterToggleActive : STYLES.filterToggleInactive}`;

  const getFilterDropdownClass = (isOpen: boolean) => 
    `${STYLES.filterDropdown} ${isOpen ? STYLES.filterDropdownOpen : STYLES.filterDropdownClosed}`;

  const getIconClass = (isRotated: boolean) => 
    `${STYLES.icon} ${isRotated ? STYLES.iconRotated : STYLES.iconNotRotated}`;

  return (
    <div className={STYLES.pageContainer}>
      
      <header className={STYLES.header}>
        <div className={STYLES.headerContent}>
          <span className={STYLES.headerTitle}>
            PhoneView
          </span>
          <p className={STYLES.headerDescription}>
            เว็บสำหรับแนะนำมือถือสำหรับคุณ ในงบประมาณที่คุณมี & คุ้มค่าที่สุดที่คุณต้องการ
          </p>
        </div>
      </header>
      
      <main className={STYLES.mainContainer}>
        
        <div className={STYLES.filterCard}>
          <div className={STYLES.filterTopRow}>
            
            <input 
              placeholder="ค้นหารุ่นมือถือ... (เช่น Xiaomi 15)" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className={STYLES.searchInput}
            />
            
            <button 
              onClick={() => setFilterbutton(!filterbutton)} 
              className={getFilterToggleClass(filterbutton)}
            >
              <svg 
                className={getIconClass(filterbutton)} 
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
              className={STYLES.searchBtn}
            >
              <span>ค้นหาเลย</span>
            </button>

          </div>

          <div className={getFilterDropdownClass(filterbutton)}>
            <div className={STYLES.filterSection}>
              
              <div>
                <p className={STYLES.filterSectionTitle}>
                  ประเภทอุปกรณ์
                </p>
                <div className={STYLES.filterButtonGroup}>
                  <button onClick={() => setDeviceType("all")} className={getButtonClass(deviceType === "all")}>ทั้งหมด</button>
                  <button onClick={() => setDeviceType("phone")} className={getButtonClass(deviceType === "phone")}>สมาร์ทโฟน</button>
                  <button onClick={() => setDeviceType("tablet")} className={getButtonClass(deviceType === "tablet")}>แท็บเล็ต</button>
                </div>
              </div>

              <div>
                <p className={STYLES.filterSectionTitle}>
                  ระดับราคา (Price Tier)
                </p>
                <div className={STYLES.filterButtonGroup}>
                  <button onClick={() => setPriceTier("all")} className={getButtonClass(priceTier === "all")}>ทั้งหมด</button>
                  {Object.entries(priceTierLabels).map(([key, label]) => (
                    <button 
                      key={key} 
                      onClick={() => setPriceTier(key)} 
                      className={getButtonClass(priceTier === key)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className={STYLES.filterSectionTitle}>
                  จุดเด่นที่คุณต้องการ
                </p>
                <div className={STYLES.filterButtonGroupWide}>
                  {Object.keys(RecChoos).map((key) => {
                    if (key === "activate") return null;
                    const filterKey = key as keyof typeof RecChoos;
                    if (!filterLabels[filterKey]) return null;

                    return (
                      <button 
                        key={filterKey}
                        onClick={() => SetRecChoos({ ...RecChoos, [filterKey]: !RecChoos[filterKey] })}
                        className={getButtonClass(RecChoos[filterKey])}
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
        
        <div className={STYLES.phoneGrid}>
          {PhoneArr.length > 0 ? (
            PhoneArr.map((Data, index) => (
              <Phonecard key={Data.id || index} Device={Data} PropCard={setCardProp}/>
            ))
          ) : (
            <div className={STYLES.emptyState}>
              <p className={STYLES.emptyStateTitle}>ไม่พบข้อมูลที่ตรงกับการค้นหา</p>
              <p className={STYLES.emptyStateDescription}>ลองเปลี่ยนคำค้นหา หรือลดการตั้งค่าคัดกรองลง</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setDeviceType("all");
                  setPriceTier("all");
                  SetRecChoos({ activate: false, gaming: false, camera: false, durability: false, budget: false, performance: false, battery: false, entertainment: false });
                }}
                className={STYLES.clearBtn}
              >
                ล้างการตั้งค่าทั้งหมด
              </button>
            </div>
          )}
        </div>
        {CardProp != "null" && <Phonepage phoneDat={ResultphoneDat} PhoneProp={setCardProp} /> }
      </main>
      
      <footer className={STYLES.footer}>
        <div className={STYLES.footerContent}>
          <div className={STYLES.footerGrid}>
            <div className={STYLES.footerSection}>
              <p className={STYLES.footerDescription}>
                เว็บไซต์รวบรวมและแนะนำสเปกสมาร์ทโฟนและแท็บเล็ต เพื่อช่วยให้คุณเลือกซื้อเครื่องที่คุ้มค่าและตอบโจทย์การใช้งานมากที่สุด
              </p>
            </div>

            <div className={STYLES.footerSection}>
              <h3 className={STYLES.footerTitle}>
                ติดต่อเรา
              </h3>

              <div className={STYLES.footerLinks}>
                <a
                  href="https://www.facebook.com/share/1BW1m1aiFN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={STYLES.footerLink}
                >
                  <span className={STYLES.footerDot}></span>
                  Messenger: Thongkam Theawpan
                </a>

                <a
                  href="https://line.me/ti/p/~thongkam theawpan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={STYLES.footerLink}
                >
                  <span className={STYLES.footerDot}></span>
                  LINE: thongkam theawpan
                </a>
              </div>
            </div>
          </div>

          <div className={STYLES.footerDisclaimer}>
            <p>
              <span className={STYLES.footerDisclaimerHighlight}>
                ข้อจำกัดความรับผิดชอบเรื่องราคา:
              </span>{" "}
              ราคาสินค้าที่แสดงบนเว็บไซต์เป็นราคากลางหรือราคาอ้างอิง ณ วันที่บันทึกข้อมูล ซึ่งอาจมีการเปลี่ยนแปลงตามโปรโมชันหรือส่วนลดของแต่ละแพลตฟอร์ม โปรดตรวจสอบราคาและเงื่อนไขล่าสุดบนหน้าเว็บของผู้ขายก่อนทำการสั่งซื้อทุกครั้ง
            </p>

            <p>
              <span className={STYLES.footerDisclaimerHighlight}>
                การเปิดเผยลิงก์พันธมิตร:
              </span>{" "}
              เว็บไซต์นี้อาจได้รับค่าตอบแทนจากการสั่งซื้อสินค้าผ่านลิงก์พันธมิตร (Shopee / Lazada) โดยที่ผู้ซื้อไม่ได้เสียค่าใช้จ่ายเพิ่มเติมใดๆ ทั้งสิ้น
            </p>

            <p className={STYLES.footerDisclaimerMuted}>
              ชื่อแบรนด์ โลโก้ และภาพผลิตภัณฑ์ทั้งหมดเป็นทรัพย์สินทางปัญญาและเครื่องหมายการค้าของบริษัทผู้ผลิตนั้นๆ
            </p>
          </div>

          <div className={STYLES.footerBottom}>
            <p>&copy; 2026 PhoneView. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
