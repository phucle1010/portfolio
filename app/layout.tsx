import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le The Phuc - Software Developer Portfolio",
  description:
    "Portfolio of Le The Phuc, showcasing projects, skills, and experience as a Frontend and Full-Stack Software Developer based in Ho Chi Minh City.",
  applicationName: "Le The Phuc Portfolio",
  authors: [{ name: "Le The Phuc" }],
  keywords: [
    "Le The Phuc",
    "Software Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "Portfolio",
    "Ho Chi Minh",
  ],
  openGraph: {
    type: "website",
    url: "https://puckee.vercel.app",
    title: "Le The Phuc - Software Developer Portfolio",
    description:
      "Portfolio of Le The Phuc, showcasing projects, skills, and experience as a Frontend and Full-Stack Software Developer.",
    siteName: "Le The Phuc Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Le The Phuc Portfolio Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le The Phuc - Software Developer Portfolio",
    description:
      "Portfolio of Le The Phuc, showcasing projects, skills, and experience as a Frontend and Full-Stack Software Developer.",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://puckee.vercel.app"),
  robots: {
    follow: true,
    index: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon and additional SEO meta tags can be added here if needed */}
      </head>
      <body
        className={`${roboto.variable} antialiased bg-[#0a0f1e] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
