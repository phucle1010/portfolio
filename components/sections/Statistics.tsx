export function Statistics() {
  return (
    <section className="bg-[#0e0e0e] border-b border-[#4d4354] py-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "+15", label: "PROJECTS COMPLETED" },
            { value: "+5", label: "HAPPY CLIENTS" },
            { value: "100%", label: "COMMITMENT" },
            { value: "24/7", label: "INNOVATION" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-[32px] md:text-[48px] tracking-[-0.96px] leading-tight md:leading-[56px]">
                {stat.value}
              </p>
              <p className="font-['Liberation_Sans:Bold',sans-serif] text-gray-primary text-[10px] md:text-[12px] tracking-[1.2px] uppercase leading-[16px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
