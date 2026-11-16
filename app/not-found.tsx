import Link from "next/link";

import { LabFrame } from "@/components/lab/LabFrame";
import { primaryClass } from "@/components/lab/classes";

export default function NotFound() {
  return (
    <LabFrame>
      <div className="mx-auto flex min-h-[70vh] max-w-[1120px] flex-col justify-center px-5 md:px-8">
        <p className="sans text-[12px] tracking-[0.16em] text-[#e8a317] uppercase">
          Page not found
        </p>
        <h1 className="mt-4 max-w-[14ch] text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          This page is not on the site.
        </h1>
        <p className="sans mt-4 max-w-md text-[#948c7a]">
          The address does not match a published project or section.
        </p>
        <Link href="/" className={`${primaryClass} mt-8 w-fit`}>
          Back to home
        </Link>
      </div>
    </LabFrame>
  );
}
