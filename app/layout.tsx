import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { WIDGET_SETTING } from "@/constants/widget";
import { ToastProvider } from "@/providers/toast";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://pucklee.io.vn";
const siteTitle = "Le The Phuc (Pucklee) - Software Engineer";
const siteDescription =
  "Le The Phuc (Pucklee) is a Software Engineer in Ho Chi Minh City building web and mobile products with React, Next.js, React Native, NestJS, and AI-powered search and recommendations.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Le The Phuc",
  },
  description: siteDescription,
  applicationName: "Le The Phuc",
  authors: [{ name: "Le The Phuc", url: siteUrl }],
  creator: "Le The Phuc",
  publisher: "Le The Phuc",
  keywords: [
    "Le The Phuc",
    "Lê Thế Phúc",
    "Pucklee",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "NestJS Developer",
    "Node.js",
    "TypeScript",
    "AI Engineer",
    "Portfolio",
    "Ho Chi Minh City",
    "Vietnam",
  ],
  category: "Technology",
  classification: "Portfolio Website",
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Le The Phuc",
    locale: "en_US",
    firstName: "Phuc",
    lastName: "Le The",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
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
    apple: "/apple-icon",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Le The Phuc",
        alternateName: ["Pucklee", "PUCKLEE.DEV"],
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Le The Phuc",
        alternateName: ["Lê Thế Phúc", "Pucklee"],
        jobTitle: "Software Engineer",
        url: siteUrl,
        image: `${siteUrl}/images/avatar.jpg`,
        sameAs: [
          "https://www.linkedin.com/in/phuc-le-bab721189/",
          "https://github.com/phucle1010",
        ],
        email: "lethephuc2002@gmail.com",
        telephone: "+84368341595",
        description: siteDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ho Chi Minh City",
          addressRegion: "Ho Chi Minh City",
          addressCountry: "VN",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "NestJS",
          "Python",
          "FastAPI",
          "MongoDB",
          "MySQL",
          "Redis",
          "Qdrant",
          "Semantic Search",
          "Recommendation Systems",
          "Docker",
          "Full-Stack Development",
        ],
      },
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
        className={`${roboto.variable} antialiased bg-gradient-to-br from-[#050816] via-[#0a0f1e] to-[#050816] text-white min-h-screen`}
      >
        <ToastProvider>{children}</ToastProvider>

        <script
          type="module"
          src="https://widget.magicblocks.com/embed/widget.js"
        />

        {/* Magicblocks Widget */}
        {/* @ts-ignore - custom web component */}
        <magicblocks-widget
          id={WIDGET_SETTING.id}
          workspace_id={WIDGET_SETTING.workspace_id}
          experience_id={WIDGET_SETTING.experience_id}
          widget_style={WIDGET_SETTING.widget_style}
          mode={WIDGET_SETTING.mode}
          root_class_name={WIDGET_SETTING.root_class_name}
          className="mbw-standard"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && !window.MAGICBLOCKS) {
                  window.MAGICBLOCKS = {
                    workspace: ${WIDGET_SETTING.workspace_id},
                    experience: ${WIDGET_SETTING.experience_id},
                    config: { style: ${WIDGET_SETTING.widget_style} }
                  };
                  var queryPath = '?ws=' + window.MAGICBLOCKS.workspace + '&e=' + window.MAGICBLOCKS.experience;
                  var s = document.createElement('script');
                  s.id = 'mbw-script';
                  s.type = 'text/javascript';
                  s.src = 'https://scripts.magicblocks.com/widget/1.0.0' + queryPath;
                  document.head.appendChild(s);
                }
              })();
            `,
          }}
        />
      </body>

      <GoogleAnalytics gaId="G-Y7311K3WSR" />
    </html>
  );
}
