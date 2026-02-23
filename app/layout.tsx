import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://daseul-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "김다슬 | Frontend Developer Portfolio",
  description:
    "감성은 설계하고, 기능은 끝까지 구현합니다. Pastel UI, Responsive Web, AI + Data 전문 프론트엔드 개발자 김다슬의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "React",
    "Next.js",
    "김다슬",
    "Frontend Developer",
  ],
  authors: [{ name: "김다슬" }],
  creator: "김다슬",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "Daseul Portfolio",
    title: "김다슬 | Frontend Developer Portfolio",
    description:
      "감성은 설계하고, 기능은 끝까지 구현합니다. Pastel UI · Responsive Web · AI + Data",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "김다슬 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김다슬 | Frontend Developer Portfolio",
    description:
      "감성은 설계하고, 기능은 끝까지 구현합니다. Pastel UI · Responsive Web · AI + Data",
    images: [`${siteUrl}/opengraph-image`],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
