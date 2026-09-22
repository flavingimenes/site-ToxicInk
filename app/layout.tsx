import type { Metadata } from "next";
import { Permanent_Marker, Caveat_Brush, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const hand = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
});
const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Toxic Ink | Tattoo Studio",
  description: "Tatuagens autorais em Várzea Grande - MT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${hand.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
