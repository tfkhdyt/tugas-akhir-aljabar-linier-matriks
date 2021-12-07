import Head from 'next/head'

import Data from '../config'
import Content from '../components/Content'

export default function Index () {
  return (
    <div>
      <Head>
        <title>
          {Data.menu[0]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:px-12'>
        <span className='text-2xl font-semibold'>{Data.menu[0]}</span>
        <div className='mt-6'>
          <Content />
        </div>
      </main>
    </div>
  )
}
