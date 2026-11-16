import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { projects, site } from "@/constants/lab";
import { WIDGET_SETTING } from "@/constants/widget";
import { ToastProvider } from "@/providers/toast";

const body = localFont({
  src: [
    {
      path: "./fonts/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono-lab",
  display: "swap",
});

const siteUrl = site.url;
const siteName = site.name;
const siteTitle = site.title;
const siteDescription = site.description;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Le The Phuc", url: siteUrl }],
  creator: "Le The Phuc",
  publisher: siteName,
  keywords: [
    "Le The Phuc",
    "Lê Thế Phúc",
    "Pucklee",
    "PUCKLEE",
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
    siteName,
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
  themeColor: "#100f0c",
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
        name: siteName,
        alternateName: [...site.alternateNames],
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Le The Phuc",
        alternateName: ["Lê Thế Phúc", "Pucklee", "PUCKLEE"],
        jobTitle: "Full-Stack Developer",
        url: siteUrl,
        image: `${siteUrl}/images-v2/profile.png`,
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
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#work`,
        name: "Selected projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: `${siteUrl}/work/${project.slug}`,
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${body.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#100f0c] text-[#ebe6d8] min-h-screen">
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
