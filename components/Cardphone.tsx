import React, { useRef } from 'react';

export function Phonecard({ Device }: { Device: any }) {
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
    <div className="w-full max-w-sm overflow-hidden border-[2px] border-zinc-300 rounded-xl p-4 bg-white transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:border-zinc-500">
      <div className="w-full">
        <div className="flex gap-2 items-center">           
          <p className="font-trirong font-extrabold text-xl">{Device.name}</p>
          {Device.priceTier && (
            <p className="text-xs text-gray-700 border border-gray-400 rounded-lg py-[2px] px-2 font-prompt">
              {Device.priceTier}
            </p>
          )}
        </div>
      
        <div 
          ref={specRef}
          onWheel={handleWheelScroll}
          className="max-h-40 overflow-x-auto flex gap-4 whitespace-nowrap w-full py-[2px] mt-2 text-sm font-prompt cursor-grab active:cursor-grabbing" 
          style={{ scrollbarWidth: 'none' }}
        >
          <p className="flex-shrink-0">•ประเภทอุปกรณ์: {getDeviceTypeTH(Device.type)}</p>
          {Device.chip && <p className="flex-shrink-0">•ชิปประมวลผล: {Device.chip}</p>}
          {Device.display && <p className="flex-shrink-0">•หน้าจอ: {Device.display}</p>}
          {Device.camera?.main && (
            <p className="flex-shrink-0">
              •กล้องหลัง: {Device.camera.main}MP {Device.camera?.video ? `, วิดีโอ: ${Device.camera.video}` : ''}
            </p>
          )}
          {Device.storageRam && Device.storageRam.length > 0 && (
            <>
              <p className="flex-shrink-0">•แรม: {Device.storageRam.map((item: any) => `${item.ram}GB`).join(", ")}</p>
              <p className="flex-shrink-0">•หน่วยความจำ: {Device.storageRam.map((item: any) => `${item.storage}GB`).join(", ")}</p>
            </>
          )}
          {Device.battery && <p className="flex-shrink-0">•ความจุแบตเตอรี่: {Device.battery} mAh</p>}
          {Device.charge?.wired && <p className="flex-shrink-0">•ความเร็วการชาร์จ: {Device.charge.wired}W</p>}
          {Device.speaker && <p className="flex-shrink-0">•ลำโพง: {Device.speaker}</p>}
        </div>
      </div>
    
      <div 
        ref={tagRef}
        onWheel={handleWheelScroll}
        className="flex gap-1.5 overflow-x-auto whitespace-nowrap w-full py-[2px] mt-2 font-prompt cursor-grab active:cursor-grabbing" 
        style={{ scrollbarWidth: 'none' }}
      >
        {Device.recommended?.gaming && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">เกมส์มิ่ง</p>} 
        {Device.recommended?.camera && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">การถ่ายภาพ</p>}
        {Device.recommended?.durability && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">ทนทาน</p>}
        {Device.recommended?.budget && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">งบประหยัด</p>}
        {Device.recommended?.performance && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">ประสิทธิภาพ</p>}
        {Device.recommended?.battery && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">แบตเตอรี่อึด</p>}
        {Device.recommended?.entertainment && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">ความบันเทิง</p>}
      </div>
      
      <hr className="my-3 border-gray-300" />
      
      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
  <p className="font-trirong font-semibold text-lg text-black">
    {Device.latestPrice?.defaultPrice
      ? `${Device.latestPrice.defaultPrice.toLocaleString()} บาท`
      : "ไม่ระบุราคา"}
  </p>

  <button className="font-prompt whitespace-nowrap bg-black font-bold text-white px-4 py-2 rounded-[12px] flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-105 hover:bg-zinc-800 active:bg-zinc-700/90 active:scale-95 shadow-md">
    สำรวจสเปค
  </button>
</div>
    </div>
  );
              }
        
