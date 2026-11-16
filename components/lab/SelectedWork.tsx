"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";

import { projects, type LabImage, type LabProject } from "@/constants/lab";
import { cn } from "@/components/ui/utils";
import { Buffer } from "./Buffer";
import { MediaFrame } from "./MediaFrame";
import { textLinkClass } from "./classes";

function projectShots(project: LabProject): LabImage[] {
  const extras = project.images.filter(
    (image) => image.src && image.src !== project.cover.src
  );
  const cover =
    project.images.find((image) => image.src === project.cover.src) ??
    project.cover;
  return [cover, ...extras];
}

export function SelectedWork() {
  const [active, setActive] = useState(0);
  const [shot, setShot] = useState(0);
  const [changed, setChanged] = useState(false);
  const [vertical, setVertical] = useState(true);
  const uid = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const shotRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const current = projects[active] ?? projects[0];
  const shots = projectShots(current);
  const frame = shots[shot] ?? shots[0];
  const panelId = `${uid}-panel`;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const apply = () => setVertical(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  function revealTab(index: number, focus = false) {
    const node = tabRefs.current[index];
    const scroller = node?.closest("ul");
    if (node && scroller && scroller.scrollWidth > scroller.clientWidth + 1) {
      const item = node.getBoundingClientRect();
      const view = scroller.getBoundingClientRect();
      const edge = 16;
      if (item.left < view.left) {
        scroller.scrollLeft -= view.left - item.left + edge;
      } else if (item.right > view.right) {
        scroller.scrollLeft += item.right - view.right + edge;
      }
    }
    if (focus) node?.focus({ preventScroll: true });
  }

  function selectProject(index: number, focus = false) {
    setChanged(true);
    setActive(index);
    setShot(0);
    revealTab(index, focus);
  }

  function onIndexKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.altKey || event.metaKey || event.ctrlKey) return;

    if (event.key === "Home") {
      event.preventDefault();
      selectProject(0, true);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      selectProject(projects.length - 1, true);
      return;
    }

    const delta =
      event.key === "ArrowDown" ||
      event.key === "ArrowRight" ||
      event.key === "j"
        ? 1
        : event.key === "ArrowUp" ||
            event.key === "ArrowLeft" ||
            event.key === "k"
          ? -1
          : 0;
    if (!delta) return;

    event.preventDefault();
    selectProject((active + delta + projects.length) % projects.length, true);
  }

  function onShotKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (shots.length < 2) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = (shot + delta + shots.length) % shots.length;
    setChanged(true);
    setShot(next);
    shotRefs.current[next]?.focus();
  }

  return (
    <Buffer id="work" kicker="Work" className="border-t border-[#322e26]">
      <h2 className="text-[1.65rem] leading-tight font-medium tracking-[-0.03em] md:text-3xl">
        Selected work
      </h2>
      <p className="sans mt-3 max-w-xl text-sm leading-6 text-[#948c7a] md:text-[15px]">
        Products I have helped take from idea to something people can use.
      </p>

      <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-x-12">
        <div className="min-w-0">
          <ul
            role="tablist"
            aria-label="Projects"
            aria-orientation={vertical ? "vertical" : "horizontal"}
            onKeyDown={onIndexKeyDown}
            className="-mx-5 flex snap-x snap-mandatory items-stretch gap-1 overflow-x-auto px-5 py-1.5 scrollbar-hide md:-mx-8 md:px-8 lg:sticky lg:top-20 lg:mx-0 lg:block lg:overflow-visible lg:border-y lg:border-[#322e26] lg:px-0 lg:py-0 lg:divide-y lg:divide-[#322e26]"
          >
            {projects.map((project, index) => {
              const selected = index === active;
              return (
                <li key={project.slug} className="flex shrink-0 lg:block">
                  <button
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    id={`${uid}-tab-${project.slug}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectProject(index)}
                    className={cn(
                      "flex h-full w-[13.25rem] cursor-pointer snap-start gap-3 border-b-2 px-3 py-3 text-left transition-colors duration-200 lg:h-auto lg:w-full lg:border-b-0 lg:border-l-2 lg:py-3.5",
                      selected
                        ? "border-[#e8a317] bg-[#1c1a16]"
                        : "border-transparent hover:bg-[#171611]"
                    )}
                  >
                    <span
                      className={cn(
                        "w-6 shrink-0 pt-0.5 text-[11px] tracking-[0.06em] tabular-nums",
                        selected ? "text-[#948c7a]" : "text-[#5e584c]"
                      )}
                    >
                      {project.index}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "sans block text-[14px] leading-5 tracking-[-0.01em]",
                          selected
                            ? "font-medium text-[#ebe6d8]"
                            : "text-[#b7b0a1]"
                        )}
                      >
                        {project.name}
                      </span>
                      <span className="mt-1 block text-[11px] leading-4 text-[#948c7a]">
                        {project.role}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <article
          role="tabpanel"
          id={panelId}
          aria-labelledby={`${uid}-tab-${current.slug}`}
          className="min-w-0 pt-6 lg:pt-0"
        >
          <figure>
            <div
              key={frame.src}
              className={cn(
                "border border-[#322e26] bg-[#e4dfd4] p-1.5 md:p-2",
                changed && "archive-in"
              )}
            >
              <MediaFrame
                src={frame.src}
                alt={frame.alt}
                priority={active === 0 && shot === 0}
                className="bg-[#e4dfd4]"
              />
            </div>

            {frame.caption ? (
              <figcaption className="mt-2.5 flex items-baseline justify-between gap-4 text-[12px] leading-5">
                <span className="text-[#948c7a]">{frame.caption}</span>
                {shots.length > 1 ? (
                  <span className="shrink-0 tracking-[0.08em] text-[#5e584c] tabular-nums">
                    {String(shot + 1).padStart(2, "0")} /{" "}
                    {String(shots.length).padStart(2, "0")}
                  </span>
                ) : null}
              </figcaption>
            ) : null}

            {shots.length > 1 ? (
              <div
                role="group"
                aria-label={`${current.name} screenshots`}
                onKeyDown={onShotKeyDown}
                className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide"
              >
                {shots.map((image, index) => {
                  const selected = index === shot;
                  return (
                    <button
                      key={image.src}
                      ref={(node) => {
                        shotRefs.current[index] = node;
                      }}
                      type="button"
                      aria-pressed={selected}
                      aria-label={image.caption || image.alt}
                      onClick={() => {
                        setChanged(true);
                        setShot(index);
                      }}
                      className={cn(
                        "w-[5.75rem] shrink-0 cursor-pointer border bg-[#e4dfd4] p-0.5 md:w-28",
                        selected
                          ? "border-[#e8a317]"
                          : "border-[#322e26] hover:border-[#5e584c]"
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt=""
                        decoding="async"
                        className="block h-auto w-full"
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </figure>

          <div
            key={current.slug}
            className={cn(
              "mt-6 border-t border-[#322e26] pt-5",
              changed && "archive-in"
            )}
          >
            <p className="text-[11px] tracking-[0.16em] text-[#e8a317] uppercase">
              {current.category}
            </p>
            <h3 className="mt-2 text-[1.85rem] leading-[1.05] font-medium tracking-[-0.03em] md:text-[2.15rem]">
              {current.name}
            </h3>
            <p className="sans mt-3 max-w-2xl text-sm leading-6 text-[#948c7a] md:text-[15px]">
              {current.summary}
            </p>
            <p className="mt-5 text-[12px] leading-5 text-[#948c7a]">
              <span className="text-[#5e584c]">Role </span>
              {current.role}
              <span className="text-[#322e26]"> · </span>
              {current.company}
            </p>
            <p className="mt-2 max-w-2xl text-[12px] leading-5 text-[#948c7a]">
              <span className="text-[#5e584c]">Stack </span>
              {current.technologies.join(" · ")}
            </p>
            <Link
              href={`/work/${current.slug}`}
              className={cn(textLinkClass, "mt-5")}
            >
              Explore case study
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      </div>
    </Buffer>
  );
}
