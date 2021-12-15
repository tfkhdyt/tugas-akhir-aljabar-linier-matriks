// import module
import { createContext } from 'react'

// import file package.json
import Data from '../package.json'

// export context
export const MatrixContext = createContext()
export const AritmatikaContext = createContext()
export const CramerContext = createContext()

// export konfigurasi
export default {
  versi: Data.version,
  judul: 'Tugas Akhir Aljabar Linier & Matriks',
  logo: 'https://fti.unibba.ac.id/wp-content/uploads/2016/07/cropped-Logo-FTI-UNIBBA.png',
  menu: [
    'Operasi Aritmetika',
    'Invers Matriks',
    'SPL Aturan Cramer',
    'About Us'
  ],
  link: 'https://aljabar-linier-matriks-kelompok-2.vercel.app',
  deskripsi:
    'Tugas akhir mata kuliah Aljabar Linier dan Matriks menggunakan framework Next.js, Tailwind CSS, Math.js, dan MathJax',
  thumbnail: '/images/thumbnail.jpg',
  keywords: [
    'matriks adalah',
    'matriks singular',
    'matriks identitas',
    'matriks kolom',
    'matriks baris',
    'invers matriks 2x2',
    'invers matriks 3x3',
    'invers matriks adalah',
    'invers matriks ordo 3x3',
    'invers matriks 3x3 brainly',
    'sistem persamaan linear metode cramer',
    'sistem persamaan linear aturan cramer',
    'sistem persamaan linear dengan aturan cramer',
    'sistem persamaan linear matriks',
    'sistem persamaan linear solusi tunggal',
    'aljabar linear matriks',
    'aljabar linier dan matriks',
    'aljabar linier dan matriks teknik informatika pdf',
    'aljabar linier dan matriks teknik informatika',
    'soal aljabar linear matriks',
    'aljabar linier dan matriks kelompok 2 unibba'
  ]
}
