/**
 * Projects Portfolio & Case Studies Data (Updated from CV)
 */
export const projectsData = [
  {
    id: "proj-1",
    title: "Project Manager : REPORT Project",
    category: "management",
    categoryLabel: "Project Management",
    image: "/assets/images/report.png",
    shortDescription: "Memimpin manajemen end-to-end pengembangan proyek REPORT, koordinasi pemangku kepentingan, pengawasan linimasa, serta alokasi tugas tim lintas fungsi.",
    overview: "Inisiatif proyek REPORT yang berfokus pada manajemen siklus hidup pengembangan perangkat lunak (SDLC) terstruktur dari tahap perencanaan hingga serah terima deliverables.",
    challenge: "Menyelaraskan komunikasi antar-tim analisis, pengembang, dan tim dokumentasi agar setiap milestone proyek tercapai tepat waktu tanpa kendala scope creep.",
    solution: "Mengimplementasikan metodologi manajemen proyek terstruktur, menetapkan alokasi tugas yang jelas, dan melakukan pemantauan risiko implementasi proyek secara berkala.",
    results: [
      "Penyelesaian seluruh milestone proyek tepat waktu sesuai tenggat semester.",
      "Koordinasi tim lintas fungsi (analisis, dev, dokumentasi) yang efektif dan transparan.",
      "Dokumentasi proyek yang lengkap dan mudah ditelusuri di repositori GitHub."
    ],
    tech: ["Project Management", "SDLC", "Risk Monitoring", "GitHub"],
    repoUrl: "https://github.com/jalutri/report_repository"
  },
  {
    id: "proj-2",
    title: "Bangkit Academy Capstone: LensaKulitKu Backend",
    category: "cloud",
    categoryLabel: "Cloud Computing",
    image: "/assets/images/lensakulitku.png",
    shortDescription: "Pengembangan arsitektur backend cloud & API untuk aplikasi mobile kesehatan LensaKulitKu pada program MSIB Batch 7 Bangkit Academy (Google, GoTo, Traveloka).",
    overview: "Proyek Capstone tim multidisplin dalam program Bangkit Academy Cloud Computing Path untuk membangun layanan komputasi awan backend aplikasi pendeteksi penyakit kulit LensaKulitKu.",
    challenge: "Merancang infrastruktur backend di Google Cloud Platform (GCP) yang skalabel, responsif, dan aman untuk melayani pengolahan data aplikasi mobile.",
    solution: "Membangun dan mengelola REST API backend menggunakan teknologi Google Cloud Platform (Cloud Run, Cloud Storage, IAM) serta integrasi deployment teratur.",
    results: [
      "Keberhasilan integrasi backend GCP dengan model machine learning & aplikasi Android.",
      "Penerapan praktik keamanan IAM dan manajemen resource Cloud GCP yang optimal.",
      "Kelulusan predikat memuaskan pada Program Bangkit Academy Batch 7 2024."
    ],
    tech: ["Google Cloud Platform", "Cloud Run", "Cloud Storage", "REST API", "Docker", "IAM Security"],
    repoUrl: "https://github.com/Ardani-Bangkit/Bangkit-Capstone-Team-C242-PS557",
    certificatePdf: "/assets/images/sertif_bangkit.pdf"
  },
  {
    id: "proj-3",
    title: "ERP Business Process Analysis & Customization",
    category: "analysis",
    categoryLabel: "ERP Analysis",
    image: "/assets/images/odoo.png",
    shortDescription: "Analisis proses bisnis enterprise dan evaluasi implementasi sistem ERP berbasis Odoo untuk efisiensi rantai pasok dan operasional perusahaan.",
    overview: "Studi analisis dan konfigurasi sistem Enterprise Resource Planning (ERP) menggunakan Odoo untuk memetakan alur kerja operasional dan mengidentifikasi efisiensi integrasi bisnis.",
    challenge: "Menyesuaikan modul standar ERP Odoo agar selaras dengan kebutuhan spesifik dan alur transaksi operasional enterprise.",
    solution: "Melakukan analisis kebutuhan modul ERP, mengonfigurasi alur proses inventaris/keuangan, dan menguji penyesuaian fungsionalitas Odoo.",
    results: [
      "Peningkatan integrasi antar-proses bisnis operasional dan modul inventaris.",
      "Dokumentasi pemetaan alur proses bisnis ERP yang terstruktur.",
      "Rekomendasi optimasi alur kerja sistem enterprise berbasis Odoo."
    ],
    tech: ["Odoo ERP", "Business Process Analysis", "Supply Chain", "ERP Customization"]
  },
  {
    id: "proj-4",
    title: "IT Governance & COBIT Analysis",
    category: "risk",
    categoryLabel: "IT Governance",
    image: "/assets/images/cobit.png",
    shortDescription: "Evaluasi tata kelola teknologi informasi organisasi menggunakan kerangka kerja COBIT untuk memperkuat keselarasan TI dengan strategi organisasi.",
    overview: "Analisis evaluasi tata kelola TI berbasis prinsip-prinsip COBIT guna mengukur tingkat kematangan (maturity level) manajemen teknologi pada institusi.",
    challenge: "Mengidentifikasi area tata kelola TI yang belum memiliki standar operasional prosedur (SOP) dan kontrol pengawasan yang memadai.",
    solution: "Melakukan penilaian proses tata kelola berbasis kerangka COBIT, memetakan gap analisis, dan menyusun rekomendasi penguatan pengawasan TI.",
    results: [
      "Peta kondisi tingkat kematangan tata kelola TI organisasi.",
      "Rekomendasi perbaikan tata kelola TI yang terukur dan mudah diterapkan.",
      "Peningkatan keselarasan antara strategi TI dan tujuan strategis organisasi."
    ],
    tech: ["COBIT Framework", "IT Governance", "Risk Assessment", "IT Audit"]
  },
  {
    id: "proj-5",
    title: "ISO/IEC 27005:2022 & FMEA InfoSec Risk Management",
    category: "risk",
    categoryLabel: "InfoSec Risk",
    image: "/assets/images/manrisk.png",
    shortDescription: "Perancangan manajemen risiko keamanan informasi operasional & monitoring jaringan di PT RNet Mitra Sentosa berbasis ISO 27005 & metode FMEA.",
    overview: "Riset skripsi akademik yang merancang kerangka kerja manajemen risiko keamanan informasi untuk operasi dan pemantauan jaringan perusahaan penyedia layanan internet.",
    challenge: "Mengidentifikasi aset kritis jaringan dan mengkalkulasi tingkat risiko kerentanan serangan cyber secara kuantitatif.",
    solution: "Mengombinasikan standar ISO/IEC 27005:2022 dengan metode Failure Mode and Effects Analysis (FMEA) untuk menentukan skor Risk Priority Number (RPN) dan strategi mitigasi.",
    results: [
      "Penentuan matriks prioritas risiko keamanan jaringan berbasis nilai RPN FMEA.",
      "Penyusunan rekomendasi kontrol keamanan informasi yang konkret bagi PT RNet Mitra Sentosa.",
      "Penyelesaian riset skripsi S1 Sistem Informasi UNESA."
    ],
    tech: ["ISO/IEC 27005:2022", "FMEA Method", "Risk Assessment", "Governance", "Risk", "Compliance"]
  }
];

export const projectFilterCategories = [
  { key: "all", label: "All Projects" },
  { key: "management", label: "Project Management" },
  { key: "cloud", label: "Cloud & Infrastructure" },
  { key: "analysis", label: "Systems & ERP Analysis" },
  { key: "risk", label: "IT Risk & Governance" }
];

