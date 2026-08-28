// สคริปต์ทดสอบการส่งข้อความไปหา Gemini แบบง่ายที่สุด
// วิธีรัน (โหลด env จากไฟล์โปรเจกต์ให้อัตโนมัติ):
//   node --env-file-if-exists=.env.development.local scripts/test-gemini.ts
// หรือส่งข้อความเองก็ได้:
//   node --env-file-if-exists=.env.development.local scripts/test-gemini.ts "อธิบาย Next.js สั้น ๆ"

const GEMINI_MODEL = "gemini-3.6-flash"
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

async function main() {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    console.error("[gemini] ไม่พบ GEMINI_API_KEY ใน environment variables")
    process.exit(1)
  }

  // ใช้ข้อความจาก argument ถ้ามี ไม่งั้นใช้ข้อความ default
  const prompt = process.argv[2] ?? "สวัสดี ช่วยตอบสั้น ๆ เป็นภาษาไทยเพื่อยืนยันว่าการเชื่อมต่อ Gemini ทำงานได้"

  console.log(`[gemini] ส่งข้อความ: ${prompt}`)

  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    console.error("[gemini] เรียก API ไม่สำเร็จ:", data?.error?.message ?? res.statusText)
    process.exit(1)
  }

  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text ?? "")
      .join("") ?? ""

  console.log("\n[gemini] คำตอบ:")
  console.log(text)
}

main().catch((error) => {
  console.error("[gemini] เกิดข้อผิดพลาด:", error)
  process.exit(1)
})
