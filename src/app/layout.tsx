import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], variable: '--font-poppins', weight: '600' })

export const metadata: Metadata = {
  title: "Coca | Digital",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{ children }</body>
    </html>
  );
}
