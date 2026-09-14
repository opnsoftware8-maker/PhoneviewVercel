import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { Allphone } from "../../../data/index";

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API_KEY_MISSING",
          reply:
            "ขออภัยครับ ยังไม่ได้ตั้งค่า `GEMINI_API_KEY` ใน Environment Variable กรุณาเพิ่มคีย์ในระบบเพื่อเปิดใช้งาน AI ครับ",
        },
        { status: 200 }
      );
    }

    const body = await req.json();
    const { messages, phoneContextName } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request, messages array is required." },
        { status: 400 }
      );
    }

    const ai = getGeminiClient();

    // Look up detailed phone data if a phone name is provided
    let phoneDetailContext = "";
    if (phoneContextName) {
      const targetPhone = Allphone.find(
        (p) => p.name.toLowerCase() === phoneContextName.toLowerCase()
      );
      if (targetPhone) {
        phoneDetailContext = `
[ข้อมูลสเปกสมาร์ทโฟนที่ผู้ใช้กำลังสนใจและสอบถาม]:
- ชื่อรุ่น: ${targetPhone.name}
- แบรนด์: ${targetPhone.brand}
- ประเภท: ${targetPhone.type}
- ระดับราคา (Price Tier): ${targetPhone.priceTier}
- ราคาประมาณการ: ${targetPhone.latestPrice?.defaultPrice ? `${targetPhone.latestPrice.defaultPrice.toLocaleString()} บาท` : "ไม่ระบุ"} (ราคาเริ่มต้น: ${targetPhone.latestPrice?.priceFrom || "-"})
- ชิปเซ็ตประมวลผล (Chipset): ${targetPhone.chip || "-"}
- หน้าจอแสดงผล (Display): ${targetPhone.display || "-"}
- แบตเตอรี่: ${targetPhone.battery ? `${targetPhone.battery} mAh` : "-"}
- ระบบชาร์จ: สาย ${targetPhone.charge?.wired || 0}W, ไร้สาย ${targetPhone.charge?.wireless || 0}W
- กล้องหลัก: ${targetPhone.camera?.main || 0} MP, กล้องหน้า: ${targetPhone.camera?.selfie || 0} MP, วิดีโอ: ${targetPhone.camera?.video || "-"}
- ระบบกันสั่น OIS: ${targetPhone.camera?.ois ? "มี" : "ไม่มี"}
- ตัวเลือกความจุ & RAM: ${targetPhone.storageRam?.map((s) => `RAM ${s.ram}GB / ROM ${s.storage}GB (~${s.price.toLocaleString()} บาท)`).join(", ") || "-"}
- จุดเด่น (Pros): ${targetPhone.pros?.join(", ") || "-"}
- จุดสังเกต (Cons): ${targetPhone.cons?.join(", ") || "-"}
- หมวดหมู่แนะนำ: ${Object.entries(targetPhone.recommended || {})
          .filter(([, v]) => v)
          .map(([k]) => k)
          .join(", ") || "-"}
- คะแนนประเมิน (เต็ม 10): ประสิทธิภาพ ${targetPhone.scores?.performance || 0}, เล่นเกม ${targetPhone.scores?.gaming || 0}, แบตเตอรี่ ${targetPhone.scores?.battery || 0}, กล้อง ${targetPhone.scores?.camera || 0}, ความคุ้มค่า ${targetPhone.scores?.value || 0}, ภาพรวม ${targetPhone.scores?.overall || 0}
`;
      }
    }

    // Available phone catalog summary
    const catalogSummary = Allphone.slice(0, 40)
      .map(
        (p) =>
          `• ${p.name} (${p.brand}) - ฿${p.latestPrice?.defaultPrice?.toLocaleString() || "N/A"} [${p.priceTier}]`
      )
      .join("\n");

    const systemInstruction = `
คุณคือ "PhoneView AI Specialist" ผู้เชี่ยวชาญด้านสมาร์ทโฟนและแท็บเล็ตประจำเว็บไซต์ PhoneView
บทบาทและบุคลิกภาพของคุณ:
1. ตอบด้วยภาษาไทยที่สุภาพ อบอุ่น เป็นมืออาชีพ และเป็นกันเอง (ลงท้ายด้วย "ครับ" เสมอ)
2. มีความรู้ลึกซึ้งเกี่ยวกับสเปกสมาร์ทโฟน ทุกแบรนด์ เช่น Apple iPhone, Samsung Galaxy, Xiaomi, Vivo, OPPO, Huawei เป็นต้น
3. ให้ข้อมูลอย่างตรงไปตรงมา อิงตามสเปกจริง ความคุ้มค่าตามช่วงราคา จุดเด่นและข้อสังเกตอย่างเป็นกลาง ไม่เชียร์แบรนด์ใดแบรนด์หนึ่งเกินจริง
4. หากมีข้อมูลสเปกเฉพาะรุ่นที่ผู้ใช้กำลังดูอยู่ (ใน [ข้อมูลสเปกสมาร์ทโฟนที่ผู้ใช้กำลังสนใจ]): ให้นำข้อมูลนั้นมาเป็นฐานข้อมูลหลักในการตอบอย่างละเอียด
5. จัดรูปแบบคำตอบให้อ่านง่าย เช่น ใช้หัวข้อย่อย (Bullet points), ตัวหนาเน้นสเปกสำคัญ และสรุปความคุ้มค่าสั้นๆ
6. ให้คำแนะนำครอบคลุมการใช้งานจริง เช่น การเล่นเกม (FPS/ความร้อน), การถ่ายภาพ/วิดีโอ, แบตเตอรี่และความเร็วในการชาร์จ, ความคงทน และความคุ้มค่าต่อเงินที่จ่าย

${phoneDetailContext ? phoneDetailContext : ""}

[ตัวอย่างรุ่นที่มีในฐานข้อมูลของ PhoneView บางส่วน]:
${catalogSummary}
`;

    // Map client messages to Gemini contents format
    // Filter out initial greeting if empty
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Try ultra-fast gemini-3.1-flash-lite first, fallback to gemini-3.8-flash
    const modelsToTry = ["gemini-3.1-flash-lite", "gemini-3.8-flash"];
    let response: any = null;
    let lastError: any = null;

    for (const model of modelsToTry) {
      try {
        response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });
        if (response && response.text) {
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${model} unavailable, trying fallback:`, err?.message);
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error("ไม่สามารถประมวลผลคำตอบได้ในขณะนี้");
    }

    const replyText = response.text;

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      {
        error: "GENERATION_FAILED",
        reply: `เกิดข้อผิดพลาดในการติดต่อ Gemini API: ${error?.message || "โปรดลองใหม่อีกครั้ง"}`,
      },
      { status: 500 }
    );
  }
}
