import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
const righteous = Righteous({
  variable: "--font-righteous",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HitStart",
  description: "Your health, your fitness, your life.",
  icons: {
    icon: "/appicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} font-sans antialiased text-white bg-dark cursor-none`}
      >
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
