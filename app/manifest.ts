import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Le The Phuc - Software Developer",
    short_name: "Le The Phuc",
    description:
      "Portfolio of Le The Phuc, a Frontend & Full-Stack Developer specializing in React, Next.js, Node.js, and MySQL",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#9333ea",
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
