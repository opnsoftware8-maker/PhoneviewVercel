import { NextResponse } from "next/server"

// ใช้ Node.js runtime เพื่ออ่าน process.env.GEMINI_API_KEY บนฝั่งเซิร์ฟเวอร์
export const runtime = "nodejs"

const GEMINI_MODEL = "gemini-2.0-flash"
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

type GeminiRequestBody = {
  prompt?: string
}

async function callGemini(prompt: string, apiKey: string) {
  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    const message = data?.error?.message ?? "Gemini API request failed"
    throw new Error(message)
  }

  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text ?? "")
      .join("") ?? ""

  return text
}

// GET /api/gemini -> ทดสอบการเชื่อมต่ออย่างรวดเร็ว
export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "GEMINI_API_KEY ยังไม่ได้ตั้งค่าใน environment variables" },
      { status: 500 },
    )
  }

  try {
    const text = await callGemini("สวัสดี ตอบกลับสั้น ๆ เพื่อยืนยันว่าการเชื่อมต่อทำงานได้", apiKey)
    return NextResponse.json({ ok: true, model: GEMINI_MODEL, text })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ ok: false, error: message }, { status: 502 })
  }
}

// POST /api/gemini -> ส่ง prompt ของผู้ใช้ไปยัง Gemini
export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "GEMINI_API_KEY ยังไม่ได้ตั้งค่าใน environment variables" },
      { status: 500 },
    )
  }

  let body: GeminiRequestBody
  try {
    body = (await request.json()) as GeminiRequestBody
  } catch {
    return NextResponse.json({ ok: false, error: "Request body ต้องเป็น JSON ที่ถูกต้อง" }, { status: 400 })
  }

  const prompt = body.prompt?.trim()
  if (!prompt) {
    return NextResponse.json({ ok: false, error: "กรุณาระบุ 'prompt'" }, { status: 400 })
  }

  try {
    const text = await callGemini(prompt, apiKey)
    return NextResponse.json({ ok: true, model: GEMINI_MODEL, text })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ ok: false, error: message }, { status: 502 })
  }
}
