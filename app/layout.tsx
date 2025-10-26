import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le The Phuc - Software Developer",
    template: "%s | Le The Phuc",
  },
  description:
    "Portfolio of Le The Phuc, a Frontend & Full-Stack Developer specializing in React, Next.js, Node.js, and MySQL. Based in Ho Chi Minh City. Building scalable web applications and turning ideas into working products.",
  applicationName: "Le The Phuc",
  authors: [{ name: "Le The Phuc", url: "https://pucklee.vercel.app" }],
  creator: "Le The Phuc",
  publisher: "Le The Phuc",
  keywords: [
    "Le The Phuc",
    "Software Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "MySQL",
    "Web Development",
    "Portfolio",
    "Ho Chi Minh City",
    "Vietnam",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "UI/UX",
    "Responsive Design",
  ],
  category: "Technology",
  classification: "Portfolio Website",
  openGraph: {
    type: "website",
    url: "https://pucklee.vercel.app",
    title: "Le The Phuc - Software Developer Portfolio",
    description:
      "Portfolio of Le The Phuc, a Frontend & Full-Stack Developer specializing in React, Next.js, Node.js, and MySQL. Building scalable web applications based in Ho Chi Minh City.",
    siteName: "Le The Phuc Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Le The Phuc - Software Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le The Phuc - Software Developer Portfolio",
    description:
      "Frontend & Full-Stack Developer specializing in React, Next.js, Node.js, and MySQL. Based in Ho Chi Minh City.",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://pucklee.vercel.app"),
  alternates: {
    canonical: "https://pucklee.vercel.app",
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
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Le The Phuc",
    jobTitle: "Frontend & Full-Stack Developer",
    url: "https://pucklee.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/phuc-le-bab721189/",
      "https://github.com/phucle1010",
    ],
    email: "lethephuc2002@gmail.com",
    telephone: "+84368341595",
    description:
      "Software developer specializing in React, Next.js, Node.js, and MySQL. Building scalable web applications and turning ideas into working products.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "MySQL",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "RESTful APIs",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${roboto.variable} antialiased bg-[#0a0f1e] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
