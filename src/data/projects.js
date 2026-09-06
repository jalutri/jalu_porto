/**
 * Projects Portfolio & Case Studies Data (Multilingual: ID & EN)
 */
export const projectsData = [
  {
    id: "proj-1",
    title: "Project Manager : REPORT Project",
    category: "management",
    categoryLabel: "Project Management",
    image: "/assets/images/report.png",
    shortDescription: {
      id: "Memimpin manajemen end-to-end pengembangan proyek REPORT, koordinasi pemangku kepentingan, pengawasan linimasa, serta alokasi tugas tim lintas fungsi.",
      en: "Led end-to-end project management of REPORT project, stakeholder coordination, timeline oversight, and cross-functional team task allocation."
    },
    overview: {
      id: "Inisiatif proyek REPORT yang berfokus pada manajemen siklus hidup pengembangan perangkat lunak (SDLC) terstruktur dari tahap perencanaan hingga serah terima deliverables.",
      en: "REPORT project initiative focusing on structured software development lifecycle (SDLC) management from planning to deliverable handover."
    },
    challenge: {
      id: "Menyelaraskan komunikasi antar-tim analisis, pengembang, dan tim dokumentasi agar setiap milestone proyek tercapai tepat waktu tanpa kendala scope creep.",
      en: "Aligning communication across analytics, dev, and documentation teams to achieve project milestones on schedule without scope creep."
    },
    solution: {
      id: "Mengimplementasikan metodologi manajemen proyek terstruktur, menetapkan alokasi tugas yang jelas, dan melakukan pemantauan risiko implementasi proyek secara berkala.",
      en: "Implemented structured project management methodology, defined clear task allocations, and conducted periodic project risk monitoring."
    },
    results: {
      id: [
        "Penyelesaian seluruh milestone proyek tepat waktu sesuai tenggat semester.",
        "Koordinasi tim lintas fungsi (analisis, dev, dokumentasi) yang efektif dan transparan.",
        "Dokumentasi proyek yang lengkap dan mudah ditelusuri di repositori GitHub."
      ],
      en: [
        "On-time completion of all project milestones within semester deadline.",
        "Effective and transparent cross-functional team coordination (analysis, dev, docs).",
        "Comprehensive project documentation easily traceable on GitHub repository."
      ]
    },
    tech: ["Project Management", "SDLC", "Risk Monitoring", "GitHub"],
    repoUrl: "https://github.com/jalutri/report_repository"
  },
  {
    id: "proj-2",
    title: "Bangkit Academy Capstone: LensaKulitKu Backend",
    category: "cloud",
    categoryLabel: "Cloud Computing",
    image: "/assets/images/lensakulitku.png",
    shortDescription: {
      id: "Pengembangan arsitektur backend cloud & API untuk aplikasi mobile kesehatan LensaKulitKu pada program MSIB Batch 7 Bangkit Academy (Google, GoTo, Traveloka).",
      en: "Cloud backend & API architecture development for LensaKulitKu mobile health app in Bangkit Academy Batch 7 (Google, GoTo, Traveloka)."
    },
    overview: {
      id: "Proyek Capstone tim multidisplin dalam program Bangkit Academy Cloud Computing Path untuk membangun layanan komputasi awan backend aplikasi pendeteksi penyakit kulit LensaKulitKu.",
      en: "Multidisciplinary Capstone project in Bangkit Academy Cloud Computing Path to build cloud backend services for skin disease detection mobile app LensaKulitKu."
    },
    challenge: {
      id: "Merancang infrastruktur backend di Google Cloud Platform (GCP) yang skalabel, responsif, dan aman untuk melayani pengolahan data aplikasi mobile.",
      en: "Designing scalable, responsive, and secure backend infrastructure on Google Cloud Platform (GCP) to serve mobile application data processing."
    },
    solution: {
      id: "Membangun dan mengelola REST API backend menggunakan teknologi Google Cloud Platform (Cloud Run, Cloud Storage, IAM) serta integrasi deployment teratur.",
      en: "Built and managed REST API backend using Google Cloud Platform (Cloud Run, Cloud Storage, IAM) and seamless deployment pipelines."
    },
    results: {
      id: [
        "Keberhasilan integrasi backend GCP dengan model machine learning & aplikasi Android.",
        "Penerapan praktik keamanan IAM dan manajemen resource Cloud GCP yang optimal.",
        "Kelulusan predikat memuaskan pada Program Bangkit Academy Batch 7 2024."
      ],
      en: [
        "Successful integration of GCP backend with Machine Learning models & Android app.",
        "Implementation of IAM security best practices and optimal GCP Cloud resource management.",
        "Graduated with distinction from Bangkit Academy Batch 7 2024 program."
      ]
    },
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
    shortDescription: {
      id: "Analisis proses bisnis enterprise dan evaluasi implementasi sistem ERP berbasis Odoo untuk efisiensi rantai pasok dan operasional perusahaan.",
      en: "Enterprise business process analysis and Odoo ERP system implementation evaluation for supply chain and operational efficiency."
    },
    overview: {
      id: "Studi analisis dan konfigurasi sistem Enterprise Resource Planning (ERP) menggunakan Odoo untuk memetakan alur kerja operasional dan mengidentifikasi efisiensi integrasi bisnis.",
      en: "Analysis and configuration study of Enterprise Resource Planning (ERP) using Odoo to map operational workflows and identify business integration efficiencies."
    },
    challenge: {
      id: "Menyesuaikan modul standar ERP Odoo agar selaras dengan kebutuhan spesifik dan alur transaksi operasional enterprise.",
      en: "Tailoring standard Odoo ERP modules to align with specific operational transaction workflows of the enterprise."
    },
    solution: {
      id: "Melakukan analisis kebutuhan modul ERP, mengonfigurasi alur proses inventaris/keuangan, dan menguji penyesuaian fungsionalitas Odoo.",
      en: "Conducted ERP module requirement analysis, configured inventory/finance workflows, and tested Odoo functionality customizations."
    },
    results: {
      id: [
        "Peningkatan integrasi antar-proses bisnis operasional dan modul inventaris.",
        "Dokumentasi pemetaan alur proses bisnis ERP yang terstruktur.",
        "Rekomendasi optimasi alur kerja sistem enterprise berbasis Odoo."
      ],
      en: [
        "Enhanced integration between operational business processes and inventory modules.",
        "Structured documentation of ERP business process mapping.",
        "Optimized workflow recommendations for Odoo-based enterprise system."
      ]
    },
    tech: ["Odoo ERP", "Business Process Analysis", "Supply Chain", "ERP Customization"]
  },
  {
    id: "proj-4",
    title: "IT Governance & COBIT Analysis",
    category: "risk",
    categoryLabel: "IT Governance",
    image: "/assets/images/cobit.png",
    shortDescription: {
      id: "Evaluasi tata kelola teknologi informasi organisasi menggunakan kerangka kerja COBIT untuk memperkuat keselarasan TI dengan strategi organisasi.",
      en: "Organizational IT governance evaluation using COBIT framework to strengthen IT alignment with organizational strategy."
    },
    overview: {
      id: "Analisis evaluasi tata kelola TI berbasis prinsip-prinsip COBIT guna mengukur tingkat kematangan (maturity level) manajemen teknologi pada institusi.",
      en: "IT governance evaluation analysis based on COBIT principles to assess the technology management maturity level of an institution."
    },
    challenge: {
      id: "Mengidentifikasi area tata kelola TI yang belum memiliki standar operasional prosedur (SOP) dan kontrol pengawasan yang memadai.",
      en: "Identifying IT governance areas lacking standard operating procedures (SOP) and sufficient oversight controls."
    },
    solution: {
      id: "Melakukan penilaian proses tata kelola berbasis kerangka COBIT, memetakan gap analisis, dan menyusun rekomendasi penguatan pengawasan TI.",
      en: "Executed COBIT-based governance process assessment, mapped gap analysis, and formulated IT oversight recommendations."
    },
    results: {
      id: [
        "Peta kondisi tingkat kematangan tata kelola TI organisasi.",
        "Rekomendasi perbaikan tata kelola TI yang terukur dan mudah diterapkan.",
        "Peningkatan keselarasan antara strategi TI dan tujuan strategis organisasi."
      ],
      en: [
        "Maturity level mapping of organizational IT governance.",
        "Actionable and measurable IT governance improvement recommendations.",
        "Improved alignment between IT strategy and strategic organizational goals."
      ]
    },
    tech: ["COBIT Framework", "IT Governance", "Risk Assessment", "IT Audit"]
  },
  {
    id: "proj-5",
    title: "ISO/IEC 27005:2022 & FMEA InfoSec Risk Management",
    category: "risk",
    categoryLabel: "InfoSec Risk",
    image: "/assets/images/manrisk.png",
    shortDescription: {
      id: "Perancangan manajemen risiko keamanan informasi operasional & monitoring jaringan di PT RNet Mitra Sentosa berbasis ISO 27005 & metode FMEA.",
      en: "Designing operational & network monitoring InfoSec risk management at PT RNet Mitra Sentosa based on ISO 27005 & FMEA method."
    },
    overview: {
      id: "Riset skripsi akademik yang merancang kerangka kerja manajemen risiko keamanan informasi untuk operasi dan pemantauan jaringan perusahaan penyedia layanan internet.",
      en: "Undergraduate thesis research designing an information security risk management framework for network operation and monitoring at an ISP company."
    },
    challenge: {
      id: "Mengidentifikasi aset kritis jaringan dan mengkalkulasi tingkat risiko kerentanan serangan cyber secara kuantitatif.",
      en: "Identifying critical network assets and quantitatively calculating vulnerability risk levels from cyber threats."
    },
    solution: {
      id: "Mengombinasikan standar ISO/IEC 27005:2022 dengan metode Failure Mode and Effects Analysis (FMEA) untuk menentukan skor Risk Priority Number (RPN) dan strategi mitigasi.",
      en: "Combined ISO/IEC 27005:2022 standards with Failure Mode and Effects Analysis (FMEA) to determine Risk Priority Number (RPN) scores and mitigation strategies."
    },
    results: {
      id: [
        "Penentuan matriks prioritas risiko keamanan jaringan berbasis nilai RPN FMEA.",
        "Penyusunan rekomendasi kontrol keamanan informasi yang konkret bagi PT RNet Mitra Sentosa.",
        "Penyelesaian riset skripsi S1 Sistem Informasi UNESA."
      ],
      en: [
        "Formulated network security risk priority matrix based on FMEA RPN values.",
        "Drafted concrete information security control recommendations for PT RNet Mitra Sentosa.",
        "Completed undergraduate thesis research in Information Systems at UNESA."
      ]
    },
    tech: ["ISO/IEC 27005:2022", "FMEA Method", "Risk Assessment", "Governance", "Risk", "Compliance"]
  }
];
