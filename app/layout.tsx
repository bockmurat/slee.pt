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

export const metadata: Metadata = {
  title: "slee.pt - Delayed API Responses for Testing",
  description: "A simple API service that returns delayed responses. Perfect for testing timeouts, loading states, async behavior, and slow network conditions.",
  keywords: ["API", "delayed response", "timeout testing", "loading states", "async testing", "sleep API", "network simulation"],
  authors: [{ name: "slee.pt" }],
  openGraph: {
    title: "slee.pt - Delayed API Responses",
    description: "Test your applications with delayed API responses. Supports custom delays from milliseconds to hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "slee.pt - Delayed API Responses",
    description: "Test timeouts and loading states with delayed API responses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
