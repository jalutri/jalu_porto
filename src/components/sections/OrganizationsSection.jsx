import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Users, Mic, Calendar, MapPin, Award, Eye, FileText, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import {
  professionalExperienceData,
  organizationExperienceData,
  speakerExperienceData
} from '../../data/organizations';

gsap.registerPlugin(ScrollTrigger);

/**
 * Component: OrganizationsSection / ExperienceSection
 * Sequential continuous scroll timeline for Professional Experience, Organization, and Speaker/Training
 * with automatic ScrollSpy active tab switching and sticky tab buttons.
 */
export const OrganizationsSection = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [selectedCert, setSelectedCert] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const profRef = useRef(null);
  const orgRef = useRef(null);
  const speakerRef = useRef(null);

  // Dynamic animated scroll line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 80%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle manual tab button click to scroll smoothly to that category
  const scrollToTab = (tabKey) => {
    setActiveTab(tabKey);
    const targetElement = document.getElementById(`exp-${tabKey}`);
    if (targetElement) {
      const yOffset = -120; // Offset for sticky navbar & sticky tab bar
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Auto detect active tab based on scroll position (ScrollSpy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const subSections = [
        { id: 'professional', ref: profRef },
        { id: 'organization', ref: orgRef },
        { id: 'speaker', ref: speakerRef }
      ];

      for (let i = subSections.length - 1; i >= 0; i--) {
        const el = subSections[i].ref.current;
        if (el) {
          const top = el.offsetTop - 150;
          if (scrollPosition >= top) {
            setActiveTab(subSections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="organizations"
      className="py-20 md:py-28 bg-white overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="navy" className="mb-3">
            // REKAM JEJAK & PENGALAMAN
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-4">
            Pengalaman Kerja, Organisasi & Pembicara
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            Rekam jejak profesional dalam Analisis Sistem, Software QA, Kepemimpinan Organisasi, serta Pembicara Publik.
          </p>
        </div>

        {/* Sticky Tab Switcher Buttons */}
        <div className="sticky top-[72px] z-30 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 mb-14 transition-all">
          <div className="flex justify-center gap-2 flex-wrap max-w-2xl mx-auto">
            <button
              onClick={() => scrollToTab('professional')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${activeTab === 'professional'
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md scale-105'
                  : 'bg-white text-[#4B5563] border-gray-200 hover:border-[#BFDBFE] hover:text-[#1E3A8A]'
                }`}
            >
              <Briefcase size={16} />
              <span>Pengalaman Kerja</span>
            </button>

            <button
              onClick={() => scrollToTab('organization')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${activeTab === 'organization'
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md scale-105'
                  : 'bg-white text-[#4B5563] border-gray-200 hover:border-[#BFDBFE] hover:text-[#1E3A8A]'
                }`}
            >
              <Users size={16} />
              <span>Pengalaman Organisasi</span>
            </button>

            <button
              onClick={() => scrollToTab('speaker')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${activeTab === 'speaker'
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md scale-105'
                  : 'bg-white text-[#4B5563] border-gray-200 hover:border-[#BFDBFE] hover:text-[#1E3A8A]'
                }`}
            >
              <Mic size={16} />
              <span>Pembicara & Pelatihan</span>
            </button>
          </div>
        </div>

        {/* Continuous Timeline Container */}
        <div ref={timelineRef} className="max-w-3xl mx-auto relative pl-6 sm:pl-8 space-y-16">

          {/* Base Background Line */}
          <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gray-200" />

          {/* Dynamic Scroll Progress Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] shadow-[0_0_10px_rgba(30,58,138,0.5)] z-10"
          />

          {/* GROUP 1: Pengalaman Kerja (Professional) */}
          <div ref={profRef} id="exp-professional" className="space-y-10 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] font-bold font-heading text-sm border border-[#BFDBFE]">
              <Briefcase size={16} />
              <span>Pengalaman Kerja (Professional)</span>
            </div>

            {professionalExperienceData.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#1E3A8A] ring-4 ring-[#EFF6FF] group-hover:scale-125 group-hover:border-[#2563EB] group-hover:ring-[#BFDBFE] transition-all duration-300 shadow-sm z-20" />

                {/* Card Item */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#1F2937] leading-snug">
                        {item.role}
                      </h3>
                      <div className="text-base font-semibold text-[#1E3A8A] mt-0.5">
                        {item.organization}
                      </div>
                      {item.location && (
                        <div className="inline-flex items-center gap-1 text-xs text-[#6B7280] mt-1">
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#1E3A8A] bg-[#EFF6FF] px-3.5 py-1 rounded-full border border-[#BFDBFE] self-start sm:self-auto flex-shrink-0">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="relative pl-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {(item.certificateImage || item.certificatePdf) && (() => {
                    const certFile = item.certificatePdf || item.certificateImage;
                    const isPdf = certFile.toLowerCase().endsWith('.pdf');

                    return (
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                          {isPdf ? (
                            <div
                              onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf: true })}
                              className="w-16 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1E3A8A] cursor-pointer hover:bg-[#DBEAFE] transition-colors"
                            >
                              <FileText size={24} />
                            </div>
                          ) : (
                            <img
                              src={certFile}
                              alt={`Sertifikat ${item.role}`}
                              className="w-16 h-12 object-cover rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf: false })}
                            />
                          )}
                          <div>
                            <div className="text-xs font-bold text-[#1F2937]">
                              {isPdf ? "Dokumen Sertifikat (PDF)" : "Sertifikat Organisasi / Kerja"}
                            </div>
                            <div className="text-[11px] text-[#6B7280]">Dokumen Resmi Terverifikasi</div>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf })}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye size={14} />
                          <span>{isPdf ? "Pratinjau PDF" : "Lihat Sertifikat"}</span>
                        </button>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* GROUP 2: Pengalaman Organisasi (Organization) */}
          <div ref={orgRef} id="exp-organization" className="space-y-10 pt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] font-bold font-heading text-sm border border-[#BFDBFE]">
              <Users size={16} />
              <span>Pengalaman Organisasi & Kepemimpinan</span>
            </div>

            {organizationExperienceData.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#1E3A8A] ring-4 ring-[#EFF6FF] group-hover:scale-125 group-hover:border-[#2563EB] group-hover:ring-[#BFDBFE] transition-all duration-300 shadow-sm z-20" />

                {/* Card Item */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#1F2937] leading-snug">
                        {item.role}
                      </h3>
                      <div className="text-base font-semibold text-[#1E3A8A] mt-0.5">
                        {item.organization}
                      </div>
                      {item.location && (
                        <div className="inline-flex items-center gap-1 text-xs text-[#6B7280] mt-1">
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#1E3A8A] bg-[#EFF6FF] px-3.5 py-1 rounded-full border border-[#BFDBFE] self-start sm:self-auto flex-shrink-0">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="relative pl-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {(item.certificateImage || item.certificatePdf) && (() => {
                    const certFile = item.certificatePdf || item.certificateImage;
                    const isPdf = certFile.toLowerCase().endsWith('.pdf');

                    return (
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                          {isPdf ? (
                            <div
                              onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf: true })}
                              className="w-16 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1E3A8A] cursor-pointer hover:bg-[#DBEAFE] transition-colors"
                            >
                              <FileText size={24} />
                            </div>
                          ) : (
                            <img
                              src={certFile}
                              alt={`Sertifikat ${item.role}`}
                              className="w-16 h-12 object-cover rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf: false })}
                            />
                          )}
                          <div>
                            <div className="text-xs font-bold text-[#1F2937]">
                              {isPdf ? "Dokumen Sertifikat (PDF)" : "Sertifikat Organisasi / SK"}
                            </div>
                            <div className="text-[11px] text-[#6B7280]">Dokumen Resmi Terverifikasi</div>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf })}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye size={14} />
                          <span>{isPdf ? "Pratinjau PDF" : "Lihat Sertifikat"}</span>
                        </button>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* GROUP 3: Pembicara & Pelatihan (Speaker) */}
          <div ref={speakerRef} id="exp-speaker" className="space-y-10 pt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] font-bold font-heading text-sm border border-[#BFDBFE]">
              <Mic size={16} />
              <span>Pembicara & Pelatihan</span>
            </div>

            {speakerExperienceData.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#1E3A8A] ring-4 ring-[#EFF6FF] group-hover:scale-125 group-hover:border-[#2563EB] group-hover:ring-[#BFDBFE] transition-all duration-300 shadow-sm z-20" />

                {/* Card Item */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#1F2937] leading-snug">
                        {item.role}
                      </h3>
                      <div className="text-base font-semibold text-[#1E3A8A] mt-0.5">
                        {item.organization}
                      </div>
                      {item.location && (
                        <div className="inline-flex items-center gap-1 text-xs text-[#6B7280] mt-1">
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#1E3A8A] bg-[#EFF6FF] px-3.5 py-1 rounded-full border border-[#BFDBFE] self-start sm:self-auto flex-shrink-0">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="relative pl-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {(item.certificateImage || item.certificatePdf) && (() => {
                    const certFile = item.certificatePdf || item.certificateImage;
                    const isPdf = certFile.toLowerCase().endsWith('.pdf');

                    return (
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                          {isPdf ? (
                            <div
                              onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf: true })}
                              className="w-16 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1E3A8A] cursor-pointer hover:bg-[#DBEAFE] transition-colors"
                            >
                              <FileText size={24} />
                            </div>
                          ) : (
                            <img
                              src={certFile}
                              alt={`Sertifikat ${item.role}`}
                              className="w-16 h-12 object-cover rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf: false })}
                            />
                          )}
                          <div>
                            <div className="text-xs font-bold text-[#1F2937]">
                              {isPdf ? "Dokumen Sertifikat (PDF)" : "Sertifikat Organisasi / Pembicara"}
                            </div>
                            <div className="text-[11px] text-[#6B7280]">Dokumen Resmi Terverifikasi</div>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCert({ title: `Sertifikat - ${item.role} (${item.organization})`, file: certFile, isPdf })}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye size={14} />
                          <span>{isPdf ? "Pratinjau PDF" : "Lihat Sertifikat"}</span>
                        </button>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Modal Viewer Sertifikat Organisasi (Gambar & PDF) */}
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert?.title}
        >
          {selectedCert && (
            <div className="space-y-4">
              {selectedCert.isPdf ? (
                <div className="flex flex-col gap-3">
                  <iframe
                    src={selectedCert.file}
                    title={selectedCert.title}
                    className="w-full h-[70vh] rounded-xl border border-gray-200 shadow-sm bg-gray-50"
                  />
                  <div className="flex justify-end">
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#1E40AF] px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Buka / Unduh File PDF</span>
                    </a>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl border border-gray-200 shadow-sm bg-gray-50"
                />
              )}
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
