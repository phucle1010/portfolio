import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Le The Phuc — Full-Stack Developer",
    short_name: "PUCKLEE",
    description:
      "Portfolio of Le The Phuc, a Full-Stack Developer building SaaS platforms, web applications, and AI-powered products.",
    start_url: "/",
    display: "standalone",
    background_color: "#080B14",
    theme_color: "#080B14",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
