import React from 'react';
import { motion } from 'framer-motion';
import { Grid, ShieldCheck, GraduationCap, Award, BadgeCheck, BookOpen } from 'lucide-react';
import { Button } from '../common/Button';

const iconMap = {
  GraduationCap,
  Award,
  BadgeCheck,
  ShieldCheck,
  BookOpen
};

/**
 * Tujuan Component:
 * Hero Section yang menarik perhatian recruiter dalam 5 detik pertama dengan menyajikan
 * status ketersediaan kerja, headline profesi, bio ringkas, CTA utama, dan avatar profesional.
 *
 * Struktur Component:
 * - `<section>` dengan padding vertikal & ID #hero.
 * - Grid 2 Kolom (1.2fr - 0.8fr) di Desktop, 1 Kolom di Mobile.
 * - Left Content: Pulsing status badge, H1 Display Name, Headline, Bio, Buttons.
 * - Right Content: Avatar frame dengan gradient glow & Floating highlight badge.
 *
 * Props:
 * @param {Object} personalData - Personal profile details object
 *
 * State: None (Framed motion animations)
 */
export const HeroSection = ({ personalData }) => {
  if (!personalData) return null;

  const { name, statusBadge, headline, bio, avatar, floatingCard } = personalData;

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
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
              <span>{statusBadge}</span>
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
              {bio}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Button href="#projects" variant="primary" size="md">
                <Grid size={18} />
                <span>View Projects</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Avatar Frame & Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Radial Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Main Avatar Card Frame */}
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white outline outline-1 outline-gray-200 bg-[#F9FAFB]">
              <img
                src={avatar}
                alt={`${name} - Professional Portrait`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Highlight Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-4 bg-white p-3.5 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                {(() => {
                  const IconComp = iconMap[floatingCard?.icon] || GraduationCap;
                  return <IconComp size={22} />;
                })()}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold font-heading text-[#1F2937]">
                  {floatingCard?.title}
                </span>
                <span className="text-[11px] sm:text-xs text-[#4B5563]">
                  {floatingCard?.subtitle}
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
