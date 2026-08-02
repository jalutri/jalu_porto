import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud, Server, Box, Terminal, Cpu, Shield, FileCheck, AlertTriangle,
  Search, Lock, Code, Layout, FileCode, Component, Feather, Database,
  GitBranch, Send, Activity, BrainCircuit, MessageSquareCode, Users, Wrench
} from 'lucide-react';
import { Badge } from '../common/Badge';

// Helper Map for Dynamic Lucide Icons
const iconMap = {
  Cloud, Server, Box, Terminal, Cpu, Shield, FileCheck, AlertTriangle,
  Search, Lock, Code, Layout, FileCode, Component, Feather, Database,
  GitBranch, Send, Activity, BrainCircuit, MessageSquareCode, Users, Wrench
};

const renderIcon = (iconName, size = 20, className = '') => {
  const IconComponent = iconMap[iconName] || Code;
  return <IconComponent size={size} className={className} />;
};

/**
 * Tujuan Component:
 * Menampilkan matriks keahlian teknis & soft skills terstruktur dengan fitur pemilih tab interaktif.
 *
 * Struktur Component:
 * - `<section>` dengan ID #skills.
 * - Tab Switcher Buttons: "Technical Skills" & "Soft Skills & Governance".
 * - Dynamic Grid Cards berdasarkan tab yang aktif.
 *
 * Props:
 * @param {Object} skillsData - Skills list data object
 *
 * State:
 * @state {'technical' | 'soft'} activeTab - Active skills category tab state
 */
export const SkillsSection = ({ skillsData }) => {
  const [activeTab, setActiveTab] = useState('technical');

  if (!skillsData) return null;

  const { technical, soft } = skillsData;

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="navy" className="mb-3">
            // COMPETENCIES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-4">
            Keahlian Teknis & Governansi TI
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            Perangkat, teknologi, serta kerangka kerja yang saya kuasai dan terapkan dalam berbagai studi kasus.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all cursor-pointer border ${
              activeTab === 'technical'
                ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md'
                : 'bg-white text-[#4B5563] border-gray-200 hover:border-[#BFDBFE] hover:text-[#1E3A8A]'
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all cursor-pointer border ${
              activeTab === 'soft'
                ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md'
                : 'bg-white text-[#4B5563] border-gray-200 hover:border-[#BFDBFE] hover:text-[#1E3A8A]'
            }`}
          >
            Soft Skills & Governance
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'technical' ? (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {technical?.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center">
                      {renderIcon(cat.icon, 22)}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#1F2937]">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#F9FAFB] border border-gray-200 hover:bg-[#EFF6FF] hover:border-[#BFDBFE] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#1E3A8A]">
                            {renderIcon(item.icon, 16)}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono font-medium text-[#1E3A8A] bg-white px-2 py-0.5 rounded border border-gray-200">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {soft?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center">
                      {renderIcon(item.icon, 22)}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#1F2937]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#4B5563] text-sm leading-relaxed pl-13">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
