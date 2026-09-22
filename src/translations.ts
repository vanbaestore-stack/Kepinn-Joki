export type Language = 'id' | 'en';

export interface Translations {
  // Navbar
  nav: {
    advantages: string;
    calculator: string;
    services: string;
    security: string;
    testimonials: string;
    faq: string;
    contactAdmin: string;
    officialAdmin: string;
    switchLang: string;
  };

  // Hero
  hero: {
    categoryLabel: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    highlightPrivateServer: string;
    highlightSecuritySop: string;
    highlightAccountGuarantee: string;
    calculateBtn: string;
    waConsultBtn: string;
    statManual: string;
    statManualSub: string;
    statRating: string;
    statRatingSub: string;
    statTime: string;
    statTimeSub: string;
    statBanned: string;
    statBannedSub: string;
    waGreeting: string;
  };

  // Value Props
  valueProps: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      desc: string;
      badge: string;
    }[];
  };

  // Order Workflow
  workflow: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };

  // Price Calculator
  calculator: {
    eyebrow: string;
    heading: string;
    subheading: string;
    tabs: {
      level: string;
      mastery: string;
      belly: string;
      fragment: string;
      special: string;
    };
    levelTab: {
      startLevel: string;
      targetLevel: string;
      levelGap: string;
      maxLevelNote: string;
      quickJumpSea: string;
      quickAddTarget: string;
      stepperLabel: string;
      invalidRange: string;
      autoFixBtn: string;
      customFreeEditTip: string;
      seaProgress: string;
    };
    masteryTab: {
      typeLabel: string;
      startMastery: string;
      targetMastery: string;
      gap: string;
      popularLabel: string;
    };
    bellyTab: {
      amountLabel: string;
      sliderLabel: string;
      rateNote: string;
    };
    fragmentTab: {
      amountLabel: string;
      sliderLabel: string;
      promoNote: string;
    };
    specialTab: {
      selectLabel: string;
      notes: string;
    };
    summary: {
      title: string;
      officialRate: string;
      totalEstimate: string;
      perOrder: string;
      waMsgLabel: string;
      copied: string;
      copyTemplate: string;
      orderWaBtn: string;
      securityNote: string;
    };
  };

  // Catalog
  catalog: {
    eyebrow: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    categories: {
      all: string;
      level: string;
      mastery: string;
      belly: string;
      fragment: string;
      special: string;
    };
    popularBadge: string;
    orderBtn: string;
    noResults: string;
    resetFilter: string;
  };

  // Security Center
  security: {
    eyebrow: string;
    heading: string;
    subheading: string;
    checklist: {
      step: number;
      title: string;
      desc: string;
      criticalTip: string;
    }[];
    cookieWarning: {
      title: string;
      desc: string;
      bullets: string[];
      cardBadge: string;
      cardTitle: string;
      cardDesc: string;
    };
  };

  // Admin Verifier
  verifier: {
    eyebrow: string;
    heading: string;
    subheading: string;
    placeholder: string;
    checkBtn: string;
    officialTag: string;
    verifiedTitle: string;
    verifiedDesc: string;
    verifiedAdminBtn: string;
    warningTitle: string;
    warningDesc: string;
    officialChannels: string;
  };

  // Testimonials
  testimonials: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: {
      id: string;
      title: string;
      tag: string;
      customerNote: string;
      serviceDetail: string;
      paymentMethod: string;
      proofType: 'mastery' | 'level' | 'payment';
      beforeStat?: string;
      afterStat?: string;
      rating: number;
    }[];
    statLabelBefore: string;
    statLabelAfter: string;
    customerReviewLabel: string;
    beforeLabel: string;
    afterLabel: string;
    detailBtn: string;
    moreProof: string;
    visitChannel: string;
    modalClose: string;
    serviceDone: string;
    paymentMethodLabel: string;
    privacyNote: string;
  };

  // FAQ
  faq: {
    eyebrow: string;
    heading: string;
    subheading: string;
    contactMore: string;
    contactLink: string;
    items: {
      q: string;
      a: string;
    }[];
  };

  // Footer
  footer: {
    tagline: string;
    operatingHours: string;
    quickLinksTitle: string;
    servicesTitle: string;
    officialContactTitle: string;
    waChannel: string;
    disclaimerTitle: string;
    disclaimer: string;
    copyright: string;
    priority: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      advantages: 'Keunggulan',
      calculator: 'Kalkulator Harga',
      services: 'Daftar Layanan',
      security: 'SOP Keamanan',
      testimonials: 'Bukti Transaksi',
      faq: 'FAQ',
      contactAdmin: 'Hubungi Admin',
      officialAdmin: 'Admin Resmi',
      switchLang: 'Pilih Bahasa',
    },
    hero: {
      categoryLabel: 'Jasa Joki Blox Fruits Profesional & Terpercaya',
      headlinePart1: 'Tingkatkan Level & Akun Blox Fruits Anda ',
      headlinePart2: 'Tanpa Cemas Kena Banned atau Akun Hilang.',
      subheadline:
        'Tingkatkan level, buka mastery Kitsune, farm Belly hingga jutaan, dan raih Awakening tanpa menghabiskan waktu berhari-hari. Dikerjakan manual di Private Server dengan jaminan keamanan akun berlapis.',
      highlightPrivateServer: 'Private Server (Anti-Bounty Hunter)',
      highlightSecuritySop: 'SOP Backup Code & 2FA Resmi',
      highlightAccountGuarantee: 'Garansi Akun & Item Tetap Utuh',
      calculateBtn: 'Hitung Estimasi Harga',
      waConsultBtn: 'Konsultasi WhatsApp',
      statManual: '100% Manual',
      statManualSub: 'Tanpa Cheat & Script',
      statRating: '5.0 Bintang',
      statRatingSub: 'Review Positif Pelanggan',
      statTime: '3-6 Jam',
      statTimeSub: 'Rata-rata Pengerjaan',
      statBanned: '0% Kasus Banned',
      statBannedSub: 'Private Server Aman',
      waGreeting: 'Halo Admin Kepinn Joki, saya ingin konsultasi paket joki Blox Fruits.',
    },
    valueProps: {
      eyebrow: 'STANDAR KEAMANAN TERTINGGI',
      heading: 'Mengapa Ratusan Gamer Memilih Kepinn Joki?',
      subheading:
        'Kami memahami kekhawatiran Anda menyerahkan akun kesayangan. Oleh karena itu, kami menetapkan 4 pilar keamanan mutlak untuk kenyamanan Anda.',
      items: [
        {
          title: '100% Manual di Private Server',
          desc: 'Semua proses leveling dan grinding dikerjakan manual oleh tim kami di VIP Server tertutup. Bebas gangguan bounty hunter dan bebas risiko ban Byfron anti-cheat.',
          badge: 'Aman & Tenang',
        },
        {
          title: 'SOP Backup Code & 2FA',
          desc: 'Kerahasiaan akun terjamin dengan protokol Kode Pemulihan (Backup Code) dan 2FA sekali pakai. Kami tidak meminta cookie browser (.ROBLOSECURITY).',
          badge: 'Anti-Hack',
        },
        {
          title: 'Transparansi Pengerjaan',
          desc: 'Kondisi inventaris dicatat dan di-screenshot sebelum dan sesudah pengerjaan. Progress diupdate secara berkala via obrolan WhatsApp.',
          badge: 'Terverifikasi',
        },
        {
          title: 'Tarif Terjangkau & Metode Lengkap',
          desc: 'Mendukung QRIS (DANA, GoPay, OVO, ShopeePay, Bank BCA/Mandiri/BRI) dan DuitNow QR untuk gamer Malaysia. Tidak ada biaya tersembunyi.',
          badge: 'Fleksibel',
        },
      ],
    },
    workflow: {
      eyebrow: 'CARA ORDER MUDAH & CEPAT',
      heading: '4 Langkah Pemesanan yang Aman',
      subheading: 'Hanya butuh beberapa menit dari hitung biaya hingga pengerjaan dimulai.',
      steps: [
        {
          num: '01',
          title: 'Pilih Layanan & Hitung Biaya',
          desc: 'Gunakan kalkulator interaktif untuk memilih target level, mastery, belly, atau fragment sesuai kebutuhan akun Anda.',
        },
        {
          num: '02',
          title: 'Konfirmasi Slot via WhatsApp',
          desc: 'Klik tombol order untuk mengirim pesan otomatis ke admin. Admin akan mengecek ketersediaan slot pengerjaan dan mengirimkan QRIS/rekening resmi.',
        },
        {
          num: '03',
          title: 'Terapkan SOP Keamanan Akun',
          desc: 'Buat Kode Pemulihan (Backup Code) Roblox, gunakan password sementara, dan berikan kode sekali pakai saat tim login pertama kali.',
        },
        {
          num: '04',
          title: 'Pengerjaan & Verifikasi Hasil',
          desc: 'Tim kami farming di Private Server hingga target selesai. Begitu selesai, Anda wajib klik "Log Out Other Sessions" dan ganti password kembali.',
        },
      ],
    },
    calculator: {
      eyebrow: 'KALKULATOR ESTIMASI BIAYA',
      heading: 'Hitung Biaya Joki Anda Secara Transparan',
      subheading:
        'Pilih kategori layanan di bawah untuk melihat rincian biaya instan. Bebas konsultasi jika memiliki pesanan khusus atau borongan.',
      tabs: {
        level: 'Leveling',
        mastery: 'Mastery Senjata/Buah',
        belly: 'Belly (Uang)',
        fragment: 'Fragment',
        special: 'Raid & Awakening',
      },
      levelTab: {
        startLevel: 'Level Saat Ini (Bisa Diedit Bebas)',
        targetLevel: 'Target Level (Bisa Diedit Bebas)',
        levelGap: 'Selisih Kenaikan Level',
        maxLevelNote: 'Batas maksimal level Roblox Blox Fruits adalah level 2600 (Max Update).',
        quickJumpSea: 'Pilihan Sea Awal:',
        quickAddTarget: 'Pilihan Cepat Target:',
        stepperLabel: 'Sesuaikan Cepat (+/-):',
        invalidRange: 'Target level harus lebih tinggi dari level awal.',
        autoFixBtn: 'Atur Target Otomatis (+100 Level)',
        customFreeEditTip: 'Ketik bebas level berapa pun (1 - 2600) atau gunakan tombol penyesuaian cepat.',
        seaProgress: 'Progres Wilayah Sea:',
      },
      masteryTab: {
        typeLabel: 'Pilih Senjata / Buah Iblis',
        startMastery: 'Mastery Saat Ini',
        targetMastery: 'Target Mastery',
        gap: 'Kenaikan Mastery',
        popularLabel: 'Catatan: Target 300 membuka skill inti; 600 untuk full damage stat maksimal.',
      },
      bellyTab: {
        amountLabel: 'Jumlah Belly yang Dibutuhkan',
        sliderLabel: 'Pilihan Paket Belly',
        rateNote: 'Dikerjakan via Sea Beast Hunting & Quest di Sea 2 / Sea 3 (Private Server).',
      },
      fragmentTab: {
        amountLabel: 'Jumlah Fragment yang Dibutuhkan',
        sliderLabel: 'Pilihan Paket Fragment',
        promoNote: 'Paket 10.000 & 20.000 Fragment hemat 50% vs tarif normal per raid.',
      },
      specialTab: {
        selectLabel: 'Pilih Layanan Khusus / Awakening',
        notes: 'Dikerjakan langsung bersama tim ahli. Sudah termasuk chip raid jika diperlukan.',
      },
      summary: {
        title: 'Ringkasan Order',
        officialRate: 'Tarif Resmi',
        totalEstimate: 'Total Estimasi Biaya',
        perOrder: '/ pesanan',
        waMsgLabel: 'Format Pesanan WhatsApp Otomatis',
        copied: 'Tersalin!',
        copyTemplate: 'Salin Teks Format',
        orderWaBtn: 'Kirim Order via WhatsApp Resmi',
        securityNote: 'Data Anda aman: Kami tidak pernah meminta email pribadi atau password utama.',
      },
    },
    catalog: {
      eyebrow: 'KATALOG LENGKAP',
      heading: 'Daftar Paket & Tarif Resmi',
      subheading: 'Harga transparan dan terjangkau untuk semua sea, mulai dari level 1 hingga level maksimal.',
      searchPlaceholder: 'Cari paket (contoh: level, mastery, kitsune, raid)...',
      categories: {
        all: 'Semua Layanan',
        level: 'Leveling',
        mastery: 'Mastery',
        belly: 'Belly',
        fragment: 'Fragment',
        special: 'Khusus & Raid',
      },
      popularBadge: 'Populer',
      orderBtn: 'Pesan Sekarang',
      noResults: 'Tidak ada layanan yang cocok dengan pencarian Anda.',
      resetFilter: 'Reset Filter',
    },
    security: {
      eyebrow: 'CYBERSECURITY & SOP PERLINDUNGAN AKUN',
      heading: 'Akun Roblox Anda 100% Terlindungi',
      subheading:
        'Kami mengutamakan keamanan siber dan perlindungan data pelanggan. Ikuti 4 langkah SOP di bawah ini sebelum menyerahkan akun agar terhindar dari risiko pembajakan atau kehilangan item.',
      checklist: [
        {
          step: 1,
          title: 'Buat Kode Pemulihan / Backup Code (Wajib)',
          desc: 'Buka Settings Roblox > Security > 2-Step Verification > Generate Backup Codes. Kode cadangan ini memastikan Anda tetap memegang kendali penuh atas pemulihan akun tanpa perlu mematikan 2FA.',
          criticalTip: 'Simpan daftar kode cadangan Anda di tempat aman. Jangan berikan akses email utama Anda kepada siapapun!',
        },
        {
          step: 2,
          title: 'Gunakan Password Sementara',
          desc: 'Sebelum menyerahkan akun untuk dijoki, ubah password utama Roblox Anda menjadi password sementara yang unik dan bukan password email pribadi Anda.',
          criticalTip: 'Hindari memakai password yang sama dengan akun bank, email, atau sosial media.',
        },
        {
          step: 3,
          title: 'Verifikasi 2FA dengan Kode Sekali Pakai',
          desc: 'Tetap aktifkan 2-Step Verification (via Authenticator App). Saat tim joki login pertama kali, kirimkan satu kode 2FA yang muncul di layar HP Anda.',
          criticalTip: 'Dilarang keras memberikan Session Cookie (.ROBLOSECURITY). Kami hanya login via client resmi.',
        },
        {
          step: 4,
          title: 'Selesai Joki: Reset & Sign Out All',
          desc: 'Begitu admin mengonfirmasi joki telah selesai, langsung buka Settings Roblox > Security > klik "Log Out of All Other Sessions", lalu ganti password Anda kembali.',
          criticalTip: 'Ini menjamin 100% sesi perangkat pekerja terputus permanen.',
        },
      ],
      cookieWarning: {
        title: 'Peringatan Bahaya Cookie Hijacking (.ROBLOSECURITY)',
        desc: 'Hati-hati terhadap oknum joki palsu yang meminta token session cookie browser atau link verifikasi berbahaya. Kepinn Joki tidak pernah meminta cookie ataupun akses email pemulihan Anda. Kami hanya login langsung ke game client Roblox resmi secara manual.',
        bullets: [
          'Semua progress dilaporkan via screenshot WhatsApp',
          'Data chat otomatis dibersihkan setelah selesai',
          'Pengerjaan di Private Server tanpa campur tangan bot',
          'Garansi refund jika ada kendala teknis dari pihak kami',
        ],
        cardBadge: 'Fitur Keamanan Roblox',
        cardTitle: 'Sign Out All Sessions',
        cardDesc: 'Fitur di Roblox Settings ini dapat memutuskan semua perangkat lain seketika, memberi Anda kendali 100% penuh atas akun Anda setiap saat.',
      },
    },
    verifier: {
      eyebrow: 'ANTI-IMPERSONATION TOOL',
      heading: 'Verifikasi Nomor Admin Resmi',
      subheading:
        'Banyak akun peniru di TikTok/Instagram yang mengatasnamakan Kepinn Joki. Masukkan nomor kontak untuk memastikan Anda bertransaksi dengan admin sah.',
      placeholder: 'Masukkan nomor (contoh: 082112834450 atau +62821...)',
      checkBtn: 'Verifikasi Nomor',
      officialTag: 'Nomor Admin Resmi Terdaftar:',
      verifiedTitle: 'NOMOR RESMI KEPINN JOKI TERVERIFIKASI',
      verifiedDesc: 'Nomor ini adalah kontak resmi admin Kepinn Joki (Vanbae Store). Transaksi aman dan terjamin!',
      verifiedAdminBtn: 'Chat WhatsApp Admin Resmi Ini',
      warningTitle: 'PERINGATAN: BUKAN NOMOR RESMI KEPINN JOKI',
      warningDesc: 'Nomor ini TIDAK TERDAFTAR dalam sistem resmi kami. Hati-hati terhadap indikasi penipuan atau pencurian akun Roblox!',
      officialChannels: 'Saluran Resmi Kami:',
    },
    testimonials: {
      eyebrow: 'SOCIAL PROOF & BUKTI NYATA',
      heading: 'Bukti Transaksi & Hasil Pengerjaan',
      subheading:
        'Ratusan gamer telah mempercayakan leveling dan mastery akun Blox Fruits mereka kepada kami. Semua data privasi pelanggan dilindungi secara ketat.',
      items: [
        {
          id: 'testi-1',
          title: 'Kitsune Fruit Mastery 1 ke 301',
          tag: 'Joki Mastery',
          customerNote: 'semangat jokinya bre... mantap fast respon bgt!',
          serviceDetail: 'Mastery Kitsune 1 -> 301 (Buka 3 Tails)',
          paymentMethod: 'DuitNow QR Malaysia (IDR 9.000)',
          proofType: 'mastery',
          beforeStat: 'Mastery 1 (40/70 XP)',
          afterStat: 'Mastery 301 (Max Tails Unlock)',
          rating: 5,
        },
        {
          id: 'testi-2',
          title: 'Leveling Sea 2 (1200 -> 1800)',
          tag: 'Joki Level',
          customerNote: 'Pelayanan cepat, akun aman sentosa. Recomended pokoknya!',
          serviceDetail: '600 Level Naik + Bonus 3M Belly Drop',
          paymentMethod: 'QRIS DANA (IDR 18.000)',
          proofType: 'level',
          beforeStat: 'Level 1200 (Kingdom of Rose)',
          afterStat: 'Level 1800 (Floating Turtle)',
          rating: 5,
        },
        {
          id: 'testi-3',
          title: 'Full Awakening Buddha + 10K Fragment',
          tag: 'Joki Raid',
          customerNote: 'Akun langsung gg buat raid bareng temen, mantap bang kepin.',
          serviceDetail: 'Full Awakening Move Z-F + 10.000 Frag',
          paymentMethod: 'ShopeePay (IDR 25.000)',
          proofType: 'payment',
          beforeStat: 'Buddha Biasa (V1)',
          afterStat: 'Frag 10.450 (Full Awaken Buddha)',
          rating: 5,
        },
      ],
      statLabelBefore: 'Sebelum',
      statLabelAfter: 'Sesudah',
      customerReviewLabel: 'Review Pelanggan',
      beforeLabel: 'Sebelum:',
      afterLabel: 'Sesudah:',
      detailBtn: 'Detail',
      moreProof: 'Ingin melihat ratusan rekaman screenshot testimoni harian lainnya?',
      visitChannel: 'Kunjungi Saluran WhatsApp Kami',
      modalClose: 'Tutup',
      serviceDone: 'Layanan Dikerjakan',
      paymentMethodLabel: 'Metode Transaksi:',
      privacyNote: 'Privasi aman: Data pribadi dan nomor referensi nasabah disensor.',
    },
    faq: {
      eyebrow: 'TANYA JAWAB SEPUTAR JOKI',
      heading: 'Pertanyaan yang Sering Diajukan',
      subheading:
        'Semua yang perlu Anda ketahui mengenai keamanan, alur pembayaran, dan prosedur pengerjaan joki di Kepinn Joki.',
      contactMore: 'Punya pertanyaan lain yang belum terjawab di sini?',
      contactLink: 'Tanyakan langsung ke Admin WhatsApp',
      items: [
        {
          q: 'Apakah akun Roblox saya aman dari banned dan exploit?',
          a: 'Sangat aman. Kami menggunakan metode pengerjaan 100% manual oleh player berpengalaman langsung di Private Server (VIP Server). Kami sama sekali tidak menggunakan inject script, macro berbahaya, atau software pihak ketiga yang melanggar sistem anti-cheat Roblox (Byfron).',
        },
        {
          q: 'Mengapa saya disarankan membuat Kode Pemulihan / Backup Code Roblox?',
          a: 'Kode pemulihan (Backup Codes) dari pengaturan keamanan 2-Step Verification Roblox berfungsi sebagai kunci cadangan darurat jika terjadi kendala akses. Anda cukup memberikan 1 kode cadangan sekali pakai untuk login joki tanpa perlu membagikan akses email utama Anda atau mematikan verifikasi 2 langkah.',
        },
        {
          q: 'Bagaimana cara verifikasi 2FA jika saya menggunakan Authenticator App?',
          a: 'Saat tim kami pertama kali login melalui aplikasi resmi Roblox, sistem akan meminta 6-digit kode verifikasi 2FA. Anda cukup mengirimkan satu kode yang muncul saat itu juga melalui WhatsApp. Kami tidak pernah meminta session cookie browser (.ROBLOSECURITY).',
        },
        {
          q: 'Apa yang terjadi jika saya login ke akun saat proses joki sedang berlangsung?',
          a: 'Sangat dilarang untuk login (istilahnya "nabrak akun") saat proses joki sedang berjalan. Hal ini akan memutuskan koneksi pengerja kami dan berisiko membatalkan atau mereset progres quest in-game yang sedang diselesaikan. Kami selalu memberikan notifikasi langsung lewat WhatsApp segera setelah order selesai.',
        },
        {
          q: 'Metode pembayaran apa saja yang diterima?',
          a: 'Kami menerima pembayaran melalui QRIS (Semua E-Wallet & Mobile Banking Indonesia seperti DANA, GoPay, OVO, ShopeePay, BCA, Mandiri, BRI) serta DuitNow QR untuk pelanggan dari Malaysia.',
        },
        {
          q: 'Berapa lama rata-rata proses pengerjaan joki?',
          a: 'Untuk leveling 300-500 level biasanya membutuhkan waktu 2-4 jam. Untuk mastery 300-600 membutuhkan 3-5 jam. Pengerjaan dilakukan bergiliran sesuai nomor antrian pesanan yang masuk.',
        },
      ],
    },
    footer: {
      tagline:
        'Jasa joki Blox Fruits terpercaya dengan standar pengerjaan manual 100% di Private Server, jaminan keamanan akun berlapis dengan SOP Backup Code & 2FA, dan harga transparan.',
      operatingHours: 'Jam Operasional: Setiap Hari 09:00 - 23:00 WIB',
      quickLinksTitle: 'Navigasi Cepat',
      servicesTitle: 'Layanan Utama',
      officialContactTitle: 'Kontak & Saluran Resmi',
      waChannel: 'Saluran WhatsApp Resmi',
      disclaimerTitle: 'Disclaimer Independen:',
      disclaimer:
        'Kepinn Joki / Vanbae Store adalah penyedia layanan independen yang membantu para gamer dalam mengoptimalkan waktu bermain. Semua aset, nama, dan merek dagang Blox Fruits dan Roblox adalah hak cipta dari Gamer Robot Inc. dan Roblox Corporation. Kami tidak berafiliasi secara resmi dengan pihak pengembang.',
      copyright: '© 2026 Kepinn Joki. Hak cipta dilindungi undang-undang.',
      priority: 'Keamanan akun pelanggan adalah prioritas nomor satu kami.',
    },
  },
  en: {
    nav: {
      advantages: 'Why Us',
      calculator: 'Price Calculator',
      services: 'Services',
      security: 'Security SOP',
      testimonials: 'Proof & Reviews',
      faq: 'FAQ',
      contactAdmin: 'Contact Admin',
      officialAdmin: 'Official Admin',
      switchLang: 'Language',
    },
    hero: {
      categoryLabel: 'Trusted & Professional Blox Fruits Boosting Service',
      headlinePart1: 'Level Up & Upgrade Your Blox Fruits Account ',
      headlinePart2: 'Without Fear of Bans or Stolen Accounts.',
      subheadline:
        'Fast-track your levels, unlock Kitsune mastery, farm millions of Belly, and acquire Full Awakening without endless grinding. 100% manual gameplay on Private Servers with multi-layer account protection.',
      highlightPrivateServer: 'Private Server (Anti-Bounty Hunter)',
      highlightSecuritySop: 'Official Backup Code & 2FA SOP',
      highlightAccountGuarantee: '100% Account & Items Safety Guarantee',
      calculateBtn: 'Calculate Price Estimate',
      waConsultBtn: 'WhatsApp Consultation',
      statManual: '100% Manual',
      statManualSub: 'No Cheats or Exploits',
      statRating: '5.0 Stars',
      statRatingSub: 'Positive Customer Rating',
      statTime: '3-6 Hours',
      statTimeSub: 'Average Completion Time',
      statBanned: '0% Ban Rate',
      statBannedSub: 'Private Server Protected',
      waGreeting: 'Hello Admin Kepinn Joki, I would like to consult about Blox Fruits boosting services.',
    },
    valueProps: {
      eyebrow: 'HIGHEST SECURITY STANDARDS',
      heading: 'Why Do Hundreds of Gamers Choose Kepinn Joki?',
      subheading:
        'We understand the hesitation of sharing your valued gaming account. That is why we enforce 4 strict security pillars for your total peace of mind.',
      items: [
        {
          title: '100% Manual on Private Servers',
          desc: 'All leveling and grinding are executed manually by our experienced boosters on closed VIP Servers. Free from bounty hunters and safe from Byfron anti-cheat bans.',
          badge: 'Safe & Serene',
        },
        {
          title: 'Backup Code & 2FA SOP',
          desc: 'Account confidentiality is safeguarded using official Roblox Backup Codes and one-time 2FA codes. We never ask for browser cookies (.ROBLOSECURITY).',
          badge: 'Anti-Hack',
        },
        {
          title: 'Full Workflow Transparency',
          desc: 'Your account inventory is audited and screenshotted before and after each session. Real-time updates are shared directly via WhatsApp chat.',
          badge: 'Verified',
        },
        {
          title: 'Affordable Rates & Multi-Currency',
          desc: 'Supports QRIS (All Indonesian E-Wallets & Mobile Banking) and DuitNow QR for Malaysian gamers. Zero hidden fees, clear honest pricing.',
          badge: 'Flexible',
        },
      ],
    },
    workflow: {
      eyebrow: 'EASY & SPEEDY PROCESS',
      heading: '4 Simple Steps to Boost Safely',
      subheading: 'Takes just a few minutes from calculating your price to kicking off the boost.',
      steps: [
        {
          num: '01',
          title: 'Select Service & Calculate Cost',
          desc: 'Use our real-time interactive calculator to pick your target level, mastery, belly, or fragments.',
        },
        {
          num: '02',
          title: 'Confirm Slot via WhatsApp',
          desc: 'Click the order button to send an automated message to our admin. We will check available booster slots and share payment details.',
        },
        {
          num: '03',
          title: 'Apply Account Security SOP',
          desc: 'Generate a Roblox Backup Code, set a temporary password, and provide a single one-time code during the initial booster login.',
        },
        {
          num: '04',
          title: 'Boost Progress & Verify Results',
          desc: 'Our team farms on Private Servers until your target is achieved. Once finished, click "Log Out Other Sessions" and restore your primary password.',
        },
      ],
    },
    calculator: {
      eyebrow: 'REAL-TIME PRICE CALCULATOR',
      heading: 'Transparent, Instant Cost Calculator',
      subheading:
        'Select a service category below to view an instant estimate. Feel free to chat with admin for custom bundles or bulk orders.',
      tabs: {
        level: 'Leveling',
        mastery: 'Fruit/Weapon Mastery',
        belly: 'Belly (In-Game Cash)',
        fragment: 'Fragments',
        special: 'Raids & Awakening',
      },
      levelTab: {
        startLevel: 'Starting Level (Freely Editable)',
        targetLevel: 'Target Level (Freely Editable)',
        levelGap: 'Level Difference',
        maxLevelNote: 'Maximum level cap in Roblox Blox Fruits is currently level 2600 (Max Update).',
        quickJumpSea: 'Starting Sea Shortcuts:',
        quickAddTarget: 'Quick Target Presets:',
        stepperLabel: 'Quick Adjust (+/-):',
        invalidRange: 'Target level must be higher than current level.',
        autoFixBtn: 'Auto-set Target (+100 Levels)',
        customFreeEditTip: 'Type any custom level freely (1 - 2600) or use adjustment steppers.',
        seaProgress: 'Sea Region Progression:',
      },
      masteryTab: {
        typeLabel: 'Select Weapon / Devil Fruit',
        startMastery: 'Current Mastery',
        targetMastery: 'Target Mastery',
        gap: 'Mastery Gain',
        popularLabel: 'Tip: 300 Mastery unlocks key skills; 600 Mastery achieves maximum stat scaling.',
      },
      bellyTab: {
        amountLabel: 'Amount of Belly Required',
        sliderLabel: 'Belly Package Tier',
        rateNote: 'Farm completed via Sea Beast Hunting & Quests in Sea 2 / Sea 3 (Private Server).',
      },
      fragmentTab: {
        amountLabel: 'Amount of Fragments Required',
        sliderLabel: 'Fragment Package Tier',
        promoNote: '10,000 & 20,000 Fragment packs feature a 50% discount vs standard raid rates.',
      },
      specialTab: {
        selectLabel: 'Select Special Quest / Awakening',
        notes: 'Carried out directly with our expert raid team. Raid microchips are included if needed.',
      },
      summary: {
        title: 'Order Summary',
        officialRate: 'Official Price',
        totalEstimate: 'Total Estimated Cost',
        perOrder: '/ order',
        waMsgLabel: 'Automated WhatsApp Order Message',
        copied: 'Copied!',
        copyTemplate: 'Copy Message Template',
        orderWaBtn: 'Send Order via Official WhatsApp',
        securityNote: 'Your privacy is guaranteed: We never request personal email access or primary passwords.',
      },
    },
    catalog: {
      eyebrow: 'FULL CATALOG',
      heading: 'Official Services & Rate Sheet',
      subheading: 'Transparent and affordable rates across all seas, from level 1 up to max cap.',
      searchPlaceholder: 'Search service (e.g., level, mastery, kitsune, raid)...',
      categories: {
        all: 'All Services',
        level: 'Leveling',
        mastery: 'Mastery',
        belly: 'Belly',
        fragment: 'Fragments',
        special: 'Special & Raids',
      },
      popularBadge: 'Popular',
      orderBtn: 'Order Now',
      noResults: 'No services match your search query.',
      resetFilter: 'Reset Filters',
    },
    security: {
      eyebrow: 'CYBERSECURITY & ACCOUNT PROTECTION SOP',
      heading: 'Your Roblox Account is 100% Protected',
      subheading:
        'We put customer data protection and cybersecurity first. Follow these 4 standard operating procedure steps before handing over account credentials.',
      checklist: [
        {
          step: 1,
          title: 'Generate a Backup Code (Mandatory)',
          desc: 'Navigate to Roblox Settings > Security > 2-Step Verification > Generate Backup Codes. These recovery keys ensure you maintain full authority without disabling 2FA.',
          criticalTip: 'Keep your backup codes safe. Never share your primary recovery email with anyone!',
        },
        {
          step: 2,
          title: 'Use a Temporary Password',
          desc: 'Before handing over account access, update your Roblox password to a temporary unique phrase that is not linked to your personal email or banking.',
          criticalTip: 'Avoid reusing passwords across your personal email or social accounts.',
        },
        {
          step: 3,
          title: 'Verify 2FA with a Single One-Time Code',
          desc: 'Keep 2-Step Verification active. When our booster logs into the official Roblox game client for the first time, provide the single one-time code generated on your screen.',
          criticalTip: 'Never reveal your browser Session Cookie (.ROBLOSECURITY). We only log in via official client.',
        },
        {
          step: 4,
          title: 'Post-Boost: Reset & Sign Out All Sessions',
          desc: 'Once the admin confirms completion, immediately head to Roblox Settings > Security > click "Log Out of All Other Sessions", then restore your permanent password.',
          criticalTip: 'This guarantees all booster device sessions are permanently terminated.',
        },
      ],
      cookieWarning: {
        title: 'Security Alert: Cookie Hijacking (.ROBLOSECURITY)',
        desc: 'Beware of fraudulent boosters asking for browser session cookies or phishing links. Kepinn Joki never requests cookies or access to your recovery email. We exclusively log into the official Roblox client by hand.',
        bullets: [
          'All progress verified via WhatsApp screenshots',
          'Chat credentials purged immediately upon completion',
          'Conducted in Private VIP Servers with zero bots',
          'Refund guarantee if any technical issues arise on our end',
        ],
        cardBadge: 'Roblox Security Feature',
        cardTitle: 'Sign Out All Sessions',
        cardDesc: 'This built-in Roblox setting instantly revokes access across all other connected devices, giving you 100% control at all times.',
      },
    },
    verifier: {
      eyebrow: 'ANTI-IMPERSONATION TOOL',
      heading: 'Verify Official Admin Number',
      subheading:
        'Scammers on TikTok and Instagram frequently impersonate Kepinn Joki. Enter any phone number to verify whether it belongs to our genuine staff.',
      placeholder: 'Enter phone number (e.g., 082112834450 or +62821...)',
      checkBtn: 'Verify Number',
      officialTag: 'Registered Official Admin Number:',
      verifiedTitle: 'OFFICIAL KEPINN JOKI ADMIN VERIFIED',
      verifiedDesc: 'This number is confirmed as our official admin contact (Vanbae Store). Your transaction is safe and genuine!',
      verifiedAdminBtn: 'Chat with this Verified Admin',
      warningTitle: 'WARNING: NOT AN OFFICIAL KEPINN JOKI NUMBER',
      warningDesc: 'This number is NOT REGISTERED in our official records. Do not transfer funds or share account details!',
      officialChannels: 'Our Official Channels:',
    },
    testimonials: {
      eyebrow: 'SOCIAL PROOF & REAL RESULTS',
      heading: 'Transaction Proof & Boost Results',
      subheading:
        'Hundreds of gamers have entrusted their Blox Fruits accounts to us. All customer private information is strictly guarded.',
      items: [
        {
          id: 'testi-1',
          title: 'Kitsune Fruit Mastery 1 to 301',
          tag: 'Mastery Boost',
          customerNote: 'Awesome boosting bro... super fast response and reliable!',
          serviceDetail: 'Mastery Kitsune 1 -> 301 (3 Tails Unlocked)',
          paymentMethod: 'DuitNow QR Malaysia (IDR 9,000)',
          proofType: 'mastery',
          beforeStat: 'Mastery 1 (40/70 XP)',
          afterStat: 'Mastery 301 (Max Tails Unlock)',
          rating: 5,
        },
        {
          id: 'testi-2',
          title: 'Sea 2 Leveling (1200 -> 1800)',
          tag: 'Leveling Boost',
          customerNote: 'Fast service, account safe and sound. Highly recommended!',
          serviceDetail: '600 Levels Gained + 3M Belly Drop Bonus',
          paymentMethod: 'QRIS DANA (IDR 18,000)',
          proofType: 'level',
          beforeStat: 'Level 1200 (Kingdom of Rose)',
          afterStat: 'Level 1800 (Floating Turtle)',
          rating: 5,
        },
        {
          id: 'testi-3',
          title: 'Full Buddha Awakening + 10K Fragments',
          tag: 'Raid Boost',
          customerNote: 'Account is totally OP now for doing raids with friends, thanks Kepinn.',
          serviceDetail: 'Full Awakening Move Z-F + 10,000 Frag',
          paymentMethod: 'ShopeePay (IDR 25,000)',
          proofType: 'payment',
          beforeStat: 'Standard Buddha (V1)',
          afterStat: 'Frag 10,450 (Full Awaken Buddha)',
          rating: 5,
        },
      ],
      statLabelBefore: 'Before',
      statLabelAfter: 'After',
      customerReviewLabel: 'Customer Review',
      beforeLabel: 'Before:',
      afterLabel: 'After:',
      detailBtn: 'Details',
      moreProof: 'Want to explore hundreds of daily screenshot proofs and order updates?',
      visitChannel: 'Visit Our Official WhatsApp Channel',
      modalClose: 'Close',
      serviceDone: 'Completed Service',
      paymentMethodLabel: 'Payment Method:',
      privacyNote: 'Privacy guaranteed: Customer personal details and reference numbers are redacted.',
    },
    faq: {
      eyebrow: 'BOOSTING FAQ',
      heading: 'Frequently Asked Questions',
      subheading:
        'Everything you need to know regarding safety, payments, and workflow at Kepinn Joki.',
      contactMore: 'Have a question not addressed here?',
      contactLink: 'Ask our Admin directly via WhatsApp',
      items: [
        {
          q: 'Is my Roblox account safe from bans and anti-cheat?',
          a: 'Completely safe. We boost 100% manually through experienced players directly inside private VIP servers. We never utilize injection scripts, automated macros, or unauthorized 3rd-party tools that breach Roblox anti-cheat (Byfron).',
        },
        {
          q: 'Why should I generate a Roblox Backup Code instead of giving email access?',
          a: 'Roblox 2-Step Verification Backup Codes act as secure emergency keys. You provide just 1 one-time backup code for our booster to log in, without having to disable 2FA or hand over access to your primary email account.',
        },
        {
          q: 'How does 2FA verification work if I use an Authenticator App?',
          a: 'When our booster launches the official Roblox client, Roblox will prompt for a 6-digit 2FA code. You simply send the code shown on your phone via WhatsApp at that moment. We never request browser session cookies (.ROBLOSECURITY).',
        },
        {
          q: 'What happens if I log into the account while boosting is in progress?',
          a: 'Logging in during an active session is strictly forbidden. It disconnects our booster and can reset in-game raid or quest progress. We will notify you on WhatsApp the moment your boost is finalized.',
        },
        {
          q: 'What payment methods do you support?',
          a: 'We accept payments via QRIS (all Indonesian e-wallets like DANA, GoPay, OVO, ShopeePay, and banks BCA, Mandiri, BRI) as well as DuitNow QR for Malaysian gamers.',
        },
        {
          q: 'How long does an average boosting order take?',
          a: 'For 300-500 levels, it usually takes 2-4 hours. For 300-600 mastery, approximately 3-5 hours. Orders are processed in order of receipt in our queue.',
        },
      ],
    },
    footer: {
      tagline:
        'Trusted Blox Fruits boosting service with 100% manual gameplay on Private Servers, multi-layer account protection via Backup Code & 2FA SOP, and crystal-clear pricing.',
      operatingHours: 'Operating Hours: Daily 09:00 - 23:00 GMT+7 (WIB)',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Core Services',
      officialContactTitle: 'Official Contacts',
      waChannel: 'Official WhatsApp Channel',
      disclaimerTitle: 'Independent Disclaimer:',
      disclaimer:
        'Kepinn Joki / Vanbae Store is an independent gaming assistance service. All Blox Fruits and Roblox assets, names, and trademarks belong to Gamer Robot Inc. and Roblox Corporation. We are not officially affiliated with the game developers.',
      copyright: '© 2026 Kepinn Joki. All rights reserved.',
      priority: 'Customer account security is our number one priority.',
    },
  },
};
