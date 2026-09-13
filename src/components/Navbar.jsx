import { useState, useEffect, useCallback } from "react";
import { navLinks, personalInfo } from "../data/portfolio";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#18181b]/90 backdrop-blur-xl border-b border-[#3f3f46]/60 shadow-lg shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white hover:text-[#f59e0b] transition-colors duration-300"
          >
            {personalInfo?.name ?? "Nandkishor Mali"}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-sm font-semibold tracking-wide transition-colors duration-300 group ${
                    isActive(link.href)
                      ? "text-[#f59e0b]"
                      : "text-[#a1a1aa] hover:text-white"
                  }`}
                >
                  {link.name || link.label}

                  {/* Hover / active underline */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#f59e0b] rounded-full transition-all duration-300 ${
                      isActive(link.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button (mobile) */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-[#3f3f46] bg-[#18181b]/80 backdrop-blur-md text-[#a1a1aa] hover:text-white hover:border-[#f59e0b]/60 transition-all duration-300 cursor-pointer"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                className={`origin-center transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-[6px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                className={`origin-center transition-all duration-300 ${
                  mobileOpen
                    ? "-translate-y-[6px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer panel */}
      <aside
        className={`fixed top-0 right-0 z-45 h-full w-72 bg-[#18181b]/98 backdrop-blur-2xl border-l border-[#3f3f46] shadow-2xl shadow-black/80 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8 gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              className={`relative py-3 text-lg font-medium tracking-wide transition-all duration-300 ${
                mobileOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              } ${
                isActive(link.href)
                  ? "text-[#f59e0b]"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              {link.name || link.label}

              {isActive(link.href) && (
                <span className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              )}
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#3f3f46]/40" />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
