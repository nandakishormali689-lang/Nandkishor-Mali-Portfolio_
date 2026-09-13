import React, { useEffect, useRef, useState } from 'react';
import { internships } from '../data/portfolio';

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

function BriefcaseIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function InternshipCard({ item, index, isVisible }) {
  return (
    <div
      className={`group relative bg-[#27272a]/70 border border-[#3f3f46] rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#f59e0b]/60 hover:shadow-xl hover:shadow-[#f59e0b]/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#3f3f46]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
            <BriefcaseIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
              {item.role}
            </h3>
            <p className="text-[#a1a1aa] text-sm font-medium">
              {item.company}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-bold text-[#f59e0b]">
          {item.period}
        </span>
      </div>

      <p className="text-[#d4d4d8] text-sm md:text-base leading-relaxed mb-5">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-[#18181b] text-[#f59e0b] border border-[#f59e0b]/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [sectionRef, sectionVisible] = useInView();

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] text-white mb-4">
            Practical <span className="text-[#f59e0b]">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full mb-4" />
          <p className="text-[#a1a1aa] max-w-xl mx-auto text-base">
            Hands-on experience gained across 2+ internships in software development, web applications, and technology workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((item, index) => (
            <InternshipCard
              key={item.id}
              item={item}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
