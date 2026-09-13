import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#18181b]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] text-white mb-4">
            Get In <span className="text-[#f59e0b]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full mb-6"></div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Let's Build Something Together
          </h3>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-base">
            I'm currently looking for opportunities to start my career in software development, application development, or web development. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-5 p-6 bg-[#27272a]/70 border border-[#3f3f46] rounded-2xl backdrop-blur-md hover:border-[#f59e0b]/60 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-[#18181b] transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-base group-hover:text-[#f59e0b] transition-colors">{personalInfo.email}</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-5 p-6 bg-[#27272a]/70 border border-[#3f3f46] rounded-2xl backdrop-blur-md hover:border-[#f59e0b]/60 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-[#18181b] transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">Phone</p>
                <p className="text-white font-medium text-base group-hover:text-[#f59e0b] transition-colors">{personalInfo.phone}</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-5 p-6 bg-[#27272a]/70 border border-[#3f3f46] rounded-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">Location</p>
                <p className="text-white font-medium text-base">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[#27272a]/70 border border-[#3f3f46] rounded-xl backdrop-blur-md hover:border-[#f59e0b]/60 transition-all text-[#a1a1aa] hover:text-white group"
              >
                <svg className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="text-sm font-medium">GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[#27272a]/70 border border-[#3f3f46] rounded-xl backdrop-blur-md hover:border-[#f59e0b]/60 transition-all text-[#a1a1aa] hover:text-white group"
              >
                <svg className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="bg-[#27272a]/70 border border-[#3f3f46] rounded-2xl p-8 backdrop-blur-md space-y-6">
              {submitted && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-xl text-white placeholder-[#a1a1aa]/50 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-xl text-white placeholder-[#a1a1aa]/50 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-xl text-white placeholder-[#a1a1aa]/50 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Nandkishor, I would like to discuss..."
                  className="w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-xl text-white placeholder-[#a1a1aa]/50 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#18181b] font-bold rounded-xl shadow-lg shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
