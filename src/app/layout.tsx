import Navigation from "@/components/pages/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Pluviaux - Agence web à Mulhouse - Développement de sites web sur mesure",
  description:
    "Pluviaux est une agence web localisée à Mulhouse. Nous développons des sites web et des applications sur mesure pour les entreprises et les particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className + "relative"}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
