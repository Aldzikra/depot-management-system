Siap, berdasar gambar struktur direktori yang kamu kirim, ternyatanya ini pakai **Next.js** (`next.config.ts`, `next-env.d.ts`), **Tailwind CSS/PostCSS** (`postcss.config.mjs`), dan **shadcn/ui** (`components.json`).

Berikut adalah **2 versi README.md** tanpa bagian *Team/Kelompok* (proyek personal), disesuaikan langsung dengan struktur Next.js App Router + TypeScript terbaru kamu:

---

## 📄 Versi 1: `README.md` (Gaya Modern Open-Source & Feature Showcase)

```markdown
# 🚰 DepotAir Web

> Modern, fast, and type-safe Operational Management System for Refilled Water Depots built with Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

---

## 📖 Overview

**DepotAir Web** adalah aplikasi manajemen operasional harian untuk usaha depot air minum isi ulang. Aplikasi ini memodernisasi sistem manajemen desktop konvensional menjadi aplikasi web modern yang cepat, interaktif, responsif, dan *fully type-safe*.

Aplikasi ini mencakup seluruh rantai operasional depot: mulai dari pencatatan penjualan langsung (*walk-in*), manajemen kurir/setoran, presensi harian, penggajian otomatis, hingga laporan keuangan laba-rugi secara *real-time*.

---

## ✨ Key Features

### 📊 Dashboard & Analytics
* **Real-time Stat Cards:** Visualisasi statistik harian (total galon terjual, total pendapatan, setoran masuk, dan presensi pegawai).
* **Live Price Indicators:** Menampilkan tarif acuan aktif untuk Galon Besar, Galon Kecil, dan Ongkos Kirim.
* **Recent Activity Feed:** Pantau 5 transaksi dan pengeluaran operasional terakhir secara langsung.

### 🛍️ Sales & Distribution
* **Walk-in POS:** Form pencatatan penjualan di tempat dengan kalkulasi cepat dan cetak nota/struk.
* **Courier Setoran:** Rekapitulasi hasil penjualan galon keliling yang disetorkan oleh kurir harian.
* **Rekap Galon:** Agregasi gabungan galon keluar (penjualan langsung + setoran pegawai).

### 👥 HR & Payroll Management
* **Data Pegawai:** Pengelolaan master data pegawai, gaji pokok, serta status aktif/nonaktif (*soft-delete*).
* **Attendance System:** Pencatatan presensi harian pegawai dengan proteksi anti-duplikasi.
* **Automated Payroll:** Perhitungan gaji bersih otomatis berbasis presensi bulanan dan potongan absensi.

### 💰 Finance & Global Config
* **Ledger Finance:** Pencatatan pendapatan terpadu dan pengeluaran operasional non-gaji.
* **Income Statement:** Laporan Laba-Rugi otomatis yang dihitung secara *on-the-fly*.
* **Global Pricing Engine:** Pengaturan harga acuan terpusat dengan fitur *historical snapshot protection*.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** [Next.js](https://nextjs.org/) (App Router & TypeScript)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Type Safety:** Full TypeScript implementation (`types/index.ts`)

---

## 🔒 Core Business Constraints

Sistem ini menerapkan validasi aturan bisnis berikut:

1. **Transaction Price Snapshot:** Perubahan harga global tidak mengubah nota transaksi lama.
2. **Attendance Guard:** 1 Pegawai hanya dapat melakukan **1x Absen** dan **1x Setoran** per tanggal.
3. **Monthly Payroll Protection:** Pembayaran gaji pegawai diproteksi maksimal **1x per bulan/tahun**.
4. **Soft-Delete Cascade:** Pegawai nonaktif disembunyikan dari form operasional tanpa merusak riwayat transaksi.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** v18.x atau lebih baru
* **Package Manager:** `npm`, `pnpm`, atau `yarn`

### Installation

1. **Clone repository:**
   ```bash
   git clone [https://github.com/username/depotair-web.git](https://github.com/username/depotair-web.git)
   cd depotair-web

```

2. **Install dependencies:**
```bash
npm install

```


3. **Run development server:**
```bash
npm run dev

```


Buka [http://localhost:3000](http://localhost:3000) di browser.
4. **Build for production:**
```bash
npm run build
npm run start

```



---

## 📄 License

Project ini dikembangkan di bawah lisensi MIT.

```

---

## 📄 Versi 2: `README-TECHNICAL.md` (Gaya Technical & Architecture Guide)

```markdown
# 🚰 DepotAir Web — Technical Architecture & Developer Guide

Dokumentasi teknis untuk pengembangan dan pemeliharaan codebase **DepotAir Web**.

---

## 📂 Project Structure

Project ini menggunakan struktur Next.js App Router dengan pemisahan *type definition*, *reusable UI*, dan *utility modules*:

```text
depotair-web/
├── app/                  # Next.js App Router (Pages & API Routes)
├── components/           # UI Components (shadcn/ui & Custom Components)
│   ├── ui/               # Atom components (Button, Input, Dialog, etc.)
│   └── shared/           # Business-specific components (Cards, Tables, Forms)
├── lib/                  # Helper functions, formatters, & core logic
│   ├── utils.ts          # Classnames merger (cn) & general utils
│   └── calculations.ts   # Pure functions for financial & payroll math
├── types/                # TypeScript interfaces & domain types
│   └── index.ts          # Centralized type declarations
├── components.json       # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS & Tailwind processing
└── tsconfig.json         # TypeScript compiler configuration

```

---

## ⚡ Technical Standards

### 1. Type Safety (`/types/index.ts`)

Seluruh tipe data bisnis (Pegawai, Transaksi, Setoran, Laporan) wajib didefinisikan secara tersentralisasi di `/types/index.ts`. Hindari penggunaan `any`.

### 2. UI Components & Design System

Menggunakan **shadcn/ui** berbasis **Tailwind CSS**. Setiap komponen UI baru yang reusable disimpan pada direktori `components/ui/` via CLI:

```bash
npx shadcn@latest add [component-name]

```

### 3. Business Logic Separation

Gunakan *pure functions* di folder `lib/` untuk kalkulasi matematika (seperti perhitungan gaji bersih dan rincian laba-rugi) agar mudah dites (*unit testing*) dan dipisahkan dari layer UI.

---

## ⚙️ Development Workflow

### Setup Local Environment

```bash
# 1. Install Dependencies
npm install

# 2. Run Dev Server
npm run dev

# 3. Type Checking & Linter
npm run lint

```

---

## 📌 Module Map & Views

| Module Route | Description | Primary Data Handled |
| --- | --- | --- |
| `/` | Dashboard / Menu Utama | Statistics, Recent Log, Quick Actions |
| `/transaksi` | Transaksi Di Tempat | Walk-in Sales, Invoice Generation |
| `/setoran` | Setoran Pegawai | Courier Delivery Records |
| `/pegawai` | Data Pegawai | Employee Master Data, Soft Delete |
| `/absensi` | Absensi Pegawai | Daily Attendance Tracking |
| `/rekap-galon` | Rekap Galon | Aggregated Daily Bottle Distribution |
| `/pendapatan` | Pendapatan | Revenue Aggregation |
| `/pengeluaran` | Pengeluaran Operasional | Non-salary Operational Expenses |
| `/gaji` | Gaji Pegawai | Monthly Payroll Calculations |
| `/laporan` | Laporan Keuangan | Income Statement (P&L) |
| `/pengaturan-harga` | Pengaturan Harga | Global Active Pricing |

---

## 📄 License

MIT License — Personal Portfolio / Project.

```

```
