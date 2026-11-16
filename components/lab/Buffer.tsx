import type { ReactNode } from "react";

import { cn } from "@/components/ui/utils";

export function Buffer({
  id,
  kicker,
  children,
  className,
  bodyClassName,
  flush = false,
}: {
  id: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  flush?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)}>
      <div
        className={cn(
          "mx-auto max-w-[1120px]",
          flush ? "px-0 py-16 md:px-8 md:py-20" : "px-5 py-16 md:px-8 md:py-20",
          bodyClassName
        )}
      >
        {kicker ? (
          <p className="sans mb-4 text-[12px] tracking-[0.18em] text-[#e8a317] uppercase">
            {kicker}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
