import type { Metadata } from "next";
import { Inter, Space_Grotesk  } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({
  weight: ['300','400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Artidev",
  description: "Scale your business and save 80% in employee costs with 1% offshore talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
      <Navbar></Navbar>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
