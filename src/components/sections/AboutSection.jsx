import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

export const AboutSection = ({ personalData }) => {
  if (!personalData) return null;

  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F0F7FF] bg-grid-pattern border-y border-[#DBEAFE] relative overflow-hidden">
      {/* Bright Vibrant Ambient Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BFDBFE]/60 rounded-full blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#93C5FD]/40 rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="navy" className="mb-3 border-[#93C5FD] shadow-sm">
            {t.tag}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#0F172A] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-[#334155]">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Highlight Stat Cards */}
        {t.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border-2 border-[#BFDBFE] shadow-md text-center hover:border-[#1E3A8A] hover:shadow-xl transition-all group"
              >
                <div className="text-3xl md:text-4xl font-extrabold font-heading text-[#1E3A8A] mb-1 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-base font-bold font-heading text-[#0F172A] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-[#475569]">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 2 Detailed Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Background Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl border-2 border-[#BFDBFE] shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 text-xl font-bold font-heading text-[#0F172A] mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-md">
                <GraduationCap size={24} />
              </div>
              <span>{t.backgroundTitle}</span>
            </div>
            <p className="text-[#334155] text-sm md:text-base leading-relaxed font-normal">
              {t.backgroundText}
            </p>
          </motion.div>

          {/* Career Goal Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl border-2 border-[#BFDBFE] shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 text-xl font-bold font-heading text-[#0F172A] mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-md">
                <Target size={24} />
              </div>
              <span>{t.careerGoalTitle}</span>
            </div>
            <p className="text-[#334155] text-sm md:text-base leading-relaxed font-normal">
              {t.careerGoalText}
            </p>
          </motion.div>

        </div>

      </div>

      {/* Curved / Organic Wavy Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-[40px] sm:h-[60px] text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,90 600,-30 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};
