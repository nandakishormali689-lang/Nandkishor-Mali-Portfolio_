import React from 'react';
import { languages } from '../data/portfolio';

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#f59e0b] shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function Languages() {
  return (
    <section id="languages" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-['Space_Grotesk']">
          <span className="text-[#f59e0b]">Languages</span>
        </h2>
        <div className="w-16 h-1 bg-[#f59e0b] mx-auto rounded-full" />
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group flex items-center gap-3 bg-[#27272a]/70 border border-[#3f3f46]
                       rounded-xl px-8 py-4 backdrop-blur-sm transition-all duration-300
                       hover:border-[#f59e0b]/60 hover:scale-[1.03]"
          >
            <GlobeIcon />

            <div>
              <p className="text-white font-semibold leading-tight">
                {lang.name}
              </p>
              <p className="text-[#a1a1aa] text-xs mt-0.5 font-medium">
                {lang.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
