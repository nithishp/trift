import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisScrollProvider from "./providers/lenis-provider";

const manrope = Manrope({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Trift",
  description: "Get trift!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}  antialiased`}>
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
