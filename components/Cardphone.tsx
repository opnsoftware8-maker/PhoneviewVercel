import React from 'react';

export function Phonecard({ Device }: { Device: any }) {
  return (
    <div className="p-4"> 
         <div className="w-full max-w-sm overflow-hidden border-[2px] border-zinc-300 rounded-xl p-4 bg-white transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:border-zinc-500">
             <div className="w-full">
                 <div className="flex gap-2 items-center">           
                 <p className="font-trirong font-extrabold text-xl">{Device.name}</p>
                 <p className="text-xs text-gray-700 border border-gray-400 border-[1px] rounded-lg py-[2px] px-2 font-prompt">{Device.priceTier}</p>             
                 </div>
               
               <div className="max-h-40 overflow-x-auto flex gap-4 whitespace-nowrap w-full py-[2px] mt-2 text-sm font-prompt" style={{ scrollbarWidth: 'none' }}>
                 <p className="flex-shrink-0">•ประเภทอุปกรณ์: {Device.type}</p>
                 <p className="flex-shrink-0">•ชิปประมวลผล: {Device.chip}</p>
                 <p className="flex-shrink-0">•หน้าจอ: {Device.display}</p>
                 <p className="flex-shrink-0">•กล้องหลัง: {Device.camera?.main}Mp ,วิดีโอ:{Device.camera?.video}</p>
                 <p className="flex-shrink-0">•แรม: {Device.storageRam?.map((item: any) => `${item.ram}GB`).join(", ")}</p>
                 <p className="flex-shrink-0">•หน่วยความจำ: {Device.storageRam?.map((item: any) => `${item.storage}GB`).join(", ")}</p>
                 <p className="flex-shrink-0">•ความจุแบตเตอรี่: {Device.battery}Mah</p>
                 <p className="flex-shrink-0">•ความเร็วการชาร์จ: {Device.charge?.wired}W</p>            
                 <p className="flex-shrink-0">•ลำโพง: {Device.speaker}</p>                                   
               </div>
             </div>
           
             <div className="flex gap-3 overflow-x-auto whitespace-nowrap gap-1 w-full py-[2px] mt-2 font-prompt" style={{ scrollbarWidth: 'none' }}>
                 {Device.recommended?.gaming && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">เกมส์มิ่ง</p>} 
                 {Device.recommended?.camera && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">การถ่ายภาพ</p>}
                 {Device.recommended?.durability && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">ทนทาน</p>}
                 {Device.recommended?.budget && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">งบประหยัด</p>}
                 {Device.recommended?.performance && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">ประสิทธิภาพ</p>}
                 {Device.recommended?.battery && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">แบตเตอรี่อึด</p>}
                 {Device.recommended?.entertainment && <p className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-default">ความบันเทิง</p>}
             </div>
             
             <hr className="my-3 border-gray-300" />
             
             <div className="flex justify-between items-center py-[1px]">
                 <p className="font-trirong font-semibold text-lg text-black">{Device.latestPrice?.defaultPrice} บาท</p>  
                 <button className="font-prompt whitespace-nowrap bg-black font-bold text-white py-1 px-4 rounded-[12px] h-10 transition-all duration-200 hover:scale-105 hover:bg-zinc-800 active:bg-zinc-700/90 active:scale-95 shadow-md hover:shadow-lg">
                     สำรวจสเปค
                 </button>
             </div>
         </div>
    </div>
  );
}
