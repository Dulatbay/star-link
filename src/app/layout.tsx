import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "cyrillic", "cyrillic-ext"],
    weight: ["400", "500", "700"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic", "cyrillic-ext"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Starlink Kazakhstan - Спутниковый интернет в Казахстане",
  description: "Starlink — надёжный спутниковый интернет для фермеров, хозяйств и удалённых объектов в Казахстане. Официально с 13 августа 2025 года.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
