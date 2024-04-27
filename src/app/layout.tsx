import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { krona } from "./fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wasserstoff Frontend Task",
  description: "Created by Ankit Panchal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={krona.className}>{children}</body>
    </html>
  );
}
