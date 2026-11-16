import { SOCIAL_LINKS } from "@/constants/social-links";
import { site } from "@/constants/lab";

import { ResumeButton } from "./ResumeButton";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#322e26]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="sans text-[13px] text-[#948c7a]">
          <span className="text-[#ebe6d8]">{site.name}</span>
          {" — "}
          {site.statement}
        </p>
        <div className="sans flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
          {SOCIAL_LINKS.filter((link) => link.id !== "email").map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#948c7a] hover:text-[#e8a317]"
            >
              {link.label}
            </a>
          ))}
          <ResumeButton label="Resume" />
          <span className="text-[#5e584c]">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
