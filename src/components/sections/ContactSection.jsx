import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    // Construct pre-filled Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jalutriatmaja19@gmail.com&su=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Halo Jalu,\n\nNama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`)}`;
    
    // Open Gmail Compose in a new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

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
            // GET IN TOUCH
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#1F2937] tracking-tight mb-4">
            Mari Terhubung & Berdiskusi
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            Saya terbuka untuk peluang karir Full-time, Kontrak, maupun Diskusi seputar Cloud Computing, Keamanan Informasi, dan Web Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12">

          {/* Left Column: Quick Contact Cards */}
          <div className="flex flex-col gap-4">
            {contactData.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#BFDBFE] hover:-translate-y-0.5 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {renderIcon(item.icon, 22)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#4B5563] font-medium">{item.label}</span>
                  <span className="text-sm md:text-base font-bold font-heading text-[#1F2937] group-hover:text-[#1E3A8A] transition-colors">
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-bold font-heading text-[#1F2937] mb-1.5">
                  Nama Lengkap / Perusahaan
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  {...register('name', { required: 'Nama wajib diisi' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-[#F9FAFB] text-sm text-[#1F2937] outline-none transition-all focus:bg-white ${errors.name
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]'
                    }`}
                />
                {errors.name && (
                  <span className="inline-flex items-center gap-1 text-xs text-red-600 mt-1">
                    <AlertCircle size={14} /> {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-bold font-heading text-[#1F2937] mb-1.5">
                  Alamat Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="nama@perusahaan.com"
                  {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Format email tidak valid'
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-lg border bg-[#F9FAFB] text-sm text-[#1F2937] outline-none transition-all focus:bg-white ${errors.email
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]'
                    }`}
                />
                {errors.email && (
                  <span className="inline-flex items-center gap-1 text-xs text-red-600 mt-1">
                    <AlertCircle size={14} /> {errors.email.message}
                  </span>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-bold font-heading text-[#1F2937] mb-1.5">
                  Subjek Pesan
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Misal: Peluang Karir / Diskusi Proyek"
                  {...register('subject', { required: 'Subjek pesan wajib diisi' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-[#F9FAFB] text-sm text-[#1F2937] outline-none transition-all focus:bg-white ${errors.subject
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]'
                    }`}
                />
                {errors.subject && (
                  <span className="inline-flex items-center gap-1 text-xs text-red-600 mt-1">
                    <AlertCircle size={14} /> {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-bold font-heading text-[#1F2937] mb-1.5">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini..."
                  {...register('message', { required: 'Pesan tidak boleh kosong' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-[#F9FAFB] text-sm text-[#1F2937] outline-none transition-all focus:bg-white resize-y ${errors.message
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]'
                    }`}
                />
                {errors.message && (
                  <span className="inline-flex items-center gap-1 text-xs text-red-600 mt-1">
                    <AlertCircle size={14} /> {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}</span>
              </Button>
            </form>

            {/* Toast Success Notification */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0" />
                  <span>Pesan berhasil terkirim! Terima kasih telah menghubungi Jalu.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
