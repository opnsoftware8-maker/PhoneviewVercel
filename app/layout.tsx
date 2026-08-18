import "./global.css";
import { Trirong, Prompt } from "next/font/google";

// 1. นำเข้าและตั้งค่าฟอนต์ Trirong (สำหรับชื่อรุ่นมือถือ และ ราคา)
const trirong = Trirong({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-trirong",
});

// 2. นำเข้าและตั้งค่าฟอนต์ Prompt (สำหรับสเปกย่อย และ ปุ่มกด)
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "PhoneView",
  description: "Find your bes for your budget smartphone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      {/* 3. ผูก variable ของทั้งสองฟอนต์เข้ากับ <body> */}
      <body className={`${trirong.variable} ${prompt.variable} font-prompt antialiased`}>
        {children}
      </body>
    </html>
  );
}
