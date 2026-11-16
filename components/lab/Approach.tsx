import { approachSteps } from "@/constants/lab";

import { Buffer } from "./Buffer";

export function Approach() {
  return (
    <Buffer
      id="approach"
      kicker="Approach"
      className="border-t border-[#322e26]"
    >
      <h2 className="text-[1.65rem] leading-tight font-medium tracking-[-0.03em] md:text-3xl">
        How a product gets shipped
      </h2>
      <ol className="relative mt-10 ml-2 border-l border-[#e8a317]/40">
        {approachSteps.map((step, index) => (
          <li key={step.title} className="relative py-5 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-7 -left-[5px] size-[9px] border border-[#e8a317] bg-[#100f0c]"
            />
            <p className="sans text-[13px] font-medium text-[#e8a317]">
              {String(index + 1).padStart(2, "0")} {step.title}
            </p>
            <p className="sans mt-2 max-w-2xl text-sm leading-6 text-[#948c7a] md:text-[15px]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Buffer>
  );
}
