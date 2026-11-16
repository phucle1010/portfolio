import type { ReactNode } from "react";

import { Navigation } from "./Navigation";
import { SiteFooter } from "./SiteFooter";

export function LabFrame({ children }: { children: ReactNode }) {
  return (
    <div className="lab min-h-screen bg-[#100f0c] text-[#ebe6d8]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-[#e8a317] focus:px-4 focus:py-2 focus:text-[#100f0c]"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="content">{children}</main>
      <SiteFooter />
    </div>
  );
}
