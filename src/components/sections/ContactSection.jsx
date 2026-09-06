import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

const iconMap = {
  Mail, Linkedin, Github, MessageCircle
};

const renderIcon = (iconName, size = 22) => {
  const IconComp = iconMap[iconName] || Mail;
  return <IconComp size={size} />;
};

/**
 * Tujuan Component:
 * Menyediakan kontak langsung & formulir pengiriman pesan yang tervalidasi menggunakan
 * React Hook Form serta menyajikan notifikasi balasan toast.
 *
 * Struktur Component:
 * - `<section>` dengan background alternatif #F9FAFB dan ID #contact.
 * - Left Grid: Quick contact links (Email, LinkedIn, GitHub, WhatsApp).
 * - Right Grid: Interactive Form dengan validasi input (Nama, Email, Subjek, Pesan).
 *
 * Props:
 * @param {Array} contactData - List of direct contact channels
 *
 * State:
 * @state {boolean} submitSuccess - Controls toast success banner state
 */
export const ContactSection = ({ contactData = [] }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitSuccess(true);
    reset();

    // Auto hide success toast after 4 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F9FAFB] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12">

          {/* Left Column: Quick Contact Cards */}
          <div className="flex flex-col gap-4">
            {contactData.map((item) => {
              const CardContent = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {renderIcon(item.icon, 22)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#4B5563] font-medium">{item.label}</span>
                    <span className="text-sm md:text-base font-bold font-heading text-[#1F2937] select-all">
                      {item.value}
                    </span>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:-translate-y-0.5 hover:shadow-md transition-all group"
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm transition-all group"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Right Column: Direct Email CTA Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#EFF6FF] to-transparent rounded-bl-full pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center mb-6 shadow-sm border border-[#BFDBFE]">
                <Mail size={28} />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-3">
                {t.ctaEmailTitle}
              </h3>

              <p className="text-[#4B5563] text-base leading-relaxed mb-6">
                {t.ctaEmailSubtitle}
              </p>

              <div className="p-4 rounded-xl bg-[#F9FAFB] border border-gray-200 flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs md:text-sm font-semibold font-mono text-[#1F2937]">
                  jalutriatmaja19@gmail.com
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <Button
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jalutriatmaja19@gmail.com&su=Peluang%20Karir%20/%20Diskusi%20Proyek%20Portofolio"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <Send size={20} />
                <span>{t.ctaEmailBtn}</span>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
