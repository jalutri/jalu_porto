import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';

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
  }, [projectsData]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-28 bg-[#F9FAFB] border-y border-gray-200 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="navy" className="mb-3">
            // PORTFOLIO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-4">
            Proyek & Studi Kasus Unggulan
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            Kumpulan hasil karya teknis yang menggabungkan konsep Cloud, Keamanan Informasi, Tata Kelola Risiko, dan Web Engineering.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col hover:shadow-xl hover:border-[#BFDBFE] transition-all group"
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
                  {project.shortDescription}
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

                {/* Card Footer Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-bold font-heading text-[#1E3A8A] hover:text-[#1E40AF] inline-flex items-center gap-1.5 cursor-pointer group-hover:gap-2.5 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={16} />
                  </button>
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
              <span className="inline-block font-mono text-xs text-[#1E3A8A] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                {selectedProject.categoryLabel}
              </span>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl border border-gray-200"
              />

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-1">
                  Overview Proyek
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-1">
                  Tantangan (Challenge)
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-1">
                  Solusi & Pendekatan Teknis
                </h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold font-heading text-[#1F2937] uppercase tracking-wider mb-2">
                  Hasil & Dampak (Results & Impact)
                </h4>
                <ul className="space-y-1.5 pl-1">
                  {selectedProject.results?.map((res, idx) => (
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
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
