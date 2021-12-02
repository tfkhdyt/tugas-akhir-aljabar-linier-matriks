import Head from 'next/head'
import Data from '../config'
import { Content } from '../components/Content'

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
        <span className='text-2xl font-semibold'>{Data.menu[0]}</span>
        <div className='mt-6'>
          <Content />
        </div>
      </main>
    </div>
  )
}
