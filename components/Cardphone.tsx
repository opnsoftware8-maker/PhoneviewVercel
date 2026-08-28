"use client";

import React from "react";

type PhoneCardProps = {
  Device: any;
  PropCard: (name: string) => void;
};

export function Phonecard({ Device, PropCard }: PhoneCardProps) {
  const getDeviceTypeTH = (type: string) => {
    switch (type?.toLowerCase()) {
      case "phone":
      case "smartphone":
        return "สมาร์ทโฟน";
      case "tablet":
        return "แท็บเล็ต";
      default:
        return type || "สมาร์ทโฟน";
    }
  };

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY !== 0) {
      e.currentTarget.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="w-full h-[200px] flex flex-col overflow-hidden border-2 border-zinc-200 rounded-2xl p-4 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-zinc-400">
  
  <div className="flex gap-2 items-center justify-between shrink-0">
    <p className="font-trirong font-extrabold text-xl line-clamp-1 text-zinc-900">
      {Device.name}
    </p>
    {Device.priceTier && (
      <p className="shrink-0 text-[11px] text-zinc-600 border border-zinc-300 bg-zinc-50 rounded-md py-0.5 px-2 font-prompt">
        {Device.priceTier}
      </p>
    )}
  </div>

  <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar flex flex-col mt-2">
    
    <div
      onWheel={handleWheelScroll}
      className="w-full py-1 text-xs font-prompt text-zinc-600 no-scrollbar overflow-x-auto whitespace-nowrap md:whitespace-normal md:flex md:flex-wrap md:gap-x-3 md:gap-y-1"
      style={{
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <p className="inline-block mr-3 md:mr-0">•ประเภท: {getDeviceTypeTH(Device.type)}</p>
      {Device.chip && <p className="inline-block mr-3 md:mr-0">•ชิป: {Device.chip}</p>}
      {Device.display && <p className="inline-block mr-3 md:mr-0">•หน้าจอ: {Device.display}</p>}
      {Device.camera?.main && (
        <p className="inline-block mr-3 md:mr-0">
          •กล้อง: {Device.camera.main}MP
          {Device.camera?.video ? `, วิดีโอ: ${Device.camera.video}` : ""}
        </p>
      )}
      {Device.storageRam && Device.storageRam.length > 0 && (
        <>
          <p className="inline-block mr-3 md:mr-0">
            •RAM: {Device.storageRam.map((item: any) => `${item.ram}GB`).join(", ")}
          </p>
          <p className="inline-block mr-3 md:mr-0">
            •ROM: {Device.storageRam.map((item: any) => `${item.storage}GB`).join(", ")}
          </p>
        </>
      )}
      {Device.battery && <p className="inline-block mr-3 md:mr-0">•แบต: {Device.battery} mAh</p>}
      {Device.charge?.wired && <p className="inline-block mr-3 md:mr-0">•ชาร์จไว: {Device.charge.wired}W</p>}
      {Device.speaker && <p className="inline-block mr-3 md:mr-0">•ลำโพง: {Device.speaker}</p>}
    </div>

    <div
      onWheel={handleWheelScroll}
      className="w-full py-1 mt-1 font-prompt no-scrollbar overflow-x-auto whitespace-nowrap md:whitespace-normal md:flex md:flex-wrap md:gap-1.5"
      style={{
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {Device.recommended?.gaming && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">เกมส์มิ่ง</p>}
      {Device.recommended?.camera && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">การถ่ายภาพ</p>}
      {Device.recommended?.durability && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">ทนทาน</p>}
      {Device.recommended?.budget && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">งบประหยัด</p>}
      {Device.recommended?.performance && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">ประสิทธิภาพ</p>}
      {Device.recommended?.battery && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">แบตเตอรี่อึด</p>}
      {Device.recommended?.entertainment && <p className="inline-block mr-1.5 md:mr-0 text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md">ความบันเทิง</p>}
    </div>
    
  </div>

  <div className="w-full pt-2 mt-2 border-t border-zinc-100 shrink-0">
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
