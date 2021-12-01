import Head from 'next/head'
import Data from '../../config'
import { MemberCard } from '../../components/MemberCard'

export default function Home () {
  return (
    <div>
      <Head>
        <title>
          {Data.menu[1]} | {Data.judul}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto p-6 lg:pl-12 relative'>
        <span className='text-2xl font-bold'>{Data.menu[1]}</span>
        <div className='mt-3 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
          {Data.member.map((e) => {
            return (
              <div key={e.id}>
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
