import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Manthan Software Technologies | Intelligent Development Automation",
    template: "%s | Manthan Software Technologies",
  },
  description:
    "Manthan streamlines the complete software development lifecycle through intelligent workflow automation, custom engineering, and AI-powered tools.",
  metadataBase: new URL("https://manthansoft.com"),
  openGraph: {
    type: "website",
    siteName: "Manthan Software Technologies",
    title: "Manthan Software Technologies",
    description:
      "Intelligent automation for the complete software development lifecycle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Software Technologies",
    description:
      "Intelligent automation for the complete software development lifecycle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
