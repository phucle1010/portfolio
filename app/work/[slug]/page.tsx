import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyView } from "@/components/lab/CaseStudyView";
import { LabFrame } from "@/components/lab/LabFrame";
import { getProject, projects, site } from "@/constants/lab";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };

  const title = `${project.name} — Case Study`;
  const description = `${project.summary} Role: ${project.role} at ${project.company}.`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/work/${project.slug}`,
      type: "article",
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.cover.src],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <LabFrame>
      <CaseStudyView project={project} />
    </LabFrame>
  );
}
