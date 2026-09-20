import { ServiceItem, TestimonialItem, SecurityChecklist } from './types';

export const ADMIN_PHONE = '6282112834450';
export const DISPLAY_PHONE = '+62 821-1283-4450';
export const WA_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb7h8ptCMY0KlhBFgB3P';
export const INSTAGRAM_HANDLE = 'kepinjoki.bf';
export const TIKTOK_HANDLE = 'kepinnn.joki';
export const STORE_NAME = 'Kepinn Joki (Vanbae Store)';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'joki-level',
    category: 'level',
    name: 'Joki Leveling',
    requirement: 'Berlaku Semua Sea (Sea 1, 2, 3)',
    popular: true,
    options: [
      { unit: '100 Level', price: 5000, notes: 'Bonus Belly hasil quest' },
      { unit: '300 Level', price: 12000, notes: 'Hemat Rp3.000 + Bonus Belly' },
      { unit: '500 Level', price: 15000, notes: 'Paling Populer! Hemat Rp10.000' },
      { unit: '700 Level', price: 20000, notes: 'Proses cepat 3-6 jam' },
      { unit: '1000 Level', price: 30000, notes: 'Paket Sultan hemat Rp20.000' },
    ],
  },
  {
    id: 'joki-mastery',
    category: 'mastery',
    name: 'Joki Mastery',
    requirement: 'Syarat: Minimal Level 2100 (Bisa Fruit, Sword, Gun, Melee)',
    popular: true,
    options: [
      { unit: '100 Mastery', price: 5000, notes: 'Semua jenis Devil Fruit/Sword' },
      { unit: '300 Mastery', price: 12000, notes: 'Buka Skill Utama (Kitsune/Dough)' },
      { unit: '600 Mastery (Max)', price: 18000, notes: 'Full Max Skill + Stat damage optimal' },
    ],
  },
  {
    id: 'joki-belly',
    category: 'belly',
    name: 'Joki Belly (Mata Uang)',
    requirement: 'Syarat: Khusus Sea 2 & Sea 3',
    options: [
      { unit: '1.000.000 Belly (1M)', price: 4000, notes: 'Farming Sea Beast & Quest' },
      { unit: '5.000.000 Belly (5M)', price: 15000, notes: 'Hemat Rp5.000' },
      { unit: '10.000.000 Belly (10M)', price: 25000, notes: 'Best Value untuk beli Fighting Style' },
    ],
  },
  {
    id: 'joki-fragment',
    category: 'fragment',
    name: 'Joki Fragment',
    requirement: 'Syarat: Minimal Level 2100 (Untuk Awakening & Reset Stat)',
    popular: true,
    options: [
      { unit: '1.000 Fragment', price: 3000, notes: 'Raid Normal/Advanced' },
      { unit: '5.000 Fragment', price: 12000, notes: 'Cepat & aman' },
      { unit: '10.000 Fragment', price: 15000, notes: 'PROMO DISKON 50% (Normal Rp30.000)' },
      { unit: '20.000 Fragment', price: 30000, notes: 'PROMO DISKON 50% (Normal Rp60.000)' },
    ],
  },
  {
    id: 'joki-special',
    category: 'special',
    name: 'Raid, Awakening & Quest Khusus',
    requirement: 'Berlaku Sea 2 & Sea 3 (Private Server)',
    options: [
      { unit: 'Raid Normal per Chip', price: 3000, notes: 'Flame, Ice, Light, Dark, dll' },
      { unit: 'Raid Advanced per Chip', price: 5000, notes: 'Dough, Phoenix, Buddha' },
      { unit: 'Awakening Full Skill', price: 20000, notes: 'Semua Move Z, X, C, V, F aktif' },
      { unit: 'Bahan Quest & Fighting Style', price: 15000, notes: 'Godhuman, CDK, Soul Guitar' },
    ],
  },
];

export const SECURITY_CHECKLIST: SecurityChecklist[] = [
  {
    step: 1,
    title: 'Pasang PIN Akun Roblox (Wajib)',
    desc: 'Buka Settings Roblox > Parental Controls > Aktifkan 4-digit Account PIN. PIN ini mengunci email dan password sehingga pihak lain TIDAK BISA mengganti data akun Anda.',
    criticalTip: 'Jangan pernah membagikan PIN ini kepada siapapun, termasuk kami!',
    icon: 'ShieldCheck',
  },
  {
    step: 2,
    title: 'Gunakan Password Sementara',
    desc: 'Sebelum menyerahkan akun untuk dijoki, ubah password utama Roblox Anda menjadi password sementara yang unik dan bukan password email pribadi Anda.',
    criticalTip: 'Hindari memakai password yang sama dengan akun bank, email, atau sosial media.',
    icon: 'Key',
  },
  {
    step: 3,
    title: 'Verifikasi 2FA dengan Kode Sekali Pakai',
    desc: 'Tetap aktifkan 2-Step Verification (via Authenticator App). Saat tim joki login pertama kali, kirimkan satu kode 2FA yang muncul di layar HP Anda.',
    criticalTip: 'Dilarang keras memberikan Session Cookie (.ROBLOSECURITY). Kami hanya login via client resmi.',
    icon: 'Smartphone',
  },
  {
    step: 4,
    title: 'Selesai Joki: Reset & Sign Out All',
    desc: 'Begitu admin mengonfirmasi joki telah selesai, langsung buka Settings Roblox > Security > klik "Log Out of All Other Sessions", lalu ganti password Anda kembali.',
    criticalTip: 'Ini menjamin 100% sesi perangkat pekerja terputus permanen.',
    icon: 'Lock',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    title: 'Kitsune Fruit Mastery 1 ke 301',
    tag: 'Joki Mastery',
    customerNote: 'semangat jokinya bre... mantap fast respon bgt!',
    serviceDetail: 'Mastery Kitsune 1 -> 301 (Buka 3 Tails)',
    paymentMethod: 'DuitNow QR Malaysia (IDR 9.000)',
    proofType: 'mastery',
    beforeStat: 'Mastery 1 (40/70 XP)',
    afterStat: 'Mastery 301 (339.269.610 XP)',
    rating: 5,
  },
  {
    id: 'testi-2',
    title: 'Koleksi 35 Pedang & Rare Items',
    tag: 'Inventory & Leveling',
    customerNote: 'Owh oke bang makasih banyak barang aman semua',
    serviceDetail: 'Farming Pole, Saber, Bisento, Soul Cane & Level Boost',
    paymentMethod: 'QRIS DANA (Vanbae Store)',
    proofType: 'payment',
    beforeStat: 'Sea 1 pemula',
    afterStat: 'Koleksi 35 Pedang lengkap + Level max',
    rating: 5,
  },
  {
    id: 'testi-3',
    title: 'Joki Fragment & Awakening Buddha',
    tag: 'Raid & Fragment',
    customerNote: 'Gacor abis, ga nyampe 2 jam raid kelar semua tanpa kendala',
    serviceDetail: '10.000 Fragment Promo Diskon 50%',
    paymentMethod: 'GoPay / DANA Instant',
    proofType: 'level',
    beforeStat: 'Frag 450 (Belum Awaken)',
    afterStat: 'Frag 10.450 (Full Awaken Buddha)',
    rating: 5,
  },
];

