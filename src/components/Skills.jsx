import React, { useState, useEffect, useRef } from 'react';
import { skills, skillCategories } from '../data/portfolio';

const SkillIcons = {
  java: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M22 18c0-4 4-6 4-10" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 18c0-4 4-6 4-10" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="16" y="22" width="24" height="22" rx="3" fill="#f59e0b" />
      <path d="M40 28h4a4 4 0 0 1 0 8h-4" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
      <ellipse cx="28" cy="48" rx="16" ry="3" fill="#d97706" />
    </svg>
  ),

  c: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <circle cx="32" cy="32" r="22" stroke="#f59e0b" strokeWidth="4" fill="none" />
      <text x="32" y="42" textAnchor="middle" fill="#f59e0b" fontSize="30" fontWeight="bold" fontFamily="monospace">
        C
      </text>
    </svg>
  ),

  cpp: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <circle cx="32" cy="32" r="22" stroke="#fbbf24" strokeWidth="4" fill="none" />
      <text x="32" y="42" textAnchor="middle" fill="#fbbf24" fontSize="22" fontWeight="bold" fontFamily="monospace">
        C++
      </text>
    </svg>
  ),

  python: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M20 44c0-8 8-8 8-16s8-8 8 0 8 8 8 16" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="44" cy="44" r="5" fill="#4ade80" />
      <circle cx="45" cy="43" r="1.5" fill="#18181b" />
      <path d="M49 44l4-2m-4 2l4 2" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  js: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="12" y="12" width="40" height="40" rx="8" fill="#f59e0b" />
      <text x="32" y="42" textAnchor="middle" fill="#18181b" fontSize="26" fontWeight="bold" fontFamily="monospace">
        JS
      </text>
    </svg>
  ),

  html5: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M14 10l4 40 14 4 14-4 4-40H14z" fill="#f97316" opacity="0.9" />
      <path d="M32 16v34l11-3 3-31H32z" fill="#ea580c" />
      <text x="32" y="38" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="extrabold" fontFamily="monospace">
        &lt;/&gt;
      </text>
    </svg>
  ),

  css3: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M14 10l4 40 14 4 14-4 4-40H14z" fill="#38bdf8" opacity="0.9" />
      <path d="M32 16v34l11-3 3-31H32z" fill="#0284c7" />
      <text x="32" y="38" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="extrabold" fontFamily="sans-serif">
        3
      </text>
    </svg>
  ),

  bootstrap: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="12" y="12" width="40" height="40" rx="10" fill="#a855f7" />
      <text x="32" y="43" textAnchor="middle" fill="#ffffff" fontSize="30" fontWeight="extrabold" fontFamily="sans-serif">
        B
      </text>
    </svg>
  ),

  sql: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="16" y="18" width="32" height="28" rx="2" fill="#f59e0b" opacity="0.85" />
      <ellipse cx="32" cy="18" rx="16" ry="6" fill="#fbbf24" />
      <ellipse cx="32" cy="32" rx="16" ry="5" fill="none" stroke="#78350f" strokeWidth="1.5" />
      <ellipse cx="32" cy="46" rx="16" ry="6" fill="#f59e0b" />
    </svg>
  ),

  cloud: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M20 44h26a10 10 0 0 0 0-20 14 14 0 0 0-26-4 10 10 0 0 0 0 24z" fill="#38bdf8" opacity="0.85" />
      <path d="M20 44a10 10 0 0 1-2-19.8A14 14 0 0 1 44 20a10 10 0 0 1 2 20H20z" stroke="#0284c7" strokeWidth="2" fill="none" />
    </svg>
  ),

  network: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <circle cx="32" cy="18" r="6" fill="#f59e0b" />
      <circle cx="18" cy="44" r="6" fill="#38bdf8" />
      <circle cx="46" cy="44" r="6" fill="#4ade80" />
      <line x1="32" y1="24" x2="18" y2="38" stroke="#a1a1aa" strokeWidth="3" />
      <line x1="32" y1="24" x2="46" y2="38" stroke="#a1a1aa" strokeWidth="3" />
      <line x1="24" y1="44" x2="40" y2="44" stroke="#a1a1aa" strokeWidth="3" />
    </svg>
  ),

  devops: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M22 24c-6 0-10 4-10 8s4 8 10 8c6 0 10-8 10-8s4 8 10 8 10-4 10-8-4-8-10-8-10 8-10 8-4-8-10-8z" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="22" cy="32" r="3" fill="#f59e0b" />
      <circle cx="42" cy="32" r="3" fill="#38bdf8" />
    </svg>
  ),

  git: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M46 16a5 5 0 1 0-8 4v8c0 3-2 5-5 5s-5-2-5-5V20a5 5 0 1 0-4 0v16a5 5 0 1 0 8 4v-4c2 0 4 1 5 3a5 5 0 1 0 9-2v-9a5 5 0 0 0 0-9z" fill="#f97316" />
    </svg>
  ),

  android: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <line x1="22" y1="12" x2="26" y2="20" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="12" x2="38" y2="20" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="16" y="20" width="32" height="24" rx="12" fill="#4ade80" />
      <circle cx="26" cy="30" r="2.5" fill="#18181b" />
      <circle cx="38" cy="30" r="2.5" fill="#18181b" />
      <rect x="18" y="46" width="28" height="10" rx="3" fill="#22c55e" />
    </svg>
  ),

  web: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <circle cx="32" cy="32" r="20" stroke="#38bdf8" strokeWidth="3" />
      <ellipse cx="32" cy="32" rx="20" ry="8" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="32" cy="32" rx="8" ry="20" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="32" cy="32" r="2" fill="#38bdf8" />
    </svg>
  ),

  game: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M10 32c0-6 4-12 12-12h20c8 0 12 6 12 12s-2 14-8 14c-4 0-6-4-10-4h-8c-4 0-6 4-10 4-6 0-8-8-8-14z" fill="#f472b6" />
      <rect x="19" y="27" width="4" height="12" rx="1" fill="#18181b" />
      <rect x="15" y="31" width="12" height="4" rx="1" fill="#18181b" />
      <circle cx="42" cy="29" r="2.5" fill="#18181b" />
      <circle cx="48" cy="33" r="2.5" fill="#18181b" />
      <circle cx="42" cy="37" r="2.5" fill="#18181b" />
      <circle cx="36" cy="33" r="2.5" fill="#18181b" />
    </svg>
  ),
};

const DefaultSkillIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
    <rect x="16" y="16" width="32" height="32" rx="8" stroke="#f59e0b" strokeWidth="3" fill="#f59e0b" fillOpacity="0.1" />
    <text x="32" y="38" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold" fontFamily="monospace">
      &lt;/&gt;
    </text>
  </svg>
);

const categoryColors = {
  Programming: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
  Frontend: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  Database: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Cloud & Infrastructure': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  'DevOps & Tools': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  Development: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

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
      { threshold: 0.12, ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function SkillCard({ skill, index }) {
  const [cardRef, isVisible] = useInView();
  const iconComponent = SkillIcons[skill.icon] || <DefaultSkillIcon />;

  return (
    <div
      ref={cardRef}
      className={`
        group relative flex flex-col justify-between
        bg-[#27272a]/70 backdrop-blur-lg
        border border-[#3f3f46]
        rounded-2xl p-6
        transition-all duration-500 ease-out
        hover:scale-[1.04] hover:border-[#f59e0b]/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        {/* SVG Icon - guaranteed to render with uniform h-12 container */}
        <div className="h-12 flex items-center justify-center mb-1">
          {iconComponent}
        </div>

        {/* Technology name */}
        <h3 className="text-lg font-bold text-white tracking-wide">
          {skill.name}
        </h3>

        {/* Category badge */}
        <span
          className={`
            inline-block text-[11px] font-semibold uppercase tracking-wider
            px-3 py-1 rounded-full border
            ${categoryColors[skill.category] || 'bg-white/10 text-white/70 border-white/20'}
          `}
        >
          {skill.category}
        </span>

        {/* Description */}
        <p className="text-[#a1a1aa] text-sm leading-relaxed mt-1">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const [headingRef, headingVisible] = useInView();

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#18181b] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Tech <span className="text-[#f59e0b]">Stack</span>
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 rounded-full bg-[#f59e0b]" />

          <p className="mt-5 text-[#a1a1aa] max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            A comprehensive set of skills across programming, frontend development,
            cloud & networking, DevOps, and databases.
          </p>
        </div>

        {/* Category filter pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {skillCategories.map((cat) => (
            <span
              key={cat}
              className="
                px-4 py-1.5 rounded-full text-sm font-semibold
                bg-[#27272a] text-[#f59e0b] border border-[#f59e0b]/30
                backdrop-blur-sm
                hover:bg-[#f59e0b]/20 hover:border-[#f59e0b]/60
                transition-colors duration-300 cursor-default select-none
              "
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
