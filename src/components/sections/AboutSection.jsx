import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';
import { Badge } from '../common/Badge';

/**
 * Tujuan Component:
 * Menampilkan ringkasan statistik latar belakang akademik, fokus kompetensi,
 * serta visi karir Sistem Informasi.
 *
 * Struktur Component:
 * - `<section>` dengan background alternatif #F9FAFB dan ID #about.
 * - Section Header: Tag, Title, Subtitle.
 * - 3 Grid Stat Cards di atas.
 * - 2 Grid Content Boxes (Latar Belakang & Career Goal).
 *
 * Props:
 * @param {Object} personalData - Profile data object
 *
 * State: None
 */
export const AboutSection = ({ personalData }) => {
  if (!personalData) return null;

  const { stats, aboutBackground, careerGoal } = personalData;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F9FAFB] border-y border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="navy" className="mb-3">
            // ABOUT ME
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-4">
            Latar Belakang & Aspirasi Karir
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            Kombinasi analisis bisnis sistem informasi, kesadaran risiko teknologi, dan keterampilan eksekusi teknis modern.
          </p>
        </div>

        {/* 3 Highlight Stat Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm text-center hover:border-[#BFDBFE] hover:shadow-md transition-all"
              >
                <div className="text-3xl md:text-4xl font-extrabold font-heading text-[#1E3A8A] mb-1">
                  {stat.number}
                </div>
                <div className="text-base font-bold font-heading text-[#1F2937] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-[#4B5563]">
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
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3 text-xl font-bold font-heading text-[#1F2937] mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center">
                <GraduationCap size={22} />
              </div>
              <span>Latar Belakang & Pendidikan</span>
            </div>
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
              {aboutBackground}
            </p>
          </motion.div>

          {/* Career Goal Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3 text-xl font-bold font-heading text-[#1F2937] mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center">
                <Target size={22} />
              </div>
              <span>Career Goal & Core Passion</span>
            </div>
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
              {careerGoal}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
