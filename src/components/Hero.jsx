import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

const TITLES = [
  'B.E. Computer Engineering Student',
  'Software Engineer',
  'Backend Developer',
  'Web Developer'
];

const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1800;

function useTypingEffect(strings) {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];

    if (!isDeleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, DELETING_SPEED);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setStringIndex((i) => (i + 1) % strings.length);
    }
  }, [charIndex, isDeleting, stringIndex, strings]);

  return displayText;
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.877 20.452H3.797V9h3.08v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CodeEditorCard() {
  const name = personalInfo.name || 'Nandkishor Mali';

  return (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#f59e0b]/20 via-[#fbbf24]/20 to-[#f59e0b]/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

      <div className="relative rounded-2xl border border-[#3f3f46] bg-[#27272a]/90 backdrop-blur-md shadow-2xl overflow-hidden animate-float">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#3f3f46] bg-[#18181b]/60">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#a1a1aa] font-mono">engineer.js</span>
        </div>

        <pre className="px-5 py-5 text-sm leading-relaxed font-mono overflow-x-auto text-[#ffffff]">
          <code>
            <span className="text-[#c792ea]">const</span>{' '}
            <span className="text-[#38bdf8]">student</span>{' '}
            <span className="text-[#a1a1aa]">=</span>{' '}
            <span className="text-[#a1a1aa]">{'{'}</span>
            {'\n'}

            {'  '}
            <span className="text-[#38bdf8]">name</span>
            <span className="text-[#a1a1aa]">:</span>{' '}
            <span className="text-[#f59e0b]">{`'${name}'`}</span>
            <span className="text-[#a1a1aa]">,</span>
            {'\n'}

            {'  '}
            <span className="text-[#38bdf8]">degree</span>
            <span className="text-[#a1a1aa]">:</span>{' '}
            <span className="text-[#4ade80]">'B.E. Computer Engineering'</span>
            <span className="text-[#a1a1aa]">,</span>
            {'\n'}

            {'  '}
            <span className="text-[#38bdf8]">college</span>
            <span className="text-[#a1a1aa]">:</span>{' '}
            <span className="text-[#4ade80]">'Matoshri COE, Nashik'</span>
            <span className="text-[#a1a1aa]">,</span>
            {'\n'}

            {'  '}
            <span className="text-[#38bdf8]">diploma</span>
            <span className="text-[#a1a1aa]">:</span>{' '}
            <span className="text-[#f59e0b]">'CS (86%, 2026)'</span>
            <span className="text-[#a1a1aa]">,</span>
            {'\n'}

            {'  '}
            <span className="text-[#38bdf8]">skills</span>
            <span className="text-[#a1a1aa]">:</span>{' '}
            <span className="text-[#a1a1aa]">[</span>
            <span className="text-[#f59e0b]">'Java'</span>
            <span className="text-[#a1a1aa]">,</span>{' '}
            <span className="text-[#f59e0b]">'C++'</span>
            <span className="text-[#a1a1aa]">,</span>{' '}
            <span className="text-[#f59e0b]">'Python'</span>
            <span className="text-[#a1a1aa]">,</span>{' '}
            <span className="text-[#f59e0b]">'Backend & Web'</span>
            <span className="text-[#a1a1aa]">]</span>
            {'\n'}

            <span className="text-[#a1a1aa]">{'}'}</span>
            <span className="text-[#a1a1aa]">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(TITLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#18181b] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#f59e0b]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#fbbf24]/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              Hi! my name is
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#f59e0b] leading-none tracking-tight font-['Space_Grotesk']">
              {personalInfo.name || 'Nandkishor Mali'}
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              <span>I'm a </span>
              <span className="text-[#f59e0b] inline-block">{typedText}</span>
              <span className="inline-block w-[3px] h-[0.9em] bg-[#f59e0b] ml-1 align-middle animate-blink" />
            </div>

            <p className="text-[#d4d4d8] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#fbbf24] text-[#18181b] font-bold text-base shadow-lg shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/40 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#f59e0b] text-[#f59e0b] font-semibold text-base transition-all duration-300 hover:bg-[#f59e0b] hover:text-[#18181b] hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-5 justify-center lg:justify-start pt-4">
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#a1a1aa] hover:text-[#f59e0b] transition-colors duration-300"
                >
                  <GitHubIcon />
                </a>
              )}

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#a1a1aa] hover:text-[#f59e0b] transition-colors duration-300"
                >
                  <LinkedInIcon />
                </a>
              )}

              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="text-[#a1a1aa] hover:text-[#f59e0b] transition-colors duration-300"
                >
                  <EmailIcon />
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <CodeEditorCard />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
      `}</style>
    </section>
  );
}
