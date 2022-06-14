// import module
import { motion } from 'framer-motion';
import Head from 'next/head';

// import data Member
import Member from '../../../public/member';
// import components
import MemberCard from '../../components/MemberCard';
// import config
import Data from '../../config';
import variants from '../../config/variants';

// data fetching dengan getStaticProps
export const getStaticProps = async () => {
  return {
    props: {
      member: Member,
    },
  };
};

// export component about
export default function About({ member }) {
  // tampilan halaman about
  return (
    <div>
      <Head>
        {/* judul halaman */}
        <title>
          {Data.menu[3]} | {Data.judul}
        </title>
      </Head>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
        className='container relative mx-auto p-6 lg:px-24'
      >
        <span className='text-2xl font-semibold'>{Data.menu[3]}</span>
        <div className='mt-6 grid grid-cols-1 justify-items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* tampilkan semua data member */}
          {member.map((e, i) => {
            return (
              <div key={i}>
                {/* panggil component MemberCard */}
                <MemberCard
                  nama={e.nama}
                  nim={e.nim}
                  prodi={e.prodi}
                  foto={e.foto}
                  ig={e.ig}
                />
              </div>
            );
          })}
        </div>
        <div className='mt-6 flex w-full justify-center font-light text-gray-500'>
          * Tidak ikut kerja kelompok
        </div>
      </motion.main>
    </div>
  );
}
