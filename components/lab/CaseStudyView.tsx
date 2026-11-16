import type { ReactNode } from "react";
import Link from "next/link";

import { getNextProject, site, type LabProject } from "@/constants/lab";
import { primaryClass } from "./classes";
import { MediaFrame } from "./MediaFrame";

function isPublished(value?: string) {
  const text = value?.trim();
  if (!text) return false;
  const normalized = text.toLowerCase();
  return normalized !== "not published" && normalized !== "unpublished";
}

export function CaseStudyView({ project }: { project: LabProject }) {
  const next = getNextProject(project.slug);
  const overview = isPublished(project.overview) ? project.overview : null;
  const problem = isPublished(project.problem) ? project.problem : null;
  const contribution = isPublished(project.contributions)
    ? project.contributions
    : null;
  const implementation = isPublished(project.implementation)
    ? project.implementation
    : null;
  const outcome = isPublished(project.outcome) ? project.outcome : null;
  const tools = project.technologies.filter(Boolean);
  const shots = project.images.filter((image) => image.src);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${site.url}/work/${project.slug}`,
    creator: { "@id": `${site.url}/#person` },
    about: project.category,
  };

  return (
    <article className="mx-auto max-w-[1120px] px-5 pt-10 pb-20 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="sans text-[13px] text-[#948c7a]">
        <Link href="/#work" className="hover:text-[#e8a317]">
          Work
        </Link>
        <span className="text-[#5e584c]"> / </span>
        <span className="text-[#ebe6d8]">{project.name}</span>
      </p>

      <header className="mt-8 grid gap-8 border-b border-[#322e26] pb-8 lg:grid-cols-[minmax(0,1fr)_14rem]">
        <div>
          <h1 className="text-4xl leading-[0.95] font-medium tracking-[-0.04em] md:text-5xl">
            {project.name}
          </h1>
          {overview ? (
            <div className="mt-6">
              <p className="sans text-[12px] tracking-[0.14em] text-[#e8a317] uppercase">
                Product overview
              </p>
              <p className="sans mt-3 max-w-2xl text-base leading-8 text-[#948c7a] md:text-lg">
                {overview}
              </p>
            </div>
          ) : null}
        </div>
        <dl className="sans space-y-4 text-[13px]">
          <div>
            <dt className="text-[#5e584c]">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="text-[#5e584c]">Company</dt>
            <dd className="mt-1">{project.company}</dd>
          </div>
          <div>
            <dt className="text-[#5e584c]">Type</dt>
            <dd className="mt-1">{project.category}</dd>
          </div>
        </dl>
      </header>

      {problem || contribution ? (
        <div className="mt-12 grid gap-0 border border-[#322e26] md:grid-cols-2">
          {problem ? (
            <CaseSection title="Problem" className="p-5">
              <p className="sans mt-3 text-base leading-7">{problem}</p>
            </CaseSection>
          ) : null}
          {contribution ? (
            <CaseSection
              title="My contribution"
              className={`p-5 ${problem ? "border-t border-[#322e26] md:border-t-0 md:border-l" : ""}`}
            >
              <p className="sans mt-3 text-base leading-7">{contribution}</p>
            </CaseSection>
          ) : null}
        </div>
      ) : null}

      {implementation ? (
        <CaseSection title="Technical implementation" className="mt-8">
          <p className="sans mt-3 max-w-3xl text-base leading-7">
            {implementation}
          </p>
        </CaseSection>
      ) : null}

      {tools.length > 0 ? (
        <CaseSection title="Tools" className="mt-8">
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((technology) => (
              <li
                key={technology}
                className="sans border border-[#322e26] px-2 py-1 text-[13px] text-[#948c7a]"
              >
                {technology}
              </li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      {shots.length > 0 ? (
        <CaseSection title="Product screenshots" className="mt-10">
          <div className="mt-4 grid gap-6">
            {shots.map((image, index) => (
              <figure key={image.src} className="border border-[#322e26]">
                <MediaFrame
                  src={image.src}
                  alt={image.alt}
                  priority={index === 0}
                />
                {image.caption ? (
                  <figcaption className="sans border-t border-[#322e26] bg-[#171611] px-3 py-2 text-[13px] text-[#948c7a]">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </CaseSection>
      ) : null}

      {outcome ? (
        <CaseSection title="Outcome" className="mt-8">
          <p className="sans mt-3 max-w-3xl text-base leading-7">{outcome}</p>
        </CaseSection>
      ) : null}

      <div className="mt-14 flex flex-col gap-6 border-t border-[#322e26] pt-6 md:flex-row md:items-center md:justify-between">
        <Link href={`/work/${next.slug}`}>
          <p className="sans text-[12px] text-[#5e584c]">Next project</p>
          <p className="mt-1 text-xl hover:text-[#e8a317]">{next.name}</p>
        </Link>
        <Link href="/#contact" className={primaryClass}>
          Start a project
        </Link>
      </div>
    </article>
  );
}

function CaseSection({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="sans text-[12px] tracking-[0.14em] text-[#e8a317] uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
