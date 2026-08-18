import "./global.css";
import { Trirong, Prompt } from "next/font/google";

// 1. นำเข้าและตั้งค่าฟอนต์ Trirong
const trirong = Trirong({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-trirong",
});

// 2. นำเข้าและตั้งค่าฟอนต์ Prompt
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "PhoneView",
  description: "Find your best for your budget smartphone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        {/* ดึง Tailwind ผ่าน CDN ตรงนี้ เพื่อให้ Vercel ไม่งอแงเรื่องแพ็กเกจ */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      {/* ผูก variable ของฟอนต์เดิมไว้เหมือนเดิมเป๊ะ */}
      <body className={`${trirong.variable} ${prompt.variable} font-prompt antialiased`}>
        {children}
      </body>
    </html>
  );
}
