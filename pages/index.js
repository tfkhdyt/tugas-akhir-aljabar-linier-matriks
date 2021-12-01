import Head from 'next/head'
import Data from '../config'

export default function Home () {
  return (
    <div>
      <Head>
        <title>
          {Data.menu[0]} | {Data.judul}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto p-6 lg:pl-12'>
        <span className='text-2xl font-bold'>{Data.menu[0]}</span>
        <p className='text-xl mt-3'>Can beres :'v</p>
      </main>
    </div>
  )
}
