"use client";

import { useRef, type CSSProperties } from "react";

const LAYERS = [
  { id: "ui", label: "Interface", note: "What people see and use" },
  { id: "app", label: "Product", note: "How the business actually runs" },
  { id: "data", label: "Data", note: "Records, search, and memory" },
  { id: "infra", label: "Infrastructure", note: "Speed, uptime, and delivery" },
] as const;

const CYCLE = 7.2;

export function StackSchematic() {
  const root = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={root}
      className="hero-float relative w-full border border-[#322e26] bg-[#171611] p-5"
      style={{ "--tilt-x": "0px", "--tilt-y": "0px" } as CSSProperties}
      role="img"
      aria-label="How a product is built: interface, product, data, and infrastructure"
    >
      <p className="sans mb-5 text-[12px] tracking-[0.16em] text-[#948c7a] uppercase">
        How a product is built
      </p>
      <div className="relative pl-6">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[9px] w-px bg-[#e8a317]/35"
        />
        <span aria-hidden="true" className="hero-spine" />
        {LAYERS.map((layer, index) => (
          <div
            key={layer.id}
            className="relative mb-3 last:mb-0 transition-transform duration-200 ease-out"
            style={{
              transform: `translate(calc(var(--tilt-x) * ${index + 1}), calc(var(--tilt-y) * ${index + 1}))`,
            }}
          >
            <div
              className="hero-layer relative border bg-[#100f0c] px-3 py-3"
              style={{ animationDelay: `${(index * CYCLE) / LAYERS.length}s` }}
            >
              <span
                aria-hidden="true"
                className="hero-node absolute top-1/2 -left-[21px] mt-[-4.5px] size-[9px] border border-[#e8a317] bg-[#100f0c]"
                style={{
                  animationDelay: `${(index * CYCLE) / LAYERS.length}s`,
                }}
              />
              <p className="sans text-[13px] font-medium text-[#ebe6d8]">
                {layer.label}
              </p>
              <p className="sans mt-1 text-[12px] text-[#948c7a]">
                {layer.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
