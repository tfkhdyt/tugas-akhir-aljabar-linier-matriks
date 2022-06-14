// import module
import { createContext } from 'react';

// import file package.json
import Data from '../../package.json';
// import file keywords
import { keywords } from '../lib/keywords.js';

// export context
export const MatrixContext = createContext();
export const AritmatikaContext = createContext();
export const CramerContext = createContext();

// export konfigurasi
export default {
  versi: Data.version,
  judul: 'Tugas Akhir Aljabar Linier & Matriks Kelompok 2',
  logo: 'https://fti.unibba.ac.id/wp-content/uploads/2016/07/cropped-Logo-FTI-UNIBBA.png',
  menu: [
    'Operasi Aritmetika',
    'Invers Matriks',
    'SPL Aturan Cramer',
    'About Us',
  ],
  link: 'https://aljabar-linier-matriks-kelompok-2.vercel.app',
  deskripsi:
    'Tugas akhir mata kuliah Aljabar Linier dan Matriks menggunakan framework Next.js, Tailwind CSS, Math.js, dan MathJax',
  thumbnail: '/images/thumbnail.jpg',
  keywords,
};
