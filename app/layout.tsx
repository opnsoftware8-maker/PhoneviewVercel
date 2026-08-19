import "./global.css";
import { Trirong, Prompt } from "next/font/google";

const trirong = Trirong({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-trirong",
});

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      trirong: ['var(--font-trirong)', 'serif'],
                      prompt: ['var(--font-prompt)', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body 
        className={`${trirong.variable} ${prompt.variable} font-prompt antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
"use client";
import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. ป้องกันการซูมด้วยปุ่มลัดบนคีย์บอร์ด (Ctrl + +, Ctrl + -, Ctrl + 0)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    // 2. ป้องกันการซูมด้วยการหมุน Wheel เมาส์ร่วมกับ Ctrl
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // 3. ป้องกัน Gesture Zoom (ถ่างนิ้ว) บนมือถือ/Safari
    const handleGesture = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("gesturestart", handleGesture);
    document.addEventListener("gesturechange", handleGesture);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("gesturestart", handleGesture);
      document.removeEventListener("gesturechange", handleGesture);
    };
  }, []);

  return (
    <html lang="th">
      {/* ... */}
      <body>{children}</body>
    </html>
  );
}
