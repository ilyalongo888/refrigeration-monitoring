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

// TODO: replace with the production domain once one is assigned (currently the Vercel preview URL).
const siteUrl = "https://refrigeration-monitoring.vercel.app";

// Latvia is the primary market, so metadata defaults to Latvian; the site itself
// still offers LV / RU / EN / ET via the in-page language switcher (see LanguageContext).
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saldēšanas iekārtu monitorings 24/7 | ThermoGuard",
  description:
    "Diennakts saldēšanas iekārtu temperatūras monitorings un tūlītēji paziņojumi par novirzēm. Papildina jūsu servisa uzņēmumu — neaizstāj to.",
  keywords: [
    "saldēšanas iekārtu monitorings",
    "temperatūras kontrole",
    "monitorings 24/7",
    "saldēšanas kameras",
    "saldētavas",
    "attālā iekārtu vadība",
    "temperatūras novirzes paziņojumi",
  ],
  openGraph: {
    title: "Saldēšanas iekārtu monitorings 24/7 | ThermoGuard",
    description:
      "Atklājiet novirzi agrāk. Informējiet atbildīgos uzreiz. Diennakts temperatūras monitorings un attālā parametru vadība — bez jūsu servisa uzņēmuma aizstāšanas.",
    url: siteUrl,
    siteName: "ThermoGuard",
    locale: "lv_LV",
    alternateLocale: ["ru_RU", "en_US", "et_EE"],
    type: "website",
  },
  alternates: {
    languages: {
      lv: siteUrl,
      ru: siteUrl,
      en: siteUrl,
      et: siteUrl,
    },
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
    <html lang="lv" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
