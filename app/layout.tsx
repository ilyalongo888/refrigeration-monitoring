import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://thermoguard.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "24/7 мониторинг холодильного оборудования | ThermoGuard",
  description:
    "Круглосуточный мониторинг температуры холодильного оборудования, автоматические уведомления, контроль реакции и координация аварийных ситуаций.",
  keywords: [
    "мониторинг холодильного оборудования",
    "контроль температуры",
    "мониторинг температуры 24/7",
    "холодильные камеры",
    "морозильные камеры",
    "уведомления об аварии",
  ],
  openGraph: {
    title: "24/7 мониторинг холодильного оборудования | ThermoGuard",
    description:
      "Обнаружить раньше. Отреагировать быстрее. Снизить риск. Круглосуточный мониторинг температуры и контроль реакции на инциденты.",
    url: siteUrl,
    siteName: "ThermoGuard",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
