import React, { useRef } from 'react';

export function Phonecard({ Device, PropCard }: { Device: any, PropCard: (name: string) => void }) {
  const specRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  const getDeviceTypeTH = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'phone':
      case 'smartphone':
        return 'สมาร์ทโฟน';
      case 'tablet':
        return 'แท็บเล็ต';
      default:
        return type || 'สมาร์ทโฟน';
    }
  };

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY !== 0) {
      e.currentTarget.scrollLeft += e.deltaY;
    }
  };

  return (
    // เปลี่ยนมาใช้ h-full เพื่อให้ Card ยืดเต็มความสูงของกริด
    <div className="w-full h-400 flex flex-col justify-between border-2 border-zinc-200 rounded-2xl p-4 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-zinc-400">
      
      {/* บล็อกข้อมูลด้านบนทั้งหมด */}
      <div className="flex flex-col w-full">
        <div className="flex gap-2 items-center justify-between">           
          <p className="font-trirong font-extrabold text-xl line-clamp-1 text-zinc-900">{Device.name}</p>
          {Device.priceTier && (
            <p className="shrink-0 text-[11px] text-zinc-600 border border-zinc-300 bg-zinc-50 rounded-md py-0.5 px-2 font-prompt">
              {Device.priceTier}
            </p>
          )}
        </div>
      
        {/* ส่วนสเปก */}
        <div 
          ref={specRef}
          onWheel={handleWheelScroll}
          className="overflow-x-auto flex gap-x-3 gap-y-1 whitespace-nowrap md:flex-wrap md:whitespace-normal w-full py-1 mt-2 text-xs font-prompt text-zinc-600 no-scrollbar" 
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <p className="flex-shrink-0">•ประเภท: {getDeviceTypeTH(Device.type)}</p>
          {Device.chip && <p className="flex-shrink-0">•ชิป: {Device.chip}</p>}
          {Device.display && <p className="flex-shrink-0">•หน้าจอ: {Device.display}</p>}
          {Device.camera?.main && (
            <p className="flex-shrink-0">
              •กล้อง: {Device.camera.main}MP {Device.camera?.video ? `, วิดีโอ: ${Device.camera.video}` : ''}
            </p>
          )}
          {Device.storageRam && Device.storageRam.length > 0 && (
            <>
              <p className="flex-shrink-0">•RAM: {Device.storageRam.map((item: any) => `${item.ram}GB`).join(", ")}</p>
              <p className="flex-shrink-0">•ROM: {Device.storageRam.map((item: any) => `${item.storage}GB`).join(", ")}</p>
            </>
          )}
          {Device.battery && <p className="flex-shrink-0">•แบต: {Device.battery} mAh</p>}
          {Device.charge?.wired && <p className="flex-shrink-0">•ชาร์จไว: {Device.charge.wired}W</p>}
          {Device.speaker && <p className="flex-shrink-0">•ลำโพง: {Device.speaker}</p>}
        </div>
    
        {/* ส่วนป้ายแท็กแนะนำ */}
        <div 
          ref={tagRef}
          onWheel={handleWheelScroll}
          className="flex gap-1.5 overflow-x-auto whitespace-nowrap md:flex-wrap md:whitespace-normal w-full py-1 mt-1 font-prompt no-scrollbar" 
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {Device.recommended?.gaming && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">เกมส์มิ่ง</p>} 
          {Device.recommended?.camera && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">การถ่ายภาพ</p>}
          {Device.recommended?.durability && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">ทนทาน</p>}
          {Device.recommended?.budget && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">งบประหยัด</p>}
          {Device.recommended?.performance && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">ประสิทธิภาพ</p>}
          {Device.recommended?.battery && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">แบตเตอรี่อึด</p>}
          {Device.recommended?.entertainment && <p className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">ความบันเทิง</p>}
        </div>
      </div>
      
      {/* ใช้ mt-auto เพื่อดันส่วนราคาและปุ่มให้มาชิดกับคอนเทนต์ด้านบนแบบพอดี ไม่ให้มีช่องว่างเหลือเยอะเกินไป */}
      <div className="w-full pt-2 mt-2 border-t border-zinc-100">
        <div className="flex items-center justify-between gap-2">
          <p className="font-trirong font-bold text-lg text-black leading-none">
            {Device.latestPrice?.defaultPrice
              ? `${Device.latestPrice.defaultPrice.toLocaleString()} บาท`
              : "ไม่ระบุราคา"}
          </p>

          <button 
            className="font-prompt whitespace-nowrap bg-zinc-900 font-bold h-9 text-xs text-white px-3.5 rounded-xl flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-sm hover:bg-black" 
            onClick={() => PropCard(Device.name)}
          >
            สำรวจสเปค
          </button>
        </div>
      </div>

    </div>
  );
            }
