import { cn } from "@/components/ui/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  fit?: "contain" | "cover";
  className?: string;
};

export function MediaFrame({
  src,
  alt,
  priority = false,
  fit = "contain",
  className,
}: MediaFrameProps) {
  const cover = fit === "cover";

  return (
    <div className={cn("relative overflow-hidden bg-[#171611]", className)}>
      {/* Static UI screenshots: skip next/image so they are not recompressed or stretched in a fill box. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={
          cover
            ? "absolute inset-0 size-full object-cover object-top"
            : "block h-auto w-full"
        }
      />
    </div>
  );
}