export const SECURITY_AUDIT_REPORT = {
  summaryScore: 'A+ (Setelah Rekomendasi Diterapkan)',
  overview: 'Audit menyeluruh terhadap landing page lama Kepinn Joki menemukan 4 celah keamanan kritis serta 5 hambatan konversi yang membuat pelanggan ragu untuk bertransaksi.',
  findings: [
    {
      category: 'Keamanan Akun Pelanggan (Cybersecurity & Fraud Risk)',
      severity: 'KRITIS',
      status: 'Fixed',
      title: 'Penyerahan Kredensial Polos (Plaintext Credentials Risk)',
      problem: 'Landing page lama menuliskan "serahkan data login (username & password) dengan aman" tanpa panduan teknis. Mayoritas gamer tidak paham cara mengamankan akun sehingga rawan terjadi pembajakan akun (Account Takeover), perubahan email, dan pencurian robux/item jika perangkat admin terinfeksi malware.',
      solution: 'Dibuat SOP Keamanan 4 Langkah: Wajib aktifkan Account PIN Roblox, gunakan password sementara, verifikasi 2FA sekali pakai, dan instruksi wajib "Log Out of All Other Sessions" pasca-joki. Ditegaskan juga larangan membocorkan Cookie .ROBLOSECURITY.',
    },
    {
      category: 'Privasi Data & PII (Personally Identifiable Information)',
      severity: 'TINGGI',
      status: 'Fixed',
      title: 'Eksposur Data Sensitif Pelanggan pada Bukti Chat/Transaksi',
      problem: 'Tangkapan layar WhatsApp di versi lama memperlihatkan ID Merchant DuitNow ("TD065152 VANBAE STORE"), nomor referensi transaksi bank, nomor antrian, dan nomor telepon yang berisiko disalahgunakan untuk social engineering atau chargeback fraud.',
      solution: 'Penerapan modul Safe Showcase dengan sensor otomatis (privacy masking) pada nomor referensi dan identitas personal pelanggan serta penegasan enkripsi privasi transaksi.',
    },
    {
      category: 'Kerentanan Kode Front-End & CDN Supply Chain',
      severity: 'SEDANG',
      status: 'Fixed',
      title: 'In-Browser Tailwind CDN Script & Ketiadaan Security Headers',
      problem: 'File HTML lama mengimpor `<script src="https://cdn.tailwindcss.com"></script>` langsung tanpa Subresource Integrity (SRI) atau Content Security Policy (CSP), yang sangat lambat serta rentan injeksi skrip berbahaya (XSS).',
      solution: 'Dikonversi menjadi arsitektur Vite + Tailwind CSS terkompilasi modern, dilengkapi meta header `X-Content-Type-Options: nosniff` dan `Referrer-Policy: strict-origin-when-cross-origin`.',
    },
    {
      category: 'Optimalisasi Konversi (CRO - Conversion Rate)',
      severity: 'TINGGI',
      status: 'Fixed',
      title: 'Ketiadaan Kalkulator Harga & Format Pesanan Otomatis',
      problem: 'Pelanggan lama harus menghitung harga secara manual di kepala dan mengetik pesan WhatsApp kosong. Akibatnya terjadi friksi tinggi ("Berapa bang harganya kalau saya level 1200 mau ke 1800?") yang sering berujung pembeli batal order (drop-off).',
      solution: 'Dibangun Kalkulator Estimasi Biaya Interaktif yang menghitung otomatis harga berdasarkan level awal, target level, mastery, belly, atau fragment lengkap dengan tombol "Order via WhatsApp Otomatis" dengan pesan terformat rapi.',
    },
    {
      category: 'Anti-Impersonator & Perlindungan Penipuan',
      severity: 'TINGGI',
      status: 'Fixed',
      title: 'Rentan Terhadap Akun Tiruan di TikTok / Instagram',
      problem: 'Banyak sindikat penipu membuat akun palsu mengatasnamakan "Kepinn Joki" lalu mencuri akun Roblox atau uang transfer korban.',
      solution: 'Ditambahkan fitur "Cek & Validasi Nomor WhatsApp Admin Resmi" di mana pembeli dapat memverifikasi nomor admin sebelum mentransfer uang.',
    },
  ],
};
