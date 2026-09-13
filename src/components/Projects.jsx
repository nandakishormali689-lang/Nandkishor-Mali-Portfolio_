import React from 'react';
import { projects } from '../data/portfolio';

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 text-[#f59e0b]/50"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5-6H21m0 0v7.5m0-7.5-9 9"
    />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group bg-[#27272a]/80 backdrop-blur-md border border-[#3f3f46] rounded-2xl overflow-hidden
                 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(245,158,11,0.15)]
                 hover:border-[#f59e0b]/50"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      <div className="relative h-48 bg-gradient-to-br from-[#18181b] to-[#27272a] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-3xl group-hover:bg-[#f59e0b]/20 transition-colors duration-500" />
        <div className="relative flex flex-col items-center gap-2 z-10">
          <CodeIcon />
          <span className="text-xs font-mono text-[#f59e0b] tracking-widest font-semibold">
            PROJECT {String(project.id).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#27272a] to-transparent" />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[#f59e0b] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-[#a1a1aa] text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full
                         bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20
                         transition-colors duration-300 hover:bg-[#f59e0b]/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                       text-sm font-semibold text-white border border-[#3f3f46]
                       hover:border-[#f59e0b]/60 hover:text-[#f59e0b] hover:bg-[#f59e0b]/10
                       transition-all duration-300"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                       text-sm font-bold text-[#18181b] bg-[#f59e0b] hover:bg-[#fbbf24]
                       shadow-[0_4px_16px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_24px_rgba(245,158,11,0.4)]
                       transition-all duration-300"
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Featured <span className="text-[#f59e0b]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full" />
          <p className="mt-4 text-[#a1a1aa] max-w-xl mx-auto text-base">
            A selection of projects that showcase my skills in software development,
            problem-solving, and building real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
