import React from "react";
import { partnerCompanies, supportingPartners, type Partner } from "@/lib/partners";

function LogoGrid({
  items,
  gridClass,
}: {
  items: Partner[];
  gridClass: string;
}) {
  return (
    <div className={gridClass}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-28 sm:h-14 sm:w-32 lg:h-16 lg:w-40"
        >
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="max-h-full max-w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </a>
      ))}
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-semibold text-white mb-16 tracking-tight">
          Partners &amp; Supporters
        </h2>

        {/* Subsection 1: Partners — 11 logos, 5 columns per row */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold text-center mb-10">
            Partners
          </p>
      <LogoGrid
        items={partnerCompanies}
        gridClass="grid grid-cols-2 sm:grid-cols-5 gap-x-6 sm:gap-x-16 gap-y-10 sm:gap-y-14 items-center justify-items-center"
      />
    </div>

    {/* Divider */}
    <div className="border-t border-white/5 my-14" />

      {/* Subsection 2: Supporting Partners — 4 columns on desktop, responsive */}
      <div>
        <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold text-center mb-10">
          Supporting Partners
        </p>
        <LogoGrid
          items={supportingPartners}
          gridClass="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-14 items-center justify-items-center"
        />
      </div>
      </div>
    </section>
  );
}
