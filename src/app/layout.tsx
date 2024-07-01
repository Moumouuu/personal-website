import Navigation from "@/components/pages/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <Script
        async
        src="https://umami-yck480o.5.75.226.51.sslip.io/script.js"
        data-website-id="3d2cdafc-ae12-4ff9-8cd5-d8bbd4f4acb7"
      />
    </html>
  );
}
