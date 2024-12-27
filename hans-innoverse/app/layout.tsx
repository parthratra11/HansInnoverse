import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://hans-innoverse.vercel.app"),
  title: {
    default: "HansInnoverse Hackathon 2024",
    template: "%s | HansInnoverse Hackathon 2024",
  },
  description:
    "Join the HansInnoverse Hackathon 2024, organized by Ordinateur, Hansraj College. Showcase your coding and innovation skills!",
  keywords: [
    "HansInnoverse Hackathon",
    "Hansraj College",
    "Ordinateur",
    "Hackathon 2024",
    "Coding Events",
    "Hackathon",
    "HansInnoverse",
    "hansinnoverse",
    "Delhi University",
    "Tech Competition",
    "Student Hackathon",
    "Innovation Challenge",
    "College Hackathon",
  ],
  authors: [{ name: "Ordinateur, Hansraj College" }],
  creator: "Ordinateur, Hansraj College",
  publisher: "Hansraj College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HansInnoverse Hackathon 2024",
    description:
      "Join the HansInnoverse Hackathon at Hansraj College and showcase your talent in coding and innovation!",
    url: "https://hans-innoverse.vercel.app",
    siteName: "HansInnoverse Hackathon 2024",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HansInnoverse Hackathon Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hans-innoverse.vercel.app",
  },
  category: "Technology",
  verification: {
    google: "vHrMFI-PhnG58jUw9FZmydaQiTqegYhTttO2543jxWs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
