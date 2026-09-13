import React, { useEffect, useRef, useState } from 'react';
import { education } from '../data/portfolio';

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function GraduationCapIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L1 7l11 5 11-5-11-5z" />
      <path d="M5 9.5v6c0 1.5 3.1 3 7 3s7-1.5 7-3v-6" />
      <path d="M22 7v5" />
    </svg>
  );
}

function TimelineCard({ item, index, isVisible }) {
  return (
    <div
      className={`relative flex gap-6 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${300 + index * 200}ms` }}
    >
      {/* Timeline spine */}
      <div className="relative flex flex-col items-center">
        <div className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${item.isCurrent ? 'border-[#f59e0b] bg-[#f59e0b]' : 'border-[#f59e0b] bg-[#18181b]'}`}>
          <div className={`h-2 w-2 rounded-full ${item.isCurrent ? 'bg-[#18181b]' : 'bg-[#f59e0b]'}`} />
        </div>

        <div className="w-[2px] grow bg-gradient-to-b from-[#f59e0b] to-[#f59e0b]/20" />
      </div>

      {/* Education Card */}
      <div className={`group mb-10 flex-1 rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'border-[#f59e0b] bg-[#27272a] shadow-lg shadow-[#f59e0b]/10' : 'border-[#3f3f46] bg-[#27272a]/70 hover:border-[#f59e0b]/50'}`}>
        {item.isCurrent && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-bold text-[#18181b]">
            <span className="h-2 w-2 rounded-full bg-[#18181b] animate-ping" />
            Current Education
          </div>
        )}

        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug text-white">
            {item.degree}
          </h3>
          <GraduationCapIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#f59e0b] transition-colors duration-300 group-hover:text-[#fbbf24]" />
        </div>

        <p className="mb-3 text-sm font-medium sm:text-base text-[#a1a1aa]">
          {item.institution}
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#f59e0b]/10 px-3 py-1 text-xs font-semibold text-[#f59e0b] border border-[#f59e0b]/30">
            📅 {item.year}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#f59e0b]/10 px-3 py-1 text-xs font-semibold text-[#f59e0b] border border-[#f59e0b]/30">
            🎯 {item.score}
          </span>
        </div>

        <p className="text-sm leading-relaxed sm:text-base text-[#d4d4d8]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  const [sectionRef, sectionVisible] = useInView();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative px-6 py-24 sm:px-12 lg:px-24 bg-[#18181b]"
    >
      <div
        className={`mb-16 text-center transition-all duration-700 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Space_Grotesk']">
          Academic <span className="text-[#f59e0b]">Journey</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f59e0b]" />
      </div>

      <div
        className={`mx-auto max-w-3xl transition-all duration-700 delay-200 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {education.map((item, index) => (
          <TimelineCard
            key={item.degree}
            item={item}
            index={index}
            isVisible={sectionVisible}
          />
        ))}
      </div>
    </section>
  );
}
