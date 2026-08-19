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
