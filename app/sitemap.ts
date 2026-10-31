import { MetadataRoute } from "next";

import { projects } from "@/constants/projects";

const baseUrl = "https://pucklee.io.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${baseUrl}/images/avatar.jpg`,
        ...projects.map((project) => `${baseUrl}${project.image}`),
      ],
    },
  ];
}
