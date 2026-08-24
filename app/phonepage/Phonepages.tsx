import React, { useEffect } from 'react';
import { Phone } from '../../data/Type';

interface PhonePageProps {
  phoneDat: Phone;
  PhoneProp?: (value: string | null) => void;
}

export default function Phonepage({
  phoneDat,
  PhoneProp
}: PhonePageProps) {
  
  // ✅ ล็อคไม่ให้หน้าเว็บด้านหลังเลื่อนขณะเปิดป๊อปอัปสเปคบนมือถือ
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!phoneDat) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 md:p-5 overflow-y-auto">
      <article
        itemScope
        itemType="https://schema.org/Product"
        className="relative w-full max-w-6xl max-h-[88vh] overflow-y-auto bg-white rounded-2xl px-5 py-5 md:px-7 md:py-6 font-prompt text-zinc-800 shadow-2xl"
      >
        <button
          type="button"
          className="absolute top-4 right-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium px-3 py-1.5 rounded-lg text-sm transition"
          onClick={() => PhoneProp?.(null)}
        >
          ปิด
        </button>

        <header className="mb-6 border-b-2 border-zinc-100 pb-5 pr-12">
          <h1
            itemProp="name"
            className="font-trirong text-3xl md:text-4xl font-extrabold text-black mb-3"
          >
            {phoneDat.name}
          </h1>

          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 text-zinc-700">
              {phoneDat.type === "phone" ? "สมาร์ทโฟน" : "แท็บเล็ต"}
            </p>

            {phoneDat.saleStatus != null && (
              <p
                className={`px-3 py-1 rounded-full border ${
                  phoneDat.saleStatus === "available"
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-zinc-100 text-zinc-600 border-zinc-200"
                }`}
              >
                {phoneDat.saleStatus === "available"
                  ? "มีจำหน่าย"
                  : "เลิกจำหน่าย"}
              </p>
            )}

            {phoneDat.priceTier != null && (
              <p className="bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 text-zinc-700">
                {phoneDat.priceTier}
              </p>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">

            {phoneDat.chip != null && (
              <section>
                <h2 className="font-trirong text-xl font-bold mb-3 border-l-4 border-black pl-3">
                  ประสิทธิภาพ
                </h2>

                <p className="text-zinc-700 bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100">
                  <span className="font-semibold">ชิปประมวลผล:</span>{" "}
                  <span itemProp="description">
                    {phoneDat.chip}
                  </span>
                </p>
              </section>
            )}

            {(phoneDat.display != null || phoneDat.speaker != null) && (
              <section>
                <h2 className="font-trirong text-xl font-bold mb-3 border-l-4 border-black pl-3">
                  หน้าจอและระบบเสียง
                </h2>

                <div className="bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100 space-y-1.5 text-zinc-700">
                  {phoneDat.display != null && (
                    <p>
                      <span className="font-semibold">หน้าจอ:</span>{" "}
                      {phoneDat.display}
                    </p>
                  )}

                  {phoneDat.speaker != null && (
                    <p>
                      <span className="font-semibold">ลำโพง:</span>{" "}
                      {phoneDat.speaker}
                    </p>
                  )}
                </div>
              </section>
            )}

            {(phoneDat.camera?.main != null ||
              phoneDat.camera?.ultrawide != null ||
              phoneDat.camera?.telephoto != null ||
              phoneDat.camera?.selfie != null ||
              phoneDat.camera?.opticalZoom != null ||
              phoneDat.camera?.digitalZoom != null ||
              phoneDat.camera?.video != null ||
              phoneDat.camera?.ois != null) && (
              <section>
                <h2 className="font-trirong text-xl font-bold mb-3 border-l-4 border-black pl-3">
                  กล้องและการถ่ายภาพ
                </h2>

                <div className="bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100">

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-zinc-700">
                    {phoneDat.camera.main != null && (
                      <li><span className="font-semibold">กล้องหลัก:</span> {phoneDat.camera.main} MP</li>
                    )}
                    {phoneDat.camera.ultrawide != null && (
                      <li><span className="font-semibold">กล้องมุมกว้าง:</span> {phoneDat.camera.ultrawide} MP</li>
                    )}
                    {phoneDat.camera.telephoto != null && (
                      <li><span className="font-semibold">กล้อง Telephoto:</span> {phoneDat.camera.telephoto} MP</li>
                    )}
                    {phoneDat.camera.selfie != null && (
                      <li><span className="font-semibold">กล้องหน้า:</span> {phoneDat.camera.selfie} MP</li>
                    )}
                    {phoneDat.camera.opticalZoom != null && (
                      <li><span className="font-semibold">ซูม Optical:</span> {phoneDat.camera.opticalZoom}x</li>
                    )}
                    {phoneDat.camera.digitalZoom != null && (
                      <li><span className="font-semibold">ซูม Digital:</span> {phoneDat.camera.digitalZoom}x</li>
                    )}
                  </ul>

                  {(phoneDat.camera.video != null || phoneDat.camera.ois != null) && (
                    <div className="mt-4 pt-3 border-t border-zinc-200">
                      <h3 className="font-semibold text-black mb-1">การถ่ายวิดีโอ</h3>
                      <div className="text-sm text-zinc-600 space-y-1">
                        {phoneDat.camera.video != null && <p>คุณภาพ: {phoneDat.camera.video}</p>}
                        {phoneDat.camera.ois && <p>รองรับระบบกันสั่นทางฮาร์ดแวร์ (OIS)</p>}
                      </div>
                    </div>
                  )}

                </div>
              </section>
            )}

            {(phoneDat.battery != null || phoneDat.charge?.wired != null || phoneDat.charge?.wireless != null) && (
              <section>
                <h2 className="font-trirong text-xl font-bold mb-3 border-l-4 border-black pl-3">
                  แบตเตอรี่และการชาร์จ
                </h2>

                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 flex gap-3 text-center">
                  {phoneDat.battery != null && (
                    <div className="flex-1 bg-white p-2.5 rounded-lg shadow-sm border border-zinc-100">
                      <p className="font-semibold text-zinc-500 text-xs mb-1">ความจุ</p>
                      <p className="font-bold text-base">{phoneDat.battery} mAh</p>
                    </div>
                  )}

                  {phoneDat.charge?.wired != null && (
                    <div className="flex-1 bg-white p-2.5 rounded-lg shadow-sm border border-zinc-100">
                      <p className="font-semibold text-zinc-500 text-xs mb-1">ชาร์จสาย</p>
                      <p className="font-bold text-base">{phoneDat.charge.wired}W</p>
                    </div>
                  )}

                  {phoneDat.charge?.wireless != null && (
                    <div className="flex-1 bg-white p-2.5 rounded-lg shadow-sm border border-zinc-100">
                      <p className="font-semibold text-zinc-500 text-xs mb-1">ไร้สาย</p>
                      <p className="font-bold text-base">{phoneDat.charge.wireless}W</p>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-5">
            {phoneDat.latestPrice != null && (
              <section
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className="bg-zinc-900 text-white p-5 rounded-2xl shadow-lg"
              >
                <h2 className="font-trirong text-xl font-bold mb-2">ราคาล่าสุด</h2>

                {phoneDat.latestPrice.defaultPrice != null && (
                  <h4 className="font-trirong text-3xl font-extrabold text-white mb-1">
                    <span itemProp="price">{phoneDat.latestPrice.defaultPrice.toLocaleString()}</span> บาท
                    <meta itemProp="priceCurrency" content="THB" />
                  </h4>
                )}

                {phoneDat.latestPrice.priceFrom != null && (
                  <p className="text-xs text-zinc-400 mb-4">อ้างอิงจาก {phoneDat.latestPrice.priceFrom}</p>
                )}

                <div className="space-y-2.5">
                  {phoneDat.lazada != null && (
                    <a href={phoneDat.lazada} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-600 hover:bg-blue-500 transition py-2 rounded-xl font-bold text-sm">
                      สั่งซื้อบน Lazada
                    </a>
                  )}

                  {phoneDat.shopee != null && (
                    <a href={phoneDat.shopee} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-orange-600 hover:bg-orange-500 transition py-2 rounded-xl font-bold text-sm">
                      สั่งซื้อบน Shopee
                    </a>
                  )}

                  {phoneDat.official != null && (
                    <a href={phoneDat.official} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition py-2 rounded-xl font-bold text-sm text-zinc-300">
                      สเปคเต็ม (เว็บทางการ)
                    </a>
                  )}
                </div>
              </section>
            )}

            {phoneDat.recommended != null && (
              <section>
                <h2 className="font-trirong text-xl font-bold mb-3">แนะนำสำหรับ</h2>
                <div className="flex flex-wrap gap-2">
                  {phoneDat.recommended.gaming && <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-lg text-sm font-medium">เล่นเกม</span>}
                  {phoneDat.recommended.camera && <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-lg text-sm font-medium">ถ่ายภาพ</span>}
                  {phoneDat.recommended.budget && <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-lg text-sm font-medium">งบประหยัด</span>}
                  {phoneDat.recommended.performance && <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-lg text-sm font-medium">ประสิทธิภาพ</span>}
                  {phoneDat.recommended.battery && <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-lg text-sm font-medium">แบตเตอรี่อึด</span>}
                  {phoneDat.recommended.entertainment && <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-lg text-sm font-medium">ความบันเทิง</span>}
                </div>
              </section>
            )}

            {(phoneDat.pros?.length > 0 || phoneDat.cons?.length > 0) && (
              <section className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                <h2 className="font-trirong text-xl font-bold mb-3">จุดเด่นและข้อสังเกต</h2>
                {phoneDat.pros?.length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-zinc-900 font-bold text-sm mb-1.5">ข้อดี:</h3>
                    <ul className="text-sm space-y-1 text-zinc-700">
                      {phoneDat.pros.map((pro: string, index: number) => (
                        <li key={index}>- {pro}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {phoneDat.cons?.length > 0 && (
                  <div>
                    <h3 className="text-zinc-600 font-bold text-sm mb-1.5">ข้อสังเกต:</h3>
                    <ul className="text-sm space-y-1 text-zinc-700">
                      {phoneDat.cons.map((con: string, index: number) => (
                        <li key={index}>- {con}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
