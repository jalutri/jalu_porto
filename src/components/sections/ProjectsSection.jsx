import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Github, ExternalLink, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

gsap.registerPlugin(ScrollTrigger);

/**
 * Component: ProjectsSection
 * Portofolio proyek unggulan dengan animasi smooth scroll GSAP ScrollTrigger + Framer Motion
 * dan modal popup detail case study (arsitektur, tantangan, solusi, hasil).
 */
export const ProjectsSection = ({ projectsData = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Project cards stagger reveal animation
      if (gridRef.current && gridRef.current.children.length > 0) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-28 bg-[#F9FAFB] bg-grid-pattern border-y border-gray-200 overflow-hidden relative"
    >
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="navy" className="mb-3">
            {t.tag}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            {t.subtitle}
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              data-cursor={lang === 'id' ? "Lihat Studi Kasus" : "View Case Study"}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col hover:shadow-xl hover:border-[#BFDBFE] transition-all group cursor-pointer"
            >
              {/* Image Thumbnail */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#1F2937]/85 backdrop-blur-sm text-white font-mono text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading text-[#1F2937] mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-[#4B5563] text-sm leading-relaxed mb-6 flex-grow">
                  {typeof project.shortDescription === 'object' ? project.shortDescription[lang] : project.shortDescription}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech?.slice(0, 4).map((techName, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#F9FAFB] text-[#1F2937] border border-gray-200"
                    >
                      {techName}
                    </span>
                  ))}
                </div>

                {/* Card Footer Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-bold font-heading text-[#1E3A8A] hover:text-[#1E40AF] inline-flex items-center gap-1.5 cursor-pointer group-hover:gap-2.5 transition-all"
                  >
                    <span>{t.viewRepo ? "View Case Study" : "View Case Study"}</span>
                    <ArrowRight size={16} />
                  </button>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#1E3A8A] transition-colors p-1.5 rounded-lg hover:bg-gray-100"
                      title="View Repository on GitHub"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal Dialog */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-block font-mono text-xs text-[#1E3A8A] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                  {selectedProject.categoryLabel}
                </span>

                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2937] hover:text-[#1E3A8A] bg-gray-100 hover:bg-[#EFF6FF] border border-gray-200 px-3 py-1 rounded-full transition-colors"
                  >
                    <Github size={14} />
                    <span>{t.viewRepo}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl border border-gray-200"
              />

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-1">
                  {t.overview}
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {typeof selectedProject.overview === 'object' ? selectedProject.overview[lang] : selectedProject.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-1">
                  {t.challenge}
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {typeof selectedProject.challenge === 'object' ? selectedProject.challenge[lang] : selectedProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-1">
                  {t.solution}
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {typeof selectedProject.solution === 'object' ? selectedProject.solution[lang] : selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-2">
                  {t.results}
                </h4>
                <ul className="space-y-1.5 pl-1">
                  {(Array.isArray(selectedProject.results) 
                    ? selectedProject.results 
                    : selectedProject.results[lang]
                  )?.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#4B5563]">
                      <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#F9FAFB] text-[#1F2937] border border-gray-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(selectedProject.repoUrl || selectedProject.certificatePdf) && (
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F2937] text-white hover:bg-[#1E3A8A] transition-colors text-sm font-bold font-heading shadow-sm"
                    >
                      <Github size={18} />
                      <span>Buka Repositori GitHub</span>
                      <ExternalLink size={14} className="opacity-70" />
                    </a>
                  )}

                  {selectedProject.certificatePdf && (
                    <a
                      href={selectedProject.certificatePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#EFF6FF] text-[#1E3A8A] hover:bg-[#DBEAFE] border border-[#BFDBFE] transition-colors text-sm font-bold font-heading shadow-sm"
                    >
                      <FileText size={18} />
                      <span>Lihat Sertifikat (PDF)</span>
                      <ExternalLink size={14} className="opacity-70" />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
