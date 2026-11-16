"use client";

import { useDownloadCV } from "@/hooks/useDownloadCV";
import { cn } from "@/components/ui/utils";

export function ResumeButton({
  className,
  label = "Resume",
}: {
  className?: string;
  label?: string;
}) {
  const { pending, onDownloadCV } = useDownloadCV();

  return (
    <button
      type="button"
      onClick={onDownloadCV}
      disabled={pending}
      className={cn(
        "sans cursor-pointer text-left text-[13px] text-[#948c7a] hover:text-[#e8a317] disabled:opacity-50",
        className
      )}
    >
      {pending ? "Preparing…" : label}
    </button>
  );
}
