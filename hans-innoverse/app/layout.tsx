import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "HansInnoverse Hackathon - Innovation at Hansraj College",
  description:
    "Join the HansInnoverse Hackathon 2024, organized by Ordinateur, Hansraj College. Showcase your coding and innovation skills!",
  keywords: [
    "HansInnoverse Hackathon",
    "Hansraj College",
    "Ordinateur",
    "Hackathon 2024",
    "Coding Events",
    ,
    "Hackathon",
    "HansInnoverse",
    "hansinnoverse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="HansInnoverse Hackathon 2024" />
        <meta
          property="og:description"
          content="Join the HansInnoverse Hackathon at Hansraj College and showcase your talent in coding and innovation!"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://hans-innoverse.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="HansInnoverse Hackathon, Hansraj College, Ordinateur, Hackathon 2024, Coding Events, Hackathon, HansInnoverse, hansinnoverse"
        />
        <meta name="author" content="Ordinateur, Hansraj College" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
