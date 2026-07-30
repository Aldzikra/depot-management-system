import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight : ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Depot Air",
  description: "Management System for -",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000"
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} anatialiased bg-secondary`}>
        {children}
      </body>
    </html>
  );
}
