import React from 'react';
import { motion } from 'framer-motion';
import { Grid, ShieldCheck, GraduationCap, Award, BadgeCheck, BookOpen, Download } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

const iconMap = {
  GraduationCap,
  Award,
  BadgeCheck,
  ShieldCheck,
  BookOpen
};

export const HeroSection = ({ personalData }) => {
  if (!personalData) return null;

  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const { name, headline, avatar, floatingCard } = personalData;

  return (
    <section id="hero" className="relative pt-12 pb-24 md:pt-24 md:pb-36 overflow-hidden bg-white bg-grid-pattern">
      {/* 1. Organic Blob Shape Backdrops */}
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE]/40 to-transparent rounded-full blur-3xl opacity-75 pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#DBEAFE]/50 to-[#BFDBFE]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Organic Curved SVG Floating Accent */}
      <svg className="absolute top-20 right-10 w-96 h-96 opacity-30 text-[#BFDBFE] pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.9,41.4C64.4,53.7,53,63.7,40,71.2C27,78.6,13.5,83.5,-0.6,84.5C-14.7,85.5,-29.4,82.6,-42.8,75.4C-56.2,68.2,-68.3,56.7,-76.5,42.8C-84.7,28.9,-89.1,14.5,-88.4,0.4C-87.7,-13.7,-82,-27.4,-73.4,-39.2C-64.8,-51,-53.4,-60.9,-40.6,-68.8C-27.8,-76.7,-13.9,-82.6,0.6,-83.6C15.1,-84.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs md:text-sm font-semibold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span>{t.statusBadge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[#1F2937] tracking-tight leading-[1.1] mb-4">
              {name}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-heading text-[#1E3A8A] mb-5 leading-snug">
              {headline}
            </h2>

            {/* Short Bio */}
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-2xl">
              {t.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Button href="#projects" variant="primary" size="md">
                <Grid size={18} />
                <span>{t.viewProjects}</span>
              </Button>

              <Button
                href={personalData.cvLink || "/assets/images/CV_Jalu Tri Atmaja.pdf"}
                download="CV_Jalu Tri Atmaja.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="no-print"
                title="Download Curiculum Vitae Jalu Tri Atmaja"
              >
                <Download size={18} />
                <span>{t.downloadCv}</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Curved Split Hero & Organic Image Mask Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Organic Shape Blob Wrapper */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/15 via-[#60A5FA]/20 to-transparent rounded-full blur-2xl pointer-events-none scale-110" />

            {/* Curved Image Container */}
            <div 
              data-cursor={lang === 'id' ? "Foto Jalu Seta Wijaya" : "Jalu Seta Wijaya Portrait"} 
              className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] flex items-end justify-center cursor-pointer"
            >
              {/* Circular Gray Curved Base */}
              <div className="absolute bottom-1 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-b from-[#9CA3AF] to-[#6B7280] shadow-2xl border-4 border-white pointer-events-none" />

              {/* Subject Image (Uncropped head popping out) */}
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] flex items-end justify-center pointer-events-none">
                <img
                  src={avatar}
                  alt={`${name} - Professional Portrait`}
                  className="w-full h-full object-contain scale-[1.05] translate-y-1 drop-shadow-xl"
                />
              </div>
            </div>

            {/* Floating Highlight Card */}
            <motion.div
              data-cursor={lang === 'id' ? "Alumni UNESA IPK 3.77" : "UNESA GPA 3.77"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-4 bg-white p-3.5 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-10 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                {(() => {
                  const IconComp = iconMap[floatingCard?.icon] || GraduationCap;
                  return <IconComp size={22} />;
                })()}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold font-heading text-[#1F2937]">
                  {t.floatingTitle}
                </span>
                <span className="text-[11px] sm:text-xs text-[#4B5563]">
                  {t.floatingSubtitle}
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* 2. Wavy / Curved Section Divider Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] text-[#F9FAFB]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,55 C650,150 900,10 1200,45 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};
