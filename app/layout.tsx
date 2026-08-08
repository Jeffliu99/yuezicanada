import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yuezi Canada | 加拿大月子知识库",
    template: "%s | Yuezi Canada",
  },

  description:
    "加拿大月子知识库，提供月子饮食、产后恢复、母乳喂养、加拿大福利、EI申请、宝宝证件办理及 GTA 月子资源指南。",

  keywords: [
    "加拿大月子",
    "加拿大月子餐",
    "Toronto月子餐",
    "Markham月子餐",
    "产后恢复",
    "月子饮食",
    "母乳喂养",
    "加拿大福利",
    "EI申请",
    "出生证明",
    "加拿大护照",
    "中国旅行证",
    "Yuezi Canada",
  ],

  authors: [
    {
      name: "Yuezi Canada",
    },
  ],

  creator: "Yuezi Canada",

  publisher: "Yuezi Canada",

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.yuezicanada.com",

    siteName: "Yuezi Canada",

    title: "Yuezi Canada | 加拿大月子知识库",

    description:
      "提供月子饮食、产后恢复、母乳喂养、加拿大福利、宝宝证件办理及 GTA 月子资源指南。",

    images: [
      {
        url: "/images/home/hero-mother-baby.jpg",
        width: 1200,
        height: 630,
        alt: "Yuezi Canada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Yuezi Canada | 加拿大月子知识库",

    description:
      "加拿大华人妈妈产后恢复与月子知识平台。",

    images: ["/images/home/hero-mother-baby.jpg"],
  },

  category: "Health",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
