import Head from 'next/head'

import Data from '../../config'
import MemberCard from '../../components/MemberCard'
import Member from '../../public/member'

export const getStaticProps = async (context) => {
  return {
    props: {
      member: Member
    }
  }
}

export default function About ({ member }) {
  return (
    <div>
      <Head>
        <title>
          {Data.menu[1]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:pl-12 relative'>
        <span className='text-2xl font-semibold'>{Data.menu[1]}</span>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
          {member.map((e, i) => {
            return (
              <div key={i}>
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
      </main>
    </div>
  )
}
