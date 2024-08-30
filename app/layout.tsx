import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-primary", subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "7NFTix - The NFT Ticketing Platform",
  description: "7NFTix is the NFT ticketing platform for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body
        className={`${jetBrainsMono.className} ${dmSans.className} font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
