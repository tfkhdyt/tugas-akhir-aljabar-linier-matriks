// import module
import Head from 'next/head'
import { motion } from 'framer-motion'

// import config
import Data from '../../config'
import variants from '../../config/variants'

// import components
import MemberCard from '../../components/MemberCard'

// import data Member
import Member from '../../public/member'

// data fetching dengan getStaticProps
export const getStaticProps = async () => {
  return {
    props: {
      member: Member,
    },
  }
}

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
        className='container mx-auto p-6 lg:px-24 relative'
      >
        <span className='text-2xl font-semibold'>{Data.menu[3]}</span>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 justify-items-stretch'>
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
            )
          })}
        </div>
        <div className='flex justify-center w-full font-light text-gray-500 mt-6'>
          * Tidak ikut kerja kelompok
        </div>
      </motion.main>
    </div>
  )
}
