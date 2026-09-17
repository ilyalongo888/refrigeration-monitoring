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
  title: "24/7 мониторинг и удалённое управление холодильным оборудованием | ThermoGuard",
  description:
    "Круглосуточный мониторинг температуры холодильного оборудования и мгновенные уведомления об отклонениях. Дополняет вашу сервисную компанию — не заменяет её.",
  keywords: [
    "мониторинг холодильного оборудования",
    "контроль температуры",
    "мониторинг температуры 24/7",
    "холодильные камеры",
    "морозильные камеры",
    "удалённое управление температурой",
    "уведомления об отклонении температуры",
  ],
  openGraph: {
    title: "24/7 мониторинг и удалённое управление холодильным оборудованием | ThermoGuard",
    description:
      "Обнаружить отклонение раньше. Уведомить ответственных мгновенно. Круглосуточный мониторинг температуры и удалённая настройка параметров — без замены вашей сервисной компании.",
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
