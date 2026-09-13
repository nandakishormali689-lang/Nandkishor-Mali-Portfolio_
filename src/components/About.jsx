import React, { useEffect, useRef, useState } from 'react';
import { aboutMe } from '../data/portfolio';

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

function StatCard({ value, label, delay }) {
  return (
    <div
      className="group flex flex-col items-center justify-center gap-1 rounded-2xl border border-[#3f3f46] bg-[#27272a]/70 px-4 py-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/60 hover:shadow-lg hover:shadow-[#f59e0b]/10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-3xl font-bold tracking-tight text-[#f59e0b]">
        {value}
      </span>
      <span className="text-sm font-medium text-[#a1a1aa]">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const [sectionRef, sectionVisible] = useInView();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-24 sm:px-12 lg:px-24 bg-[#18181b]"
    >
      <div
        className={`mb-16 text-center transition-all duration-700 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Space_Grotesk']">
          About <span className="text-[#f59e0b]">Me</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f59e0b]" />
      </div>

      <div
        className={`mx-auto grid max-w-6xl gap-12 transition-all duration-700 delay-200 lg:grid-cols-2 lg:gap-16 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Left: Text content */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-base leading-relaxed sm:text-lg text-[#d4d4d8]">
            {aboutMe.description}
          </p>

          <p className="rounded-xl border border-[#3f3f46] bg-[#27272a]/80 px-5 py-4 text-sm font-medium italic backdrop-blur-sm sm:text-base text-[#f59e0b]">
            🎯 {aboutMe.focus}
          </p>
        </div>

        {/* Right: Stats grid (2×2) */}
        <div className="grid grid-cols-2 gap-4">
          {aboutMe.stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
