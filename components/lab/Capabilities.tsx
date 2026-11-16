import { capabilities } from "@/constants/lab";

import { Buffer } from "./Buffer";

export function Capabilities() {
  return (
    <Buffer
      id="capabilities"
      kicker="Capabilities"
      className="border-t border-[#322e26]"
    >
      <h2 className="max-w-[16ch] text-[1.65rem] leading-tight font-medium tracking-[-0.03em] md:text-3xl">
        What I take from idea to production
      </h2>
      <ul className="mt-10 divide-y divide-[#322e26] border-y border-[#322e26]">
        {capabilities.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-3 py-6 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-8"
          >
            <p className="sans text-[12px] text-[#e8a317]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <p className="sans text-base font-medium tracking-[-0.02em]">
                {item.title}
              </p>
              <p className="sans mt-2 max-w-2xl text-sm leading-6 text-[#948c7a] md:text-[15px]">
                {item.value}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Buffer>
  );
}
