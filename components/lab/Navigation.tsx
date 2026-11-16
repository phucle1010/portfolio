"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/components/ui/utils";
import { site } from "@/constants/lab";
import { primaryClass } from "./classes";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

const SECTIONS = [{ id: "hero" }, ...LINKS];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("hero");
  const active = pathname === "/" ? section : "work";

  const hrefFor = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const nodes = SECTIONS.map((item) =>
      document.getElementById(item.id)
    ).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#322e26] bg-[#100f0c]/95 backdrop-blur-sm">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-5 md:px-8"
        >
          <a
            href={pathname === "/" ? "#hero" : "/"}
            className="sans text-[15px] font-medium tracking-[-0.02em] text-[#ebe6d8]"
          >
            {site.name}
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={hrefFor(link.id)}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "sans px-3 py-1.5 text-[13px]",
                  active === link.id
                    ? "text-[#e8a317]"
                    : "text-[#948c7a] hover:text-[#ebe6d8]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={hrefFor("contact")}
            className={cn(primaryClass, "hidden h-9 min-h-0 md:inline-flex")}
          >
            Start a project
          </a>

          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center text-[#ebe6d8] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-[#100f0c] px-5 py-6 md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={hrefFor(link.id)}
              onClick={() => setOpen(false)}
              className="sans border-b border-[#322e26] py-4 text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={hrefFor("contact")}
            onClick={() => setOpen(false)}
            className={`${primaryClass} mt-6 w-fit`}
          >
            Start a project
          </a>
        </div>
      ) : null}
    </>
  );
}
